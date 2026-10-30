"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LearningHubLogo from "@/components/LearningHubLogo";

export default function CourseDetailsPage() {
  const [expandedModules, setExpandedModules] = useState<{ [key: number]: boolean }>({
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const toggleModule = (modNum: number) => {
    setExpandedModules((prev) => ({
      ...prev,
      [modNum]: !prev[modNum],
    }));
  };

  const toggleAllModules = () => {
    const allExpanded = Object.values(expandedModules).every(Boolean);
    setExpandedModules({
      1: !allExpanded,
      2: !allExpanded,
      3: !allExpanded,
      4: !allExpanded,
      5: !allExpanded,
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F7F9FE",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        color: "#17264A",
        position: "relative",
      }}
    >
      {/* 1. Site Header (96px height, padding 0 80px) */}
      <header
        style={{
          width: "100%",
          height: "96px",
          backgroundColor: "#FFFFFF",
          display: "flex",
          justifyContent: "center",
          borderBottom: "1px solid #E1E7F2",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1440px",
            padding: "0 80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Learning Hub Brand matching Image 1 */}
          <LearningHubLogo size="md" />

          {/* Main Navigation */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
            }}
          >
            {[
              { label: "Home", href: "/", active: false },
              { label: "Courses", href: "/course", active: true },
              { label: "Dashboard", href: "/dashboard", active: false },
              { label: "Careers", href: "/#careers", active: false },
              { label: "Events", href: "/#events", active: false },
              { label: "FAQ", href: "/faq", active: false },
              { label: "About Us", href: "/about", active: false },
              { label: "Contact Us", href: "/contact", active: false },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  lineHeight: "16px",
                  fontWeight: item.active ? 600 : 500,
                  color: item.active ? "#245CE8" : "#61708B",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Account Actions */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Link
              href="/login"
              style={{
                width: "70px",
                height: "40px",
                borderRadius: "10px",
                border: "1px solid #E1E7F2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                fontWeight: 600,
                color: "#245CE8",
                textDecoration: "none",
                backgroundColor: "#FFFFFF",
              }}
            >
              Login
            </Link>
            <Link
              href="/register"
              style={{
                width: "89px",
                height: "40px",
                borderRadius: "10px",
                backgroundColor: "#245CE8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                fontWeight: 600,
                color: "#FFFFFF",
                textDecoration: "none",
              }}
            >
              Register
            </Link>
          </div>
        </div>
      </header>

      {/* 2. Course Introduction (Hero with soft lavender gradient background) */}
      <section
        style={{
          width: "100%",
          backgroundColor: "#F8FAFF",
          background: "linear-gradient(90deg, #F8FAFF 0%, #F3EFFC 100%)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1440px",
            padding: "28px 80px 40px",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            boxSizing: "border-box",
          }}
        >
          {/* Breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Link href="/" style={{ fontSize: "12px", color: "#61708B", textDecoration: "none" }}>
              Home
            </Link>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#61708B" strokeWidth="1.7">
              <path d="m9 18 6-6-6-6" />
            </svg>
            <Link href="/course" style={{ fontSize: "12px", color: "#61708B", textDecoration: "none" }}>
              Courses
            </Link>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#61708B" strokeWidth="1.7">
              <path d="m9 18 6-6-6-6" />
            </svg>
            <span style={{ fontSize: "12px", fontWeight: 500, color: "#245CE8" }}>Design</span>
          </div>

          {/* Course Hero Row */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "48px",
              width: "100%",
            }}
          >
            {/* Left: Course Summary */}
            <div
              style={{
                flex: 1,
                maxWidth: "612px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {/* Badges */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {/* Category */}
                <div
                  style={{
                    padding: "7px 12px",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "100px",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "#7452C7",
                      lineHeight: "13px",
                    }}
                  >
                    Design
                  </span>
                </div>

                {/* Recommendation */}
                <div
                  style={{
                    padding: "7px 12px",
                    backgroundColor: "#EDF3FF",
                    borderRadius: "100px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#245CE8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  </svg>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "#245CE8",
                      lineHeight: "13px",
                    }}
                  >
                    Community favorite
                  </span>
                </div>
              </div>

              {/* Title */}
              <h1
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "48px",
                  fontWeight: 700,
                  lineHeight: "112%",
                  color: "#17264A",
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}
              >
                UI Design Fundamentals
              </h1>

              {/* Promise */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "165%",
                  color: "#61708B",
                  margin: 0,
                }}
              >
                Turn your creative eye into a practical skill. Learn to design clear, beautiful interfaces—one thoughtful decision at a time.
              </p>

              {/* Instructor Byline */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "100px",
                    backgroundColor: "#E4DDF5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#7452C7",
                    flexShrink: 0,
                  }}
                >
                  SA
                </div>
                <span
                  style={{
                    fontSize: "13px",
                    lineHeight: "16px",
                    color: "#61708B",
                  }}
                >
                  Created by <strong style={{ fontWeight: 600, color: "#17264A" }}>Dr. Solomon Abebe</strong>
                </span>
              </div>

              {/* Course Rating */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ fontSize: "15px", color: "#BF861B", letterSpacing: "1px" }}>★★★★★</span>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#17264A" }}>4.9</span>
                <span style={{ fontSize: "13px", color: "#61708B" }}>(240 reviews)</span>
              </div>
            </div>

            {/* Right: Course Cover Image Card (620x360px) */}
            <div
              style={{
                width: "620px",
                height: "360px",
                borderRadius: "24px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 12px 32px rgba(116, 82, 199, 0.12)",
                flexShrink: 0,
              }}
            >
              <img
                src="/images/ui-course-cover.png"
                alt="UI Design Course Artwork"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* Interactive click hotspot for Preview button linking to Lesson player */}
              <Link
                href="/lesson"
                aria-label="Preview course · 1:42"
                style={{
                  position: "absolute",
                  bottom: "18px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "210px",
                  height: "48px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "100px",
                }}
              />
            </div>
          </div>

          {/* Course at a Glance Banner (White card with 4 facts) */}
          <div
            style={{
              width: "100%",
              height: "88px",
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              padding: "24px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
              boxSizing: "border-box",
              boxShadow: "0px 4px 20px rgba(32, 63, 118, 0.04)",
            }}
          >
            {/* Fact 1: Hours */}
            <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  backgroundColor: "#EDF3FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#245CE8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px", fontWeight: 600, color: "#17264A", lineHeight: "17px" }}>6 hours</span>
                <span style={{ fontSize: "11px", fontWeight: 400, color: "#61708B", lineHeight: "13px" }}>On-demand learning</span>
              </div>
            </div>

            {/* Fact 2: Level */}
            <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  backgroundColor: "#EDF3FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#245CE8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20V10" />
                  <path d="M18 20V4" />
                  <path d="M6 20v-4" />
                </svg>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px", fontWeight: 600, color: "#17264A", lineHeight: "17px" }}>Beginner</span>
                <span style={{ fontSize: "11px", fontWeight: 400, color: "#61708B", lineHeight: "13px" }}>No experience needed</span>
              </div>
            </div>

            {/* Fact 3: Students */}
            <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  backgroundColor: "#EDF3FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#245CE8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px", fontWeight: 600, color: "#17264A", lineHeight: "17px" }}>2,840 students</span>
                <span style={{ fontSize: "11px", fontWeight: 400, color: "#61708B", lineHeight: "13px" }}>Learning alongside you</span>
              </div>
            </div>

            {/* Fact 4: Certificate */}
            <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  backgroundColor: "#EDF3FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#245CE8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "14px", fontWeight: 600, color: "#17264A", lineHeight: "17px" }}>Certificate</span>
                <span style={{ fontSize: "11px", fontWeight: 400, color: "#61708B", lineHeight: "13px" }}>Confirm your new skills</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Course Information (Main 2-Column Section) */}
      <section
        style={{
          width: "100%",
          maxWidth: "1440px",
          padding: "40px 80px 140px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "32px",
          boxSizing: "border-box",
        }}
      >
        {/* Left Column: Course Content (824px wide) */}
        <div
          style={{
            width: "824px",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            flexShrink: 0,
          }}
        >
          {/* Card 1: About this course */}
          <div
            style={{
              width: "100%",
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              padding: "32px",
              boxShadow: "0px 6px 24px rgba(32, 63, 118, 0.035)",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              boxSizing: "border-box",
            }}
          >
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "29px",
                color: "#17264A",
                margin: 0,
              }}
            >
              A strong foundation. A more confident designer.
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "180%",
                color: "#61708B",
                margin: 0,
              }}
            >
              Great interfaces don&apos;t happen by chance. In this hands-on course, you&apos;ll explore the principles behind thoughtful digital products—from typography and color to layouts, components and accessibility.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "180%",
                color: "#61708B",
                margin: 0,
              }}
            >
              Follow Sarah&apos;s practical Figma demonstrations, try short exercises, and bring everything together in a portfolio-ready mobile app screen. Come curious. Leave with a process you can use on every project.
            </p>
          </div>

          {/* Card 2: What you'll learn */}
          <div
            style={{
              width: "100%",
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              padding: "32px",
              boxShadow: "0px 6px 24px rgba(32, 63, 118, 0.035)",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              boxSizing: "border-box",
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <h2
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "24px",
                  fontWeight: 700,
                  lineHeight: "29px",
                  color: "#17264A",
                  margin: 0,
                }}
              >
                What you&apos;ll learn
              </h2>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "17px",
                  color: "#61708B",
                }}
              >
                Practical skills you can put to work from day one.
              </span>
            </div>

            {/* 6 Objectives Grid (2 columns, 3 rows) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                columnGap: "24px",
                rowGap: "20px",
              }}
            >
              {[
                {
                  title: "Build a strong visual hierarchy",
                  desc: "Guide attention with scale, spacing and contrast.",
                },
                {
                  title: "Choose type and color with purpose",
                  desc: "Create readable, accessible visual systems.",
                },
                {
                  title: "Design layouts that feel effortless",
                  desc: "Use grids and alignment to bring order to a screen.",
                },
                {
                  title: "Create reusable UI components",
                  desc: "Build consistent buttons, forms and cards in Figma.",
                },
                {
                  title: "Make interfaces work for everyone",
                  desc: "Apply essential accessibility best practices.",
                },
                {
                  title: "Bring your first app screen to life",
                  desc: "Turn your ideas into a polished, shareable prototype.",
                },
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <div style={{ marginTop: "2px", flexShrink: 0 }}>
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#245CE8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="16 10 11 15 8 12" />
                    </svg>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "13px", fontWeight: 600, color: "#17264A", lineHeight: "140%" }}>
                      {item.title}
                    </span>
                    <span style={{ fontSize: "12px", fontWeight: 400, color: "#61708B", lineHeight: "160%" }}>
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Your learning journey (Curriculum) */}
          <div
            style={{
              width: "100%",
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              padding: "32px",
              boxShadow: "0px 6px 24px rgba(32, 63, 118, 0.035)",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              boxSizing: "border-box",
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h2
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "24px",
                  fontWeight: 700,
                  lineHeight: "29px",
                  color: "#17264A",
                  margin: 0,
                }}
              >
                Your learning journey
              </h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "13px", color: "#61708B", lineHeight: "16px" }}>
                  5 modules · 28 lessons · 6 hours total
                </span>
                <button
                  type="button"
                  onClick={toggleAllModules}
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#245CE8",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  {Object.values(expandedModules).every(Boolean) ? "Collapse all modules" : "Expand all modules"}
                </button>
              </div>
            </div>

            {/* Modules Accordion */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
              {/* Module 1 */}
              <div
                style={{
                  width: "100%",
                  border: "1px solid #E1E7F2",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                {/* Module 1 Header */}
                <div
                  onClick={() => toggleModule(1)}
                  style={{
                    padding: "20px",
                    backgroundColor: expandedModules[1] ? "#EDF3FF" : "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "#245CE8" }}>01</span>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "14px", fontWeight: 600, color: "#17264A", lineHeight: "17px" }}>
                      Getting started with UI design
                    </span>
                    <span style={{ fontSize: "12px", color: "#61708B", lineHeight: "15px" }}>
                      5 lessons · 45 min
                    </span>
                  </div>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#245CE8" strokeWidth="1.7">
                    {expandedModules[1] ? <path d="m18 15-6-6-6 6" /> : <path d="m6 9 6 6 6-6" />}
                  </svg>
                </div>

                {/* Module 1 Expanded Lessons */}
                {expandedModules[1] && (
                  <div style={{ padding: "0 20px" }}>
                    {[
                      { icon: "video", title: "Welcome to the course", preview: true, duration: "05:00" },
                      { icon: "video", title: "What makes an interface feel intuitive?", preview: false, duration: "12:00" },
                      { icon: "video", title: "Your Figma workspace, explained", preview: false, duration: "10:00" },
                      { icon: "pencil", title: "Practice spot: the design principles", preview: false, duration: "10:00" },
                      { icon: "quiz", title: "Check your understanding", preview: false, duration: "08:00" },
                    ].map((lesson, idx, arr) => (
                      <Link
                        key={idx}
                        href="/lesson"
                        style={{
                          height: "50px",
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          borderBottom: idx === arr.length - 1 ? "none" : "1px solid #E1E7F2",
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                      >
                        {lesson.icon === "video" && (
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#61708B" strokeWidth="1.7">
                            <circle cx="12" cy="12" r="10" />
                            <polygon points="10 8 16 12 10 16 10 8" fill="#61708B" />
                          </svg>
                        )}
                        {lesson.icon === "pencil" && (
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#61708B" strokeWidth="1.7">
                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                          </svg>
                        )}
                        {lesson.icon === "quiz" && (
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#61708B" strokeWidth="1.7">
                            <path d="M10 6h11M10 12h11M10 18h11M4 6h1v4H4zm0 8h2v4H4z" />
                          </svg>
                        )}
                        <span style={{ flex: 1, fontSize: "12px", color: "#17264A" }}>
                          {lesson.title}
                        </span>
                        {lesson.preview && (
                          <span style={{ fontSize: "11px", fontWeight: 600, color: "#245CE8" }}>
                            Preview
                          </span>
                        )}
                        <span style={{ fontSize: "11px", color: "#61708B" }}>
                          {lesson.duration}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Module 2 */}
              <div
                style={{
                  width: "100%",
                  border: "1px solid #E1E7F2",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <div
                  onClick={() => toggleModule(2)}
                  style={{
                    padding: "20px",
                    backgroundColor: expandedModules[2] ? "#EDF3FF" : "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "#61708B" }}>02</span>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "14px", fontWeight: 600, color: "#17264A", lineHeight: "17px" }}>
                      Typography &amp; color
                    </span>
                    <span style={{ fontSize: "12px", color: "#61708B", lineHeight: "15px" }}>
                      6 lessons · 1 hr 10 min
                    </span>
                  </div>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#61708B" strokeWidth="1.7">
                    {expandedModules[2] ? <path d="m18 15-6-6-6 6" /> : <path d="m6 9 6 6 6-6" />}
                  </svg>
                </div>
              </div>

              {/* Module 3 */}
              <div
                style={{
                  width: "100%",
                  border: "1px solid #E1E7F2",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <div
                  onClick={() => toggleModule(3)}
                  style={{
                    padding: "20px",
                    backgroundColor: expandedModules[3] ? "#EDF3FF" : "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "#61708B" }}>03</span>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "14px", fontWeight: 600, color: "#17264A", lineHeight: "17px" }}>
                      Layout, grids &amp; visual hierarchy
                    </span>
                    <span style={{ fontSize: "12px", color: "#61708B", lineHeight: "15px" }}>
                      5 lessons · 1 hr
                    </span>
                  </div>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#61708B" strokeWidth="1.7">
                    {expandedModules[3] ? <path d="m18 15-6-6-6 6" /> : <path d="m6 9 6 6 6-6" />}
                  </svg>
                </div>
              </div>

              {/* Module 4 */}
              <div
                style={{
                  width: "100%",
                  border: "1px solid #E1E7F2",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <div
                  onClick={() => toggleModule(4)}
                  style={{
                    padding: "20px",
                    backgroundColor: expandedModules[4] ? "#EDF3FF" : "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "#61708B" }}>04</span>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "14px", fontWeight: 600, color: "#17264A", lineHeight: "17px" }}>
                      Components &amp; design systems
                    </span>
                    <span style={{ fontSize: "12px", color: "#61708B", lineHeight: "15px" }}>
                      6 lessons · 1 hr 20 min
                    </span>
                  </div>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#61708B" strokeWidth="1.7">
                    {expandedModules[4] ? <path d="m18 15-6-6-6 6" /> : <path d="m6 9 6 6 6-6" />}
                  </svg>
                </div>
              </div>

              {/* Module 5 */}
              <div
                style={{
                  width: "100%",
                  border: "1px solid #E1E7F2",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <div
                  onClick={() => toggleModule(5)}
                  style={{
                    padding: "20px",
                    backgroundColor: expandedModules[5] ? "#EDF3FF" : "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "#61708B" }}>05</span>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "14px", fontWeight: 600, color: "#17264A", lineHeight: "17px" }}>
                      Your first interface: from idea to prototype
                    </span>
                    <span style={{ fontSize: "12px", color: "#61708B", lineHeight: "15px" }}>
                      6 lessons · 1 hr 45 min
                    </span>
                  </div>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#61708B" strokeWidth="1.7">
                    {expandedModules[5] ? <path d="m18 15-6-6-6 6" /> : <path d="m6 9 6 6 6-6" />}
                  </svg>
                </div>
              </div>
            </div>

            {/* Learning Pace Reassurance */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#61708B" strokeWidth="1.7">
                <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                <line x1="6" x2="6" y1="2" y2="4" />
                <line x1="10" x2="10" y1="2" y2="4" />
                <line x1="14" x2="14" y1="2" y2="4" />
              </svg>
              <span style={{ fontSize: "12px", color: "#61708B", lineHeight: "15px" }}>
                Small lessons. Real progress. Learn at a pace that works for you.
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Learning Support (424px wide) */}
        <div
          style={{
            width: "424px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            flexShrink: 0,
          }}
        >
          {/* Card 1: Meet your instructor */}
          <div
            style={{
              width: "100%",
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              padding: "28px",
              boxShadow: "0px 6px 24px rgba(32, 63, 118, 0.035)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              boxSizing: "border-box",
            }}
          >
            <h3
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: "22px",
                color: "#17264A",
                margin: 0,
              }}
            >
              Meet your instructor
            </h3>

            {/* Instructor Identity */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "100px",
                  backgroundColor: "#E4DDF5",
                  border: "2px solid #FFFFFF",
                  boxShadow: "0 4px 12px rgba(116, 82, 199, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#7452C7",
                  flexShrink: 0,
                }}
              >
                SA
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "17px", fontWeight: 600, color: "#17264A", lineHeight: "21px" }}>
                  Dr. Solomon Abebe
                </span>
                <span style={{ fontSize: "12px", color: "#61708B", lineHeight: "15px" }}>
                  Senior Designer &amp; Instructor
                </span>
              </div>
            </div>

            {/* Bio */}
            <p style={{ fontSize: "13px", lineHeight: "175%", color: "#61708B", margin: 0 }}>
              8+ years of experience · UI/UX design
            </p>

            {/* Credentials */}
            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "17px", fontWeight: 700, color: "#17264A", lineHeight: "21px" }}>4.9 / 5</span>
                <span style={{ fontSize: "11px", color: "#61708B", lineHeight: "13px" }}>Instructor rating</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "17px", fontWeight: 700, color: "#17264A", lineHeight: "21px" }}>8,200+</span>
                <span style={{ fontSize: "11px", color: "#61708B", lineHeight: "13px" }}>Students taught</span>
              </div>
            </div>

            {/* Profile Link */}
            <Link
              href="#profile"
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "#245CE8",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              View instructor profile ↗
            </Link>
          </div>

          {/* Card 2: Everything you need to grow */}
          <div
            style={{
              width: "100%",
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              padding: "28px",
              boxShadow: "0px 6px 24px rgba(32, 63, 118, 0.035)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              boxSizing: "border-box",
            }}
          >
            <h3
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: "22px",
                color: "#17264A",
                margin: 0,
              }}
            >
              Everything you need to grow
            </h3>

            {/* Resources list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#245CE8" strokeWidth="1.7">
                      <polygon points="23 7 16 12 23 17 23 7" />
                      <rect width="15" height="14" x="1" y="5" rx="2" ry="2" />
                    </svg>
                  ),
                  label: "28 bite-sized video lessons",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#245CE8" strokeWidth="1.7">
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M3 9h18" />
                      <path d="M9 21V9" />
                    </svg>
                  ),
                  label: "Figma practice files & UI templates",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#245CE8" strokeWidth="1.7">
                      <path d="m15 11-1 1" />
                      <path d="m19 15-4-4" />
                      <path d="M2 22l1-4L15.5 5.5a2.12 2.12 0 0 1 3 3L6 21l-4 1z" />
                    </svg>
                  ),
                  label: "5 hands-on design exercises",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#245CE8" strokeWidth="1.7">
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                  ),
                  label: "Shareable completion certificate",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#245CE8" strokeWidth="1.7">
                      <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z" />
                    </svg>
                  ),
                  label: "Lifetime access, at your own pace",
                },
              ].map((res, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  {res.icon}
                  <span style={{ fontSize: "13px", color: "#61708B", lineHeight: "16px" }}>{res.label}</span>
                </div>
              ))}
            </div>

            {/* Requirements border */}
            <div
              style={{
                borderTop: "1px solid #E1E7F2",
                paddingTop: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#17264A", lineHeight: "16px" }}>
                Before you begin
              </span>
              <p style={{ fontSize: "12px", color: "#61708B", lineHeight: "170%", margin: 0 }}>
                A computer, a free Figma account and a little curiosity. No previous design experience required.
              </p>
            </div>
          </div>

          {/* Card 3: Course project (Soft violet #F4F0FC card) */}
          <div
            style={{
              width: "100%",
              backgroundColor: "#F4F0FC",
              borderRadius: "20px",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              boxSizing: "border-box",
            }}
          >
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7452C7" strokeWidth="1.7">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#7452C7",
                  lineHeight: "13px",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                LEARN IT. MAKE IT.
              </span>
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "22px",
                fontWeight: 700,
                lineHeight: "130%",
                color: "#17264A",
                margin: 0,
              }}
            >
              Your first portfolio-worthy interface.
            </h3>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                lineHeight: "175%",
                color: "#61708B",
                margin: 0,
              }}
            >
              Design a mobile habit-tracking app—from a simple wireframe to a polished, interactive screen. A real project. A tangible next step.
            </p>

            {/* Skill tags */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {["Figma", "Mobile UI", "Prototyping"].map((tag) => (
                <div
                  key={tag}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "100px",
                    padding: "6px 12px",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontSize: "10px", fontWeight: 500, color: "#7452C7", lineHeight: "12px" }}>
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: AI learning support */}
          <div
            style={{
              width: "100%",
              backgroundColor: "#FFFFFF",
              border: "1px solid #E5E9F2",
              boxShadow: "0px 4px 20px rgba(25, 38, 84, 0.035)",
              borderRadius: "16px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              boxSizing: "border-box",
            }}
          >
            {/* Heading row */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  backgroundColor: "#E5F6EF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#23795D" strokeWidth="1.8">
                  <path d="M12 8V4H8" />
                  <rect width="16" height="12" x="4" y="8" rx="2" />
                  <path d="M2 14h2" />
                  <path d="M20 14h2" />
                  <path d="M15 13v2" />
                  <path d="M9 13v2" />
                </svg>
              </div>
              <span
                style={{
                  flex: 1,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "#17213D",
                  lineHeight: "21px",
                }}
              >
                A little help along the way
              </span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#606B82" strokeWidth="1.8">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                lineHeight: "155%",
                color: "#606B82",
                margin: 0,
              }}
            >
              Get unstuck and explore new ideas with your AI Learning Assistant, available 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Site Footer */}
      <footer
        style={{
          width: "100%",
          maxWidth: "1440px",
          padding: "8px 80px 152px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          boxSizing: "border-box",
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            fontWeight: 400,
            color: "#61708B",
            lineHeight: "15px",
          }}
        >
          © 2026 Learning Hub. All rights reserved.
        </span>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            fontWeight: 400,
            color: "#61708B",
            lineHeight: "15px",
          }}
        >
          Built for curious minds. Designed for your future.
        </span>
      </footer>

      {/* 5. Sticky Bottom Action Bar (Fixed height 104px) */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "104px",
          backgroundColor: "#FFFFFF",
          borderTop: "1px solid #E1E7F2",
          boxShadow: "0px -8px 32px rgba(32, 63, 118, 0.078)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 100,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1440px",
            padding: "0 80px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          {/* Left: Course Reminder */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "#EDF3FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#245CE8" strokeWidth="1.7">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: "19px",
                  color: "#17264A",
                }}
              >
                UI Design Fundamentals
              </span>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#61708B",
                  lineHeight: "15px",
                }}
              >
                Beginner-friendly · 6 hours · Learn at your own pace
              </span>
            </div>
          </div>

          {/* Right: Access Reassurance + Start Learning Button */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#19805A" strokeWidth="1.7">
                <circle cx="12" cy="12" r="10" />
                <polyline points="16 10 11 15 8 12" />
              </svg>
              <span style={{ fontSize: "12px", color: "#61708B", lineHeight: "15px" }}>
                Your next chapter starts here.
              </span>
            </div>

            <Link
              href="/lesson"
              style={{
                width: "300px",
                height: "56px",
                backgroundColor: "#245CE8",
                border: "1px solid #245CE8",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                color: "#FFFFFF",
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(36, 92, 232, 0.25)",
                transition: "all 0.15s ease",
              }}
            >
              <span>Start Learning</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
