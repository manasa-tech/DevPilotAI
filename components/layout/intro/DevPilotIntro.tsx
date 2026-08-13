"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type DevPilotIntroProps = {
  onComplete: () => void;
};

export default function DevPilotIntro({
  onComplete,
}: DevPilotIntroProps) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 500),
      setTimeout(() => setStage(2), 1500),
      setTimeout(() => setStage(3), 2500),
      setTimeout(() => setStage(4), 3600),
      setTimeout(() => onComplete(), 4600),
    ];

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#030711] transition-opacity duration-1000 ${
        stage >= 4 ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px] animate-pulse" />

      {/* Animated rings */}
      <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10 animate-[spin_8s_linear_infinite]" />

      <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/10 animate-[spin_12s_linear_infinite_reverse]" />

      <div className="relative flex flex-col items-center justify-center text-center">
        {/* Logo */}
        <div
          className={`transition-all duration-1000 ${
            stage >= 1
              ? "scale-100 opacity-100"
              : "scale-50 opacity-0"
          }`}
        >
          <div className="relative h-32 w-32 sm:h-40 sm:w-40">
            {/* Glow */}
            <div className="absolute inset-0 rounded-[30px] bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-500/30 blur-2xl" />

            <div className="relative h-full w-full overflow-hidden rounded-[30px] border border-white/10 bg-[#081020] shadow-[0_0_60px_rgba(59,130,246,0.25)]">
              <Image
                src="/AI.png"
                alt="DevPilot AI"
                width={110}
  height={110}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Logo shine */}
        <div
          className={`mt-8 h-[2px] overflow-hidden rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-1000 ${
            stage >= 2 ? "w-64 opacity-100" : "w-0 opacity-0"
          }`}
        />

        {/* Name */}
        <div
          className={`mt-7 transition-all duration-1000 ${
            stage >= 2
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="text-white">Dev</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Pilot
            </span>
            <span className="ml-2 text-cyan-400">AI</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`mt-4 transition-all duration-1000 ${
            stage >= 3
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          <p className="text-sm tracking-[0.35em] text-slate-400 uppercase">
            Your Personal AI Agent
          </p>
        </div>

        {/* Status */}
        <div
          className={`mt-8 flex items-center gap-2 transition-all duration-700 ${
            stage >= 3
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
          <span className="text-xs text-slate-500">
            Initializing DevPilot...
          </span>
        </div>
      </div>
    </div>
  );
}