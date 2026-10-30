"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LearningHubLogo from "./LearningHubLogo";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/course" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Careers", href: "/#careers" },
    { label: "Events", href: "/#events" },
    { label: "FAQ", href: "/faq" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <header style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid #F1F5F9", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", height: "80px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        
        {/* Brand Logo matching Image 1 */}
        <LearningHubLogo size="md" />

        {/* Center Nav Links */}
        <nav className="hidden xl:flex" style={{ alignItems: "center", gap: "30px" }}>
          {links.map((item) => {
            const active = isLinkActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  fontSize: "14px",
                  fontWeight: active ? 700 : 500,
                  color: active ? "#2563EB" : "#64748B",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                  position: "relative",
                  paddingBottom: "4px",
                  borderBottom: active ? "2px solid #2563EB" : "2px solid transparent",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Buttons: Login (bordered) + Register (solid blue) */}
        <div className="hidden lg:flex" style={{ alignItems: "center", gap: "12px" }}>
          <Link
            href="/login"
            style={{
              padding: "9px 22px",
              borderRadius: "10px",
              border: "1px solid #E2E8F0",
              color: "#2563EB",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
              backgroundColor: "#FFFFFF",
              transition: "all 0.15s ease",
            }}
          >
            Login
          </Link>
          <Link
            href="/register"
            style={{
              padding: "10px 24px",
              borderRadius: "10px",
              backgroundColor: "#2563EB",
              color: "#FFFFFF",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
              border: "none",
              boxShadow: "0 2px 6px rgba(37,99,235,0.25)",
              transition: "all 0.15s ease",
            }}
          >
            Register
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden"
          style={{ background: "none", border: "none", cursor: "pointer", color: "#334155", padding: "6px" }}
          aria-label="Toggle Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #F1F5F9", padding: "16px 32px", display: "flex", flexDirection: "column", gap: "12px" }}>
          {links.map((item) => {
            const active = isLinkActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontSize: "15px",
                  fontWeight: active ? 700 : 500,
                  color: active ? "#2563EB" : "#64748B",
                  textDecoration: "none",
                  padding: "6px 0",
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <div style={{ display: "flex", gap: "10px", paddingTop: "12px", borderTop: "1px solid #F1F5F9" }}>
            <Link href="/login" style={{ flex: 1, textAlign: "center", padding: "10px", borderRadius: "8px", border: "1px solid #E2E8F0", color: "#2563EB", textDecoration: "none", fontWeight: 600, fontSize: "14px" }}>
              Login
            </Link>
            <Link href="/register" style={{ flex: 1, textAlign: "center", padding: "10px", borderRadius: "8px", backgroundColor: "#2563EB", color: "#FFFFFF", textDecoration: "none", fontWeight: 600, fontSize: "14px" }}>
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
