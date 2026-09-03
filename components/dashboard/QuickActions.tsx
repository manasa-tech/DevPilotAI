"use client";

import {
  Bug,
  Code2,
  FileCode2,
  MessageSquare,
  Sparkles,
  Wand2,
} from "lucide-react";
import Link from "next/link";

const quickActions = [
  {
    title: "AI Chat",
    description: "Ask anything about programming",
    icon: MessageSquare,
    href: "/chat",
  },
  {
    title: "Generate Code",
    description: "Create code using AI",
    icon: Code2,
    href: "/code",
  },
  {
    title: "Debug Code",
    description: "Find and fix coding errors",
    icon: Bug,
    href: "/debug",
  },
  {
    title: "Explain Code",
    description: "Understand code step by step",
    icon: FileCode2,
    href: "/explain",
  },
  {
    title: "Optimize Code",
    description: "Improve performance and quality",
    icon: Wand2,
    href: "/code",
  },
  {
    title: "AI Assistant",
    description: "Get help with your project",
    icon: Sparkles,
    href: "/chat",
  },
];

export default function QuickActions() {
  return (
    <section>
      {/* Section Header */}
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-violet-400" />

          <h2 className="text-sm font-semibold text-zinc-200">
            Quick Actions
          </h2>
        </div>

        <p className="mt-1 text-[11px] text-zinc-600">
          Quickly start your next development task
        </p>
      </div>

      {/* Action Grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {quickActions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0b0b0f] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-500/30 hover:bg-violet-500/[0.03]"
            >
              {/* Hover Glow */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-violet-500/0 blur-2xl transition-all duration-300 group-hover:bg-violet-500/10" />

              <div className="relative flex items-start gap-3">
                {/* Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] transition-all duration-200 group-hover:border-violet-500/20 group-hover:bg-violet-500/10">
                  <Icon className="h-4 w-4 text-zinc-600 transition-colors duration-200 group-hover:text-violet-400" />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <h3 className="text-xs font-semibold text-zinc-300 transition-colors group-hover:text-white">
                    {action.title}
                  </h3>

                  <p className="mt-1 text-[11px] leading-5 text-zinc-600">
                    {action.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}