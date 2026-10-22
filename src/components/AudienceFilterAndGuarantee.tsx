import React from 'react';
import { Check, X, AlertCircle, HeartHandshake } from 'lucide-react';

export const AudienceFilterAndGuarantee: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#253428] text-[#FAF6F0] border-y border-[#C59B27]/20 relative overflow-hidden">
      {/* Background organic glow */}
      <div className="absolute top-1/2 -left-24 w-80 h-80 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-[#3E5542]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Bloque 8: Filtro de Audiencia (Para quién SÍ y para quién NO) */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5D580] block mb-2">
            Claridad & Transparencia Total
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAF6F0] font-heading mb-4">
            ¿Es Esta Escuela Para Ti?
          </h2>
          <p className="text-base text-[#E2DDD5] font-body">
            Queremos que tomes esta decisión con certeza absoluta. No buscamos convencer a todo el mundo, sino a quienes resonarán profundamente con esta experiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Para quién SÍ es */}
          <div className="bg-[#1C281F] rounded-2xl p-6 sm:p-8 border border-[#C59B27]/30 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#C59B27]/20">
              <div className="w-10 h-10 rounded-full bg-[#2E3F32] border border-[#C59B27]/30 text-[#F5D580] flex items-center justify-center font-bold">
                <Check className="w-5 h-5 text-[#F5D580]" />
              </div>
              <h3 className="text-xl font-bold text-[#FAF6F0] font-heading">
                Este programa SÍ es para ti si:
              </h3>
            </div>

            <ul className="space-y-4 text-sm text-[#D8D2C7]">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#2E3F32] text-[#F5D580] border border-[#C59B27]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Deseas un espacio sagrado de desconexión del estrés, las pantallas y las exigencias diarias.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#2E3F32] text-[#F5D580] border border-[#C59B27]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Eres principiante desde cero o ya haces macramé pero tus piezas quedan flojas, torcidas o sin soporte profesional.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#2E3F32] text-[#F5D580] border border-[#C59B27]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Sueñas con crear tu propia marca artesanal desde casa y ganar dinero sin descuidar tu tiempo en familia.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#2E3F32] text-[#F5D580] border border-[#C59B27]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Valoras el acompañamiento cálido y no quieres sentirte abandonada con dudas sin resolver.</span>
              </li>
            </ul>
          </div>

          {/* A quién NO es para */}
          <div className="bg-[#231C1A] rounded-2xl p-6 sm:p-8 border border-[#C06C47]/40 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#C06C47]/20">
              <div className="w-10 h-10 rounded-full bg-[#38221D] border border-[#C06C47]/30 text-[#E06A55] flex items-center justify-center font-bold">
                <AlertCircle className="w-5 h-5 text-[#E06A55]" />
              </div>
              <h3 className="text-xl font-bold text-[#FAF6F0] font-heading">
                Este programa NO es para ti si:
              </h3>
            </div>

            <ul className="space-y-4 text-sm text-[#D8D2C7]">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#38221D] text-[#E06A55] border border-[#C06C47]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5" />
                </div>
                <span>Buscas una fórmula mágica de enriquecimiento nocturno sin dedicar tiempo a practicar con paciencia.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#38221D] text-[#E06A55] border border-[#C06C47]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5" />
                </div>
                <span>No estás dispuesta a regalarte al menos 20 a 30 minutos a la semana para respirar y tejer con calma.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#38221D] text-[#E06A55] border border-[#C06C47]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5" />
                </div>
                <span>Prefieres tutoriales rápidos y desordenados de 30 segundos en redes sociales en lugar de un método estructurado de alta costura.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#38221D] text-[#E06A55] border border-[#C06C47]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5" />
                </div>
                <span>No tienes interés en cuidar los detalles ni en el bienestar que brinda el trabajo con las manos.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bloque 7: Badge de Garantía de 7 Días 100% Reembolsable */}
        <div className="max-w-3xl mx-auto bg-[#1C281F] rounded-2xl p-6 sm:p-10 border-2 border-[#C59B27] shadow-2xl relative">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#C59B27] flex items-center justify-center shrink-0 shadow-xl bg-[#FAF7F2]">
              <img
                src="/assets/aistudio/screen_7d257477.png"
                alt="Sello Artesanal de Garantía 7 Días 100% Satisfacción"
                className="w-full h-full object-cover scale-105"
                loading="lazy"
              />
            </div>

            <div className="flex-1">
              <div className="inline-block px-3 py-1 rounded-full bg-[#C59B27]/25 border border-[#C59B27]/40 text-[#F5D580] font-bold text-xs uppercase tracking-wider mb-2">
                Riesgo Cero Para Ti
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#FAF6F0] font-heading mb-2">
                Garantía Incondicional de 7 Días: 100% de tu Dinero de Vuelta
              </h3>
              <p className="text-sm text-[#D8D2C7] leading-relaxed">
                Ingresa hoy, explora la plataforma, descarga los bonos, mira las primeras lecciones y teje tus primeros nudos. Si en 7 días sientes que este método no cumple tus expectativas, te devolvemos cada centavo de tu inscripción. Sin preguntas, sin trabas y seguimos siendo amigas.
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2 mt-3 text-xs font-semibold text-[#F5D580]">
                <HeartHandshake className="w-4 h-4 text-[#F5D580]" />
                <span>Tu tranquilidad y tu confianza son lo primero.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
