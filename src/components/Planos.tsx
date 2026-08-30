import React from "react";
import { siteConfig, createWhatsAppUrl } from "@/config/site";
import { Check, ArrowUpRight, MessageSquare } from "lucide-react";

export function Planos() {
  return (
    <section id="planos" className="relative py-12 sm:py-16 lg:py-24 bg-[#080808] border-b border-zinc-900 overflow-hidden scroll-mt-20">
      {/* Subtle Glow in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#84ff00]/[0.025] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-[#84ff00] font-mono text-xs uppercase tracking-widest block mb-2">
            {"// PLANOS & MATRÍCULA"}
          </span>
          <h2 className="font-display font-bold text-[2.75rem] xs:text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tighter text-white leading-[0.88] mb-3">
            ESCOLHA <br className="sm:hidden" />
            <span className="text-[#84ff00]">COMO COMEÇAR.</span>
          </h2>
          <p className="text-xs sm:text-base text-zinc-300 font-normal leading-relaxed max-w-xl mx-auto">
            Escolha a opção ideal para sua rotina e venha treinar na Power.
          </p>
        </div>

        {/* 2-Card Layout: Featured Real Plan (Power Essencial) + Other Custom Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-5xl mx-auto">
          {/* Card 1: Real Confirmed Plan: POWER ESSENCIAL */}
          <div className="lg:col-span-7 relative flex flex-col justify-between p-6 sm:p-8 bg-[#141414] border-2 border-[#84ff00] shadow-[0_0_35px_-10px_rgba(132,255,0,0.3)] group">
            {/* Badge */}
            <div className="absolute -top-3 left-6 px-3 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-[#84ff00] text-black shadow-md">
              PLANO OFICIAL CONFIRMADO
            </div>

            <div>
              <div className="mb-4 pt-1 flex items-start justify-between">
                <div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase text-white tracking-wide group-hover:text-[#84ff00] transition-colors">
                    POWER ESSENCIAL
                  </h3>
                  <p className="text-xs text-zinc-400 font-normal mt-0.5">
                    O plano para quem busca regularidade nos treinos.
                  </p>
                </div>
              </div>

              {/* Price Block */}
              <div className="py-4 border-y border-zinc-800 mb-5">
                <span className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-0.5">
                  VALOR MENSAL:
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-display font-black text-[#84ff00] tracking-tight">
                    R$ 99,90
                  </span>
                  <span className="text-xs font-mono text-zinc-400">/ mês</span>
                </div>
                <div className="mt-1.5 inline-block text-[11px] font-mono text-zinc-300 bg-zinc-900 px-2.5 py-0.5 border border-zinc-800">
                  Apenas <strong className="text-[#84ff00] font-semibold">R$ 3,33 por dia</strong>
                </div>
              </div>

              {/* Real Benefits */}
              <div className="space-y-2.5 mb-6">
                <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  BENEFÍCIOS INCLUSOS:
                </span>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <div className="w-4 h-4 rounded-full bg-[#84ff00] text-black flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span><strong>3 acessos por semana</strong> na musculação</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <div className="w-4 h-4 rounded-full bg-[#84ff00] text-black flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span><strong>Horário flexível</strong> (05:30 às 22:00 direto)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <div className="w-4 h-4 rounded-full bg-[#84ff00] text-black flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span><strong>App de Treinos Power</strong> para acompanhar seus treinos</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <div className="w-4 h-4 rounded-full bg-[#84ff00] text-black flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>Orientação dos instrutores em sala</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-zinc-800">
              <a
                href={createWhatsAppUrl(siteConfig.whatsappMessages.powerEssencial)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-[#84ff00] hover:bg-[#98ff1a] active:scale-[0.98] text-black font-display font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(132,255,0,0.3)] min-h-[46px]"
              >
                <span>QUERO O POWER ESSENCIAL</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Other Plans & Custom Consultation */}
          <div className="lg:col-span-5 relative flex flex-col justify-between p-6 sm:p-8 bg-[#101010] border border-zinc-800 hover:border-zinc-700 transition-colors group">
            <div>
              <div className="mb-4 pt-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#84ff00] block mb-1">
                  OUTRAS MODALIDADES
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase text-white tracking-wide group-hover:text-[#84ff00] transition-colors">
                  OUTROS PLANOS POWER
                </h3>
                <p className="text-xs text-zinc-400 font-normal mt-1 leading-relaxed">
                  Opções adaptadas para diferentes rotinas e disponibilidades de horário.
                </p>
              </div>

              <div className="py-4 border-y border-zinc-800 mb-5">
                <span className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-0.5">
                  MODALIDADES:
                </span>
                <div className="text-xl sm:text-2xl font-display font-bold text-white tracking-wide">
                  CONSULTE NOSSA EQUIPE
                </div>
              </div>

              <div className="space-y-2.5 mb-6 text-xs text-zinc-300">
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#84ff00] shrink-0 mt-0.5" />
                  <span>Acesso integral a todas as áreas de musculação</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#84ff00] shrink-0 mt-0.5" />
                  <span>Planos adaptados ao seu ritmo semanal</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#84ff00] shrink-0 mt-0.5" />
                  <span>Atendimento rápido e direto no WhatsApp</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-zinc-800">
              <a
                href={createWhatsAppUrl(siteConfig.whatsappMessages.plans)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-700 text-white hover:text-[#84ff00] border border-zinc-700 font-display font-bold text-xs uppercase tracking-wider transition-all min-h-[46px]"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#84ff00]" />
                <span>CONSULTAR PLANOS</span>
              </a>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-6 text-center text-[11px] font-mono text-zinc-500">
          Matrículas e orientações de planos diretamente no WhatsApp oficial da POWER ACADEMIA.
        </div>
      </div>
    </section>
  );
}
