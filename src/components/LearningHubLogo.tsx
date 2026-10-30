"use client";
import React from "react";
import Link from "next/link";

interface LearningHubLogoProps {
  href?: string;
  size?: "sm" | "md" | "lg";
  textColor?: string;
  onClick?: () => void;
  className?: string;
}

export default function LearningHubLogo({
  href = "/",
  size = "md",
  textColor = "#101935",
  onClick,
  className = "",
}: LearningHubLogoProps) {
  // Dimensions tailored to matching Image 1 exactly
  const dim = {
    sm: { box: 32, icon: 18, radius: 10, fontSize: "17px", gap: "9px" },
    md: { box: 38, icon: 22, radius: 12, fontSize: "20px", gap: "10px" },
    lg: { box: 44, icon: 26, radius: 14, fontSize: "23px", gap: "12px" },
  }[size];

  const content = (
    <div
      className={`inline-flex items-center ${className}`}
      style={{
        display: "inline-flex",
        flexDirection: "row",
        alignItems: "center",
        gap: dim.gap,
        textDecoration: "none",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {/* Blue Squircle Brand Mark matching Image 1 */}
      <div
        style={{
          width: `${dim.box}px`,
          height: `${dim.box}px`,
          backgroundColor: "#2F5BEA",
          borderRadius: `${dim.radius}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          boxShadow: "0 2px 6px rgba(47, 91, 234, 0.25)",
        }}
      >
        {/* White Open Book SVG matching Image 1 */}
        <svg
          width={dim.icon}
          height={dim.icon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Left page */}
          <path d="M4 19.5V6.5C4 5.4 4.9 4.5 6 4.5H11C11.5 4.5 12 5 12 5.5V18.5C11.5 18 9.5 17.5 6 17.5C4.8 17.5 4 18.3 4 19.5Z" />
          {/* Right page */}
          <path d="M20 19.5V6.5C20 5.4 19.1 4.5 18 4.5H13C12.5 4.5 12 5 12 5.5V18.5C12.5 18 14.5 17.5 18 17.5C19.2 17.5 20 18.3 20 19.5Z" />
        </svg>
      </div>

      {/* Brand Text matching Image 1 exact font and Navy color */}
      <span
        style={{
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontWeight: 800,
          fontSize: dim.fontSize,
          lineHeight: 1.15,
          color: textColor,
          letterSpacing: "-0.4px",
          display: "flex",
          alignItems: "center",
        }}
      >
        Learning Hub
      </span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: "none" }}>
        {content}
      </Link>
    );
  }

  return content;
}
