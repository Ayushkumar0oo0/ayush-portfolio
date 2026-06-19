import Link from "next/link";
import { getHero } from "@/actions/hero.actions";

export default async function Navbar() {
  const hero = await getHero();

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800 bg-black/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link
          href="/"
          className="text-3xl font-black"
        >
          Ayush
          <span className="text-blue-500">.</span>
        </Link>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-400 hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {hero.resumeUrl && (
          <a
            href={hero.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 transition"
          >
            Resume
          </a>
        )}

      </div>
    </nav>
  );
}