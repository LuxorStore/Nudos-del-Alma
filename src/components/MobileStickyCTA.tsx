import React, { useState, useEffect } from 'react';
import { ShieldCheck, Sparkles } from 'lucide-react';

interface MobileStickyCTAProps {
  onOpenCheckout: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onOpenCheckout }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after user scrolls past 350px (after hero CTA)
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Barra de inscripción rápida"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#F9F6F0]/95 backdrop-blur-md border-t border-[#4A5D4E]/20 px-3 py-2.5 shadow-2xl transition-all duration-300"
      style={{ maxHeight: '12vh' }} // Strictly complies with the 15% mobile viewport cap
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1">
            <span className="text-[10px] text-[#718096] line-through">$164</span>
            <span className="text-base font-extrabold text-[#4A5D4E] font-heading">$47 USD</span>
          </div>
          <span className="text-[9px] text-[#B8860B] font-semibold flex items-center gap-0.5">
            <ShieldCheck className="w-2.5 h-2.5" />
            7 días garantía
          </span>
        </div>

        <a
          href="#precio"
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById('precio');
            if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
              const leadInput = document.getElementById('lead-name');
              if (leadInput) {
                setTimeout(() => leadInput.focus(), 500);
              }
            } else {
              onOpenCheckout();
            }
          }}
          className="btn-gold-glow flex-1 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-center cursor-pointer shadow-md whitespace-nowrap"
        >
          Inscribirme por $47 USD
        </a>
      </div>
    </aside>
  );
};
