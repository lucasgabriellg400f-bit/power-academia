import React from "react";
import Image from "next/image";

export function Manifesto() {
  return (
    <section id="manifesto" className="relative py-12 sm:py-16 lg:py-24 bg-[#080808] border-b border-zinc-900 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial 2-Column Composition (Approved & Frozen) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline with Solid + Outline Typography Flow */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-[#84ff00] font-mono text-xs uppercase tracking-widest block mb-2.5">
              {"// O MANIFESTO POWER"}
            </span>

            {/* Unified Headline Block: Solid + Outline Typography */}
            <h2 className="font-display font-bold text-[2.75rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-[4rem] xl:text-[4.8rem] 2xl:text-[5.4rem] uppercase tracking-tighter leading-[0.88] mb-5 sm:mb-6">
              <span className="block text-white">NÃO É SÓ</span>
              <span className="flex flex-wrap items-baseline gap-x-2.5 sm:gap-x-3.5">
                <span className="text-white">SOBRE</span>
                <span
                  className="text-transparent select-none whitespace-nowrap"
                  style={{
                    WebkitTextStroke: "1.75px rgba(255, 255, 255, 0.38)",
                  }}
                >
                  TREINAR.
                </span>
              </span>
            </h2>

            {/* Paragraph with direct, consistent spacing */}
            <p className="text-base sm:text-xl lg:text-2xl text-zinc-300 font-light leading-snug max-w-xl mb-5 sm:mb-7">
              É sobre ter <strong className="text-white font-semibold">estrutura</strong>,{" "}
              <strong className="text-white font-semibold">acompanhamento</strong> e um ambiente que faz você querer voltar no dia seguinte.
            </p>

            <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 uppercase tracking-widest border-l-2 border-[#84ff00] pl-3">
              <span>SÃO FÉLIX DO XINGU — PARÁ</span>
              <span>•</span>
              <span className="text-zinc-400">DESDE 2022</span>
            </div>
          </div>

          {/* Right Column: Editorial Photo with Raw Athletic Texture */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full overflow-hidden border border-zinc-800 bg-zinc-900 group">
              <Image
                src="/images/manifesto/manifesto.jpg"
                alt="Treino sério e constância na Power Academia"
                fill
                className="object-cover object-center filter brightness-90 contrast-110 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Image Badge */}
              <div className="absolute bottom-3.5 sm:bottom-5 left-3.5 sm:left-5 right-3.5 sm:right-5 flex items-center justify-between p-3 sm:p-4 bg-black/85 backdrop-blur-md border border-zinc-800">
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-[#84ff00]">
                    FOCO ABSOLUTO
                  </span>
                  <span className="text-xs font-semibold text-white uppercase">
                    Constância e Evolução
                  </span>
                </div>
                <span className="font-mono text-[11px] text-zinc-500">SFX/PA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
