import React from "react";
import { siteConfig } from "@/config/site";
import { Clock, CheckCircle2, Shield, CalendarDays } from "lucide-react";

export function Horarios() {
  const { openingHours } = siteConfig;

  return (
    <section id="horarios" className="relative py-12 sm:py-16 lg:py-24 bg-[#080808] border-b border-zinc-900 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <span className="text-[#84ff00] font-mono text-xs uppercase tracking-widest block mb-2">
            {"// HORÁRIOS DE ATENDIMENTO"}
          </span>
          <h2 className="font-display font-bold text-[2.6rem] xs:text-5xl sm:text-6xl uppercase tracking-tight text-white leading-[0.88] mb-3">
            TREINE NO SEU RITMO. <br />
            <span className="text-[#84ff00]">SEM INTERRUPÇÃO.</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
            Atendimento ininterrupto de segunda a sexta para você treinar com tranquilidade na sua rotina.
          </p>
        </div>

        {/* Schedule Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          {/* Main Weekday Card */}
          <div className="md:col-span-7 p-5 sm:p-7 bg-[#121212] border-2 border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 bg-[#84ff00] text-black text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider">
                  FLUXO PRINCIPAL
                </span>
                <Clock className="w-5 h-5 text-[#84ff00]" />
              </div>

              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
                DIAS DE SEMANA
              </span>

              <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase text-white mb-3">
                {openingHours.weekdays}
              </h3>

              <div className="text-4xl sm:text-5xl font-display font-black text-[#84ff00] tracking-tight mb-3">
                {openingHours.weekdaysHours}
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-700/80 text-xs font-mono text-zinc-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#84ff00]" />
                <span className="font-bold text-[#84ff00] uppercase">
                  {openingHours.badgeText}
                </span>
                <span className="text-zinc-400">— {openingHours.noLunchBreakNotice}</span>
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-zinc-800 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-zinc-500">
              <span>SÃO FÉLIX DO XINGU/PA</span>
              <span>16H30 DE PORTAS ABERTAS</span>
            </div>
          </div>

          {/* Saturday & Weekend Info */}
          <div className="md:col-span-5 flex flex-col gap-3.5">
            {/* Saturday Card */}
            <div className="p-5 sm:p-6 bg-[#121212] border border-zinc-800 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                    FIM DE SEMANA
                  </span>
                  <CalendarDays className="w-4 h-4 text-zinc-400" />
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl uppercase text-white mb-1.5">
                  {openingHours.saturday}
                </h3>

                <div className="text-3xl sm:text-4xl font-display font-bold text-white tracking-wide">
                  {openingHours.saturdayHours}
                </div>
              </div>

              <div className="mt-3.5 pt-3 border-t border-zinc-800 text-xs text-zinc-400">
                Acesso liberado para alunos ativos da POWER ACADEMIA.
              </div>
            </div>

            {/* Sunday / Holiday Notice */}
            <div className="p-3.5 sm:p-4 bg-zinc-950 border border-zinc-900 flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-[#84ff00] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-[10px] sm:text-[11px] font-mono font-bold uppercase text-zinc-300 mb-0.5">
                  DOMINGOS E FERIADOS
                </h4>
                <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">
                  Consulte a programação especial comunicada previamente no Instagram oficial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
