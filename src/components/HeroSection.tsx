import React from 'react';
import { HERO_IMAGE } from '../data/landingData';
import { Sparkles, ShieldCheck, Clock, Award, Star, Heart } from 'lucide-react';

interface HeroSectionProps {
  onOpenCheckout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-10 md:pb-24 bg-[#F9F6F0]">
      {/* Decorative organic background aura */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-[#4A5D4E]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-[#C59B27]/10 blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Top Urgency / Welcome Announcement */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4A5D4E]/10 border border-[#4A5D4E]/20 text-[#4A5D4E] text-xs sm:text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#C59B27] animate-pulse" />
            <span>Matrículas Abiertas · Nueva Cohorte · Ahorras 71% Hoy (Sólo $47 USD)</span>
          </div>
        </div>

        {/* 2-Column Grid (Desktop) / 1-Column (Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & High-Converting CTAs */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest text-[#B8860B] font-semibold mb-3">
              <Sparkles className="w-4 h-4 text-[#C59B27]" />
              <span>Escuela de Macramé: Nudos del Alma</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-[#4A5D4E] leading-[1.18] tracking-tight mb-5 font-heading">
              Transforma Hilos en <span className="text-[#2D3748] relative">Paz Mental</span>, Creaciones Mágicas y Tu Propio Emprendimiento Consciente
            </h1>

            <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed mb-6 font-body max-w-xl">
              Aprende el arte meditativo del macramé desde cero absoluto. Desconéctate del estrés diario, sana tu mente con el movimiento consciente de tus manos y confecciona piezas de alta gama que enamoran y se venden solas desde el calor de tu hogar.
            </p>

            {/* Quick 3 Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-xs sm:text-sm text-[#2D3748] font-medium">
              <div className="flex items-center gap-2 bg-[#FFFFFF]/70 backdrop-blur-xs p-2.5 rounded-lg border border-[#4A5D4E]/10 shadow-xs">
                <Heart className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span>Terapia Antiestrés</span>
              </div>
              <div className="flex items-center gap-2 bg-[#FFFFFF]/70 backdrop-blur-xs p-2.5 rounded-lg border border-[#4A5D4E]/10 shadow-xs">
                <Award className="w-4 h-4 text-[#4A5D4E] shrink-0" />
                <span>Desde Cero a Pro</span>
              </div>
              <div className="flex items-center gap-2 bg-[#FFFFFF]/70 backdrop-blur-xs p-2.5 rounded-lg border border-[#4A5D4E]/10 shadow-xs">
                <Sparkles className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span>Emprende en Casa</span>
              </div>
            </div>

            {/* Luminous Neon Gold CTA Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-5">
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
                className="btn-gold-glow w-full sm:w-auto px-7 py-4 text-sm sm:text-base tracking-wider uppercase font-bold text-center cursor-pointer shadow-lg inline-flex items-center justify-center gap-2"
              >
                QUIERO UNIRME A LA ESCUELA DE MACRAMÉ AHORA
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#5A6A5E] font-medium pt-1">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#4A5D4E]" />
                Acceso Inmediato & De Por Vida
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#4A5D4E]" />
                Garantía 7 Días 100% Reembolsable
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-[#C59B27] fill-[#C59B27]" />
                +1,480 Alumnas Activas
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Botanical frame decoration */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#4A5D4E]/20 to-[#C59B27]/20 -rotate-1 transform -z-10" />

              {/* Main Photo: 44-year-old artisan woman at the wooden loom */}
              <div className="overflow-hidden rounded-2xl border-2 border-[#FFFFFF] shadow-2xl bg-white aspect-[4/3] sm:aspect-[4/3] relative group">
                <img
                  src="/hero_artisan_woman_1790123425974.jpg"
                  alt="Mujer artesana tejiendo macramé en telar de madera en su taller botánico"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 text-white text-xs sm:text-sm font-medium backdrop-blur-xs bg-black/30 p-2.5 rounded-lg border border-white/20">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-semibold text-white">Instructora y Fundadora</span>
                    <span className="text-amber-200 text-xs">Colección Nudos del Alma</span>
                  </div>
                </div>
              </div>

              {/* Floating Social Proof Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-[#4A5D4E]/15 shadow-xl max-w-[260px] hidden sm:block">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="flex text-[#C59B27]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C59B27]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-[#4A5D4E]">5.0 / 5.0</span>
                </div>
                <p className="text-xs text-[#2D3748] italic leading-snug">
                  "El macramé me sacó del túnel del estrés. Hoy tengo mi propio espacio creativo y vendo mis piezas."
                </p>
                <span className="block text-[10px] text-[#718096] font-semibold mt-1">
                  — Sandra M., 46 años · San José
                </span>
              </div>

              {/* Floating Technique Chip */}
              <div className="absolute -top-4 -right-3 sm:-right-5 bg-[#4A5D4E] text-white px-3.5 py-1.5 rounded-full shadow-lg text-xs font-semibold flex items-center gap-1.5 border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-[#F5C026]" />
                <span>Metodología Nudos del Alma™</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
