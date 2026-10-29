'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Send,
  Sparkles,
  Code2,
  Image as ImageIcon,
  Link2,
  TrendingUp,
  Users,
  Award,
  CheckCircle2,
  Flame,
  Search,
  MoreHorizontal,
  ChevronRight,
  ExternalLink,
  Plus,
  Compass,
  Smile,
  X,
  MessageSquare,
  BookOpen,
} from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  handle: string;
  avatarBg: string;
  avatarText: string;
  content: string;
  timeAgo: string;
  likes: number;
  userLiked?: boolean;
}

interface Post {
  id: string;
  author: string;
  handle: string;
  university: string;
  avatarBg: string;
  avatarText: string;
  isVerified?: boolean;
  isMentor?: boolean;
  timeAgo: string;
  content: string;
  tags: string[];
  codeSnippet?: {
    language: string;
    code: string;
  };
  projectCard?: {
    title: string;
    description: string;
    demoUrl: string;
    stars: number;
    tech: string[];
  };
  eventCard?: {
    title: string;
    date: string;
    location: string;
    attendees: number;
  };
  likes: number;
  userLiked?: boolean;
  commentsCount: number;
  repostsCount: number;
  isSaved?: boolean;
  commentsList: Comment[];
  category: 'Showcase' | 'Question' | 'Discussion' | 'Announcement';
}

