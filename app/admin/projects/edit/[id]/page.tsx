import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProjects,
  updateProject,
} from "@/actions/project.actions";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditProjectPage({
  params,
}: PageProps) {
  const { id } = await params;

  const projects = await getProjects();

  const project = projects.find(
    (p: any) => p._id === id
  );

  if (!project) {
    notFound();
  }

  async function updateAction(
    formData: FormData
  ) {
    "use server";

    await updateProject(id, formData);
  }

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
          Edit Project
        </h1>

        <p className="text-zinc-500 mt-2">
          Update project information.
        </p>

      </div>

      <form
        action={updateAction}
        className="space-y-8"
      >

        {/* Basic Info */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-xl font-bold mb-6">
            Basic Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 text-sm text-zinc-400">
                Title
              </label>

              <input
                name="title"
                defaultValue={project.title}
                required
                className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-zinc-400">
                Slug
              </label>

              <input
                name="slug"
                defaultValue={project.slug}
                required
                className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800"
              />
            </div>

          </div>

          <div className="mt-6">

            <label className="block mb-2 text-sm text-zinc-400">
              Short Description
            </label>

            <textarea
              name="shortDescription"
              rows={3}
              defaultValue={
                project.shortDescription
              }
              required
              className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800"
            />

          </div>

          <div className="mt-6">

            <label className="block mb-2 text-sm text-zinc-400">
              Full Description
            </label>

            <textarea
              name="fullDescription"
              rows={8}
              defaultValue={
                project.fullDescription
              }
              required
              className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800"
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
                Image URL
              </label>

              <input
                name="imageUrl"
                defaultValue={
                  project.imageUrl
                }
                className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-zinc-400">
                Video URL
              </label>

              <input
                name="videoUrl"
                defaultValue={
                  project.videoUrl
                }
                className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800"
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

            <input
              name="githubUrl"
              defaultValue={
                project.githubUrl
              }
              placeholder="GitHub URL"
              className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800"
            />

            <input
              name="liveUrl"
              defaultValue={
                project.liveUrl
              }
              placeholder="Live Demo URL"
              className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800"
            />

          </div>

        </div>

        {/* Tech Stack */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-xl font-bold mb-6">
            Technologies
          </h2>

          <input
            name="techStack"
            defaultValue={
              project.techStack?.join(", ")
            }
            className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800"
          />

        </div>

        {/* Settings */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-xl font-bold mb-6">
            Settings
          </h2>

          <div className="space-y-6">

            <select
              name="status"
              defaultValue={
                project.status
              }
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

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                name="featured"
                defaultChecked={
                  project.featured
                }
              />

              <span>
                Featured Project
              </span>

            </label>

          </div>

        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold text-lg"
        >
          Update Project
        </button>

      </form>

    </div>
  );
}