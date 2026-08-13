import React, { useState, useEffect } from 'react';
import { X, BookOpen, Download, FileText, CheckCircle, Clock, Award, Phone, Search, ChevronRight, MessageCircle } from 'lucide-react';
import type { Syllabus } from '../types';
import { INITIAL_SYLLABUS_LIST } from '../data/initialSyllabus';

interface SyllabusModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourseTitle?: string;
}

const SyllabusModal: React.FC<SyllabusModalProps> = ({
  isOpen,
  onClose,
  selectedCourseTitle,
}) => {
  const [syllabi, setSyllabi] = useState<Syllabus[]>([]);
  const [activeSyllabus, setActiveSyllabus] = useState<Syllabus | null>(null);
  const [search, setSearch] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('abhinav_syllabi');
    let list: Syllabus[] = [];
    if (saved) {
      try {
        list = JSON.parse(saved);
      } catch {
        list = INITIAL_SYLLABUS_LIST;
      }
    } else {
      list = INITIAL_SYLLABUS_LIST;
      localStorage.setItem('abhinav_syllabi', JSON.stringify(list));
    }
    setSyllabi(list);

    if (selectedCourseTitle) {
      const match = list.find(s => 
        s.courseTitle.toLowerCase().includes(selectedCourseTitle.toLowerCase()) ||
        selectedCourseTitle.toLowerCase().includes(s.courseTitle.toLowerCase())
      );
      setActiveSyllabus(match || list[0] || null);
    } else if (list.length > 0) {
      setActiveSyllabus(list[0]);
    }
  }, [isOpen, selectedCourseTitle]);

  if (!isOpen) return null;

  const filtered = syllabi.filter(s =>
    s.courseTitle.toLowerCase().includes(search.toLowerCase()) ||
    s.courseCode.toLowerCase().includes(search.toLowerCase()) ||
    s.modules.some(m => m.toLowerCase().includes(search.toLowerCase()))
  );

  const handleDownload = (syllabus: Syllabus) => {
    if (syllabus.fileData) {
      // Base64 or Blob download
      const link = document.createElement('a');
      link.href = syllabus.fileData;
      link.download = syllabus.fileName || `${syllabus.courseCode}_Syllabus.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Dynamic generated syllabus document download
      const content = `
=====================================================
ABHINAV TECHNICAL INSTITUTE OF INDUSTRIAL TRAINING
Navi Peth, Jalgaon, Maharashtra | Contact: +91 9423488174
=====================================================

OFFICIAL COURSE CURRICULUM & SYLLABUS

Course Title   : ${syllabus.courseTitle}
Course Code    : ${syllabus.courseCode}
Category       : ${syllabus.category}
Duration       : ${syllabus.duration}
Eligibility    : ${syllabus.eligibility}
Practical Ratio: ${syllabus.practicalRatio}
Updated Date   : ${syllabus.updatedAt}

-----------------------------------------------------
COURSE OVERVIEW:
${syllabus.description}

-----------------------------------------------------
KEY CURRICULUM MODULES & TOPICS:
${syllabus.modules.map((m, idx) => `  ${idx + 1}. ${m}`).join('\n')}

-----------------------------------------------------
ADMISSION & BATCH INQUIRIES:
Director       : Punjo Patil
Institute Phone: +91 9423488174 / +91 9822725265
Office Location: Navi Peth, Near Old B.J. Market, Jalgaon - 425001
Website        : https://abhinav-institute.pages.dev
=====================================================
`;
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${syllabus.courseCode}_Official_Syllabus.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }

    setDownloadSuccess(syllabus.id);
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[92vh] flex flex-col border border-slate-100 overflow-hidden">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex justify-between items-center border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-orange-500/20 text-orange-400 rounded-xl border border-orange-500/30">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-serif text-white tracking-tight">
                Course Syllabi & Curriculum Library
              </h2>
              <p className="text-xs text-slate-300">
                Official curriculum, practical module breakdowns & downloadable study plans
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Search & Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-grow overflow-hidden">
          
          {/* Left Column: Course List */}
          <div className="lg:col-span-4 border-r border-slate-100 bg-slate-50/50 p-4 flex flex-col overflow-y-auto max-h-[70vh] lg:max-h-full">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search courses or topics..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 shadow-sm"
              />
            </div>

            <div className="space-y-2 flex-grow overflow-y-auto pr-1">
              {filtered.map((s) => {
                const isSelected = activeSyllabus?.id === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveSyllabus(s)}
                    className={`w-full text-left p-3.5 rounded-2xl transition-all flex items-center justify-between border ${
                      isSelected
                        ? 'bg-orange-50/80 border-orange-200 shadow-sm'
                        : 'bg-white border-slate-100 hover:border-orange-100 hover:bg-slate-50'
                    }`}
                  >
                    <div className="pr-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 inline-block mb-1">
                        {s.courseCode}
                      </span>
                      <h4 className={`text-sm font-semibold leading-snug line-clamp-1 ${
                        isSelected ? 'text-orange-950' : 'text-slate-800'
                      }`}>
                        {s.courseTitle}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-2">
                        <span>{s.duration}</span>
                        <span>•</span>
                        <span>{s.modules.length} Modules</span>
                      </p>
                    </div>
                    <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${
                      isSelected ? 'text-orange-600 translate-x-0.5' : 'text-slate-300'
                    }`} />
                  </button>
                );
              })}

              {filtered.length === 0 && (
                <div className="text-center py-8 text-slate-400 text-sm">
                  No matching syllabus found.
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Syllabus Detail Viewer */}
          <div className="lg:col-span-8 p-6 overflow-y-auto max-h-[70vh] lg:max-h-full bg-white flex flex-col justify-between">
            {activeSyllabus ? (
              <div className="space-y-6">
                
                {/* Course Header Banner */}
                <div className="bg-gradient-to-br from-orange-50/70 via-white to-amber-50/50 p-5 rounded-2xl border border-orange-100/80">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="bg-orange-600 text-white font-mono text-xs font-bold px-2.5 py-1 rounded-lg tracking-wider shadow-sm">
                      {activeSyllabus.courseCode}
                    </span>
                    <span className="text-xs font-medium text-slate-500 bg-white/80 px-2.5 py-1 rounded-lg border border-slate-200">
                      Last Updated: {activeSyllabus.updatedAt}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mb-2">
                    {activeSyllabus.courseTitle}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {activeSyllabus.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-orange-100">
                    <div className="flex items-center space-x-2 bg-white p-2.5 rounded-xl border border-slate-100">
                      <Clock className="h-4 w-4 text-orange-600 shrink-0" />
                      <div>
                        <div className="text-[10px] text-slate-400 font-semibold uppercase">Duration</div>
                        <div className="text-xs font-bold text-slate-800">{activeSyllabus.duration}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 bg-white p-2.5 rounded-xl border border-slate-100">
                      <Award className="h-4 w-4 text-emerald-600 shrink-0" />
                      <div>
                        <div className="text-[10px] text-slate-400 font-semibold uppercase">Eligibility</div>
                        <div className="text-xs font-bold text-slate-800">{activeSyllabus.eligibility}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 bg-white p-2.5 rounded-xl border border-slate-100">
                      <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                      <div>
                        <div className="text-[10px] text-slate-400 font-semibold uppercase">Lab Practical</div>
                        <div className="text-xs font-bold text-slate-800">{activeSyllabus.practicalRatio}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modules Breakdown */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-orange-500" />
                    Structured Learning Modules ({activeSyllabus.modules.length} Topics)
                  </h4>
                  <div className="space-y-2">
                    {activeSyllabus.modules.map((mod, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-orange-50/40 hover:border-orange-100 transition-colors"
                      >
                        <span className="h-6 w-6 rounded-lg bg-orange-100 text-orange-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-sm text-slate-800 font-medium">
                          {mod}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Download CTA Bar */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-4 rounded-2xl">
                  <div>
                    <div className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                      <FileText className="h-4 w-4 text-slate-500" />
                      {activeSyllabus.fileName || `${activeSyllabus.courseCode}_Curriculum.pdf`}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Official syllabus document • Size: {activeSyllabus.fileSize || '1.8 MB'}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleDownload(activeSyllabus)}
                      className={`inline-flex items-center px-4 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all ${
                        downloadSuccess === activeSyllabus.id
                          ? 'bg-emerald-600 text-white'
                          : 'bg-orange-600 hover:bg-orange-700 text-white hover:shadow-md'
                      }`}
                    >
                      {downloadSuccess === activeSyllabus.id ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-1.5 animate-bounce" />
                          Downloaded!
                        </>
                      ) : (
                        <>
                          <Download className="h-4 w-4 mr-1.5" />
                          Download Syllabus
                        </>
                      )}
                    </button>

                    <a
                      href={`https://wa.me/919423488174?text=${encodeURIComponent(`Hello Abhinav Technical Institute, I am reviewing the syllabus for "${activeSyllabus.courseTitle}" (${activeSyllabus.courseCode}) and would like to inquire about admission, eligibility, and next batch timings.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2.5 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow transition-all"
                    >
                      <MessageCircle className="h-4 w-4 mr-1.5" />
                      Inquire on WhatsApp
                    </a>
                  </div>
                </div>

              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-slate-400">
                <BookOpen className="h-12 w-12 stroke-1 mb-2 text-slate-300" />
                <p className="text-sm">Select a course to preview its detailed syllabus.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default SyllabusModal;
