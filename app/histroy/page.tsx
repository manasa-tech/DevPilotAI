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
        <div className="header-title">
          <h1>History</h1>
          <p>Your previous AI coding sessions</p>
        </div>

        <div className="header-actions">
          <div className="search">
            <span className="search-icon">⌕</span>

            <input
              type="text"
              placeholder="Search history..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button
            className="new-chat"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            + New Chat
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="content">
        <div className="section-header">
          <h2>Recent Activity</h2>

          <span>
            {filteredHistory.length}{" "}
            {filteredHistory.length === 1 ? "session" : "sessions"}
          </span>
        </div>

        <div className="history-list">
          {filteredHistory.length === 0 ? (
            <div className="empty">
              <div className="empty-icon">📂</div>

              <h3>No history found</h3>

              <p>
                Try searching with a different keyword.
              </p>
            </div>
          ) : (
            filteredHistory.map((item) => (
              <div className="history-card" key={item.id}>
                {/* ICON */}
                <div className="file-icon">
                  {item.type === "Code" ? "</>" : "💬"}
                </div>

                {/* DETAILS */}
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

                {/* OPEN */}
                <button
                  className="open-button"
                  onClick={() =>
                    alert(`Opening: ${item.title}`)
                  }
                >
                  Open →
                </button>

                {/* MORE */}
                <button
                  className="more"
                  onClick={() =>
                    alert(`Options for: ${item.title}`)
                  }
                  aria-label="More options"
                >
                  ⋮
                </button>
              </div>
            ))
          )}
        </div>
      </main>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .history-page {
          min-height: 100vh;
          background: #08070b;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
        }

        /* HEADER */

        .header {
          min-height: 80px;
          border-bottom: 1px solid #28242f;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 18px 40px;
          gap: 20px;
        }

        .header-title h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 700;
        }

        .header-title p {
          margin: 6px 0 0;
          color: #77717f;
          font-size: 13px;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        /* SEARCH */

        .search {
          width: 250px;
          height: 40px;

          display: flex;
          align-items: center;
          gap: 8px;

          padding: 0 12px;

          border: 1px solid #322e39;
          border-radius: 10px;

          background: #111016;
        }

        .search:focus-within {
          border-color: #7040bd;
          box-shadow: 0 0 0 2px rgba(112, 64, 189, 0.12);
        }

        .search-icon {
          color: #77717f;
          font-size: 20px;
          line-height: 1;
        }

        .search input {
          width: 100%;

          background: transparent;
          border: none;
          outline: none;

          color: #ffffff;
          font-size: 13px;
        }

        .search input::placeholder {
          color: #77717f;
        }

        /* NEW CHAT */

        .new-chat {
          border: none;
          border-radius: 10px;

          padding: 11px 16px;

          background: linear-gradient(
            135deg,
            #8b45ff,
            #6624e8
          );

          color: #ffffff;

          font-size: 13px;
          font-weight: 600;

          cursor: pointer;

          transition: 0.2s ease;
        }

        .new-chat:hover {
          transform: translateY(-1px);

          box-shadow:
            0 5px 20px rgba(111, 50, 220, 0.3);
        }

        /* CONTENT */

        .content {
          width: 100%;
          max-width: 1100px;

          margin: 0 auto;

          padding: 40px;
        }

        /* SECTION HEADER */

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-bottom: 20px;
        }

        .section-header h2 {
          margin: 0;

          font-size: 18px;
          font-weight: 600;
        }

        .section-header span {
          color: #77717f;
          font-size: 13px;
        }

        /* HISTORY LIST */

        .history-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        /* HISTORY CARD */

        .history-card {
          min-height: 75px;

          display: flex;
          align-items: center;

          gap: 15px;

          padding: 15px;

          border: 1px solid #29252f;
          border-radius: 13px;

          background: #100e14;

          transition:
            border-color 0.2s ease,
            background 0.2s ease,
            transform 0.2s ease;
        }

        .history-card:hover {
          border-color: #7040bd;
          background: #15111d;
          transform: translateY(-1px);
        }

        /* ICON */

        .file-icon {
          width: 43px;
          height: 43px;

          flex-shrink: 0;

          border-radius: 11px;

          background: #21123a;

          color: #a975ff;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 15px;
          font-weight: bold;
        }

        /* DETAILS */

        .details {
          flex: 1;
          min-width: 0;
        }

        .details h3 {
          margin: 0 0 7px;

          font-size: 14px;
          font-weight: 600;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .meta {
          display: flex;
          align-items: center;
          gap: 7px;

          color: #706a78;

          font-size: 11px;
        }

        /* OPEN BUTTON */

        .open-button {
          flex-shrink: 0;

          border: 1px solid #393240;

          background: transparent;

          color: #aaa2b2;

          padding: 8px 13px;

          border-radius: 8px;

          cursor: pointer;

          font-size: 12px;

          transition: 0.2s ease;
        }

        .open-button:hover {
          color: #ffffff;
          border-color: #7040bd;
          background: #1b1525;
        }

        /* MORE BUTTON */

        .more {
          width: 32px;
          height: 32px;

          flex-shrink: 0;

          border: none;

          background: transparent;

          color: #77717f;

          font-size: 20px;

          cursor: pointer;

          border-radius: 7px;
        }

        .more:hover {
          background: #211d27;
          color: #ffffff;
        }

        /* EMPTY */

        .empty {
          text-align: center;

          padding: 100px 20px;

          border: 1px dashed #302b38;

          border-radius: 15px;

          background: #0d0b10;
        }

        .empty-icon {
          font-size: 45px;
          margin-bottom: 15px;
        }

        .empty h3 {
          margin: 0 0 8px;

          font-size: 16px;
        }

        .empty p {
          margin: 0;

          color: #77717f;

          font-size: 13px;
        }

        /* MOBILE */

        @media (max-width: 700px) {
          .header {
            padding: 20px;

            flex-direction: column;

            align-items: stretch;
          }

          .header-actions {
            width: 100%;
          }

          .search {
            flex: 1;
            width: auto;
          }

          .content {
            padding: 20px;
          }

          .history-card {
            padding: 12px;
          }

          .open-button {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .header-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .new-chat {
            width: 100%;
          }

          .history-card {
            gap: 10px;
          }

          .file-icon {
            width: 38px;
            height: 38px;
          }

          .meta {
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  );
}