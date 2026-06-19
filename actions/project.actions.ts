"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";

export async function createProject(
  formData: FormData
) {
  await connectDB();

  const techStack =
    formData
      .get("techStack")
      ?.toString()
      .split(",")
      .map((tech) => tech.trim())
      .filter(Boolean) || [];

  await Project.create({
    title: formData.get("title"),
    description: formData.get("description"),
    imageUrl: formData.get("imageUrl"),
    githubUrl: formData.get("githubUrl"),
    liveUrl: formData.get("liveUrl"),

    techStack,

    featured:
      formData.get("featured") === "on",
  });

  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/admin/projects");
}

export async function getProjects() {
  await connectDB();

  const projects = await Project.find()
    .sort({
      featured: -1,
      createdAt: -1,
    });

  return JSON.parse(
    JSON.stringify(projects)
  );
}

export async function getProjectById(
  id: string
) {
  await connectDB();

  const project =
    await Project.findById(id);

  return JSON.parse(
    JSON.stringify(project)
  );
}

export async function updateProject(
  id: string,
  formData: FormData
) {
  await connectDB();

  const techStack =
    formData
      .get("techStack")
      ?.toString()
      .split(",")
      .map((tech) => tech.trim())
      .filter(Boolean) || [];

  await Project.findByIdAndUpdate(id, {
    title: formData.get("title"),
    description: formData.get("description"),
    imageUrl: formData.get("imageUrl"),
    githubUrl: formData.get("githubUrl"),
    liveUrl: formData.get("liveUrl"),

    techStack,

    featured:
      formData.get("featured") === "on",
  });

  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/admin/projects");
}

export async function deleteProject(
  id: string
) {
  await connectDB();

  await Project.findByIdAndDelete(id);

  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/admin/projects");
}