'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Check,
  Sparkles,
  Bot,
  MessageSquare,
  HelpCircle,
  Building,
} from 'lucide-react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: 'Misgana Berhane',
    email: 'misghanaberhane@gmail.com',
    role: 'Student',
    subject: 'Question regarding course certificates & internship opportunities',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setToastMessage('Thank you! Your message has been sent to our Addis Ababa team.');
      setFormData({
        name: '',
        email: '',
        role: 'Student',
        subject: '',
        message: '',
      });
      setTimeout(() => setToastMessage(''), 5000);
    }, 700);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-slate-900 pb-20">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed top-24 right-8 z-50 px-4 py-3 rounded-2xl bg-slate-900 text-white text-xs font-semibold shadow-2xl flex items-center gap-2 animate-bounce">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Banner */}
      <section className="bg-white border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 fill-blue-600" />
            <span>WE ARE HERE TO HELP</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact Learning Hub
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Have questions about university partnerships, enrollment, or career opportunities? Our team is always happy to connect.
          </p>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900">Email Inquiries</h3>
                <p className="text-xs text-slate-500">
                  Direct support for students, mentors, and employers.
                </p>
                <div className="pt-1">
                  <a
                    href="mailto:support@learninghub.et"
                    className="text-xs font-semibold text-blue-600 hover:underline"
                  >
                    support@learninghub.et
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900">Addis Ababa Innovation Office</h3>
                <p className="text-xs text-slate-500">
                  Bole Sub-city, Near Edna Mall, Addis Ababa, Ethiopia.
                </p>
                <p className="text-xs font-medium text-slate-600 pt-1">
                  Mon – Fri: 8:30 AM – 5:30 PM EAT
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900">Direct Telephone</h3>
                <p className="text-xs text-slate-500">
                  Call our Addis Ababa campus relations desk.
                </p>
                <div className="pt-1">
                  <a
                    href="tel:+251911000000"
                    className="text-xs font-semibold text-slate-800 hover:text-blue-600"
                  >
                    +251 (0) 91 123 4567
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-700 text-white shadow-md space-y-3">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-cyan-300" />
                <h4 className="text-sm font-bold">Need Instant Answers?</h4>
              </div>
              <p className="text-xs text-blue-100 leading-relaxed">
                Our 24/7 AI Learning Assistant can help clarify course details, prerequisites, and registration questions instantly.
              </p>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-xs font-bold text-white underline hover:text-blue-200 pt-1"
              >
                Browse Frequently Asked Questions →
              </Link>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Send us a message
                </h2>
                <p className="text-xs text-slate-500">
                  Fill out the form below and we will respond within 24 business hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-800">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Misgana Berhane"
                      className="w-full h-11 px-3.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-600 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-800">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. misgana@example.com"
                      className="w-full h-11 px-3.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-800">
                      I am a...
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-600 bg-white"
                    >
                      <option value="Student">University Student</option>
                      <option value="Mentor">Prospective Mentor / Instructor</option>
                      <option value="Employer">Hiring Partner / Company</option>
                      <option value="University">University Administrator</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-800">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Course enrollment help"
                      className="w-full h-11 px-3.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-800">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your inquiry, feedback, or partnership request..."
                    className="w-full p-3.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-blue-600 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
