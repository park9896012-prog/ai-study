import React from 'react';

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

    </div>
  );
};
