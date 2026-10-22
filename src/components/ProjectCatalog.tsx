import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/landingData';
import { ProjectItem } from '../types';
import { Sparkles, Clock, Layers, ArrowRight, X, Check, Eye } from 'lucide-react';

export const ProjectCatalog: React.FC<{ onOpenCheckout: () => void }> = ({ onOpenCheckout }) => {
  const [filter, setFilter] = useState<'all' | 'bolsos' | 'tapices' | 'navidad'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = filter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === filter);

  return (
    <section id="proyectos" className="py-16 md:py-24 bg-[#F9F6F0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#C59B27] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Entregables & Catálogo Exclusivo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4A5D4E] tracking-tight font-heading mb-4">
            Proyectos que Dominarás Paso a Paso en la Escuela
          </h2>
          <p className="text-base text-[#4A5568] font-body">
            Piezas cuidadosamente diseñadas con estética contemporánea boho-chic para embellecer tu hogar, regalar con orgullo o vender en tu tienda artesanal.
          </p>
        </div>

        {/* Filter Tabs (Interactive Filter Controls as functional buttons) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-1 p-1.5 bg-[#EAE4D9]/70 rounded-full border border-[#4A5D4E]/10">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#4A5D4E] text-white shadow-xs'
                  : 'text-[#4A5568] hover:text-[#4A5D4E]'
              }`}
            >
              Todos los Proyectos
            </button>
            <button
              onClick={() => setFilter('bolsos')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                filter === 'bolsos'
                  ? 'bg-[#4A5D4E] text-white shadow-xs'
                  : 'text-[#4A5568] hover:text-[#4A5D4E]'
              }`}
            >
              Bolsos & Moda
            </button>
            <button
              onClick={() => setFilter('tapices')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                filter === 'tapices'
                  ? 'bg-[#4A5D4E] text-white shadow-xs'
                  : 'text-[#4A5568] hover:text-[#4A5D4E]'
              }`}
            >
              Tapices & Murales
            </button>
            <button
              onClick={() => setFilter('navidad')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                filter === 'navidad'
                  ? 'bg-[#C59B27] text-white shadow-xs'
                  : 'text-[#4A5568] hover:text-[#4A5D4E]'
              }`}
            >
              Especial Navideño ⭐
            </button>
          </div>
        </div>

        {/* Projects Grid: Cards UI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#4A5D4E]/12 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col group"
            >
              {/* Image Container with craft tag */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF7F2]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Level Tag */}
                <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-xs text-[#4A5D4E] text-[11px] font-bold px-2.5 py-1 rounded-md border border-[#4A5D4E]/10">
                  {project.difficulty}
                </div>

                {/* Estimated Time Badge */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-300" />
                  <span>{project.estimatedTime}</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
                  <span className="bg-[#4A5D4E]/90 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
                    {project.cordType}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#4A5D4E] font-heading mb-2">
                    {project.title}
                  </h3>
                  <div className="text-xs text-[#B8860B] font-semibold mb-3 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>{project.technique}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#4A5D4E]/10 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-[#4A5D4E] hover:text-[#C59B27] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ver Ficha Técnica</span>
                  </button>

                  <button
                    onClick={onOpenCheckout}
                    className="text-xs font-bold text-[#C59B27] hover:text-[#B8860B] flex items-center gap-1 cursor-pointer group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Aprender a Tejerla</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-[#4A5D4E] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold font-heading mb-1 text-white">
              ¿Quieres acceder a todos estos patrones con moldes y videos?
            </h4>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl">
              Están todos incluidos con acceso de por vida y futuras actualizaciones al inscribirte hoy por sólo $47 USD.
            </p>
          </div>
          <button
            onClick={onOpenCheckout}
            className="btn-gold-glow px-6 py-3 text-xs sm:text-sm font-bold tracking-wider uppercase whitespace-nowrap cursor-pointer shrink-0"
          >
            Quiero Tejer Estos Proyectos
          </button>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div
            className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-[#4A5D4E]/20 shadow-2xl relative"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F9F6F0] text-[#4A5568] hover:text-[#2D3748] flex items-center justify-center cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C59B27] block mb-1">
                Ficha Técnica del Proyecto
              </span>
              <h3 className="text-2xl font-bold text-[#4A5D4E] font-heading">
                {selectedProject.title}
              </h3>
            </div>

            <div className="aspect-[16/9] rounded-xl overflow-hidden mb-5 bg-[#F9F6F0]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-sm text-[#4A5568] leading-relaxed mb-5">
              {selectedProject.description}
            </p>

            <div className="space-y-3 p-4 rounded-xl bg-[#FAF7F2] border border-[#4A5D4E]/10 mb-6 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span className="text-[#718096]">Nivel de Dificultad:</span>
                <span className="font-semibold text-[#4A5D4E]">{selectedProject.difficulty}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#718096]">Tiempo Estimado:</span>
                <span className="font-semibold text-[#4A5D4E]">{selectedProject.estimatedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#718096]">Material Recomendado:</span>
                <span className="font-semibold text-[#4A5D4E]">{selectedProject.cordType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#718096]">Técnica Principal:</span>
                <span className="font-semibold text-[#C59B27]">{selectedProject.technique}</span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D3748] mb-2 font-heading">
                Habilidades y Puntos Clave que Dominarás:
              </h4>
              <ul className="space-y-2">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#4A5568]">
                    <Check className="w-4 h-4 text-[#4A5D4E] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setSelectedProject(null);
                  onOpenCheckout();
                }}
                className="btn-gold-glow flex-1 py-3 text-xs sm:text-sm uppercase font-bold tracking-wide cursor-pointer text-center"
              >
                Inscribirme y Acceder a Esta Clase
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
