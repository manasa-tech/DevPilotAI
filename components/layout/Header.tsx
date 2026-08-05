"use client";

import { ReactNode } from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  action?: ReactNode;
}

export default function Header({
  title,
  subtitle,
  icon,
  action,
}: HeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-slate-800 bg-[#0B1120] px-8 py-6">

      {/* Left */}

      <div className="flex items-center gap-4">

        {icon && (
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg">
            {icon}
          </div>
        )}

        <div>

          <h1 className="text-3xl font-bold text-white">
            {title}
          </h1>

          {subtitle && (
            <p className="text-sm text-slate-400 mt-1">
              {subtitle}
            </p>
          )}

        </div>

      </div>

      {/* Right */}

      {action && (
        <div>
          {action}
        </div>
      )}

    </div>
  );
}