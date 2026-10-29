"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, Shield, ChevronRight } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Advocate", href: "/advocate" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "Offices", href: "/offices" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-ink/95 backdrop-blur-md text-ink-foreground transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-11 w-11 sm:h-12 sm:w-12 rounded-full overflow-hidden bg-white/10 p-0.5 border border-gold/40 shadow-sm transition-transform group-hover:scale-105">
            <Image
              src="/images/firm-logo.png"
              alt="Quaid-e-Azam Law Associates crest"
              fill
              className="object-contain p-0.5"
              sizes="48px"
              priority
            />
          </div>
          <div className="leading-tight">
            <span className="block font-display text-lg sm:text-xl font-bold tracking-wider text-ink-foreground group-hover:text-gold transition-colors">
              QUAID-E-AZAM
            </span>
            <span className="eyebrow block text-[0.65rem] text-gold tracking-widest">
              Law Associates
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-foreground/80 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:+923008211981"
            className="hidden sm:inline-flex items-center justify-center gap-2 rounded-sm bg-gold-gradient px-4 py-2 text-xs sm:text-sm font-bold text-ink shadow-gold transition-transform hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="h-4 w-4" />
            <span>0300-8211981</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="grid h-10 w-10 place-items-center rounded-sm border border-border/40 text-ink-foreground lg:hidden focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-gold" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/20 bg-ink px-4 py-6 shadow-2xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-sm px-3 py-3 text-base font-medium text-ink-foreground/90 transition-colors hover:bg-white/5 hover:text-gold"
              >
                <span>{link.label}</span>
                <ChevronRight className="h-4 w-4 text-gold/60" />
              </Link>
            ))}
          </div>

          <div className="mt-6 border-t border-border/20 pt-4 flex flex-col gap-3">
            <a
              href="tel:+923008211981"
              className="flex items-center justify-center gap-2 rounded-sm bg-gold-gradient px-4 py-3 text-sm font-bold text-ink shadow-gold"
            >
              <Phone className="h-4 w-4" />
              <span>Call Advocate: 0300-8211981</span>
            </a>
            <div className="flex items-center justify-center gap-2 text-xs text-ink-muted">
              <Shield className="h-3.5 w-3.5 text-gold" />
              <span>Advocate High Court of Sindh · Karachi</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
