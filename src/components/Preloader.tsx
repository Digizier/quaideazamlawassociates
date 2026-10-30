"use client";

import React, { useState, useEffect, useCallback } from "react";

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [debugPhase, setDebugPhase] = useState<string | null>(null);

  const dismiss = useCallback(() => {
    setIsFadingOut(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 320);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Check URL parameters for debug testing of individual animation phases
    const params = new URLSearchParams(window.location.search);
    const phaseParam = params.get("debug_phase");
    if (phaseParam) {
      setDebugPhase(phaseParam);
      setIsVisible(true);
      return;
    }

    // Always show preloader on page load / page refresh
    setIsVisible(true);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Complete lifecycle: ~2.15s animation + smooth fadeout
    const completeTimer = setTimeout(() => {
      dismiss();
    }, 2150);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(completeTimer);
    };
  }, [dismiss]);

  // If dismissed, unmount completely from DOM
  if (!isVisible) {
    return null;
  }

  // Debug phase freeze offsets
  // Phase 2: Logo + metallic sweep (~0.65s)
  // Phase 3: Golden Flash & wipe exit (~1.12s)
  // Phase 4: Firm Name reveal (~1.65s)
  const getDebugStyle = () => {
    if (debugPhase === "2") {
      return { animationDelay: "-0.65s", animationPlayState: "paused" as const };
    }
    if (debugPhase === "3") {
      return { animationDelay: "-1.12s", animationPlayState: "paused" as const };
    }
    if (debugPhase === "4") {
      return { animationDelay: "-1.65s", animationPlayState: "paused" as const };
    }
    return {};
  };

  const debugStyle = getDebugStyle();

  return (
    <div
      id="qla-preloader"
      role="dialog"
      aria-modal="true"
      aria-label="Quaid-e-Azam Law Associates Welcome Introduction"
      onClick={dismiss}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black select-none cursor-pointer overflow-hidden transition-opacity duration-300 ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
      }`}
      style={{
        animation: debugPhase ? "none" : "qla-backdrop-fade 2.25s cubic-bezier(0.25, 1, 0.5, 1) forwards",
      }}
    >
      {/* Subtle background ambient vignette */}
      <div 
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(20,40,32,0.35)_0%,rgba(0,0,0,0.95)_75%,#000000_100%)]"
        aria-hidden="true" 
      />

      {/* Central Animation Stage */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-2xl px-6 py-8 text-center">
        
        {/* =========================================================================
            PHASE 2 & PHASE 3: EXACT LOGO CREST CONTAINER
            Fades in at 0.2s, shines at 0.45s, flashes at 0.9s, wipes left-to-right at 0.95s-1.25s
            ========================================================================= */}
        <div 
          className="relative flex items-center justify-center w-56 h-56 sm:w-68 sm:h-68 md:w-80 md:h-80"
          style={{
            animation: "qla-logo-cinematic 2.2s cubic-bezier(0.25, 0.9, 0.3, 1) forwards",
            ...debugStyle,
          }}
        >
          {/* Exact Official Logo Image */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/firm-crest-official.jpg"
              alt="Quaid-e-Azam Law Associates Official Crest"
              width={320}
              height={320}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-contain pointer-events-none"
            />
          </div>

          {/* Phase 2 Metallic Golden Light Sweep Overlay */}
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden rounded-full"
            aria-hidden="true"
          >
            <div
              className="absolute top-0 bottom-0 w-36 bg-gradient-to-r from-transparent via-[#FFF3D1]/70 to-transparent"
              style={{
                animation: "qla-metallic-shine 2.2s ease-in-out forwards",
                mixBlendMode: "screen",
                ...debugStyle,
              }}
            />
          </div>

          {/* Phase 3 Vertical Golden Wipe Beam that guides the wipe exit */}
          <div
            className="absolute top-0 bottom-0 w-1 pointer-events-none bg-gradient-to-b from-transparent via-[#ECC274] to-transparent shadow-[0_0_22px_5px_rgba(212,175,55,0.95),0_0_45px_10px_rgba(255,235,170,0.7)]"
            style={{
              animation: "qla-wipe-streak 2.2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
              ...debugStyle,
            }}
            aria-hidden="true"
          />
        </div>

        {/* =========================================================================
            PHASE 4: FIRM NAME & AUTHORITY REVEAL (1.28s - 2.0s)
            Reveals with smooth left-to-right clip-path & expands into luxury serif gold
            ========================================================================= */}
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4"
          aria-hidden="true"
        >
          {/* Main Firm Name */}
          <div
            className="overflow-hidden"
            style={{
              animation: "qla-text-reveal 2.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              ...debugStyle,
            }}
          >
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.16em] sm:tracking-[0.22em] uppercase leading-tight bg-gradient-to-r from-[#ECC274] via-[#FFF9EE] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(212,175,55,0.4)]">
              Quaid-e-Azam
            </p>
            <p className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.2em] sm:tracking-[0.26em] uppercase leading-tight text-[#EED8A1] mt-1 sm:mt-1.5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              Law Associates
            </p>
          </div>

          {/* Hairline Golden Rule */}
          <div
            className="h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-3 sm:my-4"
            style={{
              animation: "qla-gold-hairline 2.2s ease-out forwards",
              ...debugStyle,
            }}
          />

          {/* Subtitle / Legal Authority */}
          <div
            style={{
              animation: "qla-subtitle-reveal 2.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              ...debugStyle,
            }}
          >
            <p className="font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.24em] sm:tracking-[0.3em] uppercase font-semibold text-[#ECC274]/90">
              Advocates & Legal Consultants
            </p>
            <p className="font-sans text-[9px] sm:text-[11px] tracking-[0.2em] uppercase text-[#F4EFE6]/60 mt-1">
              High Court of Sindh • Karachi, Pakistan
            </p>
          </div>
        </div>

      </div>

      {/* Subtle Skip Hint in bottom right (non-intrusive, luxury aesthetic) */}
      <div 
        className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#D4AF37]/30 bg-black/60 backdrop-blur-sm text-[11px] tracking-wider uppercase text-[#D4AF37]/80 hover:text-[#ECC274] hover:border-[#D4AF37]/60 transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          dismiss();
        }}
        title="Skip intro"
      >
        <span>Skip</span>
        <kbd className="px-1.5 py-0.5 text-[9px] bg-white/10 rounded border border-white/15 text-[#F4EFE6]/70">ESC</kbd>
      </div>
    </div>
  );
}
