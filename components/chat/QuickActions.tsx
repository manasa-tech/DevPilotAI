"use client";

import {
  Bug,
  Code2,
  FileCode2,
  Lightbulb,
  Sparkles,
  Wand2,
} from "lucide-react";

interface QuickActionsProps {
  onSelect?: (prompt: string) => void;
}

const actions = [
  {
    title: "Generate Code",
    description: "Create code from a prompt",
    icon: Code2,
    prompt: "Generate code for ",
  },
  {
    title: "Debug Code",
    description: "Find and fix coding errors",
    icon: Bug,
    prompt: "Help me debug this code: ",
  },
  {
    title: "Explain Code",
    description: "Understand code easily",
    icon: FileCode2,
    prompt: "Explain this code: ",
  },
  {
    title: "Optimize Code",
    description: "Improve performance and quality",
    icon: Wand2,
    prompt: "Optimize this code: ",
  },
  {
    title: "Get Ideas",
    description: "Brainstorm project ideas",
    icon: Lightbulb,
    prompt: "Give me some project ideas for ",
  },
  {
    title: "AI Assistant",
    description: "Ask anything about programming",
    icon: Sparkles,
    prompt: "",
  },
];

export default function QuickActions({
  onSelect,
}: QuickActionsProps) {
  return (
    <div className="w-full">
      {/* Section heading */}
      <div className="mb-4 flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-violet-400" />

        <h2 className="text-sm font-semibold text-zinc-300">
          Quick Actions
        </h2>
      </div>

      {/* Action cards */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              type="button"
              onClick={() => onSelect?.(action.prompt)}
              className="group rounded-xl border border-white/10 bg-[#0b0b0f] p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-500/30 hover:bg-violet-500/[0.03]"
            >
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] transition-colors group-hover:border-violet-500/20 group-hover:bg-violet-500/10">
                  <Icon className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-violet-400" />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <h3 className="text-xs font-semibold text-zinc-300 transition-colors group-hover:text-white">
                    {action.title}
                  </h3>

                  <p className="mt-1 text-[11px] leading-5 text-zinc-600">
                    {action.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}