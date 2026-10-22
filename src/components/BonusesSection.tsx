import React, { useState } from 'react';
import { BONUSES_DATA } from '../data/landingData';
import { Gift, Check, Calculator, Sparkles, TrendingUp } from 'lucide-react';

export const BonusesSection: React.FC = () => {
  // Interactive mini demo of the pricing calculator included in Bonus 5
  const [materialCost, setMaterialCost] = useState(8);
  const [craftHours, setCraftHours] = useState(4);
  const [hourlyWage, setHourlyWage] = useState(10);

  const totalCost = materialCost + craftHours * hourlyWage;
  const suggestedRetailPrice = Math.round(totalCost * 1.8);
  const netProfit = suggestedRetailPrice - totalCost;

  const totalBonusValue = BONUSES_DATA.reduce((acc, curr) => acc + curr.originalPrice, 0);

  return (
    <section id="bonos" className="py-16 md:py-24 bg-[#233226] text-[#FAF6F0] border-t border-[#C59B27]/20 relative overflow-hidden">
      {/* Background warm glowing accents */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#384F3B]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#F5D580] mb-2">
            <Gift className="w-4 h-4 text-[#F5D580]" />
            <span>Paquete de Regalos de Bienvenida</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAF6F0] tracking-tight font-heading mb-4">
            6 Bonificaciones Exclusivas Valoradas en ${totalBonusValue} USD
          </h2>
          <p className="text-base text-[#E2DDD5] font-body">
            Si te inscribes durante esta convocatoria, te llevas todos estos recursos complementarios de forma <strong className="text-[#F5D580]">100% GRATIS</strong> dentro de tu acceso.
          </p>
        </div>

        {/* Grid de 6 Bonos Exclusivos con cintas de REGALO INCLUIDO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {BONUSES_DATA.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-[#1C281F] rounded-2xl p-6 sm:p-7 border border-[#C59B27]/25 shadow-xl relative flex flex-col justify-between overflow-hidden hover:border-[#C59B27] transition-all hover:shadow-2xl"
            >
              {/* Ribbon REGALO INCLUIDO */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#C59B27] to-[#B8860B] text-[#1C281F] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                {bonus.tag}
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-[#F5D580] uppercase tracking-wider">
                    Bono Exclusivo #{bonus.id}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#FAF6F0] font-heading mb-1">
                  {bonus.title}
                </h3>
                <p className="text-xs font-semibold text-[#F5D580] mb-3">
                  {bonus.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#D8D2C7] leading-relaxed mb-4">
                  {bonus.description}
                </p>

                {/* Features checklist */}
                <ul className="space-y-2 mb-4 pt-3 border-t border-[#C59B27]/15">
                  {bonus.includes.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#E2DDD5]">
                      <div className="w-4 h-4 rounded-full bg-[#2E3F32] text-[#F5D580] border border-[#C59B27]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-[#C59B27]/20 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#9CA3AF] line-through block">
                    Precio Normal: ${bonus.originalPrice} USD
                  </span>
                  <span className="text-xs font-bold text-[#F5D580]">
                    Hoy: ¡Completamente Gratis!
                  </span>
                </div>
                <Sparkles className="w-5 h-5 text-[#F5D580]" />
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Demo of Bonus 5: Calculadora de Rentabilidad */}
        <div className="bg-[#1C281F] rounded-2xl p-6 sm:p-8 border-2 border-[#C59B27]/40 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E3F32] border border-[#C59B27]/30 text-[#F5D580] text-xs font-bold mb-3">
                <Calculator className="w-3.5 h-3.5" />
                <span>Prueba una Muestra del Bono #5 en Vivo</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#FAF6F0] font-heading mb-2">
                Simulador de Ganancias de Tus Piezas
              </h3>
              <p className="text-xs sm:text-sm text-[#D8D2C7] leading-relaxed mb-4">
                El error #1 de las artesanas es cobrar únicamente el costo de la cuerda. Mueve las barras para ver cómo valorar tus horas de trabajo consciente y obtener un negocio digno y rentable.
              </p>

              {/* Sliders */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-[#FAF6F0] mb-1">
                    <span>Costo de Materiales (Algodón + Asas):</span>
                    <span className="text-[#F5D580] font-bold">${materialCost} USD</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="25"
                    value={materialCost}
                    onChange={(e) => setMaterialCost(Number(e.target.value))}
                    className="w-full accent-[#C59B27] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-[#FAF6F0] mb-1">
                    <span>Horas de Tejido Invertidas:</span>
                    <span className="text-[#F5D580] font-bold">{craftHours} horas</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={craftHours}
                    onChange={(e) => setCraftHours(Number(e.target.value))}
                    className="w-full accent-[#C59B27] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-[#FAF6F0] mb-1">
                    <span>Tu Valor por Hora de Creación:</span>
                    <span className="text-[#F5D580] font-bold">${hourlyWage} USD / hora</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    value={hourlyWage}
                    onChange={(e) => setHourlyWage(Number(e.target.value))}
                    className="w-full accent-[#C59B27] cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Results display box */}
            <div className="lg:w-1/2 w-full bg-[#17231A] rounded-xl p-5 sm:p-6 border border-[#C59B27]/30 text-center flex flex-col justify-between shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D8D2C7] block mb-2">
                Resultado Sugerido por la Fórmula Nudos del Alma
              </span>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-[#26362A] p-3 rounded-lg border border-[#C59B27]/20">
                  <span className="text-[11px] text-[#A8A29E] block">Costo de Producción</span>
                  <span className="text-lg font-bold text-[#FAF6F0]">${totalCost} USD</span>
                </div>
                <div className="bg-[#26362A] p-3 rounded-lg border border-[#C59B27]/20">
                  <span className="text-[11px] text-[#A8A29E] block">Tu Ganancia Neta</span>
                  <span className="text-lg font-bold text-[#F5D580]">+${netProfit} USD</span>
                </div>
              </div>

              <div className="bg-[#2A3B2D] text-white p-4 rounded-xl border border-[#C59B27]/30 shadow-md">
                <span className="text-xs uppercase tracking-wider text-[#F5D580] block mb-1 font-bold">
                  Precio de Venta Justo Recomendado al Público
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                  ${suggestedRetailPrice} USD
                </span>
                <p className="text-[11px] text-[#D8D2C7] mt-1">
                  (Incluye tu mano de obra, insumos y margen de reinversión para tu taller)
                </p>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-xs text-[#F5D580] font-semibold mt-3">
                <TrendingUp className="w-3.5 h-3.5 text-[#F5D580]" />
                <span>La plantilla completa en Excel y Sheets viene incluida en el Bono #5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
