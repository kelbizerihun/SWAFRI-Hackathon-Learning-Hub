import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Learning Hub | Learn New Skills. Build Your Future.",
  description:
    "Access 500+ expert-led courses, AI-powered learning paths, and real career opportunities. Join 10,000+ curious minds on Learning Hub.",
  icons: {
    icon: "/images/learning-hub-logo.png",
    shortcut: "/images/learning-hub-logo.png",
    apple: "/images/learning-hub-logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
