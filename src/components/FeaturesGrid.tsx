"use client";
import Link from "next/link";

export default function FeaturesGrid() {
  const features = [
    {
      title: "Courses",
      description: "Build in-demand skills with expert-led, hands-on courses.",
      iconBg: "#EFF6FF",
      iconColor: "#2563EB",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
      href: "/course",
    },
    {
      title: "Dashboard",
      description: "See your progress and celebrate every learning milestone.",
      iconBg: "#F5F3FF",
      iconColor: "#7C3AED",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
        </svg>
      ),
      href: "/dashboard",
    },
    {
      title: "AI Chatbot",
      description: "Get a little guidance, whenever inspiration strikes.",
      iconBg: "#ECFDF5",
      iconColor: "#059669",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4" />
          <line x1="8" y1="16" x2="8.01" y2="16" strokeWidth="3" />
          <line x1="16" y1="16" x2="16.01" y2="16" strokeWidth="3" />
        </svg>
      ),
      href: "/#ai-sidekick",
    },
    {
      title: "Careers",
      description: "Turn your new skills into your next big opportunity.",
      iconBg: "#FFF7ED",
      iconColor: "#EA580C",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      href: "/#careers",
    },
    {
      title: "Events",
      description: "Learn live, meet your people, and make something great.",
      iconBg: "#FFF1F2",
      iconColor: "#E11D48",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      href: "/#events",
    },
    {
      title: "FAQ",
      description: "Find clear answers and keep your learning moving.",
      iconBg: "#F0FDFA",
      iconColor: "#0D9488",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="3" />
        </svg>
      ),
      href: "/faq",
    },
    {
      title: "About Us",
      description: "Meet the team making quality learning open to everyone.",
      iconBg: "#FEF3C7",
      iconColor: "#D97706",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      href: "/about",
    },
    {
      title: "Contact Us",
      description: "A real team, ready to help you take the next step.",
      iconBg: "#F5F3FF",
      iconColor: "#8B5CF6",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      href: "/contact",
    },
  ];

  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "100px 0", borderTop: "1px solid #F1F5F9" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        
        {/* Section Header matching screenshot */}
        <div style={{ marginBottom: "44px" }}>
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
            ONE PLATFORM. ENDLESS POSSIBILITIES.
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
            Everything you need to move forward.
          </h2>

          <p style={{ color: "#64748B", fontSize: "16px", lineHeight: "1.5" }}>
            From your first lesson to your next career move. Make it happen here.
          </p>
        </div>

        {/* 2x4 Grid matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "22px",
                border: "1px solid #EEF2F6",
                padding: "24px 26px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "172px",
                transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="group hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-0.5"
            >
              {/* Top Row: Icon + Title on left, ↗ Arrow on right */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "14px",
                      backgroundColor: item.iconBg,
                      color: item.iconColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 
                    style={{ 
                      fontSize: "17px", 
                      fontWeight: 700, 
                      color: "#0F172A", 
                      letterSpacing: "-0.2px" 
                    }}
                    className="group-hover:text-blue-600 transition-colors"
                  >
                    {item.title}
                  </h3>
                </div>

                {/* ↗ Arrow */}
                <div 
                  style={{ color: "#475569" }}
                  className="group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>

              {/* Bottom Row: Description */}
              <p style={{ fontSize: "13.5px", color: "#64748B", lineHeight: "1.55", fontWeight: 400 }}>
                {item.description}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
