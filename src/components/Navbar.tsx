'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Dedicated full-screen or custom headers exist on these routes
  if (
    pathname === '/register' ||
    pathname === '/login' ||
    pathname === '/dashboard' ||
    pathname.startsWith('/learn')
  ) {
    return null;
  }

  // Student Portal header (Courses, Sources, Community, My Learning)
  const isStudentPortal =
    pathname.startsWith('/courses') ||
    pathname.startsWith('/sources') ||
    pathname.startsWith('/community') ||
    pathname === '/my-learning';

  if (isStudentPortal) {
    const isExplore = pathname === '/courses' || pathname === '/courses?tab=explore';
    const isMyLearning = pathname === '/my-learning' || pathname.includes('tab=my-learning');
    const isSources = pathname.startsWith('/sources');
    const isCommunity = pathname.startsWith('/community');

    return (
      <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo matching Screenshot 4 */}
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-xs">
                <BookOpen className="w-4 h-4 fill-current" />
              </div>
              <span className="font-bold text-lg text-slate-900 tracking-tight">
                Learning Hub
              </span>
            </Link>

            {/* Navigation Links - Clean 4-pillar Student Navigation */}
            <nav className="hidden sm:flex items-center gap-7">
              <Link
                href="/courses?tab=explore"
                className={`text-sm font-semibold transition-colors ${
                  isExplore ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                Explore courses
              </Link>
              <Link
                href="/courses?tab=my-learning"
                className={`text-sm font-semibold transition-colors ${
                  isMyLearning ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                My learning
              </Link>
              <Link
                href="/sources"
                className={`text-sm font-semibold transition-colors ${
                  isSources ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                Sources
              </Link>
              <Link
                href="/community"
                className={`text-sm font-semibold transition-colors ${
                  isCommunity ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                Community
              </Link>
            </nav>

            {/* Right Search & User Avatar */}
            <div className="flex items-center gap-4">
              <Link
                href="/dashboard"
                className="p-2 text-slate-500 hover:text-slate-800 transition-colors"
                aria-label="Student Overview"
                title="Student Dashboard Overview"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Link>

              <Link
                href="/dashboard"
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 ring-2 ring-slate-100 flex items-center justify-center text-white text-xs font-bold overflow-hidden hover:ring-blue-400 transition-all shadow-xs"
                title="Misgana Berhane — View Dashboard Overview"
              >
                MB
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Sources', href: '/sources' },
    { name: 'Careers', href: '/#careers' },
    { name: 'Events', href: '/#events' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo matching Figma */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm">
              <BookOpen className="w-5 h-5 fill-current" />
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight">
              Learning Hub
            </span>
          </Link>

          {/* Desktop Navigation links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href === '/courses' && pathname.startsWith('/courses'));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-all"
            >
              Register
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/register"
              className="px-3.5 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-md sm:hidden"
            >
              Register
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-50"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-sm font-medium text-slate-700 bg-slate-50 rounded-lg"
            >
              Login
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
