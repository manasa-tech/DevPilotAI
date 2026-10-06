"use client";

import { useState } from "react";

const historyItems = [
  {
    id: 1,
    title: "Build a React component",
    type: "Chat",
    date: "Today",
    language: "React",
  },
  {
    id: 2,
    title: "Fix API connection",
    type: "Chat",
    date: "Yesterday",
    language: "TypeScript",
  },
  {
    id: 3,
    title: "DSA Array Problem",
    type: "Code",
    date: "Oct 4",
    language: "C++",
  },
  {
    id: 4,
    title: "Explain Python code",
    type: "Chat",
    date: "Oct 3",
    language: "Python",
  },
];

export default function HistoryPage() {
  const [search, setSearch] = useState("");

  const filteredHistory = historyItems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="history-page">

      {/* HEADER */}
      <header className="header">

        <div>
          <h1>History</h1>
          <p>Your previous AI coding sessions</p>
        </div>

        <div className="header-actions">

          <div className="search">
            🔍
            <input
              placeholder="Search history..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button className="new-chat">
            + New Chat
          </button>

        </div>

      </header>

      {/* CONTENT */}
      <main className="content">

        <div className="section-header">
          <h2>Recent Activity</h2>

          <span>
            {filteredHistory.length} sessions
          </span>
        </div>

        <div className="history-list">

          {filteredHistory.length === 0 ? (
            <div className="empty">
              <div className="empty-icon">📂</div>
              <h3>No history found</h3>
              <p>
                Your previous coding sessions will appear here.
              </p>
            </div>
          ) : (
            filteredHistory.map((item) => (

              <div className="history-card" key={item.id}>

                <div className="file-icon">
                  {item.type === "Code" ? "</>" : "💬"}
                </div>

                <div className="details">

                  <h3>{item.title}</h3>

                  <div className="meta">
                    <span>{item.type}</span>
                    <span>•</span>
                    <span>{item.language}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>

                </div>

                <button className="open-button">
                  Open →
                </button>

                <button className="more">
                  ⋮
                </button>

              </div>

            ))
          )}

        </div>

      </main>

      <style jsx>{`

        .history-page {
          min-height: 100vh;
          background: #08070b;
          color: white;
          font-family: Arial, sans-serif;
        }

        .header {
          height: 80px;
          border-bottom: 1px solid #28242f;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
        }

        .header h1 {
          margin: 0;
          font-size: 24px;
        }

        .header p {
          margin: 6px 0 0;
          color: #77717f;
          font-size: 13px;
        }

        .header-actions {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .search {
          width: 240px;
          height: 40px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 12px;
          border: 1px solid #322e39;
          border-radius: 10px;
          background: #111016;
          color: #77717f;
        }

        .search input {
          width: 100%;
          background: transparent;
          border: none;
          outline: none;
          color: white;
        }

        .new-chat {
          border: none;
          border-radius: 10px;
          padding: 11px 16px;
          background: linear-gradient(
            135deg,
            #8b45ff,
            #6624e8
          );
          color: white;
          font-weight: 600;
          cursor: pointer;
        }

        .content {
          max-width: 1100px;
          margin: auto;
          padding: 40px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .section-header h2 {
          font-size: 18px;
        }

        .section-header span {
          color: #77717f;
          font-size: 13px;
        }

        .history-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .history-card {
          min-height: 75px;
          border: 1px solid #29252f;
          border-radius: 13px;
          background: #100e14;
          display: flex;
          align-items: center;
          padding: 15px;
          gap: 15px;
          transition: 0.2s;
        }

        .history-card:hover {
          border-color: #7040bd;
          background: #15111d;
        }

        .file-icon {
          width: 43px;
          height: 43px;
          border-radius: 11px;
          background: #21123a;
          color: #a975ff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: bold;
        }

        .details {
          flex: 1;
        }

        .details h3 {
          margin: 0 0 7px;
          font-size: 14px;
        }

        .meta {
          display: flex;
          gap: 7px;
          color: #706a78;
          font-size: 11px;
        }

        .open-button {
          border: 1px solid #393240;
          background: transparent;
          color: #aaa2b2;
          padding: 8px 13px;
          border-radius: 8px;
          cursor: pointer;
        }

        .open-button:hover {
          color: white;
          border-color: #7040bd;
        }

        .more {
          border: none;
          background: transparent;
          color: #77717f;
          font-size: 20px;
          cursor: pointer;
        }

        .empty {
          text-align: center;
          padding: 100px 20px;
          border: 1px dashed #302b38;
          border-radius: 15px;
        }

        .empty-icon {
          font-size: 45px;
          margin-bottom: 15px;
        }

        .empty h3 {
          margin: 0 0 8px;
        }

        .empty p {
          color: #77717f;
          font-size: 13px;
        }

        @media (max-width: 700px) {

          .header {
            padding: 20px;
            height: auto;
            gap: 15px;
            flex-direction: column;
            align-items: stretch;
          }

          .header-actions {
            width: 100%;
          }

          .search {
            flex: 1;
          }

          .content {
            padding: 20px;
          }

          .open-button {
            display: none;
          }

        }

      `}</style>

    </div>
  );
}