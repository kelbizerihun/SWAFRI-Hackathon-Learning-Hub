"use client";
import { useState } from "react";

export default function AIBanner() {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hi! I'm your AI Learning Assistant. How can I help you today?",
      time: "Just now",
    },
  ]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    const userMsg = inputText;
    setInputText("");
    setMessages((prev) => [
      ...prev,
      { role: "user", text: userMsg, time: "Just now" },
      {
        role: "ai",
        text: "I found 3 great courses that match your goals! Let's start with module 1.",
        time: "Just now",
      },
    ]);
  };

  return (
    <section id="ai-sidekick" style={{ backgroundColor: "#FFFFFF", padding: "80px 0 30px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        
        {/* Soft Lilac / Lavender Card Container matching screenshot */}
        <div
          style={{
            backgroundColor: "#F8F7FF",
            borderRadius: "32px",
            padding: "56px 60px",
            boxShadow: "0 2px 12px rgba(124, 58, 237, 0.03)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-4">
              
              {/* Tag: A LITTLE HELP. A LOT OF POSSIBILITY. */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "12px",
                  fontWeight: 800,
                  color: "#7C3AED",
                  letterSpacing: "0.8px",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#7C3AED">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
                <span>A LITTLE HELP. A LOT OF POSSIBILITY.</span>
              </div>

              {/* Headline */}
              <h2
                style={{
                  fontSize: "clamp(34px, 4vw, 44px)",
                  fontWeight: 900,
                  color: "#0F172A",
                  letterSpacing: "-1.2px",
                  lineHeight: "1.12",
                  marginBottom: "20px",
                }}
              >
                Big questions? <br />
                Meet your learning sidekick.
              </h2>

              {/* Subtitle */}
              <p
                style={{
                  color: "#64748B",
                  fontSize: "16px",
                  lineHeight: "1.65",
                  maxWidth: "460px",
                  marginBottom: "32px",
                }}
              >
                Get unstuck, explore new ideas, and find your next course. Your AI Learning Assistant is here for you, 24/7.
              </p>

              {/* Button + "Always ready. Always encouraging." */}
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
                <button
                  onClick={() => document.getElementById("ai-chat-input")?.focus()}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "#2563EB",
                    color: "#FFFFFF",
                    fontSize: "15px",
                    fontWeight: 600,
                    padding: "13px 26px",
                    borderRadius: "12px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 14px rgba(37,99,235,0.28)",
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1D4ED8")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2563EB")}
                >
                  <span>Chat Now</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </button>

                <span style={{ fontSize: "14px", color: "#64748B", fontWeight: 400 }}>
                  Always ready. Always encouraging.
                </span>
              </div>
            </div>

            {/* Right Chat Card (6 cols) matching screenshot */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div
                style={{
                  width: "100%",
                  maxWidth: "460px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "24px",
                  border: "1px solid #F1F5F9",
                  padding: "24px",
                  boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.05)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                
                {/* Chat Header */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "12px",
                        backgroundColor: "#EFF6FF",
                        color: "#2563EB",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="10" rx="2" />
                        <circle cx="12" cy="5" r="2" />
                        <path d="M12 7v4" />
                        <line x1="8" y1="16" x2="8.01" y2="16" strokeWidth="3" />
                        <line x1="16" y1="16" x2="16.01" y2="16" strokeWidth="3" />
                      </svg>
                    </div>

                    <div>
                      <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#0F172A", lineHeight: 1.2 }}>
                        AI Learning Assistant
                      </h4>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "3px" }}>
                        <span style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#10B981" }} />
                        <span style={{ fontSize: "11px", color: "#059669", fontWeight: 600 }}>
                          Online · Here to help you grow
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 3 dots */}
                  <div style={{ color: "#94A3B8", cursor: "pointer" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="1.5" />
                      <circle cx="18" cy="12" r="1.5" />
                      <circle cx="6" cy="12" r="1.5" />
                    </svg>
                  </div>
                </div>

                {/* Message Bubble matching screenshot */}
                <div style={{ marginBottom: "16px" }}>
                  <div
                    style={{
                      backgroundColor: "#F0F4FF",
                      borderRadius: "18px",
                      padding: "16px 20px",
                      color: "#1E293B",
                      fontSize: "14px",
                      lineHeight: "1.55",
                    }}
                  >
                    Hi! I&apos;m your AI Learning Assistant. How can I help you today?
                  </div>
                  <span style={{ display: "block", fontSize: "11px", color: "#94A3B8", marginTop: "6px", paddingLeft: "4px" }}>
                    Just now
                  </span>
                </div>

                {/* Quick Chips matching screenshot */}
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
                  {["Find my next course", "Explain a concept"].map((chip) => (
                    <button
                      key={chip}
                      onClick={() => setInputText(chip)}
                      style={{
                        backgroundColor: "#FFFFFF",
                        border: "1px solid #E2E8F0",
                        borderRadius: "9999px",
                        padding: "6px 16px",
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "#2563EB",
                        cursor: "pointer",
                        transition: "all 0.15s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#93C5FD";
                        e.currentTarget.style.backgroundColor = "#F8FAFC";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#E2E8F0";
                        e.currentTarget.style.backgroundColor = "#FFFFFF";
                      }}
                    >
                      {chip}
                    </button>
                  ))}
                </div>

                {/* Unified Input Box with blue ↑ button */}
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: "14px",
                    padding: "6px 6px 6px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <input
                    id="ai-chat-input"
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Ask me anything about learning..."
                    style={{
                      flex: 1,
                      border: "none",
                      outline: "none",
                      backgroundColor: "transparent",
                      fontSize: "13px",
                      color: "#0F172A",
                    }}
                  />
                  <button
                    onClick={handleSend}
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      backgroundColor: "#2563EB",
                      color: "#FFFFFF",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "background-color 0.15s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1D4ED8")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2563EB")}
                    aria-label="Send"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="19" x2="12" y2="5" />
                      <polyline points="5 12 12 5 19 12" />
                    </svg>
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
