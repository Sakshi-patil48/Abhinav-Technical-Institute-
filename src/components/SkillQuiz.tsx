import React, { useState } from 'react';
import { Brain, ChevronRight, RotateCcw, CheckCircle2, Zap, MessageCircle } from 'lucide-react';
import { useLang } from '../contexts/LangContext';

interface Question {
  q_en: string;
  q_mr: string;
  options: { label_en: string; label_mr: string; score: Record<string, number> }[];
}

const QUESTIONS: Question[] = [
  {
    q_en: 'How comfortable are you working with electrical wires, switches, and circuits?',
    q_mr: 'तुम्ही वायर, स्विच आणि सर्किटसोबत काम करताना किती सहज वाटते?',
    options: [
      { label_en: 'Very comfortable – I enjoy this', label_mr: 'खूप सहज – मला आवडते', score: { electrician: 3, wireman: 2 } },
      { label_en: 'Somewhat comfortable', label_mr: 'थोडे सहज', score: { electrician: 1, wireman: 1 } },
      { label_en: 'Not really my interest', label_mr: 'माझ्या आवडीचे नाही', score: { copa: 1, mscit: 1 } },
    ],
  },
  {
    q_en: 'Do you prefer working on a computer (typing, software, data)?',
    q_mr: 'तुम्ही संगणकावर काम करणे (टायपिंग, सॉफ्टवेअर, डेटा) पसंत करता का?',
    options: [
      { label_en: 'Yes, I love computers', label_mr: 'हो, मला संगणक खूप आवडतो', score: { copa: 3, mscit: 2, tally: 2, dtp: 2, webdesign: 2 } },
      { label_en: 'Somewhat, for basic tasks', label_mr: 'थोडे, मूलभूत कामांसाठी', score: { mscit: 2, tally: 1 } },
      { label_en: 'No, I prefer hands-on work', label_mr: 'नाही, मला प्रात्यक्षिक काम आवडते', score: { electrician: 2, wireman: 2, hardware: 1 } },
    ],
  },
  {
    q_en: 'Are you interested in managing accounts, GST billing, or finance?',
    q_mr: 'तुम्हाला हिशेब, GST बिलिंग किंवा वित्त व्यवस्थापनात रुची आहे का?',
    options: [
      { label_en: 'Yes, numbers and accounts interest me', label_mr: 'हो, आकडेमोड आणि हिशेब आवडतात', score: { tally: 3 } },
      { label_en: 'Maybe a little', label_mr: 'थोडी', score: { tally: 1, mscit: 1 } },
      { label_en: 'Not at all', label_mr: 'मुळीच नाही', score: { copa: 1, dtp: 1 } },
    ],
  },
  {
    q_en: 'Do you have interest in networking, fixing computers, or hardware repair?',
    q_mr: 'तुम्हाला नेटवर्किंग, संगणक दुरुस्ती किंवा हार्डवेअरमध्ये रुची आहे का?',
    options: [
      { label_en: 'Yes, this is my passion', label_mr: 'हो, हे माझे आवडते क्षेत्र आहे', score: { hardware: 3 } },
      { label_en: 'A bit, I like gadgets', label_mr: 'थोडी, गॅजेट्स आवडतात', score: { hardware: 1, copa: 1 } },
      { label_en: 'No, not interested', label_mr: 'नाही, रुची नाही', score: { electrician: 1, beautician: 1 } },
    ],
  },
  {
    q_en: 'Are you interested in fashion, styling, beauty, or art & design?',
    q_mr: 'तुम्हाला फॅशन, सौंदर्य, मेकअप किंवा कला व डिझाइनमध्ये रुची आहे का?',
    options: [
      { label_en: 'Yes, very much!', label_mr: 'हो, खूप!', score: { beautician: 3, fashion: 3, dtp: 1 } },
      { label_en: 'A little bit', label_mr: 'थोडी', score: { beautician: 1, fashion: 1, dtp: 1 } },
      { label_en: 'Not my thing', label_mr: 'माझ्या आवडीचे नाही', score: { electrician: 1, copa: 1 } },
    ],
  },
  {
    q_en: 'What is your highest educational qualification?',
    q_mr: 'तुमची सर्वात जास्त शैक्षणिक पात्रता काय आहे?',
    options: [
      { label_en: '8th / 10th Pass', label_mr: '8वी / 10वी उत्तीर्ण', score: { wireman: 2, mscit: 2, beautician: 2, fashion: 2 } },
      { label_en: '12th Pass (HSC)', label_mr: '12वी उत्तीर्ण', score: { electrician: 2, copa: 2, tally: 2, hardware: 2, dtp: 2 } },
      { label_en: 'Graduate or Higher', label_mr: 'पदवीधर किंवा उच्च', score: { copa: 2, tally: 3, webdesign: 3, hardware: 2 } },
    ],
  },
];

