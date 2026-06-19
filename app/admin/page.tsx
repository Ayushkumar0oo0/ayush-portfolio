import DashboardCard from "@/components/admin/DashboardCard";
import {
  FolderKanban,
  Code2,
  Mail,
  User,
} from "lucide-react";

export default async function AdminPage() {
  return (
    <div className="space-y-10">

      {/* Header */}
      <div>
        <h1 className="text-5xl font-black">
          Dashboard
        </h1>

        <p className="text-zinc-500 mt-3">
          Welcome back, Ayush 👋
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <DashboardCard
          title="Projects"
          value="0"
          icon={
            <FolderKanban className="text-blue-500" />
          }
        />

        <DashboardCard
          title="Skills"
          value="0"
          icon={
            <Code2 className="text-green-500" />
          }
        />

        <DashboardCard
          title="Messages"
          value="0"
          icon={
            <Mail className="text-yellow-500" />
          }
        />

        <DashboardCard
          title="Hero Section"
          value="1"
          icon={
            <User className="text-purple-500" />
          }
        />

      </div>

      {/* Quick Actions */}
      <div className="grid lg:grid-cols-2 gap-6">

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Portfolio Status
          </h2>

          <div className="space-y-4 text-zinc-400">

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              MongoDB Connected
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              Cloudinary Connected
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              Admin Dashboard Active
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              Portfolio Online
            </div>

          </div>

        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Quick Navigation
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <a
              href="/admin/projects"
              className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-blue-500 transition"
            >
              <h3 className="font-semibold">
                Projects
              </h3>

              <p className="text-sm text-zinc-500 mt-2">
                Manage portfolio projects
              </p>
            </a>

            <a
              href="/admin/skills"
              className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-blue-500 transition"
            >
              <h3 className="font-semibold">
                Skills
              </h3>

              <p className="text-sm text-zinc-500 mt-2">
                Manage skills
              </p>
            </a>

            <a
              href="/admin/hero"
              className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-blue-500 transition"
            >
              <h3 className="font-semibold">
                Hero Section
              </h3>

              <p className="text-sm text-zinc-500 mt-2">
                Update homepage
              </p>
            </a>

            <a
              href="/admin/messages"
              className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-blue-500 transition"
            >
              <h3 className="font-semibold">
                Messages
              </h3>

              <p className="text-sm text-zinc-500 mt-2">
                View contacts
              </p>
            </a>

          </div>

        </div>

      </div>

      {/* Recent Activity */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Recent Activity
        </h2>

        <div className="space-y-4 text-zinc-400">

          <p>
            🚀 Portfolio CMS successfully configured.
          </p>

          <p>
            📂 Ready to add your first project.
          </p>

          <p>
            🎯 Ready to upload hero image.
          </p>

          <p>
            💻 Ready to manage skills.
          </p>

        </div>

      </div>

    </div>
  );
}