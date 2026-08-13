export type Language = 'en' | 'mr';

export interface Translations {
  nav: {
    home: string;
    about: string;
    courses: string;
    whyUs: string;
    calculator: string;
    quiz: string;
    placements: string;
    verify: string;
    gallery: string;
    contact: string;
    admin: string;
    callNow: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    sub: string;
    ctaApply: string;
    ctaWhatsapp: string;
    ctaVerify: string;
    statStudents: string;
    statYears: string;
    statPlacement: string;
    statGovt: string;
  };
  services: {
    tag: string;
    heading: string;
    sub: string;
    admissionsOpen: string;
    admissionsClosed: string;
    syllabusBtn: string;
    whatsappBtn: string;
    applyForm: string;
  };
  calculator: {
    tag: string;
    heading: string;
    sub: string;
    selectCourse: string;
    paymentPlan: string;
    lumpSum: string;
    installments: string;
    totalFee: string;
    monthlyEmi: string;
    savings: string;
    whatsappQuote: string;
  };
  quiz: {
    tag: string;
    heading: string;
    sub: string;
    startBtn: string;
    question: string;
    nextBtn: string;
    submitBtn: string;
    resultTitle: string;
    scoreText: string;
    whatsappResult: string;
    restartBtn: string;
  };
  placements: {
    tag: string;
    heading: string;
    sub: string;
    placedAt: string;
    role: string;
    package: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      courses: 'Courses',
      whyUs: 'Why Us',
      calculator: 'Fee Calculator',
      quiz: 'Skill Quiz',
      placements: 'Placements',
      verify: 'Verify Certificate',
      gallery: 'Gallery',
      contact: 'Contact',
      admin: 'Admin Panel',
      callNow: 'Call Now',
    },
    hero: {
      badge: 'Govt. Approved Vocational Training Institute • Jalgaon',
      title1: 'Master Practical Technical Skills &',
      title2: 'Build a High-Demand Career',
      sub: 'Certified Electrician Trade, Online Computer IT Programs, and Industrial Technical Training with 100% practical lab experience & placement support.',
      ctaApply: 'Explore Courses & Apply',
      ctaWhatsapp: 'Inquire on WhatsApp',
      ctaVerify: 'Verify Certificate',
      statStudents: '1,500+ Trained',
      statYears: '15+ Years Trust',
      statPlacement: '100% Practical',
      statGovt: 'Govt. Regd.',
    },
    services: {
      tag: 'Our Technical Offerings',
      heading: 'Comprehensive Training & Certified Trades',
      sub: 'Abhinav Technical Institute offers structured academic training, specialized trades, and institutional services to power careers.',
      admissionsOpen: 'Admissions Open',
      admissionsClosed: 'Full / Closed',
      syllabusBtn: 'Syllabus PDF',
      whatsappBtn: 'Inquire on WhatsApp',
      applyForm: 'Fill Admission Form →',
    },
    calculator: {
      tag: 'Transparent Pricing',
      heading: 'Course Fee & EMI Calculator',
      sub: 'Calculate your exact tuition fee, installment plans, and special one-time payment discounts.',
      selectCourse: 'Select Your Preferred Trade / Course',
      paymentPlan: 'Choose Payment Option',
      lumpSum: 'One-Time Lump Sum (Save 10%)',
      installments: 'Easy Monthly Installments (EMI)',
      totalFee: 'Net Course Fee',
      monthlyEmi: 'Monthly Installment',
      savings: 'Instant Savings with One-Time Pay',
      whatsappQuote: 'Get Official Fee Quote on WhatsApp',
    },
    quiz: {
      tag: 'Interactive Career Guidance',
      heading: 'Trade Aptitude & Skill Assessment Quiz',
      sub: 'Answer 6 quick questions to discover your strongest technical skills and the best matching course.',
      startBtn: 'Start 2-Minute Skill Quiz',
      question: 'Question',
      nextBtn: 'Next Question',
      submitBtn: 'See My Recommended Course',
      resultTitle: 'Assessment Result',
      scoreText: 'Your Technical Aptitude Score:',
      whatsappResult: 'Claim Admission Guidance on WhatsApp',
      restartBtn: 'Retake Quiz',
    },
    placements: {
      tag: 'Proven Career Outcomes',
      heading: 'Alumni Success & Industry Placements',
      sub: 'Our graduates work in reputed electrical companies, Jalgaon MIDC industries, government contractors, and modern IT offices.',
      placedAt: 'Company / Organization',
      role: 'Designation',
      package: 'Starting Range',
    },
  },
  mr: {
    nav: {
      home: 'मुख्यपृष्ठ',
      about: 'आमच्याबद्दल',
      courses: 'कोर्सेस',
      whyUs: 'वैशिष्ट्ये',
      calculator: 'फी कॅल्क्युलेटर',
      quiz: 'कौशल्य चाचणी',
      placements: 'प्लेसमेंट',
      verify: 'प्रमाणपत्र पडताळणी',
      gallery: 'गॅलरी',
      contact: 'संपर्क',
      admin: 'ॲडमिन पॅनेल',
      callNow: 'कॉल करा',
    },
    hero: {
      badge: 'शासकीय मान्यताप्राप्त औद्योगिक प्रशिक्षण संस्था • जळगाव',
      title1: 'प्रात्यक्षिक तांत्रिक कौशल्ये शिका आणि',
      title2: 'उज्ज्वल करिअरची सुरुवात करा',
      sub: 'प्रमाणित इलेक्ट्रिशियन ट्रेड, संगणक आयटी कोर्सेस आणि व्यावसायिक तांत्रिक प्रशिक्षण १००% प्रत्यक्ष प्रात्यक्षिक आणि प्लेसमेंट सहाय्यासह.',
      ctaApply: 'कोर्सेस पहा आणि प्रवेश घ्या',
      ctaWhatsapp: 'व्हॉट्सॲपवर चौकशी करा',
      ctaVerify: 'प्रमाणपत्र तपासा',
      statStudents: '१५००+ विद्यार्थी प्रशिक्षित',
      statYears: '१५+ वर्षांचा विश्वास',
      statPlacement: '१००% प्रात्यक्षिक',
      statGovt: 'शासनमान्य संस्था',
    },
    services: {
      tag: 'आमचे तांत्रिक कोर्सेस',
      heading: 'सर्वसमावेशक प्रशिक्षण आणि प्रमाणित ट्रेड्स',
      sub: 'अभिनव टेक्निकल इन्स्टिट्यूट विद्यार्थ्यांच्या उज्ज्वल भवितव्यासाठी दर्जेदार औद्योगिक व तांत्रिक कोर्सेस उपलब्ध करून देते.',
      admissionsOpen: 'प्रवेश सुरू आहेत',
      admissionsClosed: 'प्रवेश पूर्ण / बंद',
      syllabusBtn: 'अभ्यासक्रम PDF',
      whatsappBtn: 'व्हॉट्सॲपवर चौकशी करा',
      applyForm: 'प्रवेश अर्ज भरा →',
    },
    calculator: {
      tag: 'पारदर्शक फी रचना',
      heading: 'कोर्स फी आणि सुलभ हप्ता कॅल्क्युलेटर',
      sub: 'तुमची एकूण कोर्स फी, मासिक हप्ते आणि एकरकमी भरल्यास मिळणारी सवलत त्वरित तपासा.',
      selectCourse: 'तुमचा इच्छित कोर्स निवडा',
      paymentPlan: 'फी भरण्याचा पर्याय निवडा',
      lumpSum: 'एकरकमी भरा (१०% तात्काळ सवलत)',
      installments: 'सुलभ मासिक हप्ते (EMI)',
      totalFee: 'एकूण कोर्स फी',
      monthlyEmi: 'दरमहा हप्ता',
      savings: 'एकरकमी भरल्यास होणारी बचत',
      whatsappQuote: 'व्हॉट्सॲपवर अधिकृत फी कोट मिळवा',
    },
    quiz: {
      tag: 'करिअर मार्गदर्शन',
      heading: 'तांत्रिक कौशल्य आणि योग्यता चाचणी',
      sub: 'केवळ ६ सोप्या प्रश्नांची उत्तरे द्या आणि तुमच्यासाठी सर्वात योग्य कोर्स कोणता ते जाणून घ्या.',
      startBtn: '२ मिनिटांची चाचणी सुरू करा',
      question: 'प्रश्न',
      nextBtn: 'पुढील प्रश्न',
      submitBtn: 'माझा योग्य कोर्स पहा',
      resultTitle: 'चाचणी निकाल',
      scoreText: 'तुमचा तांत्रिक कल स्कोअर:',
      whatsappResult: 'व्हॉट्सॲपवर प्रवेश सल्ला मिळवा',
      restartBtn: 'पुन्हा चाचणी द्या',
    },
    placements: {
      tag: 'यशस्वी विद्यार्थी',
      heading: 'माजी विद्यार्थी यशोगाथा आणि औद्योगिक प्लेसमेंट',
      sub: 'आमचे विद्यार्थी नामांकित कंपन्या, जळगाव एमआयडीसी, महावितरण कंत्राटदार आणि आयटी कार्यालयांमध्ये कार्यरत आहेत.',
      placedAt: 'कंपनी / संस्था',
      role: 'पद / पदनाम',
      package: 'सुरुवातीचे मानधन',
    },
  },
};
