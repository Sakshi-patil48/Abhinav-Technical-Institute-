import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          
          {/* Column 1: Branding & Intro */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://image1.jdomni.in/defaultogimages/v2/A/T/AT.png"
                alt="Abhinav Technical Institute Logo"
                className="h-10 w-10 object-contain rounded-lg bg-white p-0.5"
              />
              <span className="text-lg font-bold font-serif tracking-tight">
                Abhinav Technical Institute
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Dedicated to delivering government-approved industrial training, electrician courses, and digital skill certifications to cater to the nation's rising technical workforce needs.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-sm tracking-wider uppercase text-orangeAccent">Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Us</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-sm tracking-wider uppercase text-orangeAccent">Top Programs</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Electrician Trade Training</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Technical Institutes Trade</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Online Computer Training</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Vocational Training Centres</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Technical Installation Setup</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Coordinate Summary */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-sm tracking-wider uppercase text-orangeAccent">Contacts</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p>Mansingh Market, Near Z P Road, Navi Peth Jalgaon, Maharashtra 425001</p>
              <p>
                Mobile: <a href="tel:+919423488174" className="hover:text-white font-semibold text-slate-300">+91 94234 88174</a>
              </p>
              <p>
                Email: <a href="mailto:abhinav.prp@gmail.com" className="hover:text-white text-slate-300">abhinav.prp@gmail.com</a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Abhinav Technical Institute of Industrial Training. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <span>Powered by Client Lead Engine</span>
            <button
              onClick={handleScrollTop}
              className="p-2 bg-slate-800 hover:bg-orangeAccent text-slate-400 hover:text-white rounded-lg transition-colors shadow"
              title="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
