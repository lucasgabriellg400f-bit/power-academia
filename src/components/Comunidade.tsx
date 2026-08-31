import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export function Comunidade() {
  const photos = [
    {
      src: "/images/comunidade/c1.jpg",
      alt: "Comunidade de alunos na Power Academia em São Félix do Xingu",
      label: "ENERGIA COLETIVA",
      span: "sm:col-span-1 lg:col-span-6 aspect-[4/3] lg:aspect-[16/10]",
    },
    {
      src: "/images/comunidade/c2.jpg",
      alt: "Orientação e acompanhamento em sala",
      label: "ACOMPANHAMENTO",
      span: "sm:col-span-1 lg:col-span-3 aspect-[4/3] lg:aspect-[16/10]",
    },
    {
      src: "/images/comunidade/c3.jpg",
      alt: "Constância nos treinos diários",
      label: "SUPERANDO LIMITES",
      span: "sm:col-span-1 lg:col-span-3 aspect-[4/3] lg:aspect-[16/10]",
    },
  ];

  return (
    <section id="comunidade" className="relative py-12 sm:py-16 lg:py-24 bg-[#080808] border-b border-zinc-900 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Official Instagram Action Card */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-5">
          <div>
            <span className="text-[#84ff00] font-mono text-xs uppercase tracking-widest block mb-2">
              {"// COMUNIDADE POWER"}
            </span>
            <h2 className="font-display font-bold text-[2.6rem] xs:text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tighter text-white leading-[0.88] mb-2.5">
              MAIS QUE <br />
              <span className="text-[#84ff00]">UMA ACADEMIA.</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 font-normal max-w-xl leading-relaxed">
              Treino diário, respeito mútuo e compromisso em São Félix do Xingu.
            </p>
          </div>

          {/* Official Instagram Integration Box */}
          <a
            href={siteConfig.business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-5 bg-zinc-900/90 border border-zinc-800 hover:border-[#84ff00]/60 active:bg-zinc-800/90 rounded-[8px] transition-all duration-200 group cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 bg-[#84ff00]/10 border border-[#84ff00]/30 text-[#84ff00] group-hover:border-[#84ff00] transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#84ff00] block">
                  ACOMPANHE A POWER
                </span>
                <div className="text-xl sm:text-2xl font-display font-bold text-white leading-tight">
                  {siteConfig.business.instagramHandle}
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mt-0.5">
                  TREINOS • ROTINA • EVENTOS • COMUNIDADE
                </span>
              </div>
            </div>

            <div className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#84ff00] group-hover:bg-[#98ff1a] active:scale-[0.98] text-black font-display font-bold text-xs uppercase tracking-wider transition-all min-h-[44px] shrink-0">
              <span>SIGA NO INSTAGRAM</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>
        </div>

        {/* Editorial Photo Mosaic */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-12 gap-3.5">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden border border-zinc-800 bg-zinc-900 group ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover object-center filter brightness-95 contrast-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 pointer-events-none" />

              {/* Tag on photo */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="inline-block px-2 py-0.5 text-[9px] font-mono font-bold uppercase bg-black/85 backdrop-blur-md text-[#84ff00] border border-zinc-800">
                  {photo.label}
                </span>
                <span className="text-[10px] font-mono text-zinc-400">SFX/PA</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
