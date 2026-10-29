"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Careers", href: "/careers" },
    { label: "Events", href: "/events" },
    { label: "FAQ", href: "/faq" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
      style={{
        background: "rgba(11,15,25,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 flex-shrink-0">
        <div
          className="flex items-center justify-center w-8 h-8 rounded-lg"
          style={{ background: "#2563EB" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3L2 8l10 5 10-5-10-5zM2 16l10 5 10-5M2 12l10 5 10-5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="font-bold text-white text-sm">Learning Hub</span>
      </Link>

      {/* Desktop nav links */}
      <div className="hidden lg:flex items-center gap-5">
        {links.map((l) => (
          <Link key={l.label} href={l.href} className="nav-link">
            {l.label}
          </Link>
        ))}
      </div>

      {/* Auth buttons */}
      <div className="hidden lg:flex items-center gap-3">
        <Link
          href="/login"
          className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="btn-primary flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white"
        >
          Register
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14M12 5l7 7-7 7"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        className="lg:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          {menuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 p-4 flex flex-col gap-3 lg:hidden"
          style={{
            background: "rgba(11,15,25,0.97)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="nav-link py-1">
              {l.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-2 border-t border-white/10">
            <Link href="/login" className="flex-1 text-center py-2 text-sm text-slate-300">
              Login
            </Link>
            <Link
              href="/register"
              className="btn-primary flex-1 text-center py-2 rounded-full text-sm font-semibold text-white"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
