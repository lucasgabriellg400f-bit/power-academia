import React from "react";
import { siteConfig } from "@/config/site";

export function Experiencia() {
  const diferenciais = siteConfig.experienciaDiferenciais;

  return (
    <section id="experiencia" className="relative py-12 sm:py-16 lg:py-24 bg-[#0d0d0d] border-b border-zinc-900 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="text-[#84ff00] font-mono text-xs uppercase tracking-widest block mb-2">
              {"// POR QUE TREINAR NA POWER"}
            </span>
            <h2 className="font-display font-bold text-[2.6rem] xs:text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tighter text-white leading-[0.88]">
              DIFERENCIAIS DA <br />
              <span className="text-[#84ff00]">POWER ACADEMIA.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-normal leading-relaxed">
            Estrutura organizada e suporte em sala para você treinar com foco e segurança no seu dia a dia.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {diferenciais.map((item) => (
            <div
              key={item.number}
              className="p-5 sm:p-6 bg-[#121212] border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-[#84ff00] font-bold block mb-4">
                  {item.number}
                </span>

                <h3 className="font-display font-bold text-lg sm:text-xl uppercase text-white tracking-wide mb-1">
                  {item.title}
                </h3>

                <span className="block text-[11px] font-mono uppercase text-zinc-500 mb-3">
                  {item.subtitle}
                </span>

                <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-850 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>PADRÃO POWER</span>
                <span>SFX/PA</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