export default function CommunityPage() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Showcase' | 'Question' | 'Announcement'>('All');
  const [newPostText, setNewPostText] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('#ProjectShowcase');
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [codeContent, setCodeContent] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [expandedPostComments, setExpandedPostComments] = useState<Record<string, boolean>>({
    'post-1': true, // Keep first open for immediate social feel
  });
  const [newCommentInputs, setNewCommentInputs] = useState<Record<string, string>>({});

  // Campus Stories / Spotlight
  const campusStories = [
    { id: 's0', name: 'Your Story', avatar: 'MB', isUser: true },
    { id: 's1', name: 'AAU Hackathon', avatar: 'AAU', active: true },
    { id: 's2', name: 'HiLCoE Devs', avatar: 'HIL', active: true },
    { id: 's3', name: 'ASTU Robotics', avatar: 'AST', active: true },
    { id: 's4', name: 'AASTU Hub', avatar: 'AAS', active: true },
    { id: 's5', name: 'Google DSC', avatar: 'DSC', active: true },
  ];

  // Follow states for sidebar
  const [followedMentors, setFollowedMentors] = useState<Record<string, boolean>>({
    'm-1': true,
    'm-2': false,
    'm-3': false,
  });

  // Initial Posts Feed
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 'post-1',
      author: 'Dagmawi Assefa',
      handle: '@dagmawi_dev',
      university: 'Software Engineering @ AAU 4 Kilo',
      avatarBg: 'from-blue-600 to-indigo-600',
      avatarText: 'DA',
      isVerified: true,
      timeAgo: '2h ago',
      content:
        'Just shipped our team prototype for the Ethiopian University Hackathon 2026! 🚀 We built EthioTransact: a high-speed escrow and student micro-payments protocol integrated with Chapa and local bank APIs. Check out the demo preview below. Would love peer critique on the checkout UX! 👇',
      tags: ['#EthioTechHackathon2026', '#Nextjs14', '#Web3Ethiopia', '#Fintech'],
      projectCard: {
        title: 'EthioTransact — Student Micro-Escrow Protocol',
        description:
          'Open-source web platform for peer-to-peer textbook and lab equipment rentals with automated birr settlements.',
        demoUrl: 'https://ethiotransact.demo.et',
        stars: 76,
        tech: ['Next.js 14', 'Tailwind', 'Chapa API', 'Supabase'],
      },
      likes: 89,
      userLiked: false,
      commentsCount: 3,
      repostsCount: 14,
      category: 'Showcase',
      commentsList: [
        {
          id: 'c1',
          author: 'Bethelhem Girma',
          handle: '@bethel_ux',
          avatarBg: 'from-purple-500 to-pink-500',
          avatarText: 'BG',
          content: 'The modal transitions look buttery smooth! Did you test with Telebirr callback webhooks too?',
          timeAgo: '1h ago',
          likes: 8,
        },
        {
          id: 'c2',
          author: 'Dagmawi Assefa',
          handle: '@dagmawi_dev',
          avatarBg: 'from-blue-600 to-indigo-600',
          avatarText: 'DA',
          content: '@bethel_ux Yes! We simulated both Telebirr and CBE Birr instant settlement test webhooks.',
          timeAgo: '45m ago',
          likes: 5,
        },
        {
          id: 'c3',
          author: 'Dr. Solomon Abebe',
          handle: '@solomon_ai',
          avatarBg: 'from-emerald-500 to-teal-600',
          avatarText: 'SA',
          content: 'Impressive architecture Dagmawi. Make sure you bring this to our Hackathon demo review on Thursday.',
          timeAgo: '20m ago',
          likes: 12,
        },
      ],
    },
    {
      id: 'post-2',
      author: 'Dr. Solomon Abebe',
      handle: '@solomon_ai',
      university: 'Head of AI Research @ AAU · UniHub Mentor',
      avatarBg: 'from-emerald-500 to-teal-600',
      avatarText: 'SA',
      isVerified: true,
      isMentor: true,
      timeAgo: '4h ago',
      content:
        '📢 Office Hours Reminder for all students in the Python for Data Science and AI Study Companion tracks: Today at 5:00 PM EAT, we will host a live debug session on Pandas DataFrame optimizations and capstone submission criteria. Join the link below to get live feedback on your models!',
      tags: ['#PythonEthiopia', '#DataScience', '#OfficeHours', '#AAU'],
      eventCard: {
        title: 'Live Python & ML Capstone Debug Session',
        date: 'Today, Oct 29 · 5:00 PM EAT',
        location: 'Virtual Room & AAU CS Lab 2',
        attendees: 184,
      },
      likes: 142,
      userLiked: true,
      commentsCount: 19,
      repostsCount: 38,
      category: 'Announcement',
      commentsList: [
        {
          id: 'c2-1',
          author: 'Misgana Berhane',
          handle: '@misgana_b',
          avatarBg: 'from-amber-500 to-rose-500',
          avatarText: 'MB',
          content: 'Will this session cover multi-index groupby operations and Capstone Rubric 4?',
          timeAgo: '3h ago',
          likes: 4,
        },
      ],
    },
    {
      id: 'post-3',
      author: 'Bethelhem Girma',
      handle: '@bethel_ux',
      university: 'Electrical & Computer Eng @ AASTU',
      avatarBg: 'from-purple-500 to-pink-500',
      avatarText: 'BG',
      timeAgo: '6h ago',
      content:
        'Design query for bilingual web builders: When styling Amharic Fidel scripts in mobile interfaces, what line-height multiplier are you all using to prevent descender clipping? In standard Figma, 1.4x feels too tight, but 1.7x makes English text look loose. Here is our current CSS fix:',
      tags: ['#UIUX', '#DesignSystems', '#AmharicWeb', '#FigmaAddis'],
      codeSnippet: {
        language: 'css',
        code: `/* Fidel Bilingual Typography Token */
:lang(am) {
  font-family: 'Noto Sans Ethiopic', sans-serif;
  line-height: 1.68;
  letter-spacing: 0.025em;
}

:lang(en) {
  line-height: 1.5;
}`,
      },
      likes: 67,
      userLiked: false,
      commentsCount: 9,
      repostsCount: 11,
      category: 'Question',
      commentsList: [
        {
          id: 'c3-1',
          author: 'Natnael Kebede',
          handle: '@natty_k',
          avatarBg: 'from-cyan-500 to-blue-600',
          avatarText: 'NK',
          content: 'We use 1.65 line-height with -0.01em letter spacing in our mobile app and it works great on both iOS and Android.',
          timeAgo: '5h ago',
          likes: 6,
        },
      ],
    },
  ]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostText.trim()) return;

    const newPost: Post = {
      id: `post-${Date.now()}`,
      author: 'Misgana Berhane',
      handle: '@misgana_b',
      university: 'CS Junior @ AAU 4 Kilo',
      avatarBg: 'from-amber-500 to-rose-500',
      avatarText: 'MB',
      isVerified: true,
      timeAgo: 'Just now',
      content: newPostText,
      tags: [selectedTag, '#AAU_CS'],
      codeSnippet:
        showCodeInput && codeContent.trim()
          ? {
              language: 'javascript',
              code: codeContent.trim(),
            }
          : undefined,
      likes: 1,
      userLiked: true,
      commentsCount: 0,
      repostsCount: 0,
      category:
        selectedTag === '#ProjectShowcase'
          ? 'Showcase'
          : selectedTag === '#Question'
          ? 'Question'
          : 'Discussion',
      commentsList: [],
    };

    setPosts([newPost, ...posts]);
    setNewPostText('');
    setCodeContent('');
    setShowCodeInput(false);
    showToast('🚀 Your post has been published to the student feed!');
  };

  const toggleLike = (postId: string) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          const liked = !p.userLiked;
          return {
            ...p,
            userLiked: liked,
            likes: liked ? p.likes + 1 : p.likes - 1,
          };
        }
        return p;
      })
    );
  };

  const toggleBookmark = (postId: string) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          const saved = !p.isSaved;
          showToast(saved ? 'Post saved to your bookmarks' : 'Removed from bookmarks');
          return { ...p, isSaved: saved };
        }
        return p;
      })
    );
  };

  const toggleComments = (postId: string) => {
    setExpandedPostComments((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const handleAddComment = (postId: string) => {
    const text = newCommentInputs[postId]?.trim();
    if (!text) return;

    const newComment: Comment = {
      id: `c-${Date.now()}`,
      author: 'Misgana Berhane',
      handle: '@misgana_b',
      avatarBg: 'from-amber-500 to-rose-500',
      avatarText: 'MB',
      content: text,
      timeAgo: 'Just now',
      likes: 0,
    };

    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          return {
            ...p,
            commentsCount: p.commentsCount + 1,
            commentsList: [...p.commentsList, newComment],
          };
        }
        return p;
      })
    );

    setNewCommentInputs((prev) => ({ ...prev, [postId]: '' }));
    showToast('Comment posted!');
  };

  const filteredPosts = posts.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-16 font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-slate-900 text-white text-xs font-semibold shadow-xl border border-slate-700 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* =========================================================================
              LEFT COLUMN: USER PROFILE & CAMPUS CIRCLES (3 cols)
          ========================================================================== */}
          <aside className="lg:col-span-3 space-y-5 select-none">
            {/* Student Profile Card */}
            <div className="rounded-2xl bg-white border border-slate-200/90 shadow-xs overflow-hidden">
              {/* Cover Banner */}
              <div className="h-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 relative">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />
              </div>

              {/* Avatar & Info */}
              <div className="px-4 pb-5 pt-0 -mt-10 relative">
                <div className="flex items-end justify-between mb-3">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-rose-500 ring-4 ring-white shadow-md flex items-center justify-center text-white text-lg font-black">
                    MB
                  </div>
                  <Link
                    href="/dashboard"
                    className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 text-[11px] font-semibold text-slate-700 transition-colors"
                  >
                    View Stats
                  </Link>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-base text-slate-900">Misgana Berhane</h3>
                    <CheckCircle2 className="w-4 h-4 text-blue-600 fill-blue-50" />
                  </div>
                  <p className="text-xs font-medium text-slate-500">@misgana_b</p>
                  <p className="text-xs text-slate-600 pt-1 leading-relaxed">
                    CS Junior @ Addis Ababa University (AAU) · 4 Kilo Campus. Exploring UI/UX, Next.js &amp; Web3.
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 py-3.5 my-3 border-y border-slate-100 text-center">
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">184</div>
                    <div className="text-[10px] text-slate-400 font-medium">Followers</div>
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">14</div>
                    <div className="text-[10px] text-slate-400 font-medium">Posts</div>
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-blue-600">3</div>
                    <div className="text-[10px] text-slate-400 font-medium">Enrolled</div>
                  </div>
                </div>

                {/* Quick Shortcuts */}
                <div className="space-y-1 text-xs font-semibold text-slate-700">
                  <button
                    onClick={() => setActiveFilter('All')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-blue-50/70 hover:text-blue-600 transition-colors text-left"
                  >
                    <span className="flex items-center gap-2.5">
                      <Compass className="w-4 h-4 text-slate-500" />
                      <span>Campus Feed</span>
                    </span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      Live
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveFilter('Showcase')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-blue-50/70 hover:text-blue-600 transition-colors text-left"
                  >
                    <span className="flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4 text-slate-500" />
                      <span>Project Showcases</span>
                    </span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
                      Top
                    </span>
                  </button>

                  <Link
                    href="/sources"
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-blue-50/70 hover:text-blue-600 transition-colors text-left"
                  >
                    <span className="flex items-center gap-2.5">
                      <BookOpen className="w-4 h-4 text-slate-500" />
                      <span>Student Sources &amp; Kits</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Campus Circles */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Active Campus Circles
                </h4>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <div className="space-y-2 text-xs">
                {[
                  { tag: '#EthioTechHackathon2026', count: '1.4k students', active: true },
                  { tag: '#AddisAbabaDesigners', count: '850 designers' },
                  { tag: '#PythonEthiopia', count: '2.1k coders' },
                  { tag: '#Web3Africa', count: '640 builders' },
                  { tag: '#AAU_4Kilo_CS', count: '930 classmates' },
                ].map((c) => (
                  <button
                    key={c.tag}
                    onClick={() => {
                      setSelectedTag(c.tag);
                      showToast(`Filtered feed by ${c.tag}`);
                    }}
                    className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                  >
                    <span className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                      {c.tag}
                    </span>
                    <span className="text-[10px] text-slate-400">{c.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* =========================================================================
              CENTER COLUMN: SOCIAL MEDIA FEED & POSTS (6 cols)
          ========================================================================== */}
          <main className="lg:col-span-6 space-y-5">
            {/* Campus Stories Bar */}
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-3 overflow-x-auto no-scrollbar">
              {campusStories.map((story) => (
                <button
                  key={story.id}
                  onClick={() => showToast(`Viewing campus story from ${story.name}`)}
                  className="flex flex-col items-center gap-1.5 shrink-0 group focus:outline-none"
                >
                  <div
                    className={`w-14 h-14 rounded-full p-0.5 flex items-center justify-center transition-transform group-hover:scale-105 ${
                      story.isUser
                        ? 'border-2 border-dashed border-slate-300'
                        : 'bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-500'
                    }`}
                  >
                    <div className="w-full h-full rounded-full bg-white p-0.5">
                      <div
                        className={`w-full h-full rounded-full flex items-center justify-center text-xs font-bold text-white ${
                          story.isUser
                            ? 'bg-gradient-to-tr from-amber-500 to-rose-500'
                            : 'bg-slate-800'
                        }`}
                      >
                        {story.avatar}
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium text-slate-600 max-w-[64px] truncate">
                    {story.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Post Creator Box */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                  MB
                </div>
                <div className="flex-1">
                  <textarea
                    value={newPostText}
                    onChange={(e) => setNewPostText(e.target.value)}
                    rows={showCodeInput ? 2 : 3}
                    placeholder="Share a project demo, ask a code question, or post a resource, Misgana..."
                    className="w-full text-sm text-slate-800 placeholder-slate-400 bg-slate-50/70 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                  />

                  {/* Optional Code Snippet Input Box */}
                  {showCodeInput && (
                    <div className="mt-2 p-3 bg-slate-900 rounded-xl border border-slate-800 text-cyan-400 font-mono text-xs space-y-2">
                      <div className="flex items-center justify-between text-[10px] text-slate-400">
                        <span>CODE SNIPPET (JAVASCRIPT / CSS / SOLIDITY)</span>
                        <button
                          type="button"
                          onClick={() => setShowCodeInput(false)}
                          className="hover:text-white"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <textarea
                        value={codeContent}
                        onChange={(e) => setCodeContent(e.target.value)}
                        rows={3}
                        placeholder="// Paste code snippet here..."
                        className="w-full bg-transparent text-xs font-mono text-cyan-300 focus:outline-none resize-none"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Tag selector chips */}
              <div className="flex items-center gap-1.5 overflow-x-auto pt-1 no-scrollbar">
                {[
                  '#ProjectShowcase',
                  '#Question',
                  '#EthioTechHackathon2026',
                  '#DesignCritique',
                  '#ResourceShare',
                ].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSelectedTag(tag)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium shrink-0 transition-colors ${
                      selectedTag === tag
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Actions & Submit */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setShowCodeInput(!showCodeInput)}
                    className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                      showCodeInput ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-slate-100'
                    }`}
                    title="Insert Code Snippet"
                  >
                    <Code2 className="w-4 h-4" />
                    <span className="hidden sm:inline text-[11px]">Code</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => showToast('Image attachment tool ready')}
                    className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors flex items-center gap-1.5"
                    title="Add Media / Preview"
                  >
                    <ImageIcon className="w-4 h-4" />
                    <span className="hidden sm:inline text-[11px]">Media</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => showToast('Project URL link tool attached')}
                    className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors flex items-center gap-1.5"
                    title="Attach Project Link"
                  >
                    <Link2 className="w-4 h-4" />
                    <span className="hidden sm:inline text-[11px]">Link</span>
                  </button>
                </div>

                <button
                  onClick={handleCreatePost}
                  disabled={!newPostText.trim()}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:hover:bg-blue-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Post to Campus</span>
                </button>
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center justify-between pb-1">
              <div className="flex items-center gap-2">
                {(['All', 'Showcase', 'Question', 'Announcement'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      activeFilter === filter
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50'
                    }`}
                  >
                    {filter === 'All' ? '⚡ All Posts' : filter === 'Showcase' ? '🚀 Showcase' : filter === 'Question' ? '❓ Questions' : '📢 Mentors'}
                  </button>
                ))}
              </div>
              <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                {filteredPosts.length} posts
              </span>
            </div>

            {/* Post Feed List */}
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="rounded-2xl bg-white border border-slate-200/90 shadow-xs p-5 space-y-3.5 hover:border-slate-300 transition-all"
                >
                  {/* Post Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-tr ${post.avatarBg} flex items-center justify-center text-white text-xs font-extrabold shadow-xs`}
                      >
                        {post.avatarText}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h4 className="font-bold text-sm text-slate-900 hover:text-blue-600 cursor-pointer transition-colors">
                            {post.author}
                          </h4>
                          {post.isVerified && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 fill-blue-50" />
                          )}
                          {post.isMentor && (
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
                              Mentor
                            </span>
                          )}
                          <span className="text-xs text-slate-400">· {post.timeAgo}</span>
                        </div>
                        <p className="text-[11px] text-slate-500">{post.university}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => showToast('Post options menu')}
                      className="text-slate-400 hover:text-slate-600 p-1"
                      aria-label="More"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Post Body Content */}
                  <p className="text-sm text-slate-800 leading-relaxed whitespace-pre-line">
                    {post.content}
                  </p>

                  {/* Tag Chips */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap pt-0.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Project Showcase Card */}
                  {post.projectCard && (
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 hover:bg-slate-100/60 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-amber-500" />
                          <h5 className="font-bold text-xs text-slate-900">
                            {post.projectCard.title}
                          </h5>
                        </div>
                        <span className="flex items-center gap-1 text-[11px] font-bold text-slate-600 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                          ⭐ {post.projectCard.stars}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600">
                        {post.projectCard.description}
                      </p>
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {post.projectCard.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-medium text-slate-600"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            showToast(`Launching ${post.projectCard?.title} demo preview`);
                          }}
                          className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Code Snippet Box */}
                  {post.codeSnippet && (
                    <div className="rounded-xl bg-slate-950 p-4 border border-slate-800 font-mono text-xs space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2">
                        <span className="uppercase text-cyan-400 font-bold">
                          {post.codeSnippet.language}
                        </span>
                        <button
                          onClick={() => showToast('Code snippet copied to clipboard!')}
                          className="hover:text-white transition-colors"
                        >
                          Copy
                        </button>
                      </div>
                      <pre className="text-emerald-400 overflow-x-auto text-[11px] leading-relaxed">
                        <code>{post.codeSnippet.code}</code>
                      </pre>
                    </div>
                  )}

                  {/* Event Card */}
                  {post.eventCard && (
                    <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200/80 space-y-2">
                      <div className="flex items-center justify-between">
                        <h5 className="font-bold text-xs text-purple-950">
                          {post.eventCard.title}
                        </h5>
                        <span className="text-[10px] font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">
                          {post.eventCard.attendees} Attending
                        </span>
                      </div>
                      <div className="text-xs text-purple-800 flex items-center gap-4">
                        <span>🗓️ {post.eventCard.date}</span>
                        <span>📍 {post.eventCard.location}</span>
                      </div>
                      <button
                        onClick={() => showToast('RSVP Confirmed! Calendar invitation added.')}
                        className="mt-1 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow-xs transition-colors"
                      >
                        RSVP / Join Session
                      </button>
                    </div>
                  )}

                  {/* Social Action Bar */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-colors ${
                        post.userLiked
                          ? 'text-rose-600 font-bold bg-rose-50'
                          : 'hover:bg-slate-100 hover:text-slate-800'
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 ${post.userLiked ? 'fill-rose-600 text-rose-600 scale-110' : ''}`}
                      />
                      <span>{post.likes}</span>
                    </button>

                    <button
                      onClick={() => toggleComments(post.id)}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-800 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.commentsCount}</span>
                    </button>

                    <button
                      onClick={() => showToast('Post link copied to clipboard!')}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-800 transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                      <span className="hidden sm:inline">{post.repostsCount}</span>
                    </button>

                    <button
                      onClick={() => toggleBookmark(post.id)}
                      className={`p-1.5 rounded-lg transition-colors ${
                        post.isSaved
                          ? 'text-blue-600 bg-blue-50'
                          : 'hover:bg-slate-100 hover:text-slate-800'
                      }`}
                      aria-label="Bookmark"
                    >
                      <Bookmark
                        className={`w-4 h-4 ${post.isSaved ? 'fill-blue-600 text-blue-600' : ''}`}
                      />
                    </button>
                  </div>

                  {/* Expandable Comments Section */}
                  {expandedPostComments[post.id] && (
                    <div className="pt-3 border-t border-slate-100 space-y-3 bg-slate-50/70 -mx-5 -mb-5 p-5 rounded-b-2xl">
                      {/* Existing comments */}
                      <div className="space-y-2.5">
                        {post.commentsList.map((c) => (
                          <div key={c.id} className="flex items-start gap-2.5 text-xs">
                            <div
                              className={`w-7 h-7 rounded-full bg-gradient-to-tr ${c.avatarBg} flex items-center justify-center text-white text-[10px] font-bold shrink-0 mt-0.5`}
                            >
                              {c.avatarText}
                            </div>
                            <div className="flex-1 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-bold text-slate-900">{c.author}</span>
                                <span className="text-[10px] text-slate-400">{c.timeAgo}</span>
                              </div>
                              <p className="text-slate-700 leading-relaxed">{c.content}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Comment Input */}
                      <div className="flex items-center gap-2 pt-1">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                          MB
                        </div>
                        <input
                          type="text"
                          value={newCommentInputs[post.id] || ''}
                          onChange={(e) =>
                            setNewCommentInputs({ ...newCommentInputs, [post.id]: e.target.value })
                          }
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              handleAddComment(post.id);
                            }
                          }}
                          placeholder="Write a constructive reply or question..."
                          className="flex-1 text-xs text-slate-800 bg-white border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        <button
                          onClick={() => handleAddComment(post.id)}
                          className="p-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                          aria-label="Submit comment"
                        >
                          <Send className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </main>

          {/* =========================================================================
              RIGHT COLUMN: TRENDING & WHO TO FOLLOW (3 cols)
          ========================================================================== */}
          <aside className="lg:col-span-3 space-y-5 select-none hidden lg:block">
            {/* Trending on Ethiopian Campuses */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                  <span>Trending on Campus</span>
                </h4>
              </div>

              <div className="space-y-3 text-xs">
                {[
                  { tag: '#EthioTechHackathon2026', meta: 'University Competition · 3.4k posts' },
                  { tag: '#ChapaPaymentAPI', meta: 'Developer Tools · 1.2k posts' },
                  { tag: '#AAU_FinalExams', meta: 'Academics · 2.1k posts' },
                  { tag: '#FigmaDesignSystem', meta: 'Design Hub · 890 posts' },
                  { tag: '#SolidityBootcamp', meta: 'Web3 Track · 640 posts' },
                ].map((item, idx) => (
                  <div
                    key={item.tag}
                    onClick={() => {
                      setSelectedTag(item.tag);
                      showToast(`Browsing ${item.tag}`);
                    }}
                    className="cursor-pointer group"
                  >
                    <div className="text-[10px] text-slate-400 font-medium">{idx + 1} · {item.meta}</div>
                    <div className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {item.tag}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Who to Follow / Verified Mentors */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-blue-600" />
                <span>Mentors &amp; Leaders</span>
              </h4>

              <div className="space-y-3">
                {[
                  {
                    id: 'm-1',
                    name: 'Dr. Solomon Abebe',
                    role: 'AI Research Lead @ AAU',
                    avatarBg: 'from-emerald-500 to-teal-600',
                    avatarText: 'SA',
                  },
                  {
                    id: 'm-2',
                    name: 'Hana Tadesse',
                    role: 'Design Lead @ Safaricom ET',
                    avatarBg: 'from-pink-500 to-rose-600',
                    avatarText: 'HT',
                  },
                  {
                    id: 'm-3',
                    name: 'Alex Chen',
                    role: 'Senior Data Scientist',
                    avatarBg: 'from-blue-500 to-indigo-600',
                    avatarText: 'AC',
                  },
                ].map((m) => {
                  const isFollowing = followedMentors[m.id];
                  return (
                    <div key={m.id} className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className={`w-8 h-8 rounded-full bg-gradient-to-tr ${m.avatarBg} flex items-center justify-center text-white text-[11px] font-bold shrink-0`}
                        >
                          {m.avatarText}
                        </div>
                        <div className="min-w-0">
                          <h5 className="text-xs font-bold text-slate-900 truncate">{m.name}</h5>
                          <p className="text-[10px] text-slate-400 truncate">{m.role}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setFollowedMentors({
                            ...followedMentors,
                            [m.id]: !isFollowing,
                          });
                          showToast(
                            !isFollowing
                              ? `You are now following ${m.name}`
                              : `Unfollowed ${m.name}`
                          );
                        }}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all shrink-0 ${
                          isFollowing
                            ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                      >
                        {isFollowing ? 'Following' : 'Follow'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Upcoming Hackathon Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-900 to-indigo-950 text-white space-y-2.5 shadow-md">
              <span className="inline-block px-2 py-0.5 rounded bg-cyan-400/20 text-cyan-300 font-mono text-[10px] font-bold">
                CAMPUS HACKATHON
              </span>
              <h4 className="font-extrabold text-sm leading-tight text-white">
                UniHub x AAU 2026 Innovation Challenge
              </h4>
              <p className="text-[11px] text-slate-300">
                120 student teams registered. Showcase your prototype and win seed mentorship.
              </p>
              <div className="pt-1 flex items-center justify-between text-xs">
                <span className="text-cyan-300 font-bold">Nov 12-14, 2026</span>
                <Link
                  href="/#events"
                  className="px-2.5 py-1 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-[11px] transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
