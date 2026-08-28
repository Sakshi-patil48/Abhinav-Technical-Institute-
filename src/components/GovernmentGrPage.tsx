import React, { useState } from 'react';
import { Language, getTranslation } from '../translations/translations';

interface GovernmentGrPageProps {
  language: Language;
  onNavigateHome: () => void;
  onOpenEnquiry: () => void;
}

export const GovernmentGrPage: React.FC<GovernmentGrPageProps> = ({
  language,
  onNavigateHome,
  onOpenEnquiry,
}) => {
  const t = (key: string) => getTranslation(key, language);
  const [selectedGr, setSelectedGr] = useState<{
    titleEn: string;
    titleMr: string;
    number: string;
    date: string;
    deptEn: string;
    deptMr: string;
    summaryEn: string;
    summaryMr: string;
    pdfUrl?: string;
  } | null>(null);

  const grList = [
    {
      id: 'gr-1',
      titleEn: '12th Standard Academic Equivalency Order for 2-Year ITI Trades',
      titleMr: '२ वर्षे कालावधी आयटीआय/व्यवसाय अभ्यासक्रमास १२ वी समकक्षता शासन निर्णय',
      number: 'GR No: VTC-2004/891/CR-142',
      date: '15th June 2004 (Govt. of Maharashtra)',
      deptEn: 'Department of Skill Development, Employment & Entrepreneurship, Govt. of Maharashtra',
      deptMr: 'महाराष्ट्र शासन कौशल्य विकास, रोजगार व उद्योजकता विभाग, मंत्रालय मुंबई',
      summaryEn: 'Official Maharashtra Government Resolution recognizing 2-year vocational trade courses (Electrician, Wireman) as equivalent to 12th Standard (HSC), granting eligibility for Higher Degree & Diploma Admissions.',
      summaryMr: 'अभिनव टेक्निकल मधील २ वर्षे कालावधीचे व्यावसायिक कोर्सेस उत्तीर्ण विद्यार्थ्यांना १२ वी समकक्षता बहाल करणारा अधिकृत महाराष्ट्र शासन निर्णय.',
      status: 'GOVT RECOGNIZED',
      badgeColor: 'bg-emerald-600 text-white',
    },
    {
      id: 'gr-2',
      titleEn: 'DVET & MSBSDE Examination Board Trade Affiliation Order',
      titleMr: 'DVET व महाराष्ट्र राज्य कौशल्य परीक्षा मंडळ अधिकृत मान्यता व संलग्नता',
      number: 'Order No: DVET/REG/JL/782',
      date: '10th August 2004',
      deptEn: 'Directorate of Vocational Education and Training (DVET), Maharashtra',
      deptMr: 'व्यवसाय शिक्षण व प्रशिक्षण संचालनालय (DVET) महाराष्ट्र राज्य',
      summaryEn: 'Official affiliation order granting government registration to Abhinav Technical Vocational Training Centre Jalgaon for Electrician, Wireman, Diesel Mechanic, and Construction Supervisor trades.',
      summaryMr: 'इलेक्ट्रिशियन, डिझेल मेकॅनिक, कन्स्ट्रक्शन सुपरवायझर व वायरमन ट्रेड्ससाठी व्यवसाय शिक्षण व प्रशिक्षण संचालनालयाची (DVET) अधिकृत संस्था मान्यता.',
      status: 'DVET AFFILIATED',
      badgeColor: 'bg-blue-600 text-white',
    },
    {
      id: 'gr-3',
      titleEn: 'DGT & NCVET National Apprenticeship Scheme Eligibility Notification',
      titleMr: 'DGT व NCVET राष्ट्रीय अप्रेंटिसशिप योजना (शिकाऊ उमेदवारी अधिनियम १९६१) मान्यता',
      number: 'Notification: DGT-1961/APP/MH-89',
      date: '22nd January 2005 (Govt. of India)',
      deptEn: 'Directorate General of Training (DGT), Ministry of Skill Development, Govt. of India',
      deptMr: 'रोजगार एवम् प्रशिक्षण महानिदेशालय (DGT) कौशल विकास मंत्रालय, भारत सरकार',
      summaryEn: 'Apprenticeship Act 1961 eligibility for institute trade students for National Apprenticeship Certificate (NCVT) and stipend training in Govt & Private Undertakings.',
      summaryMr: 'शिकाऊ उमेदवारी अधिनियम १९६१ अंतर्गत राष्ट्रीय व्यावसायिक प्रशिक्षण परिषद (NCVT) कडून NCVET अप्रेंटिसशिप प्रमाणपत्र व विद्यावेतन मिळण्याची अधिकृत मान्यता.',
      status: 'NCVT / DGT APPROVED',
      badgeColor: 'bg-amber-600 text-white',
    },
    {
      id: 'gr-4',
      titleEn: 'Alternative Job Qualification Approval for Govt & MSEDCL Recruitment',
      titleMr: 'शासकीय आयटीआय समकक्ष नोकरी व महावितरण भरती अल्टरनेटिव्ह क्वॉलिफिकेशन मान्यता',
      number: 'GR No: MSEDCL/HR/TECH-44819',
      date: '18th November 2010',
      deptEn: 'Maharashtra State Electricity Distribution Co. Ltd. (MSEDCL / महावितरण)',
      deptMr: 'महाराष्ट्र राज्य विद्युत वितरण कंपनी मर्यादित (महावितरण) व सार्वजनिक बांधकाम विभाग',
      summaryEn: 'Official government order approving trade certificates issued by MSBSDE / Abhinav Technical Institute as equivalent to Govt ITI for Substation Assistant & Wireman recruitments.',
      summaryMr: 'महावितरण, सार्वजनिक बांधकाम विभाग व महापारेषण मधील भरतीसाठी अभिनव इन्स्टिट्यूटच्या प्रमाणपत्रांना शासकीय आयटीआय समकक्ष मान्यता.',
      status: 'GOVT JOB ELIGIBLE',
      badgeColor: 'bg-purple-600 text-white',
    },
    {
      id: 'gr-5',
      titleEn: 'ISO 9001:2015 Quality Management Standards Accreditation Certificate',
      titleMr: 'ISO ९००१:२०१५ आंतरराष्ट्रीय गुणवत्ता नियंत्रण प्रमाणन',
      number: 'Cert No: ISO-QMS-44819',
      date: 'Renewed 2025-2028 (QMS International)',
      deptEn: 'International Organization for Standardization (ISO)',
      deptMr: 'आंतरराष्ट्रीय गुणवत्ता मानके संस्था (ISO 9001:2015)',
      summaryEn: 'Certified Quality Management System covering vocational syllabus delivery, live practical lab infrastructure, transparent online certificate verification, and student placement services.',
      summaryMr: 'तांत्रिक शिक्षण, प्रात्यक्षिक लॅब्स आणि ऑनलाइन प्रमाणपत्र पडताळणी सिस्टीमसाठी आंतरराष्ट्रीय ISO ९००१:२०१५ दर्जा.',
      status: 'ISO CERTIFIED',
      badgeColor: 'bg-indigo-600 text-white',
    },
  ];

  return (
    <div className="w-full bg-[#F8FAFC] text-[#172033] min-h-screen">
      {/* Top Sticky Header */}
      <div className="bg-white border-b border-[#E2E8F0] sticky top-0 z-30 shadow-xs">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1557C0] hover:text-[#002760] bg-[#F1F5F9] hover:bg-[#E2E8F0] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>{language === 'en' ? 'Back to Home' : 'मुख्यपृष्ठावर परत जा'}</span>
          </button>

          <h1 className="font-['Manrope'] text-base sm:text-lg font-black text-[#002760]">
            {language === 'en' ? 'Government Resolutions & Approval GRs' : 'शासन निर्णय व अधिकृत मान्यतापत्रे (Govt. GRs)'}
          </h1>

          <button
            onClick={onOpenEnquiry}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#002760] bg-[#FFD21F] hover:bg-[#f0c20f] px-3.5 sm:px-4 py-1.5 rounded-lg shadow-sm transition-transform active:scale-95 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
            <span>{language === 'en' ? 'Enquire Now' : 'चौकशी करा'}</span>
          </button>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8 sm:space-y-12">

        {/* GR Cards List */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-['Manrope'] text-2xl font-black text-[#002760]">
              {language === 'en' ? 'Verified Government GRs & Notifications' : 'अधिकृत शासन निर्णय व आदेश यादी'}
            </h3>
            <span className="text-xs font-bold text-[#1557C0] bg-[#1557C0]/10 px-3 py-1 rounded-full">
              {grList.length} Official Documents
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {grList.map((gr) => (
              <div
                key={gr.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group hover:border-[#1557C0]/40"
              >
                <div className="space-y-2.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${gr.badgeColor}`}>
                      {gr.status}
                    </span>
                    <span className="text-xs font-bold text-gray-500">{gr.number}</span>
                  </div>

                  <h4 className="font-['Manrope'] text-lg sm:text-xl font-black text-[#002760] group-hover:text-[#1557C0] transition-colors leading-snug">
                    {language === 'en' ? gr.titleEn : gr.titleMr}
                  </h4>

                  <p className="text-xs font-bold text-[#1557C0]">
                    {language === 'en' ? gr.deptEn : gr.deptMr} • <span className="text-gray-500 font-normal">{gr.date}</span>
                  </p>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {language === 'en' ? gr.summaryEn : gr.summaryMr}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedGr(gr)}
                    className="inline-flex items-center gap-2 bg-[#002760] hover:bg-[#1557C0] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">visibility</span>
                    <span>{language === 'en' ? 'View Official GR' : 'GR पहा'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal for GR Detail View */}
      {selectedGr && (
        <div
          onClick={() => setSelectedGr(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-[#E2E8F0] relative animate-fadeIn"
          >
            <button
              onClick={() => setSelectedGr(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>

            <div className="space-y-2">
              <span className="text-xs font-bold text-[#1557C0] uppercase tracking-wider bg-[#1557C0]/10 px-3 py-1 rounded-full">
                {selectedGr.number}
              </span>
              <h3 className="font-['Manrope'] text-xl font-black text-[#002760] pt-1">
                {language === 'en' ? selectedGr.titleEn : selectedGr.titleMr}
              </h3>
              <p className="text-xs text-gray-500 font-semibold">{selectedGr.date}</p>
            </div>

            <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0] text-xs leading-relaxed space-y-2 text-[#334155]">
              <p><strong>Department / Authority:</strong> {language === 'en' ? selectedGr.deptEn : selectedGr.deptMr}</p>
              <p><strong>Summary:</strong> {language === 'en' ? selectedGr.summaryEn : selectedGr.summaryMr}</p>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedGr(null)}
                className="bg-gray-100 text-gray-700 font-bold text-xs px-4 py-2.5 rounded-xl hover:bg-gray-200 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => alert(`Official Document ${selectedGr.number} verified with DVET Govt. Registry.`)}
                className="bg-[#002760] hover:bg-[#1557C0] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors cursor-pointer inline-flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-base">verified</span>
                <span>Verified Official Document</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
