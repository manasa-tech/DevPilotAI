"use client";

import { useState } from "react";
import {
  AlertCircle,
  Bug,
  Check,
  ChevronDown,
  Clipboard,
  Code2,
  FileWarning,
  Loader2,
  Sparkles,
  Wrench,
} from "lucide-react";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

const languages = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C++",
  "C",
];

const exampleCode = `function calculateAverage(numbers) {
  let total = 0;

  for (let i = 0; i <= numbers.length; i++) {
    total += numbers[i];
  }

  return total / numbers.length;
}`;

const exampleError =
  "TypeError: Cannot read properties of undefined (reading '...')";

export default function DebugPage() {
  const [code, setCode] = useState(exampleCode);
  const [error, setError] = useState(exampleError);
  const [language, setLanguage] = useState("JavaScript");

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);
  const [copied, setCopied] = useState(false);

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleAnalyze = () => {
    if (!code.trim()) return;

    setIsAnalyzing(true);
    setAnalyzed(false);

    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalyzed(true);
    }, 1400);
  };

  const correctedCode = `function calculateAverage(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total / numbers.length;
}`;

  const copyCorrectedCode = async () => {
    await navigator.clipboard.writeText(correctedCode);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#050507] text-white">
      {/* Shared Sidebar */}
      <Sidebar
        mobileOpen={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
      />

      {/* Main */}
      <main className="lg:ml-72">
        {/* Shared Header */}
        <Header
          title="Debug Code"
          description="Find and fix errors with AI-powered debugging"
          onMenuClick={() => setMobileSidebarOpen(true)}
        />

        <div className="p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            {/* Intro */}
            <div className="mb-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5">
                <BugIcon />

                <span className="text-xs font-medium text-red-300">
                  AI Debugger
                </span>
              </div>

              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Fix your code
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
                Paste your code and error message below. DevPilot will
                analyze the problem and suggest a corrected version.
              </p>
            </div>

            {/* Input Grid */}
            <div className="grid gap-6 xl:grid-cols-2">
              {/* Code */}
              <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0f]">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-4 sm:px-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10">
                      <Code2 className="h-4 w-4 text-violet-400" />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold">
                        Your Code
                      </h3>

                      <p className="text-xs text-zinc-600">
                        Paste the code causing the issue
                      </p>
                    </div>
                  </div>

                  {/* Language */}
                  <div className="relative">
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="appearance-none rounded-lg border border-white/10 bg-[#111116] py-2 pl-3 pr-9 text-xs text-zinc-300 outline-none transition focus:border-violet-500/50"
                    >
                      {languages.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>

                    <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" />
                  </div>
                </div>

                <div className="p-4">
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-[#070709]">
                    {/* Editor Header */}
                    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />

                      <span className="ml-2 text-xs text-zinc-600">
                        {language}
                      </span>
                    </div>

                    <textarea
                      value={code}
                      onChange={(e) => {
                        setCode(e.target.value);
                        setAnalyzed(false);
                      }}
                      spellCheck={false}
                      className="min-h-[320px] w-full resize-none bg-transparent p-5 font-mono text-sm leading-7 text-zinc-300 outline-none placeholder:text-zinc-700 sm:min-h-[350px]"
                      placeholder="Paste your code here..."
                    />
                  </div>

                  {/* Error */}
                  <div className="mt-4">
                    <div className="mb-2 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-red-400" />

                      <label className="text-xs font-medium text-zinc-300">
                        Error Message
                      </label>
                    </div>

                    <textarea
                      value={error}
                      onChange={(e) => {
                        setError(e.target.value);
                        setAnalyzed(false);
                      }}
                      rows={3}
                      className="w-full resize-none rounded-xl border border-red-500/20 bg-red-500/[0.03] p-4 font-mono text-xs leading-6 text-red-300 outline-none placeholder:text-zinc-700 focus:border-red-500/40"
                      placeholder="Paste the error message here..."
                    />
                  </div>

                  {/* Analyze */}
                  <button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing || !code.trim()}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Analyzing Error...
                      </>
                    ) : (
                      <>
                        <Wrench className="h-4 w-4" />
                        Analyze & Fix
                      </>
                    )}
                  </button>
                </div>
              </section>

              {/* Result */}
              <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0f]">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-4 sm:px-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10">
                      <Sparkles className="h-4 w-4 text-emerald-400" />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold">
                        Debug Result
                      </h3>

                      <p className="text-xs text-zinc-600">
                        AI analysis and suggested fix
                      </p>
                    </div>
                  </div>

                  {analyzed && (
                    <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                      <span className="text-[10px] font-medium text-emerald-300">
                        Issue Found
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  {!analyzed && !isAnalyzing ? (
                    <EmptyState />
                  ) : isAnalyzing ? (
                    <LoadingState />
                  ) : (
                    <DebugResult
                      correctedCode={correctedCode}
                      copied={copied}
                      onCopy={copyCorrectedCode}
                    />
                  )}
                </div>
              </section>
            </div>

            {/* Tips */}
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <InfoCard
                icon={<FileWarning className="h-4 w-4" />}
                title="Error Analysis"
                description="Understand exactly why your code is failing."
              />

              <InfoCard
                icon={<Wrench className="h-4 w-4" />}
                title="Suggested Fix"
                description="Get an improved version of your code."
              />

              <InfoCard
                icon={<Sparkles className="h-4 w-4" />}
                title="AI Explanation"
                description="Learn what caused the problem and how to avoid it."
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* ---------------------------------- */
/* Components                         */
/* ---------------------------------- */

function BugIcon() {
  return (
    <Bug className="h-3.5 w-3.5 text-red-400" />
  );
}

function EmptyState() {
  return (
    <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10">
        <Bug className="h-7 w-7 text-red-400" />
      </div>

      <h3 className="text-base font-semibold text-zinc-200">
        Ready to debug
      </h3>

      <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-600">
        Add your code and error message on the left, then click
        &quot;Analyze & Fix&quot;.
      </p>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="flex min-h-[500px] flex-col items-center justify-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10">
        <Sparkles className="h-6 w-6 animate-pulse text-violet-400" />
      </div>

      <p className="mt-5 text-sm font-medium text-zinc-300">
        Analyzing your code...
      </p>

      <p className="mt-2 text-xs text-zinc-600">
        Looking for the cause of the error
      </p>

      <div className="mt-4 flex gap-1.5">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-400" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-400 [animation-delay:150ms]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-400 [animation-delay:300ms]" />
      </div>
    </div>
  );
}

function DebugResult({
  correctedCode,
  copied,
  onCopy,
}: {
  correctedCode: string;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <div className="space-y-6">
      {/* Problem */}
      <div>
        <div className="mb-2 flex items-center gap-2">
          <AlertCircle className="h-4 w-4 text-red-400" />

          <h4 className="text-sm font-semibold text-white">
            Problem Found
          </h4>
        </div>

        <p className="text-sm leading-6 text-zinc-400">
          The loop uses{" "}
          <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-xs text-red-300">
            &lt;=
          </code>{" "}
          instead of{" "}
          <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-xs text-emerald-300">
            &lt;
          </code>
          .
        </p>
      </div>

      {/* Explanation */}
      <div className="rounded-xl border border-red-500/10 bg-red-500/[0.03] p-4">
        <h4 className="mb-2 text-sm font-semibold text-zinc-200">
          Why this happens
        </h4>

        <p className="text-xs leading-6 text-zinc-500">
          Array indexes start at 0 and end at{" "}
          <code className="font-mono text-zinc-300">
            length - 1
          </code>
          . Using{" "}
          <code className="font-mono text-red-300">
            i &lt;= numbers.length
          </code>{" "}
          causes the loop to access an index that does not exist.
        </p>
      </div>

      {/* Suggested Fix */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wrench className="h-4 w-4 text-emerald-400" />

            <h4 className="text-sm font-semibold text-white">
              Suggested Fix
            </h4>
          </div>

          <button
            onClick={onCopy}
            className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-400 transition hover:bg-white/5 hover:text-white"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                Copied
              </>
            ) : (
              <>
                <Clipboard className="h-3.5 w-3.5" />
                Copy
              </>
            )}
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#070709]">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />

            <span className="ml-2 text-xs text-zinc-600">
              corrected-code
            </span>
          </div>

          <pre className="max-h-[280px] overflow-auto p-4 font-mono text-xs leading-6 text-zinc-300">
            {correctedCode}
          </pre>
        </div>
      </div>

      {/* Recommendation */}
      <div className="flex gap-3 rounded-xl border border-emerald-500/10 bg-emerald-500/[0.03] p-4">
        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />

        <div>
          <p className="text-sm font-medium text-zinc-200">
            Fix applied
          </p>

          <p className="mt-1 text-xs leading-5 text-zinc-600">
            Change the loop condition from{" "}
            <code className="font-mono text-zinc-400">
              i &lt;= numbers.length
            </code>{" "}
            to{" "}
            <code className="font-mono text-emerald-400">
              i &lt; numbers.length
            </code>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b0b0f] p-5 transition hover:border-violet-500/20">
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-violet-400">
        {icon}
      </div>

      <h3 className="text-sm font-semibold text-zinc-200">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-zinc-600">
        {description}
      </p>
    </div>
  );
}