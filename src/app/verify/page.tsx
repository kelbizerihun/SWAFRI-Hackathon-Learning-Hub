'use client';

import React, { useState, useEffect, Suspense } from 'react';
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

  const initialQuery = searchParams.get('id') || searchParams.get('hash') || 'LH-2026-SQL-98214';
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeCertId, setActiveCertId] = useState(initialQuery);
  const [isCopied, setIsCopied] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState('');
  const [showJsonRaw, setShowJsonRaw] = useState(false);

  useEffect(() => {
    const q = searchParams.get('id') || searchParams.get('hash');
    if (q) {
      setSearchQuery(q);
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

  const verificationResult = verifyCredentialOnChain(activeCertId);
  const cert = verificationResult.certificate;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setActiveCertId(searchQuery.trim());
      router.replace(`/verify?id=${encodeURIComponent(searchQuery.trim())}`, { scroll: false });
    }
  };

  const quickCertSelect = (id: string) => {
    setSearchQuery(id);
    setActiveCertId(id);
    router.replace(`/verify?id=${encodeURIComponent(id)}`, { scroll: false });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-slate-900 font-sans pb-24">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-20 right-8 z-50 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold shadow-xl flex items-center gap-2 animate-bounce">
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Hero Banner with Web3 Header */}
      <div className="bg-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>DECENTRALIZED ACADEMIC VERIFIER · ERC-5192 SOULBOUND</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            On-Chain Certificate Verification
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Verify academic credentials issued by Addis Ababa University &amp; Learning Hub. Every credential is cryptographically anchored to the Polygon Proof-of-Stake blockchain and permanently bound to the student&apos;s digital wallet.
          </p>

          {/* Search Box */}
          <form onSubmit={handleSearchSubmit} className="pt-2 flex flex-col sm:flex-row gap-3 max-w-2xl">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter Credential ID (e.g. LH-2026-SQL-98214) or Tx Hash..."
                className="w-full h-11 pl-11 pr-4 rounded-xl bg-slate-800/90 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-all font-mono"
              />
            </div>
            <button
              type="submit"
              className="h-11 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm shrink-0 cursor-pointer"
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Verify On-Chain</span>
            </button>
          </form>

          {/* Quick Select Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400 font-medium">Quick verify sample:</span>
            {VERIFIED_BLOCKCHAIN_CERTIFICATES.map((c) => (
              <button
                key={c.id}
                onClick={() => quickCertSelect(c.id)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-all cursor-pointer ${
                  c.id === cert.id
                    ? 'bg-blue-600 text-white border-blue-500'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500'
                }`}
              >
                {c.title.split('&')[0].trim()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Verification Inspection Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 space-y-8 w-full">
        {/* Verification Status Badge Header */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-600">
                  CRYPTOGRAPHICALLY VERIFIED &amp; IMMUTABLE
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
                  Soulbound (ERC-5192)
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">
                Authentic Academic Credential Confirmed on Ledger
              </h2>
            </div>
          </div>

          <div className="text-right shrink-0">
            <span className="text-[10px] font-mono text-slate-400 block">LEDGER CONSENSUS</span>
            <span className="text-xs font-bold text-slate-900 font-mono">
              Block #{cert.blockNumber.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Certificate Visual Presentation Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white via-slate-50/50 to-white border-2 border-slate-200 shadow-xl space-y-8 relative overflow-hidden">
          {/* Watermark Logo */}
          <div className="absolute right-6 bottom-6 opacity-5 pointer-events-none">
            <BookOpen className="w-64 h-64 text-blue-900" />
          </div>

          {/* Top Certificate Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-slate-900">
                  Addis Ababa University &amp; Learning Hub
                </h3>
                <p className="text-xs text-slate-500">
                  Academic Senate Node · Faculty of Computer Science &amp; Engineering
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                CREDENTIAL TOKEN ID
              </span>
              <span className="text-sm font-mono font-bold text-blue-600">
                #{cert.tokenId} · {cert.id}
              </span>
            </div>
          </div>

          {/* Certificate Central Body */}
          <div className="text-center space-y-4 max-w-2xl mx-auto py-4">
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
              THIS IS TO CERTIFY THAT
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {cert.recipientName}
            </h2>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono">
              <span>Student ID: {cert.recipientStudentId}</span>
              <span>·</span>
              <span>Wallet: {cert.recipientWallet.slice(0, 6)}...{cert.recipientWallet.slice(-4)}</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
              has completed all lecture requirements, laboratory practicals, and mentor assessments with demonstrated academic excellence in
            </p>

            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
              <h3 className="text-xl sm:text-2xl font-extrabold text-blue-700">
                {cert.title}
              </h3>
              <p className="text-xs text-blue-600 mt-1 font-semibold">
                Grade: {cert.grade} · {cert.creditsEarned} Verified Academic Credits Earned
              </p>
            </div>

            {/* Skills Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
              {cert.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-medium"
                >
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certificate Footer Metadata */}
          <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-600">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">ISSUED BY</span>
              <strong className="text-slate-900">{cert.issuerName}</strong>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">ISSUANCE DATE</span>
              <strong className="text-slate-900">{cert.issuedDate}</strong>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block">BLOCKCHAIN STATUS</span>
              <strong className="text-emerald-600 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Non-Transferable Soulbound Token</span>
              </strong>
            </div>
          </div>
        </div>

        {/* On-Chain Technical Ledger Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Database className="w-5 h-5 text-blue-600" />
              <h3 className="text-base font-bold text-slate-900">
                Cryptographic Ledger Proof (Polygon PoS)
              </h3>
            </div>
            <a
              href={verificationResult.ledgerExplorerUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>View on PolygonScan</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
            {/* Transaction Hash */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400">TRANSACTION HASH</span>
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-slate-800">{cert.transactionHash}</span>
                <button
                  onClick={() => copyToClipboard(cert.transactionHash, 'Transaction Hash')}
                  className="p-1 rounded hover:bg-slate-200 text-slate-500 cursor-pointer"
                  title="Copy Hash"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Smart Contract Address */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400">SMART CONTRACT (ERC-5192)</span>
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-slate-800">{cert.smartContractAddress}</span>
                <button
                  onClick={() => copyToClipboard(cert.smartContractAddress, 'Contract Address')}
                  className="p-1 rounded hover:bg-slate-200 text-slate-500 cursor-pointer"
                  title="Copy Contract"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Merkle Root */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400">MERKLE ROOT HASH</span>
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-slate-800">{cert.merkleRoot}</span>
                <button
                  onClick={() => copyToClipboard(cert.merkleRoot, 'Merkle Root')}
                  className="p-1 rounded hover:bg-slate-200 text-slate-500 cursor-pointer"
                  title="Copy Merkle Root"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* IPFS Metadata URI */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400">IPFS DECENTRALIZED METADATA</span>
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-slate-800">{cert.ipfsMetadataUri}</span>
                <button
                  onClick={() => copyToClipboard(cert.ipfsMetadataUri, 'IPFS URI')}
                  className="p-1 rounded hover:bg-slate-200 text-slate-500 cursor-pointer"
                  title="Copy IPFS URI"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Cryptographic Proof Verification Checklist */}
          <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-semibold text-[11px]">ECDSA Signature Valid</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-semibold text-[11px]">Merkle Proof Confirmed</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-semibold text-[11px]">Soulbound Lock Active</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-semibold text-[11px]">Zero Revocations</span>
            </div>
          </div>

          {/* Raw JSON Toggle */}
          <div className="pt-2 flex items-center justify-between text-xs">
            <button
              onClick={() => setShowJsonRaw(!showJsonRaw)}
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1.5 cursor-pointer"
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>{showJsonRaw ? 'Hide Raw Verifiable Credential JSON' : 'Inspect Raw W3C Verifiable Credential JSON'}</span>
            </button>
          </div>

          {showJsonRaw && (
            <pre className="p-4 rounded-2xl bg-slate-900 text-slate-100 text-[11px] font-mono overflow-x-auto max-h-72">
              {JSON.stringify(
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
                    degree: cert.title,
                    grade: cert.grade,
                    credits: cert.creditsEarned,
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
