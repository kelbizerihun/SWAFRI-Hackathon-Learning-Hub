"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LearningHubLogo from "@/components/LearningHubLogo";

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("Misgana Berhane");
  const [email, setEmail] = useState("misganaberhane@gmail.com");
  const [password, setPassword] = useState("•••••••••••••");
  const [confirmPassword, setConfirmPassword] = useState("•••••••••••••");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [userRole, setUserRole] = useState("Student");
  const [university, setUniversity] = useState("University of Addis abeba");
  const [region, setRegion] = useState("Addis Abeba");
  const [city, setCity] = useState("Addisabeba");
  const [academicStatus, setAcademicStatus] = useState("Junior");
  const [fieldOfStudy, setFieldOfStudy] = useState("Computer Science");
  const [agreed, setAgreed] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const handleRegister = () => {
    setSubmitting(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 400);
  };

  return (
    <div className="reg-page-wrapper">
      <style>{`
        /* Base page styling */
        .reg-page-wrapper {
          min-height: 100vh;
          background-color: #F7F9FE;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          color: #17264A;
        }

        /* 1. Header */
        .reg-header {
          width: 100%;
          background-color: #FFFFFF;
          display: flex;
          justifyContent: center;
          border-bottom: 1px solid #E8EDF7;
        }
        .reg-header-inner {
          width: 100%;
          display: flex;
          align-items: center;
          justifyContent: space-between;
        }

        /* 2. Main Experience Container */
        .reg-main {
          width: 100%;
          display: flex;
          box-sizing: border-box;
        }

        /* 3. Left Column: Welcome Panel */
        .reg-welcome-panel {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        .reg-welcome-msg {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }
        .reg-welcome-badge {
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          padding: 8px 12px;
          height: 30px;
          background-color: #EFEDFF;
          border-radius: 100px;
          box-sizing: border-box;
          gap: 8px;
        }
        .reg-welcome-badge span {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: #7252CF;
          line-height: 13px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .reg-welcome-title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          line-height: 110%;
          color: #17264A;
          margin: 0;
          letter-spacing: -0.02em;
        }
        .reg-welcome-desc {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          line-height: 160%;
          color: #61708B;
          margin: 0;
        }
        .reg-illustration-card {
          background-color: #EFEDFF;
          border-radius: 32px;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justifyContent: center;
        }
        .reg-illustration-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* 4. Right Column: Registration Card */
        .reg-card {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        .reg-intro {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .reg-intro-title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          color: #17264A;
          margin: 0;
        }
        .reg-intro-subtitle {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 150%;
          color: #61708B;
          margin: 0;
        }
        .reg-intro-note {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: #61708B;
          line-height: 15px;
          margin-top: 4px;
        }

        /* Form Sections & Fields */
        .reg-section {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .reg-section-header {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 12px;
        }
        .reg-section-num {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: #245CE8;
          line-height: 13px;
        }
        .reg-section-title {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #17264A;
          line-height: 17px;
          white-space: nowrap;
        }
        .reg-section-divider {
          flex: 1;
          height: 1px;
          background-color: #E8EDF7;
        }
        .reg-field-row {
          display: flex;
        }
        .reg-field-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .reg-field-label {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #17264A;
          line-height: 16px;
        }
        .reg-input-control {
          height: 52px;
          background-color: #FFFFFF;
          border: 1px solid #D9E0ED;
          border-radius: 12px;
          padding: 0 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-sizing: border-box;
          position: relative;
        }
        .reg-input-control.active-border {
          border: 2px solid #245CE8 !important;
        }
        .reg-input-element {
          border: none;
          outline: none;
          width: 100%;
          font-size: 14px;
          color: #17264A;
          font-family: 'Inter', sans-serif;
          background: transparent;
        }
        .reg-select-element {
          border: none;
          outline: none;
          width: 100%;
          font-size: 14px;
          color: #17264A;
          background-color: transparent;
          cursor: pointer;
          appearance: none;
          -webkit-appearance: none;
          font-family: 'Inter', sans-serif;
        }
        .reg-guidance-text {
          font-size: 12px;
          color: #19805A;
          line-height: 140%;
          font-family: 'Inter', sans-serif;
        }

        /* Strength Meter */
        .reg-strength-wrapper {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 4px;
        }
        .reg-strength-bars {
          display: flex;
          gap: 4px;
          width: 100%;
        }
        .reg-strength-segment {
          flex: 1;
          height: 4px;
          background-color: #19805A;
          border-radius: 4px;
        }
        .reg-strength-label {
          font-size: 12px;
          line-height: 140%;
          font-family: 'Inter', sans-serif;
          color: #19805A;
          font-weight: 600;
        }
        .reg-strength-desc {
          font-weight: 400;
          color: #61708B;
        }

        /* Actions */
        .reg-actions {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .reg-terms-row {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 12px;
          cursor: pointer;
        }
        .reg-checkbox {
          width: 20px;
          height: 20px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justifyContent: center;
          flex-shrink: 0;
          transition: background-color 0.15s ease;
        }
        .reg-terms-text {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: #61708B;
          line-height: 160%;
        }
        .reg-auth-buttons {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .reg-submit-btn {
          width: 100%;
          height: 52px;
          background-color: #245CE8;
          border: 1px solid #245CE8;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justifyContent: center;
          gap: 12px;
          cursor: pointer;
          color: #FFFFFF;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          transition: background-color 0.15s ease, transform 0.1s ease;
          box-sizing: border-box;
        }
        .reg-submit-btn:hover {
          background-color: #1D4ED8;
        }
        .reg-separator {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 16px;
          width: 100%;
        }
        .reg-separator-line {
          flex: 1;
          height: 1px;
          background-color: #E8EDF7;
        }
        .reg-separator-text {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: #61708B;
          line-height: 15px;
          white-space: nowrap;
        }
        .reg-google-btn {
          width: 100%;
          height: 52px;
          background-color: #FFFFFF;
          border: 1px solid #D9E0ED;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justifyContent: center;
          gap: 12px;
          cursor: pointer;
          transition: background-color 0.15s ease;
          box-sizing: border-box;
        }
        .reg-google-btn:hover {
          background-color: #F8FAFC;
        }
        .reg-google-text {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #17264A;
        }
        .reg-login-prompt {
          text-align: center;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          line-height: 150%;
          color: #61708B;
        }
        .reg-security {
          display: flex;
          flex-direction: row;
          align-items: center;
          justifyContent: center;
          gap: 8px;
        }
        .reg-security-text {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: #61708B;
          line-height: 13px;
        }

        /* 5. Footer */
        .reg-footer {
          width: 100%;
          display: flex;
          align-items: center;
          box-sizing: border-box;
        }
        .reg-footer-text {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: #61708B;
          line-height: 15px;
        }

        /* ========================================================
           DESKTOP VIEW (min-width: 1024px)
           Exact 2. Learning Hub registration · Desktop layout
           ======================================================== */
        @media (min-width: 1024px) {
          .reg-header {
            height: 96px;
          }
          .reg-header-inner {
            max-width: 1440px;
            padding: 0 64px;
          }
          .desktop-only {
            display: flex !important;
          }
          .mobile-only {
            display: none !important;
          }
          .reg-main {
            max-width: 1440px;
            padding: 32px 64px 48px;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            gap: 64px;
          }
          .reg-welcome-panel {
            width: 552px;
            gap: 32px;
            padding-top: 32px;
            flex-shrink: 0;
          }
          .reg-welcome-title {
            font-size: 52px;
            letter-spacing: -0.02em;
          }
          .reg-welcome-desc {
            font-size: 18px;
          }
          .reg-illustration-card {
            width: 552px;
            height: 400px;
          }
          .reg-card {
            width: 696px;
            background-color: #FFFFFF;
            box-shadow: 0px 12px 40px rgba(32, 63, 118, 0.0627);
            border-radius: 24px;
            padding: 40px;
            gap: 32px;
            flex-shrink: 0;
          }
          .reg-intro-title {
            font-size: 32px;
            line-height: 120%;
            letter-spacing: -0.01em;
          }
          .reg-field-row {
            flex-direction: row;
            gap: 16px;
          }
          .reg-field-group {
            flex: 1;
          }
          .reg-footer {
            max-width: 1440px;
            height: 63px;
            padding: 24px 64px;
            justify-content: space-between;
          }
        }

        /* ========================================================
           MOBILE VIEW (max-width: 1023px)
           Exact 2.1 Learning Hub registration · Mobile specification
           Width: 390px, Content: 342px, Padding: 8px 24px 32px
           ======================================================== */
        @media (max-width: 1023px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-only {
            display: flex !important;
          }
          .reg-header {
            height: 80px;
            padding: 0 24px;
            box-sizing: border-box;
          }
          .reg-header-inner {
            max-width: 390px;
            padding: 0;
          }
          .reg-main {
            max-width: 390px;
            padding: 8px 24px 32px;
            flex-direction: column;
            align-items: flex-start;
            gap: 32px;
          }
          .reg-welcome-panel {
            width: 100%;
            max-width: 342px;
            gap: 24px;
            padding-top: 0;
          }
          .reg-welcome-msg {
            gap: 16px;
            width: 100%;
            max-width: 342px;
          }
          .reg-welcome-badge {
            width: 195px;
            height: 30px;
            padding: 8px 12px;
            gap: 8px;
          }
          .reg-welcome-badge span {
            width: 149px;
            font-size: 11px;
            line-height: 13px;
          }
          .reg-welcome-title {
            width: 100%;
            max-width: 342px;
            font-size: 34px;
            line-height: 110%; /* 37px */
          }
          .reg-welcome-desc {
            width: 100%;
            max-width: 342px;
            font-size: 15px;
            line-height: 160%; /* 24px */
          }
          .reg-illustration-card {
            width: 100%;
            max-width: 342px;
            height: 232px;
            border-radius: 32px;
          }
          .reg-card {
            width: 100%;
            max-width: 342px;
            background-color: #F7F9FE !important;
            box-shadow: none !important;
            border-radius: 24px;
            padding: 0px !important;
            gap: 32px;
          }
          .reg-intro {
            gap: 12px;
            width: 100%;
            max-width: 342px;
          }
          .reg-intro-title {
            width: 100%;
            max-width: 342px;
            font-size: 27px;
            line-height: 120%; /* 32px */
          }
          .reg-intro-subtitle {
            width: 100%;
            max-width: 342px;
            font-size: 14px;
            line-height: 150%; /* 21px */
          }
          .reg-intro-note {
            font-size: 12px;
            line-height: 15px;
            margin-top: 0;
          }
          .reg-section {
            gap: 24px;
            width: 100%;
            max-width: 342px;
          }
          .reg-section-header {
            width: 100%;
            max-width: 342px;
            height: 17px;
          }
          .reg-field-row {
            flex-direction: column !important;
            gap: 24px !important;
            width: 100%;
            max-width: 342px;
          }
          .reg-field-group {
            width: 100%;
            max-width: 342px;
            gap: 8px;
          }
          .reg-input-control {
            width: 100% !important;
            max-width: 342px;
            height: 52px;
          }
          .reg-strength-bars {
            gap: 4px;
            width: 100%;
            max-width: 342px;
          }
          .reg-strength-segment {
            height: 4px;
            border-radius: 4px;
          }
          .reg-actions {
            gap: 24px;
            width: 100%;
            max-width: 342px;
          }
          .reg-terms-row {
            gap: 12px;
            width: 100%;
            max-width: 342px;
          }
          .reg-terms-text {
            width: 310px;
            font-size: 13px;
            line-height: 160%; /* 21px */
          }
          .reg-auth-buttons {
            gap: 16px;
            width: 100%;
            max-width: 342px;
          }
          .reg-submit-btn {
            width: 100% !important;
            max-width: 342px;
            height: 52px;
          }
          .reg-google-btn {
            width: 100% !important;
            max-width: 342px;
            height: 52px;
          }
          .reg-login-prompt {
            width: 100%;
            max-width: 342px;
            font-size: 14px;
            line-height: 150%;
          }
          .reg-security {
            width: 100%;
            max-width: 342px;
            height: 14px;
            gap: 8px;
          }
          .reg-security-text {
            font-size: 11px;
            line-height: 13px;
          }
          .reg-footer {
            width: 100%;
            max-width: 390px;
            padding: 24px;
            gap: 12px;
            justify-content: center !important;
            flex-wrap: wrap;
            text-align: center;
          }
          .reg-footer-tagline {
            display: none !important;
          }
        }
      `}</style>

      {/* 1. Site Header */}
      <header className="reg-header">
        <div className="reg-header-inner">
          {/* Brand Mark & Name matching Image 1 */}
          <LearningHubLogo size="md" />

          {/* Desktop Right Side: Support Link */}
          <div
            className="desktop-only"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                fontWeight: 400,
                color: "#61708B",
                lineHeight: "17px",
              }}
            >
              Need a hand?
            </span>
            <Link
              href="/contact"
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#245CE8",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "2px",
                lineHeight: "17px",
              }}
            >
              Contact support <span style={{ fontSize: "14px" }}>↗</span>
            </Link>
          </div>

          {/* Mobile Right Side: Circle-Help Icon matching Figma */}
          <div
            className="mobile-only"
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              type="button"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              title="Help"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#61708B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Main Registration Experience */}
      <main className="reg-main">
        {/* Left Column: Welcome Panel */}
        <section className="reg-welcome-panel">
          {/* Welcome Message */}
          <div className="reg-welcome-msg">
            {/* Welcome Badge */}
            <div className="reg-welcome-badge">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7252CF"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
              </svg>
              <span>A WORLD OF POSSIBILITIES</span>
            </div>

            {/* Welcome Title */}
            <h1 className="reg-welcome-title">
              Join Learning Hub<br />
              <span style={{ color: "#245CE8" }}>Today!</span>
            </h1>

            {/* Welcome Description */}
            <p className="reg-welcome-desc">
              Create your account to access courses, AI learning, events, and career opportunities.
            </p>
          </div>

          {/* Education Illustration Card */}
          <div className="reg-illustration-card">
            <img
              src="/images/register-illustration.png"
              alt="Students learning online"
              className="reg-illustration-img"
            />
          </div>

          {/* Desktop-only: Learning Opportunities / Benefits */}
          <div
            className="desktop-only"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "16px",
                alignItems: "flex-start",
              }}
            >
              {/* Benefit 1 */}
              <div
                style={{
                  width: "173.33px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div style={{ color: "#245CE8" }}>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#245CE8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#17264A",
                    lineHeight: "16px",
                  }}
                >
                  Learn your way
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#61708B",
                    lineHeight: "15px",
                  }}
                >
                  Courses that fit you
                </div>
              </div>

              {/* Benefit 2 */}
              <div
                style={{
                  width: "173.33px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div style={{ color: "#245CE8" }}>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#245CE8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  </svg>
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#17264A",
                    lineHeight: "16px",
                  }}
                >
                  Go further with AI
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#61708B",
                    lineHeight: "15px",
                  }}
                >
                  Your study companion
                </div>
              </div>

              {/* Benefit 3 */}
              <div
                style={{
                  width: "173.33px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div style={{ color: "#245CE8" }}>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#245CE8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    <rect width="20" height="14" x="2" y="6" rx="2" />
                  </svg>
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#17264A",
                    lineHeight: "16px",
                  }}
                >
                  Build your future
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#61708B",
                    lineHeight: "15px",
                  }}
                >
                  Real opportunities
                </div>
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#D9E0ED",
              }}
            />

            {/* Community Proof */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "16px",
              }}
            >
              {/* Avatars */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "36px",
                    backgroundColor: "#DAE6FF",
                    border: "3px solid #F7F9FE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    fontWeight: 600,
                    color: "#17264A",
                    zIndex: 3,
                  }}
                >
                  AM
                </div>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "36px",
                    backgroundColor: "#E6DDFB",
                    border: "3px solid #F7F9FE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    fontWeight: 600,
                    color: "#17264A",
                    marginLeft: "-8px",
                    zIndex: 2,
                  }}
                >
                  JL
                </div>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "36px",
                    backgroundColor: "#D5EEE7",
                    border: "3px solid #F7F9FE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    fontWeight: 600,
                    color: "#17264A",
                    marginLeft: "-8px",
                    zIndex: 1,
                  }}
                >
                  SK
                </div>
              </div>

              {/* Community Description */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#17264A",
                    lineHeight: "16px",
                  }}
                >
                  Your next chapter starts with us.
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
                  A community of learners, educators & innovators.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Right Column: Registration Card */}
        <section className="reg-card">
          {/* Form Introduction */}
          <div className="reg-intro">
            <h2 className="reg-intro-title">Create Your Account</h2>
            <p className="reg-intro-subtitle">One account. A whole world of learning.</p>
            <span className="reg-intro-note">All fields marked * are required.</span>
          </div>

          {/* Section 01: Account details */}
          <div className="reg-section">
            {/* Section Header */}
            <div className="reg-section-header">
              <span className="reg-section-num">01</span>
              <span className="reg-section-title">Account details</span>
              <div className="reg-section-divider" />
            </div>

            {/* Field group: Full Name & Email */}
            <div className="reg-field-row">
              {/* Full Name */}
              <div className="reg-field-group">
                <label className="reg-field-label">Full Name *</label>
                <div className="reg-input-control">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#61708B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="reg-input-element"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="reg-field-group">
                <label className="reg-field-label">Email Address *</label>
                <div className="reg-input-control">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#61708B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="reg-input-element"
                  />
                  {/* Green checkmark */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#19805A"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div className="reg-guidance-text">
                  Email looks good.
                </div>
              </div>
            </div>

            {/* Field group: Password & Confirm Password */}
            <div className="reg-field-row">
              {/* Password */}
              <div className="reg-field-group">
                <label className="reg-field-label">Password *</label>
                <div className="reg-input-control">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#61708B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="reg-input-element"
                    style={{
                      letterSpacing: showPassword ? "normal" : "2px",
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      color: "#61708B",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#61708B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                </div>

                {/* Password Strength Meter */}
                <div className="reg-strength-wrapper">
                  <div className="reg-strength-bars">
                    <div className="reg-strength-segment" />
                    <div className="reg-strength-segment" />
                    <div className="reg-strength-segment" />
                    <div className="reg-strength-segment" />
                  </div>
                  <div className="reg-strength-label">
                    Strong password <span className="reg-strength-desc">· 8+ characters, a number & a symbol</span>
                  </div>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="reg-field-group">
                <label className="reg-field-label">Confirm Password *</label>
                <div className="reg-input-control">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#61708B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="reg-input-element"
                    style={{
                      letterSpacing: showConfirmPassword ? "normal" : "2px",
                    }}
                  />
                  {/* Green checkmark */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#19805A"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      color: "#61708B",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#61708B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                </div>
                <div className="reg-guidance-text">
                  Passwords match.
                </div>
              </div>
            </div>
          </div>

          {/* Section 02: Your learning profile */}
          <div className="reg-section">
            {/* Section Header */}
            <div className="reg-section-header">
              <span className="reg-section-num">02</span>
              <span className="reg-section-title">Your learning profile</span>
              <div className="reg-section-divider" />
            </div>

            {/* Profile Row 1: User Role & University */}
            <div className="reg-field-row">
              {/* User Role */}
              <div className="reg-field-group">
                <label className="reg-field-label">User Role *</label>
                <div className="reg-input-control">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#61708B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <select
                    value={userRole}
                    onChange={(e) => setUserRole(e.target.value)}
                    className="reg-select-element"
                  >
                    <option value="Student">Student</option>
                    <option value="Instructor">Instructor</option>
                    <option value="Professional">Professional</option>
                    <option value="Researcher">Researcher</option>
                  </select>
                  <div style={{ pointerEvents: "none", color: "#61708B", display: "flex", alignItems: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* University (Active border matching Figma: 2px solid #245CE8) */}
              <div className="reg-field-group">
                <label className="reg-field-label">University *</label>
                <div className="reg-input-control active-border">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#61708B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m4 6 8-4 8 4" />
                    <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
                    <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
                    <path d="M18 5v17" />
                    <path d="M6 5v17" />
                    <circle cx="12" cy="9" r="2" />
                  </svg>
                  <select
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    className="reg-select-element"
                  >
                    <option value="University of Addis abeba">University of Addis abeba</option>
                    <option value="Addis Ababa Science and Technology University">Addis Ababa Science and Technology University</option>
                    <option value="Jimma University">Jimma University</option>
                    <option value="Hawassa University">Hawassa University</option>
                  </select>
                  <div style={{ pointerEvents: "none", color: "#61708B", display: "flex", alignItems: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Row 2: Region & City */}
            <div className="reg-field-row">
              {/* Region */}
              <div className="reg-field-group">
                <label className="reg-field-label">Region *</label>
                <div className="reg-input-control">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#61708B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                    <line x1="9" y1="3" x2="9" y2="18" />
                    <line x1="15" y1="6" x2="15" y2="21" />
                  </svg>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="reg-select-element"
                  >
                    <option value="Addis Abeba">Addis Abeba</option>
                    <option value="Oromia">Oromia</option>
                    <option value="Amhara">Amhara</option>
                    <option value="Tigray">Tigray</option>
                    <option value="Sidama">Sidama</option>
                  </select>
                  <div style={{ pointerEvents: "none", color: "#61708B", display: "flex", alignItems: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* City */}
              <div className="reg-field-group">
                <label className="reg-field-label">City *</label>
                <div className="reg-input-control">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#61708B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="reg-select-element"
                  >
                    <option value="Addisabeba">Addisabeba</option>
                    <option value="Hawassa">Hawassa</option>
                    <option value="Adama">Adama</option>
                    <option value="Bahir Dar">Bahir Dar</option>
                  </select>
                  <div style={{ pointerEvents: "none", color: "#61708B", display: "flex", alignItems: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Row 3: Academic Status & Field of Study */}
            <div className="reg-field-row">
              {/* Academic Status */}
              <div className="reg-field-group">
                <label className="reg-field-label">Academic Status *</label>
                <div className="reg-input-control">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#61708B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                  <select
                    value={academicStatus}
                    onChange={(e) => setAcademicStatus(e.target.value)}
                    className="reg-select-element"
                  >
                    <option value="Freshman">Freshman</option>
                    <option value="Sophomore">Sophomore</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                    <option value="Graduate">Graduate</option>
                  </select>
                  <div style={{ pointerEvents: "none", color: "#61708B", display: "flex", alignItems: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Field of Study */}
              <div className="reg-field-group">
                <label className="reg-field-label">Field of Study *</label>
                <div className="reg-input-control">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#61708B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                  <select
                    value={fieldOfStudy}
                    onChange={(e) => setFieldOfStudy(e.target.value)}
                    className="reg-select-element"
                  >
                    <option value="Computer Science">Computer Science</option>
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="Information Systems">Information Systems</option>
                    <option value="Data Science & AI">Data Science & AI</option>
                    <option value="Electrical Engineering">Electrical Engineering</option>
                  </select>
                  <div style={{ pointerEvents: "none", color: "#61708B", display: "flex", alignItems: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Actions */}
          <div className="reg-actions">
            {/* Terms Agreement Checkbox */}
            <div
              className="reg-terms-row"
              onClick={() => setAgreed(!agreed)}
            >
              <div
                className="reg-checkbox"
                style={{
                  backgroundColor: agreed ? "#245CE8" : "#FFFFFF",
                  border: agreed ? "none" : "1.5px solid #D9E0ED",
                }}
              >
                {agreed && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <label className="reg-terms-text" style={{ cursor: "pointer" }}>
                I agree to the{" "}
                <Link
                  href="/terms"
                  onClick={(e) => e.stopPropagation()}
                  style={{ color: "#245CE8", fontWeight: 600, textDecoration: "none" }}
                >
                  Terms & Privacy Policy
                </Link>
              </label>
            </div>

            {/* Authentication Buttons */}
            <div className="reg-auth-buttons">
              {/* Register Button */}
              <button
                type="button"
                onClick={handleRegister}
                disabled={submitting}
                className="reg-submit-btn"
                style={{ opacity: submitting ? 0.8 : 1, cursor: "pointer" }}
              >
                <span>{submitting ? "Creating your account..." : "Register"}</span>
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
              </button>

              {/* Alternative Separator */}
              <div className="reg-separator">
                <div className="reg-separator-line" />
                <span className="reg-separator-text">
                  or continue with
                </span>
                <div className="reg-separator-line" />
              </div>

              {/* Google Button */}
              <button
                type="button"
                onClick={() => router.push("/dashboard")}
                className="reg-google-btn"
                style={{ cursor: "pointer" }}
              >
                {/* Google Multi-Color SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17Z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z"
                  />
                </svg>
                <span className="reg-google-text">
                  Sign in with Google
                </span>
              </button>
            </div>

            {/* Login Prompt */}
            <div className="reg-login-prompt">
              Already have an account?{" "}
              <Link
                href="/login"
                style={{
                  color: "#245CE8",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Login
              </Link>
            </div>

            {/* Security Reassurance */}
            <div className="reg-security">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#61708B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span className="reg-security-text">
                Your information is safe and secure.
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* 3. Site Footer */}
      <footer className="reg-footer">
        <span className="reg-footer-text">
          © 2026 Learning Hub. All rights reserved.
        </span>
        <span className="reg-footer-text reg-footer-tagline desktop-only">
          Built for curious minds. Designed for your future.
        </span>
      </footer>
    </div>
  );
}
