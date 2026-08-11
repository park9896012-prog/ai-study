import React, { useState } from 'react';
import { AI_MODELS } from '../data/aiModels';
import { AIModel } from '../types';
import { HelpCircle, Check, ArrowRight, RefreshCw, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AIQuizSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    task: 'writing',
    budget: 'free',
    ecosystem: 'web'
  });
  const [recommendedAI, setRecommendedAI] = useState<AIModel | null>(null);

  const handleCalculate = (finalAnswers = answers) => {
    let bestId = 'chatgpt';

    if (finalAnswers.task === 'research' || finalAnswers.task === 'search') {
      bestId = 'perplexity';
    } else if (finalAnswers.task === 'coding' || (finalAnswers.task === 'writing' && finalAnswers.budget === 'paid')) {
      bestId = 'claude';
    } else if (finalAnswers.ecosystem === 'google' || finalAnswers.task === 'huge_docs') {
      bestId = 'gemini';
    } else if (finalAnswers.ecosystem === 'ms' || finalAnswers.task === 'office') {
      bestId = 'copilot';
    } else {
      bestId = 'chatgpt';
    }

    const match = AI_MODELS.find(m => m.id === bestId) || AI_MODELS[0];
    setRecommendedAI(match);
    setStep(4);
  };

  const handleReset = () => {
    setStep(1);
    setRecommendedAI(null);
  };

  return (
    <section id="quiz" className="py-12 md:py-16 bg-white scroll-mt-20 border-b border-slate-100 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t('맞춤 AI 추천 매칭', 'AI Finder Quiz')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t('나에게 꼭 맞는 AI 진단 테스트', 'Find Your Ideal AI Match')}
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            {t(
              '3가지 짧은 질문에 답하시면 주 작업과 환경에 가장 뛰어난 성능을 발휘할 맞춤 AI를 추천해드립니다.',
              'Answer 3 quick questions to discover which AI tool perfectly matches your goals and workflow.'
            )}
          </p>
        </div>

        {/* Test Card Container */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
          
          {/* Progress Bar */}
          <div className="mb-6 flex items-center justify-between text-xs text-slate-500 font-bold">
            <span>{t(`진행 상황 (${step}/3)`, `Progress (${step}/3)`)}</span>
            <span>{step === 4 ? t('진단 완료', 'Complete') : `${Math.round((step / 3) * 100)}%`}</span>
          </div>
          <div className="w-full bg-slate-200 h-2 rounded-full mb-8 overflow-hidden">
            <div
              className="bg-blue-600 h-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900">
                {t('1. 주로 어떤 용도로 AI를 가장 많이 사용하고 싶으신가요?', '1. What is your primary use case for AI?')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'writing', label: t('자연스러운 글쓰기, 이메일, 번역, 카피라이팅', 'Writing, email drafting, translation, & copywriting') },
                  { id: 'coding', label: t('프로그래밍 코드 작성, 디버깅, 웹 앱 개발', 'Code generation, debugging, & web app development') },
                  { id: 'research', label: t('신뢰할 수 있는 출처 조사, 뉴스 & 논문 팩트체크', 'Fact-checked research, papers, & news citations') },
                  { id: 'huge_docs', label: t('수백 페이지 PDF 요약, 유튜브 동영상 분석', 'Long PDF analysis & YouTube video summarization') },
                  { id: 'office', label: t('MS 워드, 엑셀, 파워포인트 오피스 업무 연동', 'MS Office (Word, Excel, PowerPoint) productivity') }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setAnswers({ ...answers, task: opt.id });
                      setStep(2);
                    }}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 text-left text-xs font-bold text-slate-800 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900">
                {t('2. 선호하시는 유료/무료 비용 요건은 무엇인가요?', '2. What is your budget preference?')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'free', label: t('100% 결제 없이 뛰어난 무료 기능을 쓰고 싶다', '100% Free plan with powerful essential features') },
                  { id: 'paid', label: t('월 20달러 내외를 지불하더라도 최고 성능이 필요하다', 'Willing to pay ~$20/mo for maximum peak intelligence') }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      const newAns = { ...answers, budget: opt.id };
                      setAnswers(newAns);
                      setStep(3);
                    }}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 text-left text-xs font-bold text-slate-800 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-extrabold text-slate-900">
                {t('3. 주로 사용하는 소프트웨어 생태계는 무엇인가요?', '3. Which software ecosystem do you use most?')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'web', label: t('일반 PC 및 모바일 웹 브라우저', 'Standard Browser & Mobile Web') },
                  { id: 'google', label: t('구글 워크스페이스 (Gmail, 드라이브, 구글문서)', 'Google Workspace (Gmail, Drive, Docs)') },
                  { id: 'ms', label: t('마이크로소프트 365 (Word, Excel, PowerPoint)', 'Microsoft 365 (Word, Excel, PowerPoint)') }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      const finalAns = { ...answers, ecosystem: opt.id };
                      setAnswers(finalAns);
                      handleCalculate(finalAns);
                    }}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 text-left text-xs font-bold text-slate-800 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <span>{opt.label}</span>
                    <Check className="w-4 h-4 text-blue-600" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: RECOMMENDATION RESULT */}
          {step === 4 && recommendedAI && (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Sparkles className="w-8 h-8 animate-pulse" />
              </div>

              <div>
                <span className="text-xs font-bold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {t('당신을 위한 맞춤 AI 추천', 'Your Recommended AI Match')}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  {recommendedAI.name} ({recommendedAI.vendor})
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mt-1">
                  "{recommendedAI.tagline}"
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 text-left space-y-3 max-w-xl mx-auto shadow-2xs text-xs">
                <p className="font-bold text-slate-900 border-b border-slate-100 pb-2">
                  💡 {t('추천 이유:', 'Why this AI:')}
                </p>
                <ul className="space-y-1.5 text-slate-700">
                  {recommendedAI.strengths.map((st, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{st}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 border-t border-slate-100 font-semibold text-blue-600">
                  {t('가격: ', 'Pricing: ')}{recommendedAI.pricing.free}
                </div>
              </div>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>{t('진단 다시 받아보기', 'Retake Quiz')}</span>
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
