import { createMessage } from "@/actions/message.actions";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[8px] text-blue-500 text-sm mb-4">
            Contact
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black">
            Let&apos;s Work
            <br />
            Together
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-zinc-400 text-lg leading-8">
            Looking for a developer, intern, freelancer,
            or collaboration partner? Feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Side */}
          <div>

            <h3 className="text-3xl font-bold mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6">

              <div className="p-6 rounded-3xl border border-zinc-800 bg-zinc-950">
                <h4 className="font-semibold mb-2">
                  Email
                </h4>

                <p className="text-zinc-400">
                  ayush9123288616@gmail.com
                </p>
              </div>

              <div className="p-6 rounded-3xl border border-zinc-800 bg-zinc-950">
                <h4 className="font-semibold mb-2">
                  Location
                </h4>

                <p className="text-zinc-400">
                  India
                </p>
              </div>

              <div className="p-6 rounded-3xl border border-zinc-800 bg-zinc-950">
                <h4 className="font-semibold mb-2">
                  Availability
                </h4>

                <p className="text-green-500">
                  Open to Internships & Freelance
                </p>
              </div>

            </div>

            {/* Social Links */}

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-zinc-700 hover:border-blue-500 transition"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-zinc-700 hover:border-blue-500 transition"
              >
                LinkedIn
              </a>

              <a
                href="mailto:ayush9123288616@gmail.com"
                className="px-6 py-3 rounded-xl border border-zinc-700 hover:border-blue-500 transition"
              >
                Email
              </a>

            </div>

          </div>

          {/* Right Side Form */}

          <div>

            <form
              action={createMessage}
              className="space-y-6"
            >

              <div>
                <label className="block mb-2 text-sm text-zinc-400">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full p-4 rounded-2xl bg-zinc-950 border border-zinc-800 focus:border-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-zinc-400">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full p-4 rounded-2xl bg-zinc-950 border border-zinc-800 focus:border-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-zinc-400">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project Discussion"
                  className="w-full p-4 rounded-2xl bg-zinc-950 border border-zinc-800 focus:border-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-zinc-400">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full p-4 rounded-2xl bg-zinc-950 border border-zinc-800 focus:border-blue-500 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}