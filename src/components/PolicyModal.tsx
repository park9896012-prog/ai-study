import React, { useState } from 'react';
import { X, Mail, ShieldCheck, FileText, Info, Send, CheckCircle2 } from 'lucide-react';
import { ContactFormState } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface PolicyModalProps {
  isOpen: boolean;
  activePolicy: 'about' | 'privacy' | 'terms' | 'contact' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, activePolicy, onClose }) => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState<ContactFormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
    sent: false
  });

  if (!isOpen || !activePolicy) return null;

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ ...formState, sent: true });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200 font-sans">
      <div className="bg-white rounded-3xl border border-slate-200 w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            {activePolicy === 'about' && <Info className="w-5 h-5 text-blue-600" />}
            {activePolicy === 'privacy' && <ShieldCheck className="w-5 h-5 text-emerald-600" />}
            {activePolicy === 'terms' && <FileText className="w-5 h-5 text-purple-600" />}
            {activePolicy === 'contact' && <Mail className="w-5 h-5 text-indigo-600" />}
            <h3 className="font-extrabold text-slate-900 text-lg">
              {activePolicy === 'about' && t('사이트 소개 (About Us)', 'About Us')}
              {activePolicy === 'privacy' && t('개인정보처리방침 (Privacy Policy)', 'Privacy Policy')}
              {activePolicy === 'terms' && t('이용약관 (Terms of Service)', 'Terms of Service')}
              {activePolicy === 'contact' && t('문의하기 및 연락처 (Contact Us)', 'Contact Us')}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-xs md:text-sm text-slate-700 leading-relaxed font-sans">
          
          {/* ABOUT US */}
          {activePolicy === 'about' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-slate-900">
                {t('알기쉽게 배우는 AI 사이트 안내', 'Easy AI Guide Platform Introduction')}
              </h4>
              <p>
                {t(
                  '알기쉽게 배우는 AI는 빠르게 변화하는 생성형 인공지능(ChatGPT, Google Gemini, Claude, Perplexity, Microsoft Copilot) 기술을 누구나 인공지능에 대한 사전 지식 없이도 쉽게 배우고 실무 및 일상에 바로 적용할 수 있도록 만들어진 오픈 교육 정보 플랫폼입니다.',
                  'Easy AI Guide is an open educational platform designed to empower anyone to learn and apply modern generative AI (ChatGPT, Google Gemini, Claude, Perplexity, Microsoft Copilot) to daily work and study without prior AI technical knowledge.'
                )}
              </p>
              
              <h5 className="font-bold text-slate-900 pt-2">{t('주요 운영 목적', 'Core Objectives')}</h5>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>{t('최신 5대 AI 서비스의 객관적인 특징 및 장단점, 가격 정책 비교', 'Objective comparison of top 5 AI features, pros & cons, and pricing')}</li>
                <li>{t('초보자, 중급자, 고급자 수준별 실무 중심 가이드라인 제공', 'Practical guidelines tailored for beginners, intermediate, and advanced users')}</li>
                <li>{t('1초 만에 복사해 사용하는 효율적인 프롬프트 작성 법 및 실시간 생성기 제공', '1-click copy prompt templates & real-time prompt builder')}</li>
                <li>{t('실무 예제와 시뮬레이션을 통한 따라하기 실습 커리큘럼 제공', 'Interactive hands-on tutorials with instant simulated AI responses')}</li>
              </ul>

              <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl mt-4">
                <p className="font-bold text-blue-900">{t('문의 및 운영자 정보', 'Contact & Operator Information')}</p>
                <p className="text-xs text-blue-800 mt-1">
                  {t('운영자 이메일: ', 'Operator Email: ')}<b>ju9896012@gmail.com</b><br />
                  {t('궁금하신 점이나 제휴 및 제안 문의는 이메일로 연락 부탁드립니다.', 'For questions, partnerships, or feedback, please reach out via email.')}
                </p>
              </div>
            </div>
          )}

          {/* PRIVACY POLICY */}
          {activePolicy === 'privacy' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-slate-900">
                {t('개인정보처리방침 (Google AdSense 정책 준수)', 'Privacy Policy (Google AdSense Compliant)')}
              </h4>
              <p className="text-slate-500 text-xs">{t('최초 시행일: 2026년 8월 11일', 'Effective Date: August 11, 2026')}</p>

              <p>
                {t(
                  '본 웹사이트(알기쉽게 배우는 AI)는 이용자의 개인정보 보호를 매우 중요시하며, 「개인정보 보호법」 및 Google AdSense 정책을 준수합니다.',
                  'This website (Easy AI Guide) respects user privacy and strictly complies with applicable Privacy Regulations and Google AdSense Policies.'
                )}
              </p>

              <h5 className="font-bold text-slate-900">{t('1. 수집하는 개인정보 항목 및 방법', '1. Information Collection & Usage')}</h5>
              <p>
                {t(
                  '본 사이트는 별도의 회원가입 없이 이용 가능하며, 일반적인 사용 시 개인 식별 정보(성명, 주민등록번호 등)를 직접 수집하지 않습니다. 다만 문의하기 폼을 통한 접수 시 이름, 이메일 주소를 수집할 수 있습니다.',
                  'No registration is required to view content. We do not collect personally identifiable information unless voluntarily submitted via the Contact Us form (name, email address).'
                )}
              </p>

              <h5 className="font-bold text-slate-900">{t('2. 쿠키(Cookie) 및 서드파티 광고 기술 사용 (Google AdSense)', '2. Cookies & Third-Party Advertising (Google AdSense)')}</h5>
              <p>
                {t(
                  '본 사이트는 Google AdSense를 비롯한 서드파티 광고 제공업체를 사용할 수 있습니다.',
                  'This website may use Google AdSense and third-party advertising partners.'
                )}
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs">
                <li>{t('Google을 포함한 타사 제공업체는 쿠키를 사용하여 사용자의 이전 웹사이트 방문 기록을 바탕으로 광고를 게재합니다.', 'Third-party vendors, including Google, use cookies to serve ads based on a user’s prior visits.')}</li>
                <li>{t('Google의 광고 쿠키를 사용하면 Google 및 파트너가 사용자의 본 사이트 및 기타 사이트 방문을 기반으로 맞춤형 광고를 제공할 수 있습니다.', 'Google’s use of advertising cookies enables it and its partners to serve ads based on visits to this site and/or other sites on the Internet.')}</li>
                <li>{t('이용자는 Google 광고 설정을 방문하여 맞춤형 광고를 수신 거부할 수 있습니다.', 'Users may opt out of personalized advertising by visiting Google Ads Settings.')}</li>
              </ul>

              <h5 className="font-bold text-slate-900">{t('3. 개인정보 문의처', '3. Privacy Contact')}</h5>
              <p className="text-xs">
                {t('개인정보 보호 관련 문의 사항은 아래 이메일로 접수해주시기 바랍니다.', 'For privacy questions, please contact us at:')}<br />
                <b>Email: ju9896012@gmail.com</b>
              </p>
            </div>
          )}

          {/* TERMS OF SERVICE */}
          {activePolicy === 'terms' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-slate-900">{t('이용약관 (Terms of Service)', 'Terms of Service')}</h4>
              
              <h5 className="font-bold text-slate-900">{t('제 1 조 (목적)', 'Article 1 (Purpose)')}</h5>
              <p>
                {t(
                  '본 약관은 "알기쉽게 배우는 AI" 웹사이트가 제공하는 모든 정보 및 서비스의 이용조건과 절차를 규정함을 목적의 합니다.',
                  'These terms govern the terms and conditions for using all information and educational content provided on the Easy AI Guide website.'
                )}
              </p>

              <h5 className="font-bold text-slate-900">{t('제 2 조 (면책 조항 및 책임의 한계)', 'Article 2 (Disclaimer & Limitation of Liability)')}</h5>
              <p>
                {t(
                  '본 사이트에서 제공되는 AI 관련 정보, 프롬프트 예시, 가격 및 서비스 비교 자료는 교육 및 참고 목적으로 작성되었습니다. 각 AI 서비스(ChatGPT, Gemini, Claude, Perplexity, Copilot)의 정책 변경이나 업데이트에 따라 실제와 차이가 있을 수 있으며, 본 사이트는 이에 따른 직접적·간접적 손해에 책임을 지지 않습니다.',
                  'All AI model comparisons, pricing data, and prompts provided on this site are for educational and informational purposes only. Third-party AI policies may change over time without notice.'
                )}
              </p>

              <h5 className="font-bold text-slate-900">{t('제 3 조 (저작권)', 'Article 3 (Copyright)')}</h5>
              <p>
                {t(
                  '본 사이트에 게시된 독자적인 가이드라인 및 템플릿의 저작권은 사이트 운영자에게 있습니다.',
                  'Original guides, structured frameworks, and custom prompt templates belong to the site operator.'
                )}
              </p>
            </div>
          )}

          {/* CONTACT US */}
          {activePolicy === 'contact' && (
            <div className="space-y-4">
              <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-indigo-950 text-base">{t('공식 문의처 안내', 'Official Contact Info')}</h4>
                  <p className="text-xs text-indigo-800 mt-0.5">
                    {t('공식 이메일: ', 'Official Email: ')}<b className="underline">ju9896012@gmail.com</b>
                  </p>
                </div>
                <Mail className="w-8 h-8 text-indigo-600 shrink-0" />
              </div>

              {formState.sent ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto animate-bounce" />
                  <h4 className="font-extrabold text-emerald-900 text-base">
                    {t('문의가 성공적으로 전송되었습니다!', 'Message Sent Successfully!')}
                  </h4>
                  <p className="text-xs text-emerald-700">
                    {t(
                      '작성하신 문의 사항을 확인 후 ju9896012@gmail.com을 통해 신속히 답변드리겠습니다.',
                      'We will review your inquiry and get back to you promptly via ju9896012@gmail.com.'
                    )}
                  </p>
                  <button
                    onClick={() => setFormState({ ...formState, sent: false })}
                    className="mt-2 text-xs font-bold text-emerald-800 underline cursor-pointer"
                  >
                    {t('새로운 문의 작성하기', 'Send Another Message')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitContact} className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('성함 / 닉네임', 'Full Name / Nickname')}
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder={t('홍길동', 'John Doe')}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('회신받으실 이메일 주소', 'Your Email Address')}
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="example@email.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('문의 제목', 'Subject')}
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder={t('사이트 내용 제휴 및 질문 드립니다.', 'Inquiry regarding AI guides & partnership')}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t('문의 내용', 'Message')}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder={t('궁금하신 내용을 입력해주세요...', 'Type your question or message here...')}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t('문의 전송하기', 'Send Message')}</span>
                  </button>
                </form>
              )}

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
          >
            {t('닫기', 'Close')}
          </button>
        </div>

      </div>
    </div>
  );
};
