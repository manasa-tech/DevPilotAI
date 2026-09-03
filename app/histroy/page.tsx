"use client";

import { useMemo, useState } from "react";
import {
  Bot,
  Code2,
  FileCode2,
  MessageSquare,
  Search,
  Trash2,
  X,
} from "lucide-react";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

type HistoryType = "chat" | "code" | "debug" | "explain";

type HistoryItem = {
  id: number;
  title: string;
  preview: string;
  type: HistoryType;
  date: string;
};

const initialHistory: HistoryItem[] = [
  {
    id: 1,
    title: "React Login Page",
    preview: "Create a responsive React login page with validation...",
    type: "code",
    date: "Today, 10:30 AM",
  },
  {
    id: 2,
    title: "API 500 Error",
    preview: "Why am I getting a 500 internal server error?",
    type: "debug",
    date: "Today, 09:15 AM",
  },
  {
    id: 3,
    title: "Next.js Architecture",
    preview: "Explain the recommended folder structure for Next.js...",
    type: "explain",
    date: "Yesterday",
  },
  {
    id: 4,
    title: "JavaScript Function",
    preview: "Explain how this function works step by step...",
    type: "chat",
    date: "Yesterday",
  },
  {
    id: 5,
    title: "Todo Application",
    preview: "Generate a simple todo application using JavaScript...",
    type: "code",
    date: "Aug 31, 2026",
  },
  {
    id: 6,
    title: "Python Error",
    preview: "Fix the index error in my Python program...",
    type: "debug",
    date: "Aug 30, 2026",
  },
];

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Chats", value: "chat" },
  { label: "Code", value: "code" },
  { label: "Debug", value: "debug" },
  { label: "Explain", value: "explain" },
] as const;

export default function HistoryPage() {
  const [history, setHistory] =
    useState<HistoryItem[]>(initialHistory);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [showClearModal, setShowClearModal] = useState(false);

  const filteredHistory = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    return history.filter((item) => {
      const matchesFilter =
        filter === "all" || item.type === filter;

      const matchesSearch =
        !searchText ||
        item.title.toLowerCase().includes(searchText) ||
        item.preview.toLowerCase().includes(searchText);

      return matchesFilter && matchesSearch;
    });
  }, [history, search, filter]);

  const deleteItem = (id: number) => {
    setHistory((previous) =>
      previous.filter((item) => item.id !== id)
    );
  };

  const clearHistory = () => {
    setHistory([]);
    setShowClearModal(false);
  };

  const resetFilters = () => {
    setSearch("");
    setFilter("all");
  };

  return (
    <div className="min-h-screen bg-[#050507] text-white">
      <Sidebar
        mobileOpen={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
      />

      <main className="lg:ml-72">
        <Header
          title="History"
          description="View and manage your previous DevPilot sessions"
          onMenuClick={() => setMobileSidebarOpen(true)}
        />

        <div className="p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            {/* Intro */}
            <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5">
                  <Bot className="h-3.5 w-3.5 text-violet-400" />

                  <span className="text-xs font-medium text-violet-300">
                    Activity
                  </span>
                </div>

                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Your history
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
                  Quickly find your previous chats, generated code,
                  debugging sessions, and explanations.
                </p>
              </div>

              {history.length > 0 && (
                <button
                  onClick={() => setShowClearModal(true)}
                  className="flex w-fit items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-2.5 text-xs font-medium text-red-400 transition hover:bg-red-500/10"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  Clear History
                </button>
              )}
            </div>

            {/* Stats */}
            <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard
                label="Total Sessions"
                value={history.length}
                icon={<Bot className="h-4 w-4" />}
              />

              <StatCard
                label="Chats"
                value={
                  history.filter((item) => item.type === "chat")
                    .length
                }
                icon={<MessageSquare className="h-4 w-4" />}
              />

              <StatCard
                label="Code"
                value={
                  history.filter((item) => item.type === "code")
                    .length
                }
                icon={<Code2 className="h-4 w-4" />}
              />

              <StatCard
                label="Debug Sessions"
                value={
                  history.filter((item) => item.type === "debug")
                    .length
                }
                icon={<FileCode2 className="h-4 w-4" />}
              />
            </div>

            {/* History Container */}
            <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0f]">
              {/* Search / Filters */}
              <div className="flex flex-col gap-4 border-b border-white/10 p-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="relative w-full lg:max-w-md">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600" />

                  <input
                    value={search}
                    onChange={(event) =>
                      setSearch(event.target.value)
                    }
                    placeholder="Search history..."
                    className="h-10 w-full rounded-xl border border-white/10 bg-[#070709] pl-10 pr-10 text-sm text-zinc-300 outline-none transition placeholder:text-zinc-700 focus:border-violet-500/40"
                  />

                  {search && (
                    <button
                      onClick={() => setSearch("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 transition hover:text-zinc-300"
                      aria-label="Clear search"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>

                <div className="flex gap-1 overflow-x-auto rounded-xl border border-white/10 bg-[#070709] p-1">
                  {filterOptions.map((option) => {
                    const active = filter === option.value;

                    return (
                      <button
                        key={option.value}
                        onClick={() => setFilter(option.value)}
                        className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium transition ${
                          active
                            ? "bg-violet-600 text-white"
                            : "text-zinc-600 hover:bg-white/5 hover:text-zinc-300"
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* List */}
              <div className="divide-y divide-white/5">
                {filteredHistory.length === 0 ? (
                  <EmptyHistory
                    hasSearch={Boolean(search)}
                    hasHistory={history.length > 0}
                    onReset={resetFilters}
                  />
                ) : (
                  filteredHistory.map((item) => (
                    <HistoryRow
                      key={item.id}
                      item={item}
                      onDelete={() => deleteItem(item.id)}
                    />
                  ))
                )}
              </div>

              {/* Footer */}
              {filteredHistory.length > 0 && (
                <div className="border-t border-white/5 px-5 py-4">
                  <p className="text-xs text-zinc-700">
                    Showing {filteredHistory.length} of{" "}
                    {history.length} sessions
                  </p>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>

      {/* Clear Modal */}
      {showClearModal && (
        <ClearHistoryModal
          onCancel={() => setShowClearModal(false)}
          onConfirm={clearHistory}
        />
      )}
    </div>
  );
}

/* -------------------------------- */
/* History Row                       */
/* -------------------------------- */

function HistoryRow({
  item,
  onDelete,
}: {
  item: HistoryItem;
  onDelete: () => void;
}) {
  return (
    <div className="group flex items-center gap-4 px-4 py-4 transition hover:bg-white/[0.02] sm:px-5">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${getIconBackground(
          item.type
        )}`}
      >
        {getHistoryIcon(item.type)}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
          <h3 className="truncate text-sm font-medium text-zinc-200">
            {item.title}
          </h3>

          <span
            className={`w-fit rounded-md px-2 py-0.5 text-[10px] font-medium ${getBadgeStyle(
              item.type
            )}`}
          >
            {getTypeName(item.type)}
          </span>
        </div>

        <p className="mt-1 truncate text-xs text-zinc-600">
          {item.preview}
        </p>
      </div>

      <span className="hidden shrink-0 text-xs text-zinc-700 md:block">
        {item.date}
      </span>

      <button
        onClick={onDelete}
        className="rounded-lg p-2 text-zinc-700 transition hover:bg-red-500/10 hover:text-red-400 sm:opacity-0 sm:group-hover:opacity-100"
        aria-label={`Delete ${item.title}`}
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
}

/* -------------------------------- */
/* Stat Card                         */
/* -------------------------------- */

function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b0b0f] p-4">
      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
        {icon}
      </div>

      <p className="text-xs text-zinc-600">{label}</p>

      <p className="mt-1 text-xl font-bold text-white">{value}</p>
    </div>
  );
}

/* -------------------------------- */
/* Empty History                     */
/* -------------------------------- */

function EmptyHistory({
  hasSearch,
  hasHistory,
  onReset,
}: {
  hasSearch: boolean;
  hasHistory: boolean;
  onReset: () => void;
}) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center px-5 text-center">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02]">
        <Search className="h-7 w-7 text-zinc-700" />
      </div>

      <h3 className="text-base font-semibold text-zinc-300">
        {hasSearch ? "No results found" : "No history yet"}
      </h3>

      <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-600">
        {hasSearch
          ? "Try another search term or reset your filters."
          : hasHistory
            ? "There are no sessions matching the selected filter."
            : "Your DevPilot conversations and coding sessions will appear here."}
      </p>

      {(hasSearch || hasHistory) && (
        <button
          onClick={onReset}
          className="mt-5 rounded-lg border border-white/10 px-4 py-2 text-xs font-medium text-zinc-400 transition hover:bg-white/5 hover:text-white"
        >
          Reset Filters
        </button>
      )}
    </div>
  );
}

/* -------------------------------- */
/* Clear History Modal               */
/* -------------------------------- */

function ClearHistoryModal({
  onCancel,
  onConfirm,
}: {
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0b0b0f] p-6 shadow-2xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
          <Trash2 className="h-5 w-5 text-red-400" />
        </div>

        <h2 className="mt-5 text-lg font-semibold text-white">
          Clear all history?
        </h2>

        <p className="mt-2 text-sm leading-6 text-zinc-500">
          This will remove all your current DevPilot history from
          this page. This action cannot be undone.
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-zinc-400 transition hover:bg-white/5 hover:text-white"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-xl bg-red-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-red-500"
          >
            Clear History
          </button>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------- */
/* Helpers                           */
/* -------------------------------- */

function getHistoryIcon(type: HistoryType) {
  switch (type) {
    case "chat":
      return <MessageSquare className="h-4 w-4 text-blue-400" />;

    case "code":
      return <Code2 className="h-4 w-4 text-violet-400" />;

    case "debug":
      return <FileCode2 className="h-4 w-4 text-red-400" />;

    case "explain":
      return <Bot className="h-4 w-4 text-emerald-400" />;

    default:
      return <Bot className="h-4 w-4 text-zinc-400" />;
  }
}

function getIconBackground(type: HistoryType) {
  switch (type) {
    case "chat":
      return "bg-blue-500/10";

    case "code":
      return "bg-violet-500/10";

    case "debug":
      return "bg-red-500/10";

    case "explain":
      return "bg-emerald-500/10";

    default:
      return "bg-white/5";
  }
}

function getBadgeStyle(type: HistoryType) {
  switch (type) {
    case "chat":
      return "bg-blue-500/10 text-blue-300";

    case "code":
      return "bg-violet-500/10 text-violet-300";

    case "debug":
      return "bg-red-500/10 text-red-300";

    case "explain":
      return "bg-emerald-500/10 text-emerald-300";

    default:
      return "bg-white/5 text-zinc-400";
  }
}

function getTypeName(type: HistoryType) {
  switch (type) {
    case "chat":
      return "Chat";

    case "code":
      return "Code";

    case "debug":
      return "Debug";

    case "explain":
      return "Explain";

    default:
      return "Session";
  }
}