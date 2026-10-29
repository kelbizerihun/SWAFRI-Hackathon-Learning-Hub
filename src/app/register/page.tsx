'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  BookOpen,
  HelpCircle,
  Sparkles,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  GraduationCap,
  Building,
  MapPin,
  Compass,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Search,
  Briefcase,
  ExternalLink,
} from 'lucide-react';
import { registrationOptions } from '@/lib/cms';

export default function RegisterPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState('Misgana Berhane');
  const [email, setEmail] = useState('misghanaberhane@gmail.com');
  const [password, setPassword] = useState('LearnTogether#26');
  const [confirmPassword, setConfirmPassword] = useState('LearnTogether#26');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [role, setRole] = useState('Student');
  const [university, setUniversity] = useState('University of Addis abeba');
  const [region, setRegion] = useState('Addis Abeba');
  const [city, setCity] = useState('Addisabeba');
  const [academicStatus, setAcademicStatus] = useState('Junior');
  const [fieldOfStudy, setFieldOfStudy] = useState('Computer Science');
  const [agreed, setAgreed] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dropdown UI toggles
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [uniDropdownOpen, setUniDropdownOpen] = useState(false);
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [fieldDropdownOpen, setFieldDropdownOpen] = useState(false);
  const [uniSearch, setUniSearch] = useState('');
  const [fieldSearch, setFieldSearch] = useState('');

  // Validation
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordsMatch = password && confirmPassword && password === confirmPassword;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEmailValid && passwordsMatch && agreed) {
      setIsSubmitting(true);
      setTimeout(() => {
        router.push('/dashboard');
      }, 700);
    }
  };

  const filteredUnis = registrationOptions.universities.filter((u) =>
    u.name.toLowerCase().includes(uniSearch.toLowerCase())
  );

  const filteredFields = registrationOptions.fieldsOfStudy.filter((f) =>
    f.toLowerCase().includes(fieldSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col justify-between">
      {/* Top Header matching Screenshot 1 */}
      <header className="w-full border-b border-slate-200 bg-white px-6 sm:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-xs">
            <BookOpen className="w-5 h-5 fill-current" />
          </div>
          <span className="font-bold text-lg text-slate-900">
            LearningHub
          </span>
        </Link>
        <Link
          href="/#faq"
          className="text-xs font-semibold text-slate-500 hover:text-blue-600 flex items-center gap-1 transition-colors"
        >
          <span>Need a hand? <strong className="text-blue-600">Contact support</strong></span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </header>

      {/* Main Registration Layout (2 Columns matching Screenshot 1) */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* =========================================================================
              LEFT COLUMN matching Screenshot 1
          ========================================================================== */}
          <div className="lg:col-span-6 space-y-6 lg:sticky lg:top-24">
            {/* Intro Hero Badge & Heading */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 fill-purple-700" />
                <span>A WORLD OF POSSIBILITIES</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Join Learning Hub <br />
                <span className="text-blue-600">Today!</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed">
                Create your account to access courses, AI learning, events, and career opportunities.
              </p>
            </div>

            {/* 3D Illustration Banner */}
            <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm bg-slate-100">
              <Image
                src="/images/hero.jpg"
                alt="Students studying with robot assistant"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* 3 Feature Highlights matching Screenshot 1 */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="space-y-1">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900">Learn your way</h4>
                <p className="text-[11px] text-slate-500">Courses that fit you</p>
              </div>

              <div className="space-y-1">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900">Go further with AI</h4>
                <p className="text-[11px] text-slate-500">Your study companion</p>
              </div>

              <div className="space-y-1">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900">Build your future</h4>
                <p className="text-[11px] text-slate-500">Real opportunities</p>
              </div>
            </div>

            {/* Social Proof matching Screenshot 1 */}
            <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">
                  AM
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-purple-600 flex items-center justify-center text-[10px] font-bold text-white">
                  JL
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-emerald-600 flex items-center justify-center text-[10px] font-bold text-white">
                  SK
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Your next chapter starts with us.</p>
                <p className="text-[11px] text-slate-500">A community of learners, educators &amp; innovators.</p>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: REGISTRATION FORM matching Screenshot 1
          ========================================================================== */}
          <div className="lg:col-span-6">
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Create Your Account
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  One account. A whole world of learning. All fields marked * are required.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* =========================================================================
                    STEP 01: ACCOUNT DETAILS
                ========================================================================== */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[11px]">
                      01
                    </span>
                    <span>Account details</span>
                  </div>

                  {/* Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-800">
                        Full Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Misgana Berhane"
                          className="w-full h-[52px] pl-10 pr-4 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 transition-all"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-800">
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="misghanaberhane@gmail.com"
                          className={`w-full h-[52px] pl-10 pr-9 rounded-xl bg-white border text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all ${
                            email && isEmailValid
                              ? 'border-emerald-500 focus:border-emerald-600'
                              : email && !isEmailValid
                              ? 'border-red-500 focus:border-red-600'
                              : 'border-slate-300 focus:border-blue-600'
                          }`}
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          {email && isEmailValid && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {email && isEmailValid && (
                    <p className="text-[11px] text-emerald-600 font-medium -mt-2">
                      Email looks good.
                    </p>
                  )}

                  {/* Password & Confirm Password */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Password */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-800">
                        Password *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Lock className="w-4 h-4" />
                        </div>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full h-[52px] pl-10 pr-9 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 font-mono focus:outline-none focus:border-blue-600 transition-all"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-700"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-800">
                        Confirm Password *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Lock className="w-4 h-4" />
                        </div>
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          required
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className={`w-full h-[52px] pl-10 pr-9 rounded-xl bg-white border text-xs sm:text-sm text-slate-900 font-mono focus:outline-none transition-all ${
                            confirmPassword && passwordsMatch
                              ? 'border-emerald-500'
                              : 'border-slate-300 focus:border-blue-600'
                          }`}
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-1.5">
                          {confirmPassword && passwordsMatch && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          )}
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="text-slate-400 hover:text-slate-700"
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="w-4 h-4" />
                            ) : (
                              <Eye className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Password Indicators */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11px]">
                    <div>
                      <div className="grid grid-cols-4 gap-1.5 mb-1">
                        <div className="h-1.5 rounded-full bg-emerald-500" />
                        <div className="h-1.5 rounded-full bg-emerald-500" />
                        <div className="h-1.5 rounded-full bg-emerald-500" />
                        <div className="h-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <p className="text-emerald-600 font-medium">
                        Strong password · 8+ characters, a number &amp; a symbol
                      </p>
                    </div>

                    <div>
                      {confirmPassword && passwordsMatch && (
                        <p className="text-emerald-600 font-medium">Passwords match.</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* =========================================================================
                    STEP 02: YOUR LEARNING PROFILE
                ========================================================================== */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[11px]">
                      02
                    </span>
                    <span>Your learning profile</span>
                  </div>

                  {/* User Role & University */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* User Role */}
                    <div className="space-y-1.5 relative">
                      <label className="block text-xs font-semibold text-slate-800">
                        User Role *
                      </label>
                      <button
                        type="button"
                        onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                        className="w-full h-[52px] px-3.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-left flex items-center justify-between hover:border-slate-400 transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <GraduationCap className="w-4 h-4 text-blue-600" />
                          <span className="text-slate-900 font-medium">{role}</span>
                        </div>
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      </button>

                      {roleDropdownOpen && (
                        <div className="absolute top-[75px] left-0 right-0 z-20 rounded-xl bg-white border border-slate-200 shadow-xl p-1 space-y-1">
                          {registrationOptions.roles.map((r) => (
                            <button
                              key={r}
                              type="button"
                              onClick={() => {
                                setRole(r);
                                setRoleDropdownOpen(false);
                              }}
                              className={`w-full px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between text-left transition-colors ${
                                role === r
                                  ? 'bg-blue-50 text-blue-700 font-semibold'
                                  : 'text-slate-700 hover:bg-slate-50'
                              }`}
                            >
                              <span>{r}</span>
                              {role === r && <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* University */}
                    <div className="space-y-1.5 relative">
                      <label className="block text-xs font-semibold text-slate-800">
                        University *
                      </label>
                      <button
                        type="button"
                        onClick={() => setUniDropdownOpen(!uniDropdownOpen)}
                        className="w-full h-[52px] px-3.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-left flex items-center justify-between hover:border-slate-400 transition-colors"
                      >
                        <div className="flex items-center gap-2.5 overflow-hidden">
                          <Building className="w-4 h-4 text-blue-600 shrink-0" />
                          <span className="text-slate-900 font-medium truncate">{university}</span>
                        </div>
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 ml-1" />
                      </button>

                      {uniDropdownOpen && (
                        <div className="absolute top-[75px] left-0 right-0 z-20 rounded-xl bg-white border border-slate-200 shadow-2xl p-2 space-y-2 max-h-64 overflow-y-auto">
                          <div className="relative">
                            <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                            <input
                              type="text"
                              value={uniSearch}
                              onChange={(e) => setUniSearch(e.target.value)}
                              placeholder="Search university..."
                              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none"
                            />
                          </div>
                          <div className="space-y-1">
                            {filteredUnis.map((u) => (
                              <button
                                key={u.name}
                                type="button"
                                onClick={() => {
                                  setUniversity(u.name);
                                  setUniDropdownOpen(false);
                                }}
                                className={`w-full p-2.5 rounded-lg text-left transition-colors flex items-center justify-between ${
                                  university === u.name
                                    ? 'bg-blue-50 text-blue-700 font-semibold'
                                    : 'text-slate-700 hover:bg-slate-50'
                                }`}
                              >
                                <div>
                                  <div className="text-xs font-semibold">{u.name}</div>
                                  <div className="text-[10px] text-slate-400">{u.city}</div>
                                </div>
                                {university === u.name && (
                                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Region & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Region */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-800">
                        Region *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Compass className="w-4 h-4" />
                        </div>
                        <select
                          value={region}
                          onChange={(e) => setRegion(e.target.value)}
                          className="w-full h-[52px] pl-10 pr-8 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 appearance-none focus:outline-none focus:border-blue-600"
                        >
                          {registrationOptions.regions.map((reg) => (
                            <option key={reg} value={reg}>
                              {reg}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-4 pointer-events-none" />
                      </div>
                    </div>

                    {/* City */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-800">
                        City *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          required
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="Addisabeba"
                          className="w-full h-[52px] pl-10 pr-4 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Academic Status & Field of Study */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Academic Status */}
                    <div className="space-y-1.5 relative">
                      <label className="block text-xs font-semibold text-slate-800">
                        Academic Status *
                      </label>
                      <button
                        type="button"
                        onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
                        className="w-full h-[52px] px-3.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-left flex items-center justify-between hover:border-slate-400 transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <GraduationCap className="w-4 h-4 text-blue-600" />
                          <span className="text-slate-900 font-medium">{academicStatus}</span>
                        </div>
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      </button>

                      {statusDropdownOpen && (
                        <div className="absolute top-[75px] left-0 right-0 z-20 rounded-xl bg-white border border-slate-200 shadow-xl p-1.5 space-y-1 max-h-56 overflow-y-auto">
                          {registrationOptions.academicStatuses.map((st) => (
                            <button
                              key={st}
                              type="button"
                              onClick={() => {
                                setAcademicStatus(st);
                                setStatusDropdownOpen(false);
                              }}
                              className={`w-full px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between text-left transition-colors ${
                                academicStatus === st
                                  ? 'bg-blue-50 text-blue-700 font-semibold'
                                  : 'text-slate-700 hover:bg-slate-50'
                              }`}
                            >
                              <span>{st}</span>
                              {academicStatus === st && (
                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Field of Study */}
                    <div className="space-y-1.5 relative">
                      <label className="block text-xs font-semibold text-slate-800">
                        Field of Study *
                      </label>
                      <button
                        type="button"
                        onClick={() => setFieldDropdownOpen(!fieldDropdownOpen)}
                        className="w-full h-[52px] px-3.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-left flex items-center justify-between hover:border-slate-400 transition-colors"
                      >
                        <div className="flex items-center gap-2.5 overflow-hidden">
                          <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />
                          <span className="text-slate-900 font-medium truncate">{fieldOfStudy}</span>
                        </div>
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 ml-1" />
                      </button>

                      {fieldDropdownOpen && (
                        <div className="absolute top-[75px] left-0 right-0 z-20 rounded-xl bg-white border border-slate-200 shadow-xl p-2 space-y-2 max-h-56 overflow-y-auto">
                          <div className="relative">
                            <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                            <input
                              type="text"
                              value={fieldSearch}
                              onChange={(e) => setFieldSearch(e.target.value)}
                              placeholder="Search field..."
                              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none"
                            />
                          </div>
                          <div className="space-y-1">
                            {filteredFields.map((f) => (
                              <button
                                key={f}
                                type="button"
                                onClick={() => {
                                  setFieldOfStudy(f);
                                  setFieldDropdownOpen(false);
                                }}
                                className={`w-full p-2 rounded-lg text-left transition-colors flex items-center justify-between text-xs ${
                                  fieldOfStudy === f
                                    ? 'bg-blue-50 text-blue-700 font-semibold'
                                    : 'text-slate-700 hover:bg-slate-50'
                                }`}
                              >
                                <span>{f}</span>
                                {fieldOfStudy === f && (
                                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Terms Agreement Checkbox */}
                <div className="pt-2 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agree"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <label htmlFor="agree" className="text-xs text-slate-600 cursor-pointer">
                    I agree to the{' '}
                    <span className="text-blue-600 underline hover:text-blue-700">
                      Terms &amp; Privacy Policy
                    </span>
                  </label>
                </div>

                {/* Register Submit Button */}
                <button
                  type="submit"
                  disabled={!agreed || isSubmitting}
                  className="w-full h-[52px] rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>{isSubmitting ? 'Creating account...' : 'Register'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Or Continue with Divider */}
                <div className="relative py-2 flex items-center justify-center">
                  <div className="border-t border-slate-200 w-full" />
                  <span className="bg-white px-3 text-[11px] text-slate-400 uppercase tracking-wider absolute">
                    or continue with
                  </span>
                </div>

                {/* Google Button */}
                <button
                  type="button"
                  onClick={() => router.push('/dashboard')}
                  className="w-full h-[52px] rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-xs font-semibold text-slate-700 shadow-xs transition-colors flex items-center justify-center gap-3"
                >
                  <span className="w-4 h-4 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[10px]">
                    G
                  </span>
                  <span>Sign in with Google</span>
                </button>

                {/* Already have an account */}
                <div className="text-center text-xs text-slate-500">
                  Already have an account?{' '}
                  <Link href="/dashboard" className="font-semibold text-blue-600 hover:text-blue-700">
                    Login
                  </Link>
                </div>

                {/* Security Badge */}
                <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-slate-400" />
                  <span>Your information is safe and secure.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Copyright matching Screenshot 1 */}
      <footer className="w-full py-6 px-6 sm:px-12 border-t border-slate-200 bg-white flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
        <p>© 2026 Learning Hub. All rights reserved.</p>
        <p>Built for curious minds. Designed for your future.</p>
      </footer>
    </div>
  );
}
