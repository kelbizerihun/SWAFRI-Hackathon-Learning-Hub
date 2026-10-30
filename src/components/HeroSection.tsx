"use client";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      style={{
        backgroundColor: "#FFFFFF",
        paddingTop: "60px",
        paddingBottom: "80px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-4">
            
            {/* Pill Tag matching screenshot */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E0E7FF",
                borderRadius: "9999px",
                padding: "6px 16px",
                marginBottom: "24px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#4F46E5">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </svg>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 800,
                  color: "#4F46E5",
                  letterSpacing: "0.6px",
                  textTransform: "uppercase",
                }}
              >
                BIG AMBITIONS. YOUR NEXT STEP.
              </span>
            </div>

            {/* Main Headline matching screenshot exact sizing, colors and punctuation */}
            <h1
              style={{
                fontSize: "clamp(44px, 4.8vw, 64px)",
                fontWeight: 900,
                lineHeight: "1.08",
                letterSpacing: "-1.8px",
                marginBottom: "22px",
                color: "#0F172A",
              }}
            >
              Learn New Skills. <br />
              <span style={{ color: "#2563EB" }}>Build Your Future.</span>
            </h1>

            {/* Subtitle matching screenshot */}
            <p
              style={{
                color: "#64748B",
                fontSize: "17px",
                lineHeight: "1.6",
                maxWidth: "490px",
                marginBottom: "34px",
                fontWeight: 400,
              }}
            >
              Access high-quality courses, AI-powered learning, career opportunities, and live events in one platform.
            </p>

            {/* Action Buttons Row */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px", marginBottom: "34px" }}>
              <Link
                href="/course"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#2563EB",
                  color: "#FFFFFF",
                  fontSize: "15px",
                  fontWeight: 600,
                  padding: "13px 26px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(37,99,235,0.28)",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1D4ED8")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2563EB")}
              >
                <span>Start E-Learning</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/course"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#FFFFFF",
                  color: "#2563EB",
                  fontSize: "15px",
                  fontWeight: 600,
                  padding: "13px 26px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  border: "1px solid #E2E8F0",
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
                Explore Courses
              </Link>
            </div>

            {/* Community Rating & Social Proof matching screenshot */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              {/* Overlapping Avatars */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#E0E7FF",
                    color: "#4338CA",
                    border: "2px solid #FFFFFF",
                    fontSize: "11px",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  AL
                </div>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#EDE9FE",
                    color: "#6D28D9",
                    border: "2px solid #FFFFFF",
                    fontSize: "11px",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "-10px",
                  }}
                >
                  JM
                </div>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#D1FAE5",
                    color: "#065F46",
                    border: "2px solid #FFFFFF",
                    fontSize: "11px",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "-10px",
                  }}
                >
                  SK
                </div>
              </div>

              {/* Rating Text */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ color: "#F59E0B", fontSize: "13px", letterSpacing: "1px" }}>
                    {"★".repeat(5)}
                  </div>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#0F172A" }}>
                    4.9/5 from our community
                  </span>
                </div>
                <span style={{ fontSize: "11px", color: "#64748B", marginTop: "2px" }}>
                  Join 10,000+ curious minds learning every day
                </span>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols) Illustration Card matching screenshot */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "540px",
                backgroundColor: "#ECE8FE",
                borderRadius: "32px",
                padding: "20px 20px 24px 20px",
                boxShadow: "0 20px 40px -15px rgba(124, 58, 237, 0.08)",
                overflow: "hidden",
              }}
            >
              
              {/* Top Right Floating Badge: AI-powered learning */}
              <div
                style={{
                  position: "absolute",
                  top: "22px",
                  right: "22px",
                  zIndex: 20,
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "9999px",
                  padding: "7px 16px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="#7C3AED">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#6D28D9" }}>
                  AI-powered learning
                </span>
              </div>

              {/* 3D Illustration Image */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  borderRadius: "22px",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "8px 0 12px 0",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero.png"
                  alt="Students learning with AI assistant"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "22px",
                  }}
                />
              </div>

              {/* Bottom Left Floating Badge: A little progress. A big future. */}
              <div
                style={{
                  position: "absolute",
                  bottom: "22px",
                  left: "22px",
                  zIndex: 20,
                  backgroundColor: "rgba(255, 255, 255, 0.98)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "16px",
                  padding: "10px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxShadow: "0 10px 25px -5px rgba(0,0,0,0.08)",
                  border: "1px solid rgba(241, 245, 249, 0.9)",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    backgroundColor: "#ECFDF5",
                    border: "1px solid #A7F3D0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#059669",
                    flexShrink: 0,
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#0F172A", lineHeight: 1.2 }}>
                    A little progress. A big future.
                  </span>
                  <span style={{ fontSize: "11px", color: "#64748B", fontWeight: 500, lineHeight: 1.2, marginTop: "2px" }}>
                    Learn at your pace. Earn real skills.
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
