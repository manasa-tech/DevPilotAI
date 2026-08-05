"use client";

import {
    Bot,
  Globe,
  Heart,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-[#0B1120] px-8 py-4">

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-lg">

            🤖

          </div>

          <div>

            <h3 className="text-white font-semibold">

              DevPilotAI

            </h3>

            <p className="text-xs text-slate-400">

              Your Autonomous AI Engineering Assistant

            </p>

          </div>

        </div>

        {/* Center */}

        <div className="flex items-center gap-6 text-sm text-slate-400">

          <div className="flex items-center gap-2">

            <ShieldCheck
              size={16}
              className="text-green-400"
            />

            Secure

          </div>

          <div className="flex items-center gap-2">

            <Globe
              size={16}
              className="text-cyan-400"
            />

            Online

          </div>

          <div className="flex items-center gap-2">

            <Heart
              size={16}
              className="text-red-400"
            />

            Built with Passion

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          <button className="p-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-500 transition">

            <Bot
              size={18}
              className="text-slate-300"
            />

          </button>

          <span className="text-xs text-slate-500">

            © 2026 DevPilotAI

          </span>

        </div>

      </div>

    </footer>
  );
}