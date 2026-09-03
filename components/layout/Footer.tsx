import { Heart, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050507]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 sm:flex-row">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10">
            <Sparkles className="h-4 w-4 text-violet-400" />
          </div>

          <div>
            <p className="text-xs font-semibold text-zinc-300">
              DevPilot AI
            </p>

            <p className="mt-0.5 text-[10px] text-zinc-700">
              AI-powered developer assistant
            </p>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-[10px] text-zinc-700">
          © 2026 DevPilot AI. All rights reserved.
        </p>

        {/* Made with */}
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-zinc-700">
            Built with
          </span>

          <Heart className="h-3 w-3 text-violet-500" />

          <span className="text-[10px] text-zinc-700">
            for developers
          </span>
        </div>
      </div>
    </footer>
  );
}