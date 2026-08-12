"use client";

import { useState } from "react";
import {
  Bot,
  MessageSquare,
  LayoutDashboard,
  Users,
  Globe,
  Terminal,
  FolderOpen,
  FileText,
  Brain,
  Wrench,
  Settings,
  Mic,
  Paperclip,
  Send,
  CheckCircle2,
  Clock,
  Zap,
  Plus,
  Search,
} from "lucide-react";

type Message = {
  role: "user" | "assistant";
  text: string;
  time: string;
};

const navigation = [
  { name: "Chat", icon: MessageSquare },
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Agents", icon: Users },
  { name: "Browser", icon: Globe },
  { name: "Terminal", icon: Terminal },
  { name: "Files", icon: FolderOpen },
  { name: "Documents", icon: FileText },
  { name: "Memory", icon: Brain },
  { name: "Tools", icon: Wrench },
  { name: "Settings", icon: Settings },
];

const agents = [
  "Coder Agent",
  "Browser Agent",
  "Research Agent",
  "Terminal Agent",
  "Memory Agent",
];

export default function Home() {
  const [active, setActive] = useState("Chat");
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text:
        "Hello! 👋\n\nI'm DevPilot AI, your personal AI engineering assistant.\n\nI can help you code, research, browse the web, work with files, execute tasks and automate your workflow.\n\nWhat would you like me to do?",
      time: "10:30 AM",
    },
  ]);

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = input.trim();

    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        text: userMessage,
        time: "Just now",
      },
    ]);

    setInput("");

    /*
      TEMPORARY RESPONSE

      Later this will become:

      fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ message: userMessage })
      })

      and your backend will connect to Gemini.
    */

    setTimeout(() => {
      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          text:
            "I received your command. 🤖\n\nMy AI brain is ready to be connected to the backend.",
          time: "Just now",
        },
      ]);
    }, 600);
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#050811] text-white">

      {/* =====================================================
          LEFT SIDEBAR
      ====================================================== */}

      <aside className="hidden w-[230px] shrink-0 flex-col border-r border-white/[0.08] bg-[#080b14] lg:flex">

        {/* Logo */}

        <div className="flex h-[70px] items-center gap-3 border-b border-white/[0.08] px-5">

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_25px_rgba(59,130,246,0.35)]">
            <Bot size={21} />
          </div>

          <div className="text-lg font-semibold">
            DevPilot{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              AI
            </span>
          </div>

        </div>

        {/* Navigation */}

        <div className="flex-1 overflow-y-auto px-3 py-5">

          <p className="mb-4 px-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-600">
            Workspace
          </p>

          <div className="space-y-1">

            {navigation.map((item) => {
              const Icon = item.icon;
              const selected = active === item.name;

              return (
                <button
                  key={item.name}
                  onClick={() => setActive(item.name)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                    selected
                      ? "bg-gradient-to-r from-blue-600/20 to-purple-600/10 text-white ring-1 ring-blue-500/20"
                      : "text-gray-500 hover:bg-white/[0.04] hover:text-gray-200"
                  }`}
                >
                  <Icon
                    size={17}
                    className={
                      selected ? "text-cyan-400" : "text-gray-500"
                    }
                  />

                  {item.name}
                </button>
              );
            })}

          </div>
        </div>

        {/* User */}

        <div className="border-t border-white/[0.08] p-3">

          <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-500 font-semibold">
              M
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium">Manasa</p>
              <p className="text-[11px] text-gray-500">
                Personal AI
              </p>
            </div>

          </div>

        </div>
      </aside>

      {/* =====================================================
          MAIN APPLICATION
      ====================================================== */}

      <main className="flex min-w-0 flex-1 flex-col">

        {/* TOP BAR */}

        <header className="flex h-[70px] shrink-0 items-center justify-between border-b border-white/[0.08] bg-[#080b14] px-5">

          <div className="flex items-center gap-3">

            <div className="lg:hidden">
              <Bot className="text-cyan-400" />
            </div>

            <div>
              <h1 className="text-sm font-semibold">
                DevPilot AI
              </h1>

              <div className="flex items-center gap-2 text-[11px] text-gray-500">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                AI Agent Online
              </div>
            </div>

          </div>

          <div className="hidden items-center gap-3 md:flex">

            <div className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-2">
              <Search size={15} className="text-gray-600" />

              <input
                placeholder="Search..."
                className="w-32 bg-transparent text-xs outline-none placeholder:text-gray-600"
              />
            </div>

            <button className="rounded-xl border border-white/[0.08] p-2 text-gray-500 hover:text-white">
              <Plus size={18} />
            </button>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-500 text-xs font-semibold">
              M
            </div>

          </div>

        </header>

        {/* CONTENT */}

        <div className="flex min-h-0 flex-1">

          {/* =================================================
              CHAT
          ================================================== */}

          <section className="flex min-w-0 flex-1 flex-col">

            {/* Chat messages */}

            <div className="flex-1 overflow-y-auto">

              <div className="mx-auto max-w-4xl px-5 pb-10">

                {/* Greeting */}

                <div className="py-12 text-center">

                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-purple-500/10 shadow-[0_0_35px_rgba(59,130,246,0.15)]">

                    <Bot
                      size={32}
                      className="text-cyan-400"
                    />

                  </div>

                  <h2 className="text-4xl font-bold">

                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                      Hello!
                    </span>

                  </h2>

                  <p className="mt-3 text-sm text-gray-400">
                    I'm DevPilot AI, your personal AI agent.
                  </p>

                  <p className="mt-1 text-sm text-gray-600">
                    Tell me what you want to accomplish.
                  </p>

                </div>

                {/* Messages */}

                <div className="space-y-6">

                  {messages.map((message, index) => (

                    <div
                      key={index}
                      className={`flex ${
                        message.role === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >

                      {message.role === "assistant" && (
                        <div className="mr-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-400/50 bg-[#0b1730]">
                          <Bot
                            size={19}
                            className="text-cyan-400"
                          />
                        </div>
                      )}

                      <div
                        className={`max-w-[650px] rounded-2xl border px-5 py-4 ${
                          message.role === "assistant"
                            ? "border-white/[0.08] bg-[#0d1220]"
                            : "border-purple-500/20 bg-gradient-to-br from-purple-600/20 to-blue-600/20"
                        }`}
                      >

                        {message.role === "assistant" && (
                          <p className="mb-2 text-sm font-semibold">
                            DevPilot AI
                          </p>
                        )}

                        <p className="whitespace-pre-line text-sm leading-7 text-gray-300">
                          {message.text}
                        </p>

                        <p className="mt-2 text-right text-[10px] text-gray-600">
                          {message.time}
                        </p>

                      </div>

                      {message.role === "user" && (
                        <div className="ml-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-500 text-xs font-semibold">
                          M
                        </div>
                      )}

                    </div>

                  ))}

                </div>

              </div>

            </div>

            {/* =================================================
                COMMAND BAR
            ================================================== */}

            <div className="border-t border-white/[0.08] bg-[#080b14] p-4">

              <div className="mx-auto max-w-4xl">

                <div className="flex items-center rounded-2xl border border-blue-500/50 bg-[#0b101c] p-2 shadow-[0_0_30px_rgba(37,99,235,0.08)]">

                  <input
                    value={input}
                    onChange={(event) =>
                      setInput(event.target.value)
                    }
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        sendMessage();
                      }
                    }}
                    placeholder="Ask anything or give a command..."
                    className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-gray-600"
                  />

                  <button className="mr-1 flex h-10 w-10 items-center justify-center rounded-xl text-gray-500 hover:bg-white/[0.05] hover:text-cyan-400">
                    <Mic size={19} />
                  </button>

                  <button className="mr-1 flex h-10 w-10 items-center justify-center rounded-xl text-gray-500 hover:bg-white/[0.05] hover:text-white">
                    <Paperclip size={18} />
                  </button>

                  <button
                    onClick={sendMessage}
                    className="flex h-10 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-[0_0_20px_rgba(99,102,241,0.3)] transition hover:scale-105"
                  >
                    <Send size={18} />
                  </button>

                </div>

                {/* Quick commands */}

                <div className="mt-3 flex gap-2 overflow-x-auto">

                  {[
                    "Build a website",
                    "Write code",
                    "Research this",
                    "Open browser",
                    "Run command",
                  ].map((command) => (

                    <button
                      key={command}
                      onClick={() => setInput(command)}
                      className="whitespace-nowrap rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-[11px] text-gray-500 hover:border-blue-500/30 hover:text-gray-300"
                    >
                      {command}
                    </button>

                  ))}

                </div>

              </div>

            </div>

          </section>

          {/* =================================================
              RIGHT AGENT PANEL
          ================================================== */}

          <aside className="hidden w-[300px] shrink-0 overflow-y-auto border-l border-white/[0.08] bg-[#080b14] xl:block">

            <div className="space-y-4 p-4">

              {/* Active Agents */}

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4">

                <div className="mb-5 flex items-center justify-between">

                  <h3 className="text-sm font-semibold">
                    Active Agents
                  </h3>

                  <button className="rounded-lg border border-white/[0.08] px-3 py-1.5 text-[10px] text-gray-500">
                    Manage
                  </button>

                </div>

                <div className="grid grid-cols-2 gap-4">

                  {agents.map((agent) => (

                    <div
                      key={agent}
                      className="flex items-center gap-2"
                    >

                      <Bot
                        size={14}
                        className="text-gray-500"
                      />

                      <span className="truncate text-[11px] text-gray-400">
                        {agent}
                      </span>

                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />

                    </div>

                  ))}

                </div>

              </div>

              {/* System Status */}

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4">

                <h3 className="mb-5 text-sm font-semibold">
                  System Status
                </h3>

                <div className="space-y-4 text-xs">

                  <Status
                    name="AI Agents"
                    value="6 Active"
                    color="text-cyan-400"
                  />

                  <Status
                    name="Browser"
                    value="● Online"
                    color="text-green-400"
                  />

                  <Status
                    name="Terminal"
                    value="● Ready"
                    color="text-green-400"
                  />

                  <Status
                    name="Memory"
                    value="● Optimized"
                    color="text-green-400"
                  />

                </div>

              </div>

              {/* Today's Overview */}

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4">

                <h3 className="mb-4 text-sm font-semibold">
                  Today's Overview
                </h3>

                <div className="grid grid-cols-3 gap-2">

                  <Stat
                    icon={<CheckCircle2 size={15} />}
                    number="12"
                    text="Tasks"
                  />

                  <Stat
                    icon={<MessageSquare size={15} />}
                    number="24"
                    text="Messages"
                  />

                  <Stat
                    icon={<Clock size={15} />}
                    number="18"
                    text="Time Saved"
                  />

                </div>

              </div>

              {/* Agent ready */}

              <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/[0.08] to-purple-500/[0.05] p-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                    <Zap
                      size={18}
                      className="text-cyan-400"
                    />
                  </div>

                  <div>

                    <p className="text-xs font-semibold">
                      DevPilot is ready
                    </p>

                    <p className="mt-1 text-[10px] text-gray-500">
                      Waiting for your command
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </aside>

        </div>

      </main>
    </div>
  );
}

/* =========================================================
   STATUS COMPONENT
========================================================= */

function Status({
  name,
  value,
  color,
}: {
  name: string;
  value: string;
  color: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-500">{name}</span>

      <span className={color}>{value}</span>
    </div>
  );
}

/* =========================================================
   STAT COMPONENT
========================================================= */

function Stat({
  icon,
  number,
  text,
}: {
  icon: React.ReactNode;
  number: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-black/10 p-3">

      <div className="text-blue-400">
        {icon}
      </div>

      <p className="mt-2 text-xl font-semibold">
        {number}
      </p>

      <p className="mt-1 text-[9px] text-gray-600">
        {text}
      </p>

    </div>
  );
}
