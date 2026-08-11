import React from 'react';
import { Sparkles, Mail, ShieldCheck, FileText, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenPolicy: (policyType: 'about' | 'privacy' | 'terms' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  const { t } = useLanguage();

  return (
    <footer id="policy" className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg text-white">
                {t('알기쉽게 배우는 AI', 'Easy AI Guide')}
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {t(
                'ChatGPT, Google Gemini, Claude, Perplexity, Microsoft Copilot의 특징 비교, 수준별 사용법, 실습 예제 및 효과적인 프롬프트 작성 법을 누구나 알기 쉽게 제공하는 인공지능 교육 웹 플랫폼입니다.',
                'An accessible AI educational platform offering feature comparisons, level-based usage guides, hands-on tutorials, and effective prompt engineering tips for ChatGPT, Gemini, Claude, Perplexity, and Copilot.'
              )}
            </p>

          </div>

          {/* Quick Menu Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t('주요 커리큘럼', 'Main Curriculum')}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#compare" className="hover:text-white transition-colors">{t('5대 대표 AI 비교분석', '5 AI Models Comparison')}</a></li>
              <li><a href="#guide" className="hover:text-white transition-colors">{t('초급·중급·고급 가이드', 'Level-based Guides')}</a></li>
              <li><a href="#practice" className="hover:text-white transition-colors">{t('단계별 인터랙티브 실습', 'Hands-on Practice')}</a></li>
              <li><a href="#prompt" className="hover:text-white transition-colors">{t('프롬프트 작성법 & 자동 생성기', 'Prompt Builder & Tips')}</a></li>
              <li><a href="#quiz" className="hover:text-white transition-colors">{t('나에게 꼭 맞는 AI 진단', 'AI Finder Quiz')}</a></li>
            </ul>
          </div>

          {/* Policy & AdSense Legal Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t('약관 및 서비스 정책', 'Policies & Terms')}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onOpenPolicy('about')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-blue-400" />
                  <span>{t('사이트 소개 (About Us)', 'About Us')}</span>
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('privacy')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t('개인정보처리방침 (Privacy Policy)', 'Privacy Policy')}</span>
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('terms')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-purple-400" />
                  <span>{t('이용약관 (Terms of Service)', 'Terms of Service')}</span>
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('contact')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{t('문의하기 (ju9896012@gmail.com)', 'Contact Us (ju9896012@gmail.com)')}</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 {t('알기쉽게 배우는 AI', 'Easy AI Guide')}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>ChatGPT</span>
            <span>·</span>
            <span>Google Gemini</span>
            <span>·</span>
            <span>Claude</span>
            <span>·</span>
            <span>Perplexity</span>
            <span>·</span>
            <span>Copilot</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
