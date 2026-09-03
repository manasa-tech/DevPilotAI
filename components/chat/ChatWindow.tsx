"use client";

import {
  Bot,
  Check,
  Clipboard,
  Code2,
  Copy,
  MessageSquare,
  Plus,
  Send,
  Sparkles,
  User,
} from "lucide-react";
import { FormEvent, useState } from "react";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

const suggestions = [
  {
    title: "Explain code",
    description: "Understand any code step by step",
    icon: Code2,
    prompt: "Explain this code to me step by step",
  },
  {
    title: "Fix an error",
    description: "Find and fix bugs in your code",
    icon: Sparkles,
    prompt: "Help me debug this error",
  },
  {
    title: "Build an API",
    description: "Create a backend API",
    icon: MessageSquare,
    prompt: "Create a REST API using FastAPI",
  },
  {
    title: "Learn programming",
    description: "Get simple programming explanations",
    icon: Bot,
    prompt: "Explain async and await in JavaScript",
  },
];

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const generateResponse = (text: string) => {
    const lowerText = text.toLowerCase();

    if (
      lowerText.includes("async") ||
      lowerText.includes("await")
    ) {
      return `async/await is a cleaner way to work with asynchronous JavaScript.

An async function always returns a Promise.

The await keyword pauses the execution of the async function until the Promise is resolved.

Example:

async function getData() {
  const response = await fetch("/api/data");
  const data = await response.json();

  return data;
}

This makes asynchronous code easier to read and understand compared with using multiple .then() calls.`;
    }

    if (
      lowerText.includes("react") ||
      lowerText.includes("component")
    ) {
      return `React components are reusable building blocks of a React application.

For example:

function Welcome() {
  return <h1>Hello DevPilot!</h1>;
}

You can then use the component like this:

<Welcome />

Components can also receive data through props and maintain their own state using hooks such as useState.`;
    }

    if (
      lowerText.includes("fastapi") ||
      lowerText.includes("api")
    ) {
      return `FastAPI is a modern Python framework for building APIs.

A simple API looks like this:

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Hello DevPilot"}

You can run it using:

uvicorn main:app --reload

FastAPI also provides automatic API documentation through Swagger UI.`;
    }

    if (
      lowerText.includes("python")
    ) {
      return `Python is a high-level programming language known for its simple syntax.

Example:

def greet(name):
    return f"Hello {name}"

print(greet("Developer"))

Python is commonly used for web development, automation, data science, AI, machine learning, and scripting.`;
    }

    if (
      lowerText.includes("javascript")
    ) {
      return `JavaScript is a programming language mainly used to make web applications interactive.

Example:

const name = "DevPilot";

function greet() {
  console.log("Hello " + name);
}

greet();

JavaScript can run in browsers as well as on servers using Node.js.`;
    }

    return `I understand your question.

For this demo version of DevPilot AI, I'm using a local response generator. Once we connect your FastAPI backend and AI model, this chat will send your message to the backend and return a real AI-generated response.

Your message was:

"${text}"

The next step will be connecting this interface to your DevPilot backend.`;
  };

  const sendMessage = async (messageText?: string) => {
    const text = (messageText ?? input).trim();

    if (!text || isSending) {
      return;
    }

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: text,
    };

    setMessages((previous) => [...previous, userMessage]);
    setInput("");
    setIsSending(true);

    setTimeout(() => {
      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: generateResponse(text),
      };

      setMessages((previous) => [
        ...previous,
        assistantMessage,
      ]);

      setIsSending(false);
    }, 900);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage();
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  const copyMessage = async (
    content: string,
    id: number
  ) => {
    try {
      await navigator.clipboard.writeText(content);

      setCopiedId(id);

      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const newChat = () => {
    setMessages([]);
    setInput("");
    setCopiedId(null);
  };

  return (
    <section className="flex min-h-[calc(100vh-80px)] flex-col bg-[#050507]">
      {/* Top toolbar */}
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-3 sm:px-6">
        <div>
          <p className="text-xs font-medium text-zinc-500">
            DevPilot Workspace
          </p>

          <p className="mt-0.5 text-[11px] text-zinc-700">
            AI-powered programming assistant
          </p>
        </div>

        <button
          type="button"
          onClick={newChat}
          className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-xs font-medium text-zinc-400 transition hover:border-violet-500/30 hover:bg-violet-500/5 hover:text-white"
        >
          <Plus className="h-3.5 w-3.5" />
          New Chat
        </button>
      </div>

      {/* Chat area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {messages.length === 0 ? (
          <EmptyChat onSelect={sendMessage} />
        ) : (
          <div className="flex-1 overflow-y-auto">
            <div className="mx-auto w-full max-w-4xl space-y-6 px-4 py-8 sm:px-6">
              {messages.map((message) => (
                <MessageBubble
                  key={message.id}
                  message={message}
                  copied={copiedId === message.id}
                  onCopy={() =>
                    copyMessage(
                      message.content,
                      message.id
                    )
                  }
                />
              ))}

              {isSending && <TypingIndicator />}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="shrink-0 border-t border-white/10 bg-[#050507] p-4 sm:p-6">
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-4xl"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0f] transition focus-within:border-violet-500/30 focus-within:ring-1 focus-within:ring-violet-500/10">
              <textarea
                value={input}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                onKeyDown={handleKeyDown}
                disabled={isSending}
                rows={3}
                placeholder="Ask DevPilot anything about your code..."
                className="max-h-48 min-h-[90px] w-full resize-none bg-transparent px-4 py-4 text-sm leading-6 text-zinc-300 outline-none placeholder:text-zinc-700 disabled:cursor-not-allowed disabled:opacity-50"
              />

              <div className="flex items-center justify-between border-t border-white/5 px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <Sparkles className="hidden h-3.5 w-3.5 text-zinc-700 sm:block" />

                  <p className="hidden text-[11px] text-zinc-700 sm:block">
                    Press Enter to send · Shift + Enter for new line
                  </p>

                  <p className="text-[10px] text-zinc-700 sm:hidden">
                    Enter to send
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={
                    isSending || !input.trim()
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>

            <p className="mt-3 text-center text-[10px] text-zinc-700">
              DevPilot AI can make mistakes. Always review
              generated code before using it.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Empty Chat                                                                  */
/* -------------------------------------------------------------------------- */

function EmptyChat({
  onSelect,
}: {
  onSelect: (text: string) => void;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-5 py-10">
      {/* Logo */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10">
        <Bot className="h-7 w-7 text-violet-400" />
      </div>

      {/* Heading */}
      <h1 className="text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        How can I help you?
      </h1>

      <p className="mt-3 max-w-lg text-center text-sm leading-6 text-zinc-600">
        Ask DevPilot about programming, debugging,
        code generation, APIs, frameworks, or anything
        related to software development.
      </p>

      {/* Suggestions */}
      <div className="mt-8 grid w-full max-w-2xl gap-3 sm:grid-cols-2">
        {suggestions.map((suggestion) => {
          const Icon = suggestion.icon;

          return (
            <button
              key={suggestion.title}
              type="button"
              onClick={() =>
                onSelect(suggestion.prompt)
              }
              className="group rounded-xl border border-white/10 bg-[#0b0b0f] p-4 text-left transition duration-200 hover:-translate-y-0.5 hover:border-violet-500/30 hover:bg-violet-500/[0.03]"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 transition group-hover:bg-violet-500/10">
                  <Icon className="h-4 w-4 text-zinc-600 transition group-hover:text-violet-400" />
                </div>

                <div>
                  <p className="text-xs font-medium text-zinc-300 transition group-hover:text-white">
                    {suggestion.title}
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-zinc-700">
                    {suggestion.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Message Bubble                                                              */
/* -------------------------------------------------------------------------- */

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
      className={`flex items-start gap-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* Assistant avatar */}
      {!isUser && (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-500/10">
          <Bot className="h-4 w-4 text-violet-400" />
        </div>
      )}

      {/* Message */}
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

        {/* Copy */}
        {!isUser && (
          <button
            type="button"
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

      {/* User avatar */}
      {isUser && (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500">
          <User className="h-4 w-4 text-white" />
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Typing Indicator                                                            */
/* -------------------------------------------------------------------------- */

function TypingIndicator() {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-500/10">
        <Bot className="h-4 w-4 text-violet-400" />
      </div>

      <div className="rounded-2xl rounded-tl-md border border-white/10 bg-[#0b0b0f] px-5 py-4">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-600 [animation-delay:-0.3s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-600 [animation-delay:-0.15s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-600" />
        </div>
      </div>
    </div>
  );
}