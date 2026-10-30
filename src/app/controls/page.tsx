"use client";
import React, { useState } from "react";
import Link from "next/link";
import LearningHubLogo from "@/components/LearningHubLogo";

export default function ControlsReferencePage() {
  const [userRole, setUserRole] = useState("Student");
  const [academicStatus, setAcademicStatus] = useState("Junior");
  const [universitySearch, setUniversitySearch] = useState("Addis abeba");
  const [selectedUniversity, setSelectedUniversity] = useState("University of Addis Abeba");
  const [studySearch, setStudySearch] = useState("Comp");
  const [selectedStudy, setSelectedStudy] = useState("Computer Science");
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F7F9FE",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "48px 16px",
        color: "#17264A",
      }}
    >
      {/* Top Header / Breadcrumb navigation */}
      <div
        style={{
          width: "100%",
          maxWidth: "760px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
          padding: "0 8px",
        }}
      >
        <Link
          href="/dashboard"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#245CE8",
            fontWeight: 600,
            fontSize: "14px",
            textDecoration: "none",
            backgroundColor: "#FFFFFF",
            padding: "8px 16px",
            borderRadius: "10px",
            border: "1px solid #E6ECF6",
            boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 19" />
          </svg>
          <span>Back to Dashboard</span>
        </Link>

        <LearningHubLogo size="sm" />
      </div>

      {/* 3. Learning Hub · Control reference Card Container (760px wide) */}
      <div
        style={{
          width: "100%",
          maxWidth: "760px",
          backgroundColor: "#F7F9FE",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "32px",
          gap: "32px",
          boxSizing: "border-box",
        }}
      >
        {/* Reference introduction */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "12px",
          }}
        >
          {/* Eyebrow */}
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              color: "#245CE8",
              lineHeight: "13px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            LEARNING HUB / FORM LIBRARY
          </span>

          {/* Title */}
          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "28px",
              fontWeight: 700,
              lineHeight: "34px",
              color: "#17264A",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            Options &amp; input states
          </h1>

          {/* Description */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "160%",
              color: "#61708B",
              margin: 0,
            }}
          >
            A closer look at search, selection and validation. All menus are shown expanded for reference; the registration pages use closed selections.
          </p>
        </div>

        {/* 1. Available selections */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "24px",
          }}
        >
          {/* User Role · all choices */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: "#17264A",
                lineHeight: "17px",
              }}
            >
              User Role · all choices
            </span>

            {/* Dropdown Menu Box */}
            <div
              style={{
                width: "100%",
                maxWidth: "316px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #D9E0ED",
                borderRadius: "12px",
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                boxSizing: "border-box",
                boxShadow: "0 2px 8px rgba(32, 63, 118, 0.04)",
              }}
            >
              {/* Option: Student (selected) */}
              <div
                onClick={() => setUserRole("Student")}
                style={{
                  height: "32px",
                  backgroundColor: userRole === "Student" ? "#EDF3FF" : "#FFFFFF",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  boxSizing: "border-box",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: userRole === "Student" ? 600 : 400,
                    color: userRole === "Student" ? "#245CE8" : "#17264A",
                    lineHeight: "16px",
                  }}
                >
                  Student
                </span>
                {userRole === "Student" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#245CE8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>

              {/* Option: Instructor */}
              <div
                onClick={() => setUserRole("Instructor")}
                style={{
                  height: "32px",
                  backgroundColor: userRole === "Instructor" ? "#EDF3FF" : "#FFFFFF",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  boxSizing: "border-box",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: userRole === "Instructor" ? 600 : 400,
                    color: userRole === "Instructor" ? "#245CE8" : "#17264A",
                    lineHeight: "16px",
                  }}
                >
                  Instructor
                </span>
                {userRole === "Instructor" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#245CE8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
            </div>
          </div>

          {/* Academic Status · all choices */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: "#17264A",
                lineHeight: "17px",
              }}
            >
              Academic Status · all choices
            </span>

            {/* Dropdown Menu Box */}
            <div
              style={{
                width: "100%",
                backgroundColor: "#FFFFFF",
                border: "1px solid #D9E0ED",
                borderRadius: "12px",
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                boxSizing: "border-box",
                boxShadow: "0 2px 8px rgba(32, 63, 118, 0.04)",
              }}
            >
              {[
                "Freshman",
                "Sophomore",
                "Junior",
                "Senior",
                "Graduate",
                "Master's",
                "PhD",
                "Alumni",
              ].map((item) => {
                const isSelected = academicStatus === item;
                return (
                  <div
                    key={item}
                    onClick={() => setAcademicStatus(item)}
                    style={{
                      height: "32px",
                      backgroundColor: isSelected ? "#EDF3FF" : "#FFFFFF",
                      borderRadius: "8px",
                      padding: "8px 12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      boxSizing: "border-box",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "13px",
                        fontWeight: isSelected ? 600 : 400,
                        color: isSelected ? "#245CE8" : "#17264A",
                        lineHeight: "16px",
                      }}
                    >
                      {item}
                    </span>
                    {isSelected && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#245CE8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2. Searchable dropdown states */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "24px",
          }}
        >
          {/* University · search & select */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: "#17264A",
                lineHeight: "17px",
              }}
            >
              University · search &amp; select
            </span>

            {/* Search Dropdown Card */}
            <div
              style={{
                width: "100%",
                backgroundColor: "#FFFFFF",
                border: "1px solid #D9E0ED",
                boxShadow: "0px 8px 24px rgba(32, 63, 118, 0.1098)",
                borderRadius: "12px",
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                boxSizing: "border-box",
              }}
            >
              {/* Search input (Focused active border: 2px solid #245CE8) */}
              <div
                style={{
                  height: "48px",
                  border: "2px solid #245CE8",
                  borderRadius: "8px",
                  padding: "0 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  boxSizing: "border-box",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#245CE8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  type="text"
                  value={universitySearch}
                  onChange={(e) => setUniversitySearch(e.target.value)}
                  style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    fontSize: "13px",
                    color: "#17264A",
                    fontFamily: "'Inter', sans-serif",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setUniversitySearch("")}
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
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#61708B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>

              {/* Results count */}
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 400,
                  color: "#61708B",
                  lineHeight: "13px",
                  padding: "0 4px",
                }}
              >
                2 universities found
              </div>

              {/* Option 1: University of Addis Abeba (selected) */}
              <div
                onClick={() => setSelectedUniversity("University of Addis Abeba")}
                style={{
                  height: "49px",
                  backgroundColor: selectedUniversity === "University of Addis Abeba" ? "#EDF3FF" : "#FFFFFF",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      fontWeight: selectedUniversity === "University of Addis Abeba" ? 600 : 400,
                      color: selectedUniversity === "University of Addis Abeba" ? "#245CE8" : "#17264A",
                      lineHeight: "16px",
                    }}
                  >
                    University of Addis Abeba
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "11px",
                      fontWeight: 400,
                      color: "#61708B",
                      lineHeight: "13px",
                    }}
                  >
                    Addis abeba, Ethiopia
                  </span>
                </div>
                {selectedUniversity === "University of Addis Abeba" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#245CE8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>

              {/* Option 2: Kotebe Metropolitan University */}
              <div
                onClick={() => setSelectedUniversity("Kotebe Metropolitan University")}
                style={{
                  height: "49px",
                  backgroundColor: selectedUniversity === "Kotebe Metropolitan University" ? "#EDF3FF" : "#FFFFFF",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      fontWeight: selectedUniversity === "Kotebe Metropolitan University" ? 600 : 400,
                      color: selectedUniversity === "Kotebe Metropolitan University" ? "#245CE8" : "#17264A",
                      lineHeight: "16px",
                    }}
                  >
                    Kotebe Metropolitan University
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "11px",
                      fontWeight: 400,
                      color: "#61708B",
                      lineHeight: "13px",
                    }}
                  >
                    Addis abeba, Ethiopia
                  </span>
                </div>
                {selectedUniversity === "Kotebe Metropolitan University" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#245CE8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
            </div>
          </div>

          {/* Field of Study · search & select */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: "#17264A",
                lineHeight: "17px",
              }}
            >
              Field of Study · search &amp; select
            </span>

            {/* Search Dropdown Card */}
            <div
              style={{
                width: "100%",
                backgroundColor: "#FFFFFF",
                border: "1px solid #D9E0ED",
                boxShadow: "0px 8px 24px rgba(32, 63, 118, 0.1098)",
                borderRadius: "12px",
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                boxSizing: "border-box",
              }}
            >
              {/* Search input with Comp| */}
              <div
                style={{
                  height: "48px",
                  border: "2px solid #245CE8",
                  borderRadius: "8px",
                  padding: "0 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  boxSizing: "border-box",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#245CE8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                  <input
                    type="text"
                    value={studySearch}
                    onChange={(e) => setStudySearch(e.target.value)}
                    style={{
                      border: "none",
                      outline: "none",
                      width: "100%",
                      fontSize: "13px",
                      color: "#17264A",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  />
                  <span
                    style={{
                      display: "inline-block",
                      width: "1px",
                      height: "16px",
                      backgroundColor: "#17264A",
                      marginLeft: "-2px",
                      animation: "blink 1s infinite",
                    }}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setStudySearch("")}
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
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#61708B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>

              {/* Results count */}
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 400,
                  color: "#61708B",
                  lineHeight: "13px",
                  padding: "0 4px",
                }}
              >
                3 fields found
              </div>

              {/* Option 1: Computer Science (selected) */}
              <div
                onClick={() => setSelectedStudy("Computer Science")}
                style={{
                  height: "32px",
                  backgroundColor: selectedStudy === "Computer Science" ? "#EDF3FF" : "#FFFFFF",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  boxSizing: "border-box",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: selectedStudy === "Computer Science" ? 600 : 400,
                    color: selectedStudy === "Computer Science" ? "#245CE8" : "#17264A",
                    lineHeight: "16px",
                  }}
                >
                  Computer Science
                </span>
                {selectedStudy === "Computer Science" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#245CE8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>

              {/* Option 2: Computer Engineering */}
              <div
                onClick={() => setSelectedStudy("Computer Engineering")}
                style={{
                  height: "32px",
                  backgroundColor: selectedStudy === "Computer Engineering" ? "#EDF3FF" : "#FFFFFF",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  boxSizing: "border-box",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: selectedStudy === "Computer Engineering" ? 600 : 400,
                    color: selectedStudy === "Computer Engineering" ? "#245CE8" : "#17264A",
                    lineHeight: "16px",
                  }}
                >
                  Computer Engineering
                </span>
                {selectedStudy === "Computer Engineering" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#245CE8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>

              {/* Option 3: Comparative Literature */}
              <div
                onClick={() => setSelectedStudy("Comparative Literature")}
                style={{
                  height: "32px",
                  backgroundColor: selectedStudy === "Comparative Literature" ? "#EDF3FF" : "#FFFFFF",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  boxSizing: "border-box",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: selectedStudy === "Comparative Literature" ? 600 : 400,
                    color: selectedStudy === "Comparative Literature" ? "#245CE8" : "#17264A",
                    lineHeight: "16px",
                  }}
                >
                  Comparative Literature
                </span>
                {selectedStudy === "Comparative Literature" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#245CE8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Validation reference */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "24px",
          }}
        >
          {/* Label */}
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              color: "#17264A",
              lineHeight: "17px",
            }}
          >
            Input guidance &amp; validation
          </span>

          {/* Row 1: Default input states (Full Name & Email Address) */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              gap: "24px",
            }}
          >
            {/* Full Name */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <label
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#17264A",
                  lineHeight: "16px",
                }}
              >
                Full Name *
              </label>
              <div
                style={{
                  height: "52px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #D9E0ED",
                  borderRadius: "12px",
                  padding: "0 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxSizing: "border-box",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#61708B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    fontSize: "14px",
                    color: "#17264A",
                    fontFamily: "'Inter', sans-serif",
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#61708B",
                  lineHeight: "140%",
                }}
              >
                Use the name you&apos;d like on your certificates.
              </span>
            </div>

            {/* Email Address */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <label
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#17264A",
                  lineHeight: "16px",
                }}
              >
                Email Address *
              </label>
              <div
                style={{
                  height: "52px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #D9E0ED",
                  borderRadius: "12px",
                  padding: "0 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxSizing: "border-box",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#61708B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <input
                  type="email"
                  placeholder="you@university.edu"
                  style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    fontSize: "14px",
                    color: "#17264A",
                    fontFamily: "'Inter', sans-serif",
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#61708B",
                  lineHeight: "140%",
                }}
              >
                A university or personal email works.
              </span>
            </div>
          </div>

          {/* Row 2: Password visibility and error */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              gap: "24px",
            }}
          >
            {/* Password (Visible state) */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <label
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#17264A",
                  lineHeight: "16px",
                }}
              >
                Password *
              </label>
              <div
                style={{
                  height: "52px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #D9E0ED",
                  borderRadius: "12px",
                  padding: "0 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxSizing: "border-box",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#61708B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <input
                  type={showPassword ? "text" : "password"}
                  defaultValue="LearnTogether#26"
                  style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    fontSize: "14px",
                    color: "#17264A",
                    fontFamily: "'Inter', sans-serif",
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
                  {/* eye-off with diagonal slash icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#61708B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                    <line x1="2" x2="22" y1="2" y2="22" />
                  </svg>
                </button>
              </div>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#61708B",
                  lineHeight: "140%",
                }}
              >
                Visible password · select the icon to hide.
              </span>
            </div>

            {/* Confirm Password (Error state: Passwords don't match) */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <label
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#17264A",
                  lineHeight: "16px",
                }}
              >
                Confirm Password *
              </label>
              <div
                style={{
                  height: "52px",
                  backgroundColor: "#FFF3F3",
                  border: "1px solid #C23A47",
                  borderRadius: "12px",
                  padding: "0 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxSizing: "border-box",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#61708B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  defaultValue="••••••••"
                  style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    fontSize: "14px",
                    color: "#17264A",
                    backgroundColor: "transparent",
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: showConfirmPassword ? "normal" : "2px",
                  }}
                />
                {/* circle-alert icon (red #C23A47) */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C23A47" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" x2="12" y1="8" y2="12" />
                  <line x1="12" x2="12.01" y1="16" y2="16" />
                </svg>
                {/* eye icon */}
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
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#61708B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#C23A47",
                  lineHeight: "140%",
                }}
              >
                Passwords don&apos;t match. Please try again.
              </span>
            </div>
          </div>

          {/* Row 3: Email error state & Validation principles */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              gap: "24px",
            }}
          >
            {/* Email error state */}
            <div
              style={{
                width: "320px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                flexShrink: 0,
              }}
            >
              <label
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#17264A",
                  lineHeight: "16px",
                }}
              >
                Email Address *
              </label>
              <div
                style={{
                  height: "52px",
                  backgroundColor: "#FFF3F3",
                  border: "1px solid #C23A47",
                  borderRadius: "12px",
                  padding: "0 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxSizing: "border-box",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#61708B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <input
                  type="email"
                  defaultValue="misghaberhane@gmail.com"
                  style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    fontSize: "14px",
                    color: "#17264A",
                    backgroundColor: "transparent",
                    fontFamily: "'Inter', sans-serif",
                  }}
                />
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C23A47" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" x2="12" y1="8" y2="12" />
                  <line x1="12" x2="12.01" y1="16" y2="16" />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#C23A47",
                  lineHeight: "140%",
                }}
              >
                Enter a valid email, like maya@example.com.
              </span>
            </div>

            {/* Validation principles box */}
            <div
              style={{
                flex: 1,
                backgroundColor: "#EDF3FF",
                borderRadius: "12px",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                boxSizing: "border-box",
                minHeight: "113px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#245CE8",
                  lineHeight: "16px",
                }}
              >
                Clear guidance at every step
              </span>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "160%",
                  color: "#61708B",
                  margin: 0,
                }}
              >
                Labels stay visible. Errors include a message and icon, never color alone. Password strength appears below the input.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#D9E0ED",
            marginTop: "8px",
          }}
        />

        {/* Layout specifications note */}
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "160%",
            color: "#61708B",
          }}
        >
          8px spacing rhythm · 52px controls · 12px input radius · 1440px desktop / 390px mobile
        </div>
      </div>
    </div>
  );
}
