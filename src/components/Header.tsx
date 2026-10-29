"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Advocate", href: "/advocate" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "FAQ", href: "/faq" },
    { label: "Offices", href: "/offices" },
    { label: "Contact", href: "/contact" },
  ];

  // When at top of homepage: clean transparent background over the dark hero
  // When scrolled OR on inner pages: solid prestigious dark background (ensuring white text is always 100% visible)
  const headerBg = isHome && !isScrolled
    ? "bg-transparent py-5"
    : "bg-[#0F1D17]/95 backdrop-blur-md py-3.5 border-b border-[#D4AF37]/20 shadow-xl";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 text-white group">
          <div className="relative h-12 w-12 rounded-full bg-white/10 overflow-hidden p-0.5 border border-[#D4AF37]/40 shadow-sm transition-transform group-hover:scale-105">
            <Image
              src="/images/firm-logo.png"
              alt="Quaid-e-Azam Law Associates logo"
              fill
              className="object-contain p-0.5"
              sizes="48px"
              priority
            />
          </div>
          <span className="leading-tight">
            <span className="block font-display text-lg sm:text-xl font-bold tracking-wide text-white group-hover:text-gold transition-colors">
              QUAID-E-AZAM
            </span>
            <span className="eyebrow block text-[0.62rem] text-gold tracking-widest font-semibold">
              Law Associates
            </span>
          </span>
        </Link>

        {/* Desktop Navigation - Always high-contrast white/cream text */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  isActive
                    ? "text-gold font-bold border-b border-gold pb-0.5"
                    : "text-white/90 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA / Mobile Toggle */}
        <div className="flex items-center gap-2">
          <a
            href="tel:+923008211981"
            aria-label="Call now 0300-8211981"
            className="hidden sm:inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm cursor-pointer font-bold shadow-gold hover:brightness-105 hover:-translate-y-0.5 transition-all bg-gold-gradient text-ink h-9 px-4 py-2"
          >
            <Phone className="h-4 w-4 text-ink" />
            <span>Call Now</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-sm border border-white/30 text-white lg:hidden focus:outline-none focus:ring-1 focus:ring-gold"
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-gold" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0F1D17] px-6 py-6 shadow-2xl">
          <nav className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-sm px-3 py-2.5 text-base font-semibold text-white/90 transition-colors hover:bg-white/5 hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 border-t border-white/10 pt-4">
            <a
              href="tel:+923008211981"
              className="flex items-center justify-center gap-2 rounded-sm bg-gold-gradient px-4 py-3 text-sm font-bold text-ink shadow-gold"
            >
              <Phone className="h-4 w-4" />
              <span>Call Advocate: 0300-8211981</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
