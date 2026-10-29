'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  ArrowRight,
  Star,
  BookOpen,
  Briefcase,
  Calendar,
  Layers,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Clock,
  MapPin,
  Bot,
  Send,
  Mail,
  Phone,
  CheckCircle2,
  Check,
  X,
  Building,
} from 'lucide-react';
import AIAssistantModal from '@/components/AIAssistantModal';

interface JobPosting {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  stipend: string;
  postedTime: string;
  tags: string[];
}

export default function HomePage() {
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  const [toastMessage, setToastMessage] = useState('');

  // Application form state
  const [applicantName, setApplicantName] = useState('Misgana Berhane');
  const [applicantEmail, setApplicantEmail] = useState('misghanaberhane@gmail.com');
  const [applicantResume, setApplicantResume] = useState('Misgana_CV_2026.pdf');
  const [isApplying, setIsApplying] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleApplyClick = (job: JobPosting) => {
    setSelectedJob(job);
    setApplyModalOpen(true);
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsApplying(true);
    setTimeout(() => {
      setIsApplying(false);
      setApplyModalOpen(false);
      showToast(`Application submitted successfully to ${selectedJob?.company}!`);
    }, 700);
  };

  // Only 4 Cards matching user requirement: Courses, Sources, Careers, Events
  const platformCategories = [
    {
      id: 'cat-courses',
      title: 'Courses',
      description: 'Explore world-class video courses and guided skill tracks.',
      icon: BookOpen,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      href: '/courses',
    },
    {
      id: 'cat-sources',
      title: 'Sources',
      description: 'Access downloadable Figma kits, code templates, and study cheatsheets.',
      icon: Layers,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      href: '/sources',
    },
    {
      id: 'cat-careers',
      title: 'Careers',
      description: 'Discover recently posted internships, junior roles, and hiring partners.',
      icon: Briefcase,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
      href: '#careers',
    },
    {
      id: 'cat-events',
      title: 'Events',
      description: 'Join live workshops, hackathons, and university tech webinars.',
      icon: Calendar,
      iconBg: 'bg-pink-50',
      iconColor: 'text-pink-600',
      href: '#events',
    },
  ];

  // Main Fields Sources or Slides that you can get
  const mainFieldSources = [
    {
      id: 'field-medicine',
      title: 'Medicine Department',
      category: 'Medicine',
      categoryBadge: 'Clinical Slides',
      instructor: 'By AAU College of Health Sciences',
      rating: 4.9,
      reviews: 480,
      resourceCount: '120+ Slides',
      imageUrl: '/images/medicine_sources.jpg',
      tagline: 'Human anatomy atlas slides, pharmacology reference charts, internal medicine lecture notes, and pathology exam archives.',
      href: '/sources?category=Medicine',
    },
    {
      id: 'field-engineering',
      title: 'Engineering Department',
      category: 'Engineering',
      categoryBadge: 'CAD & Schematics',
      instructor: 'By Addis Ababa Institute of Technology (AAiT)',
      rating: 4.9,
      reviews: 610,
      resourceCount: '95+ Slides',
      imageUrl: '/images/engineering_sources.jpg',
      tagline: 'Electrical circuit schematics, structural mechanics problem sets, CAD blueprint templates, and software architecture slides.',
      href: '/sources?category=Engineering',
    },
    {
      id: 'field-law',
      title: 'Law Department',
      category: 'Law',
      categoryBadge: 'Cases & Codes',
      instructor: 'By AAU School of Law & Jurisprudence',
      rating: 4.8,
      reviews: 340,
      resourceCount: '85+ Slides',
      imageUrl: '/images/law_sources.jpg',
      tagline: 'Ethiopian Civil Code summaries, constitutional law slide decks, supreme court case precedents, and moot court trial briefs.',
      href: '/sources?category=Law',
    },
    {
      id: 'field-social',
      title: 'Social Department',
      category: 'Social Science',
      categoryBadge: 'Field Archives',
      instructor: 'By AAU College of Social Sciences',
      rating: 4.8,
      reviews: 290,
      resourceCount: '75+ Slides',
      imageUrl: '/images/social_sources.jpg',
      tagline: 'Sociology research methodology decks, Ethiopian economic history archives, development policy papers, and anthropology field notes.',
      href: '/sources?category=Social+Sciences',
    },
  ];

  // Recently Posted Careers matching user requirement
  const recentCareers: JobPosting[] = [
    {
      id: 'job-1',
      title: 'Product Design Intern',
      company: 'FinTech Solutions Addis Ababa',
      location: 'Addis Ababa (Bole) · On-site',
      type: 'Paid Internship',
      stipend: '35,000 ETB / mo',
      postedTime: 'Posted today',
      tags: ['Figma', 'UI Design', 'Mobile'],
    },
    {
      id: 'job-2',
      title: 'Junior Frontend Developer (React/Next.js)',
      company: 'Tech Ethiopia Labs',
      location: 'Addis Ababa · Hybrid',
      type: 'Full-time Entry Level',
      stipend: '45,000 ETB / mo',
      postedTime: 'Posted yesterday',
      tags: ['React', 'TypeScript', 'Tailwind'],
    },
    {
      id: 'job-3',
      title: 'Data Analytics Associate',
      company: 'Nile Insights & Growth Advisory',
      location: 'Addis Ababa · Remote Option',
      type: 'Full-time Entry Level',
      stipend: '42,000 ETB / mo',
      postedTime: '2 days ago',
      tags: ['Python', 'SQL', 'Pandas'],
    },
    {
      id: 'job-4',
      title: 'AI / ML Research Intern',
      company: 'Ethio AI Research Center',
      location: 'Addis Ababa (Kazanchis) · On-site',
      type: 'Research Fellowship',
      stipend: '38,000 ETB / mo',
      postedTime: '3 days ago',
      tags: ['PyTorch', 'LLMs', 'Python'],
    },
    {
      id: 'job-5',
      title: 'Full-Stack Developer Intern',
      company: 'Sheba Tech Hub',
      location: 'Addis Ababa · Hybrid',
      type: 'Paid Internship',
      stipend: '36,000 ETB / mo',
      postedTime: '4 days ago',
      tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    },
  ];


  return (
    <div className="flex flex-col w-full bg-white text-slate-900 font-sans relative">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-24 right-8 z-50 px-4 py-3 rounded-2xl bg-slate-900 text-white text-xs font-semibold shadow-2xl flex items-center gap-2 animate-bounce">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* =========================================================================
          SECTION 1: HERO
      ========================================================================== */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 bg-gradient-to-b from-[#F7F9FD] via-[#F8FAFD] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                <span>ALL-IN-ONE LEARNING PLATFORM</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Learn New Skills. <br />
                <span className="text-blue-600">Build Your Future.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Access high-quality courses, AI-powered learning, career opportunities, and live events in one platform.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm active:scale-95 transition-all"
                >
                  <span>Start Learning</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/courses?tab=explore"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs transition-all"
                >
                  Explore Courses
                </Link>
              </div>


            </div>

            {/* Right Hero Graphic */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-md bg-[#F3F0FA]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/hero.jpg"
                    alt="Students collaborating with AI assistant"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-xs font-semibold text-blue-600 flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                  <span>AI-Powered Learning</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs z-10 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">A little progress every day</h4>
                    <p className="text-[11px] text-slate-500">Learn seamlessly, achieve more.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ONE PLATFORM FOR EVERYTHING (4 Cards: Courses, Sources, Careers, Events)
      ========================================================================== */}
      <section className="py-20 bg-[#F9FAFC] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              ONE PLATFORM FOR EVERYTHING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Everything you need to move forward.
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              From your first lesson to your next career move, we&apos;ve got you covered.
            </p>
          </div>

          {/* Exactly 4 Cards Grid as requested */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformCategories.map((item) => {
              const IconComp = item.icon;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="group p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform ${item.iconBg}`}>
                        <IconComp className={`w-6 h-6 ${item.iconColor}`} />
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: MAIN FIELDS SOURCES OR SLIDES THAT YOU CAN GET
      ========================================================================== */}
      <section id="popular-courses" className="py-20 bg-white border-t border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                MAIN FIELDS SOURCES &amp; SLIDES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Main fields sources or slides that you can get
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl">
                Access verified university lecture slide decks, clinical handbooks, engineering CAD schematics, and court legal archives curated directly from premier Ethiopian faculties.
              </p>
            </div>
            <Link
              href="/sources"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>View all sources</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 4 Department Source Cards Grid: Medicine, Engineering, Law, Social */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainFieldSources.map((c) => (
              <div
                key={c.id}
                className="group flex flex-col rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-200 overflow-hidden justify-between"
              >
                <div>
                  <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                    <Image
                      src={c.imageUrl}
                      alt={c.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/95 backdrop-blur-xs text-slate-800 shadow-xs">
                        {c.category}
                      </span>
                      <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-blue-600 text-white shadow-xs">
                        {c.categoryBadge}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {c.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium line-clamp-1">
                      {c.instructor}
                    </p>

                    <div className="flex items-center justify-between text-xs text-slate-600 pt-2 border-t border-slate-100">
                      <div className="flex items-center gap-1 text-amber-500 font-semibold">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{c.rating}</span>
                        <span className="text-slate-400 font-normal">({c.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-500">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{c.resourceCount}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {c.tagline}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0">
                  <Link
                    href={c.href}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-semibold text-blue-600 bg-blue-50/80 hover:bg-blue-600 hover:text-white transition-all duration-150"
                  >
                    <span>View Slides &amp; Sources</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: UPCOMING LIVE WORKSHOPS & HACKATHONS
      ========================================================================== */}
      <section id="events" className="py-20 bg-[#F9FAFC] border-t border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                LIVE INTERACTIVE EVENTS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Live Workshops &amp; Hackathons
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Hands-on weekend sprints, design critiques, and national student challenges.
              </p>
            </div>
            <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700">
              3 Upcoming this month
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-purple-50 text-purple-700">
                  WORKSHOP
                </span>
                <span className="text-xs text-slate-400 font-mono">OCT 12 · 10:00 AM</span>
              </div>
              <h4 className="text-base font-bold text-slate-900">
                Design Your First Portfolio-Ready Mobile Screen
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Hands-on Figma masterclass with Dr. Solomon Abebe. Audit interfaces and build production components.
              </p>
              <Link
                href="/register"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                <span>Register for free</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700">
                  WEBINAR
                </span>
                <span className="text-xs text-slate-400 font-mono">OCT 18 · 02:00 PM</span>
              </div>
              <h4 className="text-base font-bold text-slate-900">
                Your Next Chapter: A Career in Tech in 2026
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Panel discussion with engineering leads from FinTech Solutions and Sheba Tech Hub on landing junior roles.
              </p>
              <Link
                href="/register"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                <span>Register for free</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700">
                  HACKATHON
                </span>
                <span className="text-xs text-slate-400 font-mono">OCT 24 · 48H SPRINT</span>
              </div>
              <h4 className="text-base font-bold text-slate-900">
                Build with AI: National Student Weekend Challenge
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Team up with peers across Ethiopian universities. 50,000 ETB prize pool + internship interviews for winners.
              </p>
              <Link
                href="/register"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                <span>Join Hackathon</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: STATS BANNER
      ========================================================================== */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-blue-400/40">
            <div className="space-y-1 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">10,000+</div>
              <div className="text-xs sm:text-sm font-medium text-blue-100">Students Enrolled</div>
            </div>
            <div className="space-y-1 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">500+</div>
              <div className="text-xs sm:text-sm font-medium text-blue-100">Curated Courses</div>
            </div>
            <div className="space-y-1 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">200+</div>
              <div className="text-xs sm:text-sm font-medium text-blue-100">Expert Mentors</div>
            </div>
            <div className="space-y-1 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">95%</div>
              <div className="text-xs sm:text-sm font-medium text-blue-100">Completion Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CAREER PATHWAYS (Recently Posted Careers)
      ========================================================================== */}
      <section id="careers" className="py-20 bg-[#F9FAFC] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                CAREER PATHWAYS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Recently posted opportunities.
              </h2>
              <p className="text-sm text-slate-600">
                Fresh tech roles and internships from innovative companies hiring directly from Learning Hub.
              </p>
            </div>
            <Link
              href="/register"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>Explore all career postings</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Job Postings Cards */}
          <div className="space-y-4">
            {recentCareers.map((job) => (
              <div
                key={job.id}
                className="group p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-200 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {job.title}
                      </h4>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {job.postedTime}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 flex flex-wrap items-center gap-2">
                      <span className="font-semibold text-slate-700">{job.company}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span className="text-blue-600 font-medium">{job.stipend}</span>
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {job.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="sm:text-right shrink-0">
                  <button
                    onClick={() => handleApplyClick(job)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-xs active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: ABOUT US (id="about")
      ========================================================================== */}
      <section id="about" className="py-20 bg-[#F9FAFC] border-t border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                ABOUT LEARNING HUB
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Empowering the next generation of Ethiopian innovators.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Learning Hub is an EdTech platform built to bridge the gap between classroom theory and modern industry demands. We provide university students with interactive curriculums, an AI study companion, and direct career pipelines.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <h4 className="text-xs font-bold text-slate-900">World-Class Mentors</h4>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Curriculums created by engineers and designers from Notion, Google, and African tech leaders.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <h4 className="text-xs font-bold text-slate-900">AI-Powered Growth</h4>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Instant 24/7 concept breakdown and code review tailored to individual learning paces.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm"
                >
                  <span>Join Our Community Today</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/11] rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white">
                <Image
                  src="/images/hero.jpg"
                  alt="Learning Hub Mission"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* =========================================================================
          FLOATING AI ASSISTANT ICON (User requested floating icon on right bottom)
      ========================================================================== */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <button
          onClick={() => setAiModalOpen(true)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center border-2 border-white cursor-pointer"
          aria-label="Open AI Learning Assistant"
          title="Open AI Learning Assistant"
        >
          <Bot className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
        </button>

        <div className="absolute right-16 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-slate-900 text-white text-xs px-3 py-1.5 rounded-xl shadow-lg">
          Ask AI Assistant ✨
        </div>
      </div>

      {/* =========================================================================
          JOB APPLICATION MODAL
      ========================================================================== */}
      {applyModalOpen && selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 space-y-5 relative">
            <button
              onClick={() => setApplyModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                JOB APPLICATION
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                {selectedJob.title}
              </h3>
              <p className="text-xs text-slate-500">
                {selectedJob.company} · {selectedJob.location}
              </p>
            </div>

            <form onSubmit={handleApplySubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-800">Full Name</label>
                <input
                  type="text"
                  required
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-800">Email Address</label>
                <input
                  type="email"
                  required
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-800">Attached Student CV / Portfolio</label>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-700">{applicantResume}</span>
                  <span className="text-emerald-600 font-semibold">Attached ✓</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setApplyModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isApplying}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-xs"
                >
                  {isApplying ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* AI Assistant Modal */}
      <AIAssistantModal isOpen={aiModalOpen} onClose={() => setAiModalOpen(false)} />
    </div>
  );
}
