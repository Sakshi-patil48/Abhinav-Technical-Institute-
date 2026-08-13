import React, { useState } from 'react';
import { Trophy, Briefcase, MapPin, ChevronLeft, ChevronRight, Star, Building2, MessageCircle } from 'lucide-react';
import { useLang } from '../contexts/LangContext';

const ALUMNI = [
  {
    name: 'Rahul Patil',
    course: 'Electrician Trade (ITI)',
    company: 'Mahavitaran (MSEDCL)',
    role: 'Junior Electrician',
    location: 'Jalgaon',
    package: '₹12,000 – ₹18,000/mo',
    year: '2022',
    photo: '👷',
    color: 'bg-blue-50 border-blue-200',
    badge: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'Sneha Deshmukh',
    course: 'COPA – Computer Operator',
    company: 'Jalgaon Municipal Corporation',
    role: 'Data Entry Operator',
    location: 'Jalgaon',
    package: '₹9,000 – ₹14,000/mo',
    year: '2023',
    photo: '👩‍💼',
    color: 'bg-purple-50 border-purple-200',
    badge: 'bg-purple-100 text-purple-700',
  },
  {
    name: 'Akash Sonawane',
    course: 'Wireman Trade (ITI)',
    company: 'L&T Electrical – Jalgaon MIDC',
    role: 'Wireman Technician',
    location: 'Jalgaon MIDC',
    package: '₹14,000 – ₹22,000/mo',
    year: '2021',
    photo: '🔧',
    color: 'bg-emerald-50 border-emerald-200',
    badge: 'bg-emerald-100 text-emerald-700',
  },
  {
    name: 'Pooja Borse',
    course: 'Fashion Design & Garment Making',
    company: 'Self-employed Boutique',
    role: 'Boutique Owner',
    location: 'Bhusawal',
    package: '₹15,000 – ₹25,000/mo',
    year: '2022',
    photo: '👗',
    color: 'bg-pink-50 border-pink-200',
    badge: 'bg-pink-100 text-pink-700',
  },
  {
    name: 'Nikhil Chaudhari',
    course: 'Hardware & Networking Technician',
    company: 'Reliance Jio – Jalgaon',
    role: 'Network Field Technician',
    location: 'Jalgaon',
    package: '₹16,000 – ₹24,000/mo',
    year: '2023',
    photo: '💻',
    color: 'bg-orange-50 border-orange-200',
    badge: 'bg-orange-100 text-orange-700',
  },
  {
    name: 'Priya Mahajan',
    course: 'MSCIT',
    company: 'District Collectorate Office',
    role: 'Government Data Clerk',
    location: 'Jalgaon',
    package: '₹10,000 – ₹15,000/mo',
    year: '2021',
    photo: '📊',
    color: 'bg-amber-50 border-amber-200',
    badge: 'bg-amber-100 text-amber-700',
  },
  {
    name: 'Vishal Wagh',
    course: 'Tally ERP 9 / Prime (GST)',
    company: 'Laxmi Iron & Steel, Jalgaon',
    role: 'Accounts Executive',
    location: 'Jalgaon',
    package: '₹11,000 – ₹17,000/mo',
    year: '2022',
    photo: '📈',
    color: 'bg-cyan-50 border-cyan-200',
    badge: 'bg-cyan-100 text-cyan-700',
  },
  {
    name: 'Manisha Patil',
    course: 'Beautician & Cosmetology',
    company: 'Venus Beauty Salon',
    role: 'Senior Beautician',
    location: 'Dhule',
    package: '₹12,000 – ₹20,000/mo',
    year: '2023',
    photo: '💄',
    color: 'bg-rose-50 border-rose-200',
    badge: 'bg-rose-100 text-rose-700',
  },
];

const COMPANIES = [
  'Mahavitaran (MSEDCL)', 'L&T Electrical', 'Reliance Jio', 'Jalgaon MIDC Industries',
  'District Govt. Offices', 'Jalgaon Municipality', 'Crompton Greaves',
  'Self-employed / Entrepreneurship',
];

const PlacementWall: React.FC = () => {
  const { t } = useLang();
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(ALUMNI.length / perPage);
  const visible = ALUMNI.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="placements" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 40px)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-full mb-4">
            {t.placements.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            {t.placements.heading}
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            {t.placements.sub}
          </p>
        </div>

        {/* Company Ticker */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {COMPANIES.map((c, i) => (
            <span key={i} className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-full">
              <Building2 className="h-3 w-3 text-orange-400" />
              {c}
            </span>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {visible.map((a, i) => (
            <div key={i} className={`bg-white rounded-2xl border-2 ${a.color} p-5 hover:-translate-y-1 transition-transform duration-200`}>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl w-12 h-12 flex items-center justify-center bg-slate-50 rounded-xl border border-slate-100">
                    {a.photo}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{a.name}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Batch {a.year}</div>
                  </div>
                </div>
                <div className="flex">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} className="h-3 w-3 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-1.5">
                  <Trophy className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  <span className="text-[11px] text-slate-500 font-medium">{a.course}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Building2 className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">{a.company}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Briefcase className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  <span className="text-[11px] text-slate-600">{a.role}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  <span className="text-[11px] text-slate-500">{a.location}</span>
                </div>
              </div>

              <div className={`mt-4 pt-3 border-t border-slate-100 flex items-center justify-between`}>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${a.badge}`}>
                  {a.package}
                </span>
                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Starting Range</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setPage(p => Math.max(0, p - 1))}
            disabled={page === 0}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-slate-700"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-slate-400 text-xs font-semibold">
            {page + 1} / {totalPages}
          </span>
          <button
            onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-slate-700"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Bottom WhatsApp CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm mb-4">Want placement support after completing your course?</p>
          <a
            href={`https://wa.me/919423488174?text=${encodeURIComponent('Hello, I want to know more about placement support at Abhinav Technical Institute.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm rounded-xl shadow-md shadow-green-500/20 transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" />
            Chat with Placement Team
          </a>
        </div>

      </div>
    </section>
  );
};

export default PlacementWall;
