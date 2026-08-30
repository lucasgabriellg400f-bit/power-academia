"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, Clock } from "lucide-react";
import { ArticleModal } from "@/components/modals/ArticleModal";

interface PlantaoPowerProps {
  onOpenTrialModal?: () => void;
}

export function PlantaoPower({ onOpenTrialModal }: PlantaoPowerProps) {
  const articles = siteConfig.articles;
  const [selectedArticle, setSelectedArticle] = useState<(typeof articles)[0] | null>(null);

  return (
    <section id="conteudos" className="relative py-14 sm:py-20 lg:py-28 bg-[#0d0d0d] border-b border-zinc-900 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="text-[#84ff00] font-mono text-xs uppercase tracking-widest block mb-2">
              {"// CONTEÚDO POWER"}
            </span>
            <h2 className="font-display font-bold text-[2.4rem] xs:text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tighter text-white leading-[0.9]">
              TREINO NÃO TERMINA <br />
              <span className="text-[#84ff00]">QUANDO VOCÊ SAI DA ACADEMIA.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-normal leading-relaxed">
            Conteúdo sobre treino, saúde e constância para ajudar você a evoluir dentro e fora da Power.
          </p>
        </div>

        {/* 3 Compact Editorial Article Cards - Truly interactive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="bg-[#121212] border border-zinc-800 hover:border-zinc-600 active:border-[#84ff00]/60 transition-all duration-200 flex flex-col group cursor-pointer"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-900">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover object-center filter brightness-95 contrast-105 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                <span className="absolute top-2.5 left-2.5 inline-block px-2 py-0.5 text-[9px] font-mono font-bold uppercase bg-black/85 backdrop-blur-md text-[#84ff00] border border-zinc-800">
                  {article.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 mb-1.5">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-zinc-400">
                      <Clock className="w-3 h-3 text-[#84ff00]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg uppercase text-white leading-snug mb-2 group-hover:text-[#84ff00] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-xs text-zinc-400 font-normal leading-relaxed line-clamp-2 mb-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-zinc-800/80 flex items-center justify-between text-xs font-display font-bold uppercase tracking-wider text-[#84ff00]">
                  <span>LER CONTEÚDO</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Full View Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenTrial={onOpenTrialModal}
      />
    </section>
  );
}
