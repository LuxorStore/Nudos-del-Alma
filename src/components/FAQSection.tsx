import React, { useState } from 'react';
import { FAQS_DATA } from '../data/landingData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  // Only one question open at a time as requested in brief: "Solo una pregunta abierta a la vez"
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="preguntas" className="py-16 md:py-24 bg-[#FAF7F2] border-t border-[#4A5D4E]/10">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#C59B27] mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Despeja Todas Tus Dudas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4A5D4E] tracking-tight font-heading mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-base text-[#4A5568] font-body">
            Aquí resolvemos con honestidad las preguntas más habituales de nuestras futuras alumnas.
          </p>
        </div>

        {/* Accordion Component */}
        <div className="space-y-3.5">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-[#4A5D4E]/12 overflow-hidden shadow-xs transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full py-4.5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-heading font-semibold text-sm sm:text-base text-[#2D3748] hover:text-[#4A5D4E] transition-colors cursor-pointer"
                >
                  <span className="flex-1 text-left">{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#4A5D4E]/10 text-[#4A5D4E] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#4A5D4E] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#4A5568] leading-relaxed border-t border-[#4A5D4E]/5 bg-[#FAF7F2]/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Warm Support Help Note */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-[#4A5D4E]/12 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-[#4A5D4E]/10 text-[#4A5D4E] flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-[#4A5D4E]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#2D3748] font-heading">
                ¿Tienes una duda muy específica que no aparece aquí?
              </h4>
              <p className="text-xs text-[#718096]">
                Escríbenos directamente y nuestro equipo te responderá con gusto y cariño.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/573189766697?text=Hola!%20Tengo%20una%20pregunta%20sobre%20la%20Escuela%20de%20Macramé"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold whitespace-nowrap shadow-xs transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp: 3189766697</span>
          </a>
        </div>
      </div>
    </section>
  );
};
