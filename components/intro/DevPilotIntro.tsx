"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function DevPilotIntro() {
  const router = useRouter();

  // After the intro animation, open the dashboard
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dashboard");
    }, 4000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-[#02040a] text-white">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Main blue glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[600px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-600/10
            blur-[130px]
          "
        />

        {/* Cyan glow */}
        <div
          className="
            absolute
            left-[15%]
            top-[20%]
            h-[250px]
            w-[250px]
            rounded-full
            bg-cyan-500/5
            blur-[100px]
          "
        />

        {/* Purple glow */}
        <div
          className="
            absolute
            bottom-[10%]
            right-[15%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-purple-600/5
            blur-[120px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)]
            [background-size:50px_50px]
          "
        />
      </div>

      {/* ================= ANIMATED RINGS ================= */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

        <div
          className="
            h-[280px]
            w-[280px]
            animate-pulse
            rounded-full
            border
            border-cyan-400/10
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[380px]
            w-[380px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-blue-500/5
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[480px]
            w-[480px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-purple-500/5
          "
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 flex flex-col items-center text-center">

        {/* LOGO */}

        <div className="relative h-44 w-44 animate-[float_3s_ease-in-out_infinite]">

          {/* Logo glow */}
          <div
            className="
              absolute
              inset-0
              rounded-full
              bg-cyan-400/10
              blur-3xl
            "
          />

          <Image
            src="/AI.png"
            alt="DevPilot AI"
            fill
            priority
            sizes="176px"
            className="
              relative
              object-contain
              drop-shadow-[0_0_35px_rgba(0,200,255,0.35)]
            "
          />
        </div>

        {/* ================= TITLE ================= */}

        <h1
          className="
            mt-8
            text-4xl
            font-bold
            tracking-tight
            sm:text-5xl
          "
        >
          DevPilot{" "}
          <span
            className="
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-purple-500
              bg-clip-text
              text-transparent
            "
          >
            AI
          </span>
        </h1>

        {/* Subtitle */}

        <p className="mt-3 text-base text-gray-400 sm:text-lg">
          Your Personal AI Agent
        </p>

        {/* Description */}

        <p className="mt-2 max-w-md px-6 text-sm text-gray-600">
          Your intelligent assistant for coding, research,
          automation and everyday tasks.
        </p>

        {/* ================= LOADING ================= */}

        <div className="mt-10 flex items-center gap-2">

          <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400" />

          <span
            className="
              h-2
              w-2
              animate-bounce
              rounded-full
              bg-blue-500
              [animation-delay:150ms]
            "
          />

          <span
            className="
              h-2
              w-2
              animate-bounce
              rounded-full
              bg-purple-500
              [animation-delay:300ms]
            "
          />
        </div>

        {/* Status */}

        <p className="mt-4 text-xs tracking-[0.2em] text-gray-600">
          INITIALIZING DEV PILOT
        </p>

      </div>

      {/* ================= BOTTOM ================= */}

      <div className="absolute bottom-7 left-0 right-0 text-center">

        <p className="text-xs text-gray-700">
          DEV
          <span className="text-gray-600">
            PILOT
          </span>{" "}
          AI
        </p>

      </div>

      {/* ================= ANIMATION ================= */}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>

    </main>
  );
}