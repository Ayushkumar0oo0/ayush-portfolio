import { getHero } from "@/actions/hero.actions";

export default async function Hero() {
  const hero = await getHero();

  return (
    
    <section className="min-h-screen flex items-center pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}
          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm mb-8">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              Available for Internship & Freelance
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-none">
              {hero.name?.split(" ")[0]}
              <span className="text-blue-500">.</span>
              <br />
              {hero.name?.split(" ").slice(1).join(" ")}
            </h1>

            <h2 className="text-2xl lg:text-4xl font-bold text-zinc-300 mt-8">
              {hero.title}
            </h2>

            <p className="text-zinc-400 text-lg leading-8 mt-8 max-w-2xl">
              {hero.description}
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              {hero.resumeUrl && (
                <a
                  href={hero.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold"
                >
                  Download Resume
                </a>
              )}

              <a
                href="#projects"
                className="px-8 py-4 rounded-xl border border-zinc-700 hover:border-zinc-500 transition"
              >
                View Projects
              </a>

            </div>

            <div className="flex gap-4 mt-8">

              {hero.githubUrl && (
                <a
                  href={hero.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white"
                >
                  GitHub
                </a>
              )}

              {hero.linkedinUrl && (
                <a
                  href={hero.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white"
                >
                  LinkedIn
                </a>
              )}

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16">

              <div>
                <h3 className="text-4xl font-black">
                  10+
                </h3>
                <p className="text-zinc-500">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black">
                  3+
                </h3>
                <p className="text-zinc-500">
                  Years Learning
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black">
                  MERN
                </h3>
                <p className="text-zinc-500">
                  Stack
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full"></div>

              <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] rounded-[40px] border border-zinc-800 bg-zinc-900 overflow-hidden">

                {hero.imageUrl ? (
                  <img
                    src={hero.imageUrl}
                    alt={hero.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">

                      <div className="w-24 h-24 mx-auto rounded-full bg-zinc-800 flex items-center justify-center text-4xl font-black">
                        A
                      </div>

                      <p className="mt-6 text-zinc-500">
                        Profile Image
                      </p>

                    </div>
                  </div>
                )}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}