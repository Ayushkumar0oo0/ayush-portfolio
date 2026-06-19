import SkillForm from "@/components/admin/SkillForm";
import {
  createSkill,
  getSkills,
  deleteSkill,
} from "@/actions/skill.actions";

export default async function SkillsPage() {
  const skills = await getSkills();

  return (
    <div className="space-y-10">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-black">
          Skills
        </h1>

        <p className="text-zinc-500 mt-2">
          Manage portfolio skills and technologies.
        </p>
      </div>

      {/* Add Skill */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Add New Skill
        </h2>

        <SkillForm action={createSkill} />

      </div>

      {/* Skills List */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Existing Skills
        </h2>

        <div className="space-y-4">

          {skills.length === 0 ? (
            <p className="text-zinc-500">
              No skills found.
            </p>
          ) : (
            skills.map(

            skills.map((skill: any) => (
              <div
                key={skill._id}
                className="flex items-center justify-between p-5 rounded-2xl border border-zinc-800 bg-zinc-950"
              >
                <div>
                  <h3 className="font-semibold">
                    {skill.title}
                  </h3>

                  <p className="text-sm text-zinc-500">
                    {skill.category}
                  </p>
                </div>

                <form
                  action={async () => {
                    "use server";
                    await deleteSkill(skill._id);
                  }}
                >
                  <button
                    className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500"
                  >
                    Delete
                  </button>
                </form>
              </div>
            ))
          )}

        </div>

      </div>

    </div>
  );
}