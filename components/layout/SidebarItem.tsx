"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  title: string;
  href: string;
  icon: LucideIcon;
  active?: boolean;
}

export default function SidebarItem({
  title,
  href,
  icon: Icon,
  active = false,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={`
        group
        flex
        items-center
        gap-4
        px-4
        py-3
        rounded-xl
        transition-all
        duration-300

        ${
          active
            ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500 text-cyan-400 shadow-lg shadow-cyan-500/10"
            : "text-slate-300 hover:bg-slate-800 hover:text-white"
        }
      `}
    >
      <Icon
        size={20}
        className={`transition-transform duration-300 ${
          active ? "scale-110" : "group-hover:scale-110"
        }`}
      />

      <span className="font-medium text-sm">
        {title}
      </span>
    </Link>
  );
}