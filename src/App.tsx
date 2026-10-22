/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ValueIntro } from './components/ValueIntro';
import { BenefitsSection } from './components/BenefitsSection';
import { AudienceFilterAndGuarantee } from './components/AudienceFilterAndGuarantee';
import { ProjectCatalog } from './components/ProjectCatalog';
import { BonusesSection } from './components/BonusesSection';
import { PricingAnchor } from './components/PricingAnchor';
import { FAQSection } from './components/FAQSection';
import { RoadmapTimeline } from './components/RoadmapTimeline';
import { UrgencyAndFinalCTA } from './components/UrgencyAndFinalCTA';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { CheckoutModal } from './components/CheckoutModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [leadData, setLeadData] = useState<{
    fullName?: string;
    email?: string;
    whatsapp?: string;
  }>({});

  const handleOpenCheckout = (initialLead?: { fullName?: string; email?: string; whatsapp?: string }) => {
    if (initialLead) {
      setLeadData(initialLead);
    }
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#2D3748] flex flex-col font-body antialiased selection:bg-[#C59B27]/25 selection:text-[#2D3748]">
      {/* 3-Zone Top Bar Navigation */}
      <Navbar onOpenCheckout={handleOpenCheckout} />

      <main className="flex-1">
        {/* Bloques 1 & 2: Hero Section */}
        <HeroSection onOpenCheckout={handleOpenCheckout} />

        {/* Bloques 3 & 4: Introducción & Metodología "Nudos del Alma" */}
        <ValueIntro />

        {/* Bloques 5 & 6: Beneficios & Prueba Social */}
        <BenefitsSection />

        {/* Bloques 7 & 8: Filtro de Audiencia & Sello de Garantía */}
        <AudienceFilterAndGuarantee />

        {/* Bloque 9: Entregables & Catálogo de Proyectos */}
        <ProjectCatalog onOpenCheckout={handleOpenCheckout} />

        {/* Bloque 10: Bonificaciones Exclusivas & Calculadora Interactiva */}
        <BonusesSection />

        {/* Bloques 11 & 12: Zona de Conversión Crítica & Tabla Anchor de Precio */}
        <PricingAnchor onOpenCheckout={handleOpenCheckout} />

        {/* Bloques 14, 15, 16: Ruta de Aprendizaje 01-02-03 */}
        <RoadmapTimeline onOpenCheckout={handleOpenCheckout} />

        {/* Bloque 13: Preguntas Frecuentes Acordeón */}
        <FAQSection />

        {/* Bloques 17 & 18: Urgencia, Cierre Emotivo & Final CTA */}
        <UrgencyAndFinalCTA onOpenCheckout={handleOpenCheckout} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky CTA (<15% viewport height cap) */}
      <MobileStickyCTA onOpenCheckout={handleOpenCheckout} />

      {/* Floating WhatsApp with direct telephone line 3189766697 */}
      <FloatingWhatsApp />

      {/* Interactive Checkout Modal */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={handleCloseCheckout} initialData={leadData} />
    </div>
  );
}
