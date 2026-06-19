"use client";

import { useState } from "react";
import { createProject } from "@/actions/project.actions";
import Link from "next/link";

export default function CreateProjectPage() {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div className="max-w-5xl">

      {/* Header */}
      <div className="mb-10">
        <Link
          href="/admin/projects"
          className="text-zinc-500 hover:text-white transition"
        >
          ← Back to Projects
        </Link>

        <h1 className="text-4xl font-black mt-4">
          Create New Project
        </h1>

        <p className="text-zinc-500 mt-2">
          Add a new portfolio project.
        </p>
      </div>

      {/* Form */}
      <form
        action={createProject}
        className="space-y-8"
      >
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-xl font-bold mb-6">
            Basic Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 text-sm text-zinc-400">
                Project Title
              </label>

              <input
                name="title"
                required
                className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800 focus:outline-none"
                placeholder="Portfolio Website"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-zinc-400">
                Slug
              </label>

              <input
                name="slug"
                required
                className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800 focus:outline-none"
                placeholder="portfolio-website"
              />
            </div>

          </div>

          <div className="mt-6">
            <label className="block mb-2 text-sm text-zinc-400">
              Short Description
            </label>

            <textarea
              name="shortDescription"
              required
              rows={3}
              className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800 focus:outline-none"
            />
          </div>

          <div className="mt-6">
            <label className="block mb-2 text-sm text-zinc-400">
              Full Description
            </label>

            <textarea
              name="fullDescription"
              required
              rows={8}
              className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800 focus:outline-none"
            />
          </div>

        </div>

        {/* Media */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-xl font-bold mb-6">
            Media
          </h2>

          <div className="space-y-6">

            <div>
              <label className="block mb-2 text-sm text-zinc-400">
                Project Image URL
              </label>

              <input
                name="imageUrl"
                value={imageUrl}
                onChange={(e) =>
                  setImageUrl(e.target.value)
                }
                className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800"
                placeholder="https://..."
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-zinc-400">
                Project Video URL
              </label>

              <input
                name="videoUrl"
                className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800"
                placeholder="https://..."
              />
            </div>

          </div>

        </div>

        {/* Links */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-xl font-bold mb-6">
            Links
          </h2>

          <div className="space-y-6">

            <div>
              <label className="block mb-2 text-sm text-zinc-400">
                GitHub URL
              </label>

              <input
                name="githubUrl"
                className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-zinc-400">
                Live Demo URL
              </label>

              <input
                name="liveUrl"
                className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800"
              />
            </div>

          </div>

        </div>

        {/* Tech Stack */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-xl font-bold mb-6">
            Technologies
          </h2>

          <input
            name="techStack"
            className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800"
            placeholder="Next.js, MongoDB, TypeScript"
          />

        </div>

        {/* Settings */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-xl font-bold mb-6">
            Settings
          </h2>

          <div className="space-y-6">

            <div>
              <label className="block mb-2 text-sm text-zinc-400">
                Status
              </label>

              <select
                name="status"
                className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800"
              >
                <option value="Completed">
                  Completed
                </option>

                <option value="In Progress">
                  In Progress
                </option>

                <option value="Draft">
                  Draft
                </option>
              </select>
            </div>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                name="featured"
              />

              <span>
                Show in Featured Projects
              </span>
            </label>

          </div>

        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold text-lg"
        >
          Create Project
        </button>

      </form>

    </div>
  );
}