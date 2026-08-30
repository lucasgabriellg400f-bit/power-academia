import React from "react";
import Image from "next/image";
import { siteConfig, createWhatsAppUrl } from "@/config/site";
import { ArrowUpRight, Trophy, Route, Calendar } from "lucide-react";

export function PowerRun() {
  return (
    <section id="power-run" className="relative py-12 sm:py-16 lg:py-24 bg-[#080808] border-b border-zinc-900 overflow-hidden scroll-mt-20">
      {/* Background Subtle Track Lines & Glow */}
      <div className="absolute inset-0 bg-radial-gradient opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative p-5 sm:p-8 lg:p-12 bg-gradient-to-br from-[#121212] via-[#0d0d0d] to-black border border-zinc-800 overflow-hidden shadow-2xl">
          {/* Giant "5K" Background Watermark */}
          <div className="absolute -right-6 -bottom-8 sm:-bottom-12 text-[30vw] sm:text-[18vw] font-display font-black text-white/[0.03] select-none pointer-events-none leading-none">
            5K
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center relative z-10">
            {/* Left Column: Sub-brand Headline & Info */}
            <div className="lg:col-span-6">
              <span className="text-[#84ff00] font-mono text-xs uppercase tracking-widest block mb-2">
                {"// ALÉM DA ACADEMIA"}
              </span>

              <h2 className="font-display font-bold text-[2.75rem] xs:text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tighter text-white leading-[0.86] mb-2.5">
                POWER RUN <br />
                <span className="text-[#84ff00]">5K</span>
              </h2>

              <p className="text-sm sm:text-base font-display font-semibold uppercase text-zinc-200 tracking-wider mb-4">
                A POWER TAMBÉM SE MOVE NAS RUAS.
              </p>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5 max-w-lg">
                A Power Run reuniu corredores e alunos para um percurso de 5 km em São Félix do Xingu. Treino, desafio e movimento ao ar livre.
              </p>

              {/* Race Specs Grid */}
              <div className="grid grid-cols-3 gap-2.5 border-y border-zinc-800 py-3.5 mb-5">
                <div>
                  <div className="flex items-center gap-1 text-zinc-400 text-[10px] font-mono mb-0.5">
                    <Route className="w-3 h-3 text-[#84ff00]" />
                    <span>PERCURSO</span>
                  </div>
                  <div className="text-base sm:text-lg font-display font-bold text-white">
                    5.000M
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1 text-zinc-400 text-[10px] font-mono mb-0.5">
                    <Trophy className="w-3 h-3 text-[#84ff00]" />
                    <span>MODALIDADE</span>
                  </div>
                  <div className="text-base sm:text-lg font-display font-bold text-white">
                    CORRIDA 5K
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1 text-zinc-400 text-[10px] font-mono mb-0.5">
                    <Calendar className="w-3 h-3 text-[#84ff00]" />
                    <span>EDIÇÃO</span>
                  </div>
                  <div className="text-[11px] sm:text-xs font-display font-bold text-[#84ff00] uppercase mt-0.5">
                    2026
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={createWhatsAppUrl(siteConfig.whatsappMessages.powerRun)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#84ff00] hover:bg-[#98ff1a] active:scale-[0.98] text-black font-display font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(132,255,0,0.3)] min-h-[44px] group"
                >
                  <span>SABER MAIS NO WHATSAPP</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Event Photo */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl group">
                <Image
                  src="/images/power-run/power-run.jpg"
                  alt="Corrida de rua Power Run 5K em São Félix do Xingu"
                  fill
                  className="object-cover object-center filter brightness-95 contrast-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Sub-badge neutro sem qualificações inventadas */}
                <div className="absolute top-3 right-3 px-2.5 py-0.5 bg-black/85 backdrop-blur-md border border-zinc-700 text-[9px] font-mono uppercase tracking-widest text-[#84ff00]">
                  POWER RUN 5K
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-zinc-300">
                  <span>SÃO FÉLIX DO XINGU — PA</span>
                  <span className="text-[#84ff00]">POWER ACADEMIA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
