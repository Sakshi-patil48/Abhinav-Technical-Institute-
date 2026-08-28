import React, { useState, useEffect } from 'react';
import { InstituteLogo } from './InstituteLogo';
import { AccreditationLogosBar } from './AccreditationLogosBar';
import backImageSrc from '../assets/backImage';
import principalImageSrc from '../assets/principal.png';
import { Language, getTranslation } from '../translations/translations';

interface AboutUsPageProps {
  language: Language;
  onNavigateHome: () => void;
  onExploreCourses: () => void;
  onOpenEnquiry: () => void;
  onOpenStudentSection: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({
  language,
  onNavigateHome,
  onExploreCourses,
  onOpenEnquiry,
  onOpenStudentSection,
}) => {
  const [activeGalleryTab, setActiveGalleryTab] = useState<'all' | 'labs' | 'classrooms' | 'workshops'>('all');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Infrastructure / Labs Gallery List
  const infrastructureList = [
    {
      id: 'comp-lab-1',
      titleEn: 'High-Tech IT & Computer Practical Lab',
      titleMr: 'अद्ययावत संगणक व आयटी प्रॅक्टिकल लॅब',
      category: 'labs',
      capacity: '40 Individual Workstations',
      icon: 'desktop_windows',
      featuresEn: 'Individual i5 PC setups, Tally Prime, MS-CIT, high-speed fiber internet, and UPS backup.',
      featuresMr: 'प्रत्येक विद्यार्थ्यासाठी स्वतंत्र आय-५ कॉम्प्युटर, टॅली, एमएस-सीआयटी, व हाय-स्पीड इंटरनेट.',
      img: 'https://content3.jdmagicbox.com/comp/jalgaon/dc/9999px257.x257.100521174144.m3k2dc/catalogue/abhinav-technical-institute-of-industrial-training-institute-and-skill-development-education-navi-peth-jalgaon-jalgaon-colleges-fqdkck51aj.jpg'
    },
    {
      id: 'elec-lab-1',
      titleEn: 'Advanced Electrical Trade Workshop',
      titleMr: 'अत्याधुनिक इलेक्ट्रिकल कार्यशाळा',
      category: 'workshops',
      capacity: '3-Phase Industrial Panels',
      icon: 'electrical_services',
      featuresEn: '3-Phase motor rewinding rigs, DOL starter benches, transformer testing, and megger meters.',
      featuresMr: '३-फेज मोटर रिवाइंडिंग, स्टार्टर टेस्टिंग, ट्रान्सफॉर्मर तपासणी व डिजिटल मीटर प्रॅक्टिकल.',
      img: 'https://content3.jdmagicbox.com/comp/jalgaon/dc/9999px257.x257.100521174144.m3k2dc/catalogue/abhinav-technical-institute-of-industrial-training-institute-and-skill-development-education-navi-peth-jalgaon-jalgaon-computer-training-institutes-9u76812boe.jpg'
    },
    {
      id: 'wire-lab-1',
      titleEn: 'Commercial & Residential Wiring Simulator',
      titleMr: 'कमर्शियल व रेसिडेन्शियल वायरिंग सिम्युलेटर',
      category: 'workshops',
      capacity: 'Concealed Conduit Rigs',
      icon: 'power',
      featuresEn: 'Multi-storey building concealed wiring models, MCB distribution boxes, and safety earthing test kits.',
      featuresMr: 'इमारतींचे कन्सिल्ड फिटिंग्ज, एमसीबी वितरण पॅनेल आणि अर्थिंग टेस्ट किट्स.',
      img: 'https://content3.jdmagicbox.com/comp/jalgaon/dc/9999px257.x257.100521174144.m3k2dc/catalogue/abhinav-technical-institute-of-industrial-training-institute-and-skill-development-education-navi-peth-jalgaon-jalgaon-computer-training-institutes-xsn20b070w.jpg'
    },
    {
      id: 'mech-lab-1',
      titleEn: 'Industrial Practical Training Workshop',
      titleMr: 'औद्योगिक प्रात्यक्षिक प्रशिक्षण कार्यशाळा',
      category: 'workshops',
      capacity: 'Heavy Machinery & Tools',
      icon: 'precision_manufacturing',
      featuresEn: 'Hands-on practical training on industrial machinery, welding equipment, safety tools, and diesel engines.',
      featuresMr: 'औद्योगिक मशिनरी, वेल्डिंग उपकरणे, सुरक्षा साधने व डिझेल इंजिन प्रात्यक्षिक.',
      img: 'https://content3.jdmagicbox.com/comp/jalgaon/dc/9999px257.x257.100521174144.m3k2dc/catalogue/abhinav-technical-institute-of-industrial-training-institute-and-skill-development-education-navi-peth-jalgaon-jalgaon-computer-training-institutes-hyk2wb2v1e.jpg'
    },
    {
      id: 'smart-class-1',
      titleEn: 'Digital Smart Audio-Visual Classroom',
      titleMr: 'डिजिटल स्मार्ट ऑडिओ-व्हिज्युअल वर्गखोली',
      category: 'classrooms',
      capacity: '60 Seating Capacity',
      icon: 'co_present',
      featuresEn: 'High-definition digital projectors, smart audio systems, and interactive blueprint projection.',
      featuresMr: 'हाय-डेफिनिशन डिजिटल प्रोजेक्टर, स्मार्ट ऑडिओ सिस्टीम व ब्ल्यू-प्रिंट प्रोजेक्शन.',
      img: 'https://content3.jdmagicbox.com/v2/comp/jalgaon/dc/9999px257.x257.100521174144.m3k2dc/catalogue/abhinav-technical-institute-of-industrial-training-institute-and-skill-development-education-navi-peth-jalgaon-jalgaon-computer-training-institutes-roefbm6f0w.jpg'
    },
  ];

  const filteredInfrastructure = activeGalleryTab === 'all'
    ? infrastructureList
    : infrastructureList.filter(item => item.category === activeGalleryTab);

  return (
    <div className="w-full bg-[#F8FAFC] text-[#172033] min-h-screen">
      
      {/* Top Navigation & Breadcrumb Sticky Bar */}
      <div className="bg-white border-b border-[#E2E8F0] sticky top-0 z-30 shadow-xs">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1557C0] hover:text-[#002760] bg-[#F1F5F9] hover:bg-[#E2E8F0] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              <span>{language === 'en' ? 'Back to Home' : 'मुख्यपृष्ठावर परत जा'}</span>
            </button>

            <span className="text-[#94A3B8] hidden sm:inline">•</span>

            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-[#64748B]">
              <button onClick={onNavigateHome} className="hover:text-[#1557C0]">
                {language === 'en' ? 'Home' : 'मुख्यपृष्ठ'}
              </button>
              <span>/</span>
              <span className="text-[#002760] font-bold">
                {language === 'en' ? 'About Us' : 'आमच्याबद्दल'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onExploreCourses}
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-[#002760] bg-[#FFF9EB] border border-[#FFE7A3] px-3.5 py-1.5 rounded-lg hover:bg-[#002760] hover:text-white transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">menu_book</span>
              <span>{language === 'en' ? 'View Batches' : 'नवीन बॅचेस'}</span>
            </button>

            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#002760] bg-[#FFD21F] hover:bg-[#f0c20f] px-3.5 sm:px-4 py-1.5 rounded-lg shadow-sm transition-transform active:scale-95 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
              <span>{language === 'en' ? 'Quick Enquiry' : 'चौकशी करा'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Full-Screen Body Container */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-12 sm:space-y-16">
        
        {/* ------------------------------------------------------------- */}
        {/* POSITION 1: Our Accreditations                                */}
        {/* ------------------------------------------------------------- */}
        <section id="our-accreditations-section">
          <AccreditationLogosBar language={language} />
        </section>

        {/* ------------------------------------------------------------- */}
        {/* POSITION 2: Message from Principal (मनोगत...)                */}
        {/* ------------------------------------------------------------- */}
        <section id="principal-message-section" className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-xl overflow-hidden relative">
          
          {/* Header Banner Strip */}
          <div className="bg-gradient-to-r from-[#002760] via-[#1557C0] to-[#002760] -mx-6 -mt-6 sm:-mx-10 sm:-mt-10 p-5 sm:p-7 text-white flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white p-2 rounded-2xl shadow-md shrink-0 flex items-center justify-center">
                <InstituteLogo className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFD21F] block">
                  {language === 'en' ? 'Official Message' : language === 'hi' ? 'प्राचार्य का संदेश' : 'संस्थापकीय संदेश'}
                </span>
                <h2 className="font-['Manrope','Yantramanav',sans-serif] text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                  {language === 'en' ? "Principal's Message" : language === 'hi' ? 'प्राचार्य का मनोगत...' : 'मनोगत...'}
                </h2>
              </div>
            </div>
            <div className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-xs sm:text-sm font-bold text-white">
              अभिनव व्यवसाय प्रशिक्षण केंद्र (एटीआय / एव्हटीसी / एसडीटीसी)
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Principal Sir's Photo Card (4 columns) */}
            <div className="lg:col-span-4 flex flex-col items-center text-center bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0] shadow-sm">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-4 border-[#002760]/20 shadow-xl mb-4 relative group">
                <img
                  src={principalImageSrc}
                  alt="Er. P. R. Patil - Principal & Director"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#002760] via-[#002760]/80 to-transparent p-2 text-white text-[11px] font-bold">
                  Principal & Founder Director
                </div>
              </div>

              <h3 className="font-['Manrope'] text-lg sm:text-xl font-extrabold text-[#002760]">
                Er. P. R. Patil
              </h3>
              <p className="text-xs font-bold text-[#1557C0] mb-2">
                {language === 'en' ? 'Principal & Chief Technical Director' : 'प्राचार्य व मुख्य संचालक'}
              </p>
              <div className="w-12 h-1 bg-[#FFD21F] rounded-full mb-3" />
              <p className="text-xs text-[#64748B] leading-relaxed font-medium">
                {language === 'en'
                  ? 'B.E. Electrical, Master Trainer • 30+ Years of Technical Skill Education Leadership'
                  : 'बी.ई. इलेक्ट्रिकल, मास्टर ट्रेनर • तांत्रिक शिक्षण व कौशल्य विकासात ३०+ वर्षांचा प्रदीर्घ अनुभव'}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-200 w-full flex items-center justify-center gap-2 text-xs font-bold text-[#059669]">
                <span className="material-symbols-outlined text-base">verified</span>
                <span>Government Recognized ITI Centre</span>
              </div>
            </div>

            {/* Official Letter Body (8 columns - Exact Verbatim Document from Image) */}
            <div className="lg:col-span-8 space-y-4 font-['Work_Sans','Yantramanav',sans-serif] text-sm md:text-[15px] text-[#1E293B] leading-relaxed">
              {language === 'en' ? (
                <>
                  <p className="font-bold text-[#002760] text-base sm:text-lg">Dear Students & Friends,</p>
                  <p>
                    Without worrying about 10th or 12th low marks percentage, Abhinav Technical Vocational Training Centre offers 1-year and 2-year industrial trade training courses providing huge employment and self-employment opportunities at local, national, and international levels across industrial, government, and semi-government sectors.
                  </p>
                  <p>
                    Our institute courses are recognized by the Maharashtra State Skill Development Examination Board under DVET (<strong className="text-[#002760] bg-[#FFD21F]/25 px-1.5 py-0.5 rounded">Electrician - 2 Years, Diesel Mechanic - 1 Year, Construction Supervisor - 1 Year</strong>) with DGT NCVET Apprenticeship eligibility under the Ministry of Skill Development & Entrepreneurship, Govt. of India.
                  </p>
                  <p>
                    Youth and interested candidate age groups are imparted skill training effectively according to changing modern technology. On completing training and passing the MSBSDE final exam, students receive government trade certificates.
                  </p>
                  <p>
                    Trainees of these trade courses get NCVT apprenticeship approval (Apprentices Act 1961) and receive the <strong className="text-[#002760]">DGT NATIONAL APPRENTICESHIP CERTIFICATE NCVT</strong>.
                  </p>
                  <p>
                    Our 2-year course is officially recognized as equivalent to 12th standard by the government, enabling students to pursue higher degree/diploma education. Thousands of our alumni are successfully working in government, semi-government, and industrial sectors or running their own successful businesses.
                  </p>
                  <p className="font-semibold text-[#002760]">
                    We welcome you to choose your preferred course and build a bright technical career. Best wishes from our institute..!
                  </p>

                  <div className="pt-6 border-t border-[#E2E8F0] flex flex-col items-end text-right">
                    <span className="font-bold text-[#002760] text-base">Principal</span>
                    <span className="text-xs font-bold text-[#1557C0]">Abhinav Vocational Training Centre (ATI / VTC / SDTC)</span>
                  </div>
                </>
              ) : (
                <>
                  <p className="font-bold text-[#002760] text-base sm:text-lg">प्रिय विद्यार्थी मित्रांनो,</p>
                  <p>
                    दहावी, बारावी, कमी मार्क्स टक्के याची चिंता न करता नोकरीच्या, स्वयंरोजगाराच्या, व्यवसायाच्या अनेक संधी स्थानिक, राष्ट्रीय, जागतिक पातळीवर औद्योगिक, शासकीय व निमशासकीय अशा विविध क्षेत्रात मोठ्या प्रमाणात संधी उपलब्ध असणाऱ्या ट्रेड कोर्सेसचे प्रशिक्षण <strong className="text-[#002760] bg-[#FFD21F]/30 px-1.5 py-0.5 rounded">अभिनव टेक्निकल व्यवसाय प्रशिक्षण केंद्र</strong> या आमच्या संस्थेत एक व दोन वर्ष कालावधीचे औद्योगिक व्यवसाय प्रशिक्षण देण्यात येते.
                  </p>
                  <p>
                    आमच्या संस्थेतील अभ्यासक्रमास महाराष्ट्र शासन कौशल्य विकास, रोजगार व उद्योजकता विभाग व्यवसाय शिक्षण व प्रशिक्षण संचालनालयाच्या (DVET) अंतर्गत कौशल्य विकास परीक्षा मंडळाचे <strong className="text-[#002760] underline underline-offset-4 decoration-[#FFD21F] stroke-2">इलेक्ट्रिशियन - २ वर्ष कालावधी, डिझेल मेकॅनिक - १ वर्ष कालावधी, कन्स्ट्रक्शन सुपरवायझर - १ वर्ष कालावधी</strong>, मान्यता प्राप्त व्यवसाय प्रशिक्षण ट्रेड आहे. या व्यवसाय अभ्यासक्रमास भारत सरकार रोजगार एवम् प्रशिक्षण महानिदेशालय (DGT) अंतर्गत राष्ट्रीय व्यावसायिक प्रशिक्षण परिषद (NCVT) अप्रेंटिसशिप लागू आहे.
                  </p>
                  <p>
                    युवक युवतींना व इच्छुक वयोगटातील उमेदवारांना विविध क्षेत्रांमध्ये बदलत्या आधुनिक तंत्रज्ञानानुरूप कौशल्याधारित प्रशिक्षणाद्वारे रोजगार, उत्पादनक्षम बनविण्याच्या दृष्टीने आमच्या संस्थेत कौशल्य विकासाचे प्रशिक्षण प्रभावीपणे दिले जाते. <strong className="text-[#002760]">इलेक्ट्रिशियन - २ वर्ष कालावधी, डिझेल मेकॅनिक - १ वर्ष कालावधी, कन्स्ट्रक्शन सुपरवायझर - १ वर्ष कालावधी</strong>, या व्यवसाय अभ्यासक्रमाचे प्रशिक्षण पूर्ण केल्यावर एमएसबीएसडीई मार्फत अंतिम परीक्षा उत्तीर्ण झाल्यानंतर प्रमाणपत्र प्रदान केले जाते.
                  </p>
                  <p>
                    या व्यवसाय अभ्यासक्रमाच्या प्रशिक्षणार्थींना अप्रेंटिसशिप मान्यता आहे. (शिकाऊ उमेदवारी योजना अधिनियम १९६१) अप्रेंटिसशिप पूर्ण करणाऱ्या शिकाऊ उमेदवारांची परीक्षा केंद्रशासनाच्या राष्ट्रीय व्यवसाय प्रशिक्षण परिषद (NCVT) कडून दरवर्षी घेण्यात येते व उत्तीर्ण प्रशिक्षणार्थींना <strong className="text-[#002760] bg-[#1557C0]/10 px-1.5 py-0.5 rounded">DGT NATIONAL APPRENTICESHIP CERTIFICATE NCVT</strong> मार्फत देण्यात येते.
                  </p>
                  <p>
                    सदर अभ्यासक्रमांना नोकरीकरिता शासनाने दिल्ली बोर्ड किंवा एमएसबीएसडीई बोर्ड या दोन्ही पैकी एक अभ्यासक्रम अर्हता धारक उमेदवारांना पात्र ठरवण्यात आल्यामुळे रोजगार व स्वयंरोजगाराच्या अनेक संधी निश्चित उपलब्ध आहे. या अभ्यासक्रमाला शासकीय आयटीआय मधील अभ्यासक्रमांशी नोकरीसाठी अल्टरनेटिव्ह क्वॉलिफिकेशन म्हणून शासन मान्यता आहे.
                  </p>
                  <p>
                    २ वर्ष कालावधीचा अभ्यासक्रम यशस्वी प्रशिक्षण पूर्ण झाल्यावर हा अभ्यासक्रम १२वी समकक्ष असल्याने उच्च शिक्षण घेऊ इच्छिणाऱ्या विद्यार्थ्यांना पदवी/पदविका अभ्यासक्रमास प्रवेश घेता येतो.
                  </p>
                  <p>
                    अशा प्रकारे आमच्या प्रशिक्षण संस्थेमधून उत्तीर्ण झालेल्या विद्यार्थ्यांना महाराष्ट्र शासन व केंद्र सरकार च्या शासकीय व निमशासकीय औद्योगिक विविध क्षेत्रात नोकरी व रोजगाराची संधी मिळालेली असून ते चांगल्या पदावर कार्यरत आहे. तसेच अनेक विद्यार्थ्यांनी आपले स्वतःचे उद्योग व्यवसाय सुरु केलेले आहे. आमच्या संस्थेतील कौशल्य आधारित व्यवसाय अभ्यासक्रमाचे प्रशिक्षण घेऊन यशस्वी विद्यार्थ्यांप्रमाणे आपणही आपल्या आवडीनुसार प्रवेश घेऊन आपले भविष्य उज्ज्वल करा त्यासाठी आमच्याकडून खूप खूप शुभेच्छा..!
                  </p>

                  <div className="pt-6 border-t border-[#E2E8F0] flex flex-col items-end text-right">
                    <span className="font-bold text-[#002760] text-base">प्राचार्य</span>
                    <span className="text-xs font-bold text-[#1557C0]">अभिनव व्यवसाय प्रशिक्षण केंद्र (एटीआय / एव्हटीसी / एसडीटीसी)</span>
                  </div>
                </>
              )}
            </div>

          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* POSITION 3: Our Mission & Our Vision                          */}
        {/* ------------------------------------------------------------- */}
        <section id="our-mission-vision-section" className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#002760]/10 flex flex-col lg:flex-row">
          
          {/* LEFT PANEL: Our Vision (36% width, Dark Navy background) */}
          <div className="w-full lg:w-[36%] bg-[#172337] p-7 sm:p-10 md:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#002760]/20">
            <h2 className="font-['Manrope','Yantramanav',sans-serif] text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F4A100] mb-4 sm:mb-6 tracking-tight leading-tight">
              {language === 'en' ? 'Our Vision' : 'आमचा दृष्टिकोन (Our Vision)'}
            </h2>
            <p className="text-white text-sm sm:text-base md:text-[16px] leading-relaxed font-['Work_Sans',sans-serif] font-medium text-white/95">
              {language === 'en'
                ? 'To become a trusted centre for practical technical and vocational education, empowering students with the skills, confidence and knowledge needed to build successful careers and contribute to a skilled workforce.'
                : 'विद्यार्थ्यांना व्यावहारिक ज्ञान, आत्मविश्वास आणि कौशल्ये देऊन यशस्वी करिअर घडवण्यासाठी आणि कुशल मनुष्यबळ निर्माण करण्यासाठी तांत्रिक व व्यावसायिक शिक्षणाचे एक विश्वासार्ह केंद्र बनणे.'}
            </p>
          </div>

          {/* RIGHT PANEL: Our Mission (64% width, Warm Light Yellow background) */}
          <div className="w-full lg:w-[64%] bg-[#F4A100] p-7 sm:p-10 md:p-12 flex flex-col justify-center text-[#0F1D33]">
            <h2 className="font-['Manrope','Yantramanav',sans-serif] text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight leading-tight drop-shadow-xs">
              {language === 'en' ? 'Our Mission' : 'आमचे ध्येय (Our Mission)'}
            </h2>
            <ul className="list-disc list-outside pl-5 space-y-3 sm:space-y-3.5 text-xs sm:text-[14.5px] md:text-[15px] font-['Work_Sans',sans-serif] font-semibold text-[#0F1D33] leading-relaxed marker:text-[#0F1D33]">
              <li>
                {language === 'en'
                  ? 'Provide practical, hands-on technical training aligned with real-world industry requirements.'
                  : 'प्रत्यक्ष उद्योग जगताच्या गरजेनुसार प्रॅक्टिकल आणि हँड्स-ऑन तांत्रिक प्रशिक्षण देणे.'}
              </li>
              <li>
                {language === 'en'
                  ? 'Develop job-ready skills through experienced guidance, modern learning methods and practical exposure.'
                  : 'अनुभवी मार्गदर्शन, आधुनिक शिक्षण पद्धती आणि प्रत्यक्ष सरावाद्वारे रोजगाराभिमुख कौशल्यांचा विकास करणे.'}
              </li>
              <li>
                {language === 'en'
                  ? 'Provide accessible and career-focused vocational education for students and aspiring professionals.'
                  : 'विद्यार्थी व इच्छुक तरुणांसाठी सुलभ आणि करिअर-केंद्रित व्यावसायिक शिक्षण उपलब्ध करून देणे.'}
              </li>
              <li>
                {language === 'en'
                  ? 'Encourage continuous learning, discipline, confidence and professional development.'
                  : 'सातत्यपूर्ण शिक्षण, शिस्त, आत्मविश्वास आणि व्यावसायिक विकासास प्रोत्साहन देणे.'}
              </li>
              <li>
                {language === 'en'
                  ? 'Support students in building strong career pathways through skill development and career guidance.'
                  : 'कौशल्य विकास आणि करिअर समुपदेशनाद्वारे विद्यार्थ्यांना सक्षम करिअर घडवण्यास मदत करणे.'}
              </li>
              <li>
                {language === 'en'
                  ? 'Maintain a supportive, student-focused learning environment that prepares learners for real workplace challenges.'
                  : 'कामाच्या ठिकाणच्या खऱ्या आव्हानांसाठी विद्यार्थ्यांना तयार करणारे विद्यार्थी-केंद्रित शिक्षण वातावरण टिकवून ठेवणे.'}
              </li>
            </ul>
          </div>

        </section>

        {/* ------------------------------------------------------------- */}
        {/* POSITION 4: Image of Labs (Our Infrastructure & Labs Gallery) */}
        {/* ------------------------------------------------------------- */}
        <section id="our-labs-section" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-black uppercase text-[#1557C0] tracking-widest bg-[#1557C0]/10 px-3 py-1 rounded-full">
                {language === 'en' ? 'Visual Tour of Labs' : 'प्रयोगशाळा व कार्यशाळा छायाचित्रे'}
              </span>
              <h2 className="font-['Manrope','Yantramanav',sans-serif] text-xl sm:text-3xl md:text-4xl font-black text-[#002760] mt-2">
                {language === 'en' ? 'Our Infrastructure & Practical Labs' : 'आमच्या प्रयोगशाळा व लॅब्स'}
              </h2>
            </div>

            {/* Filter Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', labelEn: 'All Labs', labelMr: 'सर्व लॅब्स' },
                { id: 'workshops', labelEn: 'Technical Workshops', labelMr: 'वर्कशॉप्स' },
                { id: 'labs', labelEn: 'IT & Computer Labs', labelMr: 'संगणक लॅब' },
                { id: 'classrooms', labelEn: 'Classrooms', labelMr: 'क्लासरूम्स' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveGalleryTab(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    activeGalleryTab === tab.id
                      ? 'bg-[#002760] text-white shadow-xs'
                      : 'bg-white text-[#64748B] hover:bg-[#F1F5F9] border border-[#E2E8F0]'
                  }`}
                >
                  {language === 'en' ? tab.labelEn : tab.labelMr}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Lab Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInfrastructure.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#1557C0]/40"
              >
                {/* Lab Photo */}
                <div className="aspect-[4/3] w-full overflow-hidden relative bg-slate-100">
                  <img
                    src={item.img}
                    alt={language === 'en' ? item.titleEn : item.titleMr}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-[#002760]/85 backdrop-blur text-white text-[10px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">{item.icon}</span>
                    <span>{item.capacity}</span>
                  </div>
                </div>

                {/* Lab Details */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-['Manrope','Yantramanav',sans-serif] font-black text-base text-[#002760] mb-2 group-hover:text-[#1557C0] transition-colors">
                    {language === 'en' ? item.titleEn : item.titleMr}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed mb-4">
                    {language === 'en' ? item.featuresEn : item.featuresMr}
                  </p>

                  <div className="mt-auto pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-bold text-[#1557C0]">
                    <span>100% Practical Rig</span>
                    <span className="material-symbols-outlined text-sm">precision_manufacturing</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* Bottom Banner Finish Section                                  */}
        {/* ------------------------------------------------------------- */}
        <section className="bg-gradient-to-r from-[#002760] via-[#1557C0] to-[#002760] rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <h2 className="font-['Manrope','Yantramanav',sans-serif] text-2xl sm:text-4xl font-extrabold text-white">
              {language === 'en' ? 'Start Your Technical Career Journey Today!' : 'आजच आपल्या तांत्रिक प्रवासाला सुरुवात करा!'}
            </h2>
            <p className="text-xs sm:text-base text-white/90 leading-relaxed font-medium">
              {language === 'en'
                ? 'Join Abhinav Technical Institute and get 100% practical training, government certification, and placement guidance.'
                : 'अभिनव टेक्निकल इन्स्टिट्यूटमध्ये प्रवेश घ्या आणि १००% प्रात्यक्षिक प्रशिक्षण, शासनमान्य प्रमाणपत्र व प्लेसमेंट सहाय्य मिळवा.'}
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenEnquiry}
                className="bg-[#FFD21F] hover:bg-[#f0c20f] text-[#002760] font-black text-sm px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-all cursor-pointer"
              >
                {language === 'en' ? 'Enquire Now' : 'आत्ताच चौकशी करा'}
              </button>
              <button
                onClick={onNavigateHome}
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all cursor-pointer"
              >
                {language === 'en' ? 'Back to Home' : 'मुख्यपृष्ठावर परत जा'}
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
