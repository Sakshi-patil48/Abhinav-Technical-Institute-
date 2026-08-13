import React, { useState } from 'react';
import { Calculator, MessageCircle, ChevronDown, Percent, IndianRupee, TrendingDown } from 'lucide-react';
import { useLang } from '../contexts/LangContext';

const COURSES = [
  { name: 'Wireman Trade (ITI)', fee: 12000, duration: '2 Years', code: 'WRM' },
  { name: 'Electrician Trade (ITI)', fee: 15000, duration: '2 Years', code: 'ELT' },
  { name: 'COPA – Computer Operator & Programming', fee: 10000, duration: '1 Year', code: 'COPA' },
  { name: 'MSCIT (Maharashtra State CIT)', fee: 4500, duration: '3 Months', code: 'MSCIT' },
  { name: 'Tally ERP 9 / Prime (GST)', fee: 6000, duration: '3 Months', code: 'TALLY' },
  { name: 'DTP – Desktop Publishing', fee: 5000, duration: '3 Months', code: 'DTP' },
  { name: 'Hardware & Networking Technician', fee: 9000, duration: '6 Months', code: 'HNT' },
  { name: 'Beautician & Cosmetology', fee: 8000, duration: '6 Months', code: 'BTC' },
  { name: 'Fashion Design & Garment Making', fee: 7000, duration: '6 Months', code: 'FDG' },
  { name: 'Web Design & Digital Marketing', fee: 11000, duration: '6 Months', code: 'WDM' },
];

const LUMP_SUM_DISCOUNT = 0.10;

const FeeCalculator: React.FC = () => {
  const { t } = useLang();
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isLumpSum, setIsLumpSum] = useState(false);

  const course = COURSES[selectedIdx];
  const lumpSumFee = Math.round(course.fee * (1 - LUMP_SUM_DISCOUNT));
  const savings = course.fee - lumpSumFee;
  const emi3 = Math.ceil(course.fee / 3);
  const emi6 = Math.ceil(course.fee / 6);

  const handleWhatsApp = () => {
    const msg = isLumpSum
      ? `Hello Abhinav Technical Institute, I am interested in *${course.name}* (${course.duration}) and would like to pay in *Lump Sum at ₹${lumpSumFee.toLocaleString('en-IN')}* (saving ₹${savings.toLocaleString('en-IN')}). Please share admission details.`
      : `Hello Abhinav Technical Institute, I am interested in *${course.name}* (${course.duration}). Total fee: ₹${course.fee.toLocaleString('en-IN')}. Please share EMI/installment options and admission details.`;
    window.open(`https://wa.me/919423488174?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="fee-calculator" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-orangeAccent bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-full mb-4">
            {t.calculator.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif tracking-tight">
            {t.calculator.heading}
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            {t.calculator.sub}
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">

          {/* Course Selector */}
          <div className="p-6 border-b border-slate-100 bg-slate-50/50">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">
              {t.calculator.selectCourse}
            </label>
            <div className="relative">
              <select
                value={selectedIdx}
                onChange={e => setSelectedIdx(Number(e.target.value))}
                className="w-full appearance-none pl-4 pr-10 py-3.5 text-sm font-semibold text-slate-900 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
              >
                {COURSES.map((c, i) => (
                  <option key={i} value={i}>{c.name} — {c.duration}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Payment Toggle */}
          <div className="p-6 border-b border-slate-100">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-3">
              {t.calculator.paymentPlan}
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setIsLumpSum(false)}
                className={`py-3 px-4 rounded-xl border-2 text-sm font-semibold text-left transition-all ${
                  !isLumpSum
                    ? 'border-orange-500 bg-orange-50 text-orange-700'
                    : 'border-slate-200 text-slate-500 bg-white hover:border-slate-300'
                }`}
              >
                <div className="font-bold text-xs mb-1 opacity-70">OPTION A</div>
                {t.calculator.installments}
              </button>
              <button
                onClick={() => setIsLumpSum(true)}
                className={`py-3 px-4 rounded-xl border-2 text-sm font-semibold text-left transition-all relative overflow-hidden ${
                  isLumpSum
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                    : 'border-slate-200 text-slate-500 bg-white hover:border-slate-300'
                }`}
              >
                <div className="font-bold text-xs mb-1 opacity-70">OPTION B</div>
                {t.calculator.lumpSum}
                <span className="absolute top-2 right-2 bg-emerald-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">-10%</span>
              </button>
            </div>
          </div>

          {/* Fee Breakdown */}
          <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <div className="flex items-center gap-2 mb-2">
                <IndianRupee className="h-4 w-4 text-slate-400" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {t.calculator.totalFee}
                </span>
              </div>
              <div className="text-3xl font-extrabold text-slate-900">
                ₹{(isLumpSum ? lumpSumFee : course.fee).toLocaleString('en-IN')}
              </div>
              <div className="text-xs text-slate-400 mt-1">{course.duration} course</div>
            </div>

            {!isLumpSum ? (
              <>
                <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Calculator className="h-4 w-4 text-orangeAccent" />
                    <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">3 Installments</span>
                  </div>
                  <div className="text-3xl font-extrabold text-orange-700">₹{emi3.toLocaleString('en-IN')}</div>
                  <div className="text-xs text-orange-400 mt-1">per installment</div>
                </div>
                <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Calculator className="h-4 w-4 text-amber-500" />
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">6 Installments</span>
                  </div>
                  <div className="text-3xl font-extrabold text-amber-700">₹{emi6.toLocaleString('en-IN')}</div>
                  <div className="text-xs text-amber-400 mt-1">per installment</div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100 sm:col-span-2">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingDown className="h-4 w-4 text-emerald-500" />
                    <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">{t.calculator.savings}</span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <div className="text-3xl font-extrabold text-emerald-700">₹{savings.toLocaleString('en-IN')}</div>
                    <span className="text-sm text-emerald-500 font-bold line-through text-slate-400">
                      ₹{course.fee.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <Percent className="h-3.5 w-3.5 text-emerald-500" />
                    <span className="text-xs text-emerald-600 font-semibold">10% instant discount on one-time payment</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* WhatsApp CTA */}
          <div className="px-6 pb-6">
            <button
              onClick={handleWhatsApp}
              className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm rounded-2xl flex items-center justify-center gap-3 transition-all shadow-sm shadow-green-500/20 hover:shadow-md hover:shadow-green-500/30 hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t.calculator.whatsappQuote}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeeCalculator;
