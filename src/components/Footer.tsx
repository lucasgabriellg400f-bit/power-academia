import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, createWhatsAppUrl } from "@/config/site";
import { MapPin, ArrowUpRight, ArrowUp } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { business } = siteConfig;

  return (
    <footer className="bg-[#050505] border-t border-zinc-900 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 border-b border-zinc-800">
          {/* Col 1: Official Logo & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="#" className="inline-block" aria-label="POWER ACADEMIA - Voltar ao início">
              <div className="relative w-36 sm:w-44 h-9 sm:h-11">
                <Image
                  src="/logo/power-academia.png"
                  alt="POWER ACADEMIA"
                  fill
                  className="object-contain object-left"
                  sizes="180px"
                />
              </div>
            </Link>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Treino de força, musculação e saúde com estrutura séria em São Félix do Xingu — Pará.
            </p>

            <div className="text-xs font-mono text-zinc-500">
              DESDE {siteConfig.sinceYear} • SÃO FÉLIX DO XINGU/PA
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              NAVEGAÇÃO
            </h4>
            <ul className="space-y-1.5 text-xs font-semibold uppercase tracking-wider">
              {siteConfig.navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#84ff00] transition-colors py-0.5 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: CONECTE-SE (3 Fully Interactive Action Blocks) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
              CONECTE-SE
            </h4>

            <div className="space-y-2.5">
              {/* Action 1: Google Maps */}
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 bg-zinc-900/80 hover:bg-zinc-900 active:bg-zinc-800 border border-zinc-800 hover:border-[#84ff00]/60 transition-all duration-200 group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#84ff00]/10 border border-[#84ff00]/30 text-[#84ff00] group-hover:border-[#84ff00] transition-colors rounded-[6px]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-white text-xs uppercase font-display group-hover:text-[#84ff00] transition-colors">
                      {business.name}
                    </span>
                    <span className="text-zinc-400 font-mono text-[11px]">
                      {business.address} • {business.city}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono uppercase font-bold text-[#84ff00]">
                  <span className="hidden sm:inline">ABRIR NO MAPS</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>

              {/* Action 2: WhatsApp */}
              <a
                href={createWhatsAppUrl(siteConfig.whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 bg-zinc-900/80 hover:bg-zinc-900 active:bg-zinc-800 border border-zinc-800 hover:border-[#84ff00]/60 transition-all duration-200 group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#84ff00]/10 border border-[#84ff00]/30 text-[#84ff00] group-hover:border-[#84ff00] transition-colors rounded-[6px]">
                    <WhatsAppIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-white text-xs uppercase font-display group-hover:text-[#84ff00] transition-colors">
                      FALE COM A POWER
                    </span>
                    <span className="text-zinc-400 font-mono text-[11px]">
                      {business.whatsappDisplay}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono uppercase font-bold text-[#84ff00]">
                  <span className="hidden sm:inline">CHAMAR NO WHATSAPP</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>

              {/* Action 3: Instagram */}
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 bg-zinc-900/80 hover:bg-zinc-900 active:bg-zinc-800 border border-zinc-800 hover:border-[#84ff00]/60 transition-all duration-200 group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#84ff00]/10 border border-[#84ff00]/30 text-[#84ff00] group-hover:border-[#84ff00] transition-colors rounded-[6px]">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-white text-xs uppercase font-display group-hover:text-[#84ff00] transition-colors">
                      ACOMPANHE A POWER
                    </span>
                    <span className="text-zinc-400 font-mono text-[11px]">
                      {business.instagramHandle}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono uppercase font-bold text-[#84ff00]">
                  <span className="hidden sm:inline">ABRIR INSTAGRAM</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs font-mono text-zinc-500">
          <div>
            © {currentYear} {siteConfig.academyName}. Desde {siteConfig.sinceYear} • São Félix do Xingu - PA.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="flex items-center gap-1 text-zinc-400 hover:text-[#84ff00] transition-colors py-1"
            >
              <span>TOPO</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
