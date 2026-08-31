"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, createWhatsAppUrl } from "@/config/site";
import { Menu, X, ArrowUpRight, Clock, MapPin, MessageSquare } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to wide desktop (1280px+)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = siteConfig.navigation;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-[#080808]/95 backdrop-blur-md border-b border-zinc-900/80 transition-all duration-300 ${
          isScrolled ? "py-2 sm:py-2.5 shadow-xl shadow-black/80" : "py-3 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Official Logo */}
          <Link
            href="#"
            className="relative z-10 flex items-center shrink-0 group transition-transform duration-200 active:scale-[0.98]"
            aria-label="POWER ACADEMIA - Voltar ao início"
          >
            <div className="relative w-32 sm:w-36 xl:w-44 h-8 sm:h-9 flex items-center">
              <Image
                src="/logo/power-academia.png"
                alt="POWER ACADEMIA"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 130px, (max-width: 1280px) 150px, 180px"
              />
            </div>
          </Link>

          {/* Desktop Navigation (Visible at xl: 1280px+ with zero wrapping and clean gaps) */}
          <nav className="hidden xl:flex items-center gap-4.5 2xl:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white transition-colors duration-200 relative group py-1 whitespace-nowrap"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#84ff00] transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTA (Visible at xl: 1280px+) -> Smooth scrolls to #aula-experimental */}
          <div className="hidden xl:flex items-center shrink-0">
            <a
              href="#aula-experimental"
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-[#84ff00] hover:bg-[#98ff1a] transition-all duration-200 shadow-[0_0_20px_-5px_rgba(132,255,0,0.35)] active:scale-[0.98] cursor-pointer group min-h-[38px] whitespace-nowrap"
            >
              <span className="flex items-center gap-1.5">
                COMECE AGORA
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>

          {/* Compact / Mobile / Tablet / Notebook Actions (< 1280px) */}
          <div className="flex items-center gap-2 xl:hidden shrink-0">
            <a
              href="#aula-experimental"
              className="px-3 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-black bg-[#84ff00] hover:bg-[#98ff1a] active:scale-[0.97] min-h-[38px] flex items-center whitespace-nowrap"
            >
              COMECE
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              className="p-2.5 text-white hover:text-[#84ff00] active:scale-95 focus:outline-none transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Drawer Menu (< 1280px) */}
      <div
        className={`fixed inset-0 z-40 bg-[#080808] flex flex-col justify-between pt-18 pb-6 px-6 transition-all duration-300 xl:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex flex-col gap-1.5 overflow-y-auto max-h-[60vh] py-2">
          {navLinks.map((link, idx) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg sm:text-xl font-display font-bold uppercase tracking-tight text-zinc-200 active:text-[#84ff00] hover:text-[#84ff00] flex items-center justify-between border-b border-zinc-900 py-2.5 min-h-[42px] whitespace-nowrap"
            >
              <span>{link.label}</span>
              <span className="text-[11px] font-mono text-zinc-600">0{idx + 1}</span>
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2.5 border-t border-zinc-800 pt-4">
          <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-400">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#84ff00]" />
              <span>05:30 — 22:00</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#84ff00]" />
              <span>Av. Osterno Maia, 1106</span>
            </div>
          </div>

          <a
            href="#aula-experimental"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3.5 text-center font-display font-bold text-sm uppercase tracking-wider text-black bg-[#84ff00] hover:bg-[#98ff1a] active:scale-[0.98] cursor-pointer min-h-[44px] flex items-center justify-center whitespace-nowrap"
          >
            AGENDAR AULA EXPERIMENTAL
          </a>

          <a
            href={createWhatsAppUrl(siteConfig.whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white border border-zinc-700 hover:border-zinc-500 active:bg-zinc-800 flex items-center justify-center gap-2 min-h-[44px] whitespace-nowrap transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#84ff00]" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
