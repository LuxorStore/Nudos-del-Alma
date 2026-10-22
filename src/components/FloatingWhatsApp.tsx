import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, PhoneCall } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '3189766697';
  const formattedPhone = '+57 318 976 6697';
  const whatsappUrl = `https://wa.me/573189766697?text=${encodeURIComponent(
    '¡Hola! Me interesa unirme a la Escuela de Macramé Nudos del Alma con el precio especial de $47 USD. ¿Me podrían dar más información?'
  )}`;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-45 flex flex-col items-end">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-[#4A5D4E]/20 overflow-hidden animate-fade-in text-left">
          {/* Header */}
          <div className="bg-[#2D3E31] text-[#FAF6F0] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#3D5242] flex items-center justify-center text-[#F5D580] font-bold font-heading border border-[#C59B27]/40">
                  NA
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#2D3E31]" />
              </div>
              <div>
                <h4 className="text-sm font-bold font-heading text-white">Soporte Nudos del Alma</h4>
                <p className="text-[11px] text-[#D8D2C7] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Asesora en línea · Respuesta rápida
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#D8D2C7] hover:text-white transition-colors cursor-pointer p-1"
              aria-label="Cerrar chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#FAF7F2] text-xs text-[#2D3748] space-y-2.5">
            <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-xs border border-[#4A5D4E]/10">
              <p className="leading-relaxed">
                👋 ¡Hola! ¿Tienes alguna pregunta sobre los proyectos, materiales o el pago promocional de <strong>$47 USD</strong>?
              </p>
            </div>
            <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-xs border border-[#4A5D4E]/10">
              <p className="leading-relaxed text-[#5A6A5E]">
                Línea oficial WhatsApp / Llamadas: <strong className="text-[#2D3E31]">{formattedPhone}</strong>
              </p>
            </div>
          </div>

          {/* Action button */}
          <div className="p-3 bg-white border-t border-[#4A5D4E]/10 flex flex-col gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-xl transition-colors shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chatear por WhatsApp ({phoneNumber})</span>
            </a>
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center gap-1.5 text-[11px] text-[#4A5D4E] hover:text-[#2D3E31] font-semibold py-1"
            >
              <PhoneCall className="w-3 h-3" />
              <span>O llamar al {phoneNumber}</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Button Circle */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir WhatsApp"
          className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border-2 border-white"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 text-[9px] font-bold text-white items-center justify-center">1</span>
          </span>
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7 fill-white/20" />}
        </button>
      </div>
    </div>
  );
};
