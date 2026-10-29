'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import {
  Sparkles,
  Star,
  Clock,
  BarChart,
  Users,
  Award,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Play,
  FileText,
  HelpCircle,
  ArrowRight,
  ExternalLink,
  Bookmark,
  Share2,
  Globe,
  BookOpen,
  Edit3,
  Video,
  Layers,
  MessageSquare,
  Infinity as InfinityIcon,
  X,
  Check,
  ChevronRight,
  GraduationCap,
  ShieldCheck,
} from 'lucide-react';
import { getCmsCourseBySlug, getCmsCourses, CourseItem } from '@/lib/cms';
import AIAssistantModal from '@/components/AIAssistantModal';

export default function CourseDetailTemplatePage() {
  const params = useParams();
  const router = useRouter();

  const slugParam = (Array.isArray(params?.slug) ? params.slug[0] : params?.slug) || 'ui-design';
  const course = getCmsCourseBySlug(slugParam) || getCmsCourses()[0];

  // Accordion state initialized to first module open
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    if (course.syllabus && course.syllabus.length > 0) {
      initial[course.syllabus[0].id] = true;
    }
    return initial;
  });

  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [instructorModalOpen, setInstructorModalOpen] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const toggleBookmark = () => {
    const nextState = !isBookmarked;
    setIsBookmarked(nextState);
    showToast(nextState ? `"${course.title}" saved to Bookmarks!` : 'Course removed from Bookmarks.');
  };

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      showToast('Course link copied to clipboard!');
    }
  };

  const toggleModule = (id: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    course.syllabus.forEach((m) => {
      all[m.id] = true;
    });
    setExpandedModules(all);
  };

  const collapseAll = () => {
    setExpandedModules({});
  };

  // Other related courses from CMS
  const otherCourses = getCmsCourses()
    .filter((c) => c.slug !== course.slug)
    .slice(0, 3);

  // Total lessons count
  const totalLessonsCount = course.syllabus.reduce((acc, m) => acc + (m.lessons?.length || m.lessonsCount || 0), 0);

  return (
    <div className="flex flex-col w-full bg-white text-slate-900 pb-32">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-24 right-8 z-50 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold shadow-xl flex items-center gap-2 animate-bounce">
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Banner & Breadcrumb Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 w-full">
        {/* Dynamic Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
          <Link href="/courses" className="hover:text-blue-600 transition-colors">
            All courses
          </Link>
          <span>&gt;</span>
          <Link href={`/courses?category=${encodeURIComponent(course.category)}`} className="hover:text-blue-600 transition-colors">
            {course.category}
          </Link>
          <span>&gt;</span>
          <span className="text-slate-900 font-semibold">{course.title}</span>
        </nav>

        {/* =========================================================================
            DYNAMIC WIDE HERO BANNER (Figma Matching)
        ========================================================================== */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1E1B4B] via-[#2E1065] to-[#3B0764] text-white p-8 sm:p-12 shadow-sm min-h-[310px] flex flex-col justify-between">
          {/* Background Illustration */}
          <div className="absolute right-0 top-0 bottom-0 w-full sm:w-1/2 opacity-95 pointer-events-none">
            <Image
              src={course.imageUrl || '/images/wide_design_banner.jpg'}
              alt={course.title}
              fill
              priority
              className="object-cover object-center sm:object-right opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E1B4B] via-[#2E1065]/70 to-transparent sm:block" />
          </div>

          {/* Left Hero Content */}
          <div className="relative z-10 max-w-lg space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-purple-300">
              — {course.category.toUpperCase()} MASTERCLASS SERIES
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {course.title}
            </h1>
            <p className="text-sm sm:text-base text-purple-200 leading-relaxed">
              {course.tagline}
            </p>
          </div>

          {/* Floating Pill Button */}
          <div className="relative z-10 pt-8 sm:pt-0 self-start sm:self-end flex items-center gap-3">
            <button
              onClick={() => setPreviewModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-slate-900 text-xs font-semibold shadow-lg hover:bg-slate-100 transition-colors group cursor-pointer"
            >
              <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span>Preview course 01:42</span>
            </button>
          </div>
        </div>

        {/* Badges & Actions Below Banner */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200">
              {course.category}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              COURSE · LEARN AT YOUR OWN PACE
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleBookmark}
              className={`p-2 rounded-lg border transition-colors ${
                isBookmarked
                  ? 'bg-blue-50 text-blue-600 border-blue-200'
                  : 'text-slate-400 border-slate-200 hover:text-slate-700'
              }`}
              title="Bookmark course"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current text-blue-600' : ''}`} />
            </button>
            <button
              onClick={handleShare}
              className="p-2 rounded-lg border border-slate-200 text-slate-400 hover:text-slate-700 transition-colors"
              title="Share course"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Course Title & Metadata Ribbon */}
        <div className="mt-4 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {course.title}
          </h2>
          <p className="text-base text-slate-600">
            {course.description}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-600 border-b border-slate-100 pb-8">
            <div className="flex items-center gap-1.5 text-amber-500">
              <Star className="w-4 h-4 fill-current" />
              <strong className="text-slate-900">{course.rating}</strong>
              <span className="text-slate-400">({course.reviewsCount} reviews)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BarChart className="w-4 h-4 text-slate-400" />
              <span>{course.level} friendly</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-slate-400" />
              <span>{course.studentsCount} students</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-slate-400" />
              <span>English &amp; Amharic Subtitles</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN COURSE BODY (2 Columns matching Template Layout)
      ========================================================================== */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Introduction Text */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900">
                  Master the core principles and build production-ready projects.
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {course.description} Designed specifically for ambitious Ethiopian university students, this syllabus blends practical hands-on exercises, industry-proven workflows, and structured guidance so you build an impressive portfolio piece you can showcase to employers.
                </p>
              </div>

              {/* What you'll learn */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5">
                <h3 className="text-lg font-bold text-slate-900">What you&apos;ll learn</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {course.learningOutcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">{outcome}</h4>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Taught step-by-step with real-world case studies and code/design challenges.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Your Learning Journey (Dynamic Modules List) */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Your learning journey</h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {course.syllabus.length} modules · {totalLessonsCount} lessons · {course.duration} total
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-blue-600">
                    <button onClick={expandAll} className="hover:text-blue-700 cursor-pointer">
                      Expand all
                    </button>
                    <span>·</span>
                    <button onClick={collapseAll} className="hover:text-blue-700 cursor-pointer">
                      Collapse all
                    </button>
                  </div>
                </div>

                {/* Modules Accordion */}
                <div className="space-y-3">
                  {course.syllabus.map((mod) => {
                    const isOpen = !!expandedModules[mod.id];
                    return (
                      <div
                        key={mod.id}
                        className="rounded-xl border border-slate-200 overflow-hidden bg-white transition-all"
                      >
                        <button
                          onClick={() => toggleModule(mod.id)}
                          className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 text-[10px] font-bold flex items-center justify-center">
                              {mod.moduleNumber}
                            </span>
                            <div>
                              <div className="text-xs font-bold text-slate-900">{mod.title}</div>
                              <div className="text-[10px] text-slate-500">
                                {mod.lessons?.length || mod.lessonsCount} lessons · {mod.duration}
                              </div>
                            </div>
                          </div>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-slate-400" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-400" />
                          )}
                        </button>

                        {isOpen && (
                          <div className="border-t border-slate-100 divide-y divide-slate-100 bg-[#F9FAFC]">
                            {mod.lessons.map((lesson) => (
                              <Link
                                key={lesson.id}
                                href={`/learn/${course.slug}?lesson=${lesson.id}`}
                                className="p-3.5 sm:px-5 flex items-center justify-between text-xs hover:bg-white transition-colors group cursor-pointer"
                              >
                                <div className="flex items-center gap-2.5">
                                  {lesson.type === 'practice' ? (
                                    <Edit3 className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-600" />
                                  ) : (
                                    <Play className="w-3.5 h-3.5 text-blue-600 group-hover:scale-110 transition-transform" />
                                  )}
                                  <span className="text-slate-800 group-hover:text-blue-600 font-medium">
                                    {lesson.title}
                                  </span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-500">
                                  {lesson.isPreview && (
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 uppercase">
                                      Free preview
                                    </span>
                                  )}
                                  <span>{lesson.duration}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Course Prerequisites */}
              {course.prerequisites && course.prerequisites.length > 0 && (
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                  <h3 className="text-base font-bold text-slate-900">Course Prerequisites</h3>
                  <ul className="space-y-2">
                    {course.prerequisites.map((req, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs text-slate-600">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Related Courses from CMS */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900">Other recommended courses</h3>
                  <Link href="/courses" className="text-xs font-semibold text-blue-600 hover:text-blue-700">
                    View catalog &rarr;
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {otherCourses.map((oc) => (
                    <Link
                      key={oc.id}
                      href={`/courses/${oc.slug}`}
                      className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">
                          {oc.category}
                        </span>
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {oc.title}
                        </h4>
                      </div>
                      <div className="pt-3 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100 mt-3">
                        <span className="text-amber-500 font-semibold flex items-center gap-1">
                          <Star className="w-3 h-3 fill-current" /> {oc.rating}
                        </span>
                        <span>{oc.duration}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Meet Your Instructor Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  MEET YOUR INSTRUCTOR
                </span>
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-tr ${course.instructor.avatarBg || 'from-blue-600 to-indigo-600'} text-white font-extrabold text-base flex items-center justify-center ring-2 ring-slate-100`}
                  >
                    {course.instructor.avatarText || 'IN'}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{course.instructor.name}</h4>
                    <p className="text-xs text-slate-500 line-clamp-1">{course.instructor.title}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {course.instructor.bio}
                </p>

                <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-base font-bold text-slate-900">
                      {course.instructor.studentsCount}
                    </div>
                    <div className="text-[11px] text-slate-400">students taught</div>
                  </div>
                  <div>
                    <div className="text-base font-bold text-slate-900">
                      {course.instructor.rating} / 5
                    </div>
                    <div className="text-[11px] text-slate-400">Instructor rating</div>
                  </div>
                </div>

                <div className="pt-1">
                  <button
                    onClick={() => setInstructorModalOpen(true)}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>View instructor profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Course Value Checklist */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <h4 className="text-sm font-bold text-slate-900">
                  A little structure. A lot of possibility.
                </h4>
                <ul className="space-y-3 text-xs text-slate-600">
                  <li className="flex items-center gap-2.5">
                    <Video className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{totalLessonsCount} bite-sized video lessons</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Layers className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Project repositories &amp; practice files</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <MessageSquare className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>A supportive university community</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Verified certificate of completion</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <InfinityIcon className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Lifetime access, at your own pace</span>
                  </li>
                </ul>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                  <strong className="text-slate-800 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                    All you need is a little curiosity.
                  </strong>
                  <p>
                    Bring your laptop and an open mind. We&apos;ll provide all cloud workspaces, starter code, and step-by-step guidance.
                  </p>
                </div>
              </div>

              {/* AI Study Assistant Callout */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-blue-200/80 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-blue-700">
                  <Sparkles className="w-4 h-4 fill-blue-700" />
                  <span className="text-xs font-bold uppercase tracking-wider">AI STUDY COMPANION</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">Have questions about this curriculum?</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ask our AI Assistant anything about the syllabus, homework, or industry relevance before you begin.
                </p>
                <button
                  onClick={() => setAiModalOpen(true)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-blue-700 bg-white hover:bg-blue-50 border border-blue-200 shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ask AI About This Course</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STICKY BOTTOM ENROLLMENT BAR (Matching Template)
      ========================================================================== */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-3.5 px-4 sm:px-8 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">{course.title}</div>
              <div className="text-[11px] text-slate-500">
                Your next chapter starts with one lesson.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden sm:block text-right">
              <div className="text-xs font-semibold text-slate-800">Learn on your schedule</div>
              <div className="text-[10px] text-slate-400">Lifetime access · Free for students</div>
            </div>

            <Link
              href={`/learn/${course.slug}`}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-sm transition-all"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Video Preview Modal */}
      {previewModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-slate-950 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-800 relative">
            <button
              onClick={() => setPreviewModalOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video w-full">
              <Image
                src={course.imageUrl || '/images/wide_design_banner.jpg'}
                alt="Course Preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
                  FREE PREVIEW · 01:42
                </span>
                <h3 className="text-xl font-extrabold text-white">
                  {course.title} — Course Introduction
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-md">
                  In this quick preview, {course.instructor.name} outlines the course milestones, core concepts, and the capstone project you will deliver.
                </p>
                <div className="pt-4 flex items-center gap-3">
                  <Link
                    href={`/learn/${course.slug}`}
                    className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-2"
                  >
                    <span>Full Classroom Experience</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Instructor Profile Modal */}
      {instructorModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 relative space-y-4">
            <button
              onClick={() => setInstructorModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div
                className={`w-14 h-14 rounded-full bg-gradient-to-tr ${course.instructor.avatarBg || 'from-blue-600 to-indigo-600'} text-white font-black text-xl flex items-center justify-center`}
              >
                {course.instructor.avatarText || 'IN'}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{course.instructor.name}</h3>
                <p className="text-xs text-slate-500">{course.instructor.title}</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {course.instructor.bio}
            </p>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
              <p className="font-semibold text-slate-800">Faculty Credentials &amp; Mentorship:</p>
              <ul className="list-disc list-inside text-slate-500 text-[11px] space-y-0.5">
                <li>{course.title} (Lead Instructor)</li>
                <li>{course.instructor.studentsCount} active students guided across East Africa</li>
                <li>Industry verified mentor with {course.instructor.rating} / 5 instructor satisfaction rating</li>
              </ul>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setInstructorModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <AIAssistantModal isOpen={aiModalOpen} onClose={() => setAiModalOpen(false)} />
    </div>
  );
}