const COURSE_MAP: Record<string, { name: string; nameM: string; code: string; wa: string }> = {
  electrician:  { name: 'Electrician Trade (ITI)', nameM: 'इलेक्ट्रिशियन ट्रेड (ITI)', code: 'ELT', wa: 'Electrician Trade (ITI)' },
  wireman:      { name: 'Wireman Trade (ITI)', nameM: 'वायरमन ट्रेड (ITI)', code: 'WRM', wa: 'Wireman Trade (ITI)' },
  copa:         { name: 'COPA – Computer Operator & Programming', nameM: 'COPA – संगणक ऑपरेटर व प्रोग्रामिंग', code: 'COPA', wa: 'COPA' },
  mscit:        { name: 'MSCIT – MS Computer IT', nameM: 'MSCIT – एमएस संगणक आयटी', code: 'MSCIT', wa: 'MSCIT' },
  tally:        { name: 'Tally ERP 9 / Prime (GST)', nameM: 'टॅली ERP 9 / प्राईम (GST)', code: 'TALLY', wa: 'Tally ERP & GST' },
  hardware:     { name: 'Hardware & Networking Technician', nameM: 'हार्डवेअर व नेटवर्किंग टेक्निशियन', code: 'HNT', wa: 'Hardware & Networking' },
  beautician:   { name: 'Beautician & Cosmetology', nameM: 'ब्युटिशियन व कॉस्मेटोलॉजी', code: 'BTC', wa: 'Beautician & Cosmetology' },
  fashion:      { name: 'Fashion Design & Garment Making', nameM: 'फॅशन डिझाईन व गारमेंट मेकिंग', code: 'FDG', wa: 'Fashion Design & Garment Making' },
  dtp:          { name: 'DTP – Desktop Publishing', nameM: 'DTP – डेस्कटॉप पब्लिशिंग', code: 'DTP', wa: 'DTP (Desktop Publishing)' },
  webdesign:    { name: 'Web Design & Digital Marketing', nameM: 'वेब डिझाईन व डिजिटल मार्केटिंग', code: 'WDM', wa: 'Web Design & Digital Marketing' },
};

