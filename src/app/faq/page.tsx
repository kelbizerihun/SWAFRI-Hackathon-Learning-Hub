"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIds, setOpenIds] = useState<{ [key: string]: boolean }>({
    "1": true,
    "2": false,
  });

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "courses", label: "Courses & Certificates" },
    { id: "ai", label: "AI Study Companion" },
    { id: "account", label: "Account & Access" },
    { id: "billing", label: "Pricing & Financial Aid" },
  ];

  const faqs: FAQItem[] = [
    {
      id: "1",
      category: "courses",
      question: "How do self-paced courses and live mentorship work?",
      answer:
        "Every course on Learning Hub is modular and self-paced, allowing you to learn on your own schedule. Along with video lessons and interactive exercises, you have access to weekly live mentor office hours, real-time code reviews, and community discussion boards.",
    },
    {
      id: "2",
      category: "courses",
      question: "Are the certificates verified and shareable on LinkedIn?",
      answer:
        "Yes! Upon completing 100% of the lessons, quizzes, and capstone project for any course track, you receive a cryptographically verified certificate with a unique credential ID and one-click export to LinkedIn and PDF.",
    },
    {
      id: "3",
      category: "ai",
      question: "What can the AI Study Companion do to help me?",
      answer:
        "The AI Study Companion breaks down difficult concepts into plain English, generates tailored practice quizzes based on your weak areas, debugs code snippets, and provides instant 24/7 explanations without leaving your lesson screen.",
    },
    {
      id: "4",
      category: "courses",
      question: "Can I switch courses or enroll in multiple tracks simultaneously?",
      answer:
        "Absolutely. Your membership gives you unlimited access to our entire catalog of 500+ courses. You can enroll in multiple tracks at once and track your individual progress on your personalized dashboard.",
    },
    {
      id: "5",
      category: "account",
      question: "How do I track my weekly study hours and streak?",
      answer:
        "Your Overview dashboard automatically records study minutes, completed lessons, and weekly streak days every time you interact with lesson materials or submit assignments. You can review detailed charts and upcoming goals at /dashboard.",
    },
    {
      id: "6",
      category: "billing",
      question: "Is there financial aid or university student discounts available?",
      answer:
        "Yes! We offer a 50% discount for verified university students and faculty, as well as full financial aid scholarships for eligible learners. You can apply directly through our contact page or during registration.",
    },
    {
      id: "7",
      category: "account",
      question: "Can I download course materials for offline study?",
      answer:
        "Yes, our mobile-optimized companion app and web interface support offline saving for course cheat sheets, lecture audio, and downloadable project starter repositories.",
    },
    {
      id: "8",
      category: "billing",
      question: "What is your refund policy if a course isn't right for me?",
      answer:
        "We offer a 14-day 100% money-back guarantee with zero hassle. If you're not completely satisfied with your learning experience, simply email support@learninghub.edu within 14 days of purchase.",
    },
  ];

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs = faqs.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

      {/* Main Content */}
      <main style={{ flex: 1, paddingBottom: "80px" }}>
        {/* Hero Section */}
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
              Frequently Asked Questions
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
              How can we help you learn better?
            </h1>
            <p
              style={{
                fontSize: "16px",
                color: "#61708B",
                lineHeight: "1.6",
                marginBottom: "32px",
              }}
            >
              Find clear answers to common questions about courses, certifications, career paths, and our AI study companion.
            </p>

            {/* Search Input */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#F7F9FE",
                border: "1px solid #E6ECF6",
                borderRadius: "14px",
                padding: "8px 16px",
                gap: "12px",
                boxShadow: "0 4px 16px rgba(32, 63, 118, 0.04)",
                maxWidth: "520px",
                margin: "0 auto",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="#61708B" strokeWidth="2" />
                <path d="M21 21L16.65 16.65" stroke="#61708B" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Search questions (e.g. certificates, AI companion, refund)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                  fontSize: "14px",
                  color: "#17264A",
                  width: "100%",
                  fontFamily: "inherit",
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#61708B",
                    fontSize: "13px",
                    cursor: "pointer",
                    padding: "4px",
                  }}
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Categories Bar */}
        <div style={{ maxWidth: "860px", margin: "40px auto 24px", padding: "0 20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: "9px 18px",
                    borderRadius: "12px",
                    fontSize: "13px",
                    fontWeight: 600,
                    border: active ? "1px solid #245CE8" : "1px solid #E6ECF6",
                    backgroundColor: active ? "#245CE8" : "#FFFFFF",
                    color: active ? "#FFFFFF" : "#61708B",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = openIds[faq.id];
                return (
                  <div
                    key={faq.id}
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E6ECF6",
                      borderRadius: "16px",
                      overflow: "hidden",
                      boxShadow: "0 2px 8px rgba(32, 63, 118, 0.02)",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "20px 24px",
                        background: "none",
                        border: "none",
                        textAlign: "left",
                        cursor: "pointer",
                        gap: "16px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "#17264A",
                          lineHeight: "1.4",
                        }}
                      >
                        {faq.question}
                      </span>
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "8px",
                          backgroundColor: isOpen ? "#EDF3FF" : "#F7F9FE",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: isOpen ? "#245CE8" : "#61708B",
                          flexShrink: 0,
                          transition: "all 0.2s ease",
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.2s ease",
                          }}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </button>

                    {isOpen && (
                      <div
                        style={{
                          padding: "0 24px 22px 24px",
                          color: "#61708B",
                          fontSize: "14px",
                          lineHeight: "1.7",
                          borderTop: "1px solid #F7F9FE",
                        }}
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  padding: "48px 24px",
                  textAlign: "center",
                  border: "1px solid #E6ECF6",
                }}
              >
                <p style={{ color: "#61708B", fontSize: "15px", marginBottom: "12px" }}>
                  No questions found matching &ldquo;{searchQuery}&rdquo;.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  style={{
                    backgroundColor: "#245CE8",
                    color: "#FFFFFF",
                    border: "none",
                    padding: "8px 18px",
                    borderRadius: "10px",
                    fontWeight: 600,
                    fontSize: "13px",
                    cursor: "pointer",
                  }}
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>

          {/* Need More Help Card */}
          <div
            style={{
              marginTop: "48px",
              backgroundColor: "#EDF3FF",
              borderRadius: "20px",
              padding: "36px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h3
                style={{
                  margin: "0 0 8px",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#17264A",
                }}
              >
                Still have questions?
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  color: "#61708B",
                  maxWidth: "480px",
                  lineHeight: "1.5",
                }}
              >
                Can&apos;t find what you&apos;re looking for? Reach out to our learner support team and we will respond within 2 hours.
              </p>
            </div>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#245CE8",
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: "14px",
                padding: "12px 24px",
                borderRadius: "12px",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(36, 92, 232, 0.25)",
              }}
            >
              Contact support team →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
