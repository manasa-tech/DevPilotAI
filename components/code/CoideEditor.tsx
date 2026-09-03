"use client";

import { Code2, FileCode2 } from "lucide-react";

interface CodeEditorProps {
  code: string;
  language: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function CodeEditor({
  code,
  language,
  onChange,
  placeholder = "Write or paste your code here...",
}: CodeEditorProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#070709]">
      {/* Editor Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-3">
          {/* Window Dots */}
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
          </div>

          <div className="h-4 w-px bg-white/10" />

          {/* File Icon */}
          <FileCode2 className="h-3.5 w-3.5 text-zinc-600" />

          <span className="text-xs text-zinc-500">
            {getFileName(language)}
          </span>
        </div>

        {/* Language */}
        <div className="flex items-center gap-1.5">
          <Code2 className="h-3.5 w-3.5 text-violet-400" />

          <span className="text-[10px] text-zinc-600">
            {language}
          </span>
        </div>
      </div>

      {/* Editor */}
      <div className="relative">
        {/* Line Numbers */}
        <div className="pointer-events-none absolute left-0 top-0 hidden w-12 select-none border-r border-white/5 bg-[#060608] py-5 text-right font-mono text-xs leading-7 text-zinc-800 sm:block">
          {getLineNumbers(code).map((number) => (
            <div key={number} className="pr-3">
              {number}
            </div>
          ))}
        </div>

        <textarea
          value={code}
          onChange={(event) => onChange(event.target.value)}
          spellCheck={false}
          placeholder={placeholder}
          className="min-h-[350px] w-full resize-none bg-transparent px-5 py-5 font-mono text-xs leading-7 text-zinc-300 outline-none placeholder:text-zinc-800 sm:pl-16 sm:text-sm"
        />
      </div>

      {/* Editor Footer */}
      <div className="flex items-center justify-between border-t border-white/5 px-4 py-2.5">
        <span className="text-[10px] text-zinc-700">
          {code.split("\n").length} lines
        </span>

        <span className="text-[10px] text-zinc-700">
          {code.length} characters
        </span>
      </div>
    </div>
  );
}

/* -------------------------------- */
/* Helpers                           */
/* -------------------------------- */

function getLineNumbers(code: string) {
  const totalLines = Math.max(code.split("\n").length, 1);

  return Array.from(
    { length: totalLines },
    (_, index) => index + 1
  );
}

function getFileName(language: string) {
  const fileNames: Record<string, string> = {
    JavaScript: "script.js",
    TypeScript: "script.ts",
    Python: "main.py",
    Java: "Main.java",
    "C++": "main.cpp",
    C: "main.c",
    HTML: "index.html",
    CSS: "styles.css",
  };

  return fileNames[language] || "code.txt";
}