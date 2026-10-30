"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LearningHubLogo from "@/components/LearningHubLogo";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("misganaberhane@gmail.com");
  const [password, setPassword] = useState("•••••••••••••");
  const [showPassword, setShowPassword] = useState(false);
  const [userRole, setUserRole] = useState("Student");
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg("Please enter both your email and password.");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 500);
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
      {/* 1. Top Header */}
      <header
        style={{
          width: "100%",
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid #E8EDF7",
          display: "flex",
          justifyContent: "center",
          height: "80px",
          padding: "0 24px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1280px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Brand Logo matching Image 1 */}
          <LearningHubLogo size="md" />

          {/* Right link */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ fontSize: "14px", color: "#61708B" }}>
              Don&apos;t have an account?
            </span>
            <Link
              href="/register"
              style={{
                backgroundColor: "#EDF3FF",
                color: "#245CE8",
                fontWeight: 600,
                fontSize: "14px",
                padding: "8px 18px",
                borderRadius: "10px",
                textDecoration: "none",
                transition: "all 0.15s ease",
              }}
            >
              Create Account
            </Link>
          </div>
        </div>
      </header>

      {/* 2. Main Auth Content */}
      <main
        style={{
          width: "100%",
          maxWidth: "1120px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "60px 24px",
          gap: "48px",
          flexGrow: 1,
          boxSizing: "border-box",
          flexWrap: "wrap",
        }}
      >
        {/* Left Column: Welcome Pitch */}
        <div style={{ flex: "1 1 420px", maxWidth: "500px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              backgroundColor: "#EFEDFF",
              borderRadius: "100px",
              color: "#7252CF",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Welcome back to learning
          </div>

          <h1
            style={{
              fontSize: "38px",
              fontWeight: 800,
              lineHeight: "1.15",
              color: "#17264A",
              marginBottom: "16px",
              letterSpacing: "-0.8px",
            }}
          >
            Keep your momentum going strong.
          </h1>

          <p
            style={{
              fontSize: "16px",
              color: "#61708B",
              lineHeight: "1.6",
              marginBottom: "32px",
            }}
          >
            Log in to continue where you left off, review your weekly study hours, and connect with your courses and AI companion.
          </p>

          {/* Quick value cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                backgroundColor: "#FFFFFF",
                padding: "16px 20px",
                borderRadius: "14px",
                border: "1px solid #E6ECF6",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  backgroundColor: "#EDF3FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#245CE8",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <polyline points="20 6 9 17 4 12" stroke="#245CE8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: "14px", fontWeight: 600, color: "#17264A" }}>
                  Automated Progress Sync
                </h4>
                <p style={{ margin: 0, fontSize: "12px", color: "#61708B" }}>
                  Your completed lessons and certificates are saved across devices.
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                backgroundColor: "#FFFFFF",
                padding: "16px 20px",
                borderRadius: "14px",
                border: "1px solid #E6ECF6",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  backgroundColor: "#EFEDFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#7252CF",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L14.4 7.6L20 10L14.4 12.4L12 18L9.6 12.4L4 10L9.6 7.6L12 2Z" stroke="#7252CF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: "14px", fontWeight: 600, color: "#17264A" }}>
                  AI Study Companion Ready
                </h4>
                <p style={{ margin: 0, fontSize: "12px", color: "#61708B" }}>
                  Instant explanations and tailored quizzes as you learn.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Login Card */}
        <div
          style={{
            flex: "1 1 440px",
            maxWidth: "480px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E6ECF6",
            borderRadius: "24px",
            padding: "40px 36px",
            boxShadow: "0 10px 30px rgba(32, 63, 118, 0.04)",
          }}
        >
          <h2
            style={{
              margin: "0 0 8px",
              fontSize: "24px",
              fontWeight: 700,
              color: "#17264A",
              letterSpacing: "-0.4px",
            }}
          >
            Sign in to Learning Hub
          </h2>
          <p
            style={{
              margin: "0 0 24px",
              fontSize: "14px",
              color: "#61708B",
            }}
          >
            Enter your details below to access your account.
          </p>

          {/* Role selector pill */}
          <div
            style={{
              display: "flex",
              backgroundColor: "#F7F9FE",
              padding: "4px",
              borderRadius: "12px",
              border: "1px solid #E6ECF6",
              marginBottom: "24px",
              gap: "4px",
            }}
          >
            {["Student", "Instructor", "Professional"].map((role) => {
              const active = userRole === role;
              return (
                <button
                  type="button"
                  key={role}
                  onClick={() => setUserRole(role)}
                  style={{
                    flex: 1,
                    padding: "8px 0",
                    border: "none",
                    borderRadius: "8px",
                    backgroundColor: active ? "#FFFFFF" : "transparent",
                    color: active ? "#245CE8" : "#61708B",
                    fontWeight: active ? 600 : 500,
                    fontSize: "13px",
                    cursor: "pointer",
                    boxShadow: active ? "0 2px 6px rgba(0,0,0,0.04)" : "none",
                    transition: "all 0.15s ease",
                  }}
                >
                  {role}
                </button>
              );
            })}
          </div>

          {errorMsg && (
            <div
              style={{
                backgroundColor: "#FEF2F2",
                border: "1px solid #FEE2E2",
                color: "#DC2626",
                fontSize: "13px",
                padding: "10px 14px",
                borderRadius: "10px",
                marginBottom: "16px",
              }}
            >
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {/* Email input */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "13px", fontWeight: 600, color: "#17264A" }}>
                Email address
              </label>
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  padding: "12px 14px",
                  borderRadius: "12px",
                  border: "1px solid #E6ECF6",
                  fontSize: "14px",
                  backgroundColor: "#F7F9FE",
                  color: "#17264A",
                  outline: "none",
                  fontFamily: "inherit",
                }}
              />
            </div>

            {/* Password input */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <label style={{ fontSize: "13px", fontWeight: 600, color: "#17264A" }}>
                  Password
                </label>
                <Link
                  href="/contact"
                  style={{
                    fontSize: "12px",
                    color: "#245CE8",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  Forgot password?
                </Link>
              </div>

              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "12px 42px 12px 14px",
                    borderRadius: "12px",
                    border: "1px solid #E6ECF6",
                    fontSize: "14px",
                    backgroundColor: "#F7F9FE",
                    color: "#17264A",
                    outline: "none",
                    fontFamily: "inherit",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    color: "#61708B",
                    cursor: "pointer",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me checkbox */}
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                fontSize: "13px",
                color: "#61708B",
              }}
            >
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ width: "16px", height: "16px", accentColor: "#245CE8", cursor: "pointer" }}
              />
              Keep me signed in for 30 days
            </label>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              style={{
                marginTop: "4px",
                backgroundColor: "#245CE8",
                color: "#FFFFFF",
                border: "none",
                padding: "13px 20px",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: isLoading ? "not-allowed" : "pointer",
                boxShadow: "0 4px 14px rgba(36, 92, 232, 0.25)",
                transition: "all 0.15s ease",
              }}
            >
              {isLoading ? "Signing in..." : `Sign in as ${userRole} →`}
            </button>

            {/* Divider */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "12px 0",
                gap: "12px",
              }}
            >
              <div style={{ flex: 1, height: "1px", backgroundColor: "#E6ECF6" }} />
              <span style={{ fontSize: "12px", color: "#61708B" }}>or</span>
              <div style={{ flex: 1, height: "1px", backgroundColor: "#E6ECF6" }} />
            </div>

            {/* Google sign-in */}
            <button
              type="button"
              onClick={() => router.push("/dashboard")}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E6ECF6",
                borderRadius: "12px",
                padding: "12px",
                fontSize: "14px",
                fontWeight: 600,
                color: "#17264A",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z" />
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24Z" />
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15Z" />
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z" />
              </svg>
              <span>Continue with Google</span>
            </button>
          </form>

          {/* Switch to Register */}
          <div
            style={{
              textAlign: "center",
              marginTop: "24px",
              fontSize: "13px",
              color: "#61708B",
            }}
          >
            New to Learning Hub?{" "}
            <Link
              href="/register"
              style={{
                color: "#245CE8",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Sign up now
            </Link>
          </div>
        </div>
      </main>

      {/* 3. Footer */}
      <footer
        style={{
          width: "100%",
          padding: "24px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #E8EDF7",
          backgroundColor: "#FFFFFF",
          fontSize: "12px",
          color: "#61708B",
          boxSizing: "border-box",
        }}
      >
        <span>© 2026 Learning Hub. All rights reserved.</span>
        <span>Built for curious minds. Designed for your future.</span>
      </footer>
    </div>
  );
}
