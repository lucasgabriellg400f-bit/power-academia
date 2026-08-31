"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { siteConfig, createWhatsAppUrl } from "@/config/site";
import { Calendar, MapPin, Zap, Route, Award, Shirt, Trophy } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function PowerRun() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Mouse tilt motion values for 2.5D hero medal
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // High-precision physical spring config
  const springConfig = { damping: 26, stiffness: 150, mass: 0.55 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 2.5D rotations & dynamic specular sheen
  const rotateX = useTransform(smoothY, [-0.5, 0.5], prefersReducedMotion ? [0, 0] : [10, -10]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], prefersReducedMotion ? [0, 0] : [-12, 12]);
  const sheenX = useTransform(smoothX, [-0.5, 0.5], ["-35%", "135%"]);
  const sheenY = useTransform(smoothY, [-0.5, 0.5], ["-35%", "135%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="power-run"
      className="relative py-14 sm:py-20 lg:py-28 bg-[#050505] border-b border-zinc-900 overflow-hidden scroll-mt-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      {/* Background Volumetric Atmosphere & Glows */}
      <div className="absolute inset-0 bg-radial-gradient opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#84ff00]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Athlete Layer in Background (Right side, dark atmospheric smoke & rim light) */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] select-none pointer-events-none overflow-hidden z-0">
        <Image
          src="/images/power-run/power-run-athlete.jpg"
          alt="Atleta corredora com camiseta oficial Power Run"
          fill
          className="object-cover object-[75%_20%] lg:object-[84%_center] filter brightness-[0.75] contrast-115 saturate-105"
          sizes="(max-width: 1024px) 100vw, 65vw"
          priority={false}
        />
        {/* Seamless Vignette Fades to match Reference 05 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-transparent lg:via-[#050505]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================= */}
        {/* TOP HERO GRID: Editorial Info (Left) + 2.5D Medal (Right)  */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-2 items-center">
          
          {/* 1. LEFT COLUMN: Editorial Hierarchy */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start text-left z-20">
            {/* Top Monospace Label */}
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#84ff00]">
                {"// POWER RUN"}
              </span>
            </div>

            {/* Giant Title in Two Lines */}
            <h2 className="font-display font-black text-[3.6rem] xs:text-6xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] uppercase tracking-tighter text-white leading-[0.82] mb-3 sm:mb-4">
              POWER <br />
              <span className="text-[#84ff00]">RUN 5K</span>
            </h2>

            {/* Supporting Headline: CORRA. SUPERE. TRANSFORME. */}
            <p className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-white mb-3 flex items-center gap-1.5">
              <span>CORRA.</span>
              <span>SUPERE.</span>
              <span className="text-[#84ff00]">TRANSFORME.</span>
            </p>

            {/* Short Narrative Copy */}
            <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed max-w-md mb-6 sm:mb-7">
              A corrida da Power Academia que celebra disciplina, superação e comunidade. Um marco de energia, saúde e conquistas nas ruas de São Félix do Xingu.
            </p>

            {/* Premium Date & Location Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 sm:p-4 bg-black/80 border border-zinc-800/90 backdrop-blur-md w-full max-w-md mb-6 sm:mb-7">
              {/* Date */}
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#84ff00]/10 border border-[#84ff00]/30 text-[#84ff00] shrink-0 mt-0.5 rounded-[4px]">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-zinc-400 font-mono text-[10px] uppercase tracking-wider">
                    DATA
                  </span>
                  <span className="block text-white font-display font-bold text-xs sm:text-sm uppercase tracking-wide text-zinc-100">
                    03 MAIO 2026
                  </span>
                  <span className="text-[#84ff00] font-mono text-[10px] uppercase font-bold">
                    07H
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 border-t sm:border-t-0 sm:border-l border-zinc-800/80 pt-3 sm:pt-0 sm:pl-3">
                <div className="p-2 bg-[#84ff00]/10 border border-[#84ff00]/30 text-[#84ff00] shrink-0 mt-0.5 rounded-[4px]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-zinc-400 font-mono text-[10px] uppercase tracking-wider">
                    LOCAL
                  </span>
                  <span className="block text-white font-display font-bold text-xs sm:text-sm uppercase tracking-wide text-zinc-100 whitespace-nowrap">
                    SÃO FÉLIX DO XINGU — PA
                  </span>
                  <span className="text-zinc-400 font-mono text-[10px] uppercase">
                    PERCURSO • 5 KM
                  </span>
                </div>
              </div>
            </div>

            {/* Actions: Discreet WhatsApp link */}
            <div className="flex items-center gap-3.5">
              <a
                href={createWhatsAppUrl(siteConfig.whatsappMessages.powerRun)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-zinc-300 hover:text-[#84ff00] transition-colors py-2 group"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#84ff00]" />
                <span>FALE COM A POWER NO WHATSAPP &gt;</span>
              </a>
            </div>
          </div>

          {/* 2. RIGHT COLUMN: 2.5D Hero Medal Protagonist */}
          <div className="lg:col-span-6 xl:col-span-7 relative flex items-center justify-center py-4 lg:py-0">
            {/* Ambient Gold & Neon Corona */}
            <div className="absolute w-[320px] sm:w-[420px] lg:w-[500px] aspect-square rounded-full bg-gradient-to-tr from-[#84ff00]/15 via-amber-500/15 to-transparent blur-[110px] pointer-events-none" />

            {/* 2.5D Medal Canvas with suspended ribbon hanging from top */}
            <div className="perspective-1000 relative flex items-center justify-center w-full max-w-[350px] sm:max-w-[480px] lg:max-w-[560px] xl:max-w-[600px]">
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        y: [-6, 6, -6],
                      }
                }
                transition={
                  prefersReducedMotion
                    ? {}
                    : {
                        repeat: Infinity,
                        duration: 5.5,
                        ease: "easeInOut",
                      }
                }
                className="relative w-full aspect-square select-none cursor-pointer flex items-center justify-center"
              >
                {/* Real Official 3D Medal Asset */}
                <div className="relative w-[95%] h-[95%] filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.98)] drop-shadow-[0_0_40px_rgba(132,255,0,0.18)]">
                  <Image
                    src="/images/power-run/medal-power-run.png"
                    alt="Medalha Oficial Power Run 2026 - 5Km Corrida do Trabalhador"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 340px, (max-width: 1200px) 480px, 580px"
                    priority
                  />
                  {/* Interactive Specular Light Sheen */}
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-20 pointer-events-none mix-blend-overlay bg-gradient-to-br from-white via-transparent to-transparent"
                    style={{
                      x: sheenX,
                      y: sheenY,
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. LOWER BENEFIT BAR (4 Columns as in Reference 05)       */}
        {/* ========================================================= */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-zinc-800/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {/* 01. PERCURSO */}
            <div className="flex items-center gap-3.5 p-3.5 sm:p-4 bg-black/70 border border-zinc-800/70 hover:border-zinc-700 transition-colors">
              <div className="p-2 bg-[#84ff00]/10 border border-[#84ff00]/30 text-[#84ff00] shrink-0 rounded-[4px]">
                <Route className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-zinc-400 font-mono text-[10px] uppercase tracking-wider">
                  01
                </span>
                <span className="block font-display font-black text-sm sm:text-base uppercase tracking-tight text-[#84ff00]">
                  5 KM
                </span>
                <span className="text-zinc-300 font-mono text-[11px] uppercase block font-semibold">
                  PERCURSO
                </span>
              </div>
            </div>

            {/* 02. MEDALHA */}
            <div className="flex items-center gap-3.5 p-3.5 sm:p-4 bg-black/70 border border-zinc-800/70 hover:border-zinc-700 transition-colors">
              <div className="p-2 bg-[#84ff00]/10 border border-[#84ff00]/30 text-[#84ff00] shrink-0 rounded-[4px]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-zinc-400 font-mono text-[10px] uppercase tracking-wider">
                  02
                </span>
                <span className="block font-display font-black text-sm sm:text-base uppercase tracking-tight text-[#84ff00]">
                  MEDALHA
                </span>
                <span className="text-zinc-300 font-mono text-[11px] uppercase block font-semibold">
                  PARA TODOS
                </span>
              </div>
            </div>

            {/* 03. KIT ATLETA */}
            <div className="flex items-center gap-3.5 p-3.5 sm:p-4 bg-black/70 border border-zinc-800/70 hover:border-zinc-700 transition-colors">
              <div className="p-2 bg-[#84ff00]/10 border border-[#84ff00]/30 text-[#84ff00] shrink-0 rounded-[4px]">
                <Shirt className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-zinc-400 font-mono text-[10px] uppercase tracking-wider">
                  03
                </span>
                <span className="block font-display font-black text-sm sm:text-base uppercase tracking-tight text-[#84ff00]">
                  KIT
                </span>
                <span className="text-zinc-300 font-mono text-[11px] uppercase block font-semibold">
                  KIT DO ATLETA
                </span>
              </div>
            </div>

            {/* 04. PREMIAÇÃO */}
            <div className="flex items-center gap-3.5 p-3.5 sm:p-4 bg-black/70 border border-zinc-800/70 hover:border-zinc-700 transition-colors">
              <div className="p-2 bg-[#84ff00]/10 border border-[#84ff00]/30 text-[#84ff00] shrink-0 rounded-[4px]">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-zinc-400 font-mono text-[10px] uppercase tracking-wider">
                  04
                </span>
                <span className="block font-display font-black text-sm sm:text-base uppercase tracking-tight text-[#84ff00]">
                  PREMIAÇÃO
                </span>
                <span className="text-zinc-300 font-mono text-[11px] uppercase block font-semibold">
                  EM DINHEIRO
                </span>
                <span className="text-zinc-500 font-mono text-[9px] uppercase block">
                  Sorteios de brindes
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4. CLOSING HORIZONTAL STRIP (Fechamento Factual)          */}
        {/* ========================================================= */}
        <div className="mt-6 p-3 sm:p-3.5 bg-zinc-950/80 border border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left">
          <div className="flex items-center gap-2 text-[#84ff00] font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4 shrink-0 fill-[#84ff00]" />
            <span>POWER RUN 5K • CORRIDA DO TRABALHADOR</span>
          </div>

          <div className="text-zinc-400 font-mono text-[10px] sm:text-[11px] uppercase tracking-wide">
            ESPORTE E COMUNIDADE NAS RUAS DE SÃO FÉLIX DO XINGU.
          </div>
        </div>

      </div>
    </section>
  );
}
