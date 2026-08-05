"use client";

import { useState } from "react";
import {
  Moon,
  Sun,
  Palette,
  ChevronDown,
} from "lucide-react";

const themes = [
  { name: "Dark", icon: "🌙" },
  { name: "Light", icon: "☀️" },
  { name: "Cyberpunk", icon: "💜" },
  { name: "AI Neon", icon: "🤖" },
  { name: "Space", icon: "🌌" },
];

export default function ThemeToggle() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(themes[0]);

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 px-4 py-2 rounded-xl border border-slate-700 bg-[#111827] hover:border-cyan-500 transition"
      >

        <Palette size={18} className="text-cyan-400" />

        <span className="text-white">
          {selected.icon} {selected.name}
        </span>

        <ChevronDown
          size={16}
          className={`text-slate-400 transition ${
            open ? "rotate-180" : ""
          }`}
        />

      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-56 rounded-xl border border-slate-700 bg-[#0F172A] shadow-2xl overflow-hidden z-50">

          {themes.map((theme) => (
            <button
              key={theme.name}
              onClick={() => {
                setSelected(theme);
                setOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-800 transition text-left"
            >

              <span className="text-xl">
                {theme.icon}
              </span>

              <span className="text-white">
                {theme.name}
              </span>

            </button>
          ))}

        </div>
      )}
    </div>
  );
}