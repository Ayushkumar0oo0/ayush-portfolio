"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  FolderKanban,
  Code2,
  User,
  Mail,
} from "lucide-react";

const links = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Projects",
    href: "/admin/projects",
    icon: FolderKanban,
  },
  {
    title: "Skills",
    href: "/admin/skills",
    icon: Code2,
  },
  {
    title: "Hero",
    href: "/admin/hero",
    icon: User,
  },
  {
    title: "Messages",
    href: "/admin/messages",
    icon: Mail,
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-zinc-950 border-r border-zinc-800">

      <div className="p-8 border-b border-zinc-800">
        <h1 className="text-3xl font-black">
          Ayush
          <span className="text-blue-500">.</span>
        </h1>

        <p className="text-zinc-500 text-sm mt-2">
          Portfolio CMS
        </p>
      </div>

      <nav className="p-4 space-y-2">

        {links.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 transition"
            >
              <Icon size={18} />

              {item.title}
            </Link>
          );
        })}

      </nav>

    </aside>
  );
}