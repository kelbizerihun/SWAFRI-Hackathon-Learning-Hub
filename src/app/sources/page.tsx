'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Download,
  Search,
  Sparkles,
  FileText,
  Code2,
  Figma,
  Layers,
  Star,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Check,
  FolderArchive,
  Database,
  Cpu,
} from 'lucide-react';

interface ResourceItem {
  id: string;
  title: string;
  category:
    | 'Medicine'
    | 'Engineering'
    | 'Law'
    | 'Social Sciences'
    | 'Figma & Design'
    | 'Code & Starters'
    | 'Cheatsheets'
    | 'Exam Archives';
  description: string;
  fileFormat: string;
  fileSize: string;
  downloads: string;
  rating: number;
  author: string;
  authorBadge: string;
  tags: string[];
  isFeatured?: boolean;
}

export default function SourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const categories = [
    'All',
    'Medicine',
    'Engineering',
    'Law',
    'Social Sciences',
    'Figma & Design',
    'Code & Starters',
    'Cheatsheets',
    'Exam Archives',
  ];

  // Auto-detect category from URL query parameters (e.g. /sources?category=Medicine)
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get('category');
      if (cat && categories.includes(cat)) {
        setSelectedCategory(cat);
      }
    }
  }, []);

  const sourcesList: ResourceItem[] = [
    {
      id: 'src-med-1',
      title: 'AAU Medical Faculty Human Anatomy Lecture Slides & Histology Atlas',
      category: 'Medicine',
      description:
        'Complete curriculum slide deck covering cardiovascular, neuroanatomy, musculoskeletal systems, and histology slide micrographs from Tikur Anbessa Specialized Hospital.',
      fileFormat: 'PPTX / PDF',
      fileSize: '42.5 MB',
      downloads: '3,480',
      rating: 4.9,
      author: 'AAU College of Health Sciences',
      authorBadge: 'Faculty Archive',
      tags: ['Medicine', 'Anatomy', 'Histology', 'Clinical Slides'],
      isFeatured: true,
    },
    {
      id: 'src-eng-1',
      title: 'AAiT Electrical Circuit Schematics & Microcontroller Lab Slides',
      category: 'Engineering',
      description:
        'Comprehensive slide decks and CAD schematics for AC/DC network analysis, digital logic design, operational amplifiers, and embedded STM32 lab guides.',
      fileFormat: 'PDF / CAD',
      fileSize: '24.2 MB',
      downloads: '4,120',
      rating: 4.9,
      author: 'Addis Ababa Institute of Technology (AAiT)',
      authorBadge: 'Engineering Faculty',
      tags: ['Engineering', 'Circuits', 'CAD', 'Lab Slides'],
      isFeatured: true,
    },
    {
      id: 'src-law-1',
      title: 'Ethiopian Civil Code & Constitutional Case Law Briefs 2026',
      category: 'Law',
      description:
        'High-yield judicial summaries, contract law lecture slide decks, tort precedents, and Federal Supreme Court Cassation Division landmark decisions.',
      fileFormat: 'PDF / DOCX',
      fileSize: '9.8 MB',
      downloads: '2,310',
      rating: 4.8,
      author: 'AAU School of Law & Jurisprudence',
      authorBadge: 'Law Review',
      tags: ['Law', 'Civil Code', 'Court Precedents', 'Case Briefs'],
      isFeatured: true,
    },
    {
      id: 'src-soc-1',
      title: 'Sociology Research Methodology & Ethiopian Economic History Slides',
      category: 'Social Sciences',
      description:
        'Lecture slide sets covering quantitative survey design, qualitative ethnography in East Africa, and development policy analyses from AAU faculty.',
      fileFormat: 'PPTX / PDF',
      fileSize: '11.5 MB',
      downloads: '1,940',
      rating: 4.8,
      author: 'AAU College of Social Sciences',
      authorBadge: 'Faculty Research',
      tags: ['Social Sciences', 'Sociology', 'Economics', 'Research Slides'],
      isFeatured: true,
    },
    {
      id: 'src-1',
      title: 'Ethiopian Design System & UI Kit v2.0',
      category: 'Figma & Design',
      description:
        'Complete Figma component library featuring 8pt grid tokens, Amharic typography styles, Ethiopian flag palettes, and 120+ accessible mobile & desktop components.',
      fileFormat: '.FIG',
      fileSize: '14.8 MB',
      downloads: '2,480',
      rating: 4.9,
      author: 'Dr. Solomon Abebe',
      authorBadge: 'Notion Design Lead',
      tags: ['Figma', 'UI Kit', 'Design Tokens', 'Mobile & Web'],
      isFeatured: true,
    },
    {
      id: 'src-2',
      title: 'Next.js 14 + Tailwind SaaS Production Boilerplate',
      category: 'Code & Starters',
      description:
        'Full-stack TypeScript starter kit with App Router, authentication flows, PostgreSQL schema, Lucide icons, and pre-configured responsive layouts.',
      fileFormat: 'GITHUB / ZIP',
      fileSize: '4.2 MB',
      downloads: '3,150',
      rating: 4.9,
      author: 'Sarah Williams',
      authorBadge: 'Principal Engineer',
      tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Auth'],
      isFeatured: true,
    },
    {
      id: 'src-3',
      title: 'Pandas & NumPy Data Science Master Cheatsheet',
      category: 'Cheatsheets',
      description:
        'Concise, high-yield reference guide for data manipulation, DataFrame slicing, groupby operations, lambda cleaning, and visualization idioms in Python.',
      fileFormat: 'PDF',
      fileSize: '1.8 MB',
      downloads: '4,210',
      rating: 4.8,
      author: 'Alex Chen',
      authorBadge: 'Lead Data Scientist',
      tags: ['Python', 'Pandas', 'NumPy', 'Data Analysis'],
    },
    {
      id: 'src-4',
      title: 'Addis Ababa University CS Final Exam Archive (2020-2025)',
      category: 'Exam Archives',
      description:
        'Curated repository of past midterms, finals, and lab practicals for Algorithms, Operating Systems, Computer Architecture, and Database Systems.',
      fileFormat: 'ZIP / PDF',
      fileSize: '38.5 MB',
      downloads: '5,840',
      rating: 4.9,
      author: 'AAU Tech Student Council',
      authorBadge: 'Verified Archive',
      tags: ['AAU', 'Exams', 'Algorithms', 'Databases'],
    },
    {
      id: 'src-5',
      title: 'Web3 & Solidity Smart Contract Starter Pack',
      category: 'Code & Starters',
      description:
        'Hardhat development environment with ERC-20, ERC-721 token standards, gas-optimized tests, deploy scripts, and local faucet configuration.',
      fileFormat: 'GITHUB',
      fileSize: '2.4 MB',
      downloads: '1,320',
      rating: 4.7,
      author: 'Ethiopia Web3 Builders',
      authorBadge: 'Community Kit',
      tags: ['Solidity', 'Hardhat', 'Ethereum', 'Smart Contracts'],
    },
    {
      id: 'src-6',
      title: 'UI/UX Spatial Hierarchy & Micro-Interactions Guide',
      category: 'Cheatsheets',
      description:
        'Practical visual rules for card padding, button hierarchies, contrast ratios, spring animations, and state transitions.',
      fileFormat: 'PDF',
      fileSize: '2.1 MB',
      downloads: '1,940',
      rating: 4.9,
      author: 'Dr. Solomon Abebe',
      authorBadge: 'Notion Design Lead',
      tags: ['Typography', 'Auto Layout', 'Color Theory'],
    },
    {
      id: 'src-7',
      title: 'Jimma & Hawassa University Data Structures Lab Solutions',
      category: 'Exam Archives',
      description:
        'C++ & Java implementation solutions for Binary Trees, AVL Trees, Graphs, Dijkstra’s Algorithm, and Hash Tables tested across university lab curricula.',
      fileFormat: 'ZIP / CODE',
      fileSize: '5.6 MB',
      downloads: '2,890',
      rating: 4.8,
      author: 'Jimma University Tech Hub',
      authorBadge: 'Verified Archive',
      tags: ['C++', 'Data Structures', 'Algorithms'],
    },
    {
      id: 'src-8',
      title: 'Modern AI & Prompt Engineering Playbook',
      category: 'Cheatsheets',
      description:
        'Master chain-of-thought prompting, few-shot examples, system prompt tuning, and LLM coding workflows for university study acceleration.',
      fileFormat: 'PDF',
      fileSize: '3.0 MB',
      downloads: '2,410',
      rating: 4.9,
      author: 'Dr. Maya Patel',
      authorBadge: 'AI Research Director',
      tags: ['AI Prompting', 'LLMs', 'Productivity'],
    },
  ];

  const filteredSources = sourcesList.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (item: ResourceItem) => {
    setToastMessage(`Downloading "${item.title}" (${item.fileFormat})...`);
    setTimeout(() => {
      setToastMessage(`✓ "${item.title}" successfully saved to your downloads!`);
      setTimeout(() => setToastMessage(''), 3500);
    }, 800);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-slate-900 pb-20">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-20 right-8 z-50 px-4 py-3 rounded-2xl bg-slate-900 text-white text-xs font-semibold shadow-2xl flex items-center gap-2 animate-bounce">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Hero Header */}
      <section className="bg-white border-b border-slate-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 fill-blue-700" />
              <span>STUDENT SOURCES &amp; RESOURCE REPOSITORY</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Curated Sources, UI Kits &amp; Code Starters
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Accelerate your learning with verified Figma libraries, production-ready boilerplates, high-yield cheatsheets, and Ethiopian university exam archives.
            </p>
          </div>

          {/* Search & Category Pills */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search templates, UI kits, code starters, or exam papers..."
                className="w-full h-11 pl-11 pr-4 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all shadow-2xs"
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
        </div>
      </section>

      {/* Sources Grid Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-8">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-slate-500">
            Showing <span className="text-slate-900 font-bold">{filteredSources.length}</span> curated student resources
          </p>
          <span className="text-xs text-slate-400">All downloads free for university students</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSources.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl bg-white border p-6 flex flex-col justify-between space-y-5 transition-all duration-200 hover:shadow-md ${
                item.isFeatured
                  ? 'border-blue-200 shadow-xs ring-1 ring-blue-500/10'
                  : 'border-slate-200/90 shadow-2xs'
              }`}
            >
              <div className="space-y-4">
                {/* Header row: Format tag & size */}
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200">
                    {item.fileFormat}
                  </span>
                  <div className="flex items-center gap-3 text-slate-400 text-[11px]">
                    <span>{item.fileSize}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-600 font-medium">
                      <Download className="w-3 h-3" />
                      {item.downloads}
                    </span>
                  </div>
                </div>

                {/* Title & Category */}
                <div>
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 leading-snug mt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-50 text-slate-600 border border-slate-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author Info */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-slate-800">{item.author}</span>
                    <p className="text-[10px] text-slate-400">{item.authorBadge}</p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500 font-semibold text-xs">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{item.rating}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleDownload(item)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resource</span>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
