import React from 'react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenCheckout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#F9F6F0]/95 backdrop-blur-md border-b border-[#4A5D4E]/10 transition-colors">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Brand wordmark & emblem */}
        <a href="#" className="flex items-center gap-2 group cursor-pointer focus-visible:outline-[#C59B27] rounded-md">
          <Logo variant="horizontal" size="md" />
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#2D3748]">
          <a
            href="#metodologia"
            className="hover:text-[#4A5D4E] transition-colors hover:underline underline-offset-4 whitespace-nowrap"
          >
            Metodología
          </a>
          <a
            href="#beneficios"
            className="hover:text-[#4A5D4E] transition-colors hover:underline underline-offset-4 whitespace-nowrap"
          >
            Beneficios
          </a>
          <a
            href="#proyectos"
            className="hover:text-[#4A5D4E] transition-colors hover:underline underline-offset-4 whitespace-nowrap"
          >
            Catálogo
          </a>
          <a
            href="#bonos"
            className="hover:text-[#4A5D4E] transition-colors hover:underline underline-offset-4 whitespace-nowrap"
          >
            Bonos
          </a>
          <a
            href="#preguntas"
            className="hover:text-[#4A5D4E] transition-colors hover:underline underline-offset-4 whitespace-nowrap"
          >
            Preguntas
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2 sm:gap-3">

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
            className="btn-gold-glow px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold tracking-wide uppercase cursor-pointer whitespace-nowrap text-center inline-block"
          >
            Inscribirme por $47 USD
          </a>
        </div>
      </div>
    </header>
  );
};
