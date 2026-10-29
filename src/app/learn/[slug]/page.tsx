'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Maximize2,
  Minimize2,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Settings,
  Download,
  BookOpen,
  FileText,
  Bookmark,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Sidebar,
  Check,
  Edit3,
  X,
  Share2,
  Layers,
  GraduationCap,
} from 'lucide-react';
import { getCmsCourseBySlug, getCmsCourses, CourseItem, Lesson } from '@/lib/cms';
import AIAssistantModal from '@/components/AIAssistantModal';

interface FlattenedLesson extends Lesson {
  moduleNumber: string;
  moduleTitle: string;
  totalSeconds: number;
}

function ClassroomContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const slugParam = (Array.isArray(params?.slug) ? params.slug[0] : params?.slug) || 'ui-design';
  const course: CourseItem = getCmsCourseBySlug(slugParam) || getCmsCourses()[0];

  // Helper to parse "04:32" or "12 min" to total seconds
  const parseDurationToSeconds = (dur: string): number => {
    if (dur.includes(':')) {
      const parts = dur.split(':').map((p) => parseInt(p, 10));
      if (parts.length === 2) return parts[0] * 60 + parts[1];
      if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    }
    const match = dur.match(/(\d+)\s*m/);
    if (match) return parseInt(match[1], 10) * 60;
    return 600; // 10 min fallback
  };

  // Flatten course syllabus into linear lesson sequence
  const allLessons: FlattenedLesson[] = course.syllabus.flatMap((m) =>
    m.lessons.map((l) => ({
      ...l,
      moduleNumber: m.moduleNumber,
      moduleTitle: m.title,
      totalSeconds: parseDurationToSeconds(l.duration),
    }))
  );

  const initialLessonId = searchParams.get('lesson') || allLessons[0]?.id || 'l1';

  // Video playback state
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentSeconds, setCurrentSeconds] = useState(140);
  const [playbackSpeed, setPlaybackSpeed] = useState('1x');
  const [showCaptions, setShowCaptions] = useState(true);
  const [isFocusMode, setIsFocusMode] = useState(false);

  // Lesson state
  const [activeLessonId, setActiveLessonId] = useState(initialLessonId);
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>([allLessons[0]?.id || 'l1']);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Active lesson lookup
  const activeLesson = allLessons.find((l) => l.id === activeLessonId) || allLessons[0];

  // Notes state
  const [notesOpen, setNotesOpen] = useState(false);
  const [lessonNotes, setLessonNotes] = useState<Record<string, string>>({
    [allLessons[0]?.id || 'l1']: 'Key takeaway: clarity, spatial consistency, and predictable hierarchy make digital products enjoyable to use.',
  });
  const [currentNoteText, setCurrentNoteText] = useState(lessonNotes[activeLessonId] || '');

  // Modals & toasts
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Module accordions state
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    course.syllabus.forEach((m, idx) => {
      init[m.id] = idx === 0;
    });
    return init;
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const toggleModule = (id: string) => {
    setExpandedModules((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Switch lesson helper
  const selectLesson = (lesson: FlattenedLesson) => {
    setActiveLessonId(lesson.id);
    setCurrentSeconds(0);
    setIsPlaying(false);
    setCurrentNoteText(lessonNotes[lesson.id] || '');
    router.replace(`/learn/${course.slug}?lesson=${lesson.id}`, { scroll: false });
  };

  // Video progress timer simulation
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSeconds((prev) => {
          if (prev >= (activeLesson?.totalSeconds || 600)) {
            setIsPlaying(false);
            return activeLesson?.totalSeconds || 600;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeLesson?.totalSeconds]);

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Mark lesson completed
  const handleMarkComplete = () => {
    if (!completedLessonIds.includes(activeLessonId)) {
      setCompletedLessonIds((prev) => [...prev, activeLessonId]);
      showToast('🎉 Lesson completed! +25 XP earned.');
    } else {
      showToast('Lesson already marked complete.');
    }

    // Advance to next lesson if available
    const currentIndex = allLessons.findIndex((l) => l.id === activeLessonId);
    if (currentIndex < allLessons.length - 1) {
      selectLesson(allLessons[currentIndex + 1]);
    }
  };

  // Save notes
  const handleSaveNote = () => {
    setLessonNotes((prev) => ({
      ...prev,
      [activeLessonId]: currentNoteText,
    }));
    showToast('Note saved to this lesson.');
  };

  // Download notes
  const handleDownloadNotes = () => {
    const blob = new Blob([currentNoteText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${course.slug}_lesson_${activeLessonId}_notes.txt`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Notes downloaded successfully.');
  };

  const totalLessons = allLessons.length || 1;
  const completedCount = completedLessonIds.length;
  const progressPct = Math.round((completedCount / totalLessons) * 100);
  const videoProgressPct = activeLesson
    ? Math.round((currentSeconds / activeLesson.totalSeconds) * 100)
    : 0;

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-20 right-8 z-50 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold shadow-xl flex items-center gap-2 animate-bounce">
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* =========================================================================
          TOP CLASSROOM NAVBAR
      ========================================================================== */}
      <header className="sticky top-0 z-40 w-full h-16 border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8 flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <BookOpen className="w-4 h-4 fill-current" />
            </div>
            <span className="font-bold text-base text-slate-900 tracking-tight hidden sm:inline">
              Learning Hub
            </span>
          </Link>

          <div className="h-6 w-px bg-slate-200 hidden sm:block" />

          {/* Back to Course Syllabus Link */}
          <Link
            href={`/courses/${course.slug}`}
            className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to course syllabus</span>
          </Link>
        </div>

        {/* Middle Course Title & Progress */}
        <div className="hidden md:flex flex-col items-center">
          <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
            <span>{course.title}</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-semibold">
              Module {activeLesson?.moduleNumber}
            </span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
            <span>
              {completedCount} of {totalLessons} completed ({progressPct}%)
            </span>
            <div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        </div>

        {/* Right Tools: AI Companion & Notes */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setNotesOpen(!notesOpen)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-colors cursor-pointer ${
              notesOpen
                ? 'bg-blue-50 border-blue-200 text-blue-700'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Notes</span>
          </button>

          <button
            onClick={() => setAiModalOpen(true)}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs hover:opacity-95 flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Ask AI</span>
          </button>
        </div>
      </header>

      {/* =========================================================================
          MAIN CLASSROOM SPLIT LAYOUT (Video Player + Sidebar)
      ========================================================================== */}
      <div className="flex-1 max-w-[1600px] w-full mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Player & Lesson Info (8 or 12 cols in Focus Mode) */}
        <div className={`${isFocusMode ? 'lg:col-span-12' : 'lg:col-span-8'} space-y-6 transition-all`}>
          {/* Interactive Simulated Video Player */}
          <div className="rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl relative aspect-video flex flex-col justify-between group">
            {/* Video Poster Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src={course.imageUrl || '/images/wide_design_banner.jpg'}
                alt={activeLesson?.title || course.title}
                fill
                priority
                className={`object-cover object-center transition-all duration-700 ${
                  isPlaying ? 'brightness-[0.45] scale-105' : 'brightness-[0.6]'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            </div>

            {/* Top Video Overlay: Module tag & Focus toggle */}
            <div className="relative z-10 p-4 sm:p-6 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-blue-600/90 backdrop-blur-md uppercase tracking-wider">
                  Module {activeLesson?.moduleNumber} · Lesson {activeLesson?.id.toUpperCase()}
                </span>
                <span className="text-xs text-slate-300 font-medium hidden sm:inline">
                  {course.instructor.name}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsFocusMode(!isFocusMode)}
                  className="p-2 rounded-xl bg-black/40 hover:bg-black/70 text-slate-300 hover:text-white backdrop-blur-md transition-colors cursor-pointer"
                  title={isFocusMode ? 'Exit Focus Mode' : 'Focus / Theatre Mode'}
                >
                  {isFocusMode ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Center Play Button Overlay */}
            <div className="relative z-10 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600/90 hover:bg-blue-600 text-white shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 backdrop-blur-xs cursor-pointer"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 fill-current" />
                ) : (
                  <Play className="w-8 h-8 fill-current ml-1" />
                )}
              </button>
            </div>

            {/* Captions Overlay */}
            {showCaptions && isPlaying && (
              <div className="relative z-10 self-center max-w-lg mx-4 mb-2 px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md text-white text-xs sm:text-sm text-center leading-relaxed font-medium border border-white/10">
                &ldquo;...creating clear visual rhythm with spatial padding lets students absorb information effortlessly.&rdquo;
              </div>
            )}

            {/* Bottom Controls Bar */}
            <div className="relative z-10 p-4 sm:p-6 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent space-y-2">
              {/* Scrub timeline */}
              <div
                className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer hover:h-2.5 transition-all"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickPct = (e.clientX - rect.left) / rect.width;
                  if (activeLesson) {
                    setCurrentSeconds(Math.floor(clickPct * activeLesson.totalSeconds));
                  }
                }}
              >
                <div
                  className="h-full bg-blue-500 rounded-full transition-all duration-200"
                  style={{ width: `${videoProgressPct}%` }}
                />
              </div>

              {/* Controls row */}
              <div className="flex items-center justify-between text-white text-xs pt-1">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={() => setCurrentSeconds(0)}
                    className="hover:text-blue-400 transition-colors cursor-pointer"
                    title="Restart Lesson"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <span className="font-mono text-[11px] text-slate-300">
                    {formatTime(currentSeconds)} / {formatTime(activeLesson?.totalSeconds || 600)}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {/* Playback speed toggle */}
                  <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-lg text-[11px]">
                    {['1x', '1.25x', '1.5x'].map((spd) => (
                      <button
                        key={spd}
                        onClick={() => setPlaybackSpeed(spd)}
                        className={`px-1.5 py-0.5 rounded ${
                          playbackSpeed === spd ? 'bg-blue-600 font-bold text-white' : 'text-slate-300 hover:text-white'
                        }`}
                      >
                        {spd}
                      </button>
                    ))}
                  </div>

                  {/* Captions toggle */}
                  <button
                    onClick={() => setShowCaptions(!showCaptions)}
                    className={`px-2 py-0.5 rounded text-[11px] font-bold border transition-colors cursor-pointer ${
                      showCaptions
                        ? 'border-blue-500 text-blue-400 bg-blue-500/10'
                        : 'border-white/20 text-slate-400 hover:text-white'
                    }`}
                  >
                    CC
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Lesson Header & Mark Complete Action */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-blue-50 text-blue-700">
                  Module {activeLesson?.moduleNumber}: {activeLesson?.moduleTitle}
                </span>
                <span className="text-xs text-slate-400">· {activeLesson?.duration}</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {activeLesson?.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                {activeLesson?.description}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <button
                onClick={handleMarkComplete}
                className={`px-6 py-3 rounded-2xl text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer ${
                  completedLessonIds.includes(activeLessonId)
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {completedLessonIds.includes(activeLessonId)
                    ? 'Completed ✓'
                    : 'Mark as Completed'}
                </span>
              </button>
            </div>
          </div>

          {/* Interactive Notes Drawer (Inline) */}
          {notesOpen && (
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-blue-200 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Edit3 className="w-4 h-4 text-blue-600" />
                  <h3 className="text-sm font-bold text-slate-900">
                    Your Study Notes for this Lesson
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleDownloadNotes}
                    className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 text-xs flex items-center gap-1 cursor-pointer"
                    title="Download Note"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Export</span>
                  </button>
                  <button
                    onClick={() => setNotesOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <textarea
                value={currentNoteText}
                onChange={(e) => setCurrentNoteText(e.target.value)}
                placeholder="Type your notes, formulas, code snippets, or thoughts here..."
                rows={4}
                className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-mono"
              />

              <div className="flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  Notes are saved locally to this lesson track.
                </span>
                <button
                  onClick={handleSaveNote}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all cursor-pointer"
                >
                  Save Note
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Syllabus & Lesson Navigation Sidebar */}
        {!isFocusMode && (
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                    COURSE CURRICULUM
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {course.syllabus.length} modules · {totalLessons} lessons
                  </p>
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                  {progressPct}% Done
                </span>
              </div>

              {/* Modules Accordion */}
              <div className="space-y-3">
                {course.syllabus.map((mod) => {
                  const isOpen = !!expandedModules[mod.id];
                  return (
                    <div
                      key={mod.id}
                      className="rounded-2xl border border-slate-200 overflow-hidden bg-white"
                    >
                      <button
                        onClick={() => toggleModule(mod.id)}
                        className="w-full p-3.5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-md bg-blue-50 text-blue-600 text-[10px] font-bold flex items-center justify-center">
                            {mod.moduleNumber}
                          </span>
                          <div>
                            <div className="text-xs font-bold text-slate-900">{mod.title}</div>
                            <div className="text-[10px] text-slate-400">
                              {mod.lessons.length} lessons · {mod.duration}
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
                          {mod.lessons.map((lesson) => {
                            const isCurrent = lesson.id === activeLessonId;
                            const isDone = completedLessonIds.includes(lesson.id);
                            return (
                              <button
                                key={lesson.id}
                                onClick={() => {
                                  const flat = allLessons.find((l) => l.id === lesson.id);
                                  if (flat) selectLesson(flat);
                                }}
                                className={`w-full p-3 sm:px-4 flex items-center justify-between text-left text-xs transition-colors cursor-pointer ${
                                  isCurrent
                                    ? 'bg-blue-50/80 text-blue-700 font-bold border-l-4 border-blue-600'
                                    : 'hover:bg-white text-slate-700 font-medium'
                                }`}
                              >
                                <div className="flex items-center gap-2.5">
                                  {isDone ? (
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                  ) : isCurrent ? (
                                    <Play className="w-3.5 h-3.5 text-blue-600 fill-current shrink-0" />
                                  ) : (
                                    <div className="w-3.5 h-3.5 rounded-full border border-slate-300 shrink-0" />
                                  )}
                                  <span className="line-clamp-1">{lesson.title}</span>
                                </div>
                                <span className="text-[11px] text-slate-400 shrink-0 ml-2">
                                  {lesson.duration}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Next Lesson Card */}
            {(() => {
              const currentIndex = allLessons.findIndex((l) => l.id === activeLessonId);
              const nextLesson = allLessons[currentIndex + 1];
              if (!nextLesson) return null;
              return (
                <div className="p-5 rounded-3xl bg-slate-900 text-white space-y-3 shadow-md">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                    UP NEXT IN QUEUE
                  </div>
                  <h4 className="text-sm font-bold">{nextLesson.title}</h4>
                  <div className="text-xs text-slate-400 flex items-center justify-between">
                    <span>Module {nextLesson.moduleNumber}</span>
                    <span>{nextLesson.duration}</span>
                  </div>
                  <button
                    onClick={() => selectLesson(nextLesson)}
                    className="w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Play Next Lesson</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })()}
          </div>
        )}
      </div>

      <AIAssistantModal isOpen={aiModalOpen} onClose={() => setAiModalOpen(false)} />
    </div>
  );
}

export default function ClassroomPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F8FAFC]" />}>
      <ClassroomContent />
    </Suspense>
  );
}
