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
  Activity,
  Code2,
  ShieldCheck,
  Database,
  Play,
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
  {
    name: "Coder Agent",
    description: "Writes and understands code",
    icon: Code2,
  },
  {
    name: "Browser Agent",
    description: "Browses and researches the web",
    icon: Globe,
  },
  {
    name: "Research Agent",
    description: "Researches information",
    icon: Brain,
  },
  {
    name: "Terminal Agent",
    description: "Runs terminal commands",
    icon: Terminal,
  },
  {
    name: "Memory Agent",
    description: "Manages your memories",
    icon: Database,
  },
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

    // TEMPORARY RESPONSE
    // Later replace this with your backend /api/chat call.

    setTimeout(() => {
      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          text:
            "I received your command. 🤖\n\nYour DevPilot AI backend can be connected here next.",
          time: "Just now",
        },
      ]);
    }, 600);
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#050811] text-white">

      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <aside className="hidden w-[230px] shrink-0 flex-col border-r border-white/[0.08] bg-[#080b14] lg:flex">

        {/* LOGO */}

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

        {/* NAVIGATION */}

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
                  type="button"
                  onClick={() => setActive(item.name)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm transition-all duration-200 ${
                    selected
                      ? "bg-gradient-to-r from-blue-600/20 to-purple-600/10 text-white ring-1 ring-blue-500/30"
                      : "text-gray-500 hover:bg-white/[0.05] hover:text-gray-200"
                  }`}
                >
                  <Icon
                    size={18}
                    className={
                      selected
                        ? "text-cyan-400"
                        : "text-gray-500"
                    }
                  />

                  <span>{item.name}</span>

                  {selected && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  )}
                </button>
              );
            })}

          </div>
        </div>

        {/* USER */}

        <div className="border-t border-white/[0.08] p-3">

          <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-500 font-semibold">
              M
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium">
                Manasa
              </p>

              <p className="text-[11px] text-gray-500">
                Personal AI
              </p>
            </div>

          </div>

        </div>

      </aside>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <main className="flex min-w-0 flex-1 flex-col">

        {/* TOP BAR */}

        <header className="flex h-[70px] shrink-0 items-center justify-between border-b border-white/[0.08] bg-[#080b14] px-5">

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 lg:hidden">
              <Bot
                size={20}
                className="text-cyan-400"
              />
            </div>

            <div>
              <h1 className="text-sm font-semibold">
                DevPilot AI
              </h1>

              <div className="flex items-center gap-2 text-[11px] text-gray-500">

                <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />

                AI Agent Online

              </div>
            </div>

          </div>

          <div className="hidden items-center gap-3 md:flex">

            <div className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-2">

              <Search
                size={15}
                className="text-gray-600"
              />

              <input
                placeholder="Search..."
                className="w-32 bg-transparent text-xs outline-none placeholder:text-gray-600"
              />

            </div>

            <button
              type="button"
              className="rounded-xl border border-white/[0.08] p-2 text-gray-500 transition hover:border-blue-500/30 hover:text-white"
            >
              <Plus size={18} />
            </button>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-500 text-xs font-semibold">
              M
            </div>

          </div>

        </header>

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div className="flex min-h-0 flex-1">

          {active === "Chat" && (
            <ChatPage
              input={input}
              setInput={setInput}
              messages={messages}
              sendMessage={sendMessage}
            />
          )}

          {active === "Dashboard" && <DashboardPage />}

          {active === "Agents" && <AgentsPage />}

          {active === "Browser" && <BrowserPage />}

          {active === "Terminal" && <TerminalPage />}

          {active === "Files" && <FilesPage />}

          {active === "Documents" && <DocumentsPage />}

          {active === "Memory" && <MemoryPage />}

          {active === "Tools" && <ToolsPage />}

          {active === "Settings" && <SettingsPage />}

        </div>

      </main>

    </div>
  );
}

/* =========================================================
   CHAT PAGE
========================================================= */

function ChatPage({
  input,
  setInput,
  messages,
  sendMessage,
}: {
  input: string;
  setInput: (value: string) => void;
  messages: Message[];
  sendMessage: () => void;
}) {
  return (
    <section className="flex min-w-0 flex-1 flex-col">

      <div className="flex-1 overflow-y-auto">

        <div className="mx-auto max-w-4xl px-5 pb-10">

          {/* GREETING */}

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

          {/* MESSAGES */}

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

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* INPUT */}

      <div className="border-t border-white/[0.08] bg-[#080b14] p-4">

        <div className="mx-auto max-w-4xl">

          <div className="flex items-center rounded-2xl border border-blue-500/50 bg-[#0b101c] p-2 shadow-[0_0_30px_rgba(37,99,235,0.08)]">

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Ask anything or give a command..."
              className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-gray-600"
            />

            <button
              type="button"
              className="mr-1 flex h-10 w-10 items-center justify-center rounded-xl text-gray-500 hover:bg-white/[0.05] hover:text-cyan-400"
            >
              <Mic size={19} />
            </button>

            <button
              type="button"
              className="mr-1 flex h-10 w-10 items-center justify-center rounded-xl text-gray-500 hover:bg-white/[0.05] hover:text-white"
            >
              <Paperclip size={18} />
            </button>

            <button
              type="button"
              onClick={sendMessage}
              className="flex h-10 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-[0_0_20px_rgba(99,102,241,0.3)] transition hover:scale-105"
            >
              <Send size={18} />
            </button>

          </div>

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
                type="button"
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
  );
}

/* =========================================================
   DASHBOARD
========================================================= */

function DashboardPage() {
  return (
    <PageContainer
      title="Dashboard"
      subtitle="Overview of your DevPilot AI system"
    >

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

        <DashboardCard
          icon={<CheckCircle2 />}
          title="Tasks Completed"
          value="12"
        />

        <DashboardCard
          icon={<MessageSquare />}
          title="Messages"
          value="24"
        />

        <DashboardCard
          icon={<Clock />}
          title="Time Saved"
          value="18h"
        />

        <DashboardCard
          icon={<Activity />}
          title="Agent Activity"
          value="98%"
        />

      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">

        <Panel title="System Status">

          <Status
            name="AI Engine"
            value="Online"
            color="text-green-400"
          />

          <Status
            name="Memory"
            value="Optimized"
            color="text-green-400"
          />

          <Status
            name="Browser Agent"
            value="Ready"
            color="text-green-400"
          />

          <Status
            name="Terminal Agent"
            value="Ready"
            color="text-green-400"
          />

        </Panel>

        <Panel title="Recent Activity">

          <ActivityRow text="Coder Agent completed a task" />

          <ActivityRow text="Memory updated" />

          <ActivityRow text="Browser Agent ready" />

          <ActivityRow text="DevPilot started" />

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
      subtitle="Manage the agents that power DevPilot"
    >

      <div className="grid gap-4 md:grid-cols-2">

        {agents.map((agent) => {
          const Icon = agent.icon;

          return (
            <div
              key={agent.name}
              className="rounded-2xl border border-white/[0.08] bg-[#0b101c] p-5 transition hover:border-blue-500/30"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">

                  <Icon
                    size={22}
                    className="text-cyan-400"
                  />

                </div>

                <div className="flex-1">

                  <h3 className="font-semibold">
                    {agent.name}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    {agent.description}
                  </p>

                </div>

                <span className="h-2 w-2 rounded-full bg-green-400" />

              </div>

              <button
                type="button"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.08] py-2 text-xs text-gray-400 hover:bg-white/[0.04] hover:text-white"
              >
                <Play size={13} />
                Run Agent
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

      <div className="rounded-2xl border border-white/[0.08] bg-[#0b101c] p-5">

        <div className="flex gap-2">

          <input
            placeholder="Enter a website or search query..."
            className="flex-1 rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3 text-sm outline-none focus:border-blue-500/50"
          />

          <button className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 text-sm">
            Browse
          </button>

        </div>

        <div className="mt-8 flex h-[350px] items-center justify-center rounded-xl border border-dashed border-white/[0.08]">

          <div className="text-center">

            <Globe
              size={40}
              className="mx-auto text-gray-700"
            />

            <p className="mt-3 text-sm text-gray-500">
              Browser workspace
            </p>

            <p className="mt-1 text-xs text-gray-700">
              Your browser agent will appear here.
            </p>

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

      <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#05070c]">

        <div className="flex items-center gap-2 border-b border-white/[0.08] px-4 py-3">

          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />

          <span className="ml-3 text-xs text-gray-600">
            DevPilot Terminal
          </span>

        </div>

        <div className="h-[400px] p-5 font-mono text-sm">

          <p className="text-green-400">
            DevPilot Terminal
          </p>

          <p className="mt-2 text-gray-600">
            Ready for commands...
          </p>

          <div className="mt-8 flex gap-2">

            <span className="text-cyan-400">
              $
            </span>

            <input
              className="flex-1 bg-transparent outline-none text-gray-300"
              placeholder="Type a command..."
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
  return (
    <PageContainer
      title="Files"
      subtitle="Manage files used by your AI agent"
    >

      <div className="grid gap-3">

        {[
          "project",
          "src",
          "documents",
          "downloads",
        ].map((folder) => (

          <div
            key={folder}
            className="flex items-center gap-4 rounded-xl border border-white/[0.08] bg-[#0b101c] p-4 hover:border-blue-500/30"
          >

            <FolderOpen
              size={20}
              className="text-yellow-400"
            />

            <span className="text-sm">
              {folder}
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
      subtitle="Documents available to DevPilot"
    >

      <EmptyState
        icon={<FileText size={40} />}
        title="No documents yet"
        text="Upload documents so DevPilot can read and understand them."
      />

    </PageContainer>
  );
}

/* =========================================================
   MEMORY
========================================================= */

function MemoryPage() {
  return (
    <PageContainer
      title="Memory"
      subtitle="What DevPilot remembers about your workspace"
    >

      <div className="space-y-3">

        {[
          "User prefers concise technical explanations.",
          "DevPilot project uses Next.js frontend.",
          "AI backend uses FastAPI.",
          "Gemini is the primary AI model.",
        ].map((memory, index) => (

          <div
            key={index}
            className="flex items-center gap-4 rounded-xl border border-white/[0.08] bg-[#0b101c] p-4"
          >

            <Brain
              size={18}
              className="text-purple-400"
            />

            <span className="text-sm text-gray-400">
              {memory}
            </span>

          </div>

        ))}

      </div>

    </PageContainer>
  );
}

/* =========================================================
   TOOLS
========================================================= */

function ToolsPage() {
  return (
    <PageContainer
      title="Tools"
      subtitle="Tools available to your AI agent"
    >

      <div className="grid gap-4 md:grid-cols-2">

        <ToolCard
          icon={<Terminal />}
          name="Terminal"
          description="Execute system commands"
        />

        <ToolCard
          icon={<Globe />}
          name="Web Browser"
          description="Browse and research websites"
        />

        <ToolCard
          icon={<FolderOpen />}
          name="File Manager"
          description="Read and manage files"
        />

        <ToolCard
          icon={<Database />}
          name="Memory"
          description="Store and retrieve information"
        />

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
      subtitle="Configure your DevPilot AI"
    >

      <div className="space-y-4">

        <Setting
          title="AI Engine"
          description="Primary AI model used by DevPilot"
          value="Gemini"
        />

        <Setting
          title="Voice Assistant"
          description="Enable wake word and voice commands"
          value="Enabled"
        />

        <Setting
          title="Memory"
          description="Allow DevPilot to remember useful information"
          value="Enabled"
        />

        <Setting
          title="Desktop Agent"
          description="Allow DevPilot to interact with desktop applications"
          value="Ready"
        />

      </div>

    </PageContainer>
  );
}

/* =========================================================
   SHARED COMPONENTS
========================================================= */

function PageContainer({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex-1 overflow-y-auto">

      <div className="mx-auto max-w-5xl p-6 md:p-10">

        <div className="mb-8">

          <h2 className="text-3xl font-bold">
            {title}
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            {subtitle}
          </p>

        </div>

        {children}

      </div>

    </section>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#0b101c] p-5">

      <h3 className="mb-5 text-sm font-semibold">
        {title}
      </h3>

      <div className="space-y-4">
        {children}
      </div>

    </div>
  );
}

function DashboardCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#0b101c] p-5">

      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-cyan-400">
        {icon}
      </div>

      <p className="text-2xl font-bold">
        {value}
      </p>

      <p className="mt-1 text-xs text-gray-500">
        {title}
      </p>

    </div>
  );
}

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

      <span className="text-gray-500">
        {name}
      </span>

      <span className={color}>
        {value}
      </span>

    </div>
  );
}

function ActivityRow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">

      <span className="h-2 w-2 rounded-full bg-cyan-400" />

      <span className="text-sm text-gray-400">
        {text}
      </span>

    </div>
  );
}

function EmptyState({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex h-[400px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/[0.08]">

      <div className="text-gray-700">
        {icon}
      </div>

      <h3 className="mt-4 font-semibold">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-center text-xs text-gray-600">
        {text}
      </p>

    </div>
  );
}

function ToolCard({
  icon,
  name,
  description,
}: {
  icon: React.ReactNode;
  name: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#0b101c] p-5">

      <div className="flex items-center gap-4">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-cyan-400">
          {icon}
        </div>

        <div>

          <h3 className="text-sm font-semibold">
            {name}
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            {description}
          </p>

        </div>

      </div>

    </div>
  );
}

function Setting({
  title,
  description,
  value,
}: {
  title: string;
  description: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-[#0b101c] p-5">

      <div>

        <h3 className="text-sm font-semibold">
          {title}
        </h3>

        <p className="mt-1 text-xs text-gray-500">
          {description}
        </p>

      </div>

      <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-400">
        {value}
      </span>

    </div>
  );
}