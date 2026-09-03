"use client";

import {
  ArrowRight,
  BarChart3,
  Code2,
  FolderGit2,
  MessageSquare,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import Link from "next/link";
import QuickActions from "./QuickActions";
import RecentProject from "./RecentProject";

export default function DashboardHome() {
  return (
    <div className="min-h-full bg-[#050507] px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Welcome */}
        <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0f] p-6 sm:p-8">
          {/* Background glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-600/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-52 w-52 rounded-full bg-indigo-600/5 blur-3xl" />

          <div className="relative">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10">
                <Sparkles className="h-4 w-4 text-violet-400" />
              </div>

              <span className="text-xs font-medium text-violet-400">
                DevPilot AI
              </span>
            </div>

            <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Welcome back, Developer 👋
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
              Build, debug, explain, and improve your code with your
              AI-powered development assistant.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/chat"
                className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-xs font-medium text-white transition hover:bg-violet-500"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                Start AI Chat
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>

              <Link
                href="/code"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2.5 text-xs font-medium text-zinc-400 transition hover:bg-white/5 hover:text-white"
              >
                <Code2 className="h-3.5 w-3.5" />
                Generate Code
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="AI Chats"
            value="24"
            description="This month"
            icon={MessageSquare}
          />

          <StatCard
            title="Code Generated"
            value="86"
            description="Sessions"
            icon={Code2}
          />

          <StatCard
            title="Projects"
            value="8"
            description="Active projects"
            icon={FolderGit2}
          />

          <StatCard
            title="Productivity"
            value="92%"
            description="This month"
            icon={BarChart3}
          />
        </section>

        {/* Quick Actions */}
        <section className="mt-8">
          <QuickActions />
        </section>

        {/* Main content */}
        <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* Recent Projects */}
          <RecentProject />

          {/* Workspace */}
          <WorkspaceCard />
        </section>

        {/* Bottom banner */}
        <section className="mt-6 rounded-2xl border border-white/10 bg-[#0b0b0f] p-5 sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10">
                <Zap className="h-5 w-5 text-violet-400" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-zinc-200">
                  Build faster with DevPilot
                </h3>

                <p className="mt-1 text-xs leading-5 text-zinc-600">
                  Generate code, debug errors, and understand complex
                  programming concepts in seconds.
                </p>
              </div>
            </div>

            <Link
              href="/chat"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-xs font-medium text-zinc-400 transition hover:border-violet-500/30 hover:bg-violet-500/5 hover:text-white"
            >
              Try DevPilot
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Stat Card                                                                    */
/* -------------------------------------------------------------------------- */

function StatCard({
  title,
  value,
  description,
  icon: Icon,
}: {
  title: string;
  value: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="group rounded-xl border border-white/10 bg-[#0b0b0f] p-5 transition hover:border-violet-500/20">
      <div className="flex items-center justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.03]">
          <Icon className="h-4 w-4 text-zinc-600 transition group-hover:text-violet-400" />
        </div>

        <Terminal className="h-3.5 w-3.5 text-zinc-800" />
      </div>

      <p className="mt-4 text-2xl font-semibold tracking-tight text-white">
        {value}
      </p>

      <div className="mt-1 flex items-center justify-between">
        <p className="text-xs font-medium text-zinc-400">
          {title}
        </p>

        <p className="text-[10px] text-zinc-700">
          {description}
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Workspace Card                                                              */
/* -------------------------------------------------------------------------- */

function WorkspaceCard() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0b0b0f] p-5">
      <div className="flex items-center gap-2">
        <Terminal className="h-4 w-4 text-violet-400" />

        <h2 className="text-sm font-semibold text-zinc-300">
          Developer Workspace
        </h2>
      </div>

      <div className="mt-5 space-y-3">
        <WorkspaceItem
          label="Frontend"
          value="Next.js"
        />

        <WorkspaceItem
          label="Backend"
          value="FastAPI"
        />

        <WorkspaceItem
          label="Database"
          value="PostgreSQL"
        />

        <WorkspaceItem
          label="AI Model"
          value="DevPilot AI"
        />
      </div>

      <div className="mt-5 rounded-lg border border-violet-500/10 bg-violet-500/[0.03] p-3">
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

          <span className="text-[11px] font-medium text-zinc-400">
            Workspace ready
          </span>
        </div>

        <p className="mt-1 text-[10px] leading-5 text-zinc-700">
          Your development environment is ready to build.
        </p>
      </div>
    </div>
  );
}

function WorkspaceItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0">
      <span className="text-xs text-zinc-600">
        {label}
      </span>

      <span className="rounded-md bg-white/[0.03] px-2 py-1 text-[10px] font-medium text-zinc-400">
        {value}
      </span>
    </div>
  );
}