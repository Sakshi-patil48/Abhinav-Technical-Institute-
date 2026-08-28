import React, { useState, useRef, useEffect } from 'react';
import { HERO_CAROUSEL_IMAGES } from '../data/instituteData';
import { Language, getTranslation } from '../translations/translations';

interface GallerySectionProps {
  language: Language;
  images?: any[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ language, images }) => {
  const galleryList = images && images.length > 0 ? images : HERO_CAROUSEL_IMAGES;
  const [selectedImage, setSelectedImage] = useState<(typeof HERO_CAROUSEL_IMAGES)[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const carouselRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const t = (key: string) => getTranslation(key, language);

  const categories = [
    { id: 'all', label: t('gallery.all') },
    { id: 'Computer & IT', label: t('gallery.computer') },
    { id: 'Electrical Trades', label: t('gallery.electrical') },
    { id: 'Wiring & Automation', label: t('gallery.wiring') },
  ];

  const filteredImages =
    activeCategory === 'all'
      ? galleryList
      : galleryList.filter((img) => img.category === activeCategory || img.category?.includes(activeCategory));

  const updateScrollState = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const cardWidth = clientWidth * (window.innerWidth < 640 ? 0.85 : window.innerWidth < 1024 ? 0.48 : 0.32);
    if (cardWidth > 0) {
      const idx = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(Math.min(Math.max(0, idx), filteredImages.length - 1));
    }
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    el.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener('scroll', updateScrollState);
  }, [filteredImages]);

  const scrollToCard = (index: number) => {
    if (!carouselRef.current) return;
    const cards = carouselRef.current.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  };

  const handleScrollLeft = () => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.clientWidth * 0.8;
    carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const handleScrollRight = () => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.clientWidth * 0.8;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeftRef.current = carouselRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    carouselRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  const getImageTitle = (item: (typeof HERO_CAROUSEL_IMAGES)[0]) => {
    if (language === 'mr' && item.titleMr) return item.titleMr;
    return item.title;
  };

  const getImageDesc = (item: (typeof HERO_CAROUSEL_IMAGES)[0]) => {
    if (language === 'mr' && item.descMr) return item.descMr;
    return item.desc;
  };

  return (
    <section id="gallery" className="px-4 md:px-6 max-w-[1200px] mx-auto mb-16 py-8">
      {/* Section Header */}
      <div className="text-center mb-8 md:mb-10">
        <h2 className="font-['Manrope'] text-2xl sm:text-3xl md:text-4xl text-[#002760] font-extrabold mb-3">
          {t('gallery.title')}
        </h2>
        <div className="w-12 h-1 bg-[#FFD21F] mx-auto rounded-full mb-4" />
        <p className="font-['Work_Sans'] text-sm md:text-base text-[#172033]/70 max-w-xl mx-auto">
          {t('gallery.subtitle')}
        </p>

        {/* Category Filters & Carousel Navigation Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  if (carouselRef.current) carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#002760] text-white shadow-xs'
                    : 'bg-white text-[#002760]/80 hover:bg-[#F4F8FD] border border-[#E2E8F0]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Carousel Arrow Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleScrollLeft}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center transition-all cursor-pointer ${
                canScrollLeft
                  ? 'bg-white text-[#002760] hover:bg-[#002760] hover:text-white shadow-xs'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-50'
              }`}
              aria-label="Previous gallery images"
            >
              <span className="material-symbols-outlined text-lg">chevron_left</span>
            </button>
            <button
              onClick={handleScrollRight}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center transition-all cursor-pointer ${
                canScrollRight
                  ? 'bg-white text-[#002760] hover:bg-[#002760] hover:text-white shadow-xs'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-50'
              }`}
              aria-label="Next gallery images"
            >
              <span className="material-symbols-outlined text-lg">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div className="relative group">
        <div
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth gap-4 sm:gap-6 pb-6 cursor-grab active:cursor-grabbing select-none"
        >
          {filteredImages.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="w-[85%] sm:w-[320px] lg:w-[calc(33.333%-16px)] snap-start shrink-0 bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#1557C0]/40 transition-all duration-300 flex flex-col cursor-pointer group"
            >
              <div className="aspect-[4/3] overflow-hidden relative bg-[#002760]/5">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold bg-[#002760]/80 text-white px-2.5 py-1 rounded-md backdrop-blur-xs">
                    {item.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 text-white">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-[#FFD21F]">fullscreen</span>
                    <span className="font-['Manrope'] text-xs font-bold">
                      {t('gallery.enlarge')}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-['Manrope'] text-sm sm:text-base font-bold text-[#002760] mb-1 group-hover:text-[#1557C0] transition-colors">
                    {getImageTitle(item)}
                  </h3>
                  <p className="font-['Work_Sans'] text-xs text-[#172033]/70 line-clamp-2 leading-relaxed">
                    {getImageDesc(item)}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-xs text-[#1557C0] font-semibold">
                  <span>{t('gallery.viewPhoto')}</span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        {filteredImages.length > 1 && (
          <div className="flex items-center justify-center gap-5 mt-6">
            <button
              onClick={handleScrollLeft}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center transition-all cursor-pointer ${
                canScrollLeft
                  ? 'bg-white text-[#002760] hover:bg-[#002760] hover:text-white shadow-md hover:scale-105'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-50'
              }`}
              aria-label="Previous gallery images"
            >
              <span className="material-symbols-outlined font-bold text-lg">arrow_back</span>
            </button>
            <div className="flex items-center gap-2">
              {filteredImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToCard(idx)}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentIndex === idx
                      ? 'w-6 h-2.5 bg-[#002760]'
                      : 'w-2.5 h-2.5 bg-gray-300 hover:bg-[#002760]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleScrollRight}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center transition-all cursor-pointer ${
                canScrollRight
                  ? 'bg-white text-[#002760] hover:bg-[#002760] hover:text-white shadow-md hover:scale-105'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-50'
              }`}
              aria-label="Next gallery images"
            >
              <span className="material-symbols-outlined font-bold text-lg">arrow_forward</span>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[92vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col animate-fadeIn"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
              aria-label="Close"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="bg-black flex items-center justify-center max-h-[65vh] overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[65vh] object-contain"
              />
            </div>

            <div className="p-5 bg-white border-t border-[#E2E8F0]">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-[#EFF6FF] text-[#1557C0] border border-[#DBEAFE]">
                  {selectedImage.category}
                </span>
              </div>
              <h3 className="font-['Manrope'] text-lg font-bold text-[#002760] mb-1">
                {getImageTitle(selectedImage)}
              </h3>
              <p className="font-['Work_Sans'] text-xs sm:text-sm text-[#475569] leading-relaxed">
                {getImageDesc(selectedImage)}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
