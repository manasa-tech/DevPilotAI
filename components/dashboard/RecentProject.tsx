"use client";

import {
  ArrowUpRight,
  Clock3,
  Code2,
  FolderGit2,
  Plus,
} from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "DevPilot AI",
    description: "AI-powered developer assistant",
    language: "TypeScript",
    updated: "Today",
  },
  {
    id: 2,
    name: "ElderVoice Guardian",
    description: "Voice assistant application",
    language: "JavaScript",
    updated: "Yesterday",
  },
  {
    id: 3,
    name: "HerbTrace",
    description: "Blockchain traceability platform",
    language: "JavaScript",
    updated: "2 days ago",
  },
  {
    id: 4,
    name: "Smart Agriculture",
    description: "AI-powered agriculture platform",
    language: "Python",
    updated: "4 days ago",
  },
];

export default function RecentProject() {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#0b0b0f] p-5">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10">
            <FolderGit2 className="h-4 w-4 text-violet-400" />
          </div>

          <div>
            <h2 className="text-sm font-semibold text-zinc-200">
              Recent Projects
            </h2>

            <p className="mt-1 text-[10px] text-zinc-600">
              Continue where you left off
            </p>
          </div>
        </div>

        <Link
          href="/code"
          className="flex items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-1.5 text-[10px] font-medium text-zinc-500 transition hover:border-violet-500/30 hover:bg-violet-500/5 hover:text-violet-300"
        >
          <Plus className="h-3 w-3" />
          New
        </Link>
      </div>

      {/* Projects */}
      <div className="space-y-2">
        {projects.map((project) => (
          <Link
            key={project.id}
            href="/code"
            className="group flex items-center justify-between rounded-xl border border-transparent p-3 transition-all duration-200 hover:border-white/10 hover:bg-white/[0.02]"
          >
            {/* Project information */}
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.03] transition group-hover:bg-violet-500/10">
                <Code2 className="h-4 w-4 text-zinc-600 transition group-hover:text-violet-400" />
              </div>

              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-zinc-300 transition group-hover:text-white">
                  {project.name}
                </p>

                <p className="mt-1 truncate text-[10px] text-zinc-700">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Project details */}
            <div className="ml-3 flex shrink-0 items-center gap-4">
              <div className="hidden items-center gap-3 sm:flex">
                <span className="rounded-md bg-violet-500/10 px-2 py-1 text-[9px] font-medium text-violet-400">
                  {project.language}
                </span>

                <span className="flex items-center gap-1 text-[9px] text-zinc-700">
                  <Clock3 className="h-3 w-3" />
                  {project.updated}
                </span>
              </div>

              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-800 transition group-hover:text-violet-400" />
            </div>
          </Link>
        ))}
      </div>

      {/* View all */}
      <Link
        href="/history"
        className="mt-4 flex items-center justify-center gap-1.5 border-t border-white/5 pt-4 text-[10px] font-medium text-zinc-600 transition hover:text-violet-400"
      >
        View all projects
        <ArrowUpRight className="h-3 w-3" />
      </Link>
    </section>
  );
}