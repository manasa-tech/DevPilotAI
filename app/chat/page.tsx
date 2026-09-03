"use client";

import { FormEvent, useState } from "react";
import {
  Bot,
  Check,
  Clipboard,
  MessageSquare,
  Plus,
  Send,
  Sparkles,
  User,
} from "lucide-react";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

const suggestions = [
  "Explain this JavaScript function",
  "Help me fix a React error",
  "Create a REST API with FastAPI",
  "How does async/await work?",
];

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSending, setIsSending] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const sendMessage = (text?: string) => {
    const content = (text ?? message).trim();

    if (!content || isSending) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content,
    };

    setMessages((previous) => [...previous, userMessage]);
    setMessage("");
    setIsSending(true);

    setTimeout(() => {
      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          "I'm ready to help you with your code. This is currently a demo response. Once the DevPilot backend is connected, this message will come from your AI model.",
      };

      setMessages((previous) => [...previous, assistantMessage]);
      setIsSending(false);
    }, 1000);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage();
  };

  const copyMessage = async (id: number, content: string) => {
    await navigator.clipboard.writeText(content);

    setCopiedId(id);

    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const newChat = () => {
    setMessages([]);
    setMessage("");
    setCopiedId(null);
  };

  return (
    <div className="min-h-screen bg-[#050507] text-white">
      {/* Sidebar */}
      <Sidebar
        mobileOpen={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
      />

      {/* Main */}
      <main className="flex min-h-screen flex-col lg:ml-72">
        {/* Header */}
        <Header
          title="AI Chat"
          description="Ask DevPilot anything about programming"
          onMenuClick={() => setMobileSidebarOpen(true)}
        />

        {/* Chat Area */}
        <div className="flex flex-1 flex-col">
          {/* Top Actions */}
          <div className="flex items-center justify-between border-b border-white/5 px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10">
                <Bot className="h-4 w-4 text-violet-400" />
              </div>

              <div>
                <p className="text-xs font-medium text-zinc-300">
                  DevPilot AI
                </p>

                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                  <span className="text-[10px] text-zinc-600">
                    Online
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={newChat}
              className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-zinc-400 transition hover:bg-white/5 hover:text-white"
            >
              <Plus className="h-3.5 w-3.5" />
              New Chat
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto">
            {messages.length === 0 ? (
              <EmptyChat onSuggestionClick={sendMessage} />
            ) : (
              <div className="mx-auto max-w-4xl space-y-6 px-4 py-8 sm:px-6">
                {messages.map((item) => (
                  <MessageBubble
                    key={item.id}
                    message={item}
                    copied={copiedId === item.id}
                    onCopy={() =>
                      copyMessage(item.id, item.content)
                    }
                  />
                ))}

                {isSending && <TypingIndicator />}
              </div>
            )}
          </div>

          {/* Composer */}
          <div className="border-t border-white/10 bg-[#050507] p-4 sm:p-6">
            <form
              onSubmit={handleSubmit}
              className="mx-auto max-w-4xl"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0f] transition focus-within:border-violet-500/30">
                <textarea
                  value={message}
                  onChange={(event) =>
                    setMessage(event.target.value)
                  }
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" &&
                      !event.shiftKey
                    ) {
                      event.preventDefault();
                      sendMessage();
                    }
                  }}
                  rows={3}
                  placeholder="Ask DevPilot anything about your code..."
                  className="w-full resize-none bg-transparent px-4 py-4 text-sm leading-6 text-zinc-300 outline-none placeholder:text-zinc-700"
                />

                <div className="flex items-center justify-between border-t border-white/5 px-3 py-2.5">
                  <p className="hidden text-[11px] text-zinc-700 sm:block">
                    Press Enter to send · Shift + Enter for a new line
                  </p>

                  <span className="text-[10px] text-zinc-700 sm:hidden">
                    Enter to send
                  </span>

                  <button
                    type="submit"
                    disabled={!message.trim() || isSending}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <p className="mt-3 text-center text-[10px] text-zinc-700">
                DevPilot AI can make mistakes. Always review generated
                code before using it.
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

/* -------------------------------- */
/* Empty Chat                        */
/* -------------------------------- */

function EmptyChat({
  onSuggestionClick,
}: {
  onSuggestionClick: (text: string) => void;
}) {
  return (
    <div className="flex min-h-[560px] flex-col items-center justify-center px-4 py-12 text-center">
      {/* Icon */}
      <div className="relative mb-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-violet-500/20 bg-violet-500/10">
          <MessageSquare className="h-8 w-8 text-violet-400" />
        </div>

        <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border border-[#050507] bg-violet-500">
          <Sparkles className="h-3.5 w-3.5 text-white" />
        </div>
      </div>

      <h2 className="text-xl font-bold text-white sm:text-2xl">
        How can I help you?
      </h2>

      <p className="mt-2 max-w-md text-sm leading-6 text-zinc-600">
        Ask questions, debug errors, generate code, or learn a new
        programming concept.
      </p>

      {/* Suggestions */}
      <div className="mt-8 grid w-full max-w-2xl gap-3 sm:grid-cols-2">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => onSuggestionClick(suggestion)}
            className="group rounded-xl border border-white/10 bg-[#0b0b0f] p-4 text-left transition hover:border-violet-500/30 hover:bg-violet-500/[0.03]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 transition group-hover:bg-violet-500/10">
                <Sparkles className="h-3.5 w-3.5 text-zinc-600 transition group-hover:text-violet-400" />
              </div>

              <span className="text-xs font-medium text-zinc-400 transition group-hover:text-zinc-200">
                {suggestion}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------- */
/* Message Bubble                    */
/* -------------------------------- */

function MessageBubble({
  message,
  copied,
  onCopy,
}: {
  message: Message;
  copied: boolean;
  onCopy: () => void;
}) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex gap-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-500/10">
          <Bot className="h-4 w-4 text-violet-400" />
        </div>
      )}

      <div
        className={`max-w-[85%] sm:max-w-[75%] ${
          isUser ? "order-first" : ""
        }`}
      >
        <div
          className={`rounded-2xl px-4 py-3 ${
            isUser
              ? "rounded-tr-md bg-violet-600 text-white"
              : "rounded-tl-md border border-white/10 bg-[#0b0b0f] text-zinc-300"
          }`}
        >
          <p className="whitespace-pre-wrap text-sm leading-6">
            {message.content}
          </p>
        </div>

        {!isUser && (
          <button
            onClick={onCopy}
            className="mt-2 flex items-center gap-1.5 px-1 text-[10px] text-zinc-700 transition hover:text-zinc-400"
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
        )}
      </div>

      {isUser && (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500">
          <User className="h-4 w-4 text-white" />
        </div>
      )}
    </div>
  );
}

/* -------------------------------- */
/* Typing Indicator                  */
/* -------------------------------- */

function TypingIndicator() {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-500/10">
        <Bot className="h-4 w-4 text-violet-400" />
      </div>

      <div className="rounded-2xl rounded-tl-md border border-white/10 bg-[#0b0b0f] px-5 py-4">
        <div className="flex gap-1.5">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-400" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-400 [animation-delay:150ms]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-400 [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}