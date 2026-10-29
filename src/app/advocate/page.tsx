import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Gavel,
  Landmark,
  ShieldCheck,
  Phone,
  MessageCircle,
  FileText,
  Scale,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Advocate Raheel Anis | High Court Advocate Karachi",
  description:
    "Official profile of Advocate Raheel Anis, Advocate High Court of Sindh and founder of Quaid-e-Azam Law Associates, Karachi. Litigating constitutional, criminal, civil, banking, tax, and property disputes.",
  alternates: {
    canonical: "/advocate",
  },
};

export default function AdvocateProfilePage() {
  return (
    <div className="pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-gold-deep uppercase tracking-widest">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span>Lead Counsel</span>
        </div>

        {/* Hero Bio Banner */}
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr_1fr] items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold-deep">
              <Scale className="h-3.5 w-3.5" />
              <span>Advocate High Court of Sindh</span>
            </div>

            <h1 className="mt-3 font-display text-4xl sm:text-6xl font-extrabold uppercase text-foreground tracking-tight">
              Advocate <span className="text-primary">Raheel Anis</span>
            </h1>
            <p className="eyebrow text-gold-deep mt-1 font-bold">
              Founder & Principal Counsel · Quaid-e-Azam Law Associates
            </p>
            <div className="gold-rule mt-4" />

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
              Advocate Raheel Anis is a distinguished litigation lawyer and legal strategist based in Karachi. With extensive trial and appellate experience before the High Court of Sindh and subordinate courts, he provides high-stakes courtroom representation for individuals, business families, and commercial enterprises.
            </p>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
              Known for incisive statutory research, rigorous cross-examination, and articulate written pleadings, Advocate Raheel Anis maintains a reputation for unflinching courtroom advocacy, ethical transparency, and complete client privilege.
            </p>

            {/* Direct Connect Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/923008211981?text=Hello%20Advocate%20Raheel%20Anis,%20I%20would%20like%20to%20consult%20regarding%20a%20legal%20matter."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-whatsapp px-6 text-sm font-semibold text-white shadow hover:brightness-105"
              >
                <MessageCircle className="h-4 w-4 fill-current" />
                <span>Consult on WhatsApp (0300-8211981)</span>
              </a>

              <a
                href="tel:+923008211981"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-border bg-card px-5 text-sm font-semibold text-foreground hover:border-gold hover:bg-secondary"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span>Direct Call</span>
              </a>
            </div>
          </div>

          {/* Chamber Portrait/Building Visual */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden border border-border shadow-2xl bg-ink">
              <Image
                src="/images/chambers.jpg"
                alt="Advocate Raheel Anis Legal Chambers Karachi"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 1024px) 100vw, 500px"
                priority
              />
            </div>
            <div className="mt-3 text-center">
              <p className="font-display text-lg font-bold text-foreground">Advocate Raheel Anis</p>
              <p className="text-xs text-muted-foreground">Chambers in DHA Phase 7 & City Courts Area</p>
            </div>
          </div>
        </div>

        {/* 2-Column Mobile Grid: Standing & Courtroom Focus */}
        <div className="mt-16 sm:mt-24">
          <span className="eyebrow text-gold-deep">Jurisdictions</span>
          <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold text-foreground">
            Admissions & Courtroom Jurisdictions
          </h2>
          <div className="gold-rule mt-3" />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="rounded-sm border border-border bg-card p-5 shadow-sm">
              <Landmark className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                High Court of Sindh
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Appellate and Constitutional Benches (Principal Seat Karachi). Arguing constitutional writ petitions under Article 199, High Court civil suits, and criminal revisions.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-card p-5 shadow-sm">
              <Gavel className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                City Courts & District Judiciary
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Extensive trial practice across Sessions Courts, Judicial Magistrates, Senior Civil Judges, and Rent Controllers in Districts South, East, Central, and West Karachi.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-card p-5 shadow-sm">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                Specialized Financial & Revenue Tribunals
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Banking Courts of Karachi, Appellate Tribunal Inland Revenue (ATIR), Sindh Revenue Board (SRB), and Special Anti-Corruption Courts.
              </p>
            </div>
          </div>
        </div>

        {/* Practice Highlights - 2-Column Grid */}
        <div className="mt-16 sm:mt-24 rounded-sm border border-border bg-secondary/30 p-6 sm:p-10">
          <span className="eyebrow text-gold-deep">Core Competencies</span>
          <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold text-foreground">
            Key Areas of Legal Mastery
          </h2>
          <div className="gold-rule mt-3" />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-sm">
            <div className="rounded-sm border border-border bg-card p-4">
              <div className="flex items-center gap-2 font-bold text-foreground">
                <CheckCircle className="h-4 w-4 text-gold-deep shrink-0" />
                <span>Constitutional Writs & Government Overreach</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Obtaining urgent stay orders against arbitrary state action, illegal demolitions, and municipal violations under Art. 199.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-card p-4">
              <div className="flex items-center gap-2 font-bold text-foreground">
                <CheckCircle className="h-4 w-4 text-gold-deep shrink-0" />
                <span>Criminal Defense, Pre & Post-Arrest Bail</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Bail advocacy under Sections 497 and 498 CrPC; quashing malicious FIRs under Section 561-A CrPC.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-card p-4">
              <div className="flex items-center gap-2 font-bold text-foreground">
                <CheckCircle className="h-4 w-4 text-gold-deep shrink-0" />
                <span>Commercial Suits & Debt Recovery</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Filing Leave to Defend petitions in Banking Courts under FIO 2001 and litigating specific performance of contracts.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-card p-4">
              <div className="flex items-center gap-2 font-bold text-foreground">
                <CheckCircle className="h-4 w-4 text-gold-deep shrink-0" />
                <span>Karachi Property Due Diligence & Possession</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                30-year title searches, resolving DHA/KDA transfer disputes, and challenging illegal land occupations.
              </p>
            </div>
          </div>
        </div>

        {/* Schedule Meeting CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-gold-gradient px-8 text-sm font-bold text-ink shadow-gold hover:brightness-105"
          >
            <span>Request Consultation with Advocate Raheel Anis</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
