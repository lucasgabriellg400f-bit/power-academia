"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Calendar, Zap, Route, Award, Shirt, Users, type LucideIcon } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

const EDITORIAL_INFO: { icon: LucideIcon; label: string; value: string }[] = [
  { icon: Route, label: "PERCURSO", value: "5 KM URBANOS" },
  { icon: Calendar, label: "EDIÇÃO", value: "REALIZADA EM 2026" },
  { icon: Users, label: "COMUNIDADE", value: "ALUNOS E CORREDORES" },
  { icon: Zap, label: "EXPERIÊNCIA", value: "ESPORTE ALÉM DA ACADEMIA" },
];

const BENEFITS: { icon: LucideIcon; label: string; value: string }[] = [
  { icon: Route, label: "PERCURSO", value: "5 KM" },
  { icon: Award, label: "MEDALHA", value: "OFICIAL DO EVENTO" },
  { icon: Shirt, label: "KIT ATLETA", value: "EXPERIÊNCIA POWER RUN" },
  { icon: Users, label: "COMUNIDADE", value: "SÃO FÉLIX DO XINGU" },
];

/** Editorial recap copy + institutional info grid + Instagram link, shared by both compositions. */
function InfoBlock() {
  return (
    <>
      <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
        <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#84ff00]">
          {"// POWER RUN"}
        </span>
      </div>

      <h2 className="font-display font-black text-[3.4rem] xs:text-6xl sm:text-7xl lg:text-[4.2rem] xl:text-[5rem] uppercase tracking-tighter text-white leading-[0.82] mb-3 sm:mb-4">
        POWER <br />
        <span className="text-[#84ff00]">RUN 5K</span>
      </h2>

      <p className="font-display font-bold text-base sm:text-lg lg:text-xl uppercase tracking-tight text-white leading-snug mb-3 sm:mb-4 max-w-md">
        Um evento que marcou as ruas de <span className="text-[#84ff00]">São Félix do Xingu</span>.
      </p>

      <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed max-w-md mb-6 sm:mb-7">
        O Power Run 5K reuniu alunos, corredores e comunidade em uma manhã de movimento, superação
        e energia. Mais do que uma corrida, foi um momento que levou a força da Power para além da
        academia.
      </p>

      <div className="grid grid-cols-2 gap-x-4 gap-y-3 p-3.5 sm:p-4 bg-black/80 border border-zinc-800/90 backdrop-blur-md w-full max-w-md mb-6 sm:mb-7">
        {EDITORIAL_INFO.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-start gap-2.5">
            <div className="p-1.5 bg-[#84ff00]/10 border border-[#84ff00]/30 text-[#84ff00] shrink-0 mt-0.5 rounded-[4px]">
              <Icon className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <span className="block text-zinc-400 font-mono text-[9px] uppercase tracking-wider">
                {label}
              </span>
              <span className="block text-white font-display font-bold text-[11px] sm:text-xs uppercase tracking-wide leading-tight">
                {value}
              </span>
            </div>
          </div>
        ))}
      </div>

      <a
        href={siteConfig.socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-white hover:text-[#84ff00] uppercase tracking-wider transition-colors py-2 group"
      >
        <InstagramIcon className="w-4 h-4 text-[#84ff00]" />
        <span>Ver mais no Instagram</span>
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </a>
    </>
  );
}

