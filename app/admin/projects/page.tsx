import {
  createProject,
  getProjects,
  deleteProject,
} from "@/actions/project.actions";

import ProjectForm from "@/components/admin/ProjectForm";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="space-y-10">

      {/* Header */}
      <div>

        <h1 className="text-5xl font-black">
          Projects
        </h1>

        <p className="text-zinc-500 mt-3">
          Manage your portfolio projects.
        </p>

      </div>

      {/* Create Project */}

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

        <h2 className="text-2xl font-bold mb-8">
          Add New Project
        </h2>

        <ProjectForm
          action={createProject}
        />

      </div>

      {/* Existing Projects */}

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-2xl font-bold">
            Existing Projects
          </h2>

          <div className="text-sm text-zinc-500">
            {projects.length} Project(s)
          </div>

        </div>

        {projects.length === 0 ? (
          <div className="text-center py-20">

            <h3 className="text-xl font-semibold">
              No Projects Yet
            </h3>

            <p className="text-zinc-500 mt-3">
              Create your first project above.
            </p>

          </div>
        ) : (
          <div className="grid gap-6">

            {projects.map(
              (project: any) => (
                <div
                  key={project._id}
                  className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden"
                >

                  {/* Image */}

                  {project.imageUrl && (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                  )}

                  {/* Content */}

                  <div className="p-6">

                    <div className="flex items-center justify-between mb-4">

                      <h3 className="text-2xl font-bold">
                        {project.title}
                      </h3>

                      {project.featured && (
                        <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm">
                          Featured
                        </span>
                      )}

                    </div>

                    <p className="text-zinc-400 mb-6">
                      {project.description}
                    </p>

                    {/* Tech Stack */}

                    {project.techStack?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">

                        {project.techStack.map(
                          (
                            tech: string
                          ) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm"
                            >
                              {tech}
                            </span>
                          )
                        )}

                      </div>
                    )}

                    {/* Links */}

                    <div className="flex gap-4 mb-6">

                      {project.githubUrl && (
                        <a
                          href={
                            project.githubUrl
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700"
                        >
                          GitHub
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={
                            project.liveUrl
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500"
                        >
                          Live Demo
                        </a>
                      )}

                    </div>

                    {/* Delete */}

                    <form
                      action={async () => {
                        "use server";

                        await deleteProject(
                          project._id
                        );
                      }}
                    >
                      <button
                        className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500"
                      >
                        Delete Project
                      </button>
                    </form>

                  </div>

                </div>
              )
            )}

          </div>
        )}

      </div>

    </div>
  );
}