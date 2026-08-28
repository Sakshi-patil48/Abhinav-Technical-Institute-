import React, { useRef } from 'react';
import type { Course } from '../types';
import { getTranslation, type Language } from '../translations/translations';

interface UpcomingBatchesProps {
  courses: Course[];
  language: Language;
  onSelectCourse: (course: Course) => void;
  onOpenEnquiryWithCourse: (courseName: string) => void;
}

export const UpcomingBatches: React.FC<UpcomingBatchesProps> = ({
  courses,
  language,
  onSelectCourse,
  onOpenEnquiryWithCourse,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const t = (key: string) => getTranslation(key, language);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getCourseName = (course: Course) => {
    if (language === 'hi' && course.nameHi) return course.nameHi;
    if (language === 'mr' && course.nameMr) return course.nameMr;
    return course.name;
  };

  const getCourseDesc = (course: Course) => {
    if (language === 'hi' && course.descriptionHi) return course.descriptionHi;
    if (language === 'mr' && course.descriptionMr) return course.descriptionMr;
    return course.description;
  };

  return (
    <section id="batches" className="px-4 md:px-6 max-w-[1200px] mx-auto mb-16 py-8">
      {/* Section Header */}
      <div className="flex justify-between items-end mb-6 md:mb-8">
        <div className="flex flex-col gap-2">
          <h2 className="font-['Manrope'] text-2xl sm:text-3xl md:text-4xl text-[#002760] font-extrabold tracking-tight uppercase">
            {t('batches.title')}
          </h2>
          <div className="w-16 h-1 bg-[#FFD21F] rounded-full" />
          <p className="font-['Work_Sans'] text-sm sm:text-base text-[#172033]/70 mt-1">
            {t('batches.subtitle')}
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className="w-10 h-10 rounded-full border border-[#E6ECF3] bg-white shadow-sm flex items-center justify-center text-[#002760] hover:bg-[#F4F8FD] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">chevron_left</span>
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className="w-10 h-10 rounded-full border border-[#E6ECF3] bg-white shadow-sm flex items-center justify-center text-[#002760] hover:bg-[#F4F8FD] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Horizontal Carousel */}
      <div className="relative group">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto hide-scrollbar gap-4 md:gap-6 pb-6 snap-x snap-mandatory scroll-smooth"
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className="w-[85%] sm:w-[280px] md:w-[290px] lg:w-[calc(25%-18px)] bg-white border border-[#E6ECF3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col snap-center shrink-0 group/card"
            >
              {/* Course Thumbnail */}
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-gray-100">
                <img
                  src={course.image}
                  alt={getCourseName(course)}
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-[#002760]/80 backdrop-blur text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                  {course.category}
                </div>
              </div>

              {/* Course Details */}
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-green-600 font-bold text-[10px] uppercase tracking-wider">
                      {t('batches.admissionsOpen')}
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-500 font-medium">{course.code}</span>
                </div>

                <h3 className="font-['Manrope'] text-lg font-bold text-[#002760] mb-1 group-hover/card:text-[#1557C0] transition-colors">
                  {getCourseName(course)}
                </h3>
                <p className="text-[#172033]/70 text-xs mb-4 line-clamp-2 leading-relaxed">
                  {getCourseDesc(course)}
                </p>

                <div className="grid grid-cols-1 gap-2 mb-4 py-3 border-y border-[#E6ECF3] bg-[#F4F8FD]/50 -mx-4 px-4">
                  <div className="flex items-center gap-2 text-[11px] text-[#172033]/80">
                    <span className="material-symbols-outlined text-[#1557C0] text-sm">calendar_today</span>
                    <span><strong>{t('batches.startDate')}:</strong> {course.startDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-[#172033]/80">
                    <span className="material-symbols-outlined text-[#1557C0] text-sm">schedule</span>
                    <span><strong>{t('batches.timing')}:</strong> {course.timing}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-[#172033]/80">
                    <span className="material-symbols-outlined text-[#1557C0] text-sm">timer</span>
                    <span><strong>{t('batches.duration')}:</strong> {course.duration}</span>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between gap-2 pt-1">
                  <button
                    onClick={() => onSelectCourse(course)}
                    className="flex items-center gap-1 text-[#1557C0] hover:text-[#002760] font-bold text-xs hover:gap-2 transition-all cursor-pointer"
                  >
                    {t('batches.viewDetailsBtn')}
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                  <button
                    onClick={() => onOpenEnquiryWithCourse(getCourseName(course))}
                    className="bg-[#002760] hover:bg-[#1557C0] text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg shadow-sm transition-colors cursor-pointer"
                  >
                    {t('batches.enrollBtn')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Carousel Control Bar (Left Arrow, Dots, Right Arrow) */}
        <div className="flex items-center justify-center gap-5 mt-6">
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className="w-10 h-10 rounded-full border border-[#E6ECF3] bg-white shadow-md flex items-center justify-center text-[#002760] hover:bg-[#002760] hover:text-white transition-all cursor-pointer hover:scale-105"
          >
            <span className="material-symbols-outlined font-bold text-lg">arrow_back</span>
          </button>
          <div className="flex items-center gap-2">
            {courses.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const cardWidth = 300;
                    scrollContainerRef.current.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
                  }
                }}
                className="w-2.5 h-2.5 rounded-full bg-gray-300 hover:bg-[#002760] transition-all cursor-pointer"
                aria-label={`Scroll to course ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className="w-10 h-10 rounded-full border border-[#E6ECF3] bg-white shadow-md flex items-center justify-center text-[#002760] hover:bg-[#002760] hover:text-white transition-all cursor-pointer hover:scale-105"
          >
            <span className="material-symbols-outlined font-bold text-lg">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};
