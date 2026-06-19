"use client";

import { useState } from "react";
import CloudinaryUpload from "./CloudinaryUpload";

interface ProjectFormProps {
  action: (formData: FormData) => Promise<void>;

  defaultValues?: {
    title?: string;
    description?: string;
    imageUrl?: string;
    githubUrl?: string;
    liveUrl?: string;
    techStack?: string[];
    featured?: boolean;
  };
}

export default function ProjectForm({
  action,
  defaultValues,
}: ProjectFormProps) {
  const [imageUrl, setImageUrl] = useState(
    defaultValues?.imageUrl || ""
  );

  return (
    <form
      action={(formData) => {
        formData.set("imageUrl", imageUrl);
        return action(formData);
      }}
      className="space-y-8"
    >
      {/* Image Upload */}

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
        <h2 className="text-xl font-bold mb-4">
          Project Image
        </h2>

        <CloudinaryUpload
          value={imageUrl}
          onChange={setImageUrl}
        />
      </div>

      {/* Details */}

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 space-y-5">

        <h2 className="text-xl font-bold">
          Project Details
        </h2>

        <input
          name="title"
          required
          defaultValue={defaultValues?.title}
          placeholder="Project Title"
          className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800 outline-none focus:border-blue-500"
        />

        <textarea
          name="description"
          required
          rows={6}
          defaultValue={defaultValues?.description}
          placeholder="Project Description"
          className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800 outline-none focus:border-blue-500"
        />

        <input
          name="githubUrl"
          defaultValue={defaultValues?.githubUrl}
          placeholder="GitHub Repository URL"
          className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800 outline-none focus:border-blue-500"
        />

        <input
          name="liveUrl"
          defaultValue={defaultValues?.liveUrl}
          placeholder="Live Demo URL"
          className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800 outline-none focus:border-blue-500"
        />

        <input
          name="techStack"
          defaultValue={
            defaultValues?.techStack?.join(", ")
          }
          placeholder="Next.js, TypeScript, MongoDB, Cloudinary"
          className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800 outline-none focus:border-blue-500"
        />

        <label className="flex items-center gap-3 text-zinc-300">
          <input
            type="checkbox"
            name="featured"
            defaultChecked={
              defaultValues?.featured
            }
            className="w-5 h-5"
          />

          Featured Project
        </label>

        <input
          type="hidden"
          name="imageUrl"
          value={imageUrl}
          readOnly
        />

      </div>

      {/* Submit */}

      <button
        type="submit"
        className="w-full h-14 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition"
      >
        Save Project
      </button>
    </form>
  );
}