import React from 'react';
import { Logo } from './Logo';
import { ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF7F2] border-t border-[#4A5D4E]/15 py-12 md:py-16 text-[#4A5568]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#4A5D4E]/10">
          {/* Logo on Footer */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Logo variant="horizontal" size="md" />
            <p className="text-xs text-[#718096] mt-3 max-w-sm">
              Programa de formación integral en macramé de alta costura, bienestar interior y emprendimiento artesanal consciente.
            </p>
          </div>

          {/* Quick links & Contact */}
          <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
            <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-medium text-[#2D3748]">
              <a href="#metodologia" className="hover:text-[#4A5D4E] transition-colors">
                Metodología
              </a>
              <a href="#proyectos" className="hover:text-[#4A5D4E] transition-colors">
                Catálogo
              </a>
              <a href="#beneficios" className="hover:text-[#4A5D4E] transition-colors">
                Beneficios
              </a>
              <a href="#bonos" className="hover:text-[#4A5D4E] transition-colors">
                Bonos Exclusivos
              </a>
              <a href="#precio" className="hover:text-[#4A5D4E] transition-colors">
                Inscripción ($47 USD)
              </a>
              <a href="#preguntas" className="hover:text-[#4A5D4E] transition-colors">
                Preguntas
              </a>
            </div>

            {/* Direct Telephone Support */}
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-end gap-3 text-xs text-[#2D3E31]">
              <span className="font-semibold">Atención al Alumno & WhatsApp:</span>
              <a
                href="https://wa.me/573189766697?text=Hola,%20necesito%20soporte%20o%20información%20de%20Nudos%20del%20Alma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[#25D366] hover:underline"
              >
                <span>+57 318 976 6697 (3189766697)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Legal notice & ethical disclosure */}
        <div className="pt-8 text-center text-xs text-[#718096] space-y-3 max-w-3xl mx-auto leading-relaxed">
          <p>
            DESCARGO DE RESPONSABILIDAD: Los testimonios presentados reflejan experiencias reales de nuestras alumnas que han dedicado tiempo y dedicación a la práctica. Los resultados económicos dependen de tu propio esfuerzo, constancia y mercado local.
          </p>
          <div className="flex items-center justify-center gap-1.5 text-xs text-[#4A5D4E] font-medium">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-[#C59B27] fill-[#C59B27]" />
            <span>para tejedoras conscientes de todo el mundo.</span>
          </div>
          <p>
            © {new Date().getFullYear()} Escuela de Macramé: Nudos del Alma. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
