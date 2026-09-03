"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Bug,
  Code2,
  FileCode2,
  History,
  MessageSquare,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

const quickActions = [
  {
    title: "AI Chat",
    description: "Ask questions and get coding help",
    href: "/chat",
    icon: MessageSquare,
    iconClass: "text-blue-400",
    bgClass: "bg-blue-500/10",
  },
  {
    title: "Generate Code",
    description: "Turn your idea into working code",
    href: "/code",
    icon: Code2,
    iconClass: "text-violet-400",
    bgClass: "bg-violet-500/10",
  },
  {
    title: "Debug Code",
    description: "Find and fix bugs in your code",
    href: "/debug",
    icon: Bug,
    iconClass: "text-red-400",
    bgClass: "bg-red-500/10",
  },
  {
    title: "Explain Code",
    description: "Understand complex code easily",
    href: "/explain",
    icon: FileCode2,
    iconClass: "text-emerald-400",
    bgClass: "bg-emerald-500/10",
  },
];

const recentActivity = [
  {
    title: "React Login Page",
    description: "Generated a responsive login component",
    type: "Code",
    time: "Today, 10:30 AM",
  },
  {
    title: "API 500 Error",
    description: "Debugged a server-side API issue",
    type: "Debug",
    time: "Today, 09:15 AM",
  },
  {
    title: "Next.js Architecture",
    description: "Explained project folder structure",
    type: "Explain",
    time: "Yesterday",
  },
];

export default function DashboardPage() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050507] text-white">
      {/* Sidebar */}
      <Sidebar
        mobileOpen={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
      />

      {/* Main */}
      <main className="lg:ml-72">
        {/* Header */}
        <Header
          title="Dashboard"
          description="Your AI-powered developer workspace"
          onMenuClick={() => setMobileSidebarOpen(true)}
        />

        <div className="p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            {/* Welcome Hero */}
            <section className="relative mb-8 overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/[0.12] via-indigo-500/[0.05] to-transparent p-6 sm:p-8">
              {/* Background decoration */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

              <div className="relative max-w-3xl">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10">
                  <Sparkles className="h-6 w-6 text-violet-400" />
                </div>

                <p className="mb-2 text-sm font-medium text-violet-400">
                  Welcome back 👋
                </p>

                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                  Build faster with{" "}
                  <span className="text-violet-400">
                    DevPilot AI
                  </span>
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base">
                  Your intelligent coding assistant for generating,
                  debugging, explaining, and improving code.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/chat"
                    className="flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Start Coding
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/code"
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-zinc-300 transition hover:bg-white/5 hover:text-white"
                  >
                    <Code2 className="h-4 w-4" />
                    Generate Code
                  </Link>
                </div>
              </div>
            </section>

            {/* Quick Actions */}
            <section className="mb-8">
              <div className="mb-4 flex items-end justify-between">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    Quick Actions
                  </h3>

                  <p className="mt-1 text-xs text-zinc-600">
                    Start a new AI-powered coding task
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {quickActions.map((action) => {
                  const Icon = action.icon;

                  return (
                    <Link
                      key={action.href}
                      href={action.href}
                      className="group rounded-2xl border border-white/10 bg-[#0b0b0f] p-5 transition duration-200 hover:-translate-y-0.5 hover:border-violet-500/20 hover:bg-[#0d0d12]"
                    >
                      <div
                        className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${action.bgClass}`}
                      >
                        <Icon
                          className={`h-5 w-5 ${action.iconClass}`}
                        />
                      </div>

                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="text-sm font-semibold text-zinc-200">
                            {action.title}
                          </h4>

                          <p className="mt-2 text-xs leading-5 text-zinc-600">
                            {action.description}
                          </p>
                        </div>

                        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-zinc-700 transition group-hover:translate-x-1 group-hover:text-violet-400" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>

            {/* Bottom Grid */}
            <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
              {/* Recent Activity */}
              <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0f]">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      Recent Activity
                    </h3>

                    <p className="mt-1 text-xs text-zinc-600">
                      Your latest DevPilot sessions
                    </p>
                  </div>

                  <Link
                    href="/history"
                    className="flex items-center gap-1 text-xs font-medium text-violet-400 transition hover:text-violet-300"
                  >
                    View All
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                <div className="divide-y divide-white/5">
                  {recentActivity.map((activity) => (
                    <ActivityItem
                      key={activity.title}
                      {...activity}
                    />
                  ))}
                </div>
              </section>

              {/* Stats / Workspace */}
              <section className="space-y-4">
                <DashboardCard
                  icon={<Zap className="h-4 w-4" />}
                  title="AI Workspace"
                  value="Ready"
                  description="Your DevPilot environment is ready to use."
                />

                <DashboardCard
                  icon={<Terminal className="h-4 w-4" />}
                  title="Developer Tools"
                  value="4 Tools"
                  description="Chat, Generate, Debug and Explain."
                />

                <DashboardCard
                  icon={<History className="h-4 w-4" />}
                  title="Sessions"
                  value="6"
                  description="Recent coding sessions available."
                  href="/history"
                />
              </section>
            </div>

            {/* Bottom Info */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-[#0b0b0f] p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10">
                    <Sparkles className="h-4 w-4 text-violet-400" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-zinc-200">
                      DevPilot AI
                    </h3>

                    <p className="mt-1 max-w-xl text-xs leading-5 text-zinc-600">
                      Currently running in demo mode. Your FastAPI
                      backend and AI model will be connected next.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  System Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* -------------------------------- */
/* Activity Item                     */
/* -------------------------------- */

function ActivityItem({
  title,
  description,
  type,
  time,
}: {
  title: string;
  description: string;
  type: string;
  time: string;
}) {
  return (
    <div className="flex items-center gap-4 px-5 py-4 transition hover:bg-white/[0.02]">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
        <Code2 className="h-4 w-4 text-zinc-500" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <p className="truncate text-sm font-medium text-zinc-300">
            {title}
          </p>

          <span className="rounded-md bg-violet-500/10 px-2 py-0.5 text-[10px] font-medium text-violet-300">
            {type}
          </span>
        </div>

        <p className="mt-1 truncate text-xs text-zinc-600">
          {description}
        </p>
      </div>

      <span className="hidden shrink-0 text-xs text-zinc-700 sm:block">
        {time}
      </span>
    </div>
  );
}

/* -------------------------------- */
/* Dashboard Card                    */
/* -------------------------------- */

function DashboardCard({
  icon,
  title,
  value,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  href?: string;
}) {
  const content = (
    <div className="rounded-2xl border border-white/10 bg-[#0b0b0f] p-5 transition hover:border-violet-500/20">
      <div className="flex items-start justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
          {icon}
        </div>

        {href && (
          <ArrowRight className="h-4 w-4 text-zinc-700 transition group-hover:translate-x-1" />
        )}
      </div>

      <p className="mt-4 text-xs text-zinc-600">{title}</p>

      <p className="mt-1 text-lg font-bold text-white">{value}</p>

      <p className="mt-1 text-xs leading-5 text-zinc-700">
        {description}
      </p>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="group block">
        {content}
      </Link>
    );
  }

  return content;
}