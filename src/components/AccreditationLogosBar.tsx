import React, { useRef, useState } from 'react';
import { Language, getTranslation } from '../translations/translations';

interface AccreditationLogosBarProps {
  language?: Language;
  className?: string;
}

export const AccreditationLogosBar: React.FC<AccreditationLogosBarProps> = ({
  language = 'mr',
  className = '',
}) => {
  const currentLang: Language = (language || 'mr') as Language;
  const t = (key: string) => getTranslation(key, currentLang);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <div
      id="our-accreditations-bar"
      className={`w-full max-w-[1200px] mx-auto px-4 md:px-6 mb-16 ${className}`}
    >
      <div className="bg-white/95 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-md relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          
          {/* Left Title Section */}
          <div className="shrink-0 text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#1557C0] bg-[#1557C0]/10 px-3 py-1 rounded-full mb-2">
              Govt Recognized
            </span>
            <h2 className="font-['Manrope','Yantramanav',sans-serif] text-2xl sm:text-3xl font-extrabold text-[#002760] tracking-tight leading-tight">
              {currentLang === 'en' ? (
                <>Our Accreditations</>
              ) : currentLang === 'hi' ? (
                <>हमारी मान्यता एवं संबद्धता</>
              ) : (
                <>आमच्या मान्यता व दर्जा</>
              )}
            </h2>
            <div className="w-12 h-1 bg-[#FFD21F] rounded-full mt-2" />
          </div>

          {/* Right Horizontal Scrolling Carousel Track */}
          <div className="flex-1 w-full relative group">
            {/* Left Scroll Arrow */}
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center transition-all cursor-pointer ${
                canScrollLeft
                  ? 'bg-white text-[#002760] hover:bg-[#002760] hover:text-white shadow-lg hover:scale-110'
                  : 'bg-gray-100 text-gray-300 cursor-not-allowed opacity-40'
              }`}
              aria-label="Scroll accreditations left"
            >
              <span className="material-symbols-outlined font-bold text-lg">arrow_back</span>
            </button>

            {/* Scrollable Container */}
            <div
              ref={scrollRef}
              onScroll={checkScroll}
              className="w-full overflow-x-auto hide-scrollbar flex items-center gap-4 sm:gap-6 py-2 px-6 scroll-smooth"
            >
              {/* 1. MSBVET Maharashtra State Vocational Board Logo */}
              <div
                className="w-36 h-36 sm:w-40 sm:h-40 shrink-0 bg-white rounded-2xl p-3 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer group"
                title="Maharashtra State Board of Vocational Education & Training"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2 relative flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="46" fill="none" stroke="#002760" strokeWidth="6" />
                    <circle cx="50" cy="50" r="38" fill="none" stroke="#1557C0" strokeWidth="2" />
                    {/* Inner Shield */}
                    <path d="M50 18 L75 30 L75 62 L50 82 L25 62 L25 30 Z" fill="#002760" stroke="#FFD21F" strokeWidth="2" />
                    <path d="M50 18 L75 30 L75 50 L50 50 Z" fill="#DC2626" />
                    <path d="M25 30 L50 18 L50 50 L25 50 Z" fill="#1557C0" />
                    {/* Icons inside shield */}
                    <path d="M38 35 L40 45 L34 45 Z" fill="#FFF" />
                    <circle cx="62" cy="38" r="4" fill="#FFF" />
                    <path d="M35 62 L45 55 M58 62 L65 58" stroke="#FFF" strokeWidth="3" />
                  </svg>
                </div>
                <span className="text-[10px] sm:text-[11px] font-extrabold text-[#002760] leading-tight block">
                  MSBVET Board
                </span>
                <span className="text-[9px] text-gray-500 font-medium leading-none block mt-0.5">
                  महाराष्ट्र राज्य कौशल्य मंडळ
                </span>
              </div>

              {/* 2. NCVET Logo */}
              <div
                className="w-36 h-36 sm:w-40 sm:h-40 shrink-0 bg-white rounded-2xl p-3 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer group"
                title="National Council for Vocational Education and Training"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2 relative flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Blue Gear */}
                    <path
                      d="M50 20 L55 10 L65 15 L65 25 L75 30 L85 25 L90 35 L80 43 L83 55 L93 60 L90 72 L78 72 L73 82 L80 90 L70 98 L60 90 L50 95 L40 90 L30 98 L20 90 L27 82 L22 72 L10 72 L7 60 L17 55 L20 43 L10 35 L15 25 L25 30 L35 25 L35 15 L45 10 Z"
                      fill="#0284C7"
                    />
                    <circle cx="50" cy="55" r="22" fill="#FFF" />
                    {/* Red & Green Figure */}
                    <circle cx="50" cy="42" r="5" fill="#16A34A" />
                    <path d="M42 58 Q50 48 58 58 Z" fill="#DC2626" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-black text-[#DC2626] leading-tight block tracking-wider">
                  NCVET
                </span>
                <span className="text-[9px] text-gray-500 font-medium leading-none block mt-0.5">
                  कौशल गुणवत्ता प्रगति
                </span>
              </div>

              {/* 3. MSSDS Logo */}
              <div
                className="w-36 h-36 sm:w-40 sm:h-40 shrink-0 bg-white rounded-2xl p-3 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer group"
                title="Maharashtra State Skill Development Society"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2 relative flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" fill="none" stroke="#0284C7" strokeWidth="5" />
                    <circle cx="50" cy="50" r="16" fill="#0284C7" />
                    <circle cx="50" cy="50" r="8" fill="#FFF" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-black text-[#0284C7] leading-tight block tracking-wider">
                  MSSDS
                </span>
                <span className="text-[8px] sm:text-[9px] text-gray-500 font-semibold leading-tight block mt-0.5">
                  Maha Skill Society
                </span>
              </div>

              {/* 4. PMKVY Logo */}
              <div
                className="w-36 h-36 sm:w-40 sm:h-40 shrink-0 bg-white rounded-2xl p-3 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer group"
                title="Pradhan Mantri Kaushal Vikas Yojana"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2 relative flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Orange Rising Figure */}
                    <circle cx="65" cy="25" r="7" fill="#EA580C" />
                    <path d="M45 65 L60 38 L75 52 L65 75 Z" fill="#EA580C" />
                    <path d="M25 75 L45 45 L58 55 L40 85 Z" fill="#CA8A04" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-black text-[#EA580C] leading-tight block tracking-wider">
                  PMKVY
                </span>
                <span className="text-[8px] sm:text-[9px] text-gray-500 font-medium leading-tight block mt-0.5">
                  कौशल विकास योजना
                </span>
              </div>

              {/* 5. ITES Mumbai Logo */}
              <div
                className="w-36 h-36 sm:w-40 sm:h-40 shrink-0 bg-white rounded-2xl p-3 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer group"
                title="Indian Technical Education Society Mumbai (Est. 1941)"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2 relative flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect width="90" height="90" rx="10" x="5" y="5" fill="#1D4ED8" />
                    <circle cx="50" cy="50" r="36" fill="none" stroke="#FFF" strokeWidth="3" />
                    <text x="50" y="55" textAnchor="middle" fill="#FFF" fontWeight="900" fontSize="22" fontFamily="sans-serif">
                      ITES
                    </text>
                    <text x="50" y="74" textAnchor="middle" fill="#FFD21F" fontWeight="bold" fontSize="11" fontFamily="sans-serif">
                      1941
                    </text>
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-black text-[#1D4ED8] leading-tight block tracking-wider">
                  ITES MUMBAI
                </span>
                <span className="text-[8px] sm:text-[9px] text-gray-500 font-semibold leading-tight block mt-0.5">
                  Est. 1941 Society
                </span>
              </div>

              {/* 6. Skill India / NSDC Logo */}
              <div
                className="w-36 h-36 sm:w-40 sm:h-40 shrink-0 bg-white rounded-2xl p-3 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer group"
                title="Skill India - National Skill Development Corporation"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2 relative flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Skill India Monitor */}
                    <rect x="10" y="20" width="35" height="28" rx="3" fill="#0284C7" />
                    <path d="M22 48 L27 58 L18 58 Z" fill="#0284C7" />
                    {/* NSDC 3 figures */}
                    <circle cx="65" cy="30" r="4" fill="#0284C7" />
                    <circle cx="78" cy="25" r="4" fill="#EA580C" />
                    <circle cx="88" cy="32" r="4" fill="#16A34A" />
                    <path d="M58 55 L65 38 L72 55 Z" fill="#0284C7" />
                    <path d="M72 55 L78 33 L83 55 Z" fill="#EA580C" />
                    <path d="M83 55 L88 40 L93 55 Z" fill="#16A34A" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-black text-[#0284C7] leading-tight block tracking-wider">
                  Skill India / NSDC
                </span>
                <span className="text-[8px] sm:text-[9px] text-gray-500 font-semibold leading-tight block mt-0.5">
                  कौशल भारत - कुशल भारत
                </span>
              </div>

            </div>

            {/* Right Scroll Arrow */}
            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center transition-all cursor-pointer ${
                canScrollRight
                  ? 'bg-white text-[#002760] hover:bg-[#002760] hover:text-white shadow-lg hover:scale-110'
                  : 'bg-gray-100 text-gray-300 cursor-not-allowed opacity-40'
              }`}
              aria-label="Scroll accreditations right"
            >
              <span className="material-symbols-outlined font-bold text-lg">arrow_forward</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
