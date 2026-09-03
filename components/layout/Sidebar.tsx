"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bot,
  Bug,
  Code2,
  FileCode2,
  History,
  Home,
  MessageSquare,
  Settings,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "AI Chat",
    href: "/chat",
    icon: MessageSquare,
  },
  {
    name: "Generate Code",
    href: "/code",
    icon: Code2,
  },
  {
    name: "Debug Code",
    href: "/debug",
    icon: Bug,
  },
  {
    name: "Explain Code",
    href: "/explain",
    icon: FileCode2,
  },
  {
    name: "History",
    href: "/history",
    icon: History,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

interface SidebarProps {
  mobileOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({
  mobileOpen = false,
  onClose,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen w-72 flex-col
          border-r border-white/10 bg-[#09090b]
          transition-transform duration-300
          lg:translate-x-0
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <Link
            href="/dashboard"
            className="flex items-center gap-3"
            onClick={onClose}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/20">
              <Terminal className="h-5 w-5 text-white" />
            </div>

            <div>
              <h1 className="text-lg font-bold text-white">
                DevPilot
              </h1>

              <p className="text-xs text-zinc-500">
                AI Coding Assistant
              </p>
            </div>
          </Link>

          {/* Mobile Close */}
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-zinc-400 hover:bg-white/5 hover:text-white lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-4 py-6">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-600">
            Workspace
          </p>

          {navigation.map((item) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`
                  group flex items-center gap-3 rounded-xl px-3 py-3
                  text-sm font-medium transition-all
                  ${
                    isActive
                      ? "bg-violet-500/10 text-violet-400"
                      : "text-zinc-400 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                <Icon
                  className={`
                    h-5 w-5 transition-colors
                    ${
                      isActive
                        ? "text-violet-400"
                        : "text-zinc-500 group-hover:text-zinc-300"
                    }
                  `}
                />

                <span>{item.name}</span>

                {isActive && (
                  <span className="ml-auto h-2 w-2 rounded-full bg-violet-500" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* AI Status Card */}
        <div className="border-t border-white/10 p-4">
          <div className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-indigo-500/5 p-4">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10">
                <Sparkles className="h-4 w-4 text-violet-400" />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  DevPilot AI
                </p>

                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="text-xs text-zinc-500">
                    Ready to assist
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs leading-5 text-zinc-500">
              Generate, debug, explain and improve your code with AI.
            </p>
          </div>
        </div>

        {/* User */}
        <div className="border-t border-white/10 p-4">
          <div className="flex items-center gap-3 rounded-xl p-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 text-sm font-bold text-white">
              V
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-white">
                Developer
              </p>

              <p className="truncate text-xs text-zinc-500">
                Free Plan
              </p>
            </div>

            <Bot className="ml-auto h-4 w-4 text-zinc-600" />
          </div>
        </div>
      </aside>
    </>
  );
}