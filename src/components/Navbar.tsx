import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Megaphone, Globe } from 'lucide-react';
import { useLang } from '../contexts/LangContext';

interface NavbarProps {
  onAdminClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAdminClick }) => {
  const { lang, t, toggleLang } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const loadNotice = () => {
      const saved = localStorage.getItem('abhinav_notice') ||
        'Welcome to Abhinav Technical Institute! Admissions are now open for the new academic batch. Contact us for details.';
      setNotice(saved);
    };
    loadNotice();
    window.addEventListener('storage', loadNotice);
    return () => window.removeEventListener('storage', loadNotice);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.courses, href: '#services' },
    { name: t.nav.calculator, href: '#fee-calculator' },
    { name: t.nav.quiz, href: '#skill-quiz' },
    { name: t.nav.placements, href: '#placements' },
    { name: t.nav.verify, href: '#verify' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-sm border-b border-orange-100'
      }`}
    >
      {/* Announcement Ticker */}
      {notice && (
        <div className="bg-slate-950 text-white py-2 overflow-hidden whitespace-nowrap border-b border-orange-500/20 flex items-center shrink-0">
          <div className="animate-marquee whitespace-nowrap inline-flex items-center text-[11px] font-medium tracking-wide">
            <span className="bg-orangeAccent text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider mr-4 shadow-sm inline-flex items-center shrink-0">
              <Megaphone className="h-2.5 w-2.5 mr-1" />
              Notice Board
            </span>
            <span>{notice}</span>
          </div>
        </div>
      )}

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? 'py-1' : 'py-3'}`}>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="https://image1.jdomni.in/defaultogimages/v2/A/T/AT.png"
              alt="Abhinav Technical Institute Logo"
              className="h-12 w-12 object-contain rounded-lg"
            />
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 block font-serif">
                Abhinav Technical
              </span>
              <span className="text-xs text-orangeAccent font-semibold tracking-wider uppercase block -mt-1">
                Institute & Skill Dev
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-5 xl:space-x-6">
            {navLinks.slice(0, 6).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-orangeAccent font-medium text-xs xl:text-sm transition-colors duration-200 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onAdminClick}
              className="text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-orangeAccent transition-colors duration-200"
            >
              {t.nav.admin}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-700 transition-all"
              title="Toggle Language / भाषा बदला"
            >
              <Globe className="h-3.5 w-3.5 text-orange-500" />
              {lang === 'en' ? 'मराठी' : 'English'}
            </button>

            <a
              href="tel:+919423488174"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full text-sm font-semibold text-white bg-orangeAccent hover:bg-orangeAccent-dark shadow-sm hover:shadow transition-all duration-200"
            >
              <Phone className="h-4 w-4 mr-2" />
              {t.nav.callNow}
            </a>
          </div>

          {/* Mobile: Lang toggle + menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLang}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-xs font-bold text-slate-700"
            >
              <Globe className="h-3 w-3 text-orange-500" />
              {lang === 'en' ? 'मराठी' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-orangeAccent hover:bg-slate-50 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-1 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-orangeAccent hover:bg-orange-50 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => { setIsOpen(false); onAdminClick(); }}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-500 hover:text-orangeAccent hover:bg-orange-50 transition-colors"
          >
            {t.nav.admin}
          </button>
          <div className="pt-4 flex flex-col space-y-2 px-3">
            <a
              href="tel:+919423488174"
              className="inline-flex items-center justify-center px-4 py-3 rounded-xl text-base font-semibold text-white bg-orangeAccent hover:bg-orangeAccent-dark shadow-sm"
            >
              <Phone className="h-5 w-5 mr-2" />
              {t.nav.callNow}
            </a>
            <a
              href="mailto:abhinav.prp@gmail.com"
              className="inline-flex items-center justify-center px-4 py-3 rounded-xl border border-slate-200 text-base font-medium text-slate-700 bg-white hover:bg-slate-50"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
