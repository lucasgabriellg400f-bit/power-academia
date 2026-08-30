"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Clock, Calendar, ArrowRight } from "lucide-react";

interface Article {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onOpenTrial?: () => void;
}

export function ArticleModal({ article, onClose }: ArticleModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (article) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative max-w-2xl w-full bg-[#121212] border border-zinc-800 shadow-2xl overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative aspect-[16/9] w-full bg-zinc-900">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 800px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Fechar artigo"
            className="absolute top-3.5 right-3.5 p-2 bg-black/80 hover:bg-[#84ff00] text-white hover:text-black border border-zinc-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category Badge on Image */}
          <div className="absolute bottom-3.5 left-5">
            <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase bg-[#84ff00] text-black">
              {article.category}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-7">
          <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#84ff00]" />
              {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#84ff00]" />
              {article.readTime}
            </span>
          </div>

          <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl uppercase text-white leading-tight mb-4">
            {article.title}
          </h2>

          <div className="text-zinc-300 font-normal leading-relaxed text-xs sm:text-sm space-y-3.5 mb-6">
            <p className="text-zinc-200 font-medium text-sm sm:text-base leading-relaxed border-l-2 border-[#84ff00] pl-3 italic">
              {article.excerpt}
            </p>
            <p>{article.content}</p>
            <p>
              Na POWER ACADEMIA, nossa equipe está presente no salão de musculação para orientar sua execução e apoiar sua constância em São Félix do Xingu.
            </p>
          </div>

          {/* Footer Call to Action */}
          <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-[11px] font-mono text-zinc-400">
              POWER ACADEMIA — SFX/PA
            </div>

            <a
              href="#aula-experimental"
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 bg-[#84ff00] hover:bg-[#98ff1a] active:scale-[0.98] text-black font-display font-bold text-xs uppercase tracking-wider transition-all min-h-[44px]"
            >
              <span>VIVENCIE NA PRÁTICA</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
