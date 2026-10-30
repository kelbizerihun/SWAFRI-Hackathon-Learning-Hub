"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
  const stats = [
    { value: "10,000+", label: "Active Learners", detail: "Across 45+ countries" },
    { value: "500+", label: "Expert Courses", detail: "Data, AI, Web & Design" },
    { value: "94%", label: "Completion Rate", detail: "Highest in student satisfaction" },
    { value: "85+", label: "Hiring Partners", detail: "Connecting talent to jobs" },
  ];

  const pillars = [
    {
      title: "Hands-on, Real-World Projects",
      desc: "We don't teach abstract theory without context. Every module concludes with real-world code, datasets, and design challenges you can showcase in your portfolio.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <polyline points="16 18 22 12 16 6" stroke="#245CE8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="8 6 2 12 8 18" stroke="#245CE8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      bg: "#EDF3FF",
    },
    {
      title: "AI-Powered Adaptive Learning",
      desc: "Our integrated AI Study Companion meets you wherever you get stuck, providing instant code explanations, debugging tips, and custom practice quizzes.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L14.4 7.6L20 10L14.4 12.4L12 18L9.6 12.4L4 10L9.6 7.6L12 2Z" stroke="#7252CF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      bg: "#EFEDFF",
    },
    {
      title: "Recognized Industry Credentials",
      desc: "Earn cryptographically verifiable certificates that validate your skills to employers and can be added directly to your LinkedIn profile with one click.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="6" stroke="#245CE8" strokeWidth="2" />
          <path d="M15.5 13.5L18 21L12 18L6 21L8.5 13.5" stroke="#245CE8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      bg: "#EDF3FF",
    },
    {
      title: "Community & Mentor Guidance",
      desc: "You never learn alone. Connect with study cohorts, participate in weekly live mentor office hours, and get answers from senior industry professionals.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="#AD671F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="9" cy="7" r="4" stroke="#AD671F" strokeWidth="2" />
          <path d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13" stroke="#AD671F" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 3.13C17.7699 3.58317 19.0078 5.17799 19.0078 7.005C19.0078 8.83201 17.7699 10.4268 16 10.88" stroke="#AD671F" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      bg: "#FFF3E3",
    },
  ];

  const values = [
    {
      title: "Learner First",
      desc: "Every feature, quiz, and interface choice begins with asking: 'How does this make the student's learning experience faster, clearer, and more inspiring?'",
    },
    {
      title: "Democratized Access",
      desc: "High quality education should not depend on geography or wealth. We offer affordable pricing, scholarships, and free introductory paths.",
    },
    {
      title: "Continuous Evolution",
      desc: "Technology moves fast. Our course curriculum is continuously refreshed to reflect the newest frameworks, tools, and industry paradigms.",
    },
    {
      title: "Integrity & Transparency",
      desc: "Real skills over empty hype. We measure our success solely by how our students build, graduate, and advance in their chosen fields.",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#F7F9FE",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <Navbar />

      <main style={{ flex: 1, paddingBottom: "80px" }}>
        {/* Hero Section */}
        <section
          style={{
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid #E6ECF6",
            padding: "72px 20px 60px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <span
              style={{
                display: "inline-block",
                padding: "6px 14px",
                backgroundColor: "#EDF3FF",
                borderRadius: "100px",
                color: "#245CE8",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.8px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Our Mission & Story
            </span>
            <h1
              style={{
                fontSize: "40px",
                fontWeight: 800,
                color: "#17264A",
                lineHeight: "1.2",
                marginBottom: "20px",
                letterSpacing: "-0.8px",
              }}
            >
              Empowering every curious mind to build the future.
            </h1>
            <p
              style={{
                fontSize: "17px",
                color: "#61708B",
                lineHeight: "1.65",
                maxWidth: "680px",
                margin: "0 auto",
              }}
            >
              Learning Hub was created to bridge the gap between textbook theory and real-world tech careers. We provide hands-on curriculum, intelligent AI study support, and a supportive community for lifelong learners.
            </p>
          </div>
        </section>

        {/* Stats Grid */}
        <section style={{ maxWidth: "1200px", margin: "-32px auto 48px", padding: "0 20px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            {stats.map((s, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E6ECF6",
                  borderRadius: "20px",
                  padding: "24px",
                  boxShadow: "0 8px 24px rgba(32, 63, 118, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "6px",
                }}
              >
                <span
                  style={{
                    fontSize: "32px",
                    fontWeight: 800,
                    color: "#245CE8",
                    lineHeight: "1.1",
                    letterSpacing: "-0.5px",
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#17264A",
                  }}
                >
                  {s.label}
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#61708B",
                  }}
                >
                  {s.detail}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Core Pillars */}
        <section style={{ maxWidth: "1200px", margin: "48px auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span
              style={{
                color: "#245CE8",
                fontWeight: 700,
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
              }}
            >
              How We Teach
            </span>
            <h2
              style={{
                fontSize: "30px",
                fontWeight: 800,
                color: "#17264A",
                marginTop: "8px",
                letterSpacing: "-0.5px",
              }}
            >
              Built for practical mastery, not passive watching
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
              gap: "24px",
            }}
          >
            {pillars.map((p, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E6ECF6",
                  borderRadius: "20px",
                  padding: "28px",
                  boxShadow: "0 4px 16px rgba(32, 63, 118, 0.02)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    backgroundColor: p.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {p.icon}
                </div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#17264A",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    color: "#61708B",
                    lineHeight: "1.6",
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "56px auto",
            padding: "48px 32px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E6ECF6",
            borderRadius: "24px",
            boxShadow: "0 5px 20px rgba(32, 63, 118, 0.02)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span
              style={{
                color: "#7252CF",
                fontWeight: 700,
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
              }}
            >
              What Guides Us
            </span>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 800,
                color: "#17264A",
                marginTop: "8px",
                letterSpacing: "-0.5px",
              }}
            >
              Our Core Principles
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "28px",
            }}
          >
            {values.map((v, idx) => (
              <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#245CE8" }}>
                  0{idx + 1}.
                </span>
                <h4 style={{ margin: 0, fontSize: "16px", fontWeight: 700, color: "#17264A" }}>
                  {v.title}
                </h4>
                <p style={{ margin: 0, fontSize: "13px", color: "#61708B", lineHeight: "1.6" }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Join CTA */}
        <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div
            style={{
              backgroundColor: "#EDF3FF",
              borderRadius: "24px",
              padding: "48px 36px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "28px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: "26px",
                  fontWeight: 800,
                  color: "#17264A",
                  letterSpacing: "-0.5px",
                }}
              >
                Ready to take your next big step?
              </h3>
              <p style={{ margin: 0, fontSize: "15px", color: "#61708B", maxWidth: "540px" }}>
                Explore 500+ top courses in Python, Data Science, Full-Stack Development, and AI today.
              </p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link
                href="/course"
                style={{
                  backgroundColor: "#245CE8",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "14px",
                  padding: "13px 26px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(36, 92, 232, 0.25)",
                }}
              >
                Browse all courses →
              </Link>
              <Link
                href="/register"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#17264A",
                  border: "1px solid #E6ECF6",
                  fontWeight: 600,
                  fontSize: "14px",
                  padding: "13px 24px",
                  borderRadius: "12px",
                  textDecoration: "none",
                }}
              >
                Create free account
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
