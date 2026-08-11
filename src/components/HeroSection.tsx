import React from 'react';
import { Sparkles, ArrowRight, Layers, CheckCircle2, Bot, Zap } from 'lucide-react';
import heroImg from '../assets/images/ai_learning_hero_1786443432652.jpg';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const aiList = [
    { name: 'ChatGPT', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { name: 'Google Gemini', bg: 'bg-blue-50 text-blue-700 border-blue-200' },
    { name: 'Claude 3.5', bg: 'bg-amber-50 text-amber-800 border-amber-200' },
    { name: 'Perplexity', bg: 'bg-purple-50 text-purple-700 border-purple-200' },
    { name: 'MS Copilot', bg: 'bg-cyan-50 text-cyan-700 border-cyan-200' }
  ];

  return (
    <section id="hero" className="relative pt-6 pb-12 md:pt-10 md:pb-16 bg-gradient-to-b from-blue-50/60 via-slate-50 to-white overflow-hidden border-b border-slate-100 font-sans">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-800 text-xs font-bold shadow-2xs">
              <Sparkles className="w-4 h-4 text-blue-600 animate-spin" style={{ animationDuration: '6s' }} />
              <span>
                {t(
                  'ChatGPT · Gemini · Claude · Perplexity · Copilot 총망라',
                  'All-in-One Guide: ChatGPT · Gemini · Claude · Perplexity · Copilot'
                )}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              {t('복잡한 AI 사용법,', 'Master Complex AI Tools,')}
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {t('쉽고 명쾌하게', 'Simply & Clearly')}
              </span> {t('마스터하세요!', 'Step by Step!')}
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
              {t(
                '어떤 AI가 나에게 맞을까? 5대 최신 AI 특징 및 가격 비교부터 초보자·중급자·고급자 수준별 실습과 1초 만에 복사해서 쓰는 효과적인 프롬프트 작성법까지 누구나 알기 쉽게 안내합니다.',
                'Which AI is right for you? Compare top 5 AI models, follow step-by-step guides for all levels, and use 1-click ready prompt templates.'
              )}
            </p>

            {/* Supported AI Badges Pill Row */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-bold text-slate-500 mr-1">
                {t('대상 AI:', 'Covered AI:')}
              </span>
              {aiList.map((ai, idx) => (
                <span
                  key={idx}
                  className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${ai.bg} shadow-2xs flex items-center gap-1`}
                >
                  <Bot className="w-3.5 h-3.5" />
                  {ai.name}
                </span>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('compare')}
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-200 cursor-pointer"
              >
                <Layers className="w-4 h-4" />
                <span>{t('AI 비교분석 한눈에 보기', 'Compare AI Models')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('practice')}
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm rounded-xl border border-slate-300 shadow-2xs transition-all cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{t('단계별 실습 따라하기', 'Start Hands-on Exercises')}</span>
              </button>
            </div>

            {/* Key Feature Stats Grid */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/80">
              <div className="bg-white p-3 rounded-xl border border-slate-200/80 text-center shadow-2xs">
                <p className="text-lg font-extrabold text-blue-600">{t('5대 AI', 'Top 5 AI')}</p>
                <p className="text-xs text-slate-500 font-medium">{t('특징·가격 완벽 비교', 'Features & Pricing')}</p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200/80 text-center shadow-2xs">
                <p className="text-lg font-extrabold text-indigo-600">{t('수준별 가이드', 'Level Guides')}</p>
                <p className="text-xs text-slate-500 font-medium">{t('초급·중급·고급 코스', 'Beginner to Advanced')}</p>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200/80 text-center shadow-2xs">
                <p className="text-lg font-extrabold text-purple-600">{t('프롬프트 빌더', 'Prompt Builder')}</p>
                <p className="text-xs text-slate-500 font-medium">{t('1초 완성 실무 템플릿', 'Instant Ready Prompts')}</p>
              </div>
            </div>

          </div>

          {/* Right Visual Image Banner */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xl bg-white group">
              <img
                src={heroImg}
                alt="알기쉽게 배우는 AI 메인 일러스트"
                className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full w-max mb-1">
                  <Zap className="w-3.5 h-3.5 text-amber-300" />
                  <span>{t('실습 중심 입문 교육', 'Practice-Oriented AI Guide')}</span>
                </div>
                <h3 className="font-bold text-lg">
                  {t('따라하기 쉬운 실습 예제와 명확한 가이드', 'Easy Step-by-Step AI Examples')}
                </h3>
                <p className="text-xs text-slate-200 mt-0.5">
                  {t('실무에 바로 사용하는 인공지능 프롬프트 작성 꿀팁 포함', 'Includes ready-to-use prompt engineering tips for work & study')}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
