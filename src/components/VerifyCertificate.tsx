import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import {
  ShieldCheck, ShieldX, Award, Search,
  ArrowLeft, Loader2, Share2, Check
} from 'lucide-react';
import { INITIAL_CERTIFICATES } from '../data/initialCertificates';
import type { Certificate } from './CertificateManager';

interface VerifyCertificateProps {
  initialId?: string;
  onBack: () => void;
}

const VerifyCertificate: React.FC<VerifyCertificateProps> = ({ initialId = '', onBack }) => {
  const [input, setInput] = useState(initialId);
  const [result, setResult] = useState<Certificate | 'not_found' | null>(null);
  const [loading, setLoading] = useState(false);
  const [qrUrl, setQrUrl] = useState('');
  const [copied, setCopied] = useState(false);

  // Auto-verify if ID is passed in URL
  useEffect(() => {
    if (initialId) {
      setInput(initialId);
      verifyCert(initialId);
    }
  }, [initialId]);

  const verifyCert = async (id: string) => {
    const certId = id.trim().toUpperCase();
    if (!certId) return;

    setLoading(true);
    setResult(null);
    setQrUrl('');

    // Try server-backed registry first
    try {
      const resp = await fetch(`/api/certificates/${encodeURIComponent(certId)}`);
      if (resp.ok) {
        const found: Certificate = await resp.json();
        setResult(found);
        const verifyUrl = `${window.location.origin}${window.location.pathname}#verify?id=${found.id}`;
        QRCode.toDataURL(verifyUrl, { width: 160, margin: 1, color: { dark: '#0f172a', light: '#ffffff' } })
          .then(setQrUrl);
        setLoading(false);
        return;
      }
    } catch (err) {
      // Server unreachable — fallback to localStorage
    }

    // Fallback to localStorage and initial seeds
    setTimeout(() => {
      let certs: Certificate[] = [];
      try {
        const saved = localStorage.getItem('abhinav_certificates');
        certs = saved ? JSON.parse(saved) : INITIAL_CERTIFICATES;
      } catch {
        certs = INITIAL_CERTIFICATES;
      }

      if (!certs || certs.length === 0) {
        certs = INITIAL_CERTIFICATES;
      }

      const found = certs.find(c => c.id.toUpperCase() === certId);

      if (found) {
        setResult(found);
        const verifyUrl = `${window.location.origin}${window.location.pathname}#verify?id=${found.id}`;
        QRCode.toDataURL(verifyUrl, { width: 160, margin: 1, color: { dark: '#0f172a', light: '#ffffff' } })
          .then(setQrUrl);
      } else {
        setResult('not_found');
      }

      setLoading(false);
    }, 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    verifyCert(input);
  };

  const handleShare = () => {
    if (result && result !== 'not_found') {
      const url = `${window.location.origin}${window.location.pathname}#verify?id=${result.id}`;
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-28 pb-20 px-4">
      <div className="max-w-xl mx-auto">

        {/* Back button */}
        <button
          onClick={onBack}
          className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-slate-900 mb-8 transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 mr-1.5 group-hover:-translate-x-0.5 transition-transform" />
          Back to Website
        </button>

        {/* Header */}
        <div className="text-center space-y-4 mb-10">
          <div className="h-16 w-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto border border-orange-100">
            <Award className="h-8 w-8 text-orangeAccent" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 font-serif">Certificate Verification</h1>
            <p className="text-slate-500 text-sm mt-1">
              Enter a Certificate ID or scan the QR code to verify its authenticity.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-[11px] font-medium text-slate-400 bg-slate-100 px-3 py-1.5 rounded-full">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
            Abhinav Technical Institute — Official Verification Portal
          </div>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value.toUpperCase())}
              placeholder="e.g. ATI-2024-123456"
              className="w-full pl-11 pr-4 py-3.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-orangeAccent focus:ring-1 focus:ring-orangeAccent font-mono bg-white shadow-sm"
            />
          </div>
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="px-5 py-3 bg-orangeAccent hover:bg-orangeAccent-dark text-white text-sm font-semibold rounded-xl shadow-sm disabled:bg-slate-200 disabled:text-slate-400 transition-all shrink-0"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Verify'}
          </button>
        </form>

        {/* Loading */}
        {loading && (
          <div className="text-center py-12 text-slate-400 space-y-3">
            <Loader2 className="h-8 w-8 animate-spin mx-auto text-orangeAccent" />
            <p className="text-sm font-medium">Checking certificate registry…</p>
          </div>
        )}

        {/* Result: VALID */}
        {!loading && result && result !== 'not_found' && (
          <div className="space-y-4">
            {/* Status banner */}
            <div className={`p-5 rounded-2xl border-2 flex items-start gap-4 ${
              result.isValid
                ? 'bg-emerald-50 border-emerald-200'
                : 'bg-red-50 border-red-200'
            }`}>
              <div className={`p-3 rounded-xl shrink-0 ${result.isValid ? 'bg-emerald-100' : 'bg-red-100'}`}>
                {result.isValid
                  ? <ShieldCheck className="h-7 w-7 text-emerald-600" />
                  : <ShieldX className="h-7 w-7 text-red-500" />
                }
              </div>
              <div>
                <h2 className={`text-lg font-bold font-serif ${result.isValid ? 'text-emerald-800' : 'text-red-800'}`}>
                  {result.isValid ? '✓ Genuine Certificate Verified' : '✗ Certificate Has Been Revoked'}
                </h2>
                <p className={`text-xs mt-1 ${result.isValid ? 'text-emerald-700' : 'text-red-600'}`}>
                  {result.isValid
                    ? 'This certificate is authentic and recognized by Abhinav Technical Institute, Jalgaon.'
                    : 'This certificate has been marked invalid. Please contact the institute for clarification.'}
                </p>
              </div>
            </div>

            {/* Certificate Details Card */}
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
              {/* Card header strip */}
              <div className="bg-slate-900 px-6 py-3 flex items-center justify-between">
                <span className="text-white text-xs font-bold font-mono tracking-widest">{result.id}</span>
                <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${
                  result.isValid ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'
                }`}>
                  {result.isValid ? 'Valid' : 'Revoked'}
                </span>
              </div>

              {/* Details grid */}
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Student Name</span>
                  <span className="text-base font-bold text-slate-900">{result.studentName}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Father's / Guardian's Name</span>
                  <span className="text-base font-bold text-slate-900">{result.fatherName}</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Course / Trade Completed</span>
                  <span className="text-base font-bold text-slate-900">{result.course}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Grade Awarded</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-50 border border-orange-200 text-orangeAccent font-bold rounded-lg text-sm">
                    <Award className="h-3.5 w-3.5" />
                    Grade {result.grade}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Issue Date</span>
                  <span className="text-sm font-bold text-slate-900">{result.issueDate}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Training Period</span>
                  <span className="text-sm font-bold text-slate-900">{result.startDate} – {result.endDate}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Issued By</span>
                  <span className="text-sm font-bold text-slate-900">Punjo Patil — Director</span>
                  <span className="block text-[11px] text-slate-500">Abhinav Technical Institute, Jalgaon</span>
                </div>
              </div>

              {/* QR + Share */}
              {qrUrl && (
                <div className="border-t border-slate-100 px-6 py-5 flex flex-col sm:flex-row items-center gap-5">
                  <img src={qrUrl} alt="QR Code" className="w-28 h-28 border-4 border-slate-100 rounded-xl p-1 shrink-0" />
                  <div className="flex-grow text-center sm:text-left">
                    <p className="font-bold text-slate-900 text-sm">Share Verification Link</p>
                    <p className="text-xs text-slate-500 mt-1 mb-3">
                      Send this link or QR to anyone for instant digital verification.
                    </p>
                    <button
                      onClick={handleShare}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-all"
                    >
                      {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Share2 className="h-3.5 w-3.5" />}
                      {copied ? 'Link Copied!' : 'Copy Verification Link'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Institute seal */}
            <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <img src="https://image1.jdomni.in/defaultogimages/v2/A/T/AT.png" alt="Institute Logo"
                className="h-10 w-10 object-contain rounded-lg bg-white p-0.5 border border-slate-100" />
              <div>
                <p className="text-xs font-bold text-slate-900">Abhinav Technical Institute of Industrial Training</p>
                <p className="text-[10px] text-slate-500">Navi Peth Jalgaon, Maharashtra 425001 · Ph: +91 94234 88174</p>
              </div>
            </div>
          </div>
        )}

        {/* Result: NOT FOUND */}
        {!loading && result === 'not_found' && (
          <div className="text-center py-12 space-y-4 bg-red-50 rounded-2xl border-2 border-red-200 px-6">
            <div className="h-16 w-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto">
              <ShieldX className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="font-bold text-red-800 text-lg font-serif">Certificate Not Found</h3>
            <p className="text-red-600 text-sm">
              No certificate matching <span className="font-mono font-bold">"{input}"</span> was found in our registry.
              This may indicate the ID is incorrect or the certificate was not issued by us.
            </p>
            <p className="text-xs text-red-500">
              If you believe this is an error, please contact us at{' '}
              <a href="tel:+919423488174" className="underline font-semibold">+91 94234 88174</a>.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default VerifyCertificate;
