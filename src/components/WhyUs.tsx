import React from 'react';
import { Users, Sparkles, IndianRupee, Landmark } from 'lucide-react';

interface FeatureCard {
  title: string;
  desc: string;
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
}

const WhyUs: React.FC = () => {
  const features: FeatureCard[] = [
    {
      title: 'Exceptional Staff',
      desc: 'Learn directly from certified trainers and highly experienced faculty who are dedicated to mentoring you step-by-step.',
      icon: <Users className="h-6 w-6" />,
      bgColor: 'bg-orange-50',
      iconColor: 'text-orangeAccent'
    },
    {
      title: 'Premium Quality',
      desc: 'Our labs and equipment reflect real-world workplaces, giving you high-quality practical knowledge.',
      icon: <Sparkles className="h-6 w-6" />,
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      title: 'Affordable Pricing',
      desc: 'High-quality technical training designed to fit your budget, ensuring skill-development is within reach for everyone.',
      icon: <IndianRupee className="h-6 w-6" />,
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      title: 'High Industry Standards',
      desc: 'Our curriculum is structured around current Indian industrial trades (NCVT standard guidelines) for best placement matches.',
      icon: <Landmark className="h-6 w-6" />,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Header left */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <span className="text-sm font-semibold uppercase tracking-widest text-orangeAccent">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-serif leading-tight">
              Setting the Benchmark in Technical Instruction
            </h2>
            <div className="h-1 w-12 bg-orangeAccent mx-auto lg:mx-0 rounded-full" />
            <p className="text-slate-600 text-base leading-relaxed">
              We stand apart through our commitment to practical application, certified curriculums, and skilled personnel mentoring. Our goal is to transform student dedication into direct industrial readiness.
            </p>
            <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 flex items-start space-x-3 text-left">
              <span className="text-orangeAccent font-bold text-2xl leading-none">10+</span>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Years of Trust</h4>
                <p className="text-xs text-slate-500 mt-1">Providing vocational education and trades training to students across Jalgaon region.</p>
              </div>
            </div>
          </div>

          {/* Cards grid right */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between hover-lift"
              >
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${feat.bgColor} ${feat.iconColor} mb-6`}>
                  {feat.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-900 text-lg leading-tight">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyUs;
