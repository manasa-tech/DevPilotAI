"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  MessageSquare,
  LayoutDashboard,
  Bot,
  Globe,
  Terminal,
  Folder,
  FileText,
  Brain,
  Wrench,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Chat",
    href: "/chat",
    icon: MessageSquare,
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Agents",
    href: "/agents",
    icon: Bot,
  },
  {
    title: "Browser",
    href: "/browser",
    icon: Globe,
  },
  {
    title: "Terminal",
    href: "/terminal",
    icon: Terminal,
  },
  {
    title: "Files",
    href: "/files",
    icon: Folder,
  },
  {
    title: "Documents",
    href: "/documents",
    icon: FileText,
  },
  {
    title: "Memory",
    href: "/memory",
    icon: Brain,
  },
  {
    title: "Tools",
    href: "/tools",
    icon: Wrench,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 h-screen bg-[#0F172A] border-r border-slate-800 flex flex-col justify-between">

      {/* Logo */}
      <div>

        <div className="flex items-center gap-3 px-6 py-8">

          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
            🤖
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              DevPilot
              <span className="text-cyan-400"> AI</span>
            </h1>

            <p className="text-xs text-slate-400">
              AI Engineering Assistant
            </p>
          </div>

        </div>

        {/* Menu */}

        <nav className="px-4 space-y-2">

          {menuItems.map((item) => {

            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300

                ${
                  active
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500 text-cyan-400"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon size={21} />

                <span className="font-medium">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User */}

      <div className="border-t border-slate-800 p-5">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
            M
          </div>

          <div>

            <h3 className="text-white font-semibold">
              Manasa
            </h3>

            <p className="text-xs text-slate-400">
              DevPilot Pro
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}