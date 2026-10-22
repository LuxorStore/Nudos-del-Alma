import React from 'react';
import { ROADMAP_STEPS } from '../data/landingData';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export const RoadmapTimeline: React.FC<{ onOpenCheckout: () => void }> = ({ onOpenCheckout }) => {
  return (
    <section className="py-16 md:py-24 bg-[#253428] text-[#FAF6F0] border-t border-[#C59B27]/20 relative overflow-hidden">
      {/* Organic background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#384E3C]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#F5D580] mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Tu Ruta de Transformación</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAF6F0] tracking-tight font-heading mb-4">
            El Paso a Paso Hacia Tu Maestría Textil y Tu Calma
          </h2>
          <p className="text-base text-[#E2DDD5] font-body">
            Diseñamos un método pedagógico progresivo para que avances a tu ritmo, sin abrumarte y celebrando cada logro tangible.
          </p>
        </div>

        {/* 3-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-12">
          {ROADMAP_STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-[#1C281F] rounded-2xl p-6 sm:p-8 border border-[#C59B27]/25 shadow-xl relative flex flex-col justify-between hover:border-[#C59B27] hover:shadow-2xl transition-all"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-extrabold font-heading text-[#F5D580]">
                  {step.number}
                </span>
                <span className="text-[11px] font-semibold text-[#FAF6F0] bg-[#2E3F32] px-2.5 py-1 rounded-md border border-[#C59B27]/20">
                  {step.timeframe}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#FAF6F0] font-heading mb-1">
                  {step.title}
                </h3>
                <h4 className="text-xs font-semibold text-[#F5D580] mb-3 uppercase tracking-wider">
                  {step.subtitle}
                </h4>
                <p className="text-xs sm:text-sm text-[#D8D2C7] leading-relaxed mb-5">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#C59B27]/15 bg-[#17231A] -mx-6 -mb-6 p-4 rounded-b-2xl">
                <div className="flex items-start gap-2 text-xs text-[#FAF6F0] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#F5D580] shrink-0 mt-0.5" />
                  <span>{step.keyAction}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Central motivation strip */}
        <div className="text-center">
          <button
            onClick={onOpenCheckout}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#F5D580] hover:text-[#C59B27] transition-colors cursor-pointer group bg-[#1C281F] px-6 py-3 rounded-full border border-[#C59B27]/30 hover:border-[#C59B27]"
          >
            <span>Quiero comenzar mi Paso 01 hoy mismo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#F5D580]" />
          </button>
        </div>
      </div>
    </section>
  );
};
