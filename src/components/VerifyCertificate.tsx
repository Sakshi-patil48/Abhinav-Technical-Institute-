import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import {
  ShieldCheck, ShieldX, Award, Search,
  Loader2, Share2, Check, Phone, Mail, MapPin,
  FileCheck, Download, ExternalLink, Printer
} from 'lucide-react';
import { INITIAL_CERTIFICATES } from '../data/initialCertificates';
import type { Certificate } from '../types';

interface VerifyCertificateProps {
  initialId?: string;
  onBack?: () => void;
}

const VerifyCertificate: React.FC<VerifyCertificateProps> = ({ initialId = '' }) => {
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
        QRCode.toDataURL(verifyUrl, { width: 180, margin: 1, color: { dark: '#0f172a', light: '#ffffff' } })
          .then(setQrUrl);
        setLoading(false);
        return;
      }
    } catch {
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
        QRCode.toDataURL(verifyUrl, { width: 180, margin: 1, color: { dark: '#0f172a', light: '#ffffff' } })
          .then(setQrUrl);
      } else {
        setResult('not_found');
      }

      setLoading(false);
    }, 350);
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

  const handlePrintSlip = () => {
    if (!result || result === 'not_found') return;
    const printWin = window.open('', '_blank');
    if (!printWin) return;

    printWin.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Certificate Verification Slip - ${result.id}</title>
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; padding: 40px; color: #1e293b; }
          .card { border: 2px solid #0f172a; padding: 30px; border-radius: 12px; max-width: 650px; margin: 0 auto; }
          .header { text-align: center; border-bottom: 2px solid #e2e8f0; padding-bottom: 20px; margin-bottom: 20px; }
          .badge { background: #dcfce7; color: #166534; padding: 6px 12px; border-radius: 6px; font-weight: bold; display: inline-block; }
          .row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
          .label { font-weight: bold; color: #64748b; }
          .value { font-weight: 600; color: #0f172a; }
          .footer { margin-top: 30px; text-align: center; font-size: 12px; color: #64748b; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <h2 style="margin:0; font-size: 20px;">ABHINAV TECHNICAL INSTITUTE</h2>
            <p style="margin:4px 0 12px 0; font-size: 12px; color: #64748b;">Industrial Training & Skill Development Education • Jalgaon, Maharashtra</p>
            <div class="badge">✓ OFFICIAL VERIFICATION SLIP</div>
          </div>
          <div class="row"><span class="label">Certificate ID:</span><span class="value">${result.id}</span></div>
          <div class="row"><span class="label">Student Name:</span><span class="value">${result.studentName}</span></div>
          <div class="row"><span class="label">Father's Name:</span><span class="value">${result.fatherName}</span></div>
          <div class="row"><span class="label">Course / Trade:</span><span class="value">${result.course}</span></div>
          <div class="row"><span class="label">Grade Awarded:</span><span class="value">Grade ${result.grade}</span></div>
          <div class="row"><span class="label">Training Duration:</span><span class="value">${result.startDate} to ${result.endDate}</span></div>
          <div class="row"><span class="label">Issue Date:</span><span class="value">${result.issueDate}</span></div>
          <div class="row"><span class="label">Verification Status:</span><span class="value">${result.isValid ? 'Authentic / Genuine' : 'Revoked'}</span></div>
          <div class="footer">
            <p>Verified from the Official Registry of Abhinav Technical Institute.</p>
            <p>Director: Punjo Patil | Phone: +91 9423488174</p>
          </div>
        </div>
      </body>
      </html>
    `);
    printWin.document.close();
    printWin.focus();
    setTimeout(() => {
      printWin.print();
      printWin.close();
    }, 300);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      
      {/* Top Header */}
      <header className="bg-slate-900 border-b border-slate-800 text-white py-4 px-4 sm:px-8 shadow-md">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <img
              src="https://image1.jdomni.in/defaultogimages/v2/A/T/AT.png"
              alt="Abhinav Technical Institute Logo"
              className="h-11 w-11 object-contain rounded-xl bg-white p-0.5"
            />
            <div>
              <h1 className="text-base sm:text-lg font-bold font-serif tracking-tight text-white">
                Abhinav Technical Institute
              </h1>
              <p className="text-[11px] text-orange-400 font-semibold tracking-wider uppercase">
                Official Certificate Verification Portal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-300">
            <a
              href="tel:+919423488174"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors border border-slate-700"
            >
              <Phone className="h-3.5 w-3.5 text-orange-400" />
              +91 94234 88174
            </a>
          </div>
        </div>
      </header>

      {/* Main Verification Body */}
      <div className="max-w-2xl w-full mx-auto px-4 py-12 flex-grow">
        
        {/* Intro Card */}
        <div className="text-center space-y-3 mb-8">
          <div className="h-14 w-14 bg-gradient-to-tr from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto text-white shadow-lg shadow-orange-500/20">
            <Award className="h-7 w-7" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif tracking-tight">
              Online Certificate Verification
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1 max-w-md mx-auto">
              Scan the QR Code on your physical certificate or enter your Certificate Registration ID below to verify authenticity.
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white p-2.5 rounded-2xl shadow-sm border border-slate-200 mb-4">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <div className="relative flex-grow">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value.toUpperCase())}
                placeholder="Enter Certificate ID (e.g. ATI-2024-884920)"
                className="w-full pl-10 pr-3 py-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 font-mono text-slate-900"
              />
            </div>
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm disabled:bg-slate-200 disabled:text-slate-400 transition-all shrink-0 flex items-center gap-1.5"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <FileCheck className="h-4 w-4" />
                  <span>Verify</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Quick Demo Search Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 text-[11px] text-slate-400">
          <span>Sample verified IDs:</span>
          {['ATI-2024-884920', 'ATI-2024-419203', 'ATI-2025-103984'].map((sampleId) => (
            <button
              key={sampleId}
              onClick={() => {
                setInput(sampleId);
                verifyCert(sampleId);
              }}
              className="px-2.5 py-0.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-orange-600 hover:border-orange-200 font-mono transition-colors"
            >
              {sampleId}
            </button>
          ))}
        </div>

        {/* Result: Loading */}
        {loading && (
          <div className="text-center py-16 text-slate-400 space-y-3 bg-white rounded-3xl border border-slate-200 shadow-sm">
            <Loader2 className="h-8 w-8 animate-spin mx-auto text-orange-600" />
            <p className="text-sm font-semibold text-slate-700">Verifying with Institute Registry...</p>
            <p className="text-xs text-slate-400">Authenticating digital signature and student record</p>
          </div>
        )}

        {/* Result: GENUINE CERTIFICATE */}
        {!loading && result && result !== 'not_found' && (
          <div className="space-y-4 animate-fadeIn">
            
            {/* Status Banner */}
            <div className={`p-5 rounded-2xl border-2 flex items-start gap-4 ${
              result.isValid
                ? 'bg-emerald-50/90 border-emerald-300 text-emerald-900 shadow-sm'
                : 'bg-rose-50 border-rose-300 text-rose-900 shadow-sm'
            }`}>
              <div className={`p-3 rounded-2xl shrink-0 ${result.isValid ? 'bg-emerald-100' : 'bg-rose-100'}`}>
                {result.isValid
                  ? <ShieldCheck className="h-8 w-8 text-emerald-600" />
                  : <ShieldX className="h-8 w-8 text-rose-600" />
                }
              </div>
              <div className="flex-grow">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className={`text-lg font-bold font-serif ${result.isValid ? 'text-emerald-900' : 'text-rose-900'}`}>
                    {result.isValid ? '✓ Genuine Verified Certificate' : '✗ Certificate Has Been Revoked'}
                  </h3>
                  <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${
                    result.isValid ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                  }`}>
                    {result.isValid ? 'Active & Valid' : 'Revoked'}
                  </span>
                </div>
                <p className="text-xs mt-1 leading-relaxed text-slate-600">
                  {result.isValid
                    ? 'This certificate is authentic, officially registered, and recognized by Abhinav Technical Institute, Jalgaon.'
                    : 'This certificate has been marked invalid or revoked in the central registry.'}
                </p>
              </div>
            </div>

            {/* Official Credential Card */}
            <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
              
              {/* Card Header Strip */}
              <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Registration Number</span>
                  <span className="text-white text-sm font-bold font-mono tracking-wider">{result.id}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Issue Date</span>
                  <span className="text-orange-300 text-xs font-bold font-mono">{result.issueDate}</span>
                </div>
              </div>

              {/* Student Credential Grid */}
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Student / Candidate Name</span>
                  <span className="text-base font-bold text-slate-900 block">{result.studentName}</span>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Father's / Guardian's Name</span>
                  <span className="text-base font-bold text-slate-900 block">{result.fatherName}</span>
                </div>

                <div className="sm:col-span-2 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Certified Course / Trade</span>
                  <span className="text-base font-bold text-orange-950 block">{result.course}</span>
                  {result.remarks && (
                    <span className="text-xs text-slate-500 italic mt-1 block">Specialization: {result.remarks}</span>
                  )}
                </div>

                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Academic Grade</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-50 border border-orange-200 text-orange-700 font-bold rounded-xl text-sm">
                    <Award className="h-4 w-4 text-orange-600" />
                    Grade {result.grade}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Training Period</span>
                  <span className="text-xs font-bold text-slate-800 block mt-1">{result.startDate} – {result.endDate}</span>
                </div>

                <div className="sm:col-span-2 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Issuing Authority</span>
                    <span className="text-xs font-bold text-slate-900 block">Punjo Patil — Director</span>
                    <span className="text-[11px] text-slate-500">Abhinav Technical Institute, Jalgaon</span>
                  </div>
                  <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-700 text-xs font-bold flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4" />
                    Govt. Regd.
                  </div>
                </div>
              </div>

              {/* QR Code & Share / Print Actions */}
              <div className="bg-slate-50 border-t border-slate-100 p-5 flex flex-col sm:flex-row items-center gap-5">
                {qrUrl && (
                  <img
                    src={qrUrl}
                    alt="Certificate Verification QR Code"
                    className="w-28 h-28 bg-white border-2 border-slate-200 rounded-2xl p-1 shrink-0 shadow-sm"
                  />
                )}
                
                <div className="flex-grow space-y-2 text-center sm:text-left">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Digital Verification & Sharing
                  </h4>
                  <p className="text-xs text-slate-500">
                    Scan or share this link to instantly verify this credential from any smartphone.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-1 justify-center sm:justify-start">
                    <button
                      onClick={handleShare}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all shadow-sm"
                    >
                      {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Share2 className="h-3.5 w-3.5" />}
                      {copied ? 'Link Copied!' : 'Copy Verification Link'}
                    </button>

                    <button
                      onClick={handlePrintSlip}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-xl border border-slate-200 transition-all shadow-sm"
                    >
                      <Printer className="h-3.5 w-3.5 text-slate-500" />
                      Print Verification Slip
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Result: NOT FOUND */}
        {!loading && result === 'not_found' && (
          <div className="text-center py-12 space-y-4 bg-rose-50 rounded-3xl border-2 border-rose-200 p-6 animate-fadeIn">
            <div className="h-14 w-14 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto text-rose-600">
              <ShieldX className="h-8 w-8" />
            </div>
            <div>
              <h3 className="font-bold text-rose-900 text-lg font-serif">Certificate Not Found</h3>
              <p className="text-rose-700 text-xs sm:text-sm mt-1 max-w-md mx-auto">
                No certificate matching <strong className="font-mono bg-white px-1.5 py-0.5 rounded border border-rose-200">"{input}"</strong> was found in the official registry.
              </p>
            </div>
            <p className="text-xs text-slate-500">
              Please double check the ID format or contact the administrative office at{' '}
              <a href="tel:+919423488174" className="underline font-bold text-slate-800">+91 94234 88174</a>.
            </p>
          </div>
        )}

      </div>

      {/* Official Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 sm:px-8 border-t border-slate-800 text-xs">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div>
            <div className="font-bold text-white font-serif text-sm">Abhinav Technical Institute</div>
            <p className="text-[11px] text-slate-400 mt-0.5">Mansingh Market, Near Z P Road, Navi Peth Jalgaon, Maharashtra 425001</p>
          </div>
          <div className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} Abhinav Technical Institute • Official Registry
          </div>
        </div>
      </footer>

    </div>
  );
};

export default VerifyCertificate;
