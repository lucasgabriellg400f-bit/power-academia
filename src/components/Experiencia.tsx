import React from "react";
import { siteConfig } from "@/config/site";

export function Experiencia() {
  const items = siteConfig.experienciaDiferenciais;

  return (
    <section id="experiencia" className="relative py-14 sm:py-20 lg:py-28 bg-[#0d0d0d] border-b border-zinc-900 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <span className="text-[#84ff00] font-mono text-xs uppercase tracking-widest block mb-2">
            {"// A EXPERIÊNCIA POWER"}
          </span>
          <h2 className="font-display font-bold text-[2.6rem] xs:text-5xl sm:text-6xl uppercase tracking-tight text-white leading-[0.88] mb-3">
            DIFERENCIAIS QUE <br />
            <span className="text-[#84ff00]">TRANSFORMAM SUA ROTINA.</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
            Eliminamos os obstáculos para você manter constância. Cada detalhe pensado para você focar no seu treino.
          </p>
        </div>

        {/* Editorial Numbered Rows (Informational only - no fake button/click affordance) */}
        <div className="divide-y divide-zinc-800 border-y border-zinc-800">
          {items.map((item) => (
            <div
              key={item.number}
              className="py-6 sm:py-8 px-2 sm:px-4"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-8 items-start">
                {/* Number */}
                <div className="lg:col-span-2">
                  <span className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#84ff00] font-mono">
                    {item.number}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="lg:col-span-4">
                  <h3 className="font-display font-bold text-lg sm:text-xl uppercase text-white tracking-wide mb-0.5">
                    {item.title}
                  </h3>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    {item.subtitle}
                  </span>
                </div>

                {/* Description */}
                <div className="lg:col-span-6">
                  <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
