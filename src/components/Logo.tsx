import React from 'react';

interface LogoProps {
  variant?: 'full' | 'compact' | 'horizontal' | 'badge';
  theme?: 'dark' | 'light';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  theme = 'dark',
  className = '',
  size = 'md',
}) => {
  const isLight = theme === 'light';
  const officialLogoAsset = '/assets/aistudio/Logo_LP3_-_Nudos_del_Alma-removebg-preview_1fa37e92.png';

  // Badge / Icon only variant
  if (variant === 'badge' || variant === 'compact') {
    const badgeSizes = {
      sm: 'w-10 h-10',
      md: 'w-14 h-14',
      lg: 'w-20 h-20',
      xl: 'w-28 h-28'
    };

    return (
      <div className={`relative inline-block ${className}`}>
        <img
          src={officialLogoAsset}
          alt="Logo Nudos del Alma CR"
          className={`${badgeSizes[size] || badgeSizes.md} rounded-full object-contain p-1 shadow-sm border border-[#C59B27]/40 bg-[#FAF7F2] transition-transform duration-300 hover:scale-105`}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Horizontal variant (Used in Navbar, Footer, and Checkout Modal)
  if (variant === 'horizontal') {
    const heightSizes = {
      sm: 'h-10 sm:h-12',
      md: 'h-12 sm:h-14',
      lg: 'h-16 sm:h-18',
      xl: 'h-20 sm:h-24'
    };

    return (
      <div className={`flex items-center ${className}`}>
        <div className={isLight ? 'bg-[#FAF7F2] px-3 py-1.5 rounded-xl shadow-xs border border-[#C59B27]/30' : ''}>
          <img
            src={officialLogoAsset}
            alt="Logo Nudos del Alma CR - Macramé Consciente"
            className={`${heightSizes[size] || heightSizes.md} w-auto object-contain transition-transform duration-300 hover:scale-[1.02]`}
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    );
  }

  // Full Emblem Badge (Used in Urgency & Final CTA, and Brand Highlights)
  const fullBadgeSizes = {
    sm: 'max-w-[220px]',
    md: 'max-w-[280px]',
    lg: 'max-w-[340px] sm:max-w-[390px]',
    xl: 'max-w-[460px]'
  };

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className={`relative group p-3 sm:p-4 bg-[#FAF7F2]/95 backdrop-blur-xs rounded-2xl border border-[#C59B27]/40 shadow-xl overflow-hidden w-full ${fullBadgeSizes[size] || fullBadgeSizes.lg}`}>
        <img
          src={officialLogoAsset}
          alt="Escuela de Macramé: Nudos del Alma CR - Logo Oficial"
          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
          referrerPolicy="no-referrer"
        />
        {/* Subtle decorative glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#C59B27]/10 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
