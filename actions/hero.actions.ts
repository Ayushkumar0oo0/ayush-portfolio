"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "@/lib/mongodb";
import Hero from "@/models/Hero";

export async function getHero() {
  await connectDB();

  let hero = await Hero.findOne();

  if (!hero) {
    hero = await Hero.create({
      name: "Ayush Kumar",
      title: "Full Stack Developer",
      description:
        "Building scalable web applications using Next.js, Node.js, MongoDB and modern web technologies.",
    });
  }

  return JSON.parse(JSON.stringify(hero));
}

export async function updateHero(formData: FormData) {
  await connectDB();

  const data = {
    name: formData.get("name"),
    title: formData.get("title"),
    description: formData.get("description"),
    imageUrl: formData.get("imageUrl"),
    resumeUrl: formData.get("resumeUrl"),
    githubUrl: formData.get("githubUrl"),
    linkedinUrl: formData.get("linkedinUrl"),
    twitterUrl: formData.get("twitterUrl"),
    email: formData.get("email"),
  };

  const existingHero = await Hero.findOne();

  if (existingHero) {
    await Hero.findByIdAndUpdate(existingHero._id, data);
  } else {
    await Hero.create(data);
  }

  revalidatePath("/");
  revalidatePath("/admin/hero");

  return {
    success: true,
  };
}