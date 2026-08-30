"use client";

import React, { useState, useEffect } from "react";
import { siteConfig, createWhatsAppUrl } from "@/config/site";
import { ArrowUpRight, MessageSquare } from "lucide-react";

export function MobileStickyCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA only after scrolling down 250px
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-2.5 bg-black/95 backdrop-blur-lg border-t border-zinc-800 lg:hidden animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="#aula-experimental"
          className="flex-1 py-3 px-4 bg-[#84ff00] hover:bg-[#98ff1a] active:scale-[0.98] text-black font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(132,255,0,0.3)] min-h-[44px]"
        >
          <span>AULA EXPERIMENTAL</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>

        <a
          href={createWhatsAppUrl(siteConfig.whatsappMessages.trial)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp oficial da Power Academia"
          className="p-3 bg-zinc-900 active:bg-zinc-800 text-[#84ff00] border border-zinc-700 transition-colors flex items-center justify-center min-h-[44px] min-w-[44px]"
        >
          <MessageSquare className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
