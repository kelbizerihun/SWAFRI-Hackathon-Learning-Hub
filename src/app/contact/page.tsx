"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "general",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

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
        {/* Header Hero */}
        <section
          style={{
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid #E6ECF6",
            padding: "64px 20px 48px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
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
              Get In Touch
            </span>
            <h1
              style={{
                fontSize: "36px",
                fontWeight: 800,
                color: "#17264A",
                lineHeight: "1.25",
                marginBottom: "16px",
                letterSpacing: "-0.5px",
              }}
            >
              We&apos;re here to help you succeed.
            </h1>
            <p
              style={{
                fontSize: "16px",
                color: "#61708B",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              Have questions about courses, certifications, university discounts, or technical issues? Send our student advisors a message.
            </p>
          </div>
        </section>

        {/* Form and Contact Information Section */}
        <div style={{ maxWidth: "1200px", margin: "48px auto 0", padding: "0 20px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "36px",
              alignItems: "flex-start",
            }}
          >
            {/* Left: Contact Form Card */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E6ECF6",
                borderRadius: "24px",
                padding: "36px",
                boxShadow: "0 8px 30px rgba(32, 63, 118, 0.04)",
              }}
            >
              <h2
                style={{
                  margin: "0 0 8px",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#17264A",
                }}
              >
                Send us a message
              </h2>
              <p
                style={{
                  margin: "0 0 28px",
                  fontSize: "14px",
                  color: "#61708B",
                }}
              >
                Typical response time: under 2 business hours.
              </p>

              {submitted ? (
                <div
                  style={{
                    backgroundColor: "#EDF3FF",
                    border: "1px solid #BFDBFE",
                    borderRadius: "16px",
                    padding: "32px 24px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "100px",
                      backgroundColor: "#245CE8",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <polyline points="20 6 9 17 4 12" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 style={{ margin: "0 0 8px", fontSize: "18px", fontWeight: 700, color: "#17264A" }}>
                    Message sent successfully!
                  </h3>
                  <p style={{ margin: "0 0 20px", fontSize: "14px", color: "#61708B", lineHeight: "1.6" }}>
                    Thank you, {formData.name || "friend"}. Our student advisory team has received your message and will reply to <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", topic: "general", subject: "", message: "" });
                    }}
                    style={{
                      backgroundColor: "#245CE8",
                      color: "#FFFFFF",
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "10px",
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {/* Name */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#17264A" }}>
                      Your full name <span style={{ color: "#245CE8" }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Misgana Berhane"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        padding: "12px 16px",
                        borderRadius: "12px",
                        border: "1px solid #E6ECF6",
                        fontSize: "14px",
                        outline: "none",
                        backgroundColor: "#F7F9FE",
                        color: "#17264A",
                        fontFamily: "inherit",
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#17264A" }}>
                      Email address <span style={{ color: "#245CE8" }}>*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        padding: "12px 16px",
                        borderRadius: "12px",
                        border: "1px solid #E6ECF6",
                        fontSize: "14px",
                        outline: "none",
                        backgroundColor: "#F7F9FE",
                        color: "#17264A",
                        fontFamily: "inherit",
                      }}
                    />
                  </div>

                  {/* Topic */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#17264A" }}>
                      What can we help you with?
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      style={{
                        padding: "12px 16px",
                        borderRadius: "12px",
                        border: "1px solid #E6ECF6",
                        fontSize: "14px",
                        outline: "none",
                        backgroundColor: "#F7F9FE",
                        color: "#17264A",
                        fontFamily: "inherit",
                        cursor: "pointer",
                      }}
                    >
                      <option value="general">General question or feedback</option>
                      <option value="courses">Course recommendation & syllabus</option>
                      <option value="technical">Technical support or login issue</option>
                      <option value="scholarship">Student discount / Financial aid</option>
                      <option value="enterprise">University & Enterprise partnership</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#17264A" }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Brief summary of your question"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{
                        padding: "12px 16px",
                        borderRadius: "12px",
                        border: "1px solid #E6ECF6",
                        fontSize: "14px",
                        outline: "none",
                        backgroundColor: "#F7F9FE",
                        color: "#17264A",
                        fontFamily: "inherit",
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#17264A" }}>
                      Your message <span style={{ color: "#245CE8" }}>*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Please share any details that can help us assist you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        padding: "12px 16px",
                        borderRadius: "12px",
                        border: "1px solid #E6ECF6",
                        fontSize: "14px",
                        outline: "none",
                        backgroundColor: "#F7F9FE",
                        color: "#17264A",
                        fontFamily: "inherit",
                        resize: "vertical",
                        lineHeight: "1.5",
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      marginTop: "8px",
                      backgroundColor: "#245CE8",
                      color: "#FFFFFF",
                      border: "none",
                      padding: "14px 28px",
                      borderRadius: "12px",
                      fontSize: "14px",
                      fontWeight: 600,
                      cursor: loading ? "not-allowed" : "pointer",
                      boxShadow: "0 4px 14px rgba(36, 92, 232, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      transition: "all 0.15s ease",
                      opacity: loading ? 0.8 : 1,
                    }}
                  >
                    {loading ? "Sending your message..." : "Send message →"}
                  </button>
                </form>
              )}
            </div>

            {/* Right: Direct Contacts & Helpful Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Channel 1: Email Support */}
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E6ECF6",
                  borderRadius: "20px",
                  padding: "24px",
                  boxShadow: "0 4px 16px rgba(32, 63, 118, 0.02)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    backgroundColor: "#EDF3FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#245CE8",
                    flexShrink: 0,
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="#245CE8" strokeWidth="2" />
                    <path d="M22 6L12 13L2 6" stroke="#245CE8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ margin: "0 0 4px", fontSize: "16px", fontWeight: 700, color: "#17264A" }}>
                    Email Support
                  </h3>
                  <p style={{ margin: "0 0 6px", fontSize: "13px", color: "#61708B" }}>
                    For admissions, technical help, or course access:
                  </p>
                  <a
                    href="mailto:support@learninghub.edu"
                    style={{
                      color: "#245CE8",
                      fontWeight: 600,
                      fontSize: "14px",
                      textDecoration: "none",
                    }}
                  >
                    support@learninghub.edu
                  </a>
                </div>
              </div>

              {/* Channel 2: Live Advisory */}
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E6ECF6",
                  borderRadius: "20px",
                  padding: "24px",
                  boxShadow: "0 4px 16px rgba(32, 63, 118, 0.02)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    backgroundColor: "#EFEDFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#7252CF",
                    flexShrink: 0,
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#7252CF" strokeWidth="2" />
                    <polyline points="12 6 12 12 16 14" stroke="#7252CF" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ margin: "0 0 4px", fontSize: "16px", fontWeight: 700, color: "#17264A" }}>
                    Advising Hours
                  </h3>
                  <p style={{ margin: "0 0 6px", fontSize: "13px", color: "#61708B" }}>
                    Monday – Saturday, 8:00 AM – 8:00 PM EDT
                  </p>
                  <span style={{ fontSize: "12px", color: "#19805A", fontWeight: 600 }}>
                    ● Advisors currently active online
                  </span>
                </div>
              </div>

              {/* Channel 3: Campus & Hubs */}
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E6ECF6",
                  borderRadius: "20px",
                  padding: "24px",
                  boxShadow: "0 4px 16px rgba(32, 63, 118, 0.02)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    backgroundColor: "#FFF3E3",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#AD671F",
                    flexShrink: 0,
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="#AD671F" strokeWidth="2" />
                    <circle cx="12" cy="10" r="3" stroke="#AD671F" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ margin: "0 0 4px", fontSize: "16px", fontWeight: 700, color: "#17264A" }}>
                    Global Hubs
                  </h3>
                  <p style={{ margin: "0 0 4px", fontSize: "13px", color: "#61708B" }}>
                    Addis Ababa University Partner Hub & Global Remote Centers
                  </p>
                  <span style={{ fontSize: "12px", color: "#61708B" }}>
                    Supporting students worldwide with local community mentors.
                  </span>
                </div>
              </div>

              {/* FAQ Quick Link Banner */}
              <div
                style={{
                  backgroundColor: "#EDF3FF",
                  borderRadius: "20px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#245CE8", textTransform: "uppercase" }}>
                  Instant Answers
                </span>
                <h4 style={{ margin: 0, fontSize: "17px", fontWeight: 700, color: "#17264A" }}>
                  Looking for quick answers?
                </h4>
                <p style={{ margin: 0, fontSize: "13px", color: "#61708B", lineHeight: "1.5" }}>
                  Check our Knowledge Base and Frequently Asked Questions for instant solutions.
                </p>
                <Link
                  href="/faq"
                  style={{
                    marginTop: "6px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#245CE8",
                    fontWeight: 600,
                    fontSize: "13px",
                    textDecoration: "none",
                  }}
                >
                  Visit FAQ directory →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
