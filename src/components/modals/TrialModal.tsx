"use client";

import React, { useState, useEffect } from "react";
import { X, ArrowRight, ShieldCheck } from "lucide-react";
import { createWhatsAppUrl } from "@/config/site";

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TrialModal({ isOpen, onClose }: TrialModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredTime, setPreferredTime] = useState("manha");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const timeLabels: Record<string, string> = {
      manha: "Manhã (05:30 às 11:00)",
      tarde: "Tarde (11:00 às 17:00 — Sem fechar no almoço)",
      noite: "Noite (17:00 às 22:00)",
      sabado: "Sábado (06:00 às 14:00)",
    };

    const message = `Olá! Meu nome é *${name || "Aluno"}* (${phone || "WhatsApp"}) e gostaria de agendar uma Aula Experimental na POWER ACADEMIA em São Félix do Xingu. Meu horário preferido de treino é: *${timeLabels[preferredTime]}*.`;
    const whatsappUrl = createWhatsAppUrl(message);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative max-w-lg w-full bg-[#121212] border border-zinc-800 shadow-2xl p-5 sm:p-8 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar modal"
          className="absolute top-4 right-4 p-2.5 text-zinc-400 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-4 sm:mb-5">
          {/* Clean minimal badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-zinc-900 border border-zinc-700/80 mb-2.5">
            <span className="text-[#84ff00] font-mono text-xs font-bold">→</span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white">
              AULA EXPERIMENTAL
            </span>
          </div>

          <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase text-white tracking-tight leading-[0.92]">
            AGENDE SEU PRIMEIRO <br />
            <span className="text-[#84ff00]">TREINO NA POWER.</span>
          </h3>

          <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
            Preencha seus dados para direcionarmos seu agendamento direto pelo WhatsApp oficial em São Félix do Xingu.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-300 mb-1">
              Seu Nome Completo *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Lucas Silva"
              className="w-full px-3.5 py-2.5 sm:py-3 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#84ff00] transition-colors min-h-[44px]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-300 mb-1">
              Seu WhatsApp *
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(94) 99197-2980"
              className="w-full px-3.5 py-2.5 sm:py-3 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#84ff00] transition-colors min-h-[44px]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-300 mb-1">
              Turno de Preferência
            </label>
            <select
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              className="w-full px-3.5 py-2.5 sm:py-3 bg-zinc-900 border border-zinc-700 text-white text-sm focus:outline-none focus:border-[#84ff00] transition-colors cursor-pointer min-h-[44px]"
            >
              <option value="manha">Manhã (05:30 às 11:00)</option>
              <option value="tarde">Tarde (11:00 às 17:00 — Sem fechar no almoço)</option>
              <option value="noite">Noite (17:00 às 22:00)</option>
              <option value="sabado">Sábado (06:00 às 14:00)</option>
            </select>
          </div>

          <div className="pt-1">
            <button
              type="submit"
              className="w-full py-3.5 px-5 bg-[#84ff00] hover:bg-[#98ff1a] active:scale-[0.98] text-black font-display font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(132,255,0,0.3)] flex items-center justify-center gap-2 cursor-pointer min-h-[46px]"
            >
              <span>CONFIRMAR NO WHATSAPP</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Reassurance */}
        <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-center gap-2 text-[10px] font-mono text-zinc-400">
          <ShieldCheck className="w-3.5 h-3.5 text-[#84ff00]" />
          <span>Atendimento oficial: Av. Osterno Maia, 1106 • SFX/PA</span>
        </div>
      </div>
    </div>
  );
}
