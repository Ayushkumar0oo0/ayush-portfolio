export default function About() {
  return (
    <section
      id="about"
      className="py-32 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-blue-500 text-sm mb-4">
            About Me
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black">
            Building Modern
            <br />
            Digital Experiences
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-zinc-400 text-lg leading-8">
            Passionate Computer Science student and
            Full Stack Developer focused on creating
            scalable web applications, clean user
            experiences and production-ready software.
          </p>

        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left */}
          <div>

            <h3 className="text-4xl font-black mb-8">
              Who Am I?
            </h3>

            <div className="space-y-6 text-zinc-400 text-lg leading-9">

              <p>
                I am Ayush Kumar, a B.Tech Computer
                Science Engineering student with a
                strong interest in Full Stack
                Development, Software Engineering,
                Backend Systems and Cloud Technologies.
              </p>

              <p>
                My goal is to become a professional
                Software Engineer capable of building
                high-quality products used by thousands
                of users.
              </p>

              <p>
                I enjoy solving real-world problems
                through code and continuously improving
                my knowledge of Data Structures,
                Algorithms and System Design.
              </p>

            </div>

          </div>

          {/* Right */}
          <div className="space-y-6">

            <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-950">

              <h4 className="text-2xl font-bold mb-3">
                🎓 Education
              </h4>

              <p className="text-zinc-400 leading-8">
                B.Tech in Computer Science Engineering
                (3rd Year)
              </p>

            </div>

            <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-950">

              <h4 className="text-2xl font-bold mb-3">
                💻 Development
              </h4>

              <p className="text-zinc-400 leading-8">
                React, Next.js, Node.js, MongoDB,
                Express.js, TypeScript, Java and MERN
                Stack Development.
              </p>

            </div>

            <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-950">

              <h4 className="text-2xl font-bold mb-3">
                🚀 Career Goal
              </h4>

              <p className="text-zinc-400 leading-8">
                Secure Software Engineering and Full
                Stack Development opportunities while
                building impactful products and startups.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}