import React, { useState } from 'react';
import { LEVEL_GUIDES } from '../data/levelGuides';
import { UserLevel } from '../types';
import { BookOpen, Sparkles, Zap, Flame, Check, Copy, ChevronDown, ChevronUp, Lightbulb } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LevelGuideSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [activeLevel, setActiveLevel] = useState<UserLevel>('beginner');
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const [expandedChapter, setExpandedChapter] = useState<string>('beg-1');

  const currentGuide = LEVEL_GUIDES.find((g) => g.level === activeLevel) || LEVEL_GUIDES[0];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(text);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  const levelTabs = [
    {
      level: 'beginner' as UserLevel,
      label: t('초보자 가이드', 'Beginner Guide'),
      desc: t('입문 & 기초 대화법', 'Basic Prompts & Intro'),
      icon: Sparkles,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50 border-emerald-200'
    },
    {
      level: 'intermediate' as UserLevel,
      label: t('중급자 가이드', 'Intermediate Guide'),
      desc: t('파일 분석 & 특화 기능', 'File Analysis & Web Search'),
      icon: Zap,
      color: 'text-blue-600',
      bg: 'bg-blue-50 border-blue-200'
    },
    {
      level: 'advanced' as UserLevel,
      label: t('고급자 가이드', 'Advanced Guide'),
      desc: t('CoT 추론 & 자동화', 'CoT Reasoning & Workflows'),
      icon: Flame,
      color: 'text-amber-600',
      bg: 'bg-amber-50 border-amber-200'
    }
  ];

  return (
    <section id="guide" className="py-12 md:py-16 bg-slate-50/70 scroll-mt-20 border-b border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t('단계별 학습 커리큘럼', 'Step-by-Step Curriculum')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('초보자부터 고급자까지, 수준별 AI 완벽 사용법', 'AI Usage Guides: Beginner to Advanced')}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {t(
              '나의 AI 숙련도 레벨을 선택하고, 실제 사례와 예제 프롬프트로 구성된 3단계 커리큘럼을 통해 실력을 높여보세요.',
              'Choose your skill level and master AI with real-world examples, step-by-step instructions, and 1-click prompt templates.'
            )}
          </p>
        </div>

        {/* Level Selector Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {levelTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeLevel === tab.level;
            return (
              <button
                key={tab.level}
                onClick={() => {
                  setActiveLevel(tab.level);
                  const guide = LEVEL_GUIDES.find(g => g.level === tab.level);
                  if (guide && guide.chapters[0]) {
                    setExpandedChapter(guide.chapters[0].id);
                  }
                }}
                className={`p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-start gap-4 ${
                  isActive
                    ? 'bg-white border-blue-500 shadow-md ring-2 ring-blue-500/20'
                    : 'bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300 shadow-2xs'
                }`}
              >
                <div className={`p-3 rounded-xl ${tab.bg} shrink-0`}>
                  <Icon className={`w-6 h-6 ${tab.color}`} />
                </div>
                <div>
                  <h3 className={`font-extrabold text-base ${isActive ? 'text-blue-600' : 'text-slate-900'}`}>
                    {tab.label}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">{tab.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Guide Content Wrapper */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
          
          {/* Level Header Banner */}
          <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-extrabold text-slate-900 text-base md:text-lg">
                {currentGuide.levelTitle}
              </h3>
              <p className="text-xs md:text-sm text-slate-600 mt-1">
                {currentGuide.levelDescription}
              </p>
            </div>
          </div>

          {/* Accordion Chapters */}
          <div className="space-y-4">
            {currentGuide.chapters.map((chapter) => {
              const isExpanded = expandedChapter === chapter.id;
              return (
                <div
                  key={chapter.id}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  {/* Chapter Accordion Bar */}
                  <button
                    onClick={() => setExpandedChapter(isExpanded ? '' : chapter.id)}
                    className={`w-full p-4 md:p-5 flex items-center justify-between text-left transition-colors cursor-pointer ${
                      isExpanded ? 'bg-slate-50 border-b border-slate-200' : 'bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-base md:text-lg">
                        {chapter.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium mt-1">
                        {chapter.summary}
                      </p>
                    </div>
                    <div className="p-1.5 bg-slate-100 rounded-lg text-slate-600 shrink-0 ml-3">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {/* Chapter Body Content */}
                  {isExpanded && (
                    <div className="p-5 md:p-6 space-y-6 bg-white">
                      {chapter.steps.map((step) => (
                        <div key={step.stepNumber} className="border-b border-slate-100 pb-6 last:border-b-0 last:pb-0">
                          
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                              {step.stepNumber}
                            </span>
                            <h5 className="font-bold text-slate-900 text-sm md:text-base">
                              {step.title}
                            </h5>
                          </div>

                          <p className="text-xs md:text-sm text-slate-700 leading-relaxed pl-8">
                            {step.description}
                          </p>

                          {/* Example Prompt Box */}
                          {step.examplePrompt && (
                            <div className="mt-3 ml-8 bg-slate-900 text-slate-100 p-4 rounded-xl relative group font-mono text-xs leading-relaxed">
                              <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2 mb-2 font-sans">
                                <span className="font-bold text-blue-400">
                                  {t('💡 추천 프롬프트 예시', '💡 Recommended Prompt Example')}
                                </span>
                                <button
                                  onClick={() => handleCopy(step.examplePrompt!)}
                                  className="flex items-center gap-1 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2 py-1 rounded transition-colors"
                                >
                                  {copiedPrompt === step.examplePrompt ? (
                                    <>
                                      <Check className="w-3 h-3 text-emerald-400" />
                                      <span className="text-emerald-400">{t('복사 완료!', 'Copied!')}</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3 h-3" />
                                      <span>{t('복사하기', 'Copy')}</span>
                                    </>
                                  )}
                                </button>
                              </div>
                              <pre className="whitespace-pre-wrap font-sans text-xs text-slate-200">
                                {step.examplePrompt}
                              </pre>
                            </div>
                          )}

                          {/* Expected Result */}
                          {step.expectedResult && (
                            <div className="mt-2 ml-8 text-xs bg-emerald-50 text-emerald-900 p-3 rounded-xl border border-emerald-200 flex items-start gap-2">
                              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <div>
                                <span className="font-bold text-emerald-800">{t('예상 답변 결과: ', 'Expected Output: ')}</span>
                                <span>{step.expectedResult}</span>
                              </div>
                            </div>
                          )}

                          {/* Pro Tip */}
                          {step.tip && (
                            <div className="mt-2 ml-8 text-xs bg-amber-50 text-amber-900 p-3 rounded-xl border border-amber-200 flex items-start gap-2">
                              <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                              <div>
                                <span className="font-bold text-amber-800">{t('꿀팁: ', 'Pro Tip: ')}</span>
                                <span>{step.tip}</span>
                              </div>
                            </div>
                          )}

                        </div>
                      ))}
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
