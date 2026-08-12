"use client";

import { useState } from "react";
import type { ElementType, KeyboardEvent, ReactNode } from "react";

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
  Plus,
  Search,
  Mic,
  Paperclip,
  Send,
  CheckCircle2,
  Circle,
  Clock3,
  Zap,
  Code2,
  Play,
  Database,
  Activity,
} from "lucide-react";

import DevPilotIntro from "@/components/layout/intro/DevPilotIntro";

type PageName =
  | "Chat"
  | "Dashboard"
  | "Agents"
  | "Browser"
  | "Terminal"
  | "Files"
  | "Documents"
  | "Memory"
  | "Tools"
  | "Settings";

type Message = {
  role: "user" | "assistant";
  text: string;
};

const menuItems: {
  name: PageName;
  icon: ElementType;
}[] = [
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

const agentList = [
  {
    name: "Coder Agent",
    description: "Write, explain and debug code",
    icon: Code2,
  },
  {
    name: "Browser Agent",
    description: "Browse and research the web",
    icon: Globe,
  },
  {
    name: "Research Agent",
    description: "Research and summarize information",
    icon: Search,
  },
  {
    name: "Terminal Agent",
    description: "Execute terminal commands",
    icon: Terminal,
  },
  {
    name: "Memory Agent",
    description: "Store and retrieve context",
    icon: Brain,
  },
  {
    name: "Automation Agent",
    description: "Automate repetitive tasks",
    icon: Zap,
  },
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [activePage, setActivePage] = useState<PageName>("Chat");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text:
        "Hello! 👋\n\nI'm DevPilot AI, your personal AI engineering assistant.\n\nI can help you code, debug, research, automate tasks, browse the web and work with your projects.\n\nWhat would you like me to do?",
    },
  ]);

  const sendMessage = async () => {
    const userMessage = message.trim();

    if (!userMessage || isLoading) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setIsLoading(true);

    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

      const response = await fetch(`${apiUrl}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      if (!response.ok) {
        throw new Error(`Backend returned ${response.status}`);
      }

      const data = await response.json();

      const assistantResponse =
        data.response ??
        data.message ??
        data.reply ??
        "I received your command, but the backend returned no response.";

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: assistantResponse,
        },
      ]);
    } catch (error) {
      console.error("DevPilot API error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            "I received your command. 🤖\n\nThe DevPilot backend is currently unavailable. Once the backend is running, I'll be able to process your command.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage();
    }
  };

  const startNewTask = () => {
    setActivePage("Chat");
    setMessages([
      {
        role: "assistant",
        text:
          "New task started. 🚀\n\nI'm ready. What would you like me to work on?",
      },
    ]);
    setMessage("");
  };

  return (
    <>
      {showIntro && (
        <DevPilotIntro onComplete={() => setShowIntro(false)} />
      )}

      <main className="flex h-screen min-h-screen overflow-hidden bg-[#060812] text-white">
        {/* =====================================================
            LEFT SIDEBAR
        ====================================================== */}

        <aside className="hidden h-screen w-[300px] shrink-0 flex-col border-r border-[#171d2c] bg-[#080b15] lg:flex">
          {/* BRAND */}

          <div className="flex h-[94px] items-center border-b border-[#171d2c] px-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_28px_rgba(59,130,246,0.25)]">
              <Bot size={27} strokeWidth={2.1} />
            </div>

            <div className="ml-4">
              <h1 className="text-[23px] font-bold tracking-tight">
                DevPilot{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  AI
                </span>
              </h1>

              <div className="mt-1 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
                <span className="text-xs text-slate-400">
                  AI Agent Online
                </span>
              </div>
            </div>
          </div>

          {/* NEW TASK */}

          <div className="px-5 pt-5">
            <button
              type="button"
              onClick={startNewTask}
              className="flex w-full items-center gap-3 rounded-xl border border-blue-500/30 bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-5 py-3.5 transition hover:border-cyan-400/40 hover:bg-blue-500/20"
            >
              <Plus size={19} className="text-cyan-400" />

              <span className="font-medium">New Task</span>
            </button>
          </div>

          {/* SEARCH */}

          <div className="mt-4 px-5">
            <div className="flex h-10 items-center rounded-lg border border-[#1b2336] bg-[#0d1220] px-3">
              <Search size={17} className="text-slate-500" />

              <input
                type="text"
                placeholder="Search..."
                className="ml-3 w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
              />
            </div>
          </div>

          {/* WORKSPACE */}

          <div className="mt-7 px-5">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.25em] text-slate-600">
              WORKSPACE
            </p>

            <div className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const active = activePage === item.name;

                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActivePage(item.name)}
                    className={`flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left transition ${
                      active
                        ? "border border-purple-500/30 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white"
                        : "text-slate-400 hover:bg-[#101625] hover:text-white"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={
                        active ? "text-cyan-400" : "text-slate-500"
                      }
                    />

                    <span className="text-[15px]">{item.name}</span>

                    {item.name === "Agents" && (
                      <span className="ml-auto rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400">
                        6
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* PROJECTS */}

          <div className="mt-8 px-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[11px] font-semibold tracking-[0.25em] text-slate-600">
                PROJECTS
              </p>

              <button
                type="button"
                className="text-slate-500 transition hover:text-white"
              >
                <Plus size={17} />
              </button>
            </div>

            <button
              type="button"
              className="w-full rounded-lg px-4 py-3 text-left transition hover:bg-[#101625]"
            >
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-cyan-400" />
                <span className="text-sm text-slate-300">
                  DevPilot AI
                </span>
              </div>
            </button>

            <button
              type="button"
              className="w-full rounded-lg px-4 py-3 text-left transition hover:bg-[#101625]"
            >
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-purple-400" />
                <span className="text-sm text-slate-300">
                  Personal Assistant
                </span>
              </div>
            </button>
          </div>

          {/* PROFILE */}

          <div className="mt-auto p-5">
            <div className="flex items-center gap-3 rounded-2xl border border-[#20283b] bg-[#0c111e] p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 font-bold">
                M
              </div>

              <div className="flex-1">
                <p className="text-sm font-medium">Manasa</p>

                <p className="mt-1 text-xs text-slate-500">
                  Personal AI
                </p>
              </div>

              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </div>
          </div>
        </aside>

        {/* =====================================================
            MAIN
        ====================================================== */}

        <section className="flex h-screen min-w-0 flex-1 flex-col">
          {/* HEADER */}

          <header className="flex h-[94px] shrink-0 items-center justify-between border-b border-[#171d2c] px-8">
            <div>
              <h2 className="text-xl font-semibold">{activePage}</h2>

              <div className="mt-1 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />

                <span className="text-sm text-slate-500">
                  DevPilot AI Agent
                </span>
              </div>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#20283b] bg-[#0b101c] transition hover:bg-[#111827]"
              >
                <Search size={19} className="text-slate-400" />
              </button>

              <button
                type="button"
                onClick={startNewTask}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#20283b] bg-[#0b101c] transition hover:bg-[#111827]"
              >
                <Plus size={19} className="text-slate-400" />
              </button>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 font-semibold">
                M
              </div>
            </div>
          </header>

          {/* PAGE */}

          {activePage === "Chat" && (
            <ChatPage
              messages={messages}
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
              handleKeyDown={handleKeyDown}
              isLoading={isLoading}
            />
          )}

          {activePage === "Dashboard" && <DashboardPage />}

          {activePage === "Agents" && <AgentsPage />}

          {activePage === "Browser" && <BrowserPage />}

          {activePage === "Terminal" && <TerminalPage />}

          {activePage === "Files" && <FilesPage />}

          {activePage === "Documents" && <DocumentsPage />}

          {activePage === "Memory" && <MemoryPage />}

          {activePage === "Tools" && <ToolsPage />}

          {activePage === "Settings" && <SettingsPage />}
        </section>
      </main>
    </>
  );
}

/* =========================================================
   CHAT
========================================================= */

function ChatPage({
  messages,
  message,
  setMessage,
  sendMessage,
  handleKeyDown,
  isLoading,
}: {
  messages: Message[];
  message: string;
  setMessage: (value: string) => void;
  sendMessage: () => Promise<void>;
  handleKeyDown: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  isLoading: boolean;
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex-1 overflow-y-auto px-8 py-8">
        <div className="mx-auto max-w-5xl space-y-7">
          {/* INTRO */}

          <div className="py-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-purple-500/10 shadow-[0_0_35px_rgba(59,130,246,0.15)]">
              <Bot size={32} className="text-cyan-400" />
            </div>

            <h2 className="mt-6 text-4xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Hello!
              </span>
            </h2>

            <p className="mt-3 text-sm text-gray-400">
              I&apos;m DevPilot AI, your personal AI agent.
            </p>

            <p className="mt-1 text-sm text-gray-600">
              Tell me what you want to accomplish.
            </p>
          </div>

          {/* MESSAGES */}

          {messages.map((msg, index) => {
            const isUser = msg.role === "user";

            return (
              <div
                key={`${msg.role}-${index}`}
                className={`flex ${
                  isUser ? "justify-end" : "justify-start"
                }`}
              >
                {!isUser && (
                  <div className="mr-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-400/50 bg-[#0b1730]">
                    <Bot size={22} className="text-cyan-400" />
                  </div>
                )}

                <div
                  className={`max-w-[680px] rounded-2xl px-6 py-5 ${
                    isUser
                      ? "bg-gradient-to-br from-purple-600/80 to-blue-600/80"
                      : "border border-[#20283b] bg-[#0e1422]"
                  }`}
                >
                  {!isUser && (
                    <p className="mb-3 font-semibold text-cyan-300">
                      DevPilot AI
                    </p>
                  )}

                  <p className="whitespace-pre-line text-[15px] leading-7 text-slate-200">
                    {msg.text}
                  </p>

                  <p className="mt-3 text-right text-[11px] text-slate-600">
                    {isUser ? "You" : "DevPilot"}
                  </p>
                </div>

                {isUser && (
                  <div className="ml-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 font-semibold">
                    M
                  </div>
                )}
              </div>
            );
          })}

          {/* LOADING */}

          {isLoading && (
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-purple-600">
                <Bot size={22} />
              </div>

              <div className="rounded-2xl border border-[#20283b] bg-[#0e1422] px-6 py-4">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:150ms]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:300ms]" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* COMMAND BOX */}

      <div className="px-8 pb-7">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-blue-500/60 bg-[#0b101d] shadow-[0_0_30px_rgba(37,99,235,0.07)]">
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything or give a command..."
              rows={2}
              className="w-full resize-none bg-transparent px-6 pt-5 text-white outline-none placeholder:text-slate-600"
            />

            <div className="flex items-center justify-between px-4 pb-4 pt-2">
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-white/5 hover:text-cyan-400"
                >
                  <Mic size={18} />
                </button>

                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-white/5 hover:text-white"
                >
                  <Paperclip size={18} />
                </button>
              </div>

              <button
                type="button"
                onClick={() => void sendMessage()}
                disabled={!message.trim() || isLoading}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send size={19} />
              </button>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "Build a website",
              "Write code",
              "Research this",
              "Open browser",
              "Run command",
            ].map((text) => (
              <button
                type="button"
                key={text}
                onClick={() => setMessage(text)}
                className="rounded-full border border-[#20283b] bg-[#0b101b] px-4 py-2 text-xs text-slate-400 transition hover:border-purple-500/40 hover:text-white"
              >
                {text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   DASHBOARD
========================================================= */

function DashboardPage() {
  const cards = [
    {
      title: "Tasks Completed",
      value: "12",
      icon: CheckCircle2,
    },
    {
      title: "Messages",
      value: "24",
      icon: MessageSquare,
    },
    {
      title: "Time Saved",
      value: "18h",
      icon: Clock3,
    },
    {
      title: "Active Agents",
      value: "6",
      icon: Bot,
    },
  ];

  return (
    <PageContainer
      title="Dashboard"
      subtitle="Overview of your personal AI agent"
    >
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-2xl border border-[#20283b] bg-[#0d1321] p-5"
            >
              <Icon size={22} className="mb-5 text-cyan-400" />

              <p className="text-3xl font-bold">{card.value}</p>

              <p className="mt-1 text-sm text-slate-500">
                {card.title}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <Panel title="Recent Activity">
          <ActivityRow text="DevPilot AI initialized" />
          <ActivityRow text="Chat agent is online" />
          <ActivityRow text="Memory system ready" />
          <ActivityRow text="Browser agent ready" />
        </Panel>

        <Panel title="System Status">
          <StatusRow name="AI Engine" value="Online" />
          <StatusRow name="Browser Agent" value="Ready" />
          <StatusRow name="Terminal Agent" value="Ready" />
          <StatusRow name="Memory" value="Optimized" />
        </Panel>
      </div>
    </PageContainer>
  );
}

/* =========================================================
   AGENTS
========================================================= */

function AgentsPage() {
  return (
    <PageContainer
      title="AI Agents"
      subtitle="Your personal AI workforce"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {agentList.map((agent) => {
          const Icon = agent.icon;

          return (
            <div
              key={agent.name}
              className="rounded-2xl border border-[#20283b] bg-[#0d1321] p-6 transition hover:border-cyan-500/30"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                  <Icon size={22} className="text-cyan-400" />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold">{agent.name}</h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {agent.description}
                  </p>
                </div>

                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]" />
              </div>

              <button
                type="button"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-[#283248] py-2.5 text-sm text-slate-300 transition hover:bg-white/5"
              >
                <Play size={14} />
                Open Agent
              </button>
            </div>
          );
        })}
      </div>
    </PageContainer>
  );
}

/* =========================================================
   BROWSER
========================================================= */

function BrowserPage() {
  return (
    <PageContainer
      title="Browser Agent"
      subtitle="Let DevPilot browse and research the web"
    >
      <div className="overflow-hidden rounded-2xl border border-[#20283b] bg-[#0d1321]">
        <div className="flex items-center gap-2 border-b border-[#20283b] px-5 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />

          <span className="ml-3 text-xs text-slate-600">
            DevPilot Browser
          </span>
        </div>

        <div className="p-5">
          <div className="flex gap-3">
            <div className="flex flex-1 items-center rounded-xl border border-[#20283b] bg-[#080c16] px-4">
              <Globe size={17} className="text-slate-500" />

              <input
                type="text"
                placeholder="Enter a website or search query..."
                className="ml-3 w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-slate-600"
              />
            </div>

            <button
              type="button"
              className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 text-sm font-medium"
            >
              Search
            </button>
          </div>

          <div className="mt-6 flex h-[350px] items-center justify-center rounded-xl border border-dashed border-[#25304a]">
            <div className="text-center">
              <Globe
                size={40}
                className="mx-auto text-slate-700"
              />

              <p className="mt-4 font-medium text-slate-500">
                Browser workspace
              </p>

              <p className="mt-1 text-xs text-slate-700">
                Real browser automation will be connected here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

/* =========================================================
   TERMINAL
========================================================= */

function TerminalPage() {
  return (
    <PageContainer
      title="Terminal"
      subtitle="Execute commands through your AI agent"
    >
      <div className="overflow-hidden rounded-2xl border border-[#20283b] bg-black">
        <div className="flex items-center gap-2 border-b border-[#20283b] px-5 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />

          <span className="ml-3 text-xs text-slate-600">
            DevPilot Terminal
          </span>
        </div>

        <div className="h-[420px] p-6 font-mono text-sm">
          <p className="text-emerald-400">
            devpilot@agent:~$
          </p>

          <p className="mt-3 text-slate-600">
            Terminal agent is ready...
          </p>

          <div className="mt-8 flex items-center gap-2">
            <span className="text-cyan-400">$</span>

            <input
              type="text"
              placeholder="Type a command..."
              className="flex-1 bg-transparent text-slate-300 outline-none placeholder:text-slate-700"
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

/* =========================================================
   FILES
========================================================= */

function FilesPage() {
  const files = [
    "package.json",
    "README.md",
    "next.config.ts",
    "app/page.tsx",
    "components/intro/DevPilotIntro.tsx",
  ];

  return (
    <PageContainer
      title="Files"
      subtitle="Files available to DevPilot"
    >
      <div className="overflow-hidden rounded-2xl border border-[#20283b] bg-[#0d1321]">
        {files.map((file) => (
          <div
            key={file}
            className="flex items-center gap-4 border-b border-[#171d2c] px-6 py-4 transition last:border-b-0 hover:bg-white/[0.02]"
          >
            <FileText size={18} className="text-cyan-400" />

            <span className="text-sm text-slate-300">
              {file}
            </span>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}

/* =========================================================
   DOCUMENTS
========================================================= */

function DocumentsPage() {
  return (
    <PageContainer
      title="Documents"
      subtitle="Knowledge sources for your AI agent"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {[
          "Project README",
          "AI Instructions",
          "Architecture",
          "API Documentation",
          "Personal Notes",
          "Reference Files",
        ].map((doc) => (
          <button
            key={doc}
            type="button"
            className="rounded-2xl border border-[#20283b] bg-[#0d1321] p-6 text-left transition hover:border-purple-500/30"
          >
            <FileText
              size={22}
              className="mb-5 text-purple-400"
            />

            <h3 className="font-semibold">{doc}</h3>

            <p className="mt-2 text-xs text-slate-500">
              Knowledge source
            </p>
          </button>
        ))}
      </div>
    </PageContainer>
  );
}

/* =========================================================
   MEMORY
========================================================= */

function MemoryPage() {
  const memories = [
    "Current project: DevPilot AI",
    "Preferred interface: dark futuristic UI",
    "AI backend: FastAPI",
    "Primary AI provider: Gemini",
    "Desktop assistant planned",
  ];

  return (
    <PageContainer
      title="Memory"
      subtitle="Information DevPilot can remember"
    >
      <div className="rounded-2xl border border-[#20283b] bg-[#0d1321] p-6">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
            <Brain
              size={23}
              className="text-purple-400"
            />
          </div>

          <div>
            <h3 className="font-semibold">
              Personal Memory
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Long-term context for DevPilot
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {memories.map((memory) => (
            <div
              key={memory}
              className="flex items-center gap-3 rounded-xl bg-[#080d18] p-4"
            >
              <Circle
                size={13}
                className="text-purple-400"
              />

              <span className="text-sm text-slate-400">
                {memory}
              </span>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

/* =========================================================
   TOOLS
========================================================= */

function ToolsPage() {
  const tools = [
    {
      name: "Code Generator",
      description: "Generate and modify source code",
      icon: Code2,
    },
    {
      name: "Web Search",
      description: "Search the web for information",
      icon: Search,
    },
    {
      name: "Browser",
      description: "Navigate websites automatically",
      icon: Globe,
    },
    {
      name: "Terminal",
      description: "Execute commands on the machine",
      icon: Terminal,
    },
    {
      name: "File Manager",
      description: "Read and manage files",
      icon: FolderOpen,
    },
    {
      name: "Automation",
      description: "Run automated workflows",
      icon: Zap,
    },
  ];

  return (
    <PageContainer
      title="Tools"
      subtitle="Tools DevPilot can use to complete tasks"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool) => {
          const Icon = tool.icon;

          return (
            <button
              type="button"
              key={tool.name}
              className="rounded-2xl border border-[#20283b] bg-[#0d1321] p-6 text-left transition hover:border-cyan-500/30"
            >
              <Icon
                size={22}
                className="mb-5 text-cyan-400"
              />

              <h3 className="font-semibold">{tool.name}</h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                {tool.description}
              </p>
            </button>
          );
        })}
      </div>
    </PageContainer>
  );
}

/* =========================================================
   SETTINGS
========================================================= */

function SettingsPage() {
  return (
    <PageContainer
      title="Settings"
      subtitle="Configure your personal AI agent"
    >
      <div className="max-w-3xl space-y-4">
        <SettingRow
          title="AI Agent"
          description="Enable the DevPilot AI assistant"
          enabled
        />

        <SettingRow
          title="Voice Wake Word"
          description='Wake DevPilot by saying "Hey DevPilot"'
          enabled
        />

        <SettingRow
          title="Memory"
          description="Allow DevPilot to remember useful context"
          enabled
        />

        <SettingRow
          title="Desktop Agent"
          description="Allow DevPilot to interact with the desktop"
          enabled
        />
      </div>
    </PageContainer>
  );
}

/* =========================================================
   COMMON COMPONENTS
========================================================= */

function PageContainer({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{title}</h1>

          <p className="mt-2 text-slate-500">
            {subtitle}
          </p>
        </div>

        {children}
      </div>
    </div>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[#20283b] bg-[#0d1321] p-6">
      <h2 className="mb-5 font-semibold">{title}</h2>

      <div className="space-y-1">{children}</div>
    </div>
  );
}

function ActivityRow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-[#171d2c] py-3 last:border-b-0">
      <Activity size={16} className="text-cyan-400" />

      <span className="text-sm text-slate-400">
        {text}
      </span>
    </div>
  );
}

function StatusRow({
  name,
  value,
}: {
  name: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-[#171d2c] py-3 last:border-b-0">
      <span className="text-sm text-slate-500">
        {name}
      </span>

      <span className="text-sm text-emerald-400">
        • {value}
      </span>
    </div>
  );
}

function SettingRow({
  title,
  description,
  enabled,
}: {
  title: string;
  description: string;
  enabled: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-[#20283b] bg-[#0d1321] p-5">
      <div>
        <h3 className="font-medium">{title}</h3>

        <p className="mt-1 text-sm text-slate-500">
          {description}
        </p>
      </div>

      <div
        className={`rounded-full p-1 transition ${
          enabled ? "bg-cyan-500" : "bg-slate-700"
        }`}
      >
        <div
          className={`h-4 w-4 rounded-full bg-white transition ${
            enabled ? "translate-x-5" : ""
          }`}
        />
      </div>
    </div>
  );
}