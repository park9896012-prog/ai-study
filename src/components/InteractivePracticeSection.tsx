import React, { useState } from 'react';
import { PRACTICE_TUTORIALS } from '../data/practiceTutorials';
import { StepTutorial } from '../types';
import { CheckSquare, Copy, Check, ArrowRight, ArrowLeft, RefreshCw, AlertTriangle, Lightbulb, Bot, FileText, Printer } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const InteractivePracticeSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedTutorialId, setSelectedTutorialId] = useState<string>(PRACTICE_TUTORIALS[0].id);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const activeTutorial = PRACTICE_TUTORIALS.find((t) => t.id === selectedTutorialId) || PRACTICE_TUTORIALS[0];
  const currentStep: StepTutorial = activeTutorial.steps[currentStepIndex] || activeTutorial.steps[0];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="practice" className="py-12 md:py-16 bg-white scroll-mt-20 border-b border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
            <CheckSquare className="w-3.5 h-3.5" />
            <span>{t('실전 인터랙티브 워크북', 'Interactive Workbook')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('따라하며 배우는 실습 예제', 'Hands-on Practice Tutorials')}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {t(
              '단계별 예제를 하나씩 따라해보세요. 프롬프트를 1초 만에 복사하여 원하는 AI(ChatGPT, Gemini, Claude 등)에 붙여넣고 즉시 실행 결과를 확인해보세요.',
              'Follow step-by-step practical exercises. Copy prompts with one click and test them live in your favorite AI model.'
            )}
          </p>
        </div>

        {/* Tutorial Topic Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {PRACTICE_TUTORIALS.map((tutorial) => {
            const isSelected = selectedTutorialId === tutorial.id;
            const diffText = tutorial.difficulty === '초급' ? t('초급', 'Beginner') : tutorial.difficulty === '중급' ? t('중급', 'Intermediate') : t('고급', 'Advanced');
            return (
              <button
                key={tutorial.id}
                onClick={() => {
                  setSelectedTutorialId(tutorial.id);
                  setCurrentStepIndex(0);
                }}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-50/80 border-blue-500 shadow-md ring-2 ring-blue-500/20'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {diffText}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {t(`약 ${tutorial.estimatedMinutes}분 소요`, `~${tutorial.estimatedMinutes} mins`)}
                    </span>
                  </div>
                  <h3 className={`font-bold text-sm leading-snug ${isSelected ? 'text-blue-700' : 'text-slate-900'}`}>
                    {tutorial.title}
                  </h3>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>{t(`단계: ${tutorial.steps.length}단계`, `Steps: ${tutorial.steps.length}`)}</span>
                  <span className="text-blue-600 font-semibold">{t('시작하기 →', 'Start →')}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Workspace Area */}
        <div className="bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 p-6 md:p-8 shadow-xl">
          
          {/* Top Bar with Step Progress */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {t(`실습과제 ${activeTutorial.id}`, `Task ${activeTutorial.id}`)}
                </span>
                <span className="text-xs text-slate-400">
                  {t('권장 AI: ', 'Target AI: ')}{activeTutorial.targetAIs.map(ai => ai.toUpperCase()).join(', ')}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-extrabold text-white mt-1">
                {activeTutorial.title}
              </h3>
            </div>

            {/* Print & Step Nav Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="no-print flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                title={t('인쇄 또는 PDF 저장', 'Print or Save PDF')}
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{t('PDF 저장', 'Save PDF')}</span>
              </button>

              <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl">
                <button
                  disabled={currentStepIndex === 0}
                  onClick={() => setCurrentStepIndex(prev => Math.max(0, prev - 1))}
                  className="p-1.5 rounded-lg text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-bold px-2 text-slate-300">
                  {currentStepIndex + 1} / {activeTutorial.steps.length}
                </span>
                <button
                  disabled={currentStepIndex === activeTutorial.steps.length - 1}
                  onClick={() => setCurrentStepIndex(prev => Math.min(activeTutorial.steps.length - 1, prev + 1))}
                  className="p-1.5 rounded-lg text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Stepper Progress Bar */}
          <div className="py-4 border-b border-slate-800 flex items-center gap-2">
            {activeTutorial.steps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStepIndex(idx)}
                className={`flex-1 h-2 rounded-full transition-all ${
                  idx === currentStepIndex
                    ? 'bg-blue-500'
                    : idx < currentStepIndex
                    ? 'bg-emerald-500'
                    : 'bg-slate-800'
                }`}
                title={`${idx + 1}: ${step.title}`}
              />
            ))}
          </div>

          {/* Step Body Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            
            {/* Left Column: Instruction & Prompt Box */}
            <div className="lg:col-span-6 space-y-5">
              
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
                  <span>{t(`${currentStep.stepNumber}단계 과제`, `Step ${currentStep.stepNumber} Task`)}</span>
                </div>
                <h4 className="text-base md:text-lg font-extrabold text-white">
                  {currentStep.title}
                </h4>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed mt-1">
                  {currentStep.instruction}
                </p>
              </div>

              {/* Copyable Prompt Block */}
              <div className="bg-slate-950 rounded-2xl border border-slate-800 p-4 relative group">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                  <span className="font-bold text-slate-400 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-blue-400" />
                    <span>{t('실습 프롬프트', 'Practice Prompt')}</span>
                  </span>
                  <button
                    onClick={() => handleCopy(currentStep.promptToCopy)}
                    className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg font-bold text-xs shadow-md transition-all cursor-pointer"
                  >
                    {copiedText === currentStep.promptToCopy ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-300" />
                        <span>{t('복사 완료!', 'Copied!')}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{t('프롬프트 복사', 'Copy Prompt')}</span>
                      </>
                    )}
                  </button>
                </div>
                
                <pre className="whitespace-pre-wrap font-sans text-xs md:text-sm text-slate-200 pt-3 leading-relaxed max-h-80 overflow-y-auto">
                  {currentStep.promptToCopy}
                </pre>
              </div>

              {/* Pro Tips & Mistakes */}
              <div className="space-y-2 pt-2">
                {currentStep.proTip && (
                  <div className="p-3 bg-amber-950/40 border border-amber-800/60 rounded-xl text-amber-200 text-xs flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-amber-300">{t('실전 팁: ', 'Pro Tip: ')}</span>
                      <span>{currentStep.proTip}</span>
                    </div>
                  </div>
                )}
                {currentStep.commonMistake && (
                  <div className="p-3 bg-rose-950/40 border border-rose-800/60 rounded-xl text-rose-200 text-xs flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-rose-300">{t('자주 하는 실수: ', 'Common Mistake: ')}</span>
                      <span>{currentStep.commonMistake}</span>
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Right Column: Interactive AI Output Simulator */}
            <div className="lg:col-span-6 bg-slate-950 rounded-2xl border border-slate-800 p-5 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                    <Bot className="w-4 h-4 text-emerald-400" />
                    <span>{t('AI 시뮬레이션 답변 결과', 'Simulated AI Response')}</span>
                  </div>
                  <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800">
                    {t('시뮬레이션 완료', 'Simulated Output')}
                  </span>
                </div>

                <div className="text-xs md:text-sm text-slate-200 leading-relaxed font-sans space-y-3 whitespace-pre-wrap max-h-96 overflow-y-auto pr-1">
                  {currentStep.simulatedResponse}
                </div>
              </div>

              {/* Bottom Step Control Bar */}
              <div className="pt-4 border-t border-slate-800 mt-4 flex items-center justify-between text-xs">
                <span className="text-slate-400">
                  {t(`${currentStepIndex + 1} / ${activeTutorial.steps.length} 단계`, `Step ${currentStepIndex + 1} of ${activeTutorial.steps.length}`)}
                </span>
                
                {currentStepIndex < activeTutorial.steps.length - 1 ? (
                  <button
                    onClick={() => setCurrentStepIndex(prev => prev + 1)}
                    className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl font-bold transition-all cursor-pointer"
                  >
                    <span>{t('다음 단계로 이동', 'Next Step')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentStepIndex(0)}
                    className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-xl font-bold transition-all cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>{t('처음부터 다시하기', 'Restart Tutorial')}</span>
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
