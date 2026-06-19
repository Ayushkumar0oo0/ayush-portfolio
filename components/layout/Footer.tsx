export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row justify-between gap-10">

          <div>
            <h2 className="text-3xl font-black">
              Ayush
              <span className="text-blue-500">.</span>
            </h2>

            <p className="text-zinc-400 mt-3 max-w-md">
              Full Stack Developer focused on building
              scalable, modern and high-performance web
              applications using Next.js, Node.js and MongoDB.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-zinc-400">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Connect
            </h3>

            <div className="flex flex-col gap-3 text-zinc-400">

              <a
                href="mailto:ayush9123288616@gmail.com"
              >
                Email
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-zinc-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">

          <p>
            © 2026 Ayush Kumar. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <p>
              Built with Next.js + MongoDB
            </p>

            <a
              href="/admin"
              className="text-xs text-zinc-700 hover:text-blue-500 transition"
            >
              Admin Login
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}