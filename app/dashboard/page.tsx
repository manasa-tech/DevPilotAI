"use client";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      
      <div className="flex min-h-screen">

        {/* Sidebar */}
        <aside className="w-64 border-r border-white/10 bg-[#080b12] p-5">

          <h1 className="text-xl font-bold">
            DevPilot{" "}
            <span className="text-cyan-400">
              AI
            </span>
          </h1>

          <nav className="mt-10 space-y-2">

            <button className="w-full rounded-xl bg-blue-500/10 px-4 py-3 text-left text-cyan-400">
              💬 Chat
            </button>

            <button className="w-full rounded-xl px-4 py-3 text-left text-gray-400 hover:bg-white/5">
              ▦ Dashboard
            </button>

            <button className="w-full rounded-xl px-4 py-3 text-left text-gray-400 hover:bg-white/5">
              🤖 Agents
            </button>

            <button className="w-full rounded-xl px-4 py-3 text-left text-gray-400 hover:bg-white/5">
              🌐 Browser
            </button>

            <button className="w-full rounded-xl px-4 py-3 text-left text-gray-400 hover:bg-white/5">
              &gt;_ Terminal
            </button>

            <button className="w-full rounded-xl px-4 py-3 text-left text-gray-400 hover:bg-white/5">
              📁 Files
            </button>

            <button className="w-full rounded-xl px-4 py-3 text-left text-gray-400 hover:bg-white/5">
              🧠 Memory
            </button>

            <button className="w-full rounded-xl px-4 py-3 text-left text-gray-400 hover:bg-white/5">
              ⚙️ Settings
            </button>

          </nav>

        </aside>

        {/* Main Dashboard */}
        <section className="flex-1 p-8">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-3xl font-bold">
                Hello! 👋
              </h2>

              <p className="mt-2 text-gray-400">
                I'm DevPilot AI, your personal AI agent.
              </p>
            </div>

            <div className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-400">
              ● AI Online
            </div>

          </div>

          {/* Cards */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm text-gray-500">
                AI Agents
              </p>

              <p className="mt-3 text-3xl font-bold">
                6
              </p>

              <p className="mt-2 text-sm text-green-400">
                ● Active
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm text-gray-500">
                Tasks Completed
              </p>

              <p className="mt-3 text-3xl font-bold">
                12
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm text-gray-500">
                Time Saved
              </p>

              <p className="mt-3 text-3xl font-bold">
                18h
              </p>
            </div>

          </div>

          {/* Chat */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">

            <h3 className="text-xl font-semibold">
              What can I help you with?
            </h3>

            <p className="mt-2 text-gray-500">
              Ask DevPilot to code, research, automate tasks,
              browse the web, manage files or help with your projects.
            </p>

            <div className="mt-6 flex gap-3">

              <button className="rounded-xl border border-white/10 px-5 py-3 text-sm hover:bg-white/5">
                Write Code
              </button>

              <button className="rounded-xl border border-white/10 px-5 py-3 text-sm hover:bg-white/5">
                Research
              </button>

              <button className="rounded-xl border border-white/10 px-5 py-3 text-sm hover:bg-white/5">
                Open Browser
              </button>

              <button className="rounded-xl border border-white/10 px-5 py-3 text-sm hover:bg-white/5">
                Run Command
              </button>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}