import React, { useState } from 'react';
import { AI_MODELS } from '../data/aiModels';
import { AIModelId } from '../types';
import { Layers, Check, X, Award, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AIComparisonSectionProps {
  searchQuery: string;
}

export const AIComparisonSection: React.FC<AIComparisonSectionProps> = ({ searchQuery }) => {
  const { lang, t } = useLanguage();
  const [selectedAI, setSelectedAI] = useState<AIModelId | 'all'>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'matrix'>('cards');

  // English override mapping for AI Model text
  const getModelText = (modelId: string, field: 'tagline' | 'free' | 'paid' | 'strengths' | 'weaknesses' | 'bestFor') => {
    if (lang === 'ko') {
      const model = AI_MODELS.find(m => m.id === modelId);
      if (!model) return '';
      if (field === 'tagline') return model.tagline;
      if (field === 'free') return model.pricing.free;
      if (field === 'paid') return model.pricing.paid;
      if (field === 'strengths') return model.strengths;
      if (field === 'weaknesses') return model.weaknesses;
      if (field === 'bestFor') return model.bestFor;
    }

    // English translations
    const enMap: Record<string, any> = {
      chatgpt: {
        tagline: 'The most popular & versatile all-around AI assistant',
        free: 'GPT-4o-mini / Limited GPT-4o Free',
        paid: 'Plus ($20/mo) - GPT-4o, o1, Canvas, Voice Mode',
        strengths: [
          'Extremely natural conversation flow & context awareness',
          'Excellent multimodal features: voice, image, files, and code',
          'Easy custom GPT creation via Custom GPTs Store',
          'Canvas mode enables interactive text & code editing'
        ],
        weaknesses: [
          'Peak time usage limits can be restrictive on the free tier',
          'Web search citation accuracy may vary compared to Perplexity'
        ],
        bestFor: ['General Daily Questions', 'Brainstorming Ideas', 'Voice Learning', 'Custom AI Chatbots']
      },
      gemini: {
        tagline: 'Deeply integrated with Google Workspace & real-time search',
        free: 'Gemini 2.0 Flash Free',
        paid: 'Advanced ($19.99/mo) - Gemini 1.5 Pro / 2.0 Flash, 2M Context, 2TB Google Drive',
        strengths: [
          'Massive 2 Million token context window (full books & long videos)',
          'Native integration with Google Drive, Gmail, Docs, and Maps',
          'Real-time information backed by Google Search grounding',
          'Deep Research mode for multi-step report generation'
        ],
        weaknesses: [
          'Strict safety guidelines may refuse some creative prompts',
          'Korean context phrasing can occasionally sound mechanical'
        ],
        bestFor: ['Long Document & PDF Analysis', 'Google Workspace Users', 'YouTube Video Summaries', 'Real-time News Research']
      },
      claude: {
        tagline: 'Industry-leading prose quality & powerful code generation',
        free: 'Claude 3.5 Sonnet / Haiku Free (limited messages)',
        paid: 'Pro ($20/mo) - 5x higher message cap, Projects feature',
        strengths: [
          'Unmatched code generation & bug fixing capabilities',
          'Artifacts window for real-time live preview of web UI & code',
          'Natural, polished writing style with deep logical reasoning',
          'Projects feature for organizing document context'
        ],
        weaknesses: [
          'Daily message limits on free tier are stricter',
          'No native real-time web search (requires external extension)'
        ],
        bestFor: ['Programming & App Development', 'High-Quality Writing & Reports', 'Live UI Visualization', 'Complex Logic Tasks']
      },
      perplexity: {
        tagline: 'Research-focused AI search engine with precise citations',
        free: 'Unlimited Basic Search + 5 Pro Searches/day',
        paid: 'Pro ($20/mo) - 600+ Pro Searches/day, GPT-4o & Claude 3.5 model switching',
        strengths: [
          'Lowest hallucination rate with exact inline footnote URL sources',
          'Cuts research and bibliography time by over 90%',
          'Domain filtering (Academic, News, YouTube, Reddit)',
          'Perplexity Pages turns research into formatted articles'
        ],
        weaknesses: [
          'Less suited for creative storytelling or casual chatting',
          'Fewer interactive canvas features'
        ],
        bestFor: ['Academic & Paper Research', 'Latest Market & Stock Analysis', 'Fact-Checking', 'Source-Backed Reports']
      },
      copilot: {
        tagline: 'Seamlessly integrated with Windows 11 & MS Office suite',
        free: 'Free on Web & Windows (GPT-4 powered)',
        paid: 'Copilot Pro ($20/mo) - Built into Word, Excel, PPT, Outlook apps',
        strengths: [
          'Direct integration into MS Word, Excel, PowerPoint, and Outlook',
          'Free access to GPT-4 intelligence & DALL-E 3 image generation',
          'Built-in Windows 11 OS shortcut integration (Win+C)',
          'Choice of conversation styles (Creative, Balanced, Precise)'
        ],
        weaknesses: [
          'Response speed outside Office apps can sometimes feel sluggish',
          'Fewer custom extensions compared to GPTs'
        ],
        bestFor: ['MS Office Heavy Users', 'Free GPT-4 & DALL-E 3 Image Access', 'Windows 11 Power Users']
      }
    };

    const data = enMap[modelId];
    if (!data) return '';
    return data[field];
  };

  // Filter models based on search query
  const filteredModels = AI_MODELS.filter((model) => {
    const matchesSearch =
      !searchQuery ||
      model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.vendor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.bestFor.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesAI = selectedAI === 'all' || model.id === selectedAI;

    return matchesSearch && matchesAI;
  });

  return (
    <section id="compare" className="py-12 md:py-16 bg-white scroll-mt-20 border-b border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{t('AI 비교 분석 마스터', 'AI Comparison Master')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('대표 5대 AI 특징 및 장단점 비교', 'Top 5 AI Models: Features & Comparison')}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {t(
              'ChatGPT, Gemini, Claude, Perplexity, Copilot의 성능, 가격, 장단점 및 추천 사용 용도를 한눈에 비교해보고 내 작업에 가장 적합한 AI를 선택해보세요.',
              'Compare features, pricing, strengths, weaknesses, and ideal use cases of ChatGPT, Gemini, Claude, Perplexity, and Copilot to pick the best AI for your needs.'
            )}
          </p>
        </div>

        {/* Filter Controls & View Switcher */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-slate-50 p-3 rounded-2xl border border-slate-200/80">
          
          {/* AI Filter Selector Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            <button
              onClick={() => setSelectedAI('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedAI === 'all'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {t('전체 AI', 'All Models')}
            </button>
            {AI_MODELS.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedAI(m.id)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedAI === m.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {m.name}
              </button>
            ))}
          </div>

          {/* View Mode Toggle (Cards vs Table Matrix) */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 w-full md:w-auto justify-center">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'cards' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {t('카드형 포맷', 'Card View')}
            </button>
            <button
              onClick={() => setViewMode('matrix')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'matrix' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {t('표 비교 포맷', 'Matrix View')}
            </button>
          </div>

        </div>

        {/* View 1: Detailed Cards Format */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredModels.map((model) => {
              const tagline = getModelText(model.id, 'tagline') as string;
              const freePricing = getModelText(model.id, 'free') as string;
              const paidPricing = getModelText(model.id, 'paid') as string;
              const strengths = getModelText(model.id, 'strengths') as string[];
              const weaknesses = getModelText(model.id, 'weaknesses') as string[];
              const bestFor = getModelText(model.id, 'bestFor') as string[];

              return (
                <div
                  key={model.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Card Top Header */}
                  <div className="p-6 border-b border-slate-100">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${model.badgeBg} ${model.badgeText}`}>
                        {model.vendor}
                      </span>
                      <span className="text-xs text-slate-500 font-medium bg-slate-100 px-2 py-0.5 rounded-md">
                        {model.contextWindow}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                      <span>{model.name}</span>
                    </h3>
                    <p className="text-xs text-slate-600 font-medium mt-1 min-h-[32px]">
                      {tagline}
                    </p>

                    {/* Pricing Box */}
                    <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs space-y-1">
                      <div className="flex items-start justify-between gap-1">
                        <span className="font-bold text-slate-500 shrink-0">{t('무료 플랜:', 'Free Plan:')}</span>
                        <span className="text-slate-800 text-right">{freePricing}</span>
                      </div>
                      <div className="flex items-start justify-between gap-1">
                        <span className="font-bold text-blue-600 shrink-0">{t('유료 플랜:', 'Paid Plan:')}</span>
                        <span className="text-slate-900 font-semibold text-right">{paidPricing}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Middle Features */}
                  <div className="p-6 space-y-5 flex-1">
                    
                    {/* Strengths */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{t('핵심 장점', 'Key Strengths')}</span>
                      </h4>
                      <ul className="space-y-1.5">
                        {strengths.map((str, idx) => (
                          <li key={idx} className="text-xs text-slate-700 flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{str}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Weaknesses */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1">
                        <ShieldAlert className="w-3.5 h-3.5 text-rose-500" />
                        <span>{t('아쉬운 점', 'Limitations')}</span>
                      </h4>
                      <ul className="space-y-1.5">
                        {weaknesses.map((wk, idx) => (
                          <li key={idx} className="text-xs text-slate-600 flex items-start gap-1.5">
                            <span className="text-rose-500 font-bold shrink-0 mt-0.5">·</span>
                            <span>{wk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Best Use Cases */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                        {t('추천 활용 대상', 'Best For')}
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {bestFor.map((b, idx) => (
                          <span key={idx} className="text-[11px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md font-medium border border-blue-100">
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Card Bottom Capability Pills */}
                  <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-0.5" title="웹 검색 지원 여부">
                        {t('웹검색: ', 'Search: ')}{model.webSearch ? <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" /> : <X className="w-3.5 h-3.5 text-slate-400" />}
                      </span>
                      <span className="flex items-center gap-0.5" title="이미지 생성 지원 여부">
                        {t('이미지: ', 'Image: ')}{model.imageGen ? <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" /> : <X className="w-3.5 h-3.5 text-slate-400" />}
                      </span>
                    </div>
                    <span className="font-bold text-blue-600">
                      {t('분석: ', 'Analysis: ')}{model.dataAnalysis ? t('지원', 'Yes') : t('제한', 'Limited')}
                    </span>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* View 2: Matrix Table Format */}
        {viewMode === 'matrix' && (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-x-auto shadow-sm">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-100/80 border-b border-slate-200 text-xs text-slate-700 font-extrabold uppercase">
                  <th className="p-4 w-40">{t('AI 서비스', 'AI Service')}</th>
                  <th className="p-4 w-32">{t('개발사', 'Vendor')}</th>
                  <th className="p-4">{t('무료 플랜', 'Free Plan')}</th>
                  <th className="p-4">{t('유료 요금', 'Paid Plan')}</th>
                  <th className="p-4">{t('컨텍스트 용량', 'Context Window')}</th>
                  <th className="p-4 text-center">{t('웹 검색', 'Web Search')}</th>
                  <th className="p-4 text-center">{t('이미지 생성', 'Image Gen')}</th>
                  <th className="p-4 text-center">{t('맞춤 챗봇', 'Custom Bots')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-800">
                {filteredModels.map((model) => {
                  const freePricing = getModelText(model.id, 'free') as string;
                  const paidPricing = getModelText(model.id, 'paid') as string;
                  return (
                    <tr key={model.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-4 font-extrabold text-slate-900 text-sm">
                        <div className="flex items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full ${model.badgeBg}`}></span>
                          <span>{model.name}</span>
                        </div>
                      </td>
                      <td className="p-4 text-slate-600 font-medium">{model.vendor}</td>
                      <td className="p-4 text-slate-700">{freePricing}</td>
                      <td className="p-4 font-bold text-blue-600">{paidPricing}</td>
                      <td className="p-4 font-medium text-slate-600">{model.contextWindow}</td>
                      <td className="p-4 text-center">
                        {model.webSearch ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <X className="w-4 h-4 text-slate-300 mx-auto" />}
                      </td>
                      <td className="p-4 text-center">
                        {model.imageGen ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <X className="w-4 h-4 text-slate-300 mx-auto" />}
                      </td>
                      <td className="p-4 text-center">
                        {model.customGPTsGems ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <X className="w-4 h-4 text-slate-300 mx-auto" />}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
};
