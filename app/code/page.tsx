"use client";

import { useState } from "react";
import {
  Check,
  ChevronDown,
  Clipboard,
  Code2,
  Download,
  FileCode2,
  Loader2,
  Sparkles,
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
  "HTML",
  "CSS",
];

const demoCode = `function calculateSum(numbers) {
  let total = 0;

  for (const number of numbers) {
    total += number;
  }

  return total;
}`;

export default function CodePage() {
  const [prompt, setPrompt] = useState(
    "Create a JavaScript function that calculates the sum of an array of numbers."
  );

  const [language, setLanguage] = useState("JavaScript");
  const [generatedCode, setGeneratedCode] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleGenerate = () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setGeneratedCode("");
    setCopied(false);

    setTimeout(() => {
      setGeneratedCode(demoCode);
      setIsGenerating(false);
    }, 1400);
  };

  const copyCode = async () => {
    if (!generatedCode) return;

    await navigator.clipboard.writeText(generatedCode);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const downloadCode = () => {
    if (!generatedCode) return;

    const extension = getExtension(language);

    const blob = new Blob([generatedCode], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = `devpilot-generated.${extension}`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#050507] text-white">
      {/* Sidebar */}
      <Sidebar
        mobileOpen={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
      />

      {/* Main */}
      <main className="lg:ml-72">
        {/* Header */}
        <Header
          title="Generate Code"
          description="Turn your ideas into working code with AI"
          onMenuClick={() => setMobileSidebarOpen(true)}
        />

        <div className="p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            {/* Intro */}
            <div className="mb-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5">
                <Sparkles className="h-3.5 w-3.5 text-violet-400" />

                <span className="text-xs font-medium text-violet-300">
                  AI Code Generator
                </span>
              </div>

              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Build with natural language
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
                Describe what you want to build and DevPilot will
                generate clean, readable code for you.
              </p>
            </div>

            {/* Main Grid */}
            <div className="grid gap-6 xl:grid-cols-2">
              {/* Prompt */}
              <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0f]">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10">
                      <Sparkles className="h-4 w-4 text-violet-400" />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold">
                        Describe Your Code
                      </h3>

                      <p className="text-xs text-zinc-600">
                        Tell DevPilot what you want
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
                  <div className="rounded-xl border border-white/10 bg-[#070709]">
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="min-h-[360px] w-full resize-none bg-transparent p-5 text-sm leading-7 text-zinc-300 outline-none placeholder:text-zinc-700"
                      placeholder="Example: Create a React login form with email validation..."
                    />

                    <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
                      <span className="text-xs text-zinc-700">
                        {prompt.length} characters
                      </span>

                      <span className="text-xs text-zinc-600">
                        {language}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleGenerate}
                    disabled={isGenerating || !prompt.trim()}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Generating Code...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4" />
                        Generate Code
                      </>
                    )}
                  </button>
                </div>
              </section>

              {/* Generated Code */}
              <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0f]">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10">
                      <Code2 className="h-4 w-4 text-emerald-400" />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold">
                        Generated Code
                      </h3>

                      <p className="text-xs text-zinc-600">
                        Your AI-generated solution
                      </p>
                    </div>
                  </div>

                  {generatedCode && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={copyCode}
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

                      <button
                        onClick={downloadCode}
                        className="rounded-lg border border-white/10 p-2 text-zinc-400 transition hover:bg-white/5 hover:text-white"
                        aria-label="Download code"
                      >
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  {!generatedCode && !isGenerating ? (
                    <EmptyState />
                  ) : isGenerating ? (
                    <LoadingState />
                  ) : (
                    <CodeResult code={generatedCode} />
                  )}
                </div>
              </section>
            </div>

            {/* Feature Cards */}
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <InfoCard
                icon={<Sparkles className="h-4 w-4" />}
                title="Natural Language"
                description="Describe your idea normally instead of writing every line manually."
              />

              <InfoCard
                icon={<Code2 className="h-4 w-4" />}
                title="Multiple Languages"
                description="Generate code for JavaScript, Python, Java, C++, and more."
              />

              <InfoCard
                icon={<FileCode2 className="h-4 w-4" />}
                title="Clean Code"
                description="Get readable and structured code that is easy to understand."
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* -------------------------------- */
/* Empty State                       */
/* -------------------------------- */

function EmptyState() {
  return (
    <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10">
        <Code2 className="h-7 w-7 text-violet-400" />
      </div>

      <h3 className="text-base font-semibold text-zinc-200">
        Your code will appear here
      </h3>

      <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-600">
        Describe what you want to build and click Generate Code.
      </p>
    </div>
  );
}

/* -------------------------------- */
/* Loading State                     */
/* -------------------------------- */

function LoadingState() {
  return (
    <div className="flex min-h-[500px] flex-col items-center justify-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10">
        <Sparkles className="h-6 w-6 animate-pulse text-violet-400" />
      </div>

      <p className="mt-5 text-sm font-medium text-zinc-300">
        Generating your code...
      </p>

      <p className="mt-2 text-xs text-zinc-600">
        DevPilot is working on your request
      </p>

      <div className="mt-4 flex gap-1.5">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-400" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-400 [animation-delay:150ms]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-400 [animation-delay:300ms]" />
      </div>
    </div>
  );
}

/* -------------------------------- */
/* Code Result                       */
/* -------------------------------- */

function CodeResult({ code }: { code: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#070709]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />

        <span className="ml-2 text-xs text-zinc-600">
          generated-code
        </span>
      </div>

      <pre className="min-h-[500px] overflow-auto p-5 font-mono text-xs leading-6 text-zinc-300 sm:text-sm">
        {code}
      </pre>
    </div>
  );
}

/* -------------------------------- */
/* Info Card                         */
/* -------------------------------- */

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

/* -------------------------------- */
/* File Extension                    */
/* -------------------------------- */

function getExtension(language: string) {
  const extensions: Record<string, string> = {
    JavaScript: "js",
    TypeScript: "ts",
    Python: "py",
    Java: "java",
    "C++": "cpp",
    C: "c",
    HTML: "html",
    CSS: "css",
  };

  return extensions[language] || "txt";
}