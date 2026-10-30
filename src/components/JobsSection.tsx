"use client";
import Link from "next/link";

export default function JobsSection() {
  const opportunities = [
    {
      title: "Product Design Intern",
      company: "Forma Studio · Hybrid · 3–6 months",
      tag: "Internship",
      tagStyle: "bg-[#F3E8FF] text-[#7C3AED]",
      iconBg: "bg-[#F5F3FF] text-[#8B5CF6]",
      icon: (
        /* Pen tool / nib icon matching screenshot */
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      ),
    },
    {
      title: "Junior Frontend Developer",
      company: "Orbit Technologies · Worldwide · Full-time",
      tag: "Remote job",
      tagStyle: "bg-[#EFF6FF] text-[#2563EB]",
      iconBg: "bg-[#EFF6FF] text-[#2563EB]",
      icon: (
        /* Code brackets </> icon matching screenshot */
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="7 8 3 12 7 16" />
          <polyline points="17 8 21 12 17 16" />
          <line x1="14" y1="5" x2="10" y2="19" />
        </svg>
      ),
    },
    {
      title: "Google Data Analytics Certificate",
      company: "Professional certification · Self-paced · Industry-recognized",
      tag: "Certification",
      tagStyle: "bg-[#ECFDF5] text-[#059669]",
      iconBg: "bg-[#ECFDF5] text-[#059669]",
      icon: (
        /* Badge / Rosette with checkmark matching screenshot */
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <polyline points="8.5 12 11 14.5 15.5 10" />
        </svg>
      ),
    },
  ];

  return (
    <section id="careers" style={{ backgroundColor: "#FAFBFD", padding: "100px 0", borderTop: "1px solid #F1F5F9" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-4">
            
            {/* Tag matching screenshot: LEARN IT. LIVE IT. */}
            <div 
              style={{ 
                fontSize: "12px", 
                fontWeight: 800, 
                color: "#2563EB", 
                letterSpacing: "0.8px", 
                textTransform: "uppercase", 
                marginBottom: "24px" 
              }}
            >
              LEARN IT. LIVE IT.
            </div>

            {/* Headline matching screenshot line breaks and punctuation */}
            <h2 
              style={{ 
                fontSize: "clamp(38px, 4.4vw, 52px)", 
                fontWeight: 900, 
                color: "#0F172A", 
                letterSpacing: "-1.5px", 
                lineHeight: "1.08", 
                marginBottom: "24px" 
              }}
            >
              Your skills. <br />
              Your next <br />
              opportunity.
            </h2>

            {/* Subtitle matching screenshot text */}
            <p 
              style={{ 
                color: "#64748B", 
                fontSize: "16px", 
                lineHeight: "1.65", 
                maxWidth: "380px", 
                marginBottom: "36px" 
              }}
            >
              Take your learning into the real world. Discover internships, remote jobs, and certifications that open doors.
            </p>

            {/* Blue Button matching screenshot */}
            <Link
              href="/course"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "#2563EB",
                color: "#FFFFFF",
                fontSize: "15px",
                fontWeight: 600,
                padding: "13px 26px",
                borderRadius: "12px",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(37,99,235,0.28)",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1D4ED8";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#2563EB";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span>View Careers</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right Column: 3 Horizontal Cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {opportunities.map((item) => (
              <Link
                key={item.title}
                href="/course"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #EEF2F6",
                  borderRadius: "22px",
                  padding: "22px 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                  transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
                className="group hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50"
              >
                {/* Left: Icon + Text Info */}
                <div style={{ display: "flex", alignItems: "center", gap: "18px", minWidth: 0 }}>
                  <div 
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${item.iconBg}`}
                  >
                    {item.icon}
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <h3 
                      style={{ 
                        fontSize: "17px", 
                        fontWeight: 700, 
                        color: "#0F172A", 
                        letterSpacing: "-0.2px",
                        lineHeight: 1.3
                      }} 
                      className="group-hover:text-blue-600 transition-colors truncate"
                    >
                      {item.title}
                    </h3>
                    <p 
                      style={{ 
                        fontSize: "13px", 
                        color: "#64748B", 
                        fontWeight: 400, 
                        marginTop: "3px" 
                      }} 
                      className="truncate"
                    >
                      {item.company}
                    </p>
                  </div>
                </div>

                {/* Right: Pill Tag + ↗ Arrow matching screenshot */}
                <div style={{ display: "flex", alignItems: "center", gap: "18px", flexShrink: 0 }}>
                  <span 
                    className={`inline-block text-[12px] font-semibold px-4 py-1.5 rounded-full ${item.tagStyle}`}
                  >
                    {item.tag}
                  </span>

                  {/* ↗ Arrow */}
                  <div 
                    style={{ 
                      color: "#334155", 
                      transition: "transform 0.15s ease, color 0.15s ease" 
                    }}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-600"
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
