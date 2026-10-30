"use client";
import React, { useState } from "react";
import Link from "next/link";
import LearningHubLogo from "@/components/LearningHubLogo";

export default function LessonPlayerPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [notesContent, setNotesContent] = useState(
    "Key takeaway: Intuitive UI comes from predictable patterns and immediate, meaningful feedback."
  );
  const [isCompleted, setIsCompleted] = useState(false);
  const [focusMode, setFocusMode] = useState(false);

  // Accordion state for modules
  const [expandedModules, setExpandedModules] = useState<{ [key: number]: boolean }>({
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const toggleModule = (id: number) => {
    setExpandedModules((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
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
      }}
    >
      {/* 1. Learning Header */}
      <header
        style={{
          width: "100%",
          height: "88px",
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid #E1E7F2",
          display: "flex",
          justifyContent: "center",
          position: "sticky",
          top: 0,
          zIndex: 50,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1440px",
            padding: "0 64px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "32px",
            boxSizing: "border-box",
          }}
        >
          {/* Learning Hub Brand matching Image 1 */}
          <LearningHubLogo size="md" />

          {/* Divider */}
          <div
            style={{
              width: "1px",
              height: "28px",
              backgroundColor: "#E1E7F2",
              flexShrink: 0,
            }}
          />

          {/* Return to course */}
          <Link
            href="/course"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              height: "34px",
              flexGrow: 1,
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "18px",
                height: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#61708B",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "17px",
                  color: "#17264A",
                }}
              >
                UI Design Fundamentals
              </span>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "11px",
                  lineHeight: "13px",
                  color: "#61708B",
                }}
              >
                Back to course overview
              </span>
            </div>
          </Link>

          {/* Focus Mode Button */}
          <button
            type="button"
            onClick={() => setFocusMode(!focusMode)}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "8px",
              background: "none",
              border: "none",
              padding: "6px 10px",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background-color 0.15s ease",
              backgroundColor: focusMode ? "#EDF3FF" : "transparent",
            }}
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#245CE8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 7V5a2 2 0 0 1 2-2h2" />
              <path d="M17 3h2a2 2 0 0 1 2 2v2" />
              <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
              <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
            </svg>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "13px",
                lineHeight: "16px",
                color: "#245CE8",
              }}
            >
              {focusMode ? "Exit focus" : "Focus mode"}
            </span>
          </button>

          {/* Learner Profile */}
          <Link
            href="/dashboard"
            title="View Learning Progress Dashboard"
            style={{
              width: "36px",
              height: "36px",
              backgroundColor: "#F4F0FC",
              borderRadius: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              textDecoration: "none",
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "12px",
                lineHeight: "15px",
                color: "#7452C7",
              }}
            >
              MB
            </span>
          </Link>
        </div>
      </header>

      {/* 2. Learning Workspace */}
      <main
        style={{
          width: "100%",
          maxWidth: "1440px",
          padding: "32px 64px 48px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "32px",
          boxSizing: "border-box",
        }}
      >
        {/* Left Column: Current Lesson (928px) */}
        <section
          style={{
            width: focusMode ? "100%" : "928px",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            flexShrink: 0,
            transition: "width 0.3s ease",
          }}
        >
          {/* Lesson Video Player (928px x 522px) */}
          <div
            style={{
              width: "100%",
              height: "522px",
              backgroundColor: "#111B34",
              borderRadius: "20px",
              position: "relative",
              overflow: "hidden",
              isolation: "isolate",
              boxShadow: "0 20px 48px rgba(17, 27, 52, 0.16)",
            }}
          >
            {/* Course Artwork on right side */}
            <div
              style={{
                position: "absolute",
                width: "536px",
                height: "440px",
                right: "0px",
                top: "0px",
                zIndex: 0,
                overflow: "hidden",
              }}
            >
              <img
                src="/images/ui-course-cover-clean.png"
                alt="UI UX design artwork"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "right center",
                  opacity: 0.95,
                  display: "block",
                }}
              />
            </div>

            {/* Cinematic Scrim (Linear gradient overlay from left) */}
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "448px",
                left: 0,
                top: 0,
                background:
                  "linear-gradient(90deg, #111B34 20%, rgba(17, 27, 52, 0.91) 58.69%, rgba(17, 27, 52, 0.19) 93%)",
                zIndex: 1,
                pointerEvents: "none",
              }}
            />

            {/* Lesson Title Slide (Overlayed typography on left) */}
            <div
              style={{
                position: "absolute",
                width: "420px",
                left: "44px",
                top: "40px",
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                pointerEvents: "none",
              }}
            >
              {/* Video Course Label */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "2px",
                    backgroundColor: "#91ACFF",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "10px",
                    lineHeight: "12px",
                    color: "#B8C2D9",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  UI DESIGN FUNDAMENTALS
                </span>
              </div>

              {/* Slide Copy */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "24px",
                  gap: "14px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "#BBA5EF",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  01 / GETTING STARTED
                </span>
                <h2
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "44px",
                    lineHeight: "112%",
                    color: "#FFFFFF",
                    margin: 0,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Clarity before<br />complexity.
                </h2>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "160%",
                    color: "#B8C2D9",
                    margin: 0,
                    maxWidth: "320px",
                  }}
                >
                  The principles behind interfaces that just make sense.
                </p>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "#B8C2D9",
                    marginTop: "4px",
                  }}
                >
                  with Dr. Solomon Abebe
                </span>
              </div>
            </div>

            {/* Resume Playback Center Floating Button */}
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              style={{
                position: "absolute",
                width: "64px",
                height: "64px",
                left: "645px",
                top: "190px",
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 8px 32px rgba(17, 27, 52, 0.35)",
                borderRadius: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 3,
                border: "none",
                cursor: "pointer",
                transition: "transform 0.15s ease, box-shadow 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
              title={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                /* Pause icon */
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#245CE8">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                /* Blue play triangle */
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="#245CE8"
                  style={{ marginLeft: "3px" }}
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </button>

            {/* Playback Controls Bar */}
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "96px",
                left: 0,
                bottom: 0,
                backgroundColor: "#111B34",
                padding: "14px 24px 20px",
                gap: "18px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                zIndex: 4,
              }}
            >
              {/* Video Seek Bar */}
              <div
                style={{
                  width: "100%",
                  height: "4px",
                  backgroundColor: "rgba(255, 255, 255, 0.19)",
                  borderRadius: "10px",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                {/* Buffered Video Bar */}
                <div
                  style={{
                    position: "absolute",
                    width: "60%",
                    height: "4px",
                    left: 0,
                    top: 0,
                    backgroundColor: "rgba(255, 255, 255, 0.21)",
                    borderRadius: "10px",
                  }}
                />
                {/* Watched Video Bar */}
                <div
                  style={{
                    position: "absolute",
                    width: "35%",
                    height: "4px",
                    left: 0,
                    top: 0,
                    backgroundColor: "#6E94FF",
                    borderRadius: "10px",
                  }}
                />
                {/* Seek Handle */}
                <div
                  style={{
                    position: "absolute",
                    width: "12px",
                    height: "12px",
                    left: "35%",
                    top: "-4px",
                    transform: "translateX(-6px)",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "50%",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.4)",
                  }}
                />
              </div>

              {/* Video Toolbar */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "20px",
                  width: "100%",
                }}
              >
                {/* Play/Pause */}
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  {isPlaying ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF">
                      <rect x="6" y="4" width="4" height="16" rx="1" />
                      <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  )}
                </button>

                {/* Rotate CCW 10s */}
                <button
                  type="button"
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  title="Rewind 10s"
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                  </svg>
                </button>

                {/* Volume */}
                <button
                  type="button"
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  title="Mute / Unmute"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                </button>

                {/* Playback Time */}
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "#B8C2D9",
                    flexGrow: 1,
                  }}
                >
                  04:12 / 12:00
                </span>

                {/* Playback Speed */}
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "#FFFFFF",
                    cursor: "pointer",
                  }}
                >
                  1×
                </span>

                {/* Captions */}
                <button
                  type="button"
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  title="Subtitles"
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
                    <path d="M7 15h4M15 15h2M7 11h2M13 11h4" />
                  </svg>
                </button>

                {/* Quality */}
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "11px",
                    lineHeight: "13px",
                    color: "#B8C2D9",
                    cursor: "pointer",
                  }}
                >
                  1080p
                </span>

                {/* Settings */}
                <button
                  type="button"
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  title="Player settings"
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>

                {/* Maximize */}
                <button
                  type="button"
                  onClick={() => setFocusMode(!focusMode)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  title="Fullscreen"
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Lesson Details (928px) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              width: "100%",
            }}
          >
            {/* Lesson Introduction */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                width: "100%",
              }}
            >
              {/* Context Row */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "11px",
                    lineHeight: "13px",
                    color: "#7452C7",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  MODULE 01 · LESSON 02 OF 28
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "#61708B",
                  }}
                >
                  12 min video
                </span>
              </div>

              {/* Title */}
              <h1
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "30px",
                  lineHeight: "120%",
                  color: "#17264A",
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                What makes an interface feel intuitive?
              </h1>

              {/* Lesson Tools Row */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                  width: "100%",
                }}
              >
                {/* Instructor Identity */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "9px",
                    flexGrow: 1,
                  }}
                >
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: "#E4DDF5",
                      borderRadius: "100px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: "10px",
                        lineHeight: "12px",
                        color: "#7452C7",
                      }}
                    >
                      SA
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: "12px",
                      lineHeight: "15px",
                      color: "#61708B",
                    }}
                  >
                    Dr. Solomon Abebe
                  </span>
                </div>

                {/* Notes Action */}
                <button
                  type="button"
                  onClick={() => setShowNotes(!showNotes)}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "0px 14px",
                    gap: "8px",
                    height: "40px",
                    backgroundColor: showNotes ? "#F7F9FE" : "#FFFFFF",
                    border: "1px solid #E1E7F2",
                    borderRadius: "10px",
                    cursor: "pointer",
                    boxSizing: "border-box",
                    transition: "all 0.15s ease",
                  }}
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#17264A"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: "13px",
                      lineHeight: "16px",
                      color: "#17264A",
                    }}
                  >
                    Notes
                  </span>
                </button>

                {/* Bookmark Action */}
                <button
                  type="button"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "0px 14px",
                    gap: "8px",
                    height: "40px",
                    backgroundColor: isBookmarked ? "#EFF6FF" : "#FFFFFF",
                    border: isBookmarked ? "1px solid #245CE8" : "1px solid #E1E7F2",
                    borderRadius: "10px",
                    cursor: "pointer",
                    boxSizing: "border-box",
                    transition: "all 0.15s ease",
                  }}
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill={isBookmarked ? "#245CE8" : "none"}
                    stroke={isBookmarked ? "#245CE8" : "#17264A"}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                  </svg>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: "13px",
                      lineHeight: "16px",
                      color: isBookmarked ? "#245CE8" : "#17264A",
                    }}
                  >
                    {isBookmarked ? "Bookmarked" : "Bookmark"}
                  </span>
                </button>
              </div>

              {/* Notes Drawer when open */}
              {showNotes && (
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E1E7F2",
                    borderRadius: "12px",
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginTop: "4px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: "#17264A" }}>
                      My Lesson Notes
                    </span>
                    <span style={{ fontSize: "11px", color: "#61708B" }}>Autosaved</span>
                  </div>
                  <textarea
                    value={notesContent}
                    onChange={(e) => setNotesContent(e.target.value)}
                    rows={3}
                    style={{
                      width: "100%",
                      border: "1px solid #E1E7F2",
                      borderRadius: "8px",
                      padding: "10px",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      color: "#17264A",
                      outline: "none",
                      boxSizing: "border-box",
                      resize: "vertical",
                    }}
                  />
                </div>
              )}
            </div>

            {/* Lesson Progress */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "9px",
                paddingTop: "4px",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  width: "100%",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "#61708B",
                  }}
                >
                  Your lesson progress
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "#245CE8",
                  }}
                >
                  35% watched
                </span>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "5px",
                  backgroundColor: "#E1E7F2",
                  borderRadius: "100px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "35%",
                    height: "5px",
                    backgroundColor: "#245CE8",
                    borderRadius: "100px",
                  }}
                />
              </div>
            </div>

            {/* About This Lesson */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                width: "100%",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: "#17264A",
                  margin: 0,
                }}
              >
                About this lesson
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "175%",
                  color: "#61708B",
                  margin: 0,
                }}
              >
                Great interfaces feel effortless for a reason. Explore how clarity, consistency and
                feedback help people find their way. Then walk through real UI examples and learn to
                spot the small decisions that make a big difference.
              </p>
            </div>

            {/* Downloadable Resources */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#17264A",
                    margin: 0,
                  }}
                >
                  Downloadable resources
                </h3>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "#61708B",
                  }}
                >
                  (2)
                </span>
              </div>

              {/* Resource Cards */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "16px",
                  width: "100%",
                }}
              >
                {/* Resource 1 */}
                <div
                  style={{
                    flex: 1,
                    height: "72px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E1E7F2",
                    borderRadius: "12px",
                    padding: "16px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "12px",
                    boxSizing: "border-box",
                    cursor: "pointer",
                    transition: "border-color 0.15s ease, box-shadow 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#245CE8";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(36, 92, 232, 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#E1E7F2";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#EDF3FF",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#245CE8",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#245CE8"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      flexGrow: 1,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: "13px",
                        lineHeight: "16px",
                        color: "#17264A",
                      }}
                    >
                      Intuitive UI checklist
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: "11px",
                        lineHeight: "13px",
                        color: "#61708B",
                      }}
                    >
                      PDF · 1.2 MB
                    </span>
                  </div>
                  <div style={{ color: "#245CE8", flexShrink: 0 }}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </div>
                </div>

                {/* Resource 2 */}
                <div
                  style={{
                    flex: 1,
                    height: "72px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E1E7F2",
                    borderRadius: "12px",
                    padding: "16px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "12px",
                    boxSizing: "border-box",
                    cursor: "pointer",
                    transition: "border-color 0.15s ease, box-shadow 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#245CE8";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(36, 92, 232, 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#E1E7F2";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#EDF3FF",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#245CE8",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#245CE8"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M3 9h18" />
                      <path d="M9 21V9" />
                    </svg>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      flexGrow: 1,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: "13px",
                        lineHeight: "16px",
                        color: "#17264A",
                      }}
                    >
                      Interface examples
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: "11px",
                        lineHeight: "13px",
                        color: "#61708B",
                      }}
                    >
                      Figma file · 4.8 MB
                    </span>
                  </div>
                  <div style={{ color: "#245CE8", flexShrink: 0 }}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Lesson Navigation */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingTop: "24px",
                borderTop: "1px solid #E1E7F2",
                gap: "16px",
                boxSizing: "border-box",
              }}
            >
              {/* Previous Lesson Action */}
              <button
                type="button"
                style={{
                  width: "152px",
                  height: "40px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E1E7F2",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "0 14px",
                  cursor: "pointer",
                  boxSizing: "border-box",
                  transition: "background-color 0.15s ease",
                }}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#17264A"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "13px",
                    lineHeight: "16px",
                    color: "#17264A",
                  }}
                >
                  Previous lesson
                </span>
              </button>

              {/* Next Lesson Button */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "8px",
                  flexGrow: 1,
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "13px",
                    lineHeight: "16px",
                    color: "#245CE8",
                  }}
                >
                  Next lesson
                </span>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#245CE8"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>

              {/* Complete Lesson Action */}
              <button
                type="button"
                onClick={() => setIsCompleted(!isCompleted)}
                style={{
                  width: "234px",
                  height: "52px",
                  backgroundColor: isCompleted ? "#19805A" : "#245CE8",
                  border: isCompleted ? "1px solid #19805A" : "1px solid #245CE8",
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  cursor: "pointer",
                  boxSizing: "border-box",
                  transition: "background-color 0.2s ease, transform 0.1s ease",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "17px",
                    color: "#FFFFFF",
                  }}
                >
                  {isCompleted ? "Lesson Completed ✓" : "Complete Lesson"}
                </span>
                {!isCompleted && (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* Right Column: Course Outline / Curriculum Panel (352px) */}
        {!focusMode && (
          <aside
            style={{
              width: "352px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              flexShrink: 0,
            }}
          >
            {/* Curriculum Panel */}
            <div
              style={{
                width: "352px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E1E7F2",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                boxSizing: "border-box",
              }}
            >
              {/* Course Progress Header */}
              <div
                style={{
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {/* Panel Heading */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                      fontSize: "18px",
                      lineHeight: "22px",
                      color: "#17264A",
                      margin: 0,
                    }}
                  >
                    Your learning journey
                  </h3>
                  <button
                    type="button"
                    onClick={() => setFocusMode(true)}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      color: "#61708B",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                    title="Close sidebar"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M15 3v18" />
                      <path d="m10 15-3-3 3-3" />
                    </svg>
                  </button>
                </div>

                {/* Course Totals */}
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: "11px",
                    lineHeight: "13px",
                    color: "#61708B",
                  }}
                >
                  5 modules · 28 lessons · 6 hours
                </span>

                {/* Course Completion */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "9px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      width: "100%",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: "11px",
                        lineHeight: "13px",
                        color: "#61708B",
                      }}
                    >
                      1 of 28 lessons complete
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: "11px",
                        lineHeight: "13px",
                        color: "#245CE8",
                      }}
                    >
                      4%
                    </span>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "5px",
                      backgroundColor: "#E1E7F2",
                      borderRadius: "100px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: "4%",
                        height: "5px",
                        backgroundColor: "#245CE8",
                        borderRadius: "100px",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Module 01 (Expanded Active Module) */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderTop: "1px solid #E1E7F2",
                }}
              >
                {/* Module Bar */}
                <div
                  onClick={() => toggleModule(1)}
                  style={{
                    padding: "18px 24px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "12px",
                    backgroundColor: "#F7F9FE",
                    borderBottom: expandedModules[1] ? "1px solid #E1E7F2" : "none",
                    cursor: "pointer",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: "12px",
                      lineHeight: "15px",
                      color: "#245CE8",
                      flexShrink: 0,
                    }}
                  >
                    01
                  </span>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      flexGrow: 1,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: "13px",
                        lineHeight: "150%",
                        color: "#17264A",
                      }}
                    >
                      Getting started with UI design
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: "10px",
                        lineHeight: "12px",
                        color: "#61708B",
                      }}
                    >
                      5 lessons · 45 min
                    </span>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#61708B"
                    strokeWidth="2"
                    style={{
                      transform: expandedModules[1] ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                      flexShrink: 0,
                    }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>

                {/* Module Lessons (Shown when expanded) */}
                {expandedModules[1] && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "8px",
                      gap: "2px",
                    }}
                  >
                    {/* Lesson 1 (Completed) */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "14px 16px",
                        gap: "12px",
                        borderRadius: "10px",
                        backgroundColor: "#FFFFFF",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          width: "22px",
                          height: "22px",
                          backgroundColor: "#E5F6EF",
                          borderRadius: "100px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#19805A"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px", flexGrow: 1 }}>
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500,
                            fontSize: "12px",
                            lineHeight: "150%",
                            color: "#17264A",
                          }}
                        >
                          Welcome to the course
                        </span>
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400,
                            fontSize: "10px",
                            lineHeight: "12px",
                            color: "#61708B",
                          }}
                        >
                          05:00
                        </span>
                      </div>
                    </div>

                    {/* Lesson 2 (Active / Current) */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "14px 16px",
                        gap: "12px",
                        borderRadius: "10px",
                        backgroundColor: "#EDF3FF",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          width: "22px",
                          height: "22px",
                          backgroundColor: "#245CE8",
                          borderRadius: "100px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="#FFFFFF"
                          style={{ marginLeft: "2px" }}
                        >
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px", flexGrow: 1 }}>
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 600,
                            fontSize: "12px",
                            lineHeight: "150%",
                            color: "#245CE8",
                          }}
                        >
                          What makes an interface feel intuitive?
                        </span>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: 400,
                              fontSize: "10px",
                              lineHeight: "12px",
                              color: "#61708B",
                            }}
                          >
                            12:00
                          </span>
                          <span
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: 600,
                              fontSize: "10px",
                              lineHeight: "12px",
                              color: "#245CE8",
                            }}
                          >
                            IN PROGRESS
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Lesson 3 */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "14px 16px",
                        gap: "12px",
                        borderRadius: "10px",
                        backgroundColor: "#FFFFFF",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          width: "22px",
                          height: "22px",
                          backgroundColor: "#F7F9FE",
                          borderRadius: "100px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          color: "#61708B",
                        }}
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
                        </svg>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px", flexGrow: 1 }}>
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500,
                            fontSize: "12px",
                            lineHeight: "150%",
                            color: "#17264A",
                          }}
                        >
                          Your Figma workspace, explained
                        </span>
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400,
                            fontSize: "10px",
                            lineHeight: "12px",
                            color: "#61708B",
                          }}
                        >
                          10:00
                        </span>
                      </div>
                    </div>

                    {/* Lesson 4 */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "14px 16px",
                        gap: "12px",
                        borderRadius: "10px",
                        backgroundColor: "#FFFFFF",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          width: "22px",
                          height: "22px",
                          backgroundColor: "#F7F9FE",
                          borderRadius: "100px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          color: "#61708B",
                        }}
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                        </svg>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px", flexGrow: 1 }}>
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500,
                            fontSize: "12px",
                            lineHeight: "150%",
                            color: "#17264A",
                          }}
                        >
                          Practice: spot the design principles
                        </span>
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400,
                            fontSize: "10px",
                            lineHeight: "12px",
                            color: "#61708B",
                          }}
                        >
                          10:00
                        </span>
                      </div>
                    </div>

                    {/* Lesson 5 */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "14px 16px",
                        gap: "12px",
                        borderRadius: "10px",
                        backgroundColor: "#FFFFFF",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          width: "22px",
                          height: "22px",
                          backgroundColor: "#F7F9FE",
                          borderRadius: "100px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          color: "#61708B",
                        }}
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="10" y1="6" x2="21" y2="6" />
                          <line x1="10" y1="12" x2="21" y2="12" />
                          <line x1="10" y1="18" x2="21" y2="18" />
                          <polyline points="3 6 4 7 6 5" />
                          <polyline points="3 12 4 13 6 11" />
                          <polyline points="3 18 4 19 6 17" />
                        </svg>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px", flexGrow: 1 }}>
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500,
                            fontSize: "12px",
                            lineHeight: "150%",
                            color: "#17264A",
                          }}
                        >
                          Check your understanding
                        </span>
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400,
                            fontSize: "10px",
                            lineHeight: "12px",
                            color: "#61708B",
                          }}
                        >
                          08:00
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Collapsed Modules 02 - 05 */}
              {[
                {
                  id: 2,
                  num: "02",
                  title: "Typography & color",
                  meta: "6 lessons · 1 hr 10 min",
                },
                {
                  id: 3,
                  num: "03",
                  title: "Layout, grids & visual hierarchy",
                  meta: "5 lessons · 1 hr",
                },
                {
                  id: 4,
                  num: "04",
                  title: "Components & design systems",
                  meta: "6 lessons · 1 hr 20 min",
                },
                {
                  id: 5,
                  num: "05",
                  title: "Your first interface: from idea to prototype",
                  meta: "6 lessons · 1 hr 45 min",
                },
              ].map((mod) => (
                <div
                  key={mod.id}
                  onClick={() => toggleModule(mod.id)}
                  style={{
                    padding: "19px 24px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "12px",
                    borderTop: "1px solid #E1E7F2",
                    backgroundColor: "#FFFFFF",
                    cursor: "pointer",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                      fontSize: "12px",
                      lineHeight: "15px",
                      color: "#61708B",
                      flexShrink: 0,
                    }}
                  >
                    {mod.num}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      flexGrow: 1,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        fontSize: "12px",
                        lineHeight: "150%",
                        color: "#17264A",
                      }}
                    >
                      {mod.title}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: "10px",
                        lineHeight: "12px",
                        color: "#61708B",
                      }}
                    >
                      {mod.meta}
                    </span>
                  </div>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#61708B"
                    strokeWidth="2"
                    style={{
                      transform: expandedModules[mod.id] ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                      flexShrink: 0,
                    }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              ))}
            </div>

            {/* Progress Reassurance (Cloud-check) */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "0px 12px",
                gap: "8px",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#61708B"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                <polyline points="9 13 12 16 17 11" />
              </svg>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "11px",
                  lineHeight: "13px",
                  color: "#61708B",
                }}
              >
                Your progress is saved automatically.
              </span>
            </div>
          </aside>
        )}
      </main>
    </div>
  );
}
