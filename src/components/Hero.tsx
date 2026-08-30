"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, ChevronDown, Clock, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[92svh] md:min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-[#080808]">
      {/* Background Image with Dark Dramatic Overlays */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="POWER ACADEMIA - Treino de Alta Performance em São Félix do Xingu"
          fill
          priority
          className="object-cover object-center filter brightness-[0.75] contrast-[1.15]"
          sizes="100vw"
        />
        {/* Layered Gradient Overlays for High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-transparent max-w-4xl" />
        <div className="absolute inset-0 bg-radial-gradient opacity-60" />
      </div>

      {/* Subtle Athletic Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none z-1" />

      {/* Top Spacer for Fixed Header */}
      <div className="h-16 sm:h-20 lg:h-24" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 sm:py-10 md:py-14 my-auto">
        <div className="max-w-3xl">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900/90 border border-zinc-700/80 backdrop-blur-md mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-[#84ff00] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-zinc-300">
              SÃO FÉLIX DO XINGU — PA
            </span>
            <span className="text-zinc-600">|</span>
            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#84ff00]">
              DESDE 2022
            </span>
          </div>

          {/* Main Giant Headline with Restored Mobile Impact */}
          <h1 className="font-display font-bold text-[3.4rem] xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-white leading-[0.86] mb-4 sm:mb-6">
            ONDE OS <br />
            <span className="text-[#84ff00] relative inline-block">
              RESULTADOS
            </span>{" "}
            <br />
            ACONTECEM.
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-xl mb-6 sm:mb-8 font-body">
            {siteConfig.description}
          </p>

          {/* CTAs with Direct Functional Smooth Scroll Targets */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="#aula-experimental"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 bg-[#84ff00] hover:bg-[#98ff1a] active:scale-[0.98] text-black font-display font-bold text-base sm:text-lg uppercase tracking-wider transition-all duration-200 shadow-[0_0_25px_-5px_rgba(132,255,0,0.4)] cursor-pointer group min-h-[46px]"
            >
              <span>COMECE AGORA</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#estrutura"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 bg-transparent hover:bg-white/5 active:bg-white/10 border border-zinc-700 hover:border-zinc-400 text-white font-display font-semibold text-base sm:text-lg uppercase tracking-wider transition-all duration-200 min-h-[46px]"
            >
              <span>CONHEÇA A POWER</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Status / Details Bar */}
      <div className="relative z-10 w-full border-t border-zinc-800/80 bg-black/75 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-zinc-400 font-mono">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#84ff00]" />
              <span className="text-white font-semibold">05:30 — 22:00</span>
              <span className="text-zinc-500 text-[11px]">SEG A SEX</span>
            </div>

            <div className="hidden sm:inline-block w-px h-3.5 bg-zinc-800" />

            <div className="flex items-center gap-1.5">
              <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase bg-[#84ff00]/10 border border-[#84ff00]/30 text-[#84ff00]">
                SEM FECHAR NO ALMOÇO
              </span>
            </div>

            <div className="hidden sm:inline-block w-px h-3.5 bg-zinc-800" />

            <a
              href={siteConfig.business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-300 hover:text-[#84ff00] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#84ff00]" />
              <span>Av. Osterno Maia, 1106</span>
            </a>
          </div>

          {/* Scroll prompt */}
          <a
            href="#manifesto"
            aria-label="Rolar para o manifesto"
            className="hidden md:flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <span>SCROLL</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#84ff00]" />
          </a>
        </div>
      </div>
    </section>
  );
}
