import { getHero, updateHero } from "@/actions/hero.actions";
import HeroForm from "@/components/admin/HeroForm";

export default async function HeroAdminPage() {
  const hero = await getHero();

  return (
    <div className="space-y-10">

      <div>
        <h1 className="text-5xl font-black">
          Hero Section
        </h1>

        <p className="text-zinc-500 mt-3">
          Manage your homepage identity.
        </p>
      </div>

      <HeroForm
        hero={hero}
        action={updateHero}
      />

    </div>
  );
}