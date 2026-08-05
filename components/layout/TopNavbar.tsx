
"use client";

import {
  Bell,
  Search,
  Settings,
  Sparkles,
  Moon,
  ChevronDown,
} from "lucide-react";

export default function TopNavbar() {
  return (
    <header className="w-full h-20 border-b border-slate-800 bg-[#0B1120] flex items-center justify-between px-8">

      {/* Left */}

      <div className="flex items-center gap-5">

        <h1 className="text-3xl font-bold text-white">
          DevPilot
          <span className="text-cyan-400"> AI</span>
        </h1>

        <div className="hidden lg:flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700">

          <Search size={18} className="text-slate-400"/>

          <input
            placeholder="Search anything..."
            className="bg-transparent outline-none text-white placeholder:text-slate-500 w-72"
          />

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* AI Model */}

        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500 text-cyan-300">

          <Sparkles size={18}/>

          Gemini 2.5

          <ChevronDown size={16}/>

        </button>

        {/* Dark Mode */}

        <button className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center hover:border-cyan-500 transition">

          <Moon className="text-slate-300"/>

        </button>

        {/* Notifications */}

        <button className="relative w-11 h-11 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center hover:border-cyan-500 transition">

          <Bell className="text-slate-300"/>

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-500"/>

        </button>

        {/* Settings */}

        <button className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center hover:border-cyan-500 transition">

          <Settings className="text-slate-300"/>

        </button>

        {/* User */}

        <div className="flex items-center gap-3 pl-5 border-l border-slate-700">

          <div className="w-11 h-11 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">

            M

          </div>

          <div>

            <h2 className="text-white font-semibold">

              Manasa

            </h2>

            <p className="text-xs text-slate-400">

              Pro Plan

            </p>

          </div>

        </div>

      </div>

    </header>
  );
}