/** The approved master medal asset as a self-contained 2.5D hero graphic (own hover tilt + float). */
function MedalHero({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 26, stiffness: 150, mass: 0.55 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], prefersReducedMotion ? [0, 0] : [8, -8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], prefersReducedMotion ? [0, 0] : [-10, 10]);
  const sheenX = useTransform(smoothX, [-0.5, 0.5], ["-35%", "135%"]);
  const sheenY = useTransform(smoothY, [-0.5, 0.5], ["-35%", "135%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`perspective-1000 relative ${className}`}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        animate={prefersReducedMotion ? {} : { y: [-6, 6, -6] }}
        transition={
          prefersReducedMotion ? {} : { repeat: Infinity, duration: 5.5, ease: "easeInOut" }
        }
        className="relative w-full aspect-square select-none"
      >
        {/* object-contain shows the complete master asset, ribbon included —
            never additionally cropped. Any crop of the ribbon visible here is
            already baked into the approved master file itself. */}
        <div className="absolute inset-0 filter drop-shadow-[0_35px_55px_rgba(0,0,0,0.9)] drop-shadow-[0_0_45px_rgba(132,255,0,0.16)]">
          <Image
            src="/images/power-run/medal-power-run-master.png"
            alt="Medalha Oficial Power Run 2026 - 5Km Corrida do Trabalhador"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 480px, 820px"
            priority={priority}
          />
          <motion.div
            className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay bg-gradient-to-br from-white via-transparent to-transparent"
            style={{ x: sheenX, y: sheenY }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export function PowerRun() {
  return (
    <section
      id="power-run"
      className="relative bg-[#050505] border-b border-zinc-900 overflow-hidden scroll-mt-20"
    >
      {/* Ambient volumetric atmosphere shared by the whole section */}
      <div className="absolute inset-0 bg-radial-gradient opacity-40 pointer-events-none" />

      {/* ================================================================= */}
      {/* MOBILE / TABLET (<lg): cinematic stacked hero — photo band on top, */}
      {/* medal breaking out of its bottom edge, copy below in normal flow. */}
      {/* ================================================================= */}
      <div className="lg:hidden relative pt-10 sm:pt-12">
        <div className="relative px-4 sm:px-6">
          <div className="relative w-full h-[340px] xs:h-[380px] sm:h-[440px] overflow-hidden">
            <Image
              src="/images/power-run/power-run-athlete-master.png"
              alt="Atleta corredora de costas com a camiseta oficial Run Power, Corrida do Trabalhador"
              fill
              className="object-cover object-[66%_10%]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/15 to-[#050505]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent w-1/3" />
          </div>

          {/* Ambient corona behind the medal — gives the ribbon a soft atmospheric
              backdrop instead of sitting abruptly on the raw photo (mirrors the
              desktop treatment) */}
          <div className="absolute left-[15%] top-[2%] w-[240px] xs:w-[270px] sm:w-[320px] aspect-square rounded-full bg-gradient-to-tr from-[#84ff00]/20 via-amber-500/15 to-transparent blur-[50px] pointer-events-none" />

          {/* Medal anchored in the seam between the dark left field and the
              athlete's mass on the right — not centered — breaking out of the
              photo band's bottom edge as the transition into the copy below. */}
          <div className="absolute left-[38%] -translate-x-1/2 bottom-[-56px] xs:bottom-[-66px] sm:bottom-[-80px] w-[235px] xs:w-[265px] sm:w-[315px] z-10">
            <MedalHero priority />
          </div>
        </div>

        <div className="relative z-10 px-4 sm:px-6 pt-16 xs:pt-20 sm:pt-24">
          <InfoBlock />
        </div>
      </div>

      {/* ================================================================= */}
      {/* DESKTOP (lg+): single editorial stage — athlete as a layered mass  */}
      {/* on the right, medal as the dominant hero object fused across the  */}
      {/* text/photo seam, copy overlapping in front. Dense, no dead space. */}
      {/* ================================================================= */}
      <div className="hidden lg:block relative">
        {/* Athlete mass — dramatic lighting, back-facing, official jersey. */}
        <div className="absolute inset-y-0 right-0 w-[62%] xl:w-[60%] overflow-hidden pointer-events-none select-none">
          <Image
            src="/images/power-run/power-run-athlete-master.png"
            alt="Atleta corredora de costas com a camiseta oficial Run Power, Corrida do Trabalhador"
            fill
            className="object-cover object-[64%_6%] xl:object-[62%_4%]"
            sizes="60vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/35 via-transparent to-[#050505]" />
        </div>

        {/* Ambient corona seated behind the medal */}
        <div className="absolute top-[6%] right-[20%] w-[620px] h-[620px] bg-gradient-to-tr from-[#84ff00]/12 via-amber-500/12 to-transparent blur-[130px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 xl:px-8">
          <div className="relative min-h-[720px] xl:min-h-[780px] py-16 xl:py-20">
            {/* Text mass — sits in front (z-30), overlapping the athlete
                layer's left reach; the photo's own dark side keeps it legible. */}
            <div className="relative z-30 max-w-[400px] xl:max-w-[460px]">
              <InfoBlock />
            </div>

            {/* Medal — the dominant hero object, fused across the text/photo
                seam, huge and unconfined, fully contained (no clipping) so the
                ribbon reads as intentional, not an accidental crop. */}
            <div className="absolute z-20 top-[3%] right-0 w-[54%] xl:w-[58%]">
              <MedalHero priority />
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================= */}
      {/* BENEFIT STRIP — one integrated editorial bar, not four SaaS cards */}
      {/* ================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-6 lg:mt-4 grid grid-cols-2 lg:flex lg:items-stretch divide-y divide-x-0 lg:divide-y-0 lg:divide-x divide-zinc-800/70 border-y border-zinc-800/80 [&>*:nth-child(odd)]:border-r lg:[&>*:nth-child(odd)]:border-r-0 border-zinc-800/70">
          {BENEFITS.map(({ icon: Icon, label, value }, i) => (
            <div
              key={label}
              className="flex items-center gap-3.5 py-4 px-3 sm:px-4 lg:flex-1 lg:justify-center lg:py-6"
            >
              <span className="hidden sm:block font-mono text-[10px] text-zinc-600 tabular-nums">
                0{i + 1}
              </span>
              <div className="p-2 bg-[#84ff00]/10 border border-[#84ff00]/30 text-[#84ff00] shrink-0 rounded-[4px]">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-display font-black text-sm sm:text-base uppercase tracking-tight text-[#84ff00]">
                  {value}
                </span>
                <span className="text-zinc-300 font-mono text-[11px] uppercase block font-semibold">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ================================================================= */}
        {/* CLOSING STRIP — factual institutional sign-off                    */}
        {/* ================================================================= */}
        <div className="mt-4 mb-14 sm:mb-20 lg:mb-24 p-3 sm:p-3.5 bg-zinc-950/80 border border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left">
          <div className="flex items-center gap-2 text-[#84ff00] font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4 shrink-0 fill-[#84ff00]" />
            <span>POWER RUN 5K • CORRIDA DO TRABALHADOR</span>
          </div>

          <div className="text-zinc-400 font-mono text-[10px] sm:text-[11px] uppercase tracking-wide">
            ESPORTE • COMUNIDADE • SÃO FÉLIX DO XINGU
          </div>
        </div>
      </div>
    </section>
  );
}
