import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Scale, Shield, Landmark } from "lucide-react";
import { PRACTICE_AREAS } from "@/data/practiceAreas";

export const metadata: Metadata = {
  title: "Practice Areas | Quaid-e-Azam Law Associates Karachi",
  description:
    "Explore our 9 core practice areas led by Advocate Raheel Anis: Constitutional Writs, Criminal Defense, Civil Litigation, Corporate Law, Banking Recovery, FBR Taxation, Property Disputes, and Family Law in Karachi.",
  alternates: {
    canonical: "/practice-areas",
  },
};

export default function PracticeAreasIndexPage() {
  return (
    <div className="pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Breadcrumb & Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-gold-deep uppercase tracking-widest">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Practice Areas</span>
          </div>
          <h1 className="mt-3 font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-foreground tracking-tight">
            Our Key <span className="text-primary">Practice Areas</span>
          </h1>
          <div className="gold-rule mt-4" />
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Strategic, result-driven courtroom advocacy and legal advisory across the primary divisions of Pakistani law, represented before the High Court of Sindh, City Courts Karachi, and specialized regulatory tribunals.
          </p>
        </div>

        {/* 2-Column Grid on Mobile, 3-Column on Desktop */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PRACTICE_AREAS.map((practice, idx) => (
            <Link
              key={practice.slug}
              href={`/practice-areas/${practice.slug}`}
              className="group flex flex-col justify-between rounded-sm border border-border bg-card p-6 shadow-sm transition-all hover:border-gold hover:shadow-card hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-mono text-gold-deep font-bold">
                    0{idx + 1}
                  </span>
                  <span className="font-urdu text-sm text-foreground/80">
                    {practice.urduTitle}
                  </span>
                </div>

                <h2 className="mt-3 font-display text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {practice.title}
                </h2>

                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-gold-deep">
                  {practice.tagline}
                </p>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {practice.shortDescription}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-bold text-primary group-hover:text-gold-deep">
                <span>View Full Practice Details</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* Advisory Consultation Strip */}
        <div className="mt-16 rounded-sm border border-border bg-ink p-8 text-ink-foreground text-center sm:text-left sm:flex sm:items-center sm:justify-between shadow-card">
          <div>
            <h3 className="font-display text-2xl font-bold">Need Guidance on Your Specific Legal Matter?</h3>
            <p className="mt-1 text-sm text-ink-muted">
              Schedule a confidential assessment at our DHA Phase 7 or City Court chambers.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-6 sm:mt-0 inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-gold-gradient px-6 text-sm font-bold text-ink shadow-gold hover:brightness-105 shrink-0"
          >
            <span>Book Legal Consultation</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
