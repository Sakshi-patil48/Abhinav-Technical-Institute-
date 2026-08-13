import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { Language, Translations } from '../data/translations';
import { TRANSLATIONS } from '../data/translations';

interface LangContextType {
  lang: Language;
  t: Translations;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  t: TRANSLATIONS['en'],
  toggleLang: () => {},
});

export const LangProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem('abhinav_lang') as Language) || 'en';
  });

  const toggleLang = () => {
    setLang(prev => {
      const next: Language = prev === 'en' ? 'mr' : 'en';
      localStorage.setItem('abhinav_lang', next);
      return next;
    });
  };

  return (
    <LangContext.Provider value={{ lang, t: TRANSLATIONS[lang], toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
