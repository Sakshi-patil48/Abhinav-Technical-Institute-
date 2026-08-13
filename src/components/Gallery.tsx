import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const Gallery: React.FC = () => {
  const images = [
    "https://image3.jdomni.in/library/27012024/00/72/ED/02DBA332BC7D51C5B5D0E39035_1706308243079.jpg",
    "https://image2.jdomni.in/library/27012024/5E/68/76/F25898DD6BECE793B19FF77B86_1706308229188.jpg",
    "https://image1.jdomni.in/library/27012024/6B/27/EF/329ECA29CF346893350C098537_1706308207639.jpg",
    "https://image3.jdomni.in/library/27012024/70/95/63/65E74ED09E62209F3937639785_1706308271156.jpg",
    "https://image2.jdomni.in/library/27012024/87/BB/B5/39D2D3C80D8AFA0D543277A583_1706308238046.jpg",
    "https://image1.jdomni.in/library/27012024/29/8C/3C/043270F51C7630D34C91EBF1CF_1706308280437.jpg",
    "https://image3.jdomni.in/library/27012024/48/50/05/CC3CA8CF4740C217ECB75D192B_1706308260225.jpg",
    "https://image2.jdomni.in/library/27012024/26/E0/EA/C590AC40BF74DCB91AC317A6FD_1706308219101.jpg",
    "https://image1.jdomni.in/library/27012024/3E/CB/D7/7CD0D91EFA72E76CDAA058A8E9_1706308261952.jpg",
    "https://image3.jdomni.in/library/27012024/AC/2C/3E/A30C1049121AA44678936F6B26_1706308253748.jpg",
    "https://image2.jdomni.in/library/27012024/69/44/A5/DB23EFE46867466F78888151FC_1706308283762.jpg",
    "https://image1.jdomni.in/library/27012024/FC/EF/49/9A86B1E894ED85EF1633880A42_1706308276721.jpg",
    "https://image3.jdomni.in/library/27012024/F7/FE/DD/6ED489F0E9043F7A5DECCAAF7A_1706308234404.jpg",
    "https://image2.jdomni.in/library/27012024/83/99/8D/05D8AE1D2D89BDC852D227B4EC_1706308247506.jpg",
    "https://image1.jdomni.in/library/27012024/ED/D7/99/D92824BC4779C48A635F27446D_1706308287752.jpg",
    "https://image3.jdomni.in/library/27012024/2F/B7/3D/4FA79BB009248C22A754B6FC52_1706308226955.jpg",
    "https://image2.jdomni.in/library/27012024/6C/E5/CF/5C20C6561EB57AD2ADF42627D5_1706308291488.jpg",
    "https://content.jdmagicbox.com/v2/comp/jalgaon/dc/9999px257.x257.100521174144.m3k2dc/catalogue/abhinav-technical-institute-of-industrial-training-institute-and-skill-development-education-navi-peth-jalgaon-jalgaon-colleges-8fdv0bc9ga.jpg",
    "https://image1.jdomni.in/library/27012024/41/D1/BE/D57B25F1B9322F00873EDB977B_1706308265229.jpg",
    "https://image3.jdomni.in/library/27012024/9B/78/D8/1D0133609147AA827E1A25EC60_1706308214126.jpg",
    "https://image2.jdomni.in/library/27012024/E7/AF/73/DE0F5AD2CFF26D0A5EBACA5AB2_1706308255435.jpg",
    "https://image1.jdomni.in/library/27012024/1A/03/86/888006CD592C6866633C09C197_1706308249459.jpg",
    "https://image3.jdomni.in/library/27012024/2B/28/4B/EF4CDF95880005015D598E6D3A_1706308221762.jpg",
    "https://image2.jdomni.in/library/27012024/AE/BB/BB/C1F202D5D450D81C99A395CEE9_1706308258016.jpg",
    "https://image1.jdomni.in/library/27012024/78/91/21/761099F64C2B0D89738C3EE9CE_1706308210389.jpg",
    "https://image3.jdomni.in/library/27012024/B1/48/08/0C36435885601153654DAFFEC2_1706308267235.jpg",
    "https://image2.jdomni.in/library/27012024/A7/A1/02/4E86BC9EA470D269F97730A536_1706308273080.jpg"
  ];

  const [visibleCount, setVisibleCount] = useState(9);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 9, images.length));
  };

  const showLess = () => {
    setVisibleCount(9);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev === 0 ? images.length - 1 : prev! - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev === images.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <section id="gallery" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-orangeAccent">Our Campus life</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-serif">
            Student & Workshop Gallery
          </h2>
          <div className="h-1 w-12 bg-orangeAccent mx-auto rounded-full" />
          <p className="text-slate-600 text-base">
            Take a look inside our classrooms, wiring workshops, computers labs, and special certification events.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.slice(0, visibleCount).map((img, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="group relative h-64 bg-slate-100 rounded-2xl overflow-hidden shadow-sm border border-slate-100 cursor-pointer"
            >
              <img
                src={img}
                alt={`Abhinav Institute Gallery Item ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white">
                  <ZoomIn className="h-6 w-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-12 text-center flex justify-center gap-4">
          {visibleCount < images.length && (
            <button
              onClick={showMore}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-semibold rounded-xl text-white bg-orangeAccent hover:bg-orangeAccent-dark shadow-sm hover:shadow"
            >
              View More Images
            </button>
          )}
          {visibleCount > 9 && (
            <button
              onClick={showLess}
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-sm font-semibold rounded-xl text-slate-700 bg-white hover:bg-slate-50"
            >
              Show Less
            </button>
          )}
        </div>

        {/* Lightbox Overlay */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-[99] flex items-center justify-center p-4 md:p-10 select-none animate-fadeIn"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Previous button */}
            <button
              onClick={handlePrev}
              className="absolute left-6 text-white/80 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors hidden md:block"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>

            {/* Image */}
            <div className="max-w-4xl max-h-[80vh] flex flex-col items-center">
              <img
                src={images[lightboxIndex]}
                alt={`Full preview ${lightboxIndex + 1}`}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <span className="text-white/60 text-sm font-medium mt-4">
                Image {lightboxIndex + 1} of {images.length}
              </span>
            </div>

            {/* Next button */}
            <button
              onClick={handleNext}
              className="absolute right-6 text-white/80 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors hidden md:block"
            >
              <ChevronRight className="h-10 w-10" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Gallery;
