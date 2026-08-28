import React, { useState } from 'react';
import type { Review } from '../types';
import { getTranslation, type Language } from '../translations/translations';

interface CommunityReviewsProps {
  reviews: Review[];
  language: Language;
  onOpenWriteReview: () => void;
  onOpenAllReviews: () => void;
}

export const CommunityReviews: React.FC<CommunityReviewsProps> = ({
  reviews,
  language,
  onOpenWriteReview,
  onOpenAllReviews,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const t = (key: string) => getTranslation(key, language);

  const categories = [
    { label: 'All', count: reviews.length },
    { label: 'Practical Training', count: 5 },
    { label: 'Helpful Teachers', count: 3 },
    { label: 'Career Guidance', count: 2 },
    { label: 'Student Support', count: 4 },
  ];

  const filteredReviews =
    selectedCategory === 'All'
      ? reviews
      : reviews.filter((r) => r.category === selectedCategory);

  const handlePrev = () => {
    setActiveReviewIndex((prev) =>
      prev === 0 ? Math.max(0, filteredReviews.length - 1) : prev - 1
    );
  };

  const handleNext = () => {
    setActiveReviewIndex((prev) =>
      prev >= filteredReviews.length - 1 ? 0 : prev + 1
    );
  };

  const getComment = (review: Review) => {
    if (language === 'hi' && review.commentHi) return review.commentHi;
    if (language === 'mr' && review.commentMr) return review.commentMr;
    return review.comment;
  };

  return (
    <section id="reviews" className="bg-white py-12 md:py-16 px-4 md:px-6 mb-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-['Manrope'] text-2xl sm:text-3xl md:text-4xl text-[#002760] font-extrabold mb-3 uppercase tracking-tight">
            {t('reviews.title')}
          </h2>
          <div className="w-12 h-1 bg-[#FFD21F] mx-auto rounded-full mb-4" />
          <p className="font-['Work_Sans'] text-sm md:text-base text-[#172033]/70 max-w-2xl mx-auto leading-relaxed">
            {t('reviews.subtitle')}
          </p>
        </div>

        {/* Google Style Community Rating Card */}
        <div className="bg-[#002760] rounded-3xl p-6 sm:p-8 shadow-xl text-white max-w-3xl mx-auto mb-10 relative overflow-hidden border border-white/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1557C0]/30 rounded-full blur-3xl -z-0 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-[#FFD21F] text-xl">verified</span>
                <h3 className="font-['Manrope'] text-xl md:text-2xl font-bold">
                  {language === 'en' ? 'Abhinav Technical Institute' : language === 'hi' ? 'अभिनव टेक्निकल इंस्टीट्यूट' : 'अभिनव टेक्निकल इन्स्टिट्यूट'}
                </h3>
              </div>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-md">
                {t('location.addressVal')}
              </p>
            </div>
            <button
              onClick={onOpenWriteReview}
              className="border border-white/30 rounded-full px-5 py-2 text-xs sm:text-sm text-[#FFD21F] font-bold hover:bg-white/10 transition-colors shrink-0 cursor-pointer shadow-sm flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-base">rate_review</span>
              {t('reviews.writeReviewBtn')}
            </button>
          </div>

          <div className="relative z-10 flex items-center gap-4 mb-6">
            <span className="text-4xl md:text-5xl font-extrabold text-white">4.4</span>
            <div className="flex flex-col">
              <div className="flex text-[#FFD21F] items-center">
                {[1, 2, 3, 4].map((star) => (
                  <span
                    key={star}
                    className="material-symbols-outlined text-2xl text-[#FFD21F]"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    star
                  </span>
                ))}
                <span className="material-symbols-outlined text-2xl text-[#FFD21F]">star_half</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/70 text-xs sm:text-sm mt-1 font-medium">
                <span>{t('reviews.googleRating')}</span>
                <span className="material-symbols-outlined text-sm">info</span>
              </div>
            </div>
          </div>

          {/* Review Filter Tags */}
          <div className="relative z-10 flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.label;
              return (
                <button
                  key={cat.label}
                  onClick={() => {
                    setSelectedCategory(cat.label);
                    setActiveReviewIndex(0);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#1557C0] text-white border border-[#1557C0] shadow-sm font-bold'
                      : 'bg-white/10 text-white/85 border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {cat.label} {cat.label !== 'All' && <span className="text-white/60 ml-1">({cat.count})</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Student Reviews Carousel Header */}
        <div className="text-center mb-6">
          <span className="font-['Manrope'] text-[11px] font-bold text-[#1557C0] tracking-widest uppercase block">
            {t('reviews.title')}
          </span>
        </div>

        {/* Review Cards Grid / Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {filteredReviews.slice(0, 2).map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-[24px] p-6 border border-[#E6ECF3] shadow-md hover:shadow-xl transition-all relative overflow-hidden flex flex-col justify-between group"
              >
                {/* Large Background Quote */}
                <span
                  className="material-symbols-outlined absolute -top-4 -right-4 text-[#1557C0]/5 text-[140px] pointer-events-none select-none"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  format_quote
                </span>

                <div>
                  {/* Stars */}
                  <div className="flex text-[#FFD21F] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[20px] text-[#FFD21F]"
                        style={{ fontVariationSettings: '"FILL" 1' }}
                      >
                        star
                      </span>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="font-['Work_Sans'] text-[#172033]/85 text-sm sm:text-[15px] leading-relaxed mb-6 relative z-10 italic">
                    "{getComment(review)}"
                  </p>
                </div>

                <div>
                  {/* Divider */}
                  <div className="w-full h-px bg-[#E6ECF3] mb-4" />

                  {/* Profile */}
                  <div className="flex items-center gap-3.5">
                    {review.avatar ? (
                      <img
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#1557C0]/20"
                        src={review.avatar}
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-[#1557C0]/10 flex items-center justify-center text-[#1557C0] border-2 border-[#1557C0]/20">
                        <span className="material-symbols-outlined text-2xl">person</span>
                      </div>
                    )}
                    <div className="flex flex-col">
                      <span className="font-['Manrope'] font-bold text-[#002760] text-sm sm:text-base">
                        {review.name}
                      </span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="inline-flex bg-[#1557C0]/10 text-[#1557C0] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                          {review.course}
                        </span>
                        <span className="text-[10px] text-gray-400">{review.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls with Interactive Dots */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={handlePrev}
              aria-label="Previous reviews"
              className="w-10 h-10 rounded-full border border-[#E6ECF3] bg-white shadow-md flex items-center justify-center text-[#002760] hover:bg-[#002760] hover:text-white transition-all cursor-pointer hover:scale-105"
            >
              <span className="material-symbols-outlined font-bold">arrow_back</span>
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: Math.ceil(filteredReviews.length / 3) || 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveReviewIndex(idx * 3)}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    Math.floor(activeReviewIndex / 3) === idx
                      ? 'w-6 h-2.5 bg-[#002760]'
                      : 'w-2.5 h-2.5 bg-gray-300 hover:bg-[#002760]'
                  }`}
                  aria-label={`Go to review slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              aria-label="Next reviews"
              className="w-10 h-10 rounded-full border border-[#E6ECF3] bg-white shadow-md flex items-center justify-center text-[#002760] hover:bg-[#002760] hover:text-white transition-all cursor-pointer hover:scale-105"
            >
              <span className="material-symbols-outlined font-bold">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center mt-6">
          <button
            onClick={onOpenAllReviews}
            className="inline-flex items-center gap-2 text-[#1557C0] font-bold font-['Work_Sans'] text-sm hover:gap-3 transition-all cursor-pointer"
          >
            {t('reviews.allReviewsBtn')}
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};
