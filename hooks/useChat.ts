"use client";

import { useCallback, useState } from "react";
import { chatAPI } from "@/lib/api";
import type { ChatMessage } from "@/types";

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (message: string) => {
    if (!message.trim() || isLoading) {
      return;
    }

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: message.trim(),
      createdAt: new Date(),
    };

    setMessages((previous) => [...previous, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const data = await chatAPI.sendMessage(message.trim());

      const assistantContent =
        data?.response ??
        data?.message ??
        data?.answer ??
        data?.content ??
        "I couldn't generate a response.";

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: assistantContent,
        createdAt: new Date(),
      };

      setMessages((previous) => [...previous, assistantMessage]);

      return assistantMessage;
    } catch (err) {
      console.error("Chat API error:", err);

      const errorMessage =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";

      setError(errorMessage);

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "Sorry, I couldn't connect to the DevPilot AI backend. Please make sure the backend is running.",
        createdAt: new Date(),
      };

      setMessages((previous) => [...previous, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  const clearChat = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearChat,
  };
}