'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  BookOpen,
  LayoutDashboard,
  Compass,
  Award,
  Target,
  Users,
  Bot,
  Bookmark,
  Settings,
  HelpCircle,
  Bell,
  Search,
  ChevronDown,
  ArrowRight,
  Clock,
  CheckCircle2,
  TrendingUp,
  Flame,
  Sparkles,
  Lock,
  ExternalLink,
  ChevronRight,
  X,
  Download,
  Share2,
  Plus,
  Play,
  LogOut,
  User,
  ShieldCheck,
  Check,
} from 'lucide-react';
import AIAssistantModal from '@/components/AIAssistantModal';

interface GoalItem {
  id: string;
  title: string;
  current: string;
  subtext: string;
  percent: number;
  dueDate: string;
  completed: boolean;
}

export default function DashboardPage() {
  const router = useRouter();

  // Navigation state
  const [activeTab, setActiveTab] = useState<'overview' | 'learning' | 'certificates' | 'community' | 'saved'>('overview');

  // Modals & Popovers
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<any>(null);
  const [toastMessage, setToastMessage] = useState('');
  const [goalModalOpen, setGoalModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [dateDropdownOpen, setDateDropdownOpen] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  // Search state
  const [searchQuery, setSearchQuery] = useState('');

  // Date range state
  const [selectedDateRange, setSelectedDateRange] = useState('Oct 19 – 25, 2026');

  // Interactive Chart state
  const [selectedDay, setSelectedDay] = useState('Sun');

  // Weekly hours data
  const weeklyHours = [
    { day: 'Mon', hours: 1.0, height: '50%', date: 'Oct 19' },
    { day: 'Tue', hours: 1.5, height: '75%', date: 'Oct 20' },
    { day: 'Wed', hours: 0.5, height: '25%', date: 'Oct 21' },
    { day: 'Thu', hours: 2.0, height: '100%', date: 'Oct 22' },
    { day: 'Fri', hours: 1.0, height: '50%', date: 'Oct 23' },
    { day: 'Sat', hours: 1.5, height: '75%', date: 'Oct 24' },
    { day: 'Sun', hours: 1.0, height: '50%', date: 'Oct 25', isCurrent: true },
  ];

  // Learning goals state
  const [goals, setGoals] = useState<GoalItem[]>([
    {
      id: 'g1',
      title: 'Reach 10 study hours',
      current: '8.5 of 10 hrs',
      subtext: 'Just 1.5 hours to go',
      percent: 85,
      dueDate: 'Oct 25',
      completed: false,
    },
    {
      id: 'g2',
      title: 'Finish the pandas module',
      current: '3 of 5 lessons completed',
      subtext: '2 lessons remaining',
      percent: 60,
      dueDate: 'Oct 28',
      completed: false,
    },
    {
      id: 'g3',
      title: 'Earn your Python certificate',
      current: '18 of 24 lessons completed',
      subtext: 'Capstone project pending',
      percent: 75,
      dueDate: 'Nov 1',
      completed: false,
    },
  ]);

  // New goal form state
  const [newGoalTitle, setNewGoalTitle] = useState('');
  const [newGoalDue, setNewGoalDue] = useState('Nov 5');

  // Enrolled courses for "My Learning" tab
  const [enrolledCourses] = useState([
    {
      id: 'c-python',
      title: 'Python for Data Science',
      module: 'Module 5 of 6: Exploring data with pandas',
      progress: 75,
      lessons: '18 of 24 completed',
      badge: 'Active Now',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      href: '/learn/ui-design',
    },
    {
      id: 'c-ui',
      title: 'UI Design Fundamentals',
      module: 'Module 1 of 5: Seeing like a designer',
      progress: 35,
      lessons: '2 of 28 completed',
      badge: 'In Progress',
      color: 'bg-purple-50 text-purple-700 border-purple-200',
      href: '/learn/ui-design',
    },
    {
      id: 'c-web',
      title: 'Full-Stack Web Development',
      module: 'Module 2 of 10: Modern React & TypeScript',
      progress: 20,
      lessons: '8 of 42 completed',
      badge: 'In Progress',
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      href: '/courses/ui-design',
    },
  ]);

  // Certificates list
  const [certificates] = useState([
    {
      id: 'cert-sql',
      title: 'SQL Foundations & Relational DBs',
      date: 'Oct 23, 2026',
      number: '6th certificate',
      code: 'LH-2026-SQL-98214',
      issuer: 'Dr. Solomon Abebe',
    },
    {
      id: 'cert-python-basics',
      title: 'Python Fundamentals & Syntax',
      date: 'Sep 15, 2026',
      number: '5th certificate',
      code: 'LH-2026-PY-54129',
      issuer: 'Alex Chen',
    },
    {
      id: 'cert-html-css',
      title: 'Modern Responsive HTML & CSS',
      date: 'Aug 28, 2026',
      number: '4th certificate',
      code: 'LH-2026-WEB-29140',
      issuer: 'Sarah Williams',
    },
  ]);

  // Keyboard shortcut for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleGoal = (id: string) => {
    setGoals((prev) =>
      prev.map((g) => (g.id === id ? { ...g, completed: !g.completed } : g))
    );
  };

  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGoalTitle.trim()) return;
    const newG: GoalItem = {
      id: `g-${Date.now()}`,
      title: newGoalTitle,
      current: '0 of 1 completed',
      subtext: 'Just started',
      percent: 0,
      dueDate: newGoalDue,
      completed: false,
    };
    setGoals((prev) => [...prev, newG]);
    setNewGoalTitle('');
    setGoalModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col lg:flex-row font-sans relative">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-20 right-8 z-50 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold shadow-xl flex items-center gap-2 animate-bounce">
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}
      {/* =========================================================================
          LEFT SIDEBAR matching Screenshot 3
      ========================================================================== */}
      <aside className="w-full lg:w-64 bg-white border-r border-slate-200 flex flex-col justify-between shrink-0 select-none">
        <div>
          {/* Brand Logo */}
          <div className="h-16 px-6 flex items-center border-b border-slate-100">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
                <BookOpen className="w-4 h-4 fill-current" />
              </div>
              <span className="font-bold text-base text-slate-900 tracking-tight">
                Learning Hub
              </span>
            </Link>
          </div>

          {/* Navigation Section 1: YOUR WORKSPACE */}
          <div className="px-4 py-5 space-y-1">
            <div className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              YOUR WORKSPACE
            </div>

            {/* Overview */}
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold transition-colors text-left ${
                activeTab === 'overview'
                  ? 'text-blue-700 bg-blue-50/80 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <LayoutDashboard className={`w-4 h-4 ${activeTab === 'overview' ? 'text-blue-600' : 'text-slate-500'}`} />
                <span>Overview</span>
              </div>
            </button>

            {/* My Learning */}
            <button
              onClick={() => setActiveTab('learning')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-colors text-left ${
                activeTab === 'learning'
                  ? 'text-blue-700 bg-blue-50/80 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 text-slate-500" />
                <span>My learning</span>
              </div>
              <span className="px-1.5 py-0.5 text-[11px] font-bold rounded-md bg-slate-100 text-slate-600">
                03
              </span>
            </button>

            {/* Explore Courses */}
            <Link
              href="/courses"
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            >
              <Compass className="w-4 h-4 text-slate-500" />
              <span>Explore courses</span>
            </Link>

            {/* Sources & Study Kits */}
            <Link
              href="/sources"
              className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Bookmark className="w-4 h-4 text-slate-500" />
                <span>Sources &amp; Kits</span>
              </div>
              <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-md bg-emerald-50 text-emerald-700">
                New
              </span>
            </Link>

            {/* My Certificates */}
            <button
              onClick={() => setActiveTab('certificates')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors text-left ${
                activeTab === 'certificates'
                  ? 'text-blue-700 bg-blue-50/80 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Award className="w-4 h-4 text-slate-500" />
              <span>My certificates</span>
            </button>

            {/* Learning Goals */}
            <button
              onClick={() => {
                setActiveTab('overview');
                const el = document.getElementById('goals-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors text-left"
            >
              <Target className="w-4 h-4 text-slate-500" />
              <span>Learning goals</span>
            </button>

            {/* Community (Social Media Hub) */}
            <Link
              href="/community"
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 transition-colors text-left group"
            >
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 text-slate-500 group-hover:text-blue-600" />
                <span>Community</span>
              </div>
              <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-md bg-blue-50 text-blue-700">
                Social
              </span>
            </Link>
          </div>

          {/* Navigation Section 2: LEARN BETTER */}
          <div className="px-4 py-2 space-y-1">
            <div className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              LEARN BETTER
            </div>
            <button
              onClick={() => setAiModalOpen(true)}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 transition-colors text-left"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>AI study companion</span>
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors text-left ${
                activeTab === 'saved'
                  ? 'text-blue-700 bg-blue-50/80 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Bookmark className="w-4 h-4 text-slate-500" />
              <span>Saved resources</span>
            </button>
          </div>

          {/* Promo Card: "A little help. A big leap." matching Screenshot 3 */}
          <div className="p-4 mx-4 my-3 rounded-2xl bg-gradient-to-br from-[#F5F3FF] to-[#EDE9FE] border border-purple-200/80 space-y-2">
            <div className="w-7 h-7 rounded-lg bg-purple-600/10 text-purple-700 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-slate-900">A little help. A big leap.</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Turn a tricky topic into your next breakthrough.
            </p>
            <button
              onClick={() => setAiModalOpen(true)}
              className="pt-1 text-[11px] font-semibold text-purple-700 hover:text-purple-800 flex items-center gap-1 transition-colors"
            >
              <span>Meet your AI companion</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-100 space-y-2">
          <button
            onClick={() => alert('Settings: Account details & notification preferences.')}
            className="w-full flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors text-left"
          >
            <Settings className="w-4 h-4 text-slate-400" />
            <span>Settings</span>
          </button>
          <Link
            href="/#faq"
            className="flex items-center gap-3 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            <HelpCircle className="w-4 h-4 text-slate-400" />
            <span>Help &amp; support</span>
          </Link>

          {/* User Account Card with Profile Dropdown matching Screenshot 3 */}
          <div className="relative pt-2 border-t border-slate-100">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="w-full flex items-center justify-between p-1 rounded-xl hover:bg-slate-50 transition-colors text-left"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                  MB
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    Misgana Berhane
                  </div>
                  <div className="text-[10px] text-slate-400">Personal account</div>
                </div>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>

            {profileOpen && (
              <div className="absolute bottom-14 left-0 right-0 bg-white border border-slate-200 shadow-xl rounded-2xl p-2 z-50 space-y-1">
                <div className="px-3 py-2 border-b border-slate-100">
                  <p className="text-xs font-bold text-slate-900">Misgana Berhane</p>
                  <p className="text-[11px] text-slate-500">Addis Ababa University · CS</p>
                </div>
                <button
                  onClick={() => router.push('/login')}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors text-left"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* =========================================================================
          MAIN WORKSPACE DASHBOARD CONTENT
      ========================================================================== */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar matching Screenshot 3 */}
        <header className="h-16 px-6 lg:px-10 bg-white border-b border-slate-200 flex items-center justify-between sticky top-0 z-30">
          {/* Breadcrumb matching Screenshot 3 */}
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span className="hover:text-blue-600 cursor-pointer" onClick={() => setActiveTab('overview')}>
              My workspace
            </span>
            <span>/</span>
            <span className="text-slate-900 font-semibold capitalize">{activeTab}</span>
          </div>

          {/* Search & Notification & Profile Avatar */}
          <div className="flex items-center gap-4">
            {/* Search Input matching Screenshot 3 */}
            <div
              onClick={() => setSearchModalOpen(true)}
              className="relative hidden sm:flex items-center cursor-pointer group"
            >
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 group-hover:text-blue-600 transition-colors" />
              <input
                type="text"
                readOnly
                placeholder="Search your learning"
                className="w-64 pl-9 pr-12 py-1.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 cursor-pointer group-hover:border-slate-300 focus:outline-none transition-colors"
              />
              <span className="absolute right-2.5 top-2 px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400 bg-slate-200/60">
                ⌘ K
              </span>
            </div>

            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setNotificationOpen(!notificationOpen)}
                className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 relative transition-colors"
                aria-label="Notifications"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-600 ring-2 ring-white" />
              </button>

              {notificationOpen && (
                <div className="absolute right-0 mt-2 w-80 rounded-2xl bg-white border border-slate-200 shadow-xl p-3 z-50 space-y-2">
                  <div className="text-xs font-bold text-slate-900 pb-2 border-b border-slate-100 flex items-center justify-between">
                    <span>Notifications (3)</span>
                    <button
                      onClick={() => setNotificationOpen(false)}
                      className="text-[10px] text-blue-600 font-normal hover:underline"
                    >
                      Mark all read
                    </button>
                  </div>
                  <div className="p-2.5 rounded-xl bg-blue-50/70 text-xs space-y-1">
                    <p className="font-bold text-slate-900">Module 5 unlocked! 🎉</p>
                    <p className="text-[11px] text-slate-500">
                      You are ready to start Exploring data with pandas in Python for Data Science.
                    </p>
                  </div>
                  <div
                    onClick={() => {
                      setNotificationOpen(false);
                      setCertModalOpen(true);
                    }}
                    className="p-2.5 rounded-xl hover:bg-slate-50 text-xs space-y-1 cursor-pointer transition-colors"
                  >
                    <p className="font-bold text-slate-900">Certificate ready to view</p>
                    <p className="text-[11px] text-slate-500">
                      SQL Foundations certificate issued. Click to view &amp; download.
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl hover:bg-slate-50 text-xs space-y-1">
                    <p className="font-bold text-slate-900">Upcoming Workshop</p>
                    <p className="text-[11px] text-slate-500">
                      Design your first portfolio app starts Oct 12 at 10:00 AM EAT.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* User Avatar matching Screenshot 3 */}
            <div
              onClick={() => setProfileOpen(!profileOpen)}
              className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow-xs cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all"
            >
              MB
            </div>
          </div>
        </header>

        {/* Dashboard Main Scrollable Area */}
        <main className="flex-1 p-6 lg:p-10 space-y-8 max-w-7xl w-full mx-auto">
          {/* TAB 1: OVERVIEW (Screenshot 3 exact match) */}
          {activeTab === 'overview' && (
            <>
              {/* Greeting Header & Date Filter */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Small steps. Real progress, Misgana.
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    You&apos;re building momentum. Here&apos;s how your learning is coming along.
                  </p>
                </div>

                {/* Date Range Selector matching Screenshot 3 */}
                <div className="relative">
                  <button
                    onClick={() => setDateDropdownOpen(!dateDropdownOpen)}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{selectedDateRange}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-1" />
                  </button>

                  {dateDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 shadow-lg rounded-xl p-1 z-40 text-xs">
                      {['Oct 19 – 25, 2026', 'Oct 12 – 18, 2026', 'Oct 05 – 11, 2026'].map((range) => (
                        <button
                          key={range}
                          onClick={() => {
                            setSelectedDateRange(range);
                            setDateDropdownOpen(false);
                          }}
                          className={`w-full px-3 py-2 rounded-lg text-left transition-colors ${
                            selectedDateRange === range
                              ? 'bg-blue-50 text-blue-700 font-bold'
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* =========================================================================
                  ROW 1: PICK UP WHERE YOU LEFT OFF & COURSE COMPLETION DONUT
              ========================================================================== */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* Pick Up Hero Card (approx 8 cols) */}
                <div className="lg:col-span-8 p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between relative overflow-hidden group">
                  <div className="space-y-2 max-w-md z-10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                      PICK UP WHERE YOU LEFT OFF
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      Python for Data Science
                    </h2>
                    <p className="text-xs font-semibold text-slate-600">
                      Up next: Exploring data with pandas
                    </p>
                    <p className="text-xs text-slate-400">
                      Module 5 of 6 · Lesson 19 · 24 min
                    </p>
                  </div>

                  <div className="pt-6 z-10">
                    <Link
                      href="/learn/ui-design"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm active:scale-95 transition-all"
                    >
                      <span>Continue learning</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* Right 3D Laptop Graphic matching Screenshot 3 */}
                  <div className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 w-48 h-48 opacity-90 pointer-events-none group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/images/dashboard_laptop.jpg"
                      alt="3D Analytics Laptop"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Course Completion Donut Card (approx 4 cols) */}
                <div className="lg:col-span-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-slate-900">Course completion</h3>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700">
                      On track
                    </span>
                  </div>

                  {/* Circular Progress & Stats matching Screenshot 3 */}
                  <div className="py-4 flex items-center gap-5">
                    {/* SVG Donut 75% */}
                    <div className="relative w-20 h-20 shrink-0">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-slate-100"
                          strokeWidth="3.5"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-blue-600 transition-all duration-1000"
                          strokeDasharray="75, 100"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-sm font-extrabold text-slate-900">75%</span>
                        <span className="text-[9px] text-slate-400">complete</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-sm font-extrabold text-slate-900">
                        18 <span className="text-xs font-normal text-slate-500">of 24 lessons</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-tight">
                        Just 6 lessons to your next certificate. You&apos;ve got this.
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/courses/ui-design"
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
                  >
                    <span>View course details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* =========================================================================
                  ROW 2: 4 STAT METRIC CARDS matching Screenshot 3
              ========================================================================== */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {/* 1: Study hours this week */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-4 hover:border-slate-300 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-500">Study hours this week</p>
                    <h3 className="text-2xl font-extrabold text-slate-900 mt-0.5">8.5 hrs</h3>
                    <p className="text-[11px] text-emerald-600 font-medium">↑ 2 hrs vs. last week</p>
                  </div>
                </div>

                {/* 2: Lessons this week */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-4 hover:border-slate-300 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-500">Lessons this week</p>
                    <h3 className="text-2xl font-extrabold text-slate-900 mt-0.5">14</h3>
                    <p className="text-[11px] text-slate-400">Across 3 active courses</p>
                  </div>
                </div>

                {/* 3: Completed courses */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-4 hover:border-slate-300 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-500">Completed courses</p>
                    <h3 className="text-2xl font-extrabold text-slate-900 mt-0.5">8</h3>
                    <p className="text-[11px] text-slate-400">2 completed this month</p>
                  </div>
                </div>

                {/* 4: Certificates earned */}
                <div
                  onClick={() => setActiveTab('certificates')}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-4 cursor-pointer hover:border-slate-300 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-500">Certificates earned</p>
                    <h3 className="text-2xl font-extrabold text-slate-900 mt-0.5">6</h3>
                    <p className="text-[11px] text-slate-400">Your skills, recognized</p>
                  </div>
                </div>
              </div>

              {/* =========================================================================
                  ROW 3: ACTIVITY, STREAK & GOALS matching Screenshot 3
              ========================================================================== */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Column (8 cols) */}
                <div className="lg:col-span-8 space-y-6">
                  {/* Your Week in Learning Bar Chart matching Screenshot 3 */}
                  <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-bold text-slate-900">Your week in learning</h3>
                        <p className="text-xs text-slate-500">A little consistency adds up to a lot.</p>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <span className="w-2.5 h-2.5 rounded-sm bg-blue-600" />
                        <span>Study hours</span>
                      </div>
                    </div>

                    {/* Interactive Bar Chart Graphic */}
                    <div className="pt-6 pb-2">
                      <div className="h-44 flex items-end justify-between gap-3 px-2 border-b border-slate-100">
                        {weeklyHours.map((item) => (
                          <div
                            key={item.day}
                            onClick={() => setSelectedDay(item.day)}
                            className="flex-1 flex flex-col items-center gap-2 h-full justify-end group cursor-pointer"
                          >
                            <span className="text-[10px] font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                              {item.hours}h
                            </span>
                            <div className="w-full max-w-[36px] bg-slate-100 rounded-t-lg h-full flex items-end overflow-hidden">
                              <div
                                className={`w-full rounded-t-lg transition-all duration-300 ${
                                  item.day === selectedDay
                                    ? 'bg-blue-600 shadow-sm'
                                    : 'bg-blue-200 group-hover:bg-blue-400'
                                }`}
                                style={{ height: item.height }}
                              />
                            </div>
                            <span
                              className={`text-xs ${
                                item.day === selectedDay
                                  ? 'font-bold text-blue-600'
                                  : 'font-medium text-slate-500'
                              }`}
                            >
                              {item.day}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-1 flex items-center gap-2 text-xs text-slate-600">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                      <span>
                        <strong className="text-emerald-600">31% more time learning</strong> than last week&apos;s 6.5 hours.
                      </span>
                    </div>
                  </div>

                  {/* Milestones Worth Celebrating matching Screenshot 3 */}
                  <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-bold text-slate-900">Milestones worth celebrating</h3>
                        <span className="text-xs text-slate-400 font-medium">7 earned</span>
                      </div>
                      <button
                        onClick={() => setActiveTab('certificates')}
                        className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                      >
                        <span>View all</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* 4 Badges in Grid matching Screenshot 3 */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                      <div className="p-3.5 rounded-xl border border-amber-200/80 bg-amber-50/40 space-y-1.5 flex flex-col items-center">
                        <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm">
                          🏆
                        </div>
                        <div className="text-xs font-bold text-slate-900">First finish</div>
                        <div className="text-[10px] text-slate-500">Completed your first course</div>
                      </div>

                      <div className="p-3.5 rounded-xl border border-blue-200/80 bg-blue-50/40 space-y-1.5 flex flex-col items-center">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                          📈
                        </div>
                        <div className="text-xs font-bold text-slate-900">Data explorer</div>
                        <div className="text-[10px] text-slate-500">Completed 5 data courses</div>
                      </div>

                      <div className="p-3.5 rounded-xl border border-purple-200/80 bg-purple-50/40 space-y-1.5 flex flex-col items-center">
                        <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-sm">
                          🌅
                        </div>
                        <div className="text-xs font-bold text-slate-900">Early bird</div>
                        <div className="text-[10px] text-slate-500">5 lessons before 9 AM</div>
                      </div>

                      <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1.5 flex flex-col items-center opacity-75">
                        <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-500 flex items-center justify-center">
                          <Lock className="w-4 h-4" />
                        </div>
                        <div className="text-xs font-bold text-slate-700">Consistency</div>
                        <div className="text-[10px] text-slate-400">Next up · 14-day streak</div>
                      </div>
                    </div>

                    {/* Certificate Banner Item matching Screenshot 3 */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">
                            SQL Foundations - Course completed
                          </div>
                          <div className="text-[11px] text-slate-500">
                            Certificate earned Oct 23, 2026 · Your 6th certificate
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => setCertModalOpen(true)}
                        className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 shrink-0"
                      >
                        <span>View certificate</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column (4 cols) */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Keep the Spark Alive Streak Card matching Screenshot 3 */}
                  <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-bold text-slate-900">Keep the spark alive</h3>
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                        <Flame className="w-4 h-4 fill-current text-amber-500" />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-extrabold text-slate-900">12</span>
                        <span className="text-sm font-bold text-slate-700">day learning streak</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">Your longest streak yet. Keep going!</p>
                    </div>

                    {/* Days of Week Checkmarks matching Screenshot 3 */}
                    <div className="flex items-center justify-between pt-2">
                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                        <div key={i} className="flex flex-col items-center gap-1.5">
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                              i === 6
                                ? 'bg-blue-600 text-white shadow-xs'
                                : 'bg-blue-50 text-blue-600 border border-blue-200'
                            }`}
                          >
                            ✓
                          </div>
                          <span className="text-[11px] font-medium text-slate-400">{day}</span>
                        </div>
                      ))}
                    </div>

                    {/* Streak unlock message matching Screenshot 3 */}
                    <div className="p-3 rounded-xl bg-purple-50 text-purple-700 border border-purple-100 flex items-center gap-2 text-xs">
                      <Sparkles className="w-3.5 h-3.5 shrink-0" />
                      <span>
                        <strong>2 more days</strong> to unlock the Consistency badge.
                      </span>
                    </div>
                  </div>

                  {/* Upcoming Learning Goals Card matching Screenshot 3 */}
                  <div id="goals-section" className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-bold text-slate-900">Upcoming learning goals</h3>
                      <button
                        onClick={() => setGoalModalOpen(true)}
                        className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                      >
                        Edit goals
                      </button>
                    </div>

                    <div className="space-y-4 pt-1">
                      {goals.map((g) => (
                        <div
                          key={g.id}
                          onClick={() => toggleGoal(g.id)}
                          className="p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors cursor-pointer space-y-2 group"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2.5">
                              <div
                                className={`w-5 h-5 rounded-full flex items-center justify-center text-xs transition-colors shrink-0 ${
                                  g.completed
                                    ? 'bg-emerald-600 text-white'
                                    : 'border border-slate-300 text-transparent group-hover:border-blue-500'
                                }`}
                              >
                                ✓
                              </div>
                              <div>
                                <h4
                                  className={`text-xs font-bold transition-colors ${
                                    g.completed ? 'line-through text-slate-400' : 'text-slate-900'
                                  }`}
                                >
                                  {g.title}
                                </h4>
                                <p className="text-[11px] text-slate-400">{g.current}</p>
                              </div>
                            </div>
                            <span className="text-[10px] font-semibold text-slate-400 shrink-0">
                              {g.dueDate}
                            </span>
                          </div>

                          {/* Progress Bar */}
                          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-blue-600 rounded-full transition-all duration-300"
                              style={{ width: `${g.completed ? 100 : g.percent}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* TAB 2: MY LEARNING */}
          {activeTab === 'learning' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-slate-900">My Enrolled Courses</h1>
                  <p className="text-xs text-slate-500 mt-1">
                    Continue your active courses or revisit finished lessons.
                  </p>
                </div>
                <Link
                  href="/courses"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700"
                >
                  Explore More
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enrolledCourses.map((c) => (
                  <div key={c.id} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold border ${c.color}`}>
                          {c.badge}
                        </span>
                        <span className="text-xs font-bold text-blue-600">{c.progress}%</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900">{c.title}</h3>
                      <p className="text-xs text-slate-500">{c.module}</p>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: `${c.progress}%` }} />
                      </div>
                    </div>

                    <Link
                      href={c.href}
                      className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-2"
                    >
                      <span>Resume Lesson</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: MY CERTIFICATES */}
          {activeTab === 'certificates' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-extrabold text-slate-900">Earned Certificates (6)</h1>
                <p className="text-xs text-slate-500 mt-1">
                  Verified credentials recognizing your mastery across courses.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificates.map((cert) => (
                  <div key={cert.id} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                        <Award className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold text-slate-400">{cert.date}</span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-slate-900">{cert.title}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Instructor: {cert.issuer}</p>
                      <p className="text-[11px] font-mono text-slate-400 mt-1">ID: {cert.code}</p>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedCert(cert);
                          setCertModalOpen(true);
                        }}
                        className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors cursor-pointer"
                      >
                        View Certificate
                      </button>
                      <Link
                        href={`/verify?id=${encodeURIComponent(cert.code)}`}
                        className="px-3 py-2 rounded-xl text-xs font-semibold border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Verify On-Chain</span>
                      </Link>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(cert.code);
                          showToast(`Credential ID ${cert.code} copied to clipboard!`);
                        }}
                        className="px-3 py-2 rounded-xl text-xs font-semibold border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        Copy ID
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: COMMUNITY */}
          {activeTab === 'community' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-extrabold text-slate-900">Student &amp; Peer Community</h1>
                  <p className="text-xs text-slate-500 mt-1">
                    Connect with learners across Ethiopian universities and international design hubs.
                  </p>
                </div>
                <Link
                  href="/community"
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-colors self-start sm:self-auto"
                >
                  <Users className="w-4 h-4" />
                  <span>Open Full Social Feed</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Social Media Preview Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white space-y-3 relative overflow-hidden shadow-md">
                <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-400/20 text-cyan-300 text-[11px] font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>CAMPUS SOCIAL NETWORK LIVE</span>
                </div>
                <h3 className="text-lg font-black text-white">
                  Join 4,200+ Ethiopian University Students Sharing Code, Designs &amp; Hackathon Projects
                </h3>
                <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                  Post code snippets, get feedback from verified mentors like Dr. Solomon Abebe, discuss past exam questions, and form teams for the AAU 2026 Innovation Challenge.
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <Link
                    href="/community"
                    className="px-4 py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-bold transition-all shadow-sm"
                  >
                    Go to Community Feed
                  </Link>
                  <Link
                    href="/sources"
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all"
                  >
                    Browse Student Sources
                  </Link>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-sm font-bold text-slate-900">Featured Study Circles</h3>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Addis Ababa UI/UX Builders Circle</h4>
                      <p className="text-[11px] text-slate-500">142 active design students · Next meeting Friday 4 PM EAT</p>
                    </div>
                    <Link
                      href="/community"
                      className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
                    >
                      View Circle
                    </Link>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Python &amp; ML Research Group</h4>
                      <p className="text-[11px] text-slate-500">218 members · Working on pandas data analysis capstone</p>
                    </div>
                    <Link
                      href="/community"
                      className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
                    >
                      View Circle
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: SAVED RESOURCES */}
          {activeTab === 'saved' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-extrabold text-slate-900">Saved Resources &amp; Kits</h1>
                <p className="text-xs text-slate-500 mt-1">
                  Your bookmarked Figma files, cheat sheets, and lecture notes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                      FIG
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">UI Design Starter Kit .fig</h4>
                      <p className="text-[11px] text-slate-500">Figma component library · 4.2 MB</p>
                    </div>
                  </div>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Downloading UI Design Starter Kit .fig');
                    }}
                    className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs">
                      PDF
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">8pt Spatial Grid Cheatsheet</h4>
                      <p className="text-[11px] text-slate-500">Quick reference guide · 1.1 MB</p>
                    </div>
                  </div>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Downloading 8pt Spatial Grid Cheatsheet PDF');
                    }}
                    className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Footer note matching Screenshot 3 */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <p>Every lesson is an investment in your future.</p>
            <p>All learning activity shown in your local time - EDT</p>
          </div>
        </main>
      </div>

      {/* =========================================================================
          MODALS & OVERLAYS
      ========================================================================== */}

      {/* 1. Verified Certificate Modal */}
      {certModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl space-y-6 border border-slate-100 relative">
            <button
              onClick={() => setCertModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Certificate Header */}
            <div className="text-center space-y-2 border-b border-slate-100 pb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>OFFICIAL VERIFIED CREDENTIAL</span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Certificate of Completion
              </h2>
              <p className="text-xs text-slate-500">
                This certifies that the recipient has demonstrated comprehensive subject mastery.
              </p>
            </div>

            {/* Certificate Core Body */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-200 text-center space-y-3">
              <div className="flex items-center justify-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
                  ERC-5192 Soulbound NFT
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Polygon PoS Ledger
                </span>
              </div>
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest block pt-1">
                PROUDLY PRESENTED TO
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                Misgana Berhane
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                for successfully completing all curriculum requirements, assessments, and projects in
              </p>
              <p className="text-base font-extrabold text-blue-600">
                {selectedCert?.title || 'SQL Foundations & Relational Database Architecture'}
              </p>
              <div className="pt-4 grid grid-cols-2 gap-4 border-t border-slate-200/80 text-xs text-slate-500">
                <div>
                  <span className="block text-[10px] text-slate-400">ISSUED ON</span>
                  <strong>{selectedCert?.date || 'October 23, 2026'}</strong>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400">CREDENTIAL ID</span>
                  <strong className="font-mono text-blue-700">{selectedCert?.code || 'LH-2026-SQL-98214'}</strong>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <Link
                href={`/verify?id=${encodeURIComponent(selectedCert?.code || 'LH-2026-SQL-98214')}`}
                className="px-4 py-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verify On-Chain Explorer</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => showToast('Certificate downloaded as high-resolution PDF.')}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
                <button
                  onClick={() => setCertModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Goal Editor Modal */}
      {goalModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-5 border border-slate-100 relative">
            <button
              onClick={() => setGoalModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="text-lg font-bold text-slate-900">Add Learning Goal</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Set a milestone to stay focused and track your study routine.
              </p>
            </div>

            <form onSubmit={handleAddGoal} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-800">
                  Goal Title *
                </label>
                <input
                  type="text"
                  required
                  value={newGoalTitle}
                  onChange={(e) => setNewGoalTitle(e.target.value)}
                  placeholder="e.g. Complete Figma Auto-Layout challenge"
                  className="w-full h-11 px-3.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-800">
                  Target Due Date
                </label>
                <input
                  type="text"
                  value={newGoalDue}
                  onChange={(e) => setNewGoalDue(e.target.value)}
                  placeholder="e.g. Nov 5"
                  className="w-full h-11 px-3.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setGoalModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700"
                >
                  Save Goal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 3. Spotlight Search Modal (Cmd+K) */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center pt-20 p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden space-y-2">
            <div className="p-4 border-b border-slate-100 flex items-center gap-3">
              <Search className="w-5 h-5 text-slate-400" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, lessons, certificates, or topics..."
                className="w-full text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
              />
              <button
                onClick={() => setSearchModalOpen(false)}
                className="px-2 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-500"
              >
                ESC
              </button>
            </div>

            <div className="p-3 max-h-80 overflow-y-auto divide-y divide-slate-100 text-xs">
              <Link
                href="/learn/ui-design"
                onClick={() => setSearchModalOpen(false)}
                className="p-3 rounded-xl hover:bg-slate-50 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Play className="w-4 h-4 text-blue-600" />
                  <div>
                    <h5 className="font-bold text-slate-900 group-hover:text-blue-600">
                      Python for Data Science · Exploring data with pandas
                    </h5>
                    <p className="text-[11px] text-slate-400">Lesson 19 · 24 min video</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              <Link
                href="/courses/ui-design"
                onClick={() => setSearchModalOpen(false)}
                className="p-3 rounded-xl hover:bg-slate-50 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4 text-purple-600" />
                  <div>
                    <h5 className="font-bold text-slate-900 group-hover:text-blue-600">
                      UI Design Fundamentals · Dr. Solomon Abebe
                    </h5>
                    <p className="text-[11px] text-slate-400">5 modules · 28 lessons · 6h 20m</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>

              <div
                onClick={() => {
                  setSearchModalOpen(false);
                  setCertModalOpen(true);
                }}
                className="p-3 rounded-xl hover:bg-slate-50 flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <div>
                    <h5 className="font-bold text-slate-900 group-hover:text-blue-600">
                      SQL Foundations Certificate
                    </h5>
                    <p className="text-[11px] text-slate-400">Issued Oct 23, 2026 · Credential ID</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. AI Study Companion Modal */}
      <AIAssistantModal isOpen={aiModalOpen} onClose={() => setAiModalOpen(false)} />
    </div>
  );
}
