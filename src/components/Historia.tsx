import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Calendar, CheckCircle2 } from "lucide-react";

export function Historia() {
  return (
    <section id="sobre" className="relative py-12 sm:py-16 lg:py-24 bg-[#0d0d0d] border-b border-zinc-900 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Image with Stats Overlay */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
              <Image
                src="/images/historia/historia.jpg"
                alt="Ambiente da Power Academia em São Félix do Xingu"
                fill
                className="object-cover object-center filter brightness-95 contrast-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Floating Stat Pill */}
              <div className="absolute bottom-3.5 sm:bottom-5 left-3.5 sm:left-5 right-3.5 sm:right-5 p-3.5 sm:p-4 bg-black/90 backdrop-blur-md border border-zinc-800 flex items-center justify-between">
                <div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-[#84ff00]">
                    {siteConfig.stats.yearsHistory}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    São Félix do Xingu
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl sm:text-2xl font-display font-bold text-white">
                    05:30 — 22:00
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    Segunda a Sexta
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 w-fit mb-3">
              <Calendar className="w-3.5 h-3.5 text-[#84ff00]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-300">
                NOSSA HISTÓRIA
              </span>
            </div>

            <h2 className="font-display font-bold text-[2.6rem] xs:text-5xl sm:text-6xl uppercase tracking-tight text-white leading-[0.88] mb-4 sm:mb-5">
              DESDE 2022. <br />
              <span className="text-[#84ff00]">CONSTRUINDO FORÇA.</span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed mb-3">
              Fundada em 2022 em São Félix do Xingu, a POWER nasceu com o propósito de oferecer musculação séria, ambiente estruturado e atendimento próximo para a nossa cidade.
            </p>

            <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed mb-6">
              Um espaço pensado para o seu rendimento diário, com equipamentos selecionados e instrutores prontos para orientar seu treino.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-zinc-800/80">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#84ff00] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white uppercase font-display">
                    Treino Sério
                  </h3>
                  <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">
                    Ambiente focado no seu progresso.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#84ff00] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white uppercase font-display">
                    Comunidade Ativa
                  </h3>
                  <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">
                    Alunos que treinam juntos todos os dias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
