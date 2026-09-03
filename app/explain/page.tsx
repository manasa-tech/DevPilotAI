"use client";

import { useState } from "react";
import {
  Check,
  ChevronDown,
  Clipboard,
  Code2,
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

const exampleCode = `function findLargest(numbers) {
  let largest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}`;

export default function ExplainPage() {
  const [code, setCode] = useState(exampleCode);
  const [language, setLanguage] = useState("JavaScript");
  const [isExplaining, setIsExplaining] = useState(false);
  const [explained, setExplained] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleExplain = () => {
    if (!code.trim()) return;

    setIsExplaining(true);
    setExplained(false);

    setTimeout(() => {
      setIsExplaining(false);
      setExplained(true);
    }, 1200);
  };

  const copyExplanation = async () => {
    const text = `
Overview:
This function finds the largest number in an array.

Key Concepts:
- Function
- Array
- for loop
- Conditional statement
- Variable comparison

Detailed Explanation:
The function receives an array of numbers. It assumes the first number is the largest initially. It then loops through the remaining numbers and compares each value with the current largest value. If a larger value is found, the largest variable is updated. Finally, the function returns the largest number.
    `.trim();

    await navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#050507] text-white">
      <Sidebar
        mobileOpen={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
      />

      <main className="lg:ml-72">
        <Header
          title="Explain Code"
          description="Understand your code with AI-powered explanations"
          onMenuClick={() => setMobileSidebarOpen(true)}
        />

        <div className="p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            {/* Page Intro */}
            <div className="mb-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5">
                <Sparkles className="h-3.5 w-3.5 text-violet-400" />

                <span className="text-xs font-medium text-violet-300">
                  AI Code Analysis
                </span>
              </div>

              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Understand your code
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
                Paste your code below and DevPilot will explain what it
                does, break down the important concepts, and make it
                easier to understand.
              </p>
            </div>

            {/* Main Grid */}
            <div className="grid gap-6 xl:grid-cols-2">
              {/* Code Input */}
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
                        Paste code to explain
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
                        setExplained(false);
                      }}
                      spellCheck={false}
                      className="min-h-[380px] w-full resize-none bg-transparent p-5 font-mono text-sm leading-7 text-zinc-300 outline-none placeholder:text-zinc-700 sm:min-h-[430px]"
                      placeholder="Paste your code here..."
                    />
                  </div>

                  <button
                    onClick={handleExplain}
                    disabled={isExplaining || !code.trim()}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isExplaining ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Analyzing Code...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4" />
                        Explain Code
                      </>
                    )}
                  </button>
                </div>
              </section>

              {/* Explanation */}
              <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0f]">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-4 sm:px-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10">
                      <Sparkles className="h-4 w-4 text-emerald-400" />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold">
                        AI Explanation
                      </h3>

                      <p className="text-xs text-zinc-600">
                        Understanding your code
                      </p>
                    </div>
                  </div>

                  {explained && (
                    <button
                      onClick={copyExplanation}
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
                  )}
                </div>

                <div className="p-5">
                  {!explained && !isExplaining ? (
                    <EmptyState />
                  ) : isExplaining ? (
                    <LoadingState />
                  ) : (
                    <ExplanationResult />
                  )}
                </div>
              </section>
            </div>

            {/* Info Cards */}
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <InfoCard
                title="Simple Explanation"
                description="Understand complex code in easy-to-follow language."
              />

              <InfoCard
                title="Key Concepts"
                description="Identify important programming concepts used in your code."
              />

              <InfoCard
                title="Step-by-Step"
                description="Follow the logic of your code from beginning to end."
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex min-h-[430px] flex-col items-center justify-center text-center">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10">
        <FileCode2 className="h-7 w-7 text-violet-400" />
      </div>

      <h3 className="text-base font-semibold text-zinc-200">
        Ready to explain
      </h3>

      <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-600">
        Add your code on the left and click &quot;Explain Code&quot;
        to get an AI-powered explanation.
      </p>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="flex min-h-[430px] flex-col items-center justify-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10">
        <Sparkles className="h-6 w-6 animate-pulse text-violet-400" />
      </div>

      <p className="mt-5 text-sm font-medium text-zinc-300">
        Understanding your code...
      </p>

      <div className="mt-4 flex gap-1.5">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-400" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-400 [animation-delay:150ms]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-400 [animation-delay:300ms]" />
      </div>
    </div>
  );
}

function ExplanationResult() {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="mb-2 text-sm font-semibold text-white">
          Overview
        </h4>

        <p className="text-sm leading-6 text-zinc-400">
          This function finds the largest number in an array. It
          checks each number and keeps track of the largest value
          found so far.
        </p>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-semibold text-white">
          Key Concepts
        </h4>

        <div className="flex flex-wrap gap-2">
          {[
            "Function",
            "Array",
            "for loop",
            "Conditional",
            "Variable",
            "Comparison",
          ].map((concept) => (
            <span
              key={concept}
              className="rounded-lg border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-xs text-violet-300"
            >
              {concept}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-semibold text-white">
          Step-by-Step Explanation
        </h4>

        <div className="space-y-3">
          <Step
            number="01"
            title="Receive the array"
            description="The function receives an array called numbers as its input."
          />

          <Step
            number="02"
            title="Set the initial value"
            description="The first element is stored in largest and treated as the largest value initially."
          />

          <Step
            number="03"
            title="Loop through the array"
            description="A for loop checks every remaining element in the array."
          />

          <Step
            number="04"
            title="Compare values"
            description="If the current number is greater than largest, largest is updated."
          />

          <Step
            number="05"
            title="Return the result"
            description="After checking every element, the function returns the largest value."
          />
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
        <h4 className="mb-3 text-sm font-semibold text-white">
          Complexity
        </h4>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-xs text-zinc-600">
              Time Complexity
            </p>

            <p className="mt-1 font-mono text-sm text-emerald-400">
              O(n)
            </p>
          </div>

          <div>
            <p className="text-xs text-zinc-600">
              Space Complexity
            </p>

            <p className="mt-1 font-mono text-sm text-emerald-400">
              O(1)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 font-mono text-[10px] text-violet-400">
        {number}
      </span>

      <div>
        <p className="text-sm font-medium text-zinc-300">
          {title}
        </p>

        <p className="mt-1 text-xs leading-5 text-zinc-600">
          {description}
        </p>
      </div>
    </div>
  );
}

function InfoCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b0b0f] p-5 transition hover:border-violet-500/20">
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">
        <Sparkles className="h-4 w-4 text-violet-400" />
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