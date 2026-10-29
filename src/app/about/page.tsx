'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  BookOpen,
  Sparkles,
  Users,
  Award,
  Globe,
  ArrowRight,
  GraduationCap,
  Briefcase,
  CheckCircle2,
} from 'lucide-react';

export default function AboutUsPage() {
  const stats = [
    { label: 'Active Students', value: '10,000+' },
    { label: 'Ethiopian Universities', value: '15+' },
    { label: 'Industry Mentors', value: '200+' },
    { label: 'Course Completion Rate', value: '95%' },
  ];

  const values = [
    {
      title: 'Practical, Hands-on Skills',
      description:
        'We believe in learning by doing. Every course includes real-world projects that students can add directly to their professional portfolios.',
      icon: Sparkles,
      iconBg: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Accessible to Every Student',
      description:
        'Designed to be lightweight and accessible on campus Wi-Fi or mobile data across Addis Ababa, Jimma, Hawassa, Mekelle, and Bahir Dar.',
      icon: Globe,
      iconBg: 'bg-emerald-50 text-emerald-600',
    },
    {
      title: 'Direct Industry Pipelines',
      description:
        'We partner directly with leading Ethiopian tech companies, startups, and international firms to place certified graduates into internships and junior roles.',
      icon: Briefcase,
      iconBg: 'bg-purple-50 text-purple-600',
    },
    {
      title: 'AI-Enhanced Mentorship',
      description:
        'Our built-in AI learning companion gives every student a 24/7 personal tutor for instant concept clarification, code debugging, and study planning.',
      icon: GraduationCap,
      iconBg: 'bg-amber-50 text-amber-600',
    },
  ];

  const mentors = [
    {
      name: 'Dr. Solomon Abebe',
      role: 'Senior Product Designer at Notion',
      bio: 'Over 10 years experience crafting digital products for millions of daily active users.',
      initials: 'SA',
      bg: 'from-blue-600 to-indigo-600',
    },
    {
      name: 'Sarah Williams',
      role: 'Principal Software Engineer',
      bio: 'Full-stack specialist focusing on scalable distributed systems and modern web technologies.',
      initials: 'SW',
      bg: 'from-purple-600 to-pink-600',
    },
    {
      name: 'Alex Chen',
      role: 'Lead Data Scientist',
      bio: 'Machine learning practitioner passionate about democratizing data education across Africa.',
      initials: 'AC',
      bg: 'from-emerald-600 to-teal-600',
    },
    {
      name: 'Dr. Maya Patel',
      role: 'AI Research Director',
      bio: 'Pioneering multimodal AI workflows and intelligent tutoring systems for emerging talent.',
      initials: 'MP',
      bg: 'from-amber-600 to-orange-600',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-slate-900 pb-20">
      {/* Hero Banner */}
      <section className="bg-white border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 fill-blue-600" />
            <span>ABOUT LEARNING HUB</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight max-w-3xl leading-tight">
            Empowering the next generation of Ethiopian innovators &amp; builders.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Learning Hub is Ethiopia&apos;s premier Web3 and AI-powered educational ecosystem. We bridge the critical gap between university curriculums and high-growth industry careers.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all"
            >
              <span>Join as a Student</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-blue-600 text-white shadow-xl">
          {stats.map((s, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold">{s.value}</div>
              <div className="text-xs sm:text-sm font-medium text-blue-100">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              OUR MISSION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A university companion that transforms ambition into real-world achievement.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every year, thousands of talented students graduate from Ethiopian universities with strong theoretical foundations, yet struggle to secure tech roles due to practical skill gaps.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Learning Hub provides an end-to-end pathway: curated modern curriculums in UI/UX Design, Full-Stack Engineering, Data Science, and AI, combined with real-time peer collaborations and direct employer hiring pipelines.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-3 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero cost barriers for registered public university students</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Cryptographically verifiable completion certificates</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Quarterly national student hackathons with industry prizes</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100">
              <Image
                src="/images/hero.jpg"
                alt="Students collaborating at Learning Hub"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white border-y border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              OUR PILLARS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What sets Learning Hub apart.
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Built from the ground up to solve educational and employment challenges for African youth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 shadow-2xs space-y-4 hover:border-blue-300 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${v.iconBg}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{v.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            INDUSTRY INSTRUCTORS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Learn directly from the best in the field.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Our course curriculums are designed and taught by experienced industry practitioners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((m, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col items-center text-center space-y-3"
            >
              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-tr ${m.bg} flex items-center justify-center text-white text-xl font-bold shadow-md`}
              >
                {m.initials}
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">{m.name}</h4>
                <p className="text-xs font-medium text-blue-600">{m.role}</p>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to jumpstart your career?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Join thousands of Ethiopian university students already learning and building on Learning Hub.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/register"
              className="px-8 py-3.5 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-md transition-all"
            >
              Create Free Account
            </Link>
            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
            >
              Contact University Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
