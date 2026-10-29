"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Scale, UserCheck, MapPin, MessageCircle } from "lucide-react";

export function MobileBottomNav() {
  const pathname = usePathname();

  const tabs = [
    { label: "Home", href: "/", icon: Home },
    { label: "Practice", href: "/practice-areas", icon: Scale },
    { label: "Advocate", href: "/advocate", icon: UserCheck },
    { label: "Chambers", href: "/offices", icon: MapPin },
  ];

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden border-t border-gold/30 bg-ink/95 backdrop-blur-lg pb-[env(safe-area-inset-bottom,0px)] shadow-[0_-4px_25px_rgba(0,0,0,0.5)]"
    >
      <div className="grid grid-cols-5 h-16 items-center px-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive =
            tab.href === "/"
              ? pathname === "/"
              : pathname.startsWith(tab.href);

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-col items-center justify-center h-full min-h-[48px] py-1 transition-colors ${
                isActive
                  ? "text-gold font-bold"
                  : "text-ink-muted hover:text-ink-foreground"
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? "text-gold scale-110" : ""}`} />
              <span className="text-[0.68rem] tracking-tight mt-1">{tab.label}</span>
            </Link>
          );
        })}

        {/* WhatsApp Direct Action Button */}
        <a
          href="https://wa.me/923008211981?text=Hello%20Advocate%20Raheel%20Anis,%20I%20would%20like%20to%20consult%20regarding%20a%20legal%20matter."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex flex-col items-center justify-center h-full min-h-[48px] py-1 text-emerald-400 hover:text-emerald-300"
        >
          <div className="relative grid h-7 w-7 place-items-center rounded-full bg-whatsapp text-white shadow-md">
            <MessageCircle className="h-4 w-4 fill-current" />
          </div>
          <span className="text-[0.68rem] tracking-tight mt-0.5 font-semibold text-emerald-400">
            WhatsApp
          </span>
        </a>
      </div>
    </nav>
  );
}
