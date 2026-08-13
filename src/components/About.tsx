import React from 'react';
import { CheckCircle2, Star, ShieldAlert } from 'lucide-react';

const About: React.FC = () => {
  const points = [
    'Leading technical institute in Jalgaon, Maharashtra',
    'Comprehensive vocational training programs under expert guidance',
    'State-of-the-art laboratory for electrician practicals',
    'Industry-oriented skill development aligned with employment needs',
    'Affordable and highly accessible education format',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image & Showcase block */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video sm:aspect-square bg-slate-100">
              <img
                src="https://content.jdmagicbox.com/v2/comp/jalgaon/dc/9999px257.x257.100521174144.m3k2dc/catalogue/abhinav-technical-institute-of-industrial-training-institute-and-skill-development-education-navi-peth-jalgaon-jalgaon-colleges-8fdv0bc9ga.jpg"
                alt="Abhinav Technical Institute Classroom Showcase"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-orange-300">Est. Over a decade ago</p>
                <h4 className="text-lg font-bold font-serif">Providing High Quality Technical Education</h4>
              </div>
            </div>
            {/* Visual float badge */}
            <div className="absolute -top-6 -right-6 bg-orangeAccent text-white p-6 rounded-2xl shadow-lg hidden sm:block max-w-[180px] hover-lift">
              <div className="flex items-center space-x-1 mb-1">
                <Star className="h-5 w-5 fill-yellow-300 text-yellow-300" />
                <span className="font-bold text-lg">Top Rated</span>
              </div>
              <p className="text-xs text-orange-100">Educational Institute in Navi Peth, Jalgaon</p>
            </div>
          </div>

          {/* About text content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-sm font-semibold uppercase tracking-widest text-orangeAccent">About Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-serif leading-tight">
                Abhinav Technical Institute of Industrial Training & Skill Development
              </h2>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              We, Abhinav Technical Institute Of Industrial Training Institute and Skill Development Education, situated at Jalgaon, Maharashtra, are one of the leading firms in the country, set up to cater to the growing requirements of technical talent in all industrial sectors.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              We have strengthened the business and careers of our students through proactive program development, timely delivery of certificates, and superior training standards by reinforcing innovation, cost leadership, and premium quality instruction.
            </p>

            {/* Bullet points list */}
            <div className="space-y-3 pt-2">
              {points.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>

            {/* Leadership citation block */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start space-x-4 mt-6">
              <div className="bg-orange-100 p-3 rounded-xl text-orangeAccent shrink-0">
                <ShieldAlert className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Director's Message</h4>
                <p className="text-xs text-slate-500 mt-1 italic">
                  "Our mission is to make skill-based training accessible and highly industry-relevant, empowering youths of Jalgaon to acquire job-ready capabilities."
                </p>
                <span className="block text-xs font-semibold text-slate-800 mt-2">— Punjo Patil, Director</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
