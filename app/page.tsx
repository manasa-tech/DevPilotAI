"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    "Java",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "FastAPI",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "GitHub",
    "REST API",
    "AI / GenAI",
  ];

  const projects = [
    {
      number: "01",
      title: "DevPilot AI",
      description:
        "An AI-powered developer assistant designed to help developers understand, build and debug applications faster.",
      technologies: ["Next.js", "TypeScript", "AI", "FastAPI"],
    },
    {
      number: "02",
      title: "Aegis AI",
      description:
        "An intelligent agriculture platform providing crop disease detection, weather insights, market prices and smart alerts.",
      technologies: ["React", "FastAPI", "Python", "AI"],
    },
    {
      number: "03",
      title: "HerbTrace",
      description:
        "A blockchain-based herb traceability platform that improves transparency across the herbal supply chain.",
      technologies: ["Blockchain", "Flare", "React", "JavaScript"],
    },
    {
      number: "04",
      title: "ElderVoice Guardian",
      description:
        "A digital solution designed to provide assistance and support for elderly users through an accessible interface.",
      technologies: ["Node.js", "MongoDB", "Express", "React"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#05070a] text-white">
      {/* ================= NAVBAR ================= */}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#05070a]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a
            href="#home"
            className="text-2xl font-bold tracking-tight"
          >
            DevPilot
            <span className="text-cyan-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm text-gray-300 transition hover:text-cyan-400"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-sm text-gray-300 transition hover:text-cyan-400"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-sm text-gray-300 transition hover:text-cyan-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-sm text-gray-300 transition hover:text-cyan-400"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-cyan-400/40 px-5 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
            >
              Contact
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 px-3 py-2 text-gray-300 md:hidden"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#05070a] px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-cyan-400"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-cyan-400"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-cyan-400"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-cyan-400"
              >
                Projects
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-cyan-400"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* Hero Content */}
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Manasa
              <span className="block text-cyan-400">
                Software Developer
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
              I build modern web applications, AI-powered solutions and
              scalable digital experiences using modern technologies.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-black transition hover:bg-cyan-300"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Let's Connect
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm text-gray-500">
              <span>Java</span>
              <span>•</span>
              <span>React</span>
              <span>•</span>
              <span>AI</span>
              <span>•</span>
              <span>Full Stack</span>
            </div>
          </div>

          {/* Code Card */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-2xl backdrop-blur-xl">
              <div className="rounded-2xl border border-white/10 bg-[#090d12] p-6">
                <div className="mb-8 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>

                <div className="font-mono text-sm leading-8">
                  <p className="text-gray-500">
                    <span className="text-cyan-400">
                      const
                    </span>{" "}
                    developer = {"{"}
                  </p>

                  <p className="pl-6">
                    name:{" "}
                    <span className="text-green-400">
                      "Manasa"
                    </span>
                    ,
                  </p>

                  <p className="pl-6">
                    role:{" "}
                    <span className="text-green-400">
                      "Software Developer"
                    </span>
                    ,
                  </p>

                  <p className="pl-6">
                    passion:{" "}
                    <span className="text-green-400">
                      "Building"
                    </span>
                    ,
                  </p>

                  <p className="pl-6">
                    learning:{" "}
                    <span className="text-green-400">
                      "Every Day"
                    </span>
                    ,
                  </p>

                  <p className="pl-6">
                    focus:{" "}
                    <span className="text-green-400">
                      "AI + Full Stack"
                    </span>
                  </p>

                  <p className="text-gray-500">
                    {"};"}
                  </p>
                </div>

                <div className="mt-8 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                  <p className="text-sm text-gray-400">
                    Currently building
                  </p>

                  <p className="mt-1 font-semibold text-cyan-300">
                    AI-powered developer experiences
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Building with curiosity.
          </h2>

          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-lg leading-9 text-gray-400">
                I'm a software developer who enjoys turning ideas into
                practical and meaningful applications.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-400">
                I work across frontend, backend and AI technologies while
                continuously improving my problem-solving and development
                skills.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-400">
                My goal is to create clean user experiences, reliable
                backend systems and intelligent applications that solve
                real-world problems.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-3xl font-bold text-cyan-400">
                  10+
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Technologies
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-3xl font-bold text-cyan-400">
                  4+
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Projects
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-3xl font-bold text-cyan-400">
                  ∞
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Learning
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-3xl font-bold text-cyan-400">
                  AI
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Exploring
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="border-t border-white/10 bg-white/[0.015] px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            My technology stack
          </h2>

          <p className="mt-5 max-w-2xl text-gray-400">
            Technologies and tools I use to build modern applications.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Things I've built
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-cyan-400">
                    {project.number}
                  </span>

                  <span className="text-xs text-gray-600">
                    PROJECT
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold transition group-hover:text-cyan-300">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-7">
                  <button
                    type="button"
                    className="text-sm text-cyan-400 transition hover:text-cyan-300"
                  >
                    View Project →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AI ASSISTANT ================= */}

      <section className="border-y border-cyan-400/10 bg-cyan-400/[0.02] px-6 py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            AI Assistant
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Meet my AI Assistant
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Ask questions about my skills, projects, technologies and
            experience.
          </p>

          <div className="mx-auto mt-10 flex max-w-xl items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
            <div className="flex-1 rounded-xl bg-black/30 px-4 py-3 text-left text-sm text-gray-500">
              AI Assistant coming soon...
            </div>

            <button
              type="button"
              disabled
              className="rounded-xl bg-cyan-400/20 px-5 py-3 text-sm font-semibold text-cyan-300"
            >
              AI
            </button>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="px-6 py-28"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-6xl">
            Let's build something.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Have an idea, project or opportunity? I'd love to hear
            from you.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="mt-9 inline-flex rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:bg-cyan-300"
          >
            Get In Touch
          </a>

          <div className="mt-12 flex justify-center gap-8 text-sm text-gray-500">
            <a
              href="#"
              className="transition hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="#"
              className="transition hover:text-cyan-400"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="transition hover:text-cyan-400"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-gray-600 sm:flex-row">
          <p>
            © {new Date().getFullYear()} DevPilot. All rights reserved.
          </p>

          <p>
            Built with{" "}
            <span className="text-cyan-400">
              Next.js
            </span>
          </p>
        </div>
      </footer>
    </main>
  );
}