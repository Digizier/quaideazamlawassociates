import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Scale, ShieldCheck } from "lucide-react";
import { PRACTICE_AREAS } from "@/data/practiceAreas";

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-ink pb-24 pt-14 text-ink-foreground lg:pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Firm Identity */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-full overflow-hidden bg-white/10 p-0.5 border border-gold/40">
                <Image
                  src="/images/firm-logo.png"
                  alt="Quaid-e-Azam Law Associates"
                  fill
                  className="object-contain p-0.5"
                  sizes="48px"
                />
              </div>
              <div>
                <span className="block font-display text-xl font-bold tracking-wide text-ink-foreground">
                  QUAID-E-AZAM
                </span>
                <span className="eyebrow block text-[0.65rem] text-gold tracking-widest">
                  Law Associates
                </span>
              </div>
            </Link>

            <p className="eyebrow text-gold">Justice · Integrity · Excellence</p>

            <p className="text-sm leading-relaxed text-ink-muted">
              Dedicated legal representation and strategic counsel before the High Court of Sindh, City Courts, and Special Tribunals, led by Advocate Raheel Anis.
            </p>

            <div className="flex items-center gap-2 text-xs text-ink-muted pt-1">
              <ShieldCheck className="h-4 w-4 text-gold shrink-0" />
              <span>Registered Advocates High Court of Sindh</span>
            </div>
          </div>

          {/* Col 2: Practice Areas (2-column on mobile) */}
          <div>
            <p className="eyebrow text-gold font-bold">Practice Areas</p>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {PRACTICE_AREAS.map((practice) => (
                <Link
                  key={practice.slug}
                  href={`/practice-areas/${practice.slug}`}
                  className="truncate text-ink-muted transition-colors hover:text-gold"
                  title={practice.title}
                >
                  {practice.title.split(" ")[0]} {practice.title.split(" ")[1] || ""}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Two Chambers */}
          <div>
            <p className="eyebrow text-gold font-bold">Karachi Chambers</p>
            <div className="mt-4 space-y-4 text-xs sm:text-sm">
              <div className="border-l-2 border-gold/60 pl-3">
                <p className="font-semibold text-ink-foreground">DHA Phase 7 Chamber</p>
                <p className="mt-1 text-ink-muted">
                  Ground Floor No. 3, Plot C/7/C, Khayaban-e-Sehar Commercial, Phase 7, DHA, Karachi.
                </p>
              </div>

              <div className="border-l-2 border-gold/60 pl-3">
                <p className="font-semibold text-ink-foreground">City Court Chamber</p>
                <p className="mt-1 text-ink-muted">
                  Office 102, Mezzanine Floor, Fareed Chamber, Syedna Tahir Saifuddin Rd, Opp. City Court, Karachi.
                </p>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Contact */}
          <div>
            <p className="eyebrow text-gold font-bold">Direct Inquiries</p>
            <div className="mt-4 space-y-3 text-xs sm:text-sm">
              <a
                href="tel:+923008211981"
                className="flex items-center gap-3 text-ink-foreground transition-colors hover:text-gold"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-gold/20 text-gold shrink-0">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <span className="block text-[0.65rem] uppercase text-ink-muted">Phone / WhatsApp</span>
                  <span className="font-semibold">0300-8211981</span>
                </div>
              </a>

              <a
                href="mailto:raheelanis81@gmail.com"
                className="flex items-center gap-3 text-ink-foreground transition-colors hover:text-gold"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-gold/20 text-gold shrink-0">
                  <Mail className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <span className="block text-[0.65rem] uppercase text-ink-muted">Email</span>
                  <span className="truncate font-semibold block">raheelanis81@gmail.com</span>
                </div>
              </a>

              <Link
                href="/contact"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-gold-gradient px-4 py-2.5 text-xs font-bold text-ink shadow-gold transition-transform hover:brightness-105"
              >
                <Scale className="h-3.5 w-3.5" />
                <span>Book Legal Consultation</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bar Association Seals & Recognition */}
        <div className="mt-12 border-t border-border/20 pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-ink-muted">
          <div className="flex items-center gap-4">
            <span className="uppercase tracking-wider font-semibold text-gold text-[0.7rem]">Bar Standing:</span>
            <span>Karachi Bar Association</span>
            <span>•</span>
            <span>High Court Bar Association Sindh (SHCBA)</span>
          </div>

          <p>© {new Date().getFullYear()} Quaid-e-Azam Law Associates · Advocate Raheel Anis, Karachi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
