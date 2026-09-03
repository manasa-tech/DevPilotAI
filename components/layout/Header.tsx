"use client";

import { Bell, Menu, Search, Sparkles } from "lucide-react";

interface HeaderProps {
  title: string;
  description?: string;
  onMenuClick?: () => void;
}

export default function Header({
  title,
  description,
  onMenuClick,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#050507]/90 backdrop-blur-xl">
      <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left */}
        <div className="flex min-w-0 items-center gap-3">
          {/* Mobile Menu */}
          <button
            onClick={onMenuClick}
            className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/5 hover:text-white lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="truncate text-lg font-semibold text-white sm:text-xl">
                {title}
              </h1>
            </div>

            {description && (
              <p className="mt-1 hidden truncate text-sm text-zinc-500 sm:block">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search */}
          <button
            className="hidden rounded-xl border border-white/10 bg-white/[0.02] p-2.5 text-zinc-500 transition hover:border-white/20 hover:bg-white/5 hover:text-white md:flex"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>

          {/* AI Status */}
          <div className="hidden items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-2 sm:flex">
            <Sparkles className="h-3.5 w-3.5 text-violet-400" />

            <span className="text-xs font-medium text-violet-300">
              AI Ready
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </div>

          {/* Notifications */}
          <button
            className="relative rounded-xl border border-white/10 bg-white/[0.02] p-2.5 text-zinc-400 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" />

            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-violet-500" />
          </button>

          {/* Profile */}
          <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-1.5 pr-2.5 transition hover:border-white/20 hover:bg-white/5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-500 text-xs font-bold text-white">
              V
            </div>

            <span className="hidden text-sm font-medium text-zinc-300 lg:block">
              Developer
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}