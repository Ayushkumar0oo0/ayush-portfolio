import { getProjects } from "@/actions/project.actions";

export default async function FeaturedProjects() {
  const projects = await getProjects();

  return (
    <section
      id="projects"
      className="py-32 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-blue-500 text-sm mb-4">
            Projects
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black">
            Featured
            <br />
            Work
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-zinc-400 text-lg leading-8">
            Real-world applications, full-stack systems,
            admin dashboards, cloud integrations and
            scalable web experiences.
          </p>

        </div>

        {/* Empty State */}

        {projects.length === 0 && (
          <div className="text-center py-20">

            <h3 className="text-3xl font-bold mb-4">
              No Projects Yet
            </h3>

            <p className="text-zinc-500">
              Add projects from the admin dashboard.
            </p>

          </div>
        )}

        {/* Projects */}

        <div className="space-y-24">

          {projects.map(
            (
              project: any,
              index: number
            ) => (
              <div
                key={project._id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }`}
              >

                {/* Image */}

                <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">

                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
                  />

                </div>

                {/* Content */}

                <div>

                  {project.featured && (
                    <span className="inline-flex px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-400 text-sm mb-5">
                      Featured Project
                    </span>
                  )}

                  <h3 className="text-3xl lg:text-5xl font-black mb-6">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 text-lg leading-8 mb-8">
                    {project.description}
                  </p>

                  {/* Tech Stack */}

                  <div className="flex flex-wrap gap-3 mb-8">

                    {project.techStack?.map(
                      (
                        tech: string
                      ) => (
                        <span
                          key={tech}
                          className="px-4 py-2 rounded-xl border border-zinc-800 bg-zinc-950 text-sm"
                        >
                          {tech}
                        </span>
                      )
                    )}

                  </div>

                  {/* Links */}

                  <div className="flex flex-wrap gap-4">

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-medium"
                      >
                        Live Demo
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl border border-zinc-700 hover:border-zinc-500 transition"
                      >
                        GitHub
                      </a>
                    )}

                  </div>

                </div>

              </div>
            )
          )}

        </div>

      </div>
    </section>
  );
}