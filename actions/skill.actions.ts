"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "@/lib/mongodb";
import Skill from "@/models/Skill";

export async function createSkill(
  formData: FormData
) {
  await connectDB();

  await Skill.create({
    title: formData.get("title"),
    category: formData.get("category"),
    icon: formData.get("icon"),

    level: Number(
      formData.get("level")
    ),

    order: Number(
      formData.get("order")
    ),

    featured:
      formData.get("featured") === "on",
  });

  revalidatePath("/");
  revalidatePath("/admin/skills");
}

export async function getSkills() {
  await connectDB();

  const skills = await Skill.find()
    .sort({
      order: 1,
      level: -1,
    });

  return JSON.parse(
    JSON.stringify(skills)
  );
}

export async function getFeaturedSkills() {
  await connectDB();

  const skills = await Skill.find({
    featured: true,
  }).sort({
    order: 1,
    level: -1,
  });

  return JSON.parse(
    JSON.stringify(skills)
  );
}

export async function deleteSkill(
  id: string
) {
  await connectDB();

  await Skill.findByIdAndDelete(id);

  revalidatePath("/");
  revalidatePath("/admin/skills");
}