import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ko' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (koText: string, enText: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    // Check saved preference or navigator language
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('app_lang');
      if (saved === 'ko' || saved === 'en') return saved;
      const userLang = navigator.language || (navigator as any).userLanguage || '';
      return userLang.toLowerCase().startsWith('ko') ? 'ko' : 'en';
    }
    return 'ko';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('app_lang', newLang);
    }
  };

  const toggleLang = () => {
    setLang(lang === 'ko' ? 'en' : 'ko');
  };

  const t = (koText: string, enText: string): string => {
    return lang === 'en' ? enText : koText;
  };

  useEffect(() => {
    // Update Document Title based on current language
    const fullTitle = lang === 'en'
      ? 'Easy AI Guide (ChatGPT, Google Gemini, Claude, Perplexity, Microsoft Copilot)'
      : '알기쉽게 배우는 AI(ChatGPT, Google Gemini, Claude, Perplexity, Microsoft Copilot)';
    
    document.title = fullTitle;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
