import {
  getSkills,
  createSkill,
  deleteSkill,
} from "@/actions/skill.actions";

export default async function SkillsPage() {
  const skills = await getSkills();

  return (
    <div className="space-y-10">

      {/* Header */}

      <div>
        <p className="text-blue-500 uppercase tracking-widest text-sm mb-2">
          Skills
        </p>

        <h1 className="text-5xl font-black">
          Skills CMS
        </h1>

        <p className="text-zinc-500 mt-3">
          Manage technologies shown on your portfolio.
        </p>
      </div>

      {/* Add Skill */}

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Add New Skill
        </h2>

        <form
          action={createSkill}
          className="space-y-6"
        >

          <div className="grid md:grid-cols-2 gap-6">

            <input
              name="title"
              required
              placeholder="Next.js"
              className="p-4 rounded-xl bg-zinc-950 border border-zinc-800"
            />

            <select
              name="category"
              required
              className="p-4 rounded-xl bg-zinc-950 border border-zinc-800"
            >
              <option value="">
                Select Category
              </option>

              <option>
                Frontend
              </option>

              <option>
                Backend
              </option>

              <option>
                Database
              </option>

              <option>
                Programming
              </option>

              <option>
                Tools
              </option>

            </select>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <input
              name="icon"
              placeholder="N"
              className="p-4 rounded-xl bg-zinc-950 border border-zinc-800"
            />

            <input
              name="level"
              type="number"
              min="0"
              max="100"
              defaultValue="80"
              className="p-4 rounded-xl bg-zinc-950 border border-zinc-800"
            />

            <input
              name="order"
              type="number"
              defaultValue="0"
              className="p-4 rounded-xl bg-zinc-950 border border-zinc-800"
            />

          </div>

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              name="featured"
              defaultChecked
            />

            Featured Skill

          </label>

          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500"
          >
            Add Skill
          </button>

        </form>

      </div>

      {/* Existing Skills */}

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-2xl font-bold">
            Existing Skills
          </h2>

          <span className="text-zinc-500">
            {skills.length} Skill(s)
          </span>

        </div>

        {skills.length === 0 ? (
          <div className="text-zinc-500">
            No skills added yet.
          </div>
        ) : (
          <div className="space-y-5">

            {skills.map(
              (skill: any) => (
                <div
                  key={skill._id}
                  className="border border-zinc-800 rounded-2xl p-5"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center font-bold">
                        {skill.icon || "⚡"}
                      </div>

                      <div>

                        <h3 className="font-semibold text-lg">
                          {skill.title}
                        </h3>

                        <p className="text-zinc-500 text-sm">
                          {skill.category}
                        </p>

                      </div>

                    </div>

                    <div className="flex items-center gap-4">

                      <span className="px-3 py-1 rounded-full bg-blue-600">
                        {skill.level}%
                      </span>

                      <form
                        action={async () => {
                          "use server";

                          await deleteSkill(
                            skill._id
                          );
                        }}
                      >
                        <button
                          className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500"
                        >
                          Delete
                        </button>
                      </form>

                    </div>

                  </div>

                  <div className="mt-4 h-2 bg-zinc-800 rounded-full overflow-hidden">

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
        )}

      </div>

    </div>
  );
}