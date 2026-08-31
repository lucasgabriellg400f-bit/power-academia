"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Check, Maximize2, Shield, X } from "lucide-react";

export function Estrutura() {
  const categories = siteConfig.structureCategories;
  const amenities = siteConfig.structureAmenities;
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Keyboard accessibility and body lock for fullscreen modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsFullscreen(false);
      }
    };

    if (isFullscreen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFullscreen]);

  return (
    <section id="estrutura" className="relative py-12 sm:py-16 lg:py-24 bg-[#080808] border-b border-zinc-900 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="text-[#84ff00] font-mono text-xs uppercase tracking-widest block mb-2">
              {"// ESTRUTURA POWER"}
            </span>
            <h2 className="font-display font-bold text-[2.6rem] xs:text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tighter text-white leading-[0.88]">
              FEITA PARA <br />
              QUEM LEVA <br />
              <span className="text-[#84ff00]">O TREINO A SÉRIO.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-normal leading-relaxed">
            Ambiente climatizado, máquinas selecionadas e área de peso livre organizada para o seu treino render.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2.5 mb-6 sm:mb-8 no-scrollbar touch-pan-x">
          {categories.map((cat) => {
            const isActive = activeCategory.id === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-display font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center border min-h-[44px] active:scale-[0.98] ${
                  isActive
                    ? "bg-[#84ff00] text-black border-[#84ff00] shadow-[0_0_15px_rgba(132,255,0,0.3)]"
                    : "bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700 active:bg-zinc-800"
                }`}
              >
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Feature Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8 sm:mb-10">
          {/* Main Large Visual */}
          <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border border-zinc-800 bg-zinc-900 group">
            <Image
              key={activeCategory.id}
              src={activeCategory.image}
              alt={activeCategory.name}
              fill
              className="object-cover object-center transition-all duration-500 filter brightness-95 contrast-105 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Bottom Overlay Info on Image */}
            <div className="absolute bottom-3.5 sm:bottom-5 left-3.5 sm:left-5 right-3.5 sm:right-5 flex items-end justify-between gap-3 pointer-events-auto">
              <div>
                <span className="inline-block px-2 py-0.5 text-[10px] font-mono font-bold uppercase bg-[#84ff00] text-black mb-1">
                  SETOR POWER
                </span>
                <h3 className="font-display font-bold text-xl sm:text-3xl uppercase text-white tracking-wide">
                  {activeCategory.name}
                </h3>
              </div>

              <button
                onClick={() => setIsFullscreen(true)}
                aria-label="Expandir foto da área"
                className="p-2.5 bg-black/80 hover:bg-black active:bg-zinc-800 text-white hover:text-[#84ff00] border border-zinc-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              >
                <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Details & Specs Card */}
          <div className="lg:col-span-4 p-5 sm:p-6 bg-[#121212] border border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#84ff00] mb-2">
                <Shield className="w-3.5 h-3.5" />
                <span>DETALHES DO ESPAÇO</span>
              </div>

              <h4 className="font-display font-bold text-lg sm:text-xl uppercase text-white mb-2">
                {activeCategory.subtitle}
              </h4>

              <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed mb-4">
                {activeCategory.description}
              </p>

              <div className="space-y-2 pt-3 border-t border-zinc-800">
                <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  DESTAQUES:
                </span>
                {activeCategory.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-200">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#84ff00]/10 border border-[#84ff00]/40 flex items-center justify-center shrink-0">
                      <Check className="w-2 h-2 text-[#84ff00]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-zinc-800">
              <a
                href="#planos"
                className="w-full inline-flex items-center justify-center py-3 px-4 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-700 text-xs font-display font-bold uppercase tracking-wider text-white hover:text-[#84ff00] border border-zinc-700 transition-all text-center min-h-[44px]"
              >
                VER PLANOS DE ACESSO
              </a>
            </div>
          </div>
        </div>

        {/* Confirmed Amenities Pill Grid (3x3 perfectly balanced grid across 9 items) */}
        <div className="p-4 sm:p-5 bg-zinc-950 border border-zinc-800">
          <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
            COMODIDADES & ESTRUTURA CONFIRMADA:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs text-zinc-300">
            {amenities.map((amenity, idx) => (
              <div key={idx} className="flex items-center gap-1.5 p-2.5 bg-zinc-900/60 border border-zinc-800/80">
                <span className="w-1.5 h-1.5 rounded-full bg-[#84ff00] shrink-0" />
                <span className="text-[11px] font-medium">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Photo Modal with Accessible Controls */}
      {isFullscreen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de foto da estrutura"
          onClick={() => setIsFullscreen(false)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8 cursor-pointer animate-in fade-in duration-200"
        >
          {/* Visible Close Button */}
          <button
            onClick={() => setIsFullscreen(false)}
            aria-label="Fechar visualizador de foto"
            className="absolute top-4 right-4 z-10 p-2.5 bg-black/80 hover:bg-black text-white hover:text-[#84ff00] border border-zinc-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div
            className="relative max-w-5xl w-full aspect-[16/10] overflow-hidden border border-zinc-700 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeCategory.image}
              alt={activeCategory.name}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
