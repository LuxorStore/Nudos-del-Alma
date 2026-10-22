import React from 'react';
import { Heart, Sparkles, Compass, CheckCircle2, Feather } from 'lucide-react';

export const ValueIntro: React.FC = () => {
  return (
    <section id="metodologia" className="py-16 md:py-24 bg-[#243327] text-[#FAF6F0] border-y border-[#C59B27]/20 relative overflow-hidden">
      {/* Subtle organic warm glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#3E5542]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[840px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#F5D580] mb-2">
            <Feather className="w-3.5 h-3.5" />
            <span>Nuestra Filosofía Única</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAF6F0] tracking-tight font-heading mb-4">
            ¿Por Qué el Macramé No Es Solo un Hobby, Sino Tu Refugio de Sanación?
          </h2>
          <p className="text-base text-[#E2DDD5] leading-relaxed font-body">
            En un mundo hiperconectado y apresurado, tus manos necesitan volver a sentir lo natural. La <strong className="text-white">Metodología Nudos del Alma™</strong> une el rigor del diseño textil contemporáneo con prácticas conscientes de calma interior.
          </p>
        </div>

        {/* Card with earthy dark background and warm gold border */}
        <div
          className="bg-[#1C281F] rounded-2xl p-6 sm:p-10 border border-[#C59B27]/30 relative shadow-2xl"
        >
          {/* Subtle warm corner accent */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#C59B27]/15 to-transparent rounded-tr-2xl pointer-events-none" />

          <div className="flex items-center gap-3 pb-6 border-b border-[#C59B27]/20 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#2E3F32] flex items-center justify-center text-[#F5D580] shrink-0 border border-[#C59B27]/25">
              <Sparkles className="w-6 h-6 text-[#F5D580]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#FAF6F0] font-heading">
                Los 3 Pilares de la Metodología "Nudos del Alma"
              </h3>
              <p className="text-xs sm:text-sm text-[#D5CFC5]">
                Diseñado para mujeres que buscan paz, expresión artística e independencia económica.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Pilar 1 */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#26362A] border border-[#C59B27]/15 transition-all hover:bg-[#2C3E30] hover:border-[#C59B27]/30">
              <div className="w-10 h-10 rounded-full bg-[#C59B27] text-[#1C281F] flex items-center justify-center font-extrabold text-sm shrink-0 shadow-sm">
                01
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Heart className="w-4 h-4 text-[#F5D580]" />
                  <h4 className="text-base font-semibold text-[#FAF6F0] font-heading">
                    Terapia Creativa & Neuro-regulación del Estrés
                  </h4>
                </div>
                <p className="text-sm text-[#D8D2C7] leading-relaxed">
                  El movimiento simétrico y rítmico de tus dedos sobre las fibras de algodón activa el sistema nervioso parasimpático. Reduce los niveles de cortisol, silencia los pensamientos rumiantes y te sumerge en un estado de presencia plena (flow state) desde el primer nudo.
                </p>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#26362A] border border-[#C59B27]/15 transition-all hover:bg-[#2C3E30] hover:border-[#C59B27]/30">
              <div className="w-10 h-10 rounded-full bg-[#C59B27] text-[#1C281F] flex items-center justify-center font-extrabold text-sm shrink-0 shadow-sm">
                02
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Compass className="w-4 h-4 text-[#F5D580]" />
                  <h4 className="text-base font-semibold text-[#FAF6F0] font-heading">
                    Técnica de Alta Confección & Simetría Textil
                  </h4>
                </div>
                <p className="text-sm text-[#D8D2C7] leading-relaxed">
                  Aprenderás los secretos de los artesanos de lujo: cómo mantener la tensión exacta para que los bolsos no se tuerzan, cómo rematar los hilos sin dejar nudos visibles y cómo estructurar piezas grandes sin que se desarmen con el uso continuo.
                </p>
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#26362A] border border-[#C59B27]/15 transition-all hover:bg-[#2C3E30] hover:border-[#C59B27]/30">
              <div className="w-10 h-10 rounded-full bg-[#C59B27] text-[#1C281F] flex items-center justify-center font-extrabold text-sm shrink-0 shadow-sm">
                03
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#F5D580]" />
                  <h4 className="text-base font-semibold text-[#FAF6F0] font-heading">
                    Emprendimiento Rentable & Respetuoso desde Casa
                  </h4>
                </div>
                <p className="text-sm text-[#D8D2C7] leading-relaxed">
                  Te entregamos las herramientas prácticas para monetizar tu don: fórmula de precios reales (sin perder dinero), catálogo digital de presentación para clientes, consejos para fotografiar tus piezas con tu celular y empaques con intención que dejan huella.
                </p>
              </div>
            </div>
          </div>

          {/* Emotional Quote callout */}
          <div className="mt-8 p-4 sm:p-5 rounded-xl bg-[#26362A] border-l-4 border-[#C59B27] text-left">
            <p className="text-xs sm:text-sm text-[#E2DDD5] italic font-serif-accent leading-relaxed">
              «Al anudar un cordón, no sólo estás creando un bolso o un tapiz. Estás tejiendo tu propia calma, desatando nudos emocionales y demostrándote que tus manos son capaces de materializar belleza infinita.»
            </p>
            <span className="block text-xs font-semibold text-[#F5D580] mt-2 font-heading">
              — Mariela C., Creadora de Escuela Nudos del Alma
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
