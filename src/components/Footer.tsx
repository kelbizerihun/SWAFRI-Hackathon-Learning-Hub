"use client";
import Link from "next/link";
import LearningHubLogo from "./LearningHubLogo";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0B132B", color: "#94A3B8", fontFamily: "inherit" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 32px 40px 32px" }}>
        
        {/* Top 4-Column Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16"
          style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}
        >
          
          {/* Column 1: Brand & Socials (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6">
            <div style={{ marginBottom: "20px" }}>
              <LearningHubLogo size="md" textColor="#FFFFFF" />
            </div>

            <p style={{ color: "#94A3B8", fontSize: "14px", lineHeight: "1.65", marginBottom: "26px", maxWidth: "320px" }}>
              A world of learning. A future of possibilities. Build yours with us.
            </p>

            {/* Social Icons matching Figma: LinkedIn, Instagram, YouTube, Facebook */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {/* 1. LinkedIn */}
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#94A3B8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  transition: "all 0.15s ease",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36m1.39 9.74v-8.37H5.07v8.37z" />
                </svg>
              </a>

              {/* 2. Instagram */}
              <a
                href="#instagram"
                aria-label="Instagram"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#94A3B8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  transition: "all 0.15s ease",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" />
                </svg>
              </a>

              {/* 3. YouTube */}
              <a
                href="#youtube"
                aria-label="YouTube"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#94A3B8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  transition: "all 0.15s ease",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* 4. Facebook */}
              <a
                href="#facebook"
                aria-label="Facebook"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#94A3B8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  transition: "all 0.15s ease",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Explore (2 cols) */}
          <div className="lg:col-span-2">
            <h4 style={{ fontWeight: 700, color: "#FFFFFF", fontSize: "15px", marginBottom: "22px", letterSpacing: "-0.2px" }}>
              Explore
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { name: "Courses", href: "/course" },
                { name: "Dashboard", href: "/dashboard" },
                { name: "Careers", href: "/#careers" },
                { name: "Events", href: "/#events" },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    style={{ color: "#94A3B8", textDecoration: "none", fontSize: "14px", fontWeight: 500, transition: "color 0.15s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Learning Hub (2 cols) */}
          <div className="lg:col-span-2">
            <h4 style={{ fontWeight: 700, color: "#FFFFFF", fontSize: "15px", marginBottom: "22px", letterSpacing: "-0.2px" }}>
              Learning Hub
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { name: "About Us", href: "/about" },
                { name: "Contact Us", href: "/contact" },
                { name: "FAQ", href: "/faq" },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    style={{ color: "#94A3B8", textDecoration: "none", fontSize: "14px", fontWeight: 500, transition: "color 0.15s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <h4 style={{ fontWeight: 700, color: "#FFFFFF", fontSize: "18px", marginBottom: "10px", letterSpacing: "-0.3px" }}>
              Keep your curiosity growing.
            </h4>
            <p style={{ color: "#94A3B8", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
              New courses, live events, and fresh opportunities. A little inspiration in your inbox.
            </p>

            {/* Input & Subscribe unified pill */}
            <form 
              onSubmit={(e) => e.preventDefault()} 
              style={{
                width: "100%",
                maxWidth: "460px",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "14px",
                padding: "6px 6px 6px 16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              }}
            >
              <input
                type="email"
                placeholder="Your email address"
                style={{
                  flex: 1,
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  padding: "6px 0",
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#2563EB",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "14px",
                  padding: "10px 22px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(37,99,235,0.4)",
                  transition: "background-color 0.15s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1D4ED8")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2563EB")}
              >
                Subscribe
              </button>
            </form>

            <p style={{ fontSize: "12px", color: "#64748B" }}>
              No spam. Just possibility. Unsubscribe anytime.
            </p>
          </div>

        </div>

        {/* Bottom Bar matching Figma */}
        <div style={{ paddingTop: "28px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px", fontSize: "13px", color: "#64748B" }}>
          <div>
            © 2026 Learning Hub. All rights reserved.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <Link 
              href="#privacy" 
              style={{ color: "#94A3B8", textDecoration: "none", transition: "color 0.15s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
            >
              Privacy Policy
            </Link>
            <Link 
              href="#terms" 
              style={{ color: "#94A3B8", textDecoration: "none", transition: "color 0.15s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
            >
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
