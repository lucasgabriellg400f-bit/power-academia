import React from "react";
import { siteConfig, createWhatsAppUrl } from "@/config/site";
import { ArrowRight, MessageSquare, Clock, MapPin, CheckCircle2 } from "lucide-react";

export function AulaExperimental() {
  return (
    <section id="aula-experimental" className="relative py-12 sm:py-16 lg:py-24 bg-[#0d0d0d] border-b border-zinc-900 overflow-hidden scroll-mt-20">
      {/* Background Subtle Radial */}
      <div className="absolute inset-0 bg-radial-gradient opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-5 sm:p-8 lg:p-12 bg-gradient-to-br from-[#121212] via-[#0f0f0f] to-black border-2 border-zinc-800 relative overflow-hidden shadow-2xl">
          {/* Top Green Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#84ff00] to-transparent opacity-80" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Clean Editorial Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-900 border border-zinc-700/80 mb-4">
                <span className="text-[#84ff00] font-mono text-xs font-bold">→</span>
                <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest text-white">
                  AULA EXPERIMENTAL
                </span>
              </div>

              <h2 className="font-display font-bold text-[2.6rem] xs:text-5xl sm:text-6xl uppercase tracking-tight text-white leading-[0.88] mb-3 sm:mb-4">
                EXPERIMENTE <br />
                O TREINO <span className="text-[#84ff00]">POWER.</span>
              </h2>

              <p className="text-xs sm:text-base text-zinc-300 font-normal leading-relaxed mb-5 max-w-lg">
                Venha conhecer nosso espaço, testar os equipamentos e sentir o ritmo de treino na Power em São Félix do Xingu.
              </p>

              {/* Bullet Points */}
              <div className="space-y-1.5 mb-6 text-xs sm:text-sm text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#84ff00] shrink-0" />
                  <span>Sem custo e sem compromisso</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#84ff00] shrink-0" />
                  <span>Orientação dos instrutores em sala</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#84ff00] shrink-0" />
                  <span>Atendimento das 05:30 às 22:00</span>
                </div>
              </div>

              {/* CTAs with Direct Contextual WhatsApp Handlers */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <a
                  href={createWhatsAppUrl(siteConfig.whatsappMessages.trial)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#84ff00] hover:bg-[#98ff1a] active:scale-[0.98] text-black font-display font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(132,255,0,0.3)] cursor-pointer group min-h-[46px]"
                >
                  <span>AGENDAR TREINO</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href={createWhatsAppUrl(siteConfig.whatsappMessages.doubts)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-700 hover:border-zinc-500 font-display font-semibold text-xs uppercase tracking-wider transition-all min-h-[46px]"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#84ff00]" />
                  <span>TIRAR DÚVIDAS</span>
                </a>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5 p-5 bg-[#141414] border border-zinc-800 space-y-3.5">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#84ff00]">
                DETALHES DO ATENDIMENTO
              </div>

              <div className="space-y-2.5 text-xs text-zinc-300">
                <div className="flex items-start gap-2 pb-2.5 border-b border-zinc-800/80">
                  <Clock className="w-4 h-4 text-[#84ff00] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block uppercase">Segunda a Sexta</span>
                    <span className="text-zinc-400">05:30 às 22:00 (sem fechar no almoço)</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 pb-2.5 border-b border-zinc-800/80">
                  <Clock className="w-4 h-4 text-[#84ff00] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block uppercase">Sábado</span>
                    <span className="text-zinc-400">06:00 às 14:00</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#84ff00] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block uppercase">Localização</span>
                    <span className="text-zinc-400">Av. Osterno Maia, 1106 — SFX/PA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
