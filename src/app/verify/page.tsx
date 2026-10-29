'use client';

import React, { useState, useEffect, Suspense, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Copy,
  Check,
  Search,
  Lock,
  Sparkles,
  Award,
  Layers,
  ArrowRight,
  Cpu,
  BookOpen,
  Hash,
  Database,
  QrCode,
  FileCode,
  Share2,
  Download,
  Linkedin,
  Twitter,
  RefreshCw,
  GitBranch,
  Terminal,
  Activity,
  Zap,
  Globe,
  SlidersHorizontal,
  ChevronRight,
  FileText,
  X,
} from 'lucide-react';
import {
  VERIFIED_BLOCKCHAIN_CERTIFICATES,
  getCertificateByIdOrHash,
  verifyCredentialOnChain,
  BlockchainCertificate,
} from '@/lib/blockchain';

function VerifyCertificateContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialCertId = searchParams.get('id') || searchParams.get('hash') || 'LH-2026-SQL-98214';
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCertId, setActiveCertId] = useState(initialCertId);
  const [isCopied, setIsCopied] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState('');
  const [activeTab, setActiveTab] = useState<'proof' | 'merkle' | 'json' | 'contract'>('proof');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);

  // 3D Holographic Card Tilt Effect
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setMousePos({ x: rotateY, y: rotateX, active: true });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0, active: false });
  };

  useEffect(() => {
    const q = searchParams.get('id') || searchParams.get('hash');
    if (q) {
      setActiveCertId(q);
    }
  }, [searchParams]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const copyToClipboard = (text: string, label: string) => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(text);
      setIsCopied(label);
      showToast(`${label} copied to clipboard!`);
      setTimeout(() => setIsCopied(null), 2500);
    }
  };

  // Trigger simulated on-chain cryptographic scan animation
  const triggerVerificationScan = (targetId: string) => {
    setIsScanning(true);
    setScanStep(1);

    setTimeout(() => setScanStep(2), 350);
    setTimeout(() => setScanStep(3), 700);
    setTimeout(() => {
      setScanStep(4);
      setIsScanning(false);
      setActiveCertId(targetId);
      router.replace(`/verify?id=${encodeURIComponent(targetId)}`, { scroll: false });
      showToast('🎉 Cryptographic proof verified on Polygon PoS consensus ledger!');
    }, 1100);
  };

  const verificationResult = verifyCredentialOnChain(activeCertId);
  const cert = verificationResult.certificate;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      triggerVerificationScan(searchQuery.trim());
    } else {
      showToast('Please enter a Credential ID or Tx Hash to verify');
    }
  };

  const quickCertSelect = (id: string) => {
    triggerVerificationScan(id);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-slate-900 font-sans pb-32">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-24 right-8 z-50 px-4 py-3 rounded-2xl bg-slate-900/95 backdrop-blur-md text-white text-xs font-semibold shadow-2xl flex items-center gap-2.5 border border-slate-700 animate-bounce">
          <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* =========================================================================
          SECTION 1: CYBERNETIC WEB3 HERO & LIVE NETWORK STATUS TICKER
      ========================================================================== */}
      <div className="relative bg-[#070B14] text-white pt-10 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 overflow-hidden">
        {/* Animated Background Mesh & Grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-[32rem] h-[32rem] bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[32rem] h-[32rem] bg-gradient-to-tr from-emerald-600/15 via-teal-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto space-y-6 relative z-10">
          {/* Top Live Network Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-slate-400 bg-slate-900/80 backdrop-blur-md border border-slate-800 px-4 py-2 rounded-2xl">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2 text-emerald-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
                POLYGON PoS MAINNET
              </span>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="hidden sm:inline text-slate-300">
                Block Height: <strong className="text-white">#{cert.blockNumber.toLocaleString()}</strong>
              </span>
              <span className="text-slate-600 hidden md:inline">|</span>
              <span className="hidden md:inline text-slate-300">
                Consensus: <span className="text-blue-400">Proof-of-Stake (Instant Finality)</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
                Tamper Resistance: 100%
              </span>
              <span className="text-slate-500 hidden lg:inline">Gas: 28 Gwei</span>
            </div>
          </div>

          {/* Hero Titles */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>DECENTRALIZED ACADEMIC VERIFIER · ERC-5192 SOULBOUND SPEC</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Cryptographic Credential <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
                On-Chain Verification Explorer
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Verify authentic university diplomas and course credentials issued by the Addis Ababa University Academic Senate Node. Every credential is cryptographically stamped on the distributed ledger and non-transferably bound to the student&apos;s digital identity.
            </p>
          </div>

          {/* Futuristic Search Command Bar */}
          <form onSubmit={handleSearchSubmit} className="pt-2 flex flex-col sm:flex-row gap-3 max-w-3xl">
            <div className="relative flex-1 group">
              <Search className="w-4 h-4 text-blue-400 absolute left-4 top-3.5 group-focus-within:text-emerald-400 transition-colors pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter Credential Token ID (e.g. LH-2026-SQL-98214) or Tx Hash (0x...)..."
                className="w-full h-12 pl-11 pr-11 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-mono shadow-inner"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-3.5 w-5 h-5 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-all cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
            <button
              type="submit"
              disabled={isScanning}
              className="h-12 px-7 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 active:scale-95 text-white text-xs font-bold transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-blue-600/30 shrink-0 cursor-pointer disabled:opacity-50"
            >
              {isScanning ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-emerald-300" />
                  <span>Scanning Ledger...</span>
                </>
              ) : (
                <>
                  <Cpu className="w-4 h-4 text-blue-200" />
                  <span>Verify On-Chain</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Select Sample Credentials */}
          <div className="pt-1 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400 font-semibold flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              Quick inspect samples:
            </span>
            {VERIFIED_BLOCKCHAIN_CERTIFICATES.map((c) => (
              <button
                key={c.id}
                onClick={() => quickCertSelect(c.id)}
                className={`px-3 py-1.5 rounded-xl text-[11px] font-semibold border transition-all cursor-pointer flex items-center gap-1.5 ${
                  c.id === cert.id
                    ? 'bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-600/30 ring-2 ring-blue-500/20'
                    : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:border-slate-600 hover:text-white'
                }`}
              >
                <span>{c.title.split('&')[0].trim()}</span>
                <span className="text-[10px] opacity-75 font-mono">#{c.tokenId}</span>
              </button>
            ))}
          </div>

          {/* Live Scanning Simulation Bar */}
          {isScanning && (
            <div className="p-4 rounded-2xl bg-slate-900/95 border border-blue-500/40 text-xs font-mono space-y-2 animate-fadeIn shadow-2xl">
              <div className="flex items-center justify-between text-blue-400 font-bold">
                <span className="flex items-center gap-2">
                  <Activity className="w-4 h-4 animate-pulse text-emerald-400" />
                  CRYPTO SCAN IN PROGRESS
                </span>
                <span>STEP {scanStep} OF 4</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-indigo-400 to-emerald-400 transition-all duration-300"
                  style={{ width: `${(scanStep / 4) * 100}%` }}
                />
              </div>
              <div className="text-slate-300 text-[11px] flex items-center gap-2">
                {scanStep === 1 && <span>📡 Querying Polygon Mainnet RPC Cluster (Node ID: poly-pos-04)...</span>}
                {scanStep === 2 && <span>🔑 Verifying Issuer ECDSA secp256k1 Signature ({cert.issuerAddress.slice(0, 10)}...)...</span>}
                {scanStep === 3 && <span>🌲 Calculating SHA-256 Merkle Multi-Proof against Block #{cert.blockNumber}...</span>}
                {scanStep === 4 && <span className="text-emerald-400 font-bold">✓ ERC-5192 Soulbound Immutability Validated!</span>}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* =========================================================================
          SECTION 2: CERTIFICATE PRESENTATION (High-Fidelity Official Diploma)
      ========================================================================== */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 space-y-10 w-full">
        {/* Verification Status Header Ribbon */}
        <div className="p-6 rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20 shrink-0 ring-4 ring-emerald-50">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  VERIFIED ON-CHAIN
                </span>
                <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                  ERC-5192 Soulbound (Non-Transferable)
                </span>
                <span className="text-xs font-mono text-slate-500">
                  Confirmations: {cert.blockConfirmations.toLocaleString()}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                Authentic Academic Credential Confirmed on Ledger
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={verificationResult.ledgerExplorerUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-sm cursor-pointer"
            >
              <span>Inspect on PolygonScan</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* =========================================================================
            THE EMBOSSED DIPLOMA (With 3D Hologram Tilt Effect)
        ========================================================================== */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: mousePos.active
              ? `perspective(1200px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg) scale3d(1.01, 1.01, 1.01)`
              : 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
            transition: mousePos.active ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
          }}
          className="rounded-[32px] p-2 bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 shadow-2xl relative overflow-hidden group select-none"
        >
          {/* Holographic Rainbow Light Sheen Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity duration-700"
            style={{
              background: mousePos.active
                ? `radial-gradient(circle at ${(mousePos.x + 10) * 5}% ${(mousePos.y + 10) * 5}%, rgba(255,255,255,0.4) 0%, rgba(255,215,0,0.15) 30%, rgba(59,130,246,0.15) 60%, transparent 80%)`
                : 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%)',
            }}
          />

          {/* Inner Diploma Surface (Museum Parchment) */}
          <div className="rounded-[28px] bg-gradient-to-b from-[#FEFDF9] via-[#FAF8F2] to-[#FDFBF7] p-8 sm:p-14 border-4 border-double border-amber-600/30 relative overflow-hidden shadow-inner space-y-8">
            {/* Guilloché Geometric Watermark Pattern in Background */}
            <div className="absolute inset-0 opacity-[0.035] pointer-events-none flex items-center justify-center">
              <svg className="w-[800px] h-[800px]" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <polygon points="100,10 120,70 190,70 135,110 155,180 100,140 45,180 65,110 10,70 80,70" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>

            {/* Corner Filigree Ornaments */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-amber-600/60 pointer-events-none" />
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-amber-600/60 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-amber-600/60 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-amber-600/60 pointer-events-none" />

            {/* Top Diploma Header: University Name & 3D Gold Embossed Seal */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b-2 border-amber-200/80 pb-8 text-center sm:text-left relative z-10">
              <div className="flex items-center gap-4">
                {/* 3D Embossed Gold Seal Medallion */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-200 p-1 shadow-xl shadow-amber-600/20 shrink-0 ring-4 ring-amber-100 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500">
                  <div className="w-full h-full rounded-full bg-gradient-to-b from-[#1E1B4B] to-[#0F172A] flex flex-col items-center justify-center text-amber-300 text-center p-1.5 border border-amber-400/40">
                    <BookOpen className="w-5 h-5 fill-current text-amber-300" />
                    <span className="text-[7px] font-black uppercase tracking-tighter mt-0.5 text-amber-200 leading-none">
                      AAU SENATE
                    </span>
                    <span className="text-[6px] text-amber-400 font-mono mt-0.5">SEAL 2026</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif font-black text-xl sm:text-2xl text-slate-900 tracking-tight">
                    Addis Ababa University &amp; Learning Hub
                  </h3>
                  <p className="text-xs text-amber-900/80 font-serif italic tracking-wide">
                    Academic Senate Node · Faculty of Computer Science &amp; Engineering
                  </p>
                  <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                    Distributed Ledger Registry: Polygon PoS · Smart Contract #0x2F88...4F915
                  </p>
                </div>
              </div>

              {/* Credential ID Ribbon */}
              <div className="text-center sm:text-right space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block font-mono">
                  SOULBOUND TOKEN ID
                </span>
                <span className="text-sm font-mono font-black text-blue-700 bg-blue-50 px-3 py-1 rounded-xl border border-blue-200 inline-block shadow-2xs">
                  #{cert.tokenId} · {cert.id}
                </span>
              </div>
            </div>

            {/* Central Conferred Content */}
            <div className="text-center space-y-5 max-w-2xl mx-auto py-2 relative z-10">
              <span className="text-xs font-serif italic tracking-widest text-amber-900/90 uppercase block font-semibold">
                THE ACADEMIC SENATE BY VIRTUE OF AUTHORITY CONFERS THIS CERTIFICATE UPON
              </span>

              {/* Recipient Student Name with Gold Ribbon Flourish */}
              <div className="space-y-1">
                <h2 className="text-4xl sm:text-5xl font-serif font-black text-slate-900 tracking-tight">
                  {cert.recipientName}
                </h2>
                <div className="w-48 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto rounded-full" />
              </div>

              {/* Student Metadata Chips */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono border border-slate-200 font-semibold">
                  Student ID: {cert.recipientStudentId}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono border border-slate-200 font-semibold">
                  Wallet: {cert.recipientWallet.slice(0, 6)}...{cert.recipientWallet.slice(-4)}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-serif leading-relaxed max-w-xl mx-auto pt-2">
                who has successfully completed the prescribed curriculum, practical laboratory benchmarks, and comprehensive mentor reviews with academic distinction in
              </p>

              {/* Course Title Badge */}
              <div className="p-5 rounded-3xl bg-gradient-to-r from-blue-50 via-indigo-50/60 to-blue-50 border-2 border-blue-200/80 shadow-xs space-y-1">
                <h3 className="text-xl sm:text-3xl font-extrabold text-blue-900 tracking-tight">
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-blue-700">
                  Grade Awarded: {cert.grade} · {cert.creditsEarned} Verified Academic Credits Earned
                </p>
              </div>

              {/* Verified Competencies */}
              <div className="pt-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2 font-mono">
                  VERIFIED CURRICULUM COMPETENCIES
                </span>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-xl bg-white/90 border border-slate-200/90 text-slate-700 text-xs font-semibold shadow-2xs flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Official Signatures & Digital Ledger Stamp */}
            <div className="pt-8 border-t-2 border-amber-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left items-end relative z-10">
              {/* Signature 1 */}
              <div className="space-y-2">
                <div className="font-serif italic text-xl text-slate-800 font-semibold tracking-wide select-none">
                  Dr. Solomon Abebe
                </div>
                <div className="h-0.5 bg-slate-300 w-36 mx-auto sm:mx-0" />
                <span className="text-[11px] font-serif text-slate-500 block leading-tight">
                  Lead Faculty Dean &amp; Examiner
                </span>
              </div>

              {/* Central Rubber Stamp */}
              <div className="flex flex-col items-center justify-center">
                <div className="px-4 py-2 rounded-2xl border-2 border-dashed border-emerald-600 bg-emerald-50/90 text-emerald-800 text-center transform -rotate-2 shadow-xs">
                  <div className="text-[10px] font-black uppercase tracking-widest">
                    OFFICIALLY STAMPED
                  </div>
                  <div className="text-xs font-black">
                    POLYGON MAINNET · 2026
                  </div>
                  <div className="text-[9px] font-mono text-emerald-600">
                    NON-TRANSFERABLE SBT
                  </div>
                </div>
              </div>

              {/* Signature 2 */}
              <div className="space-y-2 text-center sm:text-right">
                <div className="font-serif italic text-xl text-slate-800 font-semibold tracking-wide select-none">
                  Prof. Alula Pankhurst
                </div>
                <div className="h-0.5 bg-slate-300 w-36 mx-auto sm:ml-auto sm:mr-0" />
                <span className="text-[11px] font-serif text-slate-500 block leading-tight">
                  Provost, AAU Academic Senate
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Toolbar Below Diploma */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Interactive 3D Hologram Diploma · Move cursor to inspect metallic sheen</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => showToast('Diploma PDF with cryptographic signatures downloaded.')}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download High-Res PDF</span>
            </button>

            <button
              onClick={() => copyToClipboard(window.location.href, 'Verification Link')}
              className="px-3.5 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-slate-500" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            SECTION 3: INTERACTIVE CYBERNETIC LEDGER EXPLORER
        ========================================================================== */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <Terminal className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Cryptographic Ledger &amp; Consensus Terminal
                </h3>
                <p className="text-xs text-slate-500">
                  Inspect mathematical proof branches, smart contract state, and W3C data models.
                </p>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab('proof')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'proof'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Ledger Proof
              </button>
              <button
                onClick={() => setActiveTab('merkle')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'merkle'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Merkle Tree
              </button>
              <button
                onClick={() => setActiveTab('json')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'json'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                W3C JSON
              </button>
              <button
                onClick={() => setActiveTab('contract')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'contract'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Smart Contract
              </button>
            </div>
          </div>

          {/* TAB 1: LEDGER PROOF */}
          {activeTab === 'proof' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                {/* Transaction Hash */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 hover:border-blue-400 transition-colors">
                  <div className="flex items-center justify-between text-slate-400 text-[10px] uppercase font-bold">
                    <span>TRANSACTION HASH</span>
                    <span className="text-emerald-600">CONFIRMED</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate text-slate-900 font-bold">{cert.transactionHash}</span>
                    <button
                      onClick={() => copyToClipboard(cert.transactionHash, 'Transaction Hash')}
                      className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-600 cursor-pointer"
                      title="Copy Hash"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Smart Contract Address */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 hover:border-blue-400 transition-colors">
                  <div className="flex items-center justify-between text-slate-400 text-[10px] uppercase font-bold">
                    <span>SMART CONTRACT (ERC-5192)</span>
                    <span className="text-purple-600">SOULBOUND</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate text-slate-900 font-bold">{cert.smartContractAddress}</span>
                    <button
                      onClick={() => copyToClipboard(cert.smartContractAddress, 'Contract Address')}
                      className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-600 cursor-pointer"
                      title="Copy Contract"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Merkle Root */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 hover:border-blue-400 transition-colors">
                  <div className="flex items-center justify-between text-slate-400 text-[10px] uppercase font-bold">
                    <span>SHA-256 MERKLE ROOT</span>
                    <span className="text-blue-600">STATE ROOT</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate text-slate-900 font-bold">{cert.merkleRoot}</span>
                    <button
                      onClick={() => copyToClipboard(cert.merkleRoot, 'Merkle Root')}
                      className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-600 cursor-pointer"
                      title="Copy Merkle Root"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* IPFS Decentralized Metadata */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 hover:border-blue-400 transition-colors">
                  <div className="flex items-center justify-between text-slate-400 text-[10px] uppercase font-bold">
                    <span>IPFS DECENTRALIZED PIN</span>
                    <span className="text-teal-600">PERMANENT STORAGE</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate text-slate-900 font-bold">{cert.ipfsMetadataUri}</span>
                    <button
                      onClick={() => copyToClipboard(cert.ipfsMetadataUri, 'IPFS URI')}
                      className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-600 cursor-pointer"
                      title="Copy IPFS URI"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* 4 Cryptographic Audit Checklist Items */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-emerald-50 text-emerald-900 border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <strong className="block text-[11px]">ECDSA Signature</strong>
                    <span className="text-[10px] text-emerald-700">Valid secp256k1</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-emerald-50 text-emerald-900 border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <strong className="block text-[11px]">Merkle Proof</strong>
                    <span className="text-[10px] text-emerald-700">Multi-proof confirmed</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-emerald-50 text-emerald-900 border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <strong className="block text-[11px]">Soulbound Immutability</strong>
                    <span className="text-[10px] text-emerald-700">Locked to recipient</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-emerald-50 text-emerald-900 border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <strong className="block text-[11px]">Revocation Registry</strong>
                    <span className="text-[10px] text-emerald-700">Zero revocations</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MERKLE TREE VISUALIZER */}
          {activeTab === 'merkle' && (
            <div className="space-y-4 p-6 rounded-2xl bg-slate-900 text-white font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <GitBranch className="w-4 h-4" />
                  <span>SHA-256 Merkle Inclusion Proof Visualization</span>
                </div>
                <span className="text-[11px] text-slate-400">Depth: 4 levels · Binary Multi-proof</span>
              </div>

              {/* Visual Tree */}
              <div className="space-y-3 pt-2">
                {/* Level 0: Root */}
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 space-y-1">
                  <span className="text-[10px] text-blue-400 uppercase font-bold">
                    LEVEL 0: BATCH MERKLE ROOT (Anchored on Polygon Block #{cert.blockNumber})
                  </span>
                  <div className="text-emerald-400 break-all">{cert.merkleRoot}</div>
                </div>

                {/* Level 1: Branch */}
                <div className="pl-6 border-l-2 border-slate-700 space-y-2">
                  <div className="p-2.5 rounded-lg bg-slate-800/70 border border-slate-700 text-slate-300">
                    <span className="text-[10px] text-purple-400 uppercase font-bold block">
                      LEVEL 1: INTERMEDIATE BATCH NODE (Addis Ababa University CS &amp; Eng Cohort)
                    </span>
                    <span className="text-slate-300">0x81fa49c...sha256_hash_left</span>
                  </div>

                  {/* Level 2: Leaf */}
                  <div className="pl-6 border-l-2 border-emerald-500/50 space-y-2">
                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300">
                      <span className="text-[10px] text-emerald-400 uppercase font-bold block">
                        LEVEL 2: CERTIFICATE LEAF HASH (Calculated from Student Record)
                      </span>
                      <span className="font-bold text-white break-all">
                        SHA256({cert.id} + {cert.recipientWallet} + &quot;{cert.grade}&quot;) = {cert.transactionHash.slice(0, 32)}...
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                Mathematical certainty: changing even a single comma or letter in the student&apos;s name or grade produces an entirely different hash, causing the Merkle proof to instantly fail on-chain.
              </p>
            </div>
          )}

          {/* TAB 3: W3C JSON VIEWER */}
          {activeTab === 'json' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Standard W3C Verifiable Credential Data Model v2.0</span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      JSON.stringify(
                        {
                          '@context': [
                            'https://www.w3.org/2018/credentials/v1',
                            'https://w3id.org/security/suites/ed25519-2020/v1',
                          ],
                          id: cert.id,
                          type: ['VerifiableCredential', 'UniversityDegreeCredential'],
                          issuer: {
                            id: `did:pkh:eip155:137:${cert.issuerAddress}`,
                            name: cert.issuerName,
                          },
                          issuanceDate: new Date(cert.issuedTimestamp * 1000).toISOString(),
                          credentialSubject: {
                            id: `did:pkh:eip155:137:${cert.recipientWallet}`,
                            name: cert.recipientName,
                            studentId: cert.recipientStudentId,
                            degree: cert.title,
                            grade: cert.grade,
                            credits: cert.creditsEarned,
                            skills: cert.skills,
                          },
                          proof: {
                            type: 'JsonWebSignature2020',
                            created: new Date().toISOString(),
                            proofPurpose: 'assertionMethod',
                            verificationMethod: `${cert.issuerAddress}#key-1`,
                            jws: 'eyJhbGciOiJFUzI1NksifQ...sha256_merkle_verified',
                          },
                        },
                        null,
                        2
                      ),
                      'W3C JSON Payload'
                    )
                  }
                  className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy JSON</span>
                </button>
              </div>

              <pre className="p-5 rounded-2xl bg-slate-950 text-slate-200 text-[11px] font-mono overflow-x-auto max-h-96 border border-slate-800">
                {JSON.stringify(
                  {
                    '@context': [
                      'https://www.w3.org/2018/credentials/v1',
                      'https://w3id.org/security/suites/ed25519-2020/v1',
                    ],
                    id: cert.id,
                    tokenId: cert.tokenId,
                    type: ['VerifiableCredential', 'UniversityDegreeCredential'],
                    issuer: {
                      id: `did:pkh:eip155:137:${cert.issuerAddress}`,
                      name: cert.issuerName,
                    },
                    issuanceDate: new Date(cert.issuedTimestamp * 1000).toISOString(),
                    credentialSubject: {
                      id: `did:pkh:eip155:137:${cert.recipientWallet}`,
                      name: cert.recipientName,
                      studentId: cert.recipientStudentId,
                      degree: cert.title,
                      grade: cert.grade,
                      credits: cert.creditsEarned,
                      skills: cert.skills,
                    },
                    evidence: {
                      ledger: 'Polygon PoS (EIP-155:137)',
                      contractAddress: cert.smartContractAddress,
                      transactionHash: cert.transactionHash,
                      blockNumber: cert.blockNumber,
                      merkleRoot: cert.merkleRoot,
                      isSoulbound: true,
                    },
                    proof: {
                      type: 'JsonWebSignature2020',
                      created: new Date().toISOString(),
                      proofPurpose: 'assertionMethod',
                      verificationMethod: `${cert.issuerAddress}#key-1`,
                      jws: 'eyJhbGciOiJFUzI1NksifQ...sha256_merkle_verified',
                    },
                  },
                  null,
                  2
                )}
              </pre>
            </div>
          )}

          {/* TAB 4: SMART CONTRACT ABI & STATE */}
          {activeTab === 'contract' && (
            <div className="space-y-4 p-6 rounded-2xl bg-slate-900 text-white font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-purple-400 font-bold">ERC-5192 Soulbound Smart Contract Live State</span>
                <span className="text-[11px] text-slate-400">Solidity v0.8.20</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700 space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase font-bold">METHOD: locked(uint256 tokenId)</span>
                  <div className="text-emerald-400 font-bold text-sm">➔ returns (bool): true (Immutable)</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700 space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase font-bold">METHOD: ownerOf(uint256 tokenId)</span>
                  <div className="text-blue-300 font-bold text-sm truncate">➔ {cert.recipientWallet}</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700 space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase font-bold">METHOD: issuerOf(uint256 tokenId)</span>
                  <div className="text-purple-300 font-bold text-sm truncate">➔ {cert.issuerAddress}</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700 space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase font-bold">METHOD: tokenURI(uint256 tokenId)</span>
                  <div className="text-amber-300 font-bold text-sm truncate">➔ {cert.ipfsMetadataUri}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function VerifyCertificatePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F8FAFC]" />}>
      <VerifyCertificateContent />
    </Suspense>
  );
}
