"use client";

import { Check, Clipboard, Code2, Download } from "lucide-react";
import { useState } from "react";

interface CodeOutputProps {
  code: string;
  language: string;
  onDownload?: () => void;
}

export default function CodeOutput({
  code,
  language,
  onDownload,
}: CodeOutputProps) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };

  if (!code) {
    return (
      <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10">
          <Code2 className="h-7 w-7 text-violet-400" />
        </div>

        <h3 className="text-base font-semibold text-zinc-200">
          Your generated code will appear here
        </h3>

        <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-600">
          Describe what you want to build and generate your code
          with DevPilot AI.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#070709]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
          </div>

          <div className="h-4 w-px bg-white/10" />

          <Code2 className="h-3.5 w-3.5 text-violet-400" />

          <span className="text-xs text-zinc-500">
            {language}
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={copyCode}
            className="flex items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-1.5 text-[10px] text-zinc-500 transition hover:bg-white/5 hover:text-white"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 text-emerald-400" />
                Copied
              </>
            ) : (
              <>
                <Clipboard className="h-3 w-3" />
                Copy
              </>
            )}
          </button>

          {onDownload && (
            <button
              onClick={onDownload}
              className="flex items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-1.5 text-[10px] text-zinc-500 transition hover:bg-white/5 hover:text-white"
            >
              <Download className="h-3 w-3" />
              <span className="hidden sm:inline">
                Download
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Code */}
      <div className="max-h-[550px] overflow-auto">
        <pre className="p-5 font-mono text-xs leading-7 text-zinc-300 sm:text-sm">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}