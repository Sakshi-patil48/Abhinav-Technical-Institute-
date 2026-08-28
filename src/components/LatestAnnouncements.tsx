import React from 'react';
import type { Announcement } from '../types';
import { getTranslation, type Language } from '../translations/translations';

interface LatestAnnouncementsProps {
  announcements: Announcement[];
  language: Language;
  onSelectAnnouncement: (announcement: Announcement) => void;
}

export const LatestAnnouncements: React.FC<LatestAnnouncementsProps> = ({
  announcements,
  language,
  onSelectAnnouncement,
}) => {
  const t = (key: string) => getTranslation(key, language);

  const getTitle = (item: Announcement) => {
    if (language === 'hi' && item.titleHi) return item.titleHi;
    if (language === 'mr' && item.titleMr) return item.titleMr;
    return item.title;
  };

  const getDesc = (item: Announcement) => {
    if (language === 'hi' && item.descriptionHi) return item.descriptionHi;
    if (language === 'mr' && item.descriptionMr) return item.descriptionMr;
    return item.description;
  };

  return (
    <section id="announcements" className="px-4 md:px-6 max-w-[1200px] mx-auto mb-16 py-6 bg-gradient-to-b from-[#F4F8FD] to-white rounded-3xl border border-[#E6ECF3]/60">
      <div className="flex flex-col gap-5">
        {/* Section Header */}
        <div className="flex flex-col gap-2 px-2 sm:px-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#1557C0] text-[26px]">campaign</span>
            <h2 className="font-['Manrope'] text-xl sm:text-2xl text-[#002760] font-extrabold tracking-tight uppercase">
              {t('announcements.title')}
            </h2>
          </div>
          <div className="w-16 h-1 bg-[#FFD21F] rounded-full" />
        </div>

        {/* Announcements List / Carousel */}
        <div className="relative group px-2 sm:px-4">
          <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-4 pb-2">
            {announcements.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectAnnouncement(item)}
                className="w-[90%] sm:w-[360px] md:w-[380px] snap-center shrink-0 cursor-pointer"
              >
                <div className="bg-white border border-[#E6ECF3] hover:border-[#1557C0] rounded-[18px] p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-200 flex items-start gap-4 h-full">
                  <div className="w-11 h-11 rounded-full bg-[#1557C0]/10 flex items-center justify-center shrink-0 text-[#1557C0] mt-0.5">
                    <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-['Manrope'] font-bold text-[#002760] text-sm">
                        {getTitle(item)}
                      </h3>
                      {item.isNew && (
                        <span className="bg-[#FFD21F]/30 text-[#002760] text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase border border-[#FFD21F]">
                          {t('announcements.newTag')}
                        </span>
                      )}
                    </div>
                    <p className="text-[#172033]/70 text-xs line-clamp-2 leading-relaxed">
                      {getDesc(item)}
                    </p>
                    <span className="text-[10px] text-[#1557C0] font-semibold mt-2 inline-flex items-center gap-1">
                      {item.tag} • {item.date}
                    </span>
                  </div>

                  <span className="material-symbols-outlined text-[#1557C0] text-lg self-center opacity-60 group-hover:opacity-100">
                    arrow_forward
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
