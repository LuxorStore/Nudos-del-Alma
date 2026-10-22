import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Clock, ShieldCheck, Heart, Sparkles } from 'lucide-react';

interface UrgencyAndFinalCTAProps {
  onOpenCheckout: () => void;
}

export const UrgencyAndFinalCTA: React.FC<UrgencyAndFinalCTAProps> = ({ onOpenCheckout }) => {
  // Real-time dynamic countdown timer (e.g. 18 hours 24 mins remaining)
  const [timeLeft, setTimeLeft] = useState({
    hours: 18,
    minutes: 42,
    seconds: 15
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#223125] text-[#FAF6F0] border-t border-[#C59B27]/20 relative overflow-hidden">
      {/* Warm ambient light blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#384E3C]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[960px] mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Urgency Countdown Bar */}
        <div className="bg-[#1C281F] rounded-2xl p-6 sm:p-8 border border-[#C59B27]/30 shadow-2xl max-w-xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5D580] mb-2">
            <Clock className="w-4 h-4 text-[#F5D580]" />
            <span>El Precio Especial de Lanzamiento Expira Pronto</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#FAF6F0] font-heading mb-4">
            Asegura Tu Cupo y Tus 6 Bonos de Regalo Antes de que Suba a $164 USD
          </h3>

          <div className="flex justify-center items-center gap-3 sm:gap-4">
            <div className="bg-[#2A3A2C] border border-[#C59B27]/20 rounded-xl px-3 sm:px-4 py-2 sm:py-3 min-w-[70px]">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#F5D580] font-heading tabular-nums">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="block text-[10px] uppercase font-semibold text-[#D8D2C7]">Horas</span>
            </div>
            <span className="text-2xl font-bold text-[#F5D580]">:</span>
            <div className="bg-[#2A3A2C] border border-[#C59B27]/20 rounded-xl px-3 sm:px-4 py-2 sm:py-3 min-w-[70px]">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#F5D580] font-heading tabular-nums">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="block text-[10px] uppercase font-semibold text-[#D8D2C7]">Minutos</span>
            </div>
            <span className="text-2xl font-bold text-[#F5D580]">:</span>
            <div className="bg-[#2A3A2C] border border-[#C59B27]/20 rounded-xl px-3 sm:px-4 py-2 sm:py-3 min-w-[70px]">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#F5D580] font-heading tabular-nums">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="block text-[10px] uppercase font-semibold text-[#D8D2C7]">Segundos</span>
            </div>
          </div>
        </div>

        {/* Emotive Message from Founder */}
        <div className="max-w-2xl mx-auto mb-14 text-center">
          <div className="w-14 h-14 rounded-full bg-[#2E3F32] border border-[#C59B27]/30 flex items-center justify-center text-[#F5D580] mx-auto mb-4">
            <Heart className="w-7 h-7 text-[#F5D580]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#FAF6F0] font-heading mb-4">
            Un Mensaje de Corazón a Corazón
          </h3>
          <p className="text-base text-[#E2DDD5] leading-relaxed mb-4 font-body">
            «Sé que a veces postergamos lo que nos hace bien porque la rutina nos absorbe. Pero tus manos tienen una sabiduría natural esperando ser despertada. Regálate este tiempo sagrado. No estás comprando un curso más; estás abriendo un santuario de paz, creatividad y abundancia en tu propia casa.»
          </p>
          <span className="text-sm font-bold text-[#F5D580] font-heading block">
            Mariela C. — Fundadora & Tejedora Principal
          </span>
          <span className="text-xs text-[#D8D2C7]">
            Escuela de Macramé Consciente Nudos del Alma
          </span>
        </div>

        {/* Official Brand Logo */}
        <div className="flex justify-center mb-10">
          <Logo variant="full" size="lg" />
        </div>

        {/* Big Final CTA Card */}
        <div className="bg-[#1C281F] rounded-3xl p-6 sm:p-10 border-2 border-[#C59B27] shadow-2xl max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F5D580] mb-2">
            <Sparkles className="w-4 h-4 text-[#F5D580]" />
            <span>Inscripción Inmediata</span>
          </div>

          <h4 className="text-xl sm:text-2xl font-bold text-[#FAF6F0] font-heading mb-1">
            Membresía Completa de por Vida
          </h4>
          <div className="text-xs text-[#D8D2C7] mb-5">
            Incluye todos los proyectos + los 6 bonos exclusivos valorados en $201 USD
          </div>

          <div className="flex items-baseline justify-center gap-2 mb-6">
            <span className="text-sm text-[#9CA3AF] line-through">$164 USD</span>
            <span className="text-4xl sm:text-5xl font-extrabold text-[#F5D580] font-heading">$47</span>
            <span className="text-sm font-semibold text-[#FAF6F0]">USD / Pago Único</span>
          </div>

          {/* Luminous Neon Golden Action Button */}
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
            className="btn-gold-glow w-full py-4.5 sm:py-5 px-6 text-sm sm:text-base font-bold tracking-wider uppercase cursor-pointer rounded-full shadow-xl mb-4 block text-[#1C281F] text-center"
          >
            QUIERO UNIRME A LA ESCUELA DE MACRAMÉ AHORA
          </a>

          <div className="flex items-center justify-center gap-2 text-xs text-[#D8D2C7] font-medium mb-4">
            <ShieldCheck className="w-4 h-4 text-[#F5D580]" />
            <span>Garantía Incondicional de 7 Días · Compra 100% Protegida</span>
          </div>

          {/* Direct WhatsApp phone assistance */}
          <div className="pt-4 border-t border-[#C59B27]/20 flex items-center justify-center">
            <a
              href="https://wa.me/573189766697?text=Hola!%20Tengo%20dudas%20para%20inscribirme%20por%20$47%20USD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-[#F5D580] hover:text-[#C59B27] transition-colors"
            >
              <span>¿Dudas con tu inscripción? WhatsApp / Tel: <strong>3189766697</strong> (+57 318 976 6697)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