const SkillQuiz: React.FC = () => {
  const { lang, t } = useLang();
  const [step, setStep] = useState<'intro' | 'quiz' | 'result'>('intro');
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [selected, setSelected] = useState<number | null>(null);

  const handleOption = (optIdx: number) => {
    setSelected(optIdx);
  };

  const handleNext = () => {
    if (selected === null) return;
    const addScores = QUESTIONS[current].options[selected].score;
    const newScores = { ...scores };
    for (const k of Object.keys(addScores)) {
      newScores[k] = (newScores[k] || 0) + addScores[k];
    }
    setScores(newScores);
    setSelected(null);

    if (current + 1 >= QUESTIONS.length) {
      setStep('result');
    } else {
      setCurrent(c => c + 1);
    }
  };

  const restart = () => {
    setStep('intro');
    setCurrent(0);
    setScores({});
    setSelected(null);
  };

  const getBestCourse = () => {
    let best = '';
    let bestVal = -1;
    for (const [k, v] of Object.entries(scores)) {
      if (v > bestVal) { bestVal = v; best = k; }
    }
    return COURSE_MAP[best] || COURSE_MAP['copa'];
  };

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const maxPossible = QUESTIONS.length * 3;
  const percent = Math.round((totalScore / maxPossible) * 100);

  return (
    <section id="skill-quiz" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-orangeAccent bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-full mb-4">
            {t.quiz.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif tracking-tight">
            {t.quiz.heading}
          </h2>
          <p className="text-slate-500 mt-3 text-sm leading-relaxed">
            {t.quiz.sub}
          </p>
        </div>

        {/* INTRO STATE */}
        {step === 'intro' && (
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl border border-orange-200 p-8 text-center space-y-6">
            <div className="h-16 w-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto">
              <Brain className="h-8 w-8 text-orangeAccent" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-serif">{lang === 'en' ? '6 Quick Questions' : '६ सोपे प्रश्न'}</h3>
              <p className="text-sm text-slate-500 mt-2">
                {lang === 'en'
                  ? 'Answer 6 questions and instantly discover which Abhinav Technical Institute course perfectly matches your natural aptitude and career goals.'
                  : '६ प्रश्नांची उत्तरे द्या आणि तुमच्यासाठी सर्वात योग्य कोर्स कोणता आहे ते लगेच समजून घ्या.'}
              </p>
            </div>
            <div className="flex items-center justify-center gap-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-amber-500" /> {lang === 'en' ? '2 Minutes' : '२ मिनिटे'}</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> {lang === 'en' ? '100% Free' : 'पूर्णपणे मोफत'}</span>
              <span className="flex items-center gap-1.5"><Brain className="h-3.5 w-3.5 text-blue-500" /> {lang === 'en' ? 'AI-Powered' : 'AI-आधारित'}</span>
            </div>
            <button
              onClick={() => setStep('quiz')}
              className="w-full py-4 px-6 bg-orangeAccent hover:bg-orange-700 text-white font-bold text-sm rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md shadow-orange-500/20 hover:-translate-y-0.5"
            >
              <Brain className="h-4 w-4" />
              {t.quiz.startBtn}
            </button>
          </div>
        )}

        {/* QUIZ STATE */}
        {step === 'quiz' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            {/* Progress bar */}
            <div className="h-1.5 bg-slate-100">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500"
                style={{ width: `${((current) / QUESTIONS.length) * 100}%` }}
              />
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  {t.quiz.question} {current + 1} / {QUESTIONS.length}
                </span>
                <div className="flex gap-1">
                  {QUESTIONS.map((_, i) => (
                    <div key={i} className={`h-1.5 w-6 rounded-full transition-all ${i <= current ? 'bg-orange-500' : 'bg-slate-200'}`} />
                  ))}
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-6 leading-snug">
                {lang === 'en' ? QUESTIONS[current].q_en : QUESTIONS[current].q_mr}
              </h3>

              <div className="space-y-3">
                {QUESTIONS[current].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOption(i)}
                    className={`w-full text-left px-4 py-3.5 rounded-xl border-2 text-sm font-medium transition-all ${
                      selected === i
                        ? 'border-orange-500 bg-orange-50 text-orange-800'
                        : 'border-slate-200 text-slate-700 bg-white hover:border-orange-300 hover:bg-orange-50/30'
                    }`}
                  >
                    <span className="inline-flex items-center gap-3">
                      <span className={`h-5 w-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-all ${
                        selected === i ? 'border-orange-500 bg-orange-500' : 'border-slate-300'
                      }`}>
                        {selected === i && <span className="h-2 w-2 rounded-full bg-white block" />}
                      </span>
                      {lang === 'en' ? opt.label_en : opt.label_mr}
                    </span>
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={selected === null}
                className="mt-6 w-full py-3.5 px-6 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {current + 1 === QUESTIONS.length ? t.quiz.submitBtn : t.quiz.nextBtn}
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* RESULT STATE */}
        {step === 'result' && (() => {
          const best = getBestCourse();
          return (
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl border-2 border-emerald-200 p-7 text-center">
                <div className="h-14 w-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-serif">{t.quiz.resultTitle}</h3>
                <p className="text-xs text-slate-500 mt-1">{t.quiz.scoreText} <strong className="text-emerald-600">{percent}%</strong></p>

                <div className="mt-5 bg-white rounded-2xl border border-emerald-200 p-5 text-left">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                    {lang === 'en' ? 'Your Best Matching Course' : 'तुमचा सर्वात योग्य कोर्स'}
                  </div>
                  <div className="text-xl font-extrabold text-slate-900 font-serif">
                    {lang === 'en' ? best.name : best.nameM}
                  </div>
                  <div className="mt-2 inline-block bg-orange-50 text-orange-700 border border-orange-200 text-xs font-bold px-2.5 py-1 rounded-lg">
                    Course Code: {best.code}
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/919423488174?text=${encodeURIComponent(`Hello Abhinav Technical Institute, I just completed the skill assessment quiz and my recommended course is *${best.wa}*. Please help me with admission details, batch schedule, and fee structure.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full py-4 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm rounded-2xl items-center justify-center gap-3 transition-all shadow-md shadow-green-500/20 hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5" />
                {t.quiz.whatsappResult}
              </a>

              <button
                onClick={restart}
                className="flex w-full py-3 px-6 bg-white hover:bg-slate-50 text-slate-600 font-semibold text-sm rounded-2xl items-center justify-center gap-2 transition-all border border-slate-200"
              >
                <RotateCcw className="h-4 w-4" />
                {t.quiz.restartBtn}
              </button>
            </div>
          );
        })()}

      </div>
    </section>
  );
};

export default SkillQuiz;
