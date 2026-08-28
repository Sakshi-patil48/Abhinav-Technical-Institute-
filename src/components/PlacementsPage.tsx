import React from 'react';
import { Language, getTranslation } from '../translations/translations';

interface PlacementsPageProps {
  language: Language;
  onNavigateHome: () => void;
  onOpenEnquiry: () => void;
}

export const PlacementsPage: React.FC<PlacementsPageProps> = ({
  language,
  onNavigateHome,
  onOpenEnquiry,
}) => {
  const t = (key: string) => getTranslation(key, language);

  const placementStats = [
    {
      number: '15,000+',
      labelEn: 'Total Students Trained & Placed',
      labelMr: 'एकूण प्रशिक्षित व नोकरीस लागलेले विद्यार्थी',
      icon: 'groups',
      color: 'from-blue-600 to-indigo-700',
    },
    {
      number: '250+',
      labelEn: 'Recruiting Companies & Partners',
      labelMr: 'प्लेसमेंट व उद्योग भागीदार कंपन्या',
      icon: 'domain',
      color: 'from-emerald-600 to-teal-700',
    },
    {
      number: '100%',
      labelEn: 'Career & Apprenticeship Support',
      labelMr: '१००% अप्रेंटिसशिप व नोकरी मार्गदर्शन',
      icon: 'workspace_premium',
      color: 'from-[#002760] to-[#1557C0]',
    },
    {
      number: '₹ 2.4 - 4.8 LPA',
      labelEn: 'Average Salary Package',
      labelMr: 'सरासरी वार्षिक पगार पॅकेज',
      icon: 'payments',
      color: 'from-[#D97706] to-[#B45309]',
    },
  ];

  const topRecruiters = [
    { name: 'MSEDCL (महावितरण)', category: 'Govt Power Substation & Grid', location: 'Maharashtra' },
    { name: 'Tata Motors', category: 'Automotive & Electrical Wiring', location: 'Pune / Nashik' },
    { name: 'Bajaj Auto Ltd.', category: 'Automotive Assemblies & Motors', location: 'Chakan / Waluj' },
    { name: 'Crompton Greaves Consumer Electricals', category: 'Motor Rewinding & Transformers', location: 'Jalgaon / Ahmednagar' },
    { name: 'Larsen & Toubro (L&T)', category: 'Commercial Wiring & EPC Substation', location: 'Mumbai / Pune' },
    { name: 'Schneider Electric', category: 'Switchgear & Panel Boards', location: 'Nashik' },
    { name: 'Kirloskar Brothers', category: 'Pumps, Motors & Industrial Rewinding', location: 'Kirloskarvadi / Pune' },
    { name: 'Jalgaon MIDC Industrial Association', category: 'Textiles, Solar & Heavy Metal Fabrication', location: 'Jalgaon' },
  ];

  const recentPlacements = [
    {
      name: 'Rohan Sopan Patil',
      trade: 'Electrician (2 Year Trade)',
      company: 'MSEDCL (महावितरण) Jalgaon Substation',
      role: 'Assistant Substation Wireman',
      package: 'Govt Apprenticeship + Regular Pay Scale',
      year: '2025 Batch',
    },
    {
      name: 'Pooja Sharad Sonawane',
      trade: 'COPA (Computer Operator)',
      company: 'Jalgaon Collectorate & ZP Office',
      role: 'Junior Data Executive',
      package: '₹ 2.8 LPA',
      year: '2025 Batch',
    },
    {
      name: 'Kiran Ramesh Vispute',
      trade: 'Diesel Mechanic (1 Year Trade)',
      company: 'Tata Motors Authorized Service Centre',
      role: 'Senior Diagnostic Technician',
      package: '₹ 3.2 LPA',
      year: '2024 Batch',
    },
    {
      name: 'Shubham Nilesh Chaudhari',
      trade: 'Wireman & Commercial Fitting',
      company: 'L&T Construction EPC Division',
      role: 'Commercial Wiring Inspector',
      package: '₹ 3.6 LPA',
      year: '2024 Batch',
    },
  ];

  return (
    <div className="w-full bg-[#F8FAFC] text-[#172033] min-h-screen">
      {/* Top Header Bar */}
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
            {language === 'en' ? 'Placements & Career Cell' : 'प्लेसमेंट व नोकरी मार्गदर्शन कक्ष'}
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

        {/* Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {placementStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} text-white flex items-center justify-center shadow-md`}>
                  <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
                </div>
              </div>
              <div>
                <span className="font-['Manrope'] text-2xl sm:text-3xl font-black text-[#002760] block mb-1">
                  {stat.number}
                </span>
                <span className="text-xs font-bold text-[#64748B] block">
                  {language === 'en' ? stat.labelEn : stat.labelMr}
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Top Recruiters */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-xl space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase text-[#1557C0] tracking-widest bg-[#1557C0]/10 px-3 py-1 rounded-full">
              Industry Partners
            </span>
            <h3 className="font-['Manrope'] text-2xl sm:text-3xl font-black text-[#002760]">
              {language === 'en' ? 'Top Recruiting Companies' : 'प्रमुख नोकरी देणाऱ्या कंपन्या व आस्थापना'}
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B]">
              {language === 'en'
                ? 'Our students are recruited by leading public sector and private industrial corporations.'
                : 'आमचे विद्यार्थी महाराष्ट्रभरातील नामवंत शासकीय व खाजगी कंपन्यांमध्ये यशस्वीपणे कार्यरत आहेत.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topRecruiters.map((company, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0] hover:border-[#1557C0] hover:bg-white transition-all shadow-xs"
              >
                <div className="w-8 h-8 rounded-lg bg-[#002760] text-[#FFD21F] flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-lg">corporate_fare</span>
                </div>
                <h4 className="font-['Manrope'] font-bold text-sm text-[#002760] mb-1">
                  {company.name}
                </h4>
                <p className="text-[11px] text-[#64748B] mb-1 font-medium">{company.category}</p>
                <span className="inline-block text-[10px] font-bold text-[#059669] bg-[#059669]/10 px-2 py-0.5 rounded">
                  {company.location}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Student Success Stories */}
        <section className="space-y-6">
          <h3 className="font-['Manrope'] text-2xl font-black text-[#002760]">
            {language === 'en' ? 'Recent Student Placements' : 'नुकतेच नोकरीस लागलेले विद्यार्थी'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentPlacements.map((st, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-['Manrope'] text-base font-black text-[#002760]">
                      {st.name}
                    </h4>
                    <span className="text-xs font-bold text-[#1557C0]">{st.trade}</span>
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                    {st.year}
                  </span>
                </div>
                <div className="space-y-1.5 pt-3 border-t border-[#F1F5F9]">
                  <div className="flex items-center gap-2 text-xs text-[#475569]">
                    <span className="material-symbols-outlined text-sm text-[#002760]">domain</span>
                    <span><strong>Company:</strong> {st.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#475569]">
                    <span className="material-symbols-outlined text-sm text-[#002760]">badge</span>
                    <span><strong>Designation:</strong> {st.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
