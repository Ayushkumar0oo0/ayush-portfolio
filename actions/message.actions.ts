"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "@/lib/mongodb"; // Make sure this path points to your actual mongodb file
import Message from "@/models/Message";    // Make sure this path points to your actual Message model

export async function createMessage(formData: FormData) {
  await connectDB();

  await Message.create({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  revalidatePath("/");

  return {
    success: true,
  };
}

export async function getMessages() {
  await connectDB();

  const messages = await Message.find()
    .sort({ createdAt: -1 })
    .lean();

  return JSON.parse(JSON.stringify(messages));
}

export async function markMessageAsRead(id: string) {
  await connectDB();

  await Message.findByIdAndUpdate(id, {
    read: true,
  });

  revalidatePath("/admin/messages");

  return {
    success: true,
  };
}

export async function deleteMessage(id: string) {
  await connectDB();

  await Message.findByIdAndDelete(id);

  revalidatePath("/admin/messages");

  return {
    success: true,
  };
}