import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/landingData';
import { Star, Quote, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const BENEFITS_LIST = [
  {
    title: 'Silencia el Ruido Mental y Calma la Ansiedad',
    description: 'Transforma 30 minutos de tu día en una meditación táctil. Sentirás cómo la mente se apacigua mientras repites los nudos fundamentales con respiración pausada.',
    emoji: '🧘‍♀️'
  },
  {
    title: 'Piezas Impecables que Despiertan Admiración',
    description: 'Aprenderás técnicas profesionales de tensión y terminación limpia. Familiares y amigos se sorprenderán al ver que no son piezas compradas en tiendas de lujo, sino hechas por ti.',
    emoji: '✨'
  },
  {
    title: 'Genera Ingresos Reales desde la Comodidad de tu Casa',
    description: 'El macramé de autor se comercializa hoy entre $35 y $120 USD por pieza. Con un margen de ganancia de hasta 300% sobre el costo de la cuerda, amortizarás tu inversión rápidamente.',
    emoji: '💰'
  },
  {
    title: 'Cero Frustración: Todo Explicado Nudo por Nudo',
    description: 'Tomas de cámara en primer plano, con iluminación clara y ritmo didáctico sin saltos inexplicables ni tutoriales confusos. Puedes pausar y repetir tantas veces como necesites.',
    emoji: '🎥'
  },
  {
    title: 'Proveedores Confiables a Precios de Fábrica',
    description: 'Olvídate de gastar de más en tiendas de manualidades caras. Con nuestro directorio exclusivo sabrás exactamente dónde comprar cuerdas de primera calidad al mayoreo.',
    emoji: '📦'
  },
  {
    title: 'Comunidad de Mujeres que Te Abrazan y Te Impulsan',
    description: 'Nunca más tejerás sola. Accede a un círculo cálido donde celebramos cada uno de tus nudos terminados, intercambiamos consejos y nos apoyamos mutuamente.',
    emoji: '🫂'
  }
];

export const BenefitsSection: React.FC = () => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <section id="beneficios" className="py-16 md:py-24 bg-[#F9F6F0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#B8860B] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Beneficios Tangibles y Emocionales</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4A5D4E] tracking-tight font-heading mb-4">
            Lo Que Este Viaje Hará Por Tu Mente, Tus Manos y Tu Economía
          </h2>
          <p className="text-base text-[#4A5568] font-body">
            No se trata simplemente de aprender a atar cuerdas. Se trata de reconectar con tu poder creador y construir algo de lo que te sientas profundamente orgullosa.
          </p>
        </div>

        {/* Grid de Beneficios: 2 col en PC / 1 col en móvil */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-20">
          {BENEFITS_LIST.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-[#4A5D4E]/12 shadow-xs transition-all hover:border-[#4A5D4E]/30 hover:shadow-md group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#4A5D4E]/10 border border-[#4A5D4E]/15 flex items-center justify-center text-2xl shrink-0 mt-0.5 shadow-xs group-hover:scale-110 transition-transform">
                <span role="img" aria-label={benefit.title} className="select-none leading-none">
                  {benefit.emoji}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-[#2D3748] font-heading mb-1.5">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Block */}
        <div className="pt-6 border-t border-[#4A5D4E]/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C59B27] block mb-1">
                Prueba Social & Resultados Reales
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#4A5D4E] font-heading">
                Historias de Nuestras Alumnas Tejedoras
              </h3>
            </div>

            {/* Testimonials Navigation buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                aria-label="Testimonio anterior"
                className="w-10 h-10 rounded-full border border-[#4A5D4E]/20 bg-white text-[#4A5D4E] hover:bg-[#4A5D4E] hover:text-white transition-colors flex items-center justify-center cursor-pointer shadow-xs"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                aria-label="Siguiente testimonio"
                className="w-10 h-10 rounded-full border border-[#4A5D4E]/20 bg-white text-[#4A5D4E] hover:bg-[#4A5D4E] hover:text-white transition-colors flex items-center justify-center cursor-pointer shadow-xs"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Featured Testimonial Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#4A5D4E]/12 shadow-md relative overflow-hidden">
            <div className="absolute top-4 right-6 text-[#C59B27]/15">
              <Quote className="w-20 h-20" />
            </div>

            {(() => {
              const item = TESTIMONIALS_DATA[activeTestimonialIdx];
              return (
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-8">
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-4 text-[#C59B27]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#C59B27]" />
                      ))}
                      <span className="ml-2 text-xs font-bold text-[#4A5D4E]">Experiencia 5 Estrellas</span>
                    </div>

                    <p className="text-base sm:text-lg text-[#2D3748] italic font-body leading-relaxed mb-6">
                      «{item.quote}»
                    </p>

                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-13 h-13 rounded-full bg-[#4A5D4E] text-[#F9F6F0] flex items-center justify-center font-bold text-base font-heading shadow-xs">
                        {item.name.charAt(0)}{item.name.split(' ')[1]?.charAt(0) || ''}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#2D3748] font-heading">
                          {item.name}, <span className="text-sm font-normal text-[#718096]">{item.age} años</span>
                        </h4>
                        <p className="text-xs text-[#4A5D4E] font-medium">
                          {item.role} · {item.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-4 bg-[#F9F6F0] p-4 sm:p-5 rounded-xl border border-[#4A5D4E]/10">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#B8860B] block mb-1">
                      Piezas Terminadas con Éxito
                    </span>
                    <p className="text-sm font-semibold text-[#4A5D4E] mb-2 font-heading">
                      {item.finishedProject}
                    </p>
                    <p className="text-xs text-[#718096] leading-relaxed">
                      {item.story}
                    </p>
                  </div>
                </div>
              );
            })()}

            {/* Testimonials thumbnail dots */}
            <div className="flex justify-center gap-2 mt-8">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonialIdx(idx)}
                  aria-label={`Ver testimonio ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    activeTestimonialIdx === idx ? 'w-8 bg-[#4A5D4E]' : 'w-2.5 bg-[#4A5D4E]/20 hover:bg-[#4A5D4E]/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
