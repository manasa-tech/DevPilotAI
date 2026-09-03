import Link from "next/link";

export default function DevPilotIntro() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between border-b border-white/10 px-6 py-4 md:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white font-bold text-black">
            D
          </div>

          <span className="text-lg font-semibold tracking-tight">
            DevPilot AI
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
          <a
            href="#features"
            className="transition hover:text-white"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="transition hover:text-white"
          >
            How it works
          </a>

          <a
            href="#about"
            className="transition hover:text-white"
          >
            About
          </a>
        </div>

        {/* Get Started */}
        <Link
          href="/login"
          className="rounded-lg border border-white/15 bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-gray-200"
        >
          Get Started
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-[calc(100vh-73px)] items-center justify-center overflow-hidden px-6">
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300">
            <span className="h-2 w-2 rounded-full bg-green-400" />

            AI-powered developer assistant
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Build faster with{" "}
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              DevPilot AI
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
            Your intelligent coding companion that helps you understand,
            generate, debug, and improve code faster.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Start Building → Login */}
            <Link
              href="/login"
              className="rounded-xl bg-white px-7 py-3.5 font-semibold text-black transition hover:scale-[1.02] hover:bg-gray-200"
            >
              Start Building
            </Link>

            {/* Explore Features */}
            <a
              href="#features"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-7 py-3.5 font-semibold text-white transition hover:bg-white/[0.07]"
            >
              Explore Features
            </a>
          </div>

          {/* Code Preview */}
          <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] text-left shadow-2xl">
            {/* Code Header */}
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />

              <span className="ml-3 text-xs text-gray-500">
                devpilot.ts
              </span>
            </div>

            {/* Code */}
            <div className="overflow-x-auto p-6">
              <pre className="font-mono text-sm leading-7 text-gray-300">
                <code>
                  <span className="text-purple-400">
                    const
                  </span>{" "}
                  <span className="text-blue-300">
                    devpilot
                  </span>{" "}
                  ={" "}
                  <span className="text-yellow-300">
                    new
                  </span>{" "}
                  <span className="text-green-300">
                    DevPilotAI
                  </span>
                  ();
                  {"\n\n"}

                  <span className="text-gray-500">
                    // Your AI coding companion
                  </span>

                  {"\n"}

                  <span className="text-purple-400">
                    await
                  </span>{" "}
                  <span className="text-blue-300">
                    devpilot
                  </span>
                  .
                  <span className="text-green-300">
                    build
                  </span>
                  (
                  {"\n"}
                  {"  "}
                  <span className="text-orange-300">
                    "Create something amazing"
                  </span>
                  {"\n"}
                  );
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="border-t border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
              Powerful features
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Everything you need to code better
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              DevPilot AI gives developers intelligent tools to write,
              understand, and improve their code.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="Generate Code"
              description="Describe what you want to build and let AI help you create the code."
              icon="✦"
            />

            <FeatureCard
              title="Debug Faster"
              description="Find errors, understand why they happen, and get practical fixes."
              icon="⌘"
            />

            <FeatureCard
              title="Learn & Understand"
              description="Get clear explanations of complex code, concepts, and programming patterns."
              icon="?"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="border-t border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm uppercase tracking-widest text-gray-500">
              Simple workflow
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              From idea to code
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <Step
              number="01"
              title="Describe"
            >
              Tell DevPilot what you want to build.
            </Step>

            <Step
              number="02"
              title="Generate"
            >
              Let AI create and explain the solution.
            </Step>

            <Step
              number="03"
              title="Build"
            >
              Improve the code and turn your idea into reality.
            </Step>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Your next project starts here.
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            DevPilot AI is designed to make development faster, simpler, and
            more accessible for everyone.
          </p>

          {/* Try DevPilot AI → Login */}
          <Link
            href="/login"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-3.5 font-semibold text-black transition hover:bg-gray-200"
          >
            Try DevPilot AI
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>
            © 2026 DevPilot AI. All rights reserved.
          </p>

          <p>
            Built for developers.
          </p>
        </div>
      </footer>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Feature Card                                                               */
/* -------------------------------------------------------------------------- */

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-white/20 hover:bg-white/[0.04]">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-lg">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-400">
        {description}
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Step                                                                       */
/* -------------------------------------------------------------------------- */

function Step({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
      <p className="font-mono text-sm text-gray-500">
        {number}
      </p>

      <h3 className="mt-4 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-400">
        {children}
      </p>
    </div>
  );
}