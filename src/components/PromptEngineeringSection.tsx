import React, { useState } from 'react';
import { PROMPT_FRAMEWORKS, PROMPT_TEMPLATES } from '../data/promptGuides';
import { MessageSquareCode, Sparkles, Copy, Check, Sliders, Lightbulb, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const PromptEngineeringSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'principles' | 'builder' | 'templates'>('builder');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Interactive Prompt Builder Form State
  const [builderState, setBuilderState] = useState({
    aiTarget: 'Claude 3.5 / ChatGPT',
    role: '10년 차 IT 리서치 및 마케팅 전략가',
    task: '신규 AI 교육 사이트 홍보용 블로그 포스트 기획',
    context: '초보자도 쉽게 AI를 배울 수 있는 실습 중심 사이트 강조',
    format: '제목 3가지 + 서론/본론(3개 포인트)/결론의 블로그 포스팅 형태',
    constraints: '전문 용어는 쉬운 비유로 설명, 어조는 정중하면서 친근한 해요체, 총 800자 내외'
  });

  const generatedPrompt = lang === 'en'
    ? `Act as a ${builderState.role || 'Senior IT Specialist'}.
Based on the background and details below, please complete: ${builderState.task || 'Drafting a blog post plan'}.

[Context & Background]
${builderState.context || 'Emphasize easy step-by-step AI tutorials for beginners'}

[Constraints & Requirements]
${builderState.constraints || 'Explain jargon with simple analogies, friendly tone, ~800 words'}

[Output Format]
${builderState.format || '3 Title options + Introduction / 3 Main points / Conclusion'}

Recommended AI Model: ${builderState.aiTarget}`
    : `너는 ${builderState.role}이야. 
아래 정보와 요구사항을 바탕으로 ${builderState.task}을 작성해줘.

[배경 및 상황]
${builderState.context}

[작성 조건 및 제약사항]
${builderState.constraints}

[출력 양식]
${builderState.format}

권장 AI: ${builderState.aiTarget}`;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const principles = [
    {
      code: 'R',
      title: t('Role (역할)', 'Role'),
      desc: t('AI에게 신분과 전문가 자격을 부여하세요.', 'Assign a persona or expert role to the AI.'),
      example: t('너는 15년 차 선행 소프트웨어 아키텍트야.', 'You are a Senior Software Architect with 15 years experience.')
    },
    {
      code: 'T',
      title: t('Task (과업)', 'Task'),
      desc: t('원하는 최종 작업 지시를 명확하게 제시하세요.', 'State the main objective or task clearly.'),
      example: t('아래 코드의 메모리 누수 버그를 분석하고 수정해줘.', 'Analyze memory leak bugs in the code below and fix them.')
    },
    {
      code: 'C',
      title: t('Context (맥락)', 'Context'),
      desc: t('작업의 배경 지식과 상황 정보를 공유하세요.', 'Provide background context and audience info.'),
      example: t('이 코드는 10만 명 이상의 동시접속자를 처리하는 서버야.', 'This backend server handles over 100,000 concurrent users.')
    },
    {
      code: 'F',
      title: t('Format (양식)', 'Format'),
      desc: t('원하는 표, 요약, 문단 구조 양식을 지정하세요.', 'Specify table, bullet points, or section formatting.'),
      example: t('[원인 / 해결책 / 개선 코드] 형태의 표로 정돈해줘.', 'Format output as a table with [Cause / Solution / Refactored Code].')
    },
    {
      code: 'K',
      title: t('Constraint (제약)', 'Constraint'),
      desc: t('어기면 안 되는 규칙과 분량 한계를 명시하세요.', 'Set rules, length limits, and tone constraints.'),
      example: t('어조는 격식 있는 어조로 500자 이내로 작성해줘.', 'Keep tone professional and limit output to within 500 words.')
    }
  ];

  return (
    <section id="prompt" className="py-12 md:py-16 bg-slate-50/60 scroll-mt-20 border-b border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold mb-3">
            <MessageSquareCode className="w-3.5 h-3.5" />
            <span>{t('프롬프트 작성법 & 실무 빌더', 'Prompt Engineering & Builder')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('원하는 답변을 100% 얻는 프롬프트 작성 법', 'Prompt Engineering Guide & Live Builder')}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {t(
              '프롬프트를 어떻게 쓰느냐에 따라 AI 답변의 질이 달라집니다. 프롬프트 작성 핵심 5법칙부터 프롬프트 생성 빌더로 나만의 지시문을 즉시 만들어보세요.',
              'Learn the core 5 principles of prompt engineering and build high-quality AI prompts live in seconds.'
            )}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 border-b border-slate-200 pb-4">
          <button
            onClick={() => setActiveTab('builder')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'builder'
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>{t('⚡ 실시간 프롬프트 생성기 (빌더)', '⚡ Live Prompt Builder')}</span>
          </button>

          <button
            onClick={() => setActiveTab('principles')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'principles'
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Lightbulb className="w-4 h-4" />
            <span>{t('프롬프트 작성 5대 원칙', '5 Core Principles')}</span>
          </button>

          <button
            onClick={() => setActiveTab('templates')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'templates'
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>{t('실무 프롬프트 템플릿 모음', 'Prompt Templates')}</span>
          </button>
        </div>

        {/* TAB 1: Interactive Prompt Builder Generator */}
        {activeTab === 'builder' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
            
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  {t('맞춤형 프롬프트 오토 빌더 (Prompt Auto-Builder)', 'Custom Prompt Auto-Builder')}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {t(
                    '각 요소에 내용을 적으면 AI가 가장 잘 이해할 수 있는 최적의 프롬프트 문장으로 자동 조합됩니다.',
                    'Fill in each field below to automatically generate an optimized AI prompt.'
                  )}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Form Input Controls */}
              <div className="lg:col-span-6 space-y-4">
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t('대상 AI 모델 선택', 'Select Target AI Model')}
                  </label>
                  <select
                    value={builderState.aiTarget}
                    onChange={(e) => setBuilderState({ ...builderState, aiTarget: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 font-semibold focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                  >
                    <option>Claude 3.5 / ChatGPT ({t('글쓰기 & 코딩 최적화', 'Writing & Code Optimization')})</option>
                    <option>Google Gemini ({t('구글 워크스페이스 & 문서 분석', 'Google Workspace & Long Analysis')})</option>
                    <option>Perplexity ({t('학술 & 실시간 시장 조사', 'Academic & Real-time Research')})</option>
                    <option>Microsoft Copilot ({t('MS 오피스 & 문서 작성', 'MS Office & Work Tasks')})</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    1. {t('역할 (Role) 설정', 'Role')}
                  </label>
                  <input
                    type="text"
                    value={builderState.role}
                    onChange={(e) => setBuilderState({ ...builderState, role: e.target.value })}
                    placeholder={t('예: 10년 차 IT 전문 카피라이터', 'e.g. Senior Copywriter with 10 years experience')}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 focus:bg-white focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    2. {t('과업 (Task) 지시', 'Task')}
                  </label>
                  <input
                    type="text"
                    value={builderState.task}
                    onChange={(e) => setBuilderState({ ...builderState, task: e.target.value })}
                    placeholder={t('예: 신상품 인스타그램 광고 문구 3가지 작성', 'e.g. Write 3 marketing copy options for new product')}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 focus:bg-white focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    3. {t('배경 맥락 (Context)', 'Context')}
                  </label>
                  <textarea
                    rows={2}
                    value={builderState.context}
                    onChange={(e) => setBuilderState({ ...builderState, context: e.target.value })}
                    placeholder={t('상황 배경 정보 및 타겟 독자 설명...', 'Explain background, context, and target audience...')}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 focus:bg-white focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    4. {t('출력 양식 (Format)', 'Format')}
                  </label>
                  <input
                    type="text"
                    value={builderState.format}
                    onChange={(e) => setBuilderState({ ...builderState, format: e.target.value })}
                    placeholder={t('예: [헤드라인 / 본문 / 이모지] 표 양식', 'e.g. Table with [Headline / Body / Emoji]')}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 focus:bg-white focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    5. {t('제약사항 (Constraints)', 'Constraints')}
                  </label>
                  <input
                    type="text"
                    value={builderState.constraints}
                    onChange={(e) => setBuilderState({ ...builderState, constraints: e.target.value })}
                    placeholder={t('예: 300자 이내, 전문 용어 제외', 'e.g. Under 300 words, no jargon')}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 focus:bg-white focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>

              </div>

              {/* Live Generated Prompt Output Preview */}
              <div className="lg:col-span-6 bg-slate-900 text-slate-100 rounded-2xl p-5 flex flex-col justify-between border border-slate-800">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                    <span className="text-xs font-bold text-purple-400 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" />
                      <span>{t('완성된 최적화 프롬프트', 'Generated Optimized Prompt')}</span>
                    </span>
                    <button
                      onClick={() => handleCopy(generatedPrompt, 'builder-prompt')}
                      className="flex items-center gap-1.5 bg-purple-600 hover:bg-purple-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer shadow-md"
                    >
                      {copiedId === 'builder-prompt' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-300" />
                          <span>{t('복사 완료!', 'Copied!')}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>{t('1초 전체 복사', '1-Click Copy')}</span>
                        </>
                      )}
                    </button>
                  </div>

                  <pre className="whitespace-pre-wrap font-sans text-xs md:text-sm text-slate-200 leading-relaxed font-mono bg-slate-950 p-4 rounded-xl border border-slate-800/80 max-h-96 overflow-y-auto">
                    {generatedPrompt}
                  </pre>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>{t('💡 복사 후 ChatGPT 또는 Claude 대화창에 바로 붙여넣으세요.', '💡 Copy and paste directly into ChatGPT, Gemini, or Claude.')}</span>
                  <span className="text-purple-400 font-bold">{t('지시어 완성도 100%', 'Ready to Use')}</span>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: Principles & Frameworks */}
        {activeTab === 'principles' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {principles.map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
                  <span className="w-8 h-8 rounded-xl bg-purple-100 text-purple-800 font-extrabold text-sm flex items-center justify-center mb-3">
                    {item.code}
                  </span>
                  <h4 className="font-extrabold text-slate-900 text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
                  <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] text-purple-700 font-mono bg-purple-50/60 p-2 rounded">
                    {t('예시: ', 'Example: ')}{item.example}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs">
              <h3 className="font-extrabold text-slate-900 text-lg mb-4">
                {t('대표 프롬프트 공식 (Framework)', 'Core Prompt Frameworks')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {PROMPT_FRAMEWORKS.map((fw, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200/80">
                    <span className="text-xs font-bold bg-purple-100 text-purple-800 px-2 py-0.5 rounded">
                      {fw.name}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm mt-2">{fw.fullName}</h4>
                    <p className="text-xs text-slate-600 mt-1">{fw.description}</p>
                    <div className="mt-3 p-2.5 bg-white rounded border border-slate-200 text-xs text-slate-800 font-mono">
                      {fw.formula}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Templates Collection */}
        {activeTab === 'templates' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROMPT_TEMPLATES.map((tpl) => (
              <div key={tpl.id} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-2xs">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800">
                      {tpl.framework}
                    </span>
                    <span className="text-xs text-slate-500">{tpl.recommendedAI}</span>
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base">{tpl.title}</h4>
                  <p className="text-xs text-slate-600 mt-1">{tpl.description}</p>

                  <div className="mt-4 bg-slate-900 text-slate-100 p-3.5 rounded-xl font-mono text-xs leading-relaxed max-h-48 overflow-y-auto">
                    {tpl.promptText}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">{t('템플릿 가이드', 'Template')}</span>
                  <button
                    onClick={() => handleCopy(tpl.promptText, tpl.id)}
                    className="flex items-center gap-1 text-xs font-bold text-purple-600 hover:text-purple-800 bg-purple-50 hover:bg-purple-100 px-3 py-1.5 rounded-lg border border-purple-200 transition-colors cursor-pointer"
                  >
                    {copiedId === tpl.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === tpl.id ? t('복사됨!', 'Copied!') : t('템플릿 복사', 'Copy Template')}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
