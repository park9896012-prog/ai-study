import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Search, Mail, BookOpen, Layers, CheckSquare, MessageSquareCode, HelpCircle, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenPolicy: (policyType: 'about' | 'privacy' | 'terms' | 'contact') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenPolicy,
  searchQuery,
  setSearchQuery
}) => {
  const { lang, toggleLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'compare', label: t('AI 비교분석', 'AI Comparison'), icon: Layers },
    { id: 'guide', label: t('수준별 가이드', 'Level Guide'), icon: BookOpen },
    { id: 'practice', label: t('단계별 실습', 'Hands-on Practice'), icon: CheckSquare },
    { id: 'prompt', label: t('프롬프트 작성법', 'Prompt Engineering'), icon: MessageSquareCode },
    { id: 'quiz', label: t('나만의 AI 찾기', 'AI Finder Quiz'), icon: HelpCircle }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' : 'bg-white py-4 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-2.5 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight">
                  {t(
                    '알기쉽게 배우는 AI',
                    'Easy AI Guide'
                  )}
                </span>
                <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full border border-blue-200 hidden sm:inline-block">
                  {t('2026 최신판', '2026 Edition')}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden md:block">
                ChatGPT · Gemini · Claude · Perplexity · Copilot
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-2xl border border-slate-200/60">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-blue-600 shadow-sm border border-slate-200/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Search & Actions */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100/80 rounded-xl p-1 border border-slate-200/80 shadow-inner">
              <button
                onClick={() => lang !== 'ko' && toggleLang()}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${lang === 'ko' ? 'bg-white text-blue-600 shadow-sm border border-slate-200/50' : 'text-slate-500 hover:text-slate-700'}`}
              >
                한국어
              </button>
              <button
                onClick={() => lang !== 'en' && toggleLang()}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${lang === 'en' ? 'bg-white text-blue-600 shadow-sm border border-slate-200/50' : 'text-slate-500 hover:text-slate-700'}`}
              >
                English
              </button>
            </div>

            {/* Quick Search */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('AI 기능, 프롬프트 검색...', 'Search AI features, prompts...')}
                className="w-40 md:w-52 pl-9 pr-3 py-2 bg-slate-100 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 focus:bg-white transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Contact Modal Trigger Button */}
            <button
              onClick={() => onOpenPolicy('contact')}
              className="flex items-center gap-1.5 px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold rounded-xl border border-blue-200 transition-colors"
              title="ju9896012@gmail.com"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{t('문의하기', 'Contact')}</span>
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex sm:hidden items-center gap-2">
            {/* Mobile Language Switcher */}
            <div className="flex items-center bg-slate-100/80 rounded-xl p-1 border border-slate-200/80 shadow-inner">
              <button
                onClick={() => lang !== 'ko' && toggleLang()}
                className={`px-2 py-1 text-xs font-bold rounded-lg transition-all ${lang === 'ko' ? 'bg-white text-blue-600 shadow-sm border border-slate-200/50' : 'text-slate-500 hover:text-slate-700'}`}
              >
                KOR
              </button>
              <button
                onClick={() => lang !== 'en' && toggleLang()}
                className={`px-2 py-1 text-xs font-bold rounded-lg transition-all ${lang === 'en' ? 'bg-white text-blue-600 shadow-sm border border-slate-200/50' : 'text-slate-500 hover:text-slate-700'}`}
              >
                ENG
              </button>
            </div>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-xl bg-slate-100"
              aria-label={t('검색 창 열기', 'Open Search')}
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-xl bg-slate-100"
              aria-label={t('메뉴 열기', 'Open Menu')}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Search Bar Dropdown */}
        {searchOpen && (
          <div className="mt-3 sm:hidden pt-2 pb-1 border-t border-slate-100">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('AI 특징, 프롬프트, 실습 검색...', 'Search AI models, prompts...')}
                className="w-full pl-9 pr-3 py-2 bg-slate-100 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mt-3 sm:hidden pt-3 pb-4 border-t border-slate-200 flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-700 bg-slate-50 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  onOpenPolicy('contact');
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2.5 bg-blue-50 text-blue-700 text-xs font-semibold rounded-xl border border-blue-200"
              >
                <Mail className="w-4 h-4" />
                <span>{t('문의하기 (ju9896012@gmail.com)', 'Contact Us (ju9896012@gmail.com)')}</span>
              </button>
              
              <div className="flex items-center justify-around text-xs text-slate-500 pt-1">
                <button onClick={() => { onOpenPolicy('about'); setMobileMenuOpen(false); }} className="hover:underline">
                  {t('사이트 소개', 'About Us')}
                </button>
                <span>·</span>
                <button onClick={() => { onOpenPolicy('privacy'); setMobileMenuOpen(false); }} className="hover:underline">
                  {t('개인정보처리방침', 'Privacy Policy')}
                </button>
                <span>·</span>
                <button onClick={() => { onOpenPolicy('terms'); setMobileMenuOpen(false); }} className="hover:underline">
                  {t('이용약관', 'Terms of Service')}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
