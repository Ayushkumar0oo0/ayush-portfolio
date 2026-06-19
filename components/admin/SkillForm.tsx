interface SkillFormProps {
  action: (formData: FormData) => Promise<void>;
}

export default function SkillForm({
  action,
}: SkillFormProps) {
  return (
    <form
      action={action}
      className="space-y-6"
    >
      <input
        name="title"
        placeholder="React"
        className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800"
      />

      <input
        name="category"
        placeholder="Frontend"
        className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800"
      />

      <input
        name="level"
        type="number"
        min="0"
        max="100"
        placeholder="90"
        className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-800"
      />

      <button
        type="submit"
        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition"
      >
        Add Skill
      </button>
    </form>
  );
}