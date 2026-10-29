"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/923008211981?text=Hello%20Advocate%20Raheel%20Anis,%20I%20would%20like%20to%20consult%20regarding%20a%20legal%20matter."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Direct WhatsApp Consultation with Advocate Raheel Anis"
      className="fixed bottom-20 right-4 z-30 hidden lg:grid h-13 w-13 place-items-center rounded-full bg-whatsapp text-white shadow-gold transition-all duration-300 hover:scale-110 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-gold"
      title="0300-8211981 (Advocate Raheel Anis)"
    >
      <MessageCircle className="h-6 w-6 fill-current" />
      <span className="sr-only">Chat on WhatsApp 0300-8211981</span>
    </a>
  );
}
