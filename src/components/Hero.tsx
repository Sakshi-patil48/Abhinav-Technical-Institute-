import React from 'react';
import { ShieldCheck, BookOpen, Award, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-[#FFF5EE] via-[#FCF8F5] to-white overflow-hidden">
      {/* Visual background elements */}
      <div className="absolute top-0 right-0 -z-10 w-[50%] h-[100%] bg-gradient-to-bl from-orange-100/40 to-transparent rounded-bl-[100px] hidden lg:block" />
      <div className="absolute top-1/4 left-10 -z-10 w-24 h-24 bg-orange-200/20 rounded-full blur-xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-orange-100/60 rounded-full border border-orange-200">
              <ShieldCheck className="h-4 w-4 text-orangeAccent" />
              <span className="text-xs font-semibold text-orangeAccent-dark uppercase tracking-wider">
                Government Approved Technical Education
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Empowering Careers Through <br />
              <span className="text-orangeAccent bg-gradient-to-r from-orangeAccent to-amber-600 bg-clip-text text-transparent">
                Technical Expertise
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Join Jalgaon's leading institute for Industrial Training and Skill Development. 
              We offer government-recognized courses in electrical, vocational, and computer training 
              designed to transition you straight into the workforce.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl text-white bg-orangeAccent hover:bg-orangeAccent-dark shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                Get Admission Info
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-base font-semibold rounded-xl text-slate-700 bg-white hover:bg-slate-50 shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5"
              >
                Explore Courses
              </a>
            </div>

            {/* Micro stats banner */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-100 max-w-lg mx-auto lg:mx-0">
              <div>
                <span className="block text-2xl font-bold text-slate-900">100%</span>
                <span className="text-xs font-medium text-slate-500">Practical Labs</span>
              </div>
              <div className="border-x border-slate-100 px-4">
                <span className="block text-2xl font-bold text-slate-900">10+</span>
                <span className="text-xs font-medium text-slate-500">Industry Trades</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-slate-900">Govt.</span>
                <span className="text-xs font-medium text-slate-500">Certified</span>
              </div>
            </div>

          </div>

          {/* Hero Image & Feature Grid */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Feature Cards floating layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between hover-lift">
                  <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center text-orangeAccent mb-4">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Expert Curriculum</h3>
                    <p className="text-xs text-slate-500 leading-normal">Courses aligned with modern industrial demands and standard certifications.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between hover-lift">
                  <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 mb-4">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Trade Certification</h3>
                    <p className="text-xs text-slate-500 leading-normal">Official electrician and vocational certification validating your skills.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between hover-lift sm:col-span-2">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500 shrink-0">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">Skilled Development</h3>
                      <p className="text-sm text-slate-500 leading-normal">
                        Direct hands-on training under veteran professionals including Punjo Patil and specialized technical instructors.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Decorative graphic backdrop */}
              <div className="absolute -bottom-6 -left-6 -z-10 w-full h-full border-2 border-dashed border-orange-200 rounded-3xl hidden lg:block" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
