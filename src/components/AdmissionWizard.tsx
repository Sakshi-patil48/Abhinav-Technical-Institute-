import React, { useState, useEffect } from 'react';
import { CheckCircle, GraduationCap, ArrowRight, RefreshCw, Zap, Laptop, Wrench } from 'lucide-react';

interface CourseRecommendation {
  name: string;
  duration: string;
  eligibility: string;
  desc: string;
  type: 'Technical' | 'Computer' | 'Vocational';
  icon: React.ReactNode;
}

const AdmissionWizard: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [qualification, setQualification] = useState<string>('');
  const [interest, setInterest] = useState<string>('');
  const [recommendations, setRecommendations] = useState<CourseRecommendation[]>([]);
  const [admissions, setAdmissions] = useState<Record<string, boolean>>({});

  // Sync admissions status
  useEffect(() => {
    const loadAdmissions = () => {
      const saved = JSON.parse(localStorage.getItem('abhinav_admissions') || '{}');
      setAdmissions(saved);
    };

    loadAdmissions();
    window.addEventListener('storage', loadAdmissions);
    return () => window.removeEventListener('storage', loadAdmissions);
  }, []);

  const allCourses: CourseRecommendation[] = [
    {
      name: 'Electrician Trade Training',
      duration: '2 Years (NCVT aligned)',
      eligibility: '10th Pass (SSC)',
      desc: 'Master commercial wiring, electrical machinery, domestic circuits, safety protocols, and testing.',
      type: 'Technical',
      icon: <Zap className="h-6 w-6 text-orangeAccent" />
    },
    {
      name: 'Technical Institutes Trade',
      duration: '1 Year',
      eligibility: '10th Pass (SSC)',
      desc: 'Comprehensive electrical and electronic trade mechanics course for industrial setups.',
      type: 'Technical',
      icon: <Zap className="h-6 w-6 text-orangeAccent" />
    },
    {
      name: 'Online Computer Training',
      duration: '3 to 6 Months',
      eligibility: '8th Pass / 10th Pass',
      desc: 'Acquire office automation skills, typing, database inputs, and basic programming.',
      type: 'Computer',
      icon: <Laptop className="h-6 w-6 text-blue-500" />
    },
    {
      name: 'Vocational Training Centres',
      duration: '6 Months to 1 Year',
      eligibility: '8th Pass or above',
      desc: 'Basic vocational skills training covering home electronics assembly, plumbing, and mechanical repairs.',
      type: 'Vocational',
      icon: <Wrench className="h-6 w-6 text-emerald-500" />
    },
    {
      name: 'Colleges / Higher Education',
      duration: 'Full-time Degree alignment',
      eligibility: '12th Pass (HSC)',
      desc: 'Professional engineering assistant and diploma pathways under academic college guidance.',
      type: 'Vocational',
      icon: <GraduationCap className="h-6 w-6 text-purple-500" />
    }
  ];

  const handleNextStep = () => {
    if (step === 1 && qualification) {
      setStep(2);
    } else if (step === 2 && interest) {
      calculateRecommendations();
      setStep(3);
    }
  };

  const calculateRecommendations = () => {
    let filtered = allCourses;

    // Filter by qualification
    if (qualification === '8th Pass') {
      filtered = filtered.filter(c => c.eligibility.includes('8th Pass'));
    } else if (qualification === '10th Pass') {
      filtered = filtered.filter(c => c.eligibility.includes('10th Pass') || c.eligibility.includes('8th Pass'));
    }

    // Filter by interest
    if (interest === 'technical') {
      filtered = filtered.filter(c => c.type === 'Technical');
    } else if (interest === 'computer') {
      filtered = filtered.filter(c => c.type === 'Computer');
    } else if (interest === 'vocational') {
      filtered = filtered.filter(c => c.type === 'Vocational' || c.type === 'Technical');
    }

    // If empty fallback
    if (filtered.length === 0) {
      filtered = allCourses.filter(c => c.eligibility.includes(qualification) || c.eligibility.includes('8th Pass'));
    }

    setRecommendations(filtered);
  };

  const handleReset = () => {
    setQualification('');
    setInterest('');
    setRecommendations([]);
    setStep(1);
  };

  const handleApply = (courseName: string) => {
    // Navigate and pre-fill form in Contact.tsx
    window.location.hash = `#contact?subject=${encodeURIComponent(courseName)}`;
    // Scroll smoothly to contact
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="advisor" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-orangeAccent">Admission Advisor</span>
          <h2 className="text-3xl font-bold text-slate-900 font-serif">
            Find Your Ideal Course
          </h2>
          <div className="h-1 w-12 bg-orangeAccent mx-auto rounded-full" />
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            Not sure which trade matches your qualifications and interests? Try our interactive advisor to get instant recommendations.
          </p>
        </div>

        {/* Wizard Card */}
        <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
          
          {/* Progress Indicators */}
          <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Step {step} of 3
            </span>
            <div className="flex space-x-2">
              <div className={`h-2 w-8 rounded-full transition-colors ${step >= 1 ? 'bg-orangeAccent' : 'bg-slate-100'}`} />
              <div className={`h-2 w-8 rounded-full transition-colors ${step >= 2 ? 'bg-orangeAccent' : 'bg-slate-100'}`} />
              <div className={`h-2 w-8 rounded-full transition-colors ${step >= 3 ? 'bg-orangeAccent' : 'bg-slate-100'}`} />
            </div>
          </div>

          {/* STEP 1: Select Qualification */}
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="font-bold text-slate-900 text-lg font-serif">What is your current education level?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['8th Pass', '10th Pass (SSC)', '12th Pass (HSC)', 'College Graduate or higher'].map((q) => (
                  <button
                    key={q}
                    onClick={() => setQualification(q)}
                    className={`p-5 rounded-2xl border text-left font-semibold text-sm transition-all flex items-center justify-between ${
                      qualification === q
                        ? 'border-orangeAccent bg-orange-50/40 text-orangeAccent-dark ring-1 ring-orangeAccent'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                    }`}
                  >
                    <span>{q}</span>
                    <CheckCircle className={`h-5 w-5 shrink-0 ${qualification === q ? 'text-orangeAccent opacity-100' : 'opacity-0'}`} />
                  </button>
                ))}
              </div>
              <div className="flex justify-end pt-4">
                <button
                  disabled={!qualification}
                  onClick={handleNextStep}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-semibold rounded-xl text-white bg-orangeAccent hover:bg-orangeAccent-dark disabled:bg-slate-200 disabled:text-slate-400 shadow-sm transition-all"
                >
                  Next Step
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Select Interest */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="font-bold text-slate-900 text-lg font-serif">Select your primary area of interest:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'technical', title: 'Electrical & Technical Trades', desc: 'Wiring, testing, and power setups.', icon: <Zap className="h-6 w-6" /> },
                  { id: 'computer', title: 'Computers & IT Skills', desc: 'Software tools, typing, and digital skills.', icon: <Laptop className="h-6 w-6" /> },
                  { id: 'vocational', title: 'Vocational & Installation', desc: 'Plumbing, appliances, repairs, AMC.', icon: <Wrench className="h-6 w-6" /> }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setInterest(item.id)}
                    className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between h-40 ${
                      interest === item.id
                        ? 'border-orangeAccent bg-orange-50/40 text-orangeAccent-dark ring-1 ring-orangeAccent'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${interest === item.id ? 'bg-orange-100 text-orangeAccent' : 'bg-slate-50 text-slate-500'}`}>
                      {item.icon}
                    </div>
                    <div className="mt-4">
                      <span className="block font-bold text-sm text-slate-900 leading-tight">{item.title}</span>
                      <span className="block text-[11px] text-slate-500 mt-1 leading-normal font-normal">{item.desc}</span>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="flex justify-between items-center pt-4">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-3 border border-slate-200 text-sm font-semibold rounded-xl text-slate-700 hover:bg-slate-50"
                >
                  Back
                </button>
                <button
                  disabled={!interest}
                  onClick={handleNextStep}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-semibold rounded-xl text-white bg-orangeAccent hover:bg-orangeAccent-dark disabled:bg-slate-200 disabled:text-slate-400 shadow-sm transition-all"
                >
                  Show Recommendations
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Show Recommendations */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg font-serif">Recommended Courses for You</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Based on: {qualification} • {interest.toUpperCase()}</p>
                </div>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-orangeAccent transition-colors"
                >
                  <RefreshCw className="h-3 w-3 mr-1" />
                  Restart Finder
                </button>
              </div>

              <div className="space-y-4">
                {recommendations.map((rec, index) => {
                  // check if admissions are open (default to true if key not in obj)
                  const isOpen = admissions[rec.name] !== false;
                  
                  return (
                    <div
                      key={index}
                      className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover-lift"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-white border border-slate-200 rounded-xl shrink-0">
                          {rec.icon}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="font-bold text-slate-900 text-base">{rec.name}</h4>
                            <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0 ${
                              isOpen ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {isOpen ? 'Admissions Open' : 'Full / Closed'}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                            {rec.desc}
                          </p>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[11px] font-medium text-slate-400">
                            <span>Duration: <strong className="text-slate-700">{rec.duration}</strong></span>
                            <span>Eligibility: <strong className="text-slate-700">{rec.eligibility}</strong></span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => handleApply(rec.name)}
                        className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-xs font-semibold rounded-xl text-white bg-orangeAccent hover:bg-orangeAccent-dark shrink-0 shadow-sm"
                      >
                        Apply / Enquire
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-center pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 border border-slate-200 text-sm font-semibold rounded-xl text-slate-700 hover:bg-slate-50"
                >
                  Start Over
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default AdmissionWizard;
export type { CourseRecommendation };
