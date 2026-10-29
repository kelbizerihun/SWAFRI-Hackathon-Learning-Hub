"use client";
import { useState } from "react";

const chatMessages = [
  { role: "ai", text: "Hi! I'm your AI Learning Assistant 👋 How can I help you today?" },
  { role: "user", text: "Can you suggest a course for data science beginners?" },
  {
    role: "ai",
    text: "Sure! I recommend starting with 'Data Science with Python' — it covers pandas, visualization, and ML basics. Want me to enroll you?",
  },
];

export default function AIBanner() {
  const [inputVal, setInputVal] = useState("");

  return (
    <section className="py-20" style={{ background: "#0B0F19" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #111827, #0d1a30)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left */}
            <div className="p-10 flex flex-col justify-center">
              <div className="section-tag mb-6 w-fit">🤖 AI ASSISTANT</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Big questions?{" "}
                <br />
                Meet your learning{" "}
                <span className="gradient-text">sidekick.</span>
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                Get instant answers, personalized course recommendations, study plans, and
                real-time guidance — available 24/7 just for you.
              </p>
              <div className="flex gap-3">
                <button className="btn-primary flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm">
                  <span>💬</span> Chat Now
                </button>
                <button className="btn-outline px-6 py-3 rounded-full font-semibold text-white text-sm">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right: Chat preview */}
            <div className="p-6 flex items-center">
              <div
                className="w-full rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(11,15,25,0.8)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {/* Chat header */}
                <div
                  className="flex items-center gap-3 px-4 py-3"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                    style={{ background: "linear-gradient(135deg, #2563EB, #00F0FF)" }}
                  >
                    🤖
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Learning AI</p>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      <span className="text-green-400 text-xs">Online</span>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="p-4 space-y-3 min-h-48">
                  {chatMessages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={msg.role === "user" ? "chat-bubble-user" : "chat-bubble-ai"}
                        style={{ fontSize: "12px", lineHeight: "1.5" }}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}

                  {/* Typing indicator */}
                  <div className="flex justify-start">
                    <div
                      className="chat-bubble-ai flex items-center gap-1"
                      style={{ padding: "10px 14px" }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-slate-400"
                        style={{ animation: "pulse 1s infinite" }}
                      />
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-slate-400"
                        style={{ animation: "pulse 1s 0.2s infinite" }}
                      />
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-slate-400"
                        style={{ animation: "pulse 1s 0.4s infinite" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Input */}
                <div
                  className="p-3 flex items-center gap-2"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <input
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="Ask me anything..."
                    className="flex-1 bg-transparent text-white text-xs outline-none placeholder-slate-500"
                  />
                  <button
                    className="w-7 h-7 flex items-center justify-center rounded-full"
                    style={{ background: "#2563EB" }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
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
