'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  ChevronUp,
  Search,
  Sparkles,
  HelpCircle,
  BookOpen,
  Award,
  Users,
  Briefcase,
  ArrowRight,
} from 'lucide-react';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
    '0': true,
  });

  const categories = ['All', 'Courses & Learning', 'Certificates', 'Careers & Jobs', 'AI Assistant'];

  const faqs = [
    {
      id: '0',
      category: 'Courses & Learning',
      q: 'How does Learning Hub work?',
      a: 'Learning Hub is an all-in-one educational platform tailored for university students in Ethiopia. You get access to structured curriculums, interactive video masterclasses, downloadable source materials, an AI study assistant, and direct career placement pipelines.',
    },
    {
      id: '1',
      category: 'Courses & Learning',
      q: 'Are the courses free for university students?',
      a: 'Yes! Core foundational courses, community study groups, hackathon entries, and student workspace tools are completely free for students registered with their university email or student ID.',
    },
    {
      id: '2',
      category: 'Certificates',
      q: 'How do I earn verified certificates?',
      a: 'Once you complete all module lessons, quizzes, and project checkpoints in a curriculum (such as UI/UX Design or Web Development), your verified Certificate of Completion is automatically generated with a unique credential ID and QR verification link.',
    },
    {
      id: '3',
      category: 'Courses & Learning',
      q: 'Which Ethiopian universities are supported?',
      a: 'We support students across all Ethiopian higher education institutions including Addis Ababa University, Jimma University, Hawassa University, Mekelle University, Bahir Dar University, and all technology faculties.',
    },
    {
      id: '4',
      category: 'AI Assistant',
      q: 'How does the floating AI Assistant help with my learning?',
      a: 'The floating AI Companion is accessible from anywhere on the platform via the bottom-right circular icon. You can ask it to explain complex concepts, debug code snippets, draft study schedules, or summarize lecture notes 24/7.',
    },
    {
      id: '5',
      category: 'Careers & Jobs',
      q: 'How do job applications and career pathways work?',
      a: 'Innovative tech companies and startups regularly post internships, junior developer roles, and design positions on Learning Hub. You can apply directly with your student profile and completed course certificates.',
    },
    {
      id: '6',
      category: 'Courses & Learning',
      q: 'Can I access course materials offline?',
      a: 'Yes. Lesson summaries, cheatsheets, and coding exercises are designed with lightweight data footprints and can be downloaded or saved locally for offline study.',
    },
    {
      id: '7',
      category: 'Careers & Jobs',
      q: 'How do companies verify my course completion?',
      a: 'Every certificate issued has a tamper-proof credential ID and a direct verification URL that employers can inspect to see your verified grades and final project demo.',
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-slate-900 pb-20">
      {/* FAQ Banner */}
      <section className="bg-white border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 fill-blue-600" />
            <span>HELP &amp; SUPPORT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
            Everything you need to know about Learning Hub courses, certificates, AI tutor, and career placement.
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto relative pt-2">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, course, or question..."
              className="w-full h-12 pl-12 pr-4 rounded-2xl border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 shadow-xs"
            />
          </div>
        </div>
      </section>

      {/* Category Pills & Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-8">
        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = !!openItems[faq.id];
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-slate-200/90 overflow-hidden bg-white shadow-2xs transition-colors"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-slate-50/80 transition-colors"
                  >
                    <div className="space-y-1 pr-4">
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                        {faq.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {faq.q}
                      </h3>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#F9FAFC]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 space-y-2">
              <p className="text-sm font-semibold text-slate-700">No matching questions found</p>
              <p className="text-xs text-slate-500">
                Try searching with different keywords or browse all categories.
              </p>
            </div>
          )}
        </div>

        {/* Still have questions */}
        <div className="p-8 rounded-3xl bg-blue-50 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900">Still have a question?</h4>
            <p className="text-xs text-slate-600">
              Can&apos;t find what you&apos;re looking for? Reach out to our campus support team.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-xs shrink-0 flex items-center gap-2"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
