'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  Search,
  BookOpen,
  Star,
  Clock,
  ArrowRight,
  Filter,
  CheckCircle2,
  Sparkles,
  Flame,
  Award,
  Play,
  Layers,
  GraduationCap,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import { getCmsCourses, getCmsStudentCourses, CourseItem } from '@/lib/cms';

function CoursesCatalogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState<'explore' | 'my-learning'>(
    tabParam === 'my-learning' ? 'my-learning' : 'explore'
  );

  useEffect(() => {
    if (tabParam === 'my-learning') {
      setActiveTab('my-learning');
    } else if (tabParam === 'explore') {
      setActiveTab('explore');
    }
  }, [tabParam]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Design',
    'Development',
    'Data Science',
    'Artificial Intelligence',
  ];

  const cmsCourses = getCmsCourses();
  const registeredCourses = getCmsStudentCourses();

  const filteredCourses = cmsCourses.filter((course) => {
    const matchesCategory =
      selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleTabChange = (tab: 'explore' | 'my-learning') => {
    setActiveTab(tab);
    router.replace(`/courses?tab=${tab}`, { scroll: false });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-slate-900 pb-20">
      {/* Top Banner with Navigation Tabs */}
      <div className="bg-white border-b border-slate-200 pt-10 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Breadcrumb & Subtitle */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 fill-blue-700" />
                <span>STUDENT LEARNING PORTAL</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {activeTab === 'my-learning'
                  ? 'My Registered Courses'
                  : 'Explore All Courses'}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
                {activeTab === 'my-learning'
                  ? 'Active courses registered by Misgana Berhane · University of Addis Ababa · Computer Science'
                  : 'Gain high-impact skills in design, web development, data science, and AI built for ambitious university students.'}
              </p>
            </div>

            {/* Quick Link to Student Dashboard */}
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 shadow-2xs transition-all shrink-0 self-start sm:self-auto cursor-pointer"
            >
              <span>Student Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>
          </div>

          {/* Navigation Sub-Tabs */}
          <div className="flex items-center gap-3 pt-2 border-b border-slate-200 pb-px">
            <button
              onClick={() => handleTabChange('explore')}
              className={`pb-3 px-1 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
                activeTab === 'explore'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore Catalog</span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                  activeTab === 'explore'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {cmsCourses.length}
              </span>
            </button>

            <button
              onClick={() => handleTabChange('my-learning')}
              className={`pb-3 px-1 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-all cursor-pointer ${
                activeTab === 'my-learning'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>My Learning (Enrolled)</span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                  activeTab === 'my-learning'
                    ? 'bg-blue-700 text-white'
                    : 'bg-slate-100 text-slate-700'
                }`}
              >
                {registeredCourses.length}
              </span>
            </button>
          </div>

          {/* Search & Filter Bar (Shown in Explore Tab) */}
          {activeTab === 'explore' && (
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
              <div className="relative flex-1 w-full">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search courses, skills, or instructors..."
                  className="w-full h-11 pl-11 pr-4 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-8">
        {/* =========================================================================
            TAB 1: MY REGISTERED COURSES (Enrolled by Student)
        ========================================================================== */}
        {activeTab === 'my-learning' && (
          <div className="space-y-8">
            {/* Student Stats Summary Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-md">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold">{registeredCourses.length} Courses</div>
                  <div className="text-xs text-blue-100 font-medium">Currently Registered</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold">75% Complete</div>
                  <div className="text-xs text-blue-100 font-medium">Python for Data Science</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold flex items-center gap-1.5">
                    <span>12 Days</span>
                    <Flame className="w-5 h-5 text-amber-300 fill-current" />
                  </div>
                  <div className="text-xs text-blue-100 font-medium">Current Learning Streak</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold flex items-center gap-1.5">
                    <span>6 Earned</span>
                    <Award className="w-5 h-5 text-yellow-300" />
                  </div>
                  <div className="text-xs text-blue-100 font-medium">Verified Certificates</div>
                </div>
              </div>
            </div>

            {/* List of Registered Courses */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Courses in Progress ({registeredCourses.length})
                  </h2>
                  <p className="text-xs text-slate-500">
                    Click any course below to continue your lessons where you left off.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {registeredCourses.map((c) => (
                  <div
                    key={c.id}
                    className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5"
                  >
                    <div className="space-y-4">
                      {/* Top Badges */}
                      <div className="flex items-center justify-between">
                        <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold border ${c.color}`}>
                          {c.category}
                        </span>
                        <span className="text-xs font-bold text-blue-600">
                          {c.progress}% Completed
                        </span>
                      </div>

                      {/* Course Title & Instructor */}
                      <div>
                        <h3 className="text-base font-bold text-slate-900 leading-snug">
                          {c.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                          By {c.instructor} · <span className="text-slate-400">{c.instructorTitle}</span>
                        </p>
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[11px] font-medium text-slate-500">
                          <span>Progress</span>
                          <span className="font-bold text-slate-900">
                            {c.completedLessons} of {c.totalLessons} lessons
                          </span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-600 rounded-full transition-all duration-500"
                            style={{ width: `${c.progress}%` }}
                          />
                        </div>
                      </div>

                      {/* Current Module Info */}
                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          UP NEXT
                        </div>
                        <div className="text-xs font-semibold text-slate-800 line-clamp-1">
                          {c.upNext}
                        </div>
                        <div className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-0.5">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{c.nextDuration}</span>
                          <span>•</span>
                          <span>{c.lastAccessed}</span>
                        </div>
                      </div>
                    </div>

                    {/* Dynamic Action Button linking directly to Classroom */}
                    <div className="pt-2">
                      <Link
                        href={c.actionHref || `/learn/${c.courseSlug}`}
                        className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>{c.actionText}</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Link to Student Dashboard */}
            <div className="p-6 rounded-2xl bg-slate-100/70 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Looking for your study charts and certificates?
                </h4>
                <p className="text-xs text-slate-500">
                  View your complete study hour breakdown, learning goals, and verified badges on your Student Dashboard.
                </p>
              </div>
              <Link
                href="/dashboard"
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs shrink-0 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Go to Student Dashboard</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 2: EXPLORE ALL COURSES (CMS Template Driven)
        ========================================================================== */}
        {activeTab === 'explore' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-slate-500">
                Showing <span className="text-slate-900">{filteredCourses.length}</span> curated courses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course: CourseItem) => (
                <div
                  key={course.id}
                  className="group rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Course Image Preview */}
                    <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={course.imageUrl}
                        alt={course.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/95 text-slate-800 shadow-xs backdrop-blur-xs">
                          {course.category}
                        </span>
                        {course.categoryBadge && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-600 text-white shadow-xs">
                            {course.categoryBadge}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <div className="flex items-center gap-1 text-amber-500 font-semibold">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span>{course.rating}</span>
                          <span className="text-slate-400 font-normal">({course.reviewsCount})</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{course.duration}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {course.title}
                      </h3>

                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {course.tagline}
                      </p>

                      <div className="pt-2 flex items-center gap-2.5">
                        <div
                          className={`w-6 h-6 rounded-full bg-gradient-to-tr ${course.instructor.avatarBg || 'from-blue-600 to-indigo-600'} text-white text-[10px] font-bold flex items-center justify-center`}
                        >
                          {course.instructor.avatarText || 'IN'}
                        </div>
                        <span className="text-xs font-medium text-slate-700">
                          {course.instructor.name}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Action dynamically linking to /courses/${course.slug} */}
                  <div className="p-6 pt-0">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="w-full h-10 rounded-xl bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white border border-slate-200 hover:border-blue-600 text-xs font-bold transition-all flex items-center justify-center gap-2 group-hover:bg-blue-600 group-hover:text-white cursor-pointer"
                    >
                      <span>View Syllabus &amp; Enroll</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CoursesCatalogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F8FAFC]" />}>
      <CoursesCatalogContent />
    </Suspense>
  );
}
