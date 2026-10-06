"use client";

import { useState } from "react";

type Message = {
  id: number;
  role: "user" | "ai";
  text: string;
};

type Chat = {
  id: number;
  title: string;
};

export default function ChatPage() {
  const [chats, setChats] = useState<Chat[]>([
    { id: 1, title: "Build a React component" },
    { id: 2, title: "Fix API connection" },
    { id: 3, title: "Explain Java code" },
    { id: 4, title: "DSA Array problem" },
  ]);

  const [activeChat, setActiveChat] = useState(1);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "ai",
      text: "Hi! 👋 I'm DevPilot AI. How can I help you with your code today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  const filteredChats = chats.filter((chat) =>
    chat.title.toLowerCase().includes(search.toLowerCase())
  );

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentInput = input;
    setInput("");

    // Temporary AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        role: "ai",
        text: `I received your request: "${currentInput}"\n\nYour AI response will appear here once your backend/API is connected.`,
      };

      setMessages((prev) => [...prev, aiMessage]);
    }, 700);
  };

  const createNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: "New coding chat",
    };

    setChats((prev) => [newChat, ...prev]);
    setActiveChat(newChat.id);

    setMessages([
      {
        id: Date.now(),
        role: "ai",
        text: "New chat started! 🚀 What would you like to build?",
      },
    ]);
  };

  const selectChat = (id: number) => {
    setActiveChat(id);

    setMessages([
      {
        id: Date.now(),
        role: "ai",
        text: "Welcome back! What would you like to continue working on?",
      },
    ]);
  };

  return (
    <div className="chat-page">

      {/* ================= TOP BAR ================= */}
      <header className="topbar">

        <div className="brand">
          <div className="brand-icon">&gt;_</div>

          <div>
            <h2>DevPilot AI</h2>
            <span>AI Coding Assistant</span>
          </div>
        </div>

        <div className="top-actions">

          {/* Search */}
          <div className="search-box">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search chats..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* New Chat */}
          <button className="new-chat-top" onClick={createNewChat}>
            <span>＋</span>
            New Chat
          </button>

          {/* Status */}
          <div className="status">
            <span className="status-dot"></span>
            AI Ready
          </div>

          {/* Profile */}
          <div className="profile">
            <div className="profile-avatar">V</div>
            <span>Developer</span>
            <span>⌄</span>
          </div>

        </div>
      </header>

      {/* ================= MAIN ================= */}
      <div className="main-container">

        {/* ================= SIDEBAR ================= */}
        <aside className="sidebar">

          <button className="new-chat-button" onClick={createNewChat}>
            <span>＋</span>
            New Chat
          </button>

          <div className="history-header">
            <span>CHAT HISTORY</span>
          </div>

          <div className="chat-list">

            {filteredChats.length === 0 ? (
              <div className="no-chats">
                No chats found
              </div>
            ) : (
              filteredChats.map((chat) => (
                <button
                  key={chat.id}
                  className={`chat-item ${
                    activeChat === chat.id ? "active" : ""
                  }`}
                  onClick={() => selectChat(chat.id)}
                >
                  <span className="chat-icon">▢</span>
                  <span>{chat.title}</span>
                </button>
              ))
            )}

          </div>

          {/* Sidebar bottom */}
          <div className="sidebar-bottom">

            <div className="ai-card">
              <div className="ai-card-icon">✦</div>

              <div>
                <strong>DevPilot AI</strong>

                <div className="ready-text">
                  <span></span>
                  Ready to assist
                </div>
              </div>

            </div>

            <p>
              Generate, debug, explain and improve your code with AI.
            </p>

          </div>

        </aside>

        {/* ================= CHAT AREA ================= */}
        <main className="chat-area">

          {/* Chat Header */}
          <div className="chat-header">

            <div>
              <h1>DevPilot AI</h1>
              <p>Your intelligent coding assistant</p>
            </div>

            <div className="header-icons">
              <button title="Search">⌕</button>
              <button title="New Chat" onClick={createNewChat}>
                ＋
              </button>
              <button title="More">•••</button>
            </div>

          </div>

          {/* Messages */}
          <div className="messages">

            {messages.map((message) => (
              <div
                key={message.id}
                className={`message-row ${
                  message.role === "user" ? "user-row" : "ai-row"
                }`}
              >

                {message.role === "ai" && (
                  <div className="message-avatar ai-avatar">
                    ✦
                  </div>
                )}

                <div
                  className={`message ${
                    message.role === "user"
                      ? "user-message"
                      : "ai-message"
                  }`}
                >
                  {message.text}
                </div>

                {message.role === "user" && (
                  <div className="message-avatar user-avatar">
                    V
                  </div>
                )}

              </div>
            ))}

          </div>

          {/* ================= INPUT ================= */}
          <div className="input-section">

            <div className="input-box">

              <button className="attach-button" title="Attach file">
                ＋
              </button>

              <textarea
                placeholder="Ask DevPilot AI anything about your code..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
              />

              <button
                className="send-button"
                onClick={sendMessage}
                disabled={!input.trim()}
              >
                ↑
              </button>

            </div>

            <div className="input-hint">
              Press <b>Enter</b> to send • <b>Shift + Enter</b> for new line
            </div>

          </div>

        </main>

      </div>

      {/* ================= STYLES ================= */}
      <style jsx>{`

        * {
          box-sizing: border-box;
        }

        .chat-page {
          min-height: 100vh;
          background: #08070b;
          color: #f5f3ff;
          font-family: Arial, Helvetica, sans-serif;
          display: flex;
          flex-direction: column;
        }

        /* TOP BAR */

        .topbar {
          height: 76px;
          border-bottom: 1px solid #25222d;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 28px;
          background: #09080c;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-icon {
          width: 42px;
          height: 42px;
          border-radius: 13px;
          background: linear-gradient(
            135deg,
            #8b4dff,
            #5f20ed
          );
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 15px;
          box-shadow: 0 0 25px rgba(123, 58, 237, 0.35);
        }

        .brand h2 {
          margin: 0;
          font-size: 18px;
        }

        .brand span {
          color: #777281;
          font-size: 12px;
        }

        .top-actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .search-box {
          width: 220px;
          height: 40px;
          border: 1px solid #302c3a;
          border-radius: 12px;
          background: #111016;
          display: flex;
          align-items: center;
          padding: 0 12px;
          gap: 8px;
        }

        .search-box span {
          font-size: 23px;
          color: #918b9e;
        }

        .search-box input {
          width: 100%;
          border: none;
          outline: none;
          background: transparent;
          color: white;
          font-size: 13px;
        }

        .search-box input::placeholder {
          color: #6e6978;
        }

        .new-chat-top {
          border: 1px solid #6735d8;
          background: #20123c;
          color: #c7a9ff;
          padding: 10px 15px;
          border-radius: 11px;
          cursor: pointer;
          font-weight: 600;
        }

        .new-chat-top:hover {
          background: #2c1752;
        }

        .status {
          border: 1px solid #482879;
          background: #170d2c;
          color: #c6a5ff;
          padding: 10px 14px;
          border-radius: 20px;
          font-size: 13px;
        }

        .status-dot {
          width: 7px;
          height: 7px;
          background: #45df93;
          display: inline-block;
          border-radius: 50%;
          margin-right: 7px;
        }

        .profile {
          height: 42px;
          border: 1px solid #302c39;
          border-radius: 12px;
          padding: 5px 12px 5px 6px;
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13px;
        }

        .profile-avatar {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: #7542ee;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        /* MAIN */

        .main-container {
          flex: 1;
          display: flex;
          min-height: calc(100vh - 76px);
        }

        /* SIDEBAR */

        .sidebar {
          width: 270px;
          border-right: 1px solid #25222d;
          background: #0b0a0f;
          padding: 20px 15px;
          display: flex;
          flex-direction: column;
        }

        .new-chat-button {
          height: 45px;
          border: none;
          border-radius: 11px;
          background: linear-gradient(
            135deg,
            #8c43ff,
            #6a23e9
          );
          color: white;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          margin-bottom: 25px;
        }

        .new-chat-button span {
          font-size: 20px;
          margin-right: 6px;
        }

        .history-header {
          color: #686371;
          font-size: 11px;
          letter-spacing: 1.4px;
          margin: 5px 8px 12px;
        }

        .chat-list {
          display: flex;
          flex-direction: column;
          gap: 5px;
          overflow-y: auto;
        }

        .chat-item {
          border: none;
          background: transparent;
          color: #a49fac;
          text-align: left;
          border-radius: 9px;
          padding: 11px 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13px;
        }

        .chat-item:hover {
          background: #15121c;
          color: white;
        }

        .chat-item.active {
          background: #211338;
          color: #c6a2ff;
        }

        .chat-icon {
          color: #8c7e9f;
        }

        .no-chats {
          color: #696471;
          font-size: 13px;
          padding: 15px 8px;
        }

        .sidebar-bottom {
          margin-top: auto;
          border-top: 1px solid #25222d;
          padding-top: 18px;
        }

        .ai-card {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ai-card-icon {
          width: 35px;
          height: 35px;
          border-radius: 10px;
          background: #201139;
          color: #ad7cff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ai-card strong {
          font-size: 13px;
        }

        .ready-text {
          color: #6f6a78;
          font-size: 10px;
          margin-top: 4px;
        }

        .ready-text span {
          display: inline-block;
          width: 6px;
          height: 6px;
          background: #42d991;
          border-radius: 50%;
          margin-right: 5px;
        }

        .sidebar-bottom p {
          color: #696473;
          font-size: 11px;
          line-height: 1.6;
        }

        /* CHAT */

        .chat-area {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .chat-header {
          height: 76px;
          border-bottom: 1px solid #25222d;
          padding: 0 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .chat-header h1 {
          margin: 0;
          font-size: 19px;
        }

        .chat-header p {
          margin: 5px 0 0;
          color: #706b78;
          font-size: 12px;
        }

        .header-icons {
          display: flex;
          gap: 8px;
        }

        .header-icons button {
          width: 38px;
          height: 38px;
          border: 1px solid #302c38;
          border-radius: 10px;
          background: #111016;
          color: #9b94a6;
          cursor: pointer;
          font-size: 17px;
        }

        .header-icons button:hover {
          color: white;
          border-color: #6940a6;
        }

        /* MESSAGES */

        .messages {
          flex: 1;
          overflow-y: auto;
          padding: 35px 8%;
        }

        .message-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 24px;
          max-width: 900px;
        }

        .user-row {
          margin-left: auto;
          justify-content: flex-end;
        }

        .message {
          max-width: 700px;
          padding: 14px 17px;
          border-radius: 14px;
          white-space: pre-wrap;
          line-height: 1.6;
          font-size: 14px;
        }

        .ai-message {
          background: #121017;
          border: 1px solid #292531;
          color: #ddd8e6;
        }

        .user-message {
          background: linear-gradient(
            135deg,
            #7436e8,
            #5722ba
          );
          color: white;
        }

        .message-avatar {
          width: 34px;
          height: 34px;
          flex-shrink: 0;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: bold;
        }

        .ai-avatar {
          background: #24113f;
          color: #ad7bff;
        }

        .user-avatar {
          background: #7140e7;
          color: white;
        }

        /* INPUT */

        .input-section {
          padding: 15px 8% 25px;
        }

        .input-box {
          min-height: 62px;
          border: 1px solid #393240;
          border-radius: 16px;
          background: #111016;
          display: flex;
          align-items: flex-end;
          padding: 10px;
          box-shadow: 0 8px 35px rgba(0, 0, 0, 0.25);
        }

        .input-box:focus-within {
          border-color: #7140c6;
        }

        .input-box textarea {
          flex: 1;
          resize: none;
          min-height: 40px;
          max-height: 150px;
          border: none;
          outline: none;
          background: transparent;
          color: white;
          font-size: 14px;
          padding: 10px;
          font-family: inherit;
        }

        .input-box textarea::placeholder {
          color: #67616f;
        }

        .attach-button {
          width: 40px;
          height: 40px;
          border: none;
          background: transparent;
          color: #8c8496;
          font-size: 22px;
          cursor: pointer;
        }

        .send-button {
          width: 42px;
          height: 42px;
          border: none;
          border-radius: 11px;
          background: #7839ee;
          color: white;
          font-size: 22px;
          cursor: pointer;
        }

        .send-button:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }

        .input-hint {
          text-align: center;
          color: #57525e;
          font-size: 10px;
          margin-top: 9px;
        }

        /* RESPONSIVE */

        @media (max-width: 900px) {

          .sidebar {
            width: 220px;
          }

          .search-box {
            width: 160px;
          }

          .status {
            display: none;
          }

        }

        @media (max-width: 650px) {

          .sidebar {
            display: none;
          }

          .topbar {
            padding: 0 15px;
          }

          .search-box {
            display: none;
          }

          .profile span:not(.profile-avatar) {
            display: none;
          }

          .messages {
            padding: 25px 15px;
          }

          .input-section {
            padding: 12px 15px 18px;
          }

        }

      `}</style>
    </div>
  );
}