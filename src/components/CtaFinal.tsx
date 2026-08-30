import React from "react";
import Image from "next/image";
import { siteConfig, createWhatsAppUrl } from "@/config/site";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import { AthleticFlameIcon } from "@/components/icons/AthleticFlameIcon";

export function CtaFinal() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-36 bg-black overflow-hidden border-b border-zinc-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/images/cta/cta-final.jpg"
          alt="Vem ser Power Academia em São Félix do Xingu"
          fill
          className="object-cover object-center filter brightness-[0.45] contrast-125"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
        <div className="absolute inset-0 bg-radial-gradient opacity-80" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Eyebrow with refined geometric flame */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/80 border border-[#84ff00]/40 backdrop-blur-md mb-4 sm:mb-6">
          <AthleticFlameIcon className="w-3.5 h-3.5 text-[#84ff00]" />
          <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest text-[#84ff00]">
            SUA VEZ DE EVOLUIR
          </span>
        </div>

        {/* Headline with Restored Mobile Impact */}
        <h2 className="font-display font-bold text-[3.2rem] xs:text-6xl sm:text-7xl lg:text-8xl uppercase tracking-tighter text-white leading-[0.86] mb-4 sm:mb-6">
          SUA PRÓXIMA <br />
          VERSÃO COMEÇA <br />
          <span className="text-[#84ff00]">AGORA.</span>
        </h2>

        <p className="text-sm sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-xl mb-6 sm:mb-8">
          Escolha a estrutura, a constância e a comunidade que vão te levar ao próximo nível em São Félix do Xingu.
        </p>

        {/* Big CTA Buttons with Functional Targets */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <a
            href="#aula-experimental"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#84ff00] hover:bg-[#98ff1a] active:scale-[0.98] text-black font-display font-black text-base sm:text-xl uppercase tracking-wider transition-all duration-200 shadow-[0_0_30px_rgba(132,255,0,0.4)] cursor-pointer group min-h-[48px]"
          >
            <span>VEM SER POWER</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href={createWhatsAppUrl(siteConfig.whatsappMessages.finalCta)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-black/70 hover:bg-zinc-900 active:bg-zinc-800 border border-zinc-700 text-white font-display font-bold text-xs sm:text-sm uppercase tracking-wider transition-all min-h-[48px]"
          >
            FALAR COM ATENDIMENTO
          </a>
        </div>

        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-[#84ff00]" />
            05:30 às 22:00 direto
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-[#84ff00]" />
            São Félix do Xingu - PA
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-[#84ff00]" />
            Orientação em sala
          </span>
        </div>
      </div>
    </section>
  );
}
