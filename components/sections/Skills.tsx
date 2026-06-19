import { getFeaturedSkills } from "@/actions/skill.actions";

export default async function Skills() {
  const skills = await getFeaturedSkills();

  const groupedSkills = skills.reduce(
    (acc: any, skill: any) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }

      acc[skill.category].push(skill);

      return acc;
    },
    {}
  );

  return (
    <section
      id="skills"
      className="py-32 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-blue-500 text-sm mb-4">
            Skills
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black">
            Technologies
            <br />
            I Work With
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-zinc-400 text-lg leading-8">
            Technologies, frameworks and tools I use
            to build modern web applications and
            scalable backend systems.
          </p>

        </div>

        {/* Categories */}

        <div className="grid lg:grid-cols-2 gap-8">

          {Object.entries(
            groupedSkills
          ).map(
            ([category, items]: any) => (
              <div
                key={category}
                className="p-8 rounded-3xl border border-zinc-800 bg-zinc-950"
              >

                <h3 className="text-3xl font-bold mb-8">
                  {category}
                </h3>

                <div className="space-y-6">

                  {items.map(
                    (skill: any) => (
                      <div
                        key={skill._id}
                      >

                        <div className="flex items-center justify-between mb-2">

                          <div className="flex items-center gap-3">

                            <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center font-bold">
                              {skill.icon ||
                                "⚡"}
                            </div>

                            <span className="font-medium">
                              {skill.title}
                            </span>

                          </div>

                          <span className="text-blue-400 font-semibold">
                            {skill.level}%
                          </span>

                        </div>

                        <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">

                          <div
                            className="h-full bg-blue-500"
                            style={{
                              width: `${skill.level}%`,
                            }}
                          />

                        </div>

                      </div>
                    )
                  )}

                </div>

              </div>
            )
          )}

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6 mt-20">

          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 text-center">

            <h3 className="text-4xl font-black text-blue-500">
              {skills.length}+
            </h3>

            <p className="text-zinc-500 mt-2">
              Skills
            </p>

          </div>

          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 text-center">

            <h3 className="text-4xl font-black text-blue-500">
              MERN
            </h3>

            <p className="text-zinc-500 mt-2">
              Stack
            </p>

          </div>

          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 text-center">

            <h3 className="text-4xl font-black text-blue-500">
              Full
            </h3>

            <p className="text-zinc-500 mt-2">
              Stack
            </p>

          </div>

          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 text-center">

            <h3 className="text-4xl font-black text-blue-500">
              Modern
            </h3>

            <p className="text-zinc-500 mt-2">
              Web Dev
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}