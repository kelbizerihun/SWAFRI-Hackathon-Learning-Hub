"use client";
import Link from "next/link";

export default function EventsSection() {
  const events = [
    {
      month: "NOV",
      day: "12",
      dateColor: "#7C3AED",
      dateBg: "#FAF5FF",
      tag: "Workshop",
      tagBg: "#F3E8FF",
      tagColor: "#7C3AED",
      title: "Design your first portfolio-ready app",
      speaker: "With Sarah Chen · Product Designer",
      details: "Online · 4:00 PM UTC · 90 min",
      info: "Free · 42 spots left",
    },
    {
      month: "NOV",
      day: "18",
      dateColor: "#2563EB",
      dateBg: "#EFF6FF",
      tag: "Webinar",
      tagBg: "#EFF6FF",
      tagColor: "#2563EB",
      title: "Your next chapter: a career in tech",
      speaker: "With Daniel Brooks · Career Coach",
      details: "Online · 6:00 PM UTC · 60 min",
      info: "Free · Open to everyone",
    },
    {
      month: "NOV",
      day: "24",
      dateColor: "#059669",
      dateBg: "#ECFDF5",
      tag: "Hackathon",
      tagBg: "#ECFDF5",
      tagColor: "#059669",
      title: "Build with AI: the weekend challenge",
      speaker: "Hosted by the Learning Hub community",
      details: "Online · 10:00 AM UTC · 48 hours",
      info: "Free · Teams welcome",
    },
  ];

  return (
    <section id="events" style={{ backgroundColor: "#FFFFFF", padding: "100px 0", borderTop: "1px solid #F1F5F9" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        
        {/* Section Header */}
        <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "44px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            {/* Tag matching screenshot: PUT SOMETHING GOOD ON YOUR CALENDAR */}
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
              PUT SOMETHING GOOD ON YOUR CALENDAR
            </div>

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
              Learn together. Go further.
            </h2>

            <p style={{ color: "#64748B", fontSize: "16px", lineHeight: "1.5" }}>
              Fresh ideas, real connections, and a community that cheers you on.
            </p>
          </div>

          <Link
            href="/register"
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
            <span>View all events</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((item) => (
            <div
              key={item.title}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #EEF2F6",
                borderRadius: "24px",
                padding: "26px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "290px",
                transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="group hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50"
            >
              <div>
                {/* Top Row: Date Box on Left, Tag on Right */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "22px" }}>
                  <div
                    style={{
                      width: "56px",
                      height: "62px",
                      borderRadius: "14px",
                      backgroundColor: item.dateBg,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      color: item.dateColor,
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ fontSize: "11px", fontWeight: 800, letterSpacing: "0.6px", lineHeight: 1 }}>
                      {item.month}
                    </span>
                    <span style={{ fontSize: "24px", fontWeight: 900, lineHeight: 1, marginTop: "4px" }}>
                      {item.day}
                    </span>
                  </div>

                  <span
                    style={{
                      backgroundColor: item.tagBg,
                      color: item.tagColor,
                      fontSize: "12px",
                      fontWeight: 700,
                      padding: "5px 14px",
                      borderRadius: "9999px",
                      display: "inline-block",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Event Title */}
                <h3 
                  style={{ 
                    fontSize: "18px", 
                    fontWeight: 800, 
                    color: "#0F172A", 
                    letterSpacing: "-0.3px", 
                    lineHeight: "1.3", 
                    marginBottom: "8px" 
                  }}
                  className="group-hover:text-blue-600 transition-colors"
                >
                  {item.title}
                </h3>

                {/* Speaker / Host */}
                <p style={{ fontSize: "13px", color: "#64748B", marginBottom: "10px", fontWeight: 400 }}>
                  {item.speaker}
                </p>

                {/* Details row with video camera icon */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#64748B", marginBottom: "22px" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                  <span>{item.details}</span>
                </div>
              </div>

              {/* Bottom Row: Free/spots on left, White outline 'Register →' button on right */}
              <div style={{ paddingTop: "18px", borderTop: "1px solid #F1F5F9", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "13px", color: "#64748B", fontWeight: 400 }}>
                  {item.info}
                </span>

                <Link
                  href="/register"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: "12px",
                    padding: "8px 18px",
                    color: "#2563EB",
                    fontSize: "13px",
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
                    transition: "all 0.15s ease",
                  }}
                  className="hover:border-blue-400 hover:bg-blue-50/50"
                >
                  <span>Register</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
