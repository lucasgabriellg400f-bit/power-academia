"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Historia } from "@/components/Historia";
import { Estrutura } from "@/components/Estrutura";
import { Experiencia } from "@/components/Experiencia";
import { Comunidade } from "@/components/Comunidade";
import { PowerRun } from "@/components/PowerRun";
import { Planos } from "@/components/Planos";
import { AulaExperimental } from "@/components/AulaExperimental";
import { Horarios } from "@/components/Horarios";
import { Localizacao } from "@/components/Localizacao";
import { CtaFinal } from "@/components/CtaFinal";
import { Footer } from "@/components/Footer";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import { TrialModal } from "@/components/modals/TrialModal";

export default function Home() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  const closeTrialModal = () => setIsTrialModalOpen(false);

  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-[#84ff00] selection:text-black">
      {/* Fixed Navbar */}
      <Header />

      {/* 1. Hero 100vh */}
      <Hero />

      {/* 2. Manifesto (Approved & Frozen) */}
      <Manifesto />

      {/* 3. História & Desde 2022 */}
      <Historia />

      {/* 4. Estrutura Power & Interactive Categories */}
      <Estrutura />

      {/* 5. Experiência & Diferenciais 01-04 */}
      <Experiencia />

      {/* 6. Comunidade & Social Proof */}
      <Comunidade />

      {/* 7. Submarca Esportiva Power Run 5K */}
      <PowerRun />

      {/* 8. Planos & Matrícula (Direct Transition from Power Run) */}
      <Planos />

      {/* 9. Conversão de Aula Experimental */}
      <AulaExperimental />

      {/* 10. Horários de Atendimento */}
      <Horarios />

      {/* 11. Localização & Ações Google Maps */}
      <Localizacao />

      {/* 12. CTA Final Grandioso */}
      <CtaFinal />

      {/* 13. Footer Minimalista & Ações Conecte-se */}
      <Footer />

      {/* 14. Mobile Sticky CTA Bar */}
      <MobileStickyCta />

      {/* Interactive Booking Modal */}
      <TrialModal isOpen={isTrialModalOpen} onClose={closeTrialModal} />
    </main>
  );
}
