import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learning Hub | Learn New Skills. Build Your Future.",
  description:
    "Access 500+ expert-led courses, AI-powered learning paths, and real career opportunities. Join 10,000+ curious minds on Learning Hub.",
  keywords: "online learning, courses, AI education, career development, tech skills",
  openGraph: {
    title: "Learning Hub | Learn New Skills. Build Your Future.",
    description: "AI-powered learning platform for ambitious minds.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
