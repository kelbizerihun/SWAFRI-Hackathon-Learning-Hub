"use client";
import Link from "next/link";

export default function CoursesSection() {
  const courses = [
    {
      id: 1,
      tag: "Design",
      tagBg: "rgba(255, 255, 255, 0.95)",
      tagColor: "#7C3AED",
      title: "UI/UX Design Essentials",
      instructor: "By Sarah Chen",
      rating: "4.9",
      reviews: "248",
      hours: "6 hours",
      progress: 35,
      image: "/images/course-design.png",
    },
    {
      id: 2,
      tag: "Development",
      tagBg: "rgba(255, 255, 255, 0.95)",
      tagColor: "#2563EB",
      title: "Full-Stack Web Development",
      instructor: "By Alex Morgan",
      rating: "4.8",
      reviews: "312",
      hours: "24 hours",
      progress: 12,
      image: "/images/course-dev.png",
    },
    {
      id: 3,
      tag: "Data science",
      tagBg: "rgba(255, 255, 255, 0.95)",
      tagColor: "#059669",
      title: "Data Science with Python",
      instructor: "By Priya Patel",
      rating: "4.9",
      reviews: "186",
      hours: "18 hours",
      progress: 0,
      image: "/images/course-data.png",
    },
    {
      id: 4,
      tag: "Artificial intelligence",
      tagBg: "rgba(255, 255, 255, 0.95)",
      tagColor: "#D97706",
      title: "AI for Everyday Productivity",
      instructor: "By James Wilson",
      rating: "4.9",
      reviews: "204",
      hours: "4 hours",
      progress: 0,
      image: "/images/course-ai-figma.png",
    },
  ];

  return (
    <section id="courses" style={{ backgroundColor: "#FFFFFF", padding: "100px 0", borderTop: "1px solid #F1F5F9" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        
        {/* Section Header matching screenshot */}
        <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "44px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            {/* Tag: LEARN SOMETHING THAT MATTERS */}
            <div 
              style={{ 
                fontSize: "12px", 
                fontWeight: 800, 
                color: "#2563EB", 
                letterSpacing: "0.8px", 
                textTransform: "uppercase", 
                marginBottom: "14px" 
              }}
            >
              LEARN SOMETHING THAT MATTERS
            </div>

            {/* Headline: Small steps. Powerful skills. */}
            <h2 
              style={{ 
                fontSize: "clamp(34px, 4vw, 44px)", 
                fontWeight: 900, 
                color: "#0F172A", 
                letterSpacing: "-1.2px", 
                lineHeight: "1.15", 
                marginBottom: "10px" 
              }}
            >
              Small steps. Powerful skills.
            </h2>

            {/* Subtitle */}
            <p style={{ color: "#64748B", fontSize: "16px", lineHeight: "1.5" }}>
              Explore community favorites, taught by people who do it every day.
            </p>
          </div>

          <Link
            href="/course"
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "8px", 
              fontSize: "15px", 
              fontWeight: 700, 
              color: "#2563EB", 
              textDecoration: "none",
              transition: "color 0.15s ease" 
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#1D4ED8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#2563EB")}
          >
            <span>View all courses</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* 4 Columns Grid matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "22px",
                border: "1px solid #EEF2F6",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="group hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1"
            >
              
              {/* Thumbnail Container */}
              <div 
                style={{ 
                  position: "relative", 
                  width: "100%", 
                  height: "185px", 
                  backgroundColor: "#F1F5F9", 
                  overflow: "hidden" 
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={course.image}
                  alt={course.title}
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover",
                    transition: "transform 0.3s ease" 
                  }}
                  className="group-hover:scale-105"
                />

                {/* Floating Category Pill on top-left of image (card 4 already has it in the image) */}
                {course.id !== 4 && (
                  <div style={{ position: "absolute", top: "14px", left: "14px", zIndex: 10 }}>
                    <span
                      style={{
                        display: "inline-block",
                        backgroundColor: course.tagBg,
                        color: course.tagColor,
                        fontSize: "11px",
                        fontWeight: 700,
                        padding: "4px 12px",
                        borderRadius: "9999px",
                        backdropFilter: "blur(6px)",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                      }}
                    >
                      {course.tag}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div style={{ padding: "20px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
                
                {/* Title */}
                <h3 
                  style={{ 
                    fontSize: "17px", 
                    fontWeight: 800, 
                    color: "#0F172A", 
                    letterSpacing: "-0.2px", 
                    lineHeight: 1.3, 
                    marginBottom: "6px" 
                  }}
                  className="group-hover:text-blue-600 transition-colors"
                >
                  {course.title}
                </h3>

                {/* Instructor */}
                <p style={{ fontSize: "13px", color: "#64748B", marginBottom: "16px", fontWeight: 400 }}>
                  {course.instructor}
                </p>

                {/* Rating & Hours */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "13px", color: "#64748B", marginBottom: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <span style={{ color: "#F59E0B", fontSize: "14px" }}>★</span>
                    <span style={{ fontWeight: 800, color: "#0F172A" }}>{course.rating}</span>
                    <span style={{ color: "#94A3B8", fontSize: "12px" }}>({course.reviews})</span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#64748B", fontSize: "12px" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{course.hours}</span>
                  </div>
                </div>

                {/* Progress */}
                <div style={{ marginBottom: "22px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", marginBottom: "8px" }}>
                    <span style={{ color: "#64748B", fontWeight: 500 }}>Your progress</span>
                    <span style={{ color: "#2563EB", fontWeight: 800 }}>{course.progress}%</span>
                  </div>
                  
                  {/* Progress Bar Container */}
                  <div style={{ width: "100%", height: "5px", backgroundColor: "#F1F5F9", borderRadius: "9999px", overflow: "hidden" }}>
                    <div 
                      style={{ 
                        height: "100%", 
                        width: `${course.progress}%`, 
                        backgroundColor: "#2563EB", 
                        borderRadius: "9999px",
                        transition: "width 0.4s ease" 
                      }} 
                    />
                  </div>
                </div>

                {/* Full-width Soft Blue 'Enroll Now →' Button matching screenshot */}
                <div style={{ marginTop: "auto" }}>
                  <Link
                    href="/course"
                    style={{
                      width: "100%",
                      padding: "11px 18px",
                      borderRadius: "12px",
                      backgroundColor: "#EFF6FF",
                      color: "#2563EB",
                      fontSize: "13px",
                      fontWeight: 700,
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      textDecoration: "none",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <span>Enroll Now</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
