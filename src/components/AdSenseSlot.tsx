import React, { useState } from 'react';
import { Info, HelpCircle } from 'lucide-react';

interface AdSenseSlotProps {
  slotId?: string;
  type?: 'banner' | 'in-article' | 'sidebar' | 'footer';
  className?: string;
}

export const AdSenseSlot: React.FC<AdSenseSlotProps> = ({
  slotId = '1234567890',
  type = 'banner',
  className = ''
}) => {
  const [showInfo, setShowInfo] = useState(false);

  // Height and aspect styles based on type
  const styleMap = {
    banner: 'h-24 md:h-32 w-full',
    'in-article': 'h-40 md:h-52 w-full my-6',
    sidebar: 'h-64 w-full',
    footer: 'h-20 w-full'
  };

  return (
    <div className={`relative bg-slate-100/80 border border-dashed border-slate-300 rounded-xl p-4 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-200 hover:border-slate-400 ${styleMap[type]} ${className}`}>
      {/* Real AdSense Ins tag placeholder */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '100%' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>

      {/* Visible placeholder badge for AdSense compliance preview */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-100 to-slate-50 flex flex-col items-center justify-center p-3 select-none">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200 shadow-2xs mb-1">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span>Google AdSense 광고 스팟 ({type})</span>
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="text-slate-400 hover:text-slate-700 ml-1"
            title="AdSense 승인 후 광고가 자동 게재됩니다."
            aria-label="광고 영역 안내"
          >
            <HelpCircle className="w-3.5 h-3.5" />
          </button>
        </div>
        <p className="text-[11px] text-slate-400 max-w-sm hidden sm:block">
          {type === 'banner' && '상단/하단 가로형 배너 스팟입니다.'}
          {type === 'in-article' && '본문 사이에 자연스럽게 배치되는 반응형 매치드 광고 스팟입니다.'}
          {type === 'sidebar' && '사이드바 고정형 세로 광고 영역입니다.'}
          {type === 'footer' && '푸터 위 하단 가로형 광고 영역입니다.'}
        </p>

        {showInfo && (
          <div className="mt-2 text-[11px] bg-slate-800 text-slate-100 p-2 rounded-md shadow-lg max-w-xs z-10 flex items-start gap-1">
            <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-blue-400" />
            <span>애드센스 승인 후 index.html의 주석을 해제하고 Publisher ID를 입력하면 실제 광고가 표시됩니다.</span>
          </div>
        )}
      </div>
    </div>
  );
};
