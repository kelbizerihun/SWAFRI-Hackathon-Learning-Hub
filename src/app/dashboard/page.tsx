"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LearningHubLogo from "@/components/LearningHubLogo";

export default function LearningProgressDashboard() {
  const [activeNav, setActiveNav] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("Oct 19 – 25, 2026");
  const [isPeriodOpen, setIsPeriodOpen] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [showGoalsModal, setShowGoalsModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAllBadges, setShowAllBadges] = useState(false);
  const [goalTargetHours, setGoalTargetHours] = useState("10");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        padding: 0,
        margin: 0,
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#F7F9FE",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        color: "#17264A",
      }}
    >
      {/* ========================================================= */}
      {/* SIDEBAR (232px wide) */}
      {/* ========================================================= */}
      <aside
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "28px 20px 24px",
          gap: "32px",
          width: "232px",
          minWidth: "232px",
          minHeight: "1272px",
          backgroundColor: "#FFFFFF",
          borderRight: "1px solid #E6ECF6",
          flexShrink: 0,
          zIndex: 10,
        }}
      >
        {/* Learning Hub Brand matching Image 1 */}
        <div style={{ padding: "0px 0px 0px 4px" }}>
          <LearningHubLogo size="md" />
        </div>

        {/* Main navigation */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: 0,
            gap: "6px",
            width: "192px",
          }}
        >
          {/* Navigation section heading */}
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "10px",
              lineHeight: "12px",
              color: "#61708B",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              marginBottom: "2px",
              paddingLeft: "4px",
            }}
          >
            Your workspace
          </span>

          {/* 1. Overview (Active) */}
          <button
            onClick={() => setActiveNav("overview")}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "0px 14px",
              gap: "12px",
              width: "192px",
              height: "46px",
              backgroundColor: activeNav === "overview" ? "#EDF3FF" : "#FFFFFF",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              transition: "background 0.15s ease",
              textAlign: "left",
            }}
          >
            {/* layout-dashboard icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect
                x="3"
                y="3"
                width="7"
                height="9"
                rx="1.5"
                stroke={activeNav === "overview" ? "#245CE8" : "#61708B"}
                strokeWidth="1.8"
              />
              <rect
                x="14"
                y="3"
                width="7"
                height="5"
                rx="1.5"
                stroke={activeNav === "overview" ? "#245CE8" : "#61708B"}
                strokeWidth="1.8"
              />
              <rect
                x="14"
                y="12"
                width="7"
                height="9"
                rx="1.5"
                stroke={activeNav === "overview" ? "#245CE8" : "#61708B"}
                strokeWidth="1.8"
              />
              <rect
                x="3"
                y="16"
                width="7"
                height="5"
                rx="1.5"
                stroke={activeNav === "overview" ? "#245CE8" : "#61708B"}
                strokeWidth="1.8"
              />
            </svg>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "17px",
                color: activeNav === "overview" ? "#245CE8" : "#61708B",
                flexGrow: 1,
              }}
            >
              Overview
            </span>
          </button>

          {/* 2. My learning (with count 03) */}
          <button
            onClick={() => setActiveNav("learning")}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "0px 14px",
              gap: "12px",
              width: "192px",
              height: "46px",
              backgroundColor: activeNav === "learning" ? "#EDF3FF" : "#FFFFFF",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              transition: "background 0.15s ease",
              textAlign: "left",
            }}
          >
            {/* book-open icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M2 3H8C9.65685 3 11 4.34315 11 6V20C11 18.8954 10.1046 18 9 18H2V3Z"
                stroke="#61708B"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 3H16C14.3431 3 13 4.34315 13 6V20C13 18.8954 13.8954 18 15 18H22V3Z"
                stroke="#61708B"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "17px",
                color: "#61708B",
                flexGrow: 1,
              }}
            >
              My learning
            </span>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "11px",
                lineHeight: "13px",
                color: "#7252CF",
              }}
            >
              03
            </span>
          </button>

          {/* 3. Explore courses */}
          <Link
            href="/course"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "0px 14px",
              gap: "12px",
              width: "192px",
              height: "46px",
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              textDecoration: "none",
              boxSizing: "border-box",
            }}
          >
            {/* compass icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9.5" stroke="#61708B" strokeWidth="1.8" />
              <polygon
                points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88"
                stroke="#61708B"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "17px",
                color: "#61708B",
                flexGrow: 1,
              }}
            >
              Explore courses
            </span>
          </Link>

          {/* 4. My certificates */}
          <button
            onClick={() => setActiveNav("certificates")}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "0px 14px",
              gap: "12px",
              width: "192px",
              height: "46px",
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {/* award icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="6" stroke="#61708B" strokeWidth="1.8" />
              <path
                d="M15.5 13.5L18 21L12 18L6 21L8.5 13.5"
                stroke="#61708B"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "17px",
                color: "#61708B",
                flexGrow: 1,
                textAlign: "left",
              }}
            >
              My certificates
            </span>
          </button>

          {/* 5. Learning goals */}
          <button
            onClick={() => setActiveNav("goals")}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "0px 14px",
              gap: "12px",
              width: "192px",
              height: "46px",
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {/* target icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9.5" stroke="#61708B" strokeWidth="1.8" />
              <circle cx="12" cy="12" r="5.5" stroke="#61708B" strokeWidth="1.8" />
              <circle cx="12" cy="12" r="1.8" fill="#61708B" />
            </svg>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "17px",
                color: "#61708B",
                flexGrow: 1,
                textAlign: "left",
              }}
            >
              Learning goals
            </span>
          </button>

          {/* 6. Community */}
          <button
            onClick={() => setActiveNav("community")}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "0px 14px",
              gap: "12px",
              width: "192px",
              height: "46px",
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {/* users icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M16 21V19C16 16.7909 14.2091 15 12 15H6C3.79086 15 2 16.7909 2 19V21"
                stroke="#61708B"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="7" r="4" stroke="#61708B" strokeWidth="1.8" />
              <path
                d="M22 21V19C21.9986 17.1771 20.765 15.5857 19 15.13"
                stroke="#61708B"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M16 3.13C17.7699 3.58317 19.0078 5.17799 19.0078 7.005C19.0078 8.83201 17.7699 10.4268 16 10.88"
                stroke="#61708B"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "17px",
                color: "#61708B",
                flexGrow: 1,
                textAlign: "left",
              }}
            >
              Community
            </span>
          </button>
        </div>

        {/* Learning support */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: 0,
            gap: "6px",
            width: "192px",
          }}
        >
          {/* Navigation label */}
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "10px",
              lineHeight: "12px",
              color: "#61708B",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              marginBottom: "2px",
              paddingLeft: "4px",
            }}
          >
            Learn better
          </span>

          {/* AI study companion */}
          <button
            onClick={() => setActiveNav("ai-companion")}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "0px 14px",
              gap: "12px",
              width: "192px",
              height: "46px",
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {/* sparkles icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L14.4 7.6L20 10L14.4 12.4L12 18L9.6 12.4L4 10L9.6 7.6L12 2Z"
                stroke="#61708B"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 16L19 18.5L21.5 19.5L19 20.5L18 23L17 20.5L14.5 19.5L17 18.5L18 16Z"
                stroke="#61708B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "17px",
                color: "#61708B",
                flexGrow: 1,
                textAlign: "left",
              }}
            >
              AI study companion
            </span>
          </button>

          {/* Saved resources */}
          <button
            onClick={() => setActiveNav("saved")}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "0px 14px",
              gap: "12px",
              width: "192px",
              height: "46px",
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {/* bookmark icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 4C5 2.89543 5.89543 2 7 2H17C18.1046 2 19 2.89543 19 4V21L12 17.5L5 21V4Z"
                stroke="#61708B"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "17px",
                color: "#61708B",
                flexGrow: 1,
                textAlign: "left",
              }}
            >
              Saved resources
            </span>
          </button>
        </div>

        {/* Flexible space */}
        <div style={{ flexGrow: 1, width: "192px", minHeight: "24px" }} />

        {/* Study companion invitation */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "16px",
            gap: "12px",
            width: "192px",
            boxSizing: "border-box",
            backgroundColor: "#EFEDFF",
            borderRadius: "20px",
          }}
        >
          {/* sparkles icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L14.4 7.6L20 10L14.4 12.4L12 18L9.6 12.4L4 10L9.6 7.6L12 2Z"
              stroke="#7252CF"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Invitation title */}
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "17px",
              color: "#17264A",
            }}
          >
            A little help. A big leap.
          </span>

          {/* Invitation description */}
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "160%",
              color: "#61708B",
            }}
          >
            Turn a tricky topic into your next breakthrough.
          </span>

          {/* Companion action */}
          <Link
            href="/faq"
            style={{
              background: "none",
              border: "none",
              padding: 0,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "12px",
              lineHeight: "15px",
              color: "#7252CF",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            Meet your AI companion ↗
          </Link>
        </div>

        {/* Account navigation */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: 0,
            gap: "4px",
            width: "192px",
          }}
        >
          {/* Settings */}
          <Link
            href="/controls"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "0px 14px",
              gap: "12px",
              width: "192px",
              height: "46px",
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              textDecoration: "none",
              boxSizing: "border-box",
            }}
          >
            {/* settings-2 icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <line x1="4" y1="21" x2="4" y2="14" stroke="#61708B" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="4" y1="10" x2="4" y2="3" stroke="#61708B" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="12" y1="21" x2="12" y2="12" stroke="#61708B" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="12" y1="8" x2="12" y2="3" stroke="#61708B" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="20" y1="21" x2="20" y2="16" stroke="#61708B" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="20" y1="12" x2="20" y2="3" stroke="#61708B" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="4" cy="12" r="2.5" stroke="#61708B" strokeWidth="1.8" />
              <circle cx="12" cy="10" r="2.5" stroke="#61708B" strokeWidth="1.8" />
              <circle cx="20" cy="14" r="2.5" stroke="#61708B" strokeWidth="1.8" />
            </svg>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "17px",
                color: "#61708B",
                flexGrow: 1,
                textAlign: "left",
              }}
            >
              Settings
            </span>
          </Link>

          {/* Help & support */}
          <Link
            href="/contact"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "0px 14px",
              gap: "12px",
              width: "192px",
              height: "46px",
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              textDecoration: "none",
              boxSizing: "border-box",
            }}
          >
            {/* circle-help icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9.5" stroke="#61708B" strokeWidth="1.8" />
              <path
                d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.39913C11.0108 7.03016 11.7289 6.88 12.43 6.97453C13.1311 7.06906 13.7719 7.40228 14.2415 7.91571C14.711 8.42913 14.9796 9.09033 15 9.78C15 11.5 12.5 12.5 12.5 12.5"
                stroke="#61708B"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <circle cx="12" cy="16.5" r="0.75" fill="#61708B" />
            </svg>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "17px",
                color: "#61708B",
                flexGrow: 1,
                textAlign: "left",
              }}
            >
              Help & support
            </span>
          </Link>

          {/* Divider */}
          <div
            style={{
              width: "192px",
              height: "1px",
              backgroundColor: "#E6ECF6",
              margin: "6px 0",
            }}
          />

          {/* Learner profile */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "8px 0px 0px",
              gap: "10px",
              width: "192px",
              height: "52px",
              cursor: "pointer",
            }}
          >
            {/* Avatar */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "36px",
                height: "36px",
                backgroundColor: "#EFEDFF",
                borderRadius: "100px",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "12px",
                  lineHeight: "15px",
                  color: "#7252CF",
                }}
              >
                MB
              </span>
            </div>

            {/* Learner details */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "2px",
                flexGrow: 1,
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "13px",
                  lineHeight: "16px",
                  color: "#17264A",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                Misgana Berhane
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
                Personal account
              </span>
            </div>

            {/* chevrons-up-down */}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 15L12 20L17 15M7 9L12 4L17 9"
                stroke="#61708B"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </aside>

      {/* ========================================================= */}
      {/* WORKSPACE CONTENT AREA (1368px / flex-grow) */}
      {/* ========================================================= */}
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: 0,
          flexGrow: 1,
          minWidth: 0,
          width: "calc(100% - 232px)",
        }}
      >
        {/* Workspace header (88px) */}
        <header
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px 36px",
            width: "100%",
            height: "88px",
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid #E6ECF6",
          }}
        >
          {/* Breadcrumb */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Link
              href="/"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "13px",
                lineHeight: "16px",
                color: "#61708B",
                textDecoration: "none",
              }}
            >
              My workspace
            </Link>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "15px",
                color: "#61708B",
              }}
            >
              /
            </span>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "13px",
                lineHeight: "16px",
                color: "#17264A",
              }}
            >
              Overview
            </span>
          </div>

          {/* Header actions */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "24px",
            }}
          >
            {/* Course search */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "0px 14px",
                gap: "10px",
                width: "288px",
                height: "40px",
                backgroundColor: "#F7F9FE",
                border: "1px solid #E6ECF6",
                borderRadius: "12px",
              }}
            >
              {/* search icon */}
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7.5" stroke="#61708B" strokeWidth="1.8" />
                <path d="M16.5 16.5L21.5 21.5" stroke="#61708B" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Search your learning"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "15px",
                  color: "#17264A",
                  flexGrow: 1,
                  width: "100%",
                }}
              />
              {/* Keyboard shortcut */}
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "11px",
                  lineHeight: "13px",
                  color: "#61708B",
                  backgroundColor: "#FFFFFF",
                  padding: "2px 6px",
                  borderRadius: "6px",
                  border: "1px solid #E6ECF6",
                }}
              >
                ⌘ K
              </span>
            </div>

            {/* Notifications */}
            <div
              onClick={() => setShowNotifications(!showNotifications)}
              style={{
                position: "relative",
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 8A6 6 0 0 0 6 8C6 15 3 17 3 17H21S18 15 18 8Z"
                  stroke="#61708B"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                  stroke="#61708B"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {/* Unread indicator */}
              <div
                style={{
                  position: "absolute",
                  width: "6px",
                  height: "6px",
                  right: "1px",
                  top: "1px",
                  backgroundColor: "#245CE8",
                  border: "1px solid #FFFFFF",
                  borderRadius: "100px",
                }}
              />

              {/* Notification Popover Dropdown */}
              {showNotifications && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    position: "absolute",
                    top: "36px",
                    right: "-10px",
                    width: "320px",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    boxShadow: "0 10px 30px rgba(23, 38, 74, 0.12)",
                    border: "1px solid #E6ECF6",
                    padding: "16px",
                    zIndex: 100,
                    cursor: "default",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <span style={{ fontWeight: 700, fontSize: "14px", color: "#17264A" }}>Notifications</span>
                    <span style={{ fontSize: "11px", color: "#245CE8", fontWeight: 600 }}>Mark all read</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", backgroundColor: "#F7F9FE", padding: "10px", borderRadius: "10px" }}>
                      <span style={{ fontSize: "16px" }}>🏆</span>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{ fontSize: "12px", fontWeight: 600, color: "#17264A" }}>Certificate Issued</span>
                        <span style={{ fontSize: "11px", color: "#61708B" }}>Your SQL Foundations certificate is ready.</span>
                        <span style={{ fontSize: "10px", color: "#7252CF", fontWeight: 500 }}>2 hours ago</span>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "8px 10px", borderRadius: "10px" }}>
                      <span style={{ fontSize: "16px" }}>🔥</span>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{ fontSize: "12px", fontWeight: 600, color: "#17264A" }}>12-Day Streak!</span>
                        <span style={{ fontSize: "11px", color: "#61708B" }}>Keep studying today to reach a 13-day streak.</span>
                        <span style={{ fontSize: "10px", color: "#61708B" }}>Yesterday</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Header avatar */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "36px",
                height: "36px",
                backgroundColor: "#EFEDFF",
                borderRadius: "100px",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "12px",
                  lineHeight: "15px",
                  color: "#7252CF",
                }}
              >
                MB
              </span>
            </div>
          </div>
        </header>

        {/* ========================================================= */}
        {/* LEARNING OVERVIEW BODY (padding 36px, gap 24px) */}
        {/* ========================================================= */}
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "36px",
            gap: "24px",
            width: "100%",
            maxWidth: "1368px",
          }}
        >
          {/* SECTION 1: Page Introduction (Welcome + Date filter) */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              height: "61px",
            }}
          >
            {/* Welcome */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
              }}
            >
              <h1
                style={{
                  margin: 0,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "30px",
                  lineHeight: "36px",
                  color: "#17264A",
                  letterSpacing: "-0.5px",
                }}
              >
                Small steps. Real progress, Misgana.
              </h1>
              <p
                style={{
                  margin: 0,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "17px",
                  color: "#61708B",
                }}
              >
                You&apos;re building momentum. Here&apos;s how your learning is coming along.
              </p>
            </div>

            {/* Reporting period dropdown */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setIsPeriodOpen(!isPeriodOpen)}
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "0px 13px",
                  gap: "9px",
                  width: "175px",
                  height: "38px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E6ECF6",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "border-color 0.15s ease",
                }}
              >
                {/* calendar-days icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="#61708B" strokeWidth="1.8" />
                  <line x1="16" y1="2" x2="16" y2="6" stroke="#61708B" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="8" y1="2" x2="8" y2="6" stroke="#61708B" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="3" y1="10" x2="21" y2="10" stroke="#61708B" strokeWidth="1.8" />
                </svg>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "#17264A",
                    flexGrow: 1,
                    textAlign: "left",
                  }}
                >
                  {selectedPeriod}
                </span>
                {/* chevron-down */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9L12 15L18 9" stroke="#61708B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {isPeriodOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "44px",
                    right: 0,
                    width: "185px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E6ECF6",
                    borderRadius: "10px",
                    boxShadow: "0px 8px 24px rgba(32, 63, 118, 0.08)",
                    zIndex: 50,
                    padding: "6px",
                  }}
                >
                  {["Oct 19 – 25, 2026", "Oct 12 – 18, 2026", "Oct 5 – 11, 2026", "All time"].map((p) => (
                    <div
                      key={p}
                      onClick={() => {
                        setSelectedPeriod(p);
                        setIsPeriodOpen(false);
                      }}
                      style={{
                        padding: "8px 12px",
                        fontSize: "12px",
                        fontFamily: "'Inter', sans-serif",
                        color: selectedPeriod === p ? "#245CE8" : "#17264A",
                        fontWeight: selectedPeriod === p ? 600 : 400,
                        backgroundColor: selectedPeriod === p ? "#EDF3FF" : "transparent",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                    >
                      {p}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* SECTION 2: Current Course Overview (Continue learning + Course completion) */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              padding: 0,
              gap: "20px",
              width: "100%",
              height: "222px",
            }}
          >
            {/* Left Card: Continue learning (866px wide) */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "24px",
                gap: "24px",
                width: "866px",
                flexGrow: 1,
                height: "222px",
                backgroundColor: "#EDF3FF",
                borderRadius: "20px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Course context */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "12px",
                  maxWidth: "602px",
                }}
              >
                {/* Eyebrow */}
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "10px",
                    lineHeight: "12px",
                    color: "#245CE8",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Pick up where you left off
                </span>

                {/* Course name */}
                <h2
                  style={{
                    margin: 0,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "29px",
                    color: "#17264A",
                  }}
                >
                  Python for Data Science
                </h2>

                {/* Next lesson info */}
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: "13px",
                    lineHeight: "160%",
                    color: "#61708B",
                  }}
                >
                  <div>Up next: Exploring data with pandas</div>
                  <div>Module 5 of 6 · Lesson 19 · 24 min</div>
                </div>

                {/* Resume course button */}
                <Link
                  href="/lesson"
                  style={{
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "0px",
                    gap: "12px",
                    width: "184px",
                    height: "44px",
                    backgroundColor: "#245CE8",
                    border: "1px solid #245CE8",
                    borderRadius: "12px",
                    textDecoration: "none",
                    cursor: "pointer",
                    boxShadow: "0px 4px 12px rgba(36, 92, 232, 0.25)",
                    transition: "all 0.2s ease",
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
                    Continue learning
                  </span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>

              {/* Data science course artwork (192px x 174px) */}
              <div
                style={{
                  width: "192px",
                  height: "174px",
                  borderRadius: "16px",
                  position: "relative",
                  overflow: "hidden",
                  flexShrink: 0,
                  boxShadow: "0px 8px 24px rgba(32, 63, 118, 0.08)",
                }}
              >
                <Image
                  src="/images/dashboard-laptop-graphic.png"
                  alt="Python for Data Science 3D Illustration"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>

            {/* Right Card: Course completion (410px wide) */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "24px",
                gap: "18px",
                width: "410px",
                height: "222px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E6ECF6",
                boxShadow: "0px 5px 20px rgba(32, 63, 118, 0.027451)",
                borderRadius: "20px",
                flexShrink: 0,
              }}
            >
              {/* Completion heading */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  height: "18px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "15px",
                    lineHeight: "18px",
                    color: "#17264A",
                  }}
                >
                  Course completion
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "11px",
                    lineHeight: "13px",
                    color: "#19805A",
                  }}
                >
                  On track
                </span>
              </div>

              {/* Completion details */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 0,
                  gap: "24px",
                  width: "100%",
                  height: "126px",
                }}
              >
                {/* Completion circular progress ring */}
                <div
                  style={{
                    position: "relative",
                    width: "126px",
                    height: "126px",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="126" height="126" viewBox="0 0 126 126">
                    {/* Ring track */}
                    <circle
                      cx="63"
                      cy="63"
                      r="52"
                      fill="none"
                      stroke="#E8EDF8"
                      strokeWidth="11"
                    />
                    {/* Completed portion (75%) */}
                    {/* Perimeter = 2 * PI * 52 = ~326.726. 75% = 245 */}
                    <circle
                      cx="63"
                      cy="63"
                      r="52"
                      fill="none"
                      stroke="#245CE8"
                      strokeWidth="11"
                      strokeDasharray="245 82"
                      strokeLinecap="round"
                      transform="rotate(-90 63 63)"
                    />
                  </svg>

                  {/* Completion value in center */}
                  <div
                    style={{
                      position: "absolute",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "2px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 700,
                        fontSize: "29px",
                        lineHeight: "35px",
                        color: "#17264A",
                        letterSpacing: "-0.5px",
                      }}
                    >
                      75%
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
                      complete
                    </span>
                  </div>
                </div>

                {/* Completion summary */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "10px",
                    flexGrow: 1,
                  }}
                >
                  {/* Lessons completed */}
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                      fontSize: "18px",
                      lineHeight: "22px",
                      color: "#17264A",
                    }}
                  >
                    18{" "}
                    <span style={{ fontWeight: 400, fontSize: "14px", color: "#61708B" }}>
                      of 24 lessons
                    </span>
                  </div>

                  {/* Encouragement */}
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: "12px",
                      lineHeight: "160%",
                      color: "#61708B",
                    }}
                  >
                    Just 6 lessons to your next certificate. You&apos;ve got this.
                  </p>

                  {/* Course detail action */}
                  <Link
                    href="/course"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: "12px",
                      lineHeight: "15px",
                      color: "#245CE8",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    View course details →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3: Learning Statistics (4 Metric Cards, 112px high) */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              padding: 0,
              gap: "20px",
              width: "100%",
              height: "112px",
            }}
          >
            {/* Metric 1: Study hours this week */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "20px",
                gap: "16px",
                width: "309px",
                flexGrow: 1,
                height: "112px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E6ECF6",
                boxShadow: "0px 5px 20px rgba(32, 63, 118, 0.027451)",
                borderRadius: "20px",
              }}
            >
              {/* Metric icon */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "44px",
                  height: "44px",
                  backgroundColor: "#EDF3FF",
                  borderRadius: "14px",
                  flexShrink: 0,
                }}
              >
                {/* clock-3 icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9.5" stroke="#245CE8" strokeWidth="1.8" />
                  <polyline points="12 6 12 12 16.5 12" stroke="#245CE8" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>

              {/* Metric details */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "5px",
                  flexGrow: 1,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "#61708B",
                  }}
                >
                  Study hours this week
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "27px",
                    lineHeight: "33px",
                    color: "#17264A",
                    letterSpacing: "-0.5px",
                  }}
                >
                  8.5 hrs
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
                  ↑ 2 hrs vs. last week
                </span>
              </div>
            </div>

            {/* Metric 2: Lessons this week */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "20px",
                gap: "16px",
                width: "309px",
                flexGrow: 1,
                height: "112px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E6ECF6",
                boxShadow: "0px 5px 20px rgba(32, 63, 118, 0.027451)",
                borderRadius: "20px",
              }}
            >
              {/* Metric icon */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "44px",
                  height: "44px",
                  backgroundColor: "#EDF3FF",
                  borderRadius: "14px",
                  flexShrink: 0,
                }}
              >
                {/* book-open-check icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M2 3H8C9.65685 3 11 4.34315 11 6V20C11 18.8954 10.1046 18 9 18H2V3Z"
                    stroke="#245CE8"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 3H16C14.3431 3 13 4.34315 13 6V20C13 18.8954 13.8954 18 15 18H22V3Z"
                    stroke="#245CE8"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 10L8 12L12 8"
                    stroke="#245CE8"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Metric details */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "5px",
                  flexGrow: 1,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "#61708B",
                  }}
                >
                  Lessons this week
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "27px",
                    lineHeight: "33px",
                    color: "#17264A",
                    letterSpacing: "-0.5px",
                  }}
                >
                  14
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
                  Across 3 active courses
                </span>
              </div>
            </div>

            {/* Metric 3: Completed courses */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "20px",
                gap: "16px",
                width: "309px",
                flexGrow: 1,
                height: "112px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E6ECF6",
                boxShadow: "0px 5px 20px rgba(32, 63, 118, 0.027451)",
                borderRadius: "20px",
              }}
            >
              {/* Metric icon */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "44px",
                  height: "44px",
                  backgroundColor: "#EDF3FF",
                  borderRadius: "14px",
                  flexShrink: 0,
                }}
              >
                {/* circle-check icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9.5" stroke="#245CE8" strokeWidth="1.8" />
                  <path d="M8 12L10.5 14.5L16 9" stroke="#245CE8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Metric details */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "5px",
                  flexGrow: 1,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "#61708B",
                  }}
                >
                  Completed courses
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "27px",
                    lineHeight: "33px",
                    color: "#17264A",
                    letterSpacing: "-0.5px",
                  }}
                >
                  8
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
                  2 completed this month
                </span>
              </div>
            </div>

            {/* Metric 4: Certificates earned */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "20px",
                gap: "16px",
                width: "309px",
                flexGrow: 1,
                height: "112px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E6ECF6",
                boxShadow: "0px 5px 20px rgba(32, 63, 118, 0.027451)",
                borderRadius: "20px",
              }}
            >
              {/* Metric icon (lavender) */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "44px",
                  height: "44px",
                  backgroundColor: "#EFEDFF",
                  borderRadius: "14px",
                  flexShrink: 0,
                }}
              >
                {/* award icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="6" stroke="#7252CF" strokeWidth="1.8" />
                  <path
                    d="M15.5 13.5L18 21L12 18L6 21L8.5 13.5"
                    stroke="#7252CF"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Metric details */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "5px",
                  flexGrow: 1,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "#61708B",
                  }}
                >
                  Certificates earned
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "27px",
                    lineHeight: "33px",
                    color: "#17264A",
                    letterSpacing: "-0.5px",
                  }}
                >
                  6
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
                  Your skills, recognized
                </span>
              </div>
            </div>
          </div>

          {/* SECTION 4: Learning Activity (Your week in learning + Learning streak) */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              padding: 0,
              gap: "20px",
              width: "100%",
              height: "290px",
            }}
          >
            {/* Left Card: Weekly learning statistics (866px wide) */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "24px",
                gap: "16px",
                width: "866px",
                flexGrow: 1,
                height: "290px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E6ECF6",
                boxShadow: "0px 5px 20px rgba(32, 63, 118, 0.027451)",
                borderRadius: "20px",
              }}
            >
              {/* Activity heading */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  height: "40px",
                }}
              >
                {/* Chart introduction */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "6px",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "19px",
                      color: "#17264A",
                    }}
                  >
                    Your week in learning
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
                    A little consistency adds up to a lot.
                  </span>
                </div>

                {/* Chart legend */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "7px",
                  }}
                >
                  <div
                    style={{
                      width: "7px",
                      height: "7px",
                      backgroundColor: "#245CE8",
                      borderRadius: "2px",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: "11px",
                      lineHeight: "13px",
                      color: "#61708B",
                    }}
                  >
                    Study hours
                  </span>
                </div>
              </div>

              {/* Weekly chart */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  padding: 0,
                  gap: "16px",
                  width: "100%",
                  height: "154px",
                }}
              >
                {/* Hours axis (2h, 1h, 0) */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    padding: "0 0 26px 0",
                    width: "23px",
                    height: "154px",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: "10px",
                      lineHeight: "12px",
                      color: "#61708B",
                    }}
                  >
                    2h
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
                    1h
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
                    0
                  </span>
                </div>

                {/* Daily study time with gridlines */}
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    width: "100%",
                    height: "154px",
                  }}
                >
                  {/* Gridlines */}
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: "6px",
                      height: "1px",
                      backgroundColor: "#E6ECF6",
                      zIndex: 0,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: "66px",
                      height: "1px",
                      backgroundColor: "#E6ECF6",
                      zIndex: 0,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: "26px",
                      height: "1px",
                      backgroundColor: "#E6ECF6",
                      zIndex: 0,
                    }}
                  />

                  {/* 7 Days Bars */}
                  {[
                    { day: "Mon", hours: "1h", height: 50, color: "#DCE7FF", isSun: false },
                    { day: "Tue", hours: "1.5h", height: 75, color: "#DCE7FF", isSun: false },
                    { day: "Wed", hours: "0.5h", height: 25, color: "#DCE7FF", isSun: false },
                    { day: "Thu", hours: "2h", height: 100, color: "#DCE7FF", isSun: false },
                    { day: "Fri", hours: "1h", height: 50, color: "#DCE7FF", isSun: false },
                    { day: "Sat", hours: "1.5h", height: 75, color: "#DCE7FF", isSun: false },
                    { day: "Sun", hours: "1h", height: 50, color: "#7252CF", isSun: true },
                  ].map((bar) => (
                    <div
                      key={bar.day}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "9px",
                        width: "90.71px",
                        height: "154px",
                        zIndex: 2,
                      }}
                    >
                      {/* Bar area (128px high) */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                          alignItems: "center",
                          width: "90.71px",
                          height: "128px",
                          position: "relative",
                        }}
                      >
                        {/* Hours studied label above bar */}
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500,
                            fontSize: "10px",
                            lineHeight: "12px",
                            color: "#61708B",
                            marginBottom: "6px",
                          }}
                        >
                          {bar.hours}
                        </span>

                        {/* Bar */}
                        <div
                          style={{
                            width: "42px",
                            height: `${bar.height}px`,
                            backgroundColor: bar.color,
                            borderRadius: "6px 6px 0px 0px",
                            transition: "height 0.3s ease",
                          }}
                        />
                      </div>

                      {/* Day label */}
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: bar.isSun ? 600 : 400,
                          fontSize: "10px",
                          lineHeight: "12px",
                          color: bar.isSun ? "#7252CF" : "#61708B",
                        }}
                      >
                        {bar.day}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly insight */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "7px",
                  width: "100%",
                  height: "14px",
                }}
              >
                {/* trending-up icon */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="#19805A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="17 6 23 6 23 12" stroke="#19805A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "11px",
                    lineHeight: "13px",
                    color: "#19805A",
                  }}
                >
                  31% more time learning <span style={{ fontWeight: 400 }}>than last week&apos;s 6.5 hours.</span>
                </span>
              </div>
            </div>

            {/* Right Card: Keep the spark alive (Learning streak) (410px wide) */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "24px",
                gap: "18px",
                width: "410px",
                height: "290px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E6ECF6",
                boxShadow: "0px 5px 20px rgba(32, 63, 118, 0.027451)",
                borderRadius: "20px",
                flexShrink: 0,
              }}
            >
              {/* Streak heading */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  height: "32px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#17264A",
                  }}
                >
                  Keep the spark alive
                </span>

                {/* Streak flame icon */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#FFF3E3",
                    borderRadius: "10px",
                  }}
                >
                  {/* flame icon */}
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M8.5 14.5C8.5 16.433 10.067 18 12 18C13.933 18 15.5 16.433 15.5 14.5C15.5 12.3 13.5 10.5 12 8C10.5 10.5 8.5 12.3 8.5 14.5Z"
                      stroke="#AD671F"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 2C6.5 7.5 4 12 4 15C4 19.4183 7.58172 23 12 23C16.4183 23 20 19.4183 20 15C20 9.5 14.5 4.5 12 2Z"
                      stroke="#AD671F"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Streak summary */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "baseline",
                  gap: "12px",
                  height: "58px",
                }}
              >
                {/* Streak count */}
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "38px",
                    lineHeight: "46px",
                    color: "#17264A",
                    letterSpacing: "-1px",
                  }}
                >
                  12
                </span>

                {/* Streak unit */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: "15px",
                      lineHeight: "18px",
                      color: "#17264A",
                    }}
                  >
                    day learning streak
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
                    Your longest streak yet. Keep going!
                  </span>
                </div>
              </div>

              {/* Streak calendar (7 days: M, T, W, T, F, S, S) */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  height: "55px",
                }}
              >
                {[
                  { day: "M", completed: true, isToday: false },
                  { day: "T", completed: true, isToday: false },
                  { day: "W", completed: true, isToday: false },
                  { day: "T", completed: true, isToday: false },
                  { day: "F", completed: true, isToday: false },
                  { day: "S", completed: true, isToday: false },
                  { day: "S", completed: true, isToday: true },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "8px",
                      width: "35px",
                      height: "55px",
                    }}
                  >
                    {/* Day completed circle */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "35px",
                        height: "35px",
                        backgroundColor: item.isToday ? "#245CE8" : "#EDF3FF",
                        borderRadius: "100px",
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <polyline
                          points="20 6 9 17 4 12"
                          stroke={item.isToday ? "#FFFFFF" : "#245CE8"}
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    {/* Weekday label */}
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: "10px",
                        lineHeight: "12px",
                        color: "#61708B",
                      }}
                    >
                      {item.day}
                    </span>
                  </div>
                ))}
              </div>

              {/* Next streak milestone banner */}
              <div
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "12px",
                  gap: "10px",
                  width: "100%",
                  height: "42px",
                  backgroundColor: "#EFEDFF",
                  borderRadius: "12px",
                }}
              >
                {/* zap icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <polygon
                    points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                    stroke="#7252CF"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "11px",
                    lineHeight: "13px",
                    color: "#7252CF",
                  }}
                >
                  2 more days <span style={{ fontWeight: 400 }}>to unlock the Consistency badge.</span>
                </span>
              </div>
            </div>
          </div>

          {/* SECTION 5: Milestones and Goals (Achievements + Upcoming Goals) */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              padding: 0,
              gap: "20px",
              width: "100%",
              height: "294px",
            }}
          >
            {/* Left Card: Milestones worth celebrating (Achievements) (866px wide) */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "24px",
                gap: "19px",
                width: "866px",
                flexGrow: 1,
                height: "294px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E6ECF6",
                boxShadow: "0px 5px 20px rgba(32, 63, 118, 0.027451)",
                borderRadius: "20px",
              }}
            >
              {/* Achievements heading */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  height: "19px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "19px",
                      color: "#17264A",
                    }}
                  >
                    Milestones worth celebrating
                  </h3>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: "11px",
                      lineHeight: "13px",
                      color: "#61708B",
                    }}
                  >
                    7 earned
                  </span>
                </div>

                <button
                  onClick={() => setShowAllBadges(true)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "#245CE8",
                    cursor: "pointer",
                  }}
                >
                  View all →
                </button>
              </div>

              {/* Achievement badges collection (4 Badges) */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: "16px",
                  width: "100%",
                  height: "119px",
                }}
              >
                {/* Badge 1: First finish */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    flexGrow: 1,
                    width: "192.5px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "70px",
                      height: "70px",
                      backgroundColor: "#FFF3E3",
                      border: "1px solid #AD671F",
                      borderRadius: "13px",
                    }}
                  >
                    {/* trophy icon */}
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 9H3C2.44772 9 2 8.55228 2 8V5C2 4.44772 2.44772 4 3 4H6"
                        stroke="#AD671F"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18 9H21C21.5523 9 22 8.55228 22 8V5C22 4.44772 21.5523 4 21 4H18"
                        stroke="#AD671F"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6 3H18V10C18 13.3137 15.3137 16 12 16C8.68629 16 6 13.3137 6 10V3Z"
                        stroke="#AD671F"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                      <path d="M12 16V20M8 20H16" stroke="#AD671F" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: "12px",
                      lineHeight: "15px",
                      color: "#17264A",
                    }}
                  >
                    First finish
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: "10px",
                      lineHeight: "12px",
                      color: "#61708B",
                      textAlign: "center",
                    }}
                  >
                    Completed your first course
                  </span>
                </div>

                {/* Badge 2: Data explorer */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    flexGrow: 1,
                    width: "192.5px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "70px",
                      height: "70px",
                      backgroundColor: "#EDF3FF",
                      border: "1px solid #245CE8",
                      borderRadius: "13px",
                    }}
                  >
                    {/* chart-no-axes-combined icon */}
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                      <path d="M12 20V10" stroke="#245CE8" strokeWidth="2" strokeLinecap="round" />
                      <path d="M18 20V4" stroke="#245CE8" strokeWidth="2" strokeLinecap="round" />
                      <path d="M6 20V16" stroke="#245CE8" strokeWidth="2" strokeLinecap="round" />
                      <polyline points="4 11 9 6 15 12 20 6" stroke="#245CE8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: "12px",
                      lineHeight: "15px",
                      color: "#17264A",
                    }}
                  >
                    Data explorer
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: "10px",
                      lineHeight: "12px",
                      color: "#61708B",
                      textAlign: "center",
                    }}
                  >
                    Completed 5 data courses
                  </span>
                </div>

                {/* Badge 3: Early bird */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    flexGrow: 1,
                    width: "192.5px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "70px",
                      height: "70px",
                      backgroundColor: "#EFEDFF",
                      border: "1px solid #7252CF",
                      borderRadius: "13px",
                    }}
                  >
                    {/* sunrise icon */}
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2V6M4.93 10.93L7.76 13.76M19.07 10.93L16.24 13.76" stroke="#7252CF" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M2 18H22" stroke="#7252CF" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M20 18C20 13.5817 16.4183 10 12 10C7.58172 10 4 13.5817 4 18" stroke="#7252CF" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M12 14V10" stroke="#7252CF" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: "12px",
                      lineHeight: "15px",
                      color: "#17264A",
                    }}
                  >
                    Early bird
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: "10px",
                      lineHeight: "12px",
                      color: "#61708B",
                      textAlign: "center",
                    }}
                  >
                    5 lessons before 9 AM
                  </span>
                </div>

                {/* Badge 4: Consistency (Locked) */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    flexGrow: 1,
                    width: "192.5px",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "70px",
                      height: "70px",
                      backgroundColor: "#F7F9FE",
                      opacity: 0.75,
                      border: "1px solid #E6ECF6",
                      borderRadius: "13px",
                    }}
                  >
                    {/* lock-keyhole icon */}
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                      <rect x="5" y="11" width="14" height="10" rx="2" stroke="#61708B" strokeWidth="1.8" />
                      <circle cx="12" cy="15.5" r="1.5" fill="#61708B" />
                      <line x1="12" y1="17" x2="12" y2="19" stroke="#61708B" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11" stroke="#61708B" strokeWidth="1.8" />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: "12px",
                      lineHeight: "15px",
                      color: "#17264A",
                    }}
                  >
                    Consistency
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: "10px",
                      lineHeight: "12px",
                      color: "#61708B",
                      textAlign: "center",
                    }}
                  >
                    Next up · 14-day streak
                  </span>
                </div>
              </div>

              {/* Recent certificate banner */}
              <div
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "13px",
                  gap: "12px",
                  width: "100%",
                  height: "57px",
                  backgroundColor: "#F7F9FE",
                  borderRadius: "12px",
                }}
              >
                {/* badge-check icon */}
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L14.7 4.7L18.5 4.5L19.5 8.2L22.9 9.9L22 13.7L24 17L20.8 19.3L20.2 23.2L16.4 23.4L14.4 26.6L11 25.1L7.6 26.6L5.6 23.4L1.8 23.2L1.2 19.3L-2 17L0 13.7L-0.9 9.9L2.5 8.2L3.5 4.5L7.3 4.7L10 2L12 2Z"
                    stroke="#7252CF"
                    strokeWidth="1.8"
                  />
                  <circle cx="12" cy="12" r="9" stroke="#7252CF" strokeWidth="1.6" />
                  <polyline points="8.5 12 11 14.5 16 9" stroke="#7252CF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                {/* Certificate details */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flexGrow: 1,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: "12px",
                      lineHeight: "15px",
                      color: "#17264A",
                    }}
                  >
                    SQL Foundations - Course completed
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
                    Certificate earned Oct 23, 2026 · Your 6th certificate
                  </span>
                </div>

                {/* Certificate action */}
                <button
                  onClick={() => setShowCertificateModal(true)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "11px",
                    lineHeight: "13px",
                    color: "#245CE8",
                    cursor: "pointer",
                  }}
                >
                  View certificate ↗
                </button>
              </div>
            </div>

            {/* Right Card: Upcoming learning goals (410px wide) */}
            <div
              style={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "24px",
                gap: "20px",
                width: "410px",
                height: "294px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E6ECF6",
                boxShadow: "0px 5px 20px rgba(32, 63, 118, 0.027451)",
                borderRadius: "20px",
                flexShrink: 0,
              }}
            >
              {/* Goals heading */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  height: "19px",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: "#17264A",
                  }}
                >
                  Upcoming learning goals
                </h3>
                <button
                  onClick={() => setShowGoalsModal(true)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "#245CE8",
                    cursor: "pointer",
                  }}
                >
                  Edit goals
                </button>
              </div>

              {/* Goal 1: Reach 10 study hours */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: "12px",
                  width: "100%",
                  height: "45px",
                }}
              >
                {/* Marker */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "28px",
                    height: "28px",
                    backgroundColor: "#EDF3FF",
                    borderRadius: "9px",
                    flexShrink: 0,
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9.5" stroke="#245CE8" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="5" stroke="#245CE8" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="1.5" fill="#245CE8" />
                  </svg>
                </div>

                {/* Details */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "7px",
                    flexGrow: 1,
                  }}
                >
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
                        fontSize: "12px",
                        lineHeight: "15px",
                        color: "#17264A",
                      }}
                    >
                      Reach 10 study hours
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
                      Oct 25
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div
                    style={{
                      width: "100%",
                      height: "4px",
                      backgroundColor: "#E8EDF8",
                      borderRadius: "10px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: "85%", // 273.7px / 322px = 85%
                        height: "4px",
                        backgroundColor: "#245CE8",
                        borderRadius: "10px",
                      }}
                    />
                  </div>

                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: "10px",
                      lineHeight: "12px",
                      color: "#61708B",
                    }}
                  >
                    8.5 of 10 hrs · Just 1.5 hours to go
                  </span>
                </div>
              </div>

              {/* Goal 2: Finish the pandas module */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: "12px",
                  width: "100%",
                  height: "45px",
                }}
              >
                {/* Marker */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "28px",
                    height: "28px",
                    backgroundColor: "#EDF3FF",
                    borderRadius: "9px",
                    flexShrink: 0,
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9.5" stroke="#245CE8" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="5" stroke="#245CE8" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="1.5" fill="#245CE8" />
                  </svg>
                </div>

                {/* Details */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "7px",
                    flexGrow: 1,
                  }}
                >
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
                        fontSize: "12px",
                        lineHeight: "15px",
                        color: "#17264A",
                      }}
                    >
                      Finish the pandas module
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
                      Oct 28
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div
                    style={{
                      width: "100%",
                      height: "4px",
                      backgroundColor: "#E8EDF8",
                      borderRadius: "10px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: "60%", // 193.2px / 322px = 60%
                        height: "4px",
                        backgroundColor: "#245CE8",
                        borderRadius: "10px",
                      }}
                    />
                  </div>

                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: "10px",
                      lineHeight: "12px",
                      color: "#61708B",
                    }}
                  >
                    3 of 5 lessons completed
                  </span>
                </div>
              </div>

              {/* Goal 3: Earn your Python certificate */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: "12px",
                  width: "100%",
                  height: "45px",
                }}
              >
                {/* Marker */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "28px",
                    height: "28px",
                    backgroundColor: "#EDF3FF",
                    borderRadius: "9px",
                    flexShrink: 0,
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9.5" stroke="#245CE8" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="5" stroke="#245CE8" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="1.5" fill="#245CE8" />
                  </svg>
                </div>

                {/* Details */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "7px",
                    flexGrow: 1,
                  }}
                >
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
                        fontSize: "12px",
                        lineHeight: "15px",
                        color: "#17264A",
                      }}
                    >
                      Earn your Python certificate
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
                      Nov 1
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div
                    style={{
                      width: "100%",
                      height: "4px",
                      backgroundColor: "#E8EDF8",
                      borderRadius: "10px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: "75%", // 241.5px / 322px = 75%
                        height: "4px",
                        backgroundColor: "#245CE8",
                        borderRadius: "10px",
                      }}
                    />
                  </div>

                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: "10px",
                      lineHeight: "12px",
                      color: "#61708B",
                    }}
                  >
                    18 of 24 lessons completed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 6: Dashboard Footer */}
          <footer
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              height: "20px",
              paddingTop: "4px",
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
              Every lesson is an investment in your future.
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
              All learning activity shown in your local time - EDT
            </span>
          </footer>
        </div>
      </main>

      {/* ========================================================= */}
      {/* 1. CERTIFICATE PREVIEW MODAL */}
      {/* ========================================================= */}
      {showCertificateModal && (
        <div
          onClick={() => setShowCertificateModal(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(15, 23, 42, 0.65)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "680px",
              backgroundColor: "#FFFFFF",
              borderRadius: "24px",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              overflow: "hidden",
              border: "1px solid #E6ECF6",
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px 28px",
                borderBottom: "1px solid #E6ECF6",
                backgroundColor: "#F7F9FE",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "20px" }}>🏆</span>
                <span style={{ fontWeight: 700, fontSize: "16px", color: "#17264A" }}>
                  Verified Certificate of Completion
                </span>
              </div>
              <button
                onClick={() => setShowCertificateModal(false)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#61708B",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                ✕
              </button>
            </div>

            {/* Certificate Frame Body */}
            <div style={{ padding: "32px 36px" }}>
              <div
                style={{
                  border: "2px solid #245CE8",
                  borderRadius: "16px",
                  padding: "36px 32px",
                  textAlign: "center",
                  backgroundColor: "#FCFDFF",
                  position: "relative",
                  boxShadow: "inset 0 0 0 6px #F0F4FE",
                }}
              >
                <div style={{ fontSize: "11px", fontWeight: 700, color: "#245CE8", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "8px" }}>
                  Learning Hub Educational Directorate
                </div>
                <h2 style={{ fontSize: "26px", fontWeight: 800, color: "#17264A", margin: "0 0 16px" }}>
                  Certificate of Achievement
                </h2>
                <p style={{ fontSize: "13px", color: "#61708B", margin: "0 0 8px" }}>
                  This acknowledges that
                </p>
                <h3 style={{ fontSize: "24px", fontWeight: 800, color: "#245CE8", margin: "0 0 12px" }}>
                  Misgana Berhane
                </h3>
                <p style={{ fontSize: "14px", color: "#17264A", lineHeight: "1.5", maxWidth: "480px", margin: "0 auto 20px" }}>
                  has successfully completed all requirements, practical lab assessments, and projects for
                </p>
                <div style={{ backgroundColor: "#EFEDFF", color: "#7252CF", fontWeight: 700, fontSize: "16px", display: "inline-block", padding: "8px 24px", borderRadius: "100px", marginBottom: "24px" }}>
                  SQL Foundations Track
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "1px solid #E6ECF6", paddingTop: "20px", marginTop: "12px", fontSize: "12px", color: "#61708B" }}>
                  <div style={{ textAlign: "left" }}>
                    <div>Issued: <strong style={{ color: "#17264A" }}>Oct 23, 2026</strong></div>
                    <div>Credential ID: <strong style={{ color: "#17264A" }}>#LH-2026-94819</strong></div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: "serif", fontSize: "16px", fontStyle: "italic", color: "#17264A" }}>Sarah Jenkins, Ph.D.</div>
                    <div>Head of Curriculum</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "12px",
                padding: "16px 28px",
                backgroundColor: "#F7F9FE",
                borderTop: "1px solid #E6ECF6",
              }}
            >
              <button
                onClick={() => {
                  alert("Certificate #LH-2026-94819 PDF downloaded successfully!");
                }}
                style={{
                  backgroundColor: "#245CE8",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "14px",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Download PDF
              </button>
              <button
                onClick={() => setShowCertificateModal(false)}
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#61708B",
                  fontWeight: 600,
                  fontSize: "14px",
                  padding: "10px 18px",
                  borderRadius: "10px",
                  border: "1px solid #E6ECF6",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 2. EDIT GOALS MODAL */}
      {/* ========================================================= */}
      {showGoalsModal && (
        <div
          onClick={() => setShowGoalsModal(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(15, 23, 42, 0.65)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "520px",
              backgroundColor: "#FFFFFF",
              borderRadius: "24px",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              overflow: "hidden",
              border: "1px solid #E6ECF6",
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px 28px",
                borderBottom: "1px solid #E6ECF6",
                backgroundColor: "#F7F9FE",
              }}
            >
              <h3 style={{ margin: 0, fontWeight: 700, fontSize: "17px", color: "#17264A" }}>
                Edit Learning Goals
              </h3>
              <button
                onClick={() => setShowGoalsModal(false)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#61708B",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                ✕
              </button>
            </div>

            {/* Modal Form */}
            <div style={{ padding: "28px" }}>
              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#17264A", marginBottom: "6px" }}>
                  Weekly Study Hours Target
                </label>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <input
                    type="number"
                    min="1"
                    max="60"
                    value={goalTargetHours}
                    onChange={(e) => setGoalTargetHours(e.target.value)}
                    style={{
                      padding: "10px 14px",
                      borderRadius: "10px",
                      border: "1px solid #E6ECF6",
                      fontSize: "15px",
                      fontWeight: 600,
                      width: "100px",
                      color: "#17264A",
                      outline: "none",
                    }}
                  />
                  <span style={{ fontSize: "14px", color: "#61708B" }}>hours per week</span>
                </div>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#17264A", marginBottom: "8px" }}>
                  Scheduled Study Days
                </label>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, idx) => (
                    <button
                      key={day}
                      type="button"
                      style={{
                        padding: "8px 14px",
                        borderRadius: "10px",
                        border: "1px solid #E6ECF6",
                        backgroundColor: idx < 5 ? "#EDF3FF" : "#FFFFFF",
                        color: idx < 5 ? "#245CE8" : "#61708B",
                        fontWeight: 600,
                        fontSize: "13px",
                        cursor: "pointer",
                      }}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px", backgroundColor: "#F7F9FE", borderRadius: "12px" }}>
                <input type="checkbox" id="reminder-check" defaultChecked style={{ width: "16px", height: "16px", accentColor: "#245CE8" }} />
                <label htmlFor="reminder-check" style={{ fontSize: "13px", color: "#17264A", cursor: "pointer" }}>
                  Send daily morning reminder before 9:00 AM
                </label>
              </div>
            </div>

            {/* Modal Actions */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "12px",
                padding: "16px 28px",
                backgroundColor: "#F7F9FE",
                borderTop: "1px solid #E6ECF6",
              }}
            >
              <button
                onClick={() => setShowGoalsModal(false)}
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#61708B",
                  fontWeight: 600,
                  fontSize: "14px",
                  padding: "10px 18px",
                  borderRadius: "10px",
                  border: "1px solid #E6ECF6",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => setShowGoalsModal(false)}
                style={{
                  backgroundColor: "#245CE8",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "14px",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Save Goals
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 3. ALL ACHIEVEMENTS MODAL */}
      {/* ========================================================= */}
      {showAllBadges && (
        <div
          onClick={() => setShowAllBadges(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(15, 23, 42, 0.65)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "680px",
              maxHeight: "85vh",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              borderRadius: "24px",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              overflow: "hidden",
              border: "1px solid #E6ECF6",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px 28px",
                borderBottom: "1px solid #E6ECF6",
                backgroundColor: "#F7F9FE",
              }}
            >
              <div>
                <h3 style={{ margin: "0 0 2px", fontWeight: 700, fontSize: "18px", color: "#17264A" }}>
                  All Achievements &amp; Badges
                </h3>
                <span style={{ fontSize: "12px", color: "#61708B" }}>
                  7 earned · 5 in progress
                </span>
              </div>
              <button
                onClick={() => setShowAllBadges(false)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#61708B",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                ✕
              </button>
            </div>

            {/* Badges Grid */}
            <div style={{ padding: "24px 28px", overflowY: "auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "16px" }}>
              {[
                { name: "First finish", desc: "Completed your first course", earned: true, icon: "🏆", bg: "#FFF3E3", border: "#AD671F" },
                { name: "Data explorer", desc: "Completed 5 data courses", earned: true, icon: "📊", bg: "#EDF3FF", border: "#245CE8" },
                { name: "Early bird", desc: "5 lessons before 9 AM", earned: true, icon: "🌅", bg: "#EFEDFF", border: "#7252CF" },
                { name: "Night owl", desc: "Study session past 11 PM", earned: true, icon: "🌙", bg: "#F1F5F9", border: "#64748B" },
                { name: "Code crafter", desc: "Submitted 10 coding exercises", earned: true, icon: "💻", bg: "#ECFDF5", border: "#059669" },
                { name: "Fast learner", desc: "Finished 3 modules in a day", earned: true, icon: "⚡", bg: "#FEF3C7", border: "#D97706" },
                { name: "AI explorer", desc: "Asked 25 study companion questions", earned: true, icon: "✨", bg: "#EFEDFF", border: "#7252CF" },
                { name: "Consistency", desc: "Maintain 14-day streak (12/14)", earned: false, icon: "🔒", bg: "#F8FAFC", border: "#CBD5E1" },
                { name: "Course master", desc: "Complete 10 total courses (6/10)", earned: false, icon: "🔒", bg: "#F8FAFC", border: "#CBD5E1" },
              ].map((b) => (
                <div
                  key={b.name}
                  style={{
                    border: `1px solid ${b.border}`,
                    borderRadius: "14px",
                    backgroundColor: b.bg,
                    padding: "16px",
                    textAlign: "center",
                    opacity: b.earned ? 1 : 0.7,
                  }}
                >
                  <div style={{ fontSize: "28px", marginBottom: "8px" }}>{b.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: "13px", color: "#17264A", marginBottom: "4px" }}>{b.name}</div>
                  <div style={{ fontSize: "11px", color: "#61708B", lineHeight: "1.4" }}>{b.desc}</div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div style={{ padding: "16px 28px", backgroundColor: "#F7F9FE", borderTop: "1px solid #E6ECF6", display: "flex", justifyContent: "flex-end" }}>
              <button
                onClick={() => setShowAllBadges(false)}
                style={{
                  backgroundColor: "#245CE8",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "14px",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
