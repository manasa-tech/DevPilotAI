"use client";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code2,
  Lock,
  Mail,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailLogin = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    setLoading(true);

    // Demo login
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 800);
  };

  const handleGoogleLogin = () => {
    alert("Google authentication will be connected later.");
  };

  return (
    <main className="min-h-screen bg-[#050507] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/[0.07] blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(#71717a_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex h-20 items-center justify-between border-b border-white/5 px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 shadow-lg shadow-violet-600/20">
            <Sparkles className="h-4 w-4 text-white" />
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              DevPilot AI
            </p>

            <p className="text-[9px] text-zinc-600">
              AI Developer Assistant
            </p>
          </div>
        </Link>

        <Link
          href="/"
          className="flex items-center gap-2 text-xs text-zinc-600 transition hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to home
        </Link>
      </header>

      {/* Main */}
      <div className="relative z-10 flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">

          {/* Heading */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10">
              <Code2 className="h-6 w-6 text-violet-400" />
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-white">
              Welcome to DevPilot AI
            </h1>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-zinc-600">
              Sign in to your AI-powered development workspace and start building smarter.
            </p>
          </div>

          {/* Login Card */}
          <div className="rounded-2xl border border-white/10 bg-[#0b0b0f]/95 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-6">

            {/* Google Login */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
            >
              <span className="text-base font-bold">
                G
              </span>

              Continue with Google
            </button>

            {/* Divider */}
            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/5" />

              <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-700">
                OR
              </span>

              <div className="h-px flex-1 bg-white/5" />
            </div>

            {/* Email Login */}
            <form onSubmit={handleEmailLogin}>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-medium text-zinc-400"
              >
                Email address
              </label>

              <div className="relative">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-700" />

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] pl-10 pr-4 text-sm text-zinc-300 outline-none transition placeholder:text-zinc-700 focus:border-violet-500/40 focus:bg-violet-500/[0.02] focus:ring-1 focus:ring-violet-500/20"
                />
              </div>

              <button
                type="submit"
                disabled={
                  loading || !email.trim()
                }
                className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white text-sm font-semibold text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Continue with email
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            {/* Terms */}
            <p className="mt-5 text-center text-[10px] leading-5 text-zinc-700">
              By continuing, you agree to DevPilot AI&apos;s{" "}
              <button
                type="button"
                className="text-violet-400 transition hover:text-violet-300"
              >
                Terms of Service
              </button>{" "}
              and{" "}
              <button
                type="button"
                className="text-violet-400 transition hover:text-violet-300"
              >
                Privacy Policy
              </button>
              .
            </p>
          </div>

          {/* Security Features */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <Feature
              icon={Lock}
              title="Secure"
              description="Protected workspace"
            />

            <Feature
              icon={CheckCircle2}
              title="Developer First"
              description="Built for coding"
            />
          </div>

          {/* Bottom Text */}
          <p className="mt-7 text-center text-xs text-zinc-700">
            New to DevPilot AI?{" "}
            <Link
              href="/login"
              className="font-medium text-violet-400 transition hover:text-violet-300"
            >
              Get started
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Feature                                                                     */
/* -------------------------------------------------------------------------- */

function Feature({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{
    className?: string;
  }>;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
      <div className="flex items-center gap-2">
        <Icon className="h-3.5 w-3.5 text-violet-400" />

        <span className="text-[10px] font-medium text-zinc-400">
          {title}
        </span>
      </div>

      <p className="mt-1 text-[9px] text-zinc-700">
        {description}
      </p>
    </div>
  );
}