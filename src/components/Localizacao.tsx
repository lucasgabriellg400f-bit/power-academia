import React from "react";
import { siteConfig, createWhatsAppUrl } from "@/config/site";
import { MapPin, Navigation, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function Localizacao() {
  const { business } = siteConfig;

  return (
    <section id="localizacao" className="relative py-12 sm:py-16 lg:py-24 bg-[#0d0d0d] border-b border-zinc-900 overflow-hidden scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-6 sm:p-10 lg:p-14 bg-gradient-to-br from-[#141414] to-[#0c0c0c] border border-zinc-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="text-[#84ff00] font-mono text-xs uppercase tracking-widest block mb-2">
                {"// ONDE ESTAMOS"}
              </span>

              <h2 className="font-display font-bold text-[2.75rem] xs:text-5xl sm:text-6xl uppercase tracking-tighter text-white leading-[0.88] mb-4">
                TREINE COM <br />
                <span className="text-[#84ff00]">A POWER.</span>
              </h2>

              {/* Informative Location Card */}
              <div className="flex items-start gap-3.5 my-5 p-4 bg-black/70 border border-zinc-800">
                <div className="p-2.5 bg-[#84ff00]/10 border border-[#84ff00]/30 text-[#84ff00] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="block font-display font-bold text-lg sm:text-xl uppercase text-white tracking-wide">
                    {business.address}
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-300 block">
                    {business.city} — {business.state}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase mt-0.5 block">
                    CEP {business.cep}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-md">
                Localizada na Av. Osterno Maia, com fácil acesso no centro de São Félix do Xingu. Venha nos fazer uma visita.
              </p>
            </div>

            {/* Right Action Buttons */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between py-4 px-5 bg-[#84ff00] hover:bg-[#98ff1a] active:scale-[0.98] text-black font-display font-bold text-sm uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(132,255,0,0.3)] min-h-[48px] group"
              >
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4" />
                  <span>ABRIR NO GOOGLE MAPS</span>
                </div>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={createWhatsAppUrl(siteConfig.whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between py-3.5 px-5 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-700 hover:border-zinc-500 text-xs font-display font-bold uppercase tracking-wider transition-all min-h-[46px] group"
              >
                <div className="flex items-center gap-2">
                  <WhatsAppIcon className="w-4 h-4 text-[#84ff00]" />
                  <span>WHATSAPP OFICIAL</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              </a>

              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between py-3.5 px-5 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-700 text-zinc-200 hover:text-white border border-zinc-700 hover:border-zinc-500 text-xs font-display font-bold uppercase tracking-wider transition-all min-h-[46px] group"
              >
                <div className="flex items-center gap-2">
                  <InstagramIcon className="w-4 h-4 text-[#84ff00]" />
                  <span>INSTAGRAM: {business.instagramHandle}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
