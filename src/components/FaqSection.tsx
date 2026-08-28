import React, { useState } from 'react';
import type { FaqItem } from '../types';
import { getTranslation, type Language } from '../translations/translations';

interface FaqSectionProps {
  faqs: FaqItem[];
  language: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqs, language }) => {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);
  const t = (key: string) => getTranslation(key, language);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const getQuestion = (faq: FaqItem) => {
    if (language === 'hi' && faq.questionHi) return faq.questionHi;
    if (language === 'mr' && faq.questionMr) return faq.questionMr;
    return faq.question;
  };

  const getAnswer = (faq: FaqItem) => {
    if (language === 'hi' && faq.answerHi) return faq.answerHi;
    if (language === 'mr' && faq.answerMr) return faq.answerMr;
    return faq.answer;
  };

  return (
    <section className="px-4 md:px-6 max-w-[1200px] mx-auto mb-16 py-8">
      <div className="text-center mb-8 md:mb-10">
        <span className="font-['Manrope'] text-[11px] font-bold text-[#1557C0] tracking-widest uppercase block mb-2">
          FAQ
        </span>
        <h2 className="font-['Manrope'] text-2xl sm:text-3xl md:text-4xl text-[#002760] font-extrabold mb-3">
          {t('faq.title')}
        </h2>
        <div className="w-12 h-1 bg-[#FFD21F] mx-auto rounded-full mb-4" />
        <p className="font-['Work_Sans'] text-sm md:text-base text-[#172033]/70 max-w-xl mx-auto">
          {t('faq.subtitle')}
        </p>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-3.5">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-[#E6ECF3] shadow-xs overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex justify-between items-center text-left font-['Manrope'] font-bold text-[#002760] text-sm sm:text-base p-5 cursor-pointer hover:bg-[#F4F8FD]/50 transition-colors"
                aria-expanded={isOpen}
              >
                <span>{getQuestion(faq)}</span>
                <span
                  className={`material-symbols-outlined text-[#1557C0] transition-transform duration-300 ml-4 shrink-0 ${
                    isOpen ? 'rotate-180 text-[#002760]' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>

              {isOpen && (
                <div className="p-5 pt-0 text-[#172033]/75 font-['Work_Sans'] text-xs sm:text-sm leading-relaxed border-t border-[#E6ECF3]/70 mt-1 bg-[#F4F8FD]/30">
                  <p className="pt-3">
                    {getAnswer(faq)}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
