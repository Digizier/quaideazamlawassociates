import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Scale,
  Phone,
  MessageCircle,
  Shield,
  Landmark,
  Gavel,
  BookOpen,
  ArrowRight,
  MapPin,
  CheckCircle,
  FileText,
  Building2,
  Users,
} from "lucide-react";
import { PRACTICE_AREAS } from "@/data/practiceAreas";
import { WhatsAppConsultationForm } from "@/components/WhatsAppConsultationForm";

export default function HomePage() {
  return (
    <div className="relative">
      {/* 1. HERO SECTION */}
      <section className="relative isolate min-h-[92vh] sm:min-h-[88vh] flex flex-col justify-center overflow-hidden bg-ink py-16 sm:py-24">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/high-court.jpg"
            alt="Sindh High Court Karachi"
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>

        {/* Quaid-e-Azam Watermark Image */}
        <div className="pointer-events-none absolute right-0 bottom-0 -z-10 h-[45%] sm:h-[65%] lg:h-[85%] w-auto opacity-20 sm:opacity-40 lg:opacity-60 select-none">
          <Image
            src="/images/quaid-e-azam.png"
            alt="Quaid-e-Azam Muhammad Ali Jinnah"
            width={700}
            height={900}
            className="h-full w-auto object-contain object-bottom"
            priority
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur-sm">
              <Scale className="h-3.5 w-3.5" />
              <span>Advocates & Legal Consultants · Karachi</span>
            </div>

            <h1 className="mt-5 font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-ink-foreground uppercase leading-[1.05]">
              Quaid-e-Azam <br />
              <span className="text-gold-gradient">Law Associates</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-foreground/85 font-normal">
              Seasoned courtroom advocacy and strategic counsel led by{" "}
              <strong className="text-gold font-semibold">Advocate Raheel Anis</strong> (High Court of Sindh). Standing as your voice and shield across civil, criminal, banking, tax, property, and constitutional matters.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-gold-gradient px-6 text-sm font-bold text-ink shadow-gold transition-all hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Book Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="tel:+923008211981"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-border/50 bg-white/5 px-5 text-sm font-semibold text-ink-foreground backdrop-blur-sm transition-all hover:border-gold hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-gold" />
                <span>0300-8211981</span>
              </a>

              <a
                href="https://wa.me/923008211981?text=Hello%20Advocate%20Raheel%20Anis,%20I%20would%20like%20to%20consult%20regarding%20a%20legal%20matter."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-whatsapp px-5 text-sm font-semibold text-white shadow transition-all hover:brightness-105"
              >
                <MessageCircle className="h-4 w-4 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Trust Metrics - 2-Column on Mobile */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 border-t border-border/20 pt-6">
            <div className="rounded-sm bg-white/5 p-3.5 sm:p-4 backdrop-blur-sm border border-white/5">
              <p className="font-display text-2xl sm:text-4xl font-bold text-gold">2 Chambers</p>
              <p className="text-[0.7rem] sm:text-xs uppercase tracking-wider text-ink-muted mt-1">DHA Phase 7 & City Courts</p>
            </div>
            <div className="rounded-sm bg-white/5 p-3.5 sm:p-4 backdrop-blur-sm border border-white/5">
              <p className="font-display text-2xl sm:text-4xl font-bold text-gold">9+ Domains</p>
              <p className="text-[0.7rem] sm:text-xs uppercase tracking-wider text-ink-muted mt-1">Trial & Appellate Practice</p>
            </div>
            <div className="rounded-sm bg-white/5 p-3.5 sm:p-4 backdrop-blur-sm border border-white/5">
              <p className="font-display text-2xl sm:text-4xl font-bold text-gold">Sindh High Court</p>
              <p className="text-[0.7rem] sm:text-xs uppercase tracking-wider text-ink-muted mt-1">Writ & Appellate Standing</p>
            </div>
            <div className="rounded-sm bg-white/5 p-3.5 sm:p-4 backdrop-blur-sm border border-white/5">
              <p className="font-display text-2xl sm:text-4xl font-bold text-gold">100%</p>
              <p className="text-[0.7rem] sm:text-xs uppercase tracking-wider text-ink-muted mt-1">Confidential Advisory</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRACTISING BEFORE THE COURTS OF SINDH (BAR AFFILIATIONS) */}
      <section className="border-b border-border bg-card py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <p className="eyebrow text-gold-deep">Institutional Authority</p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-foreground uppercase tracking-wide">
            Practising Before the Courts of Sindh
          </h2>
          <div className="gold-rule mx-auto mt-3" />

          {/* 2-Column on Mobile */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center justify-center rounded-sm border border-border/60 bg-background/50 p-5 sm:p-6 shadow-sm transition-transform hover:-translate-y-1">
              <div className="relative h-20 w-20 sm:h-24 sm:w-24">
                <Image
                  src="/images/karachi-bar.png"
                  alt="Karachi Bar Association logo"
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>
              <h3 className="mt-3 font-display text-base sm:text-xl font-bold text-foreground">
                Karachi Bar Association
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">Subordinate & District Courts</p>
            </div>

            <div className="flex flex-col items-center justify-center rounded-sm border border-border/60 bg-background/50 p-5 sm:p-6 shadow-sm transition-transform hover:-translate-y-1">
              <div className="relative h-20 w-20 sm:h-24 sm:w-24">
                <Image
                  src="/images/shcba-karachi.png"
                  alt="High Court Bar Association Sindh logo"
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>
              <h3 className="mt-3 font-display text-base sm:text-xl font-bold text-foreground">
                High Court Bar Association
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">Sindh High Court, Karachi</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE PRINCIPLES (2-COLUMN ON MOBILE) */}
      <section className="py-12 sm:py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl text-center mx-auto">
            <p className="eyebrow text-gold-deep">Foundational Pillars</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">
              Advocacy Grounded in Integrity
            </h2>
            <div className="gold-rule mx-auto mt-3" />
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Every client matter is treated with the highest priority, strict attorney-client confidentiality, and methodical legal precision.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            <div className="rounded-sm border border-border bg-card p-5 sm:p-6 shadow-sm">
              <Scale className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-display text-lg sm:text-xl font-bold text-foreground">Justice</h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Vigorously upholding citizen liberties and statutory rights without hesitation.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-card p-5 sm:p-6 shadow-sm">
              <Shield className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-display text-lg sm:text-xl font-bold text-foreground">Integrity</h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Total transparency, honest probability assessments, and zero hidden costs.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-card p-5 sm:p-6 shadow-sm">
              <BookOpen className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-display text-lg sm:text-xl font-bold text-foreground">Excellence</h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Exhaustive precedent research, sharp drafting, and compelling court presentation.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-card p-5 sm:p-6 shadow-sm">
              <FileText className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-display text-lg sm:text-xl font-bold text-foreground">Privacy</h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Absolute discretion and privileged handling of all corporate and sensitive personal data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRACTICE AREAS DIRECTORY (2-COLUMN ON MOBILE) */}
      <section className="py-14 sm:py-24 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-gold-deep">Courtroom Capabilities</p>
              <h2 className="mt-2 font-display text-3xl sm:text-5xl font-bold text-foreground">
                Key Practice Areas
              </h2>
              <div className="gold-rule mt-3" />
            </div>
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold-deep"
            >
              <span>Explore All 9 Practice Areas</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 2-Column Grid on Mobile, 3-Column on Desktop */}
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {PRACTICE_AREAS.map((practice) => (
              <Link
                key={practice.slug}
                href={`/practice-areas/${practice.slug}`}
                className="group flex flex-col justify-between rounded-sm border border-border bg-background p-4 sm:p-6 shadow-sm transition-all hover:border-gold hover:shadow-card"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-[0.65rem] text-gold-deep font-semibold">
                      {practice.courtsHandled[0].split("(")[0]}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-gold" />
                  </div>
                  <h3 className="mt-2 font-display text-lg sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {practice.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {practice.shortDescription}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/50 text-[0.7rem] sm:text-xs font-semibold text-primary group-hover:text-gold-deep">
                  View Statutes & Proceedings →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LEAD COUNSEL SPOTLIGHT */}
      <section className="relative isolate overflow-hidden bg-ink py-16 sm:py-24 text-ink-foreground">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/chambers.jpg"
            alt="Law Chambers Karachi"
            fill
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink-overlay" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
            <div>
              <p className="eyebrow text-gold">Lead Counsel</p>
              <h2 className="mt-2 font-display text-3xl sm:text-5xl font-bold uppercase tracking-wide">
                Advocate <span className="text-gold-gradient">Raheel Anis</span>
              </h2>
              <div className="gold-rule mt-3" />

              <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-foreground/80 font-normal">
                Advocate Raheel Anis represents clients before the High Court of Sindh, City Courts Karachi, and Special Tribunals. Known for meticulous statutory interpretation, aggressive bail advocacy, and decisive constitutional writs, he combines academic rigour with courtroom command.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="rounded-sm border border-border/20 bg-white/5 p-3">
                  <p className="font-bold text-gold">High Court of Sindh</p>
                  <p className="text-ink-muted text-xs mt-0.5">Appellate & Constitutional Division</p>
                </div>
                <div className="rounded-sm border border-border/20 bg-white/5 p-3">
                  <p className="font-bold text-gold">Karachi Bar Association</p>
                  <p className="text-ink-muted text-xs mt-0.5">Active Bar Membership</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/advocate"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-gold-gradient px-6 text-sm font-bold text-ink shadow-gold transition-all hover:brightness-105"
                >
                  <span>Read Advocate Profile</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+923008211981"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-sm border border-border/40 bg-white/5 px-5 text-sm font-semibold text-ink-foreground hover:bg-white/10"
                >
                  <Phone className="h-4 w-4 text-gold" />
                  <span>Call 0300-8211981</span>
                </a>
              </div>
            </div>

            {/* Books / Supreme Court Law Reports image */}
            <div className="relative">
              <div className="relative aspect-[4/3] sm:aspect-[4/5] w-full rounded-sm overflow-hidden border border-gold/30 shadow-2xl">
                <Image
                  src="/images/books.jpg"
                  alt="Pakistan Supreme Court Law Reports and Legal Precedents"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 hidden sm:block rounded-sm bg-ink p-4 border border-gold/40 shadow-xl max-w-xs">
                <p className="font-display text-base italic text-ink-foreground">
                  “Honest, effective, and result-oriented courtroom advocacy.”
                </p>
                <p className="eyebrow mt-1 text-gold text-[0.65rem]">Chambers Mission</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONSTITUTIONAL SPOTLIGHT (1973 CONSTITUTION) */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] items-center rounded-sm border border-border bg-card overflow-hidden shadow-card">
            <div className="relative h-64 sm:h-80 lg:h-full min-h-[300px]">
              <Image
                src="/images/constitution.jpg"
                alt="1973 Constitution of the Islamic Republic of Pakistan"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            <div className="p-6 sm:p-10">
              <p className="eyebrow text-gold-deep">Constitutional Safeguards</p>
              <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold text-foreground">
                Upholding Fundamental Rights Before the Sindh High Court
              </h2>
              <div className="gold-rule mt-3" />
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                When administrative agencies, regulatory bodies, or municipal officers act arbitrarily, the High Court of Sindh possesses extraordinary powers under Article 199 of the 1973 Constitution to intervene and restore justice.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-2 text-xs sm:text-sm text-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-gold-deep shrink-0" />
                  <span>Writs of Mandamus & Certiorari</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-gold-deep shrink-0" />
                  <span>Quashing Unlawful Orders</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-gold-deep shrink-0" />
                  <span>Service & Public Tenders</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-gold-deep shrink-0" />
                  <span>Stay on Demolition Drives</span>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/practice-areas/constitutional-petitions"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-gold-deep"
                >
                  <span>Learn About High Court Writ Procedures</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WORKING PROCESS (2-COLUMN ON MOBILE) */}
      <section className="py-12 sm:py-20 bg-secondary/30 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl text-center mx-auto">
            <p className="eyebrow text-gold-deep">Procedural Clarity</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">
              Our 4-Stage Legal Process
            </h2>
            <div className="gold-rule mx-auto mt-3" />
            <p className="mt-3 text-sm sm:text-base text-muted-foreground">
              From the initial confidential meeting to final decree or judgment.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            <div className="rounded-sm border border-border bg-card p-5 text-center shadow-sm">
              <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-ink font-display text-lg font-bold text-gold">
                1
              </span>
              <h3 className="mt-3 font-display text-base sm:text-lg font-bold text-foreground">
                Confidential Case Review
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                We review documents and examine relevant factual records in complete privacy.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-card p-5 text-center shadow-sm">
              <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-ink font-display text-lg font-bold text-gold">
                2
              </span>
              <h3 className="mt-3 font-display text-base sm:text-lg font-bold text-foreground">
                Precedent & Law Research
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Thorough search of binding High Court and Supreme Court case precedents.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-card p-5 text-center shadow-sm">
              <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-ink font-display text-lg font-bold text-gold">
                3
              </span>
              <h3 className="mt-3 font-display text-base sm:text-lg font-bold text-foreground">
                Drafting & Institution
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Rigorous preparation of plaints, bail petitions, and filing before proper forums.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-card p-5 text-center shadow-sm">
              <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-ink font-display text-lg font-bold text-gold">
                4
              </span>
              <h3 className="mt-3 font-display text-base sm:text-lg font-bold text-foreground">
                Courtroom Advocacy
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Persuasive oral arguments and step-by-step progress reports to the client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TWO KARACHI CHAMBERS (2-COLUMN ON MOBILE) */}
      <section className="py-14 sm:py-24 bg-card border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl text-center mx-auto">
            <p className="eyebrow text-gold-deep">Physical Locations</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">
              Two Accessible Chambers Across Karachi
            </h2>
            <div className="gold-rule mx-auto mt-3" />
            <p className="mt-3 text-sm sm:text-base text-muted-foreground">
              Consultations scheduled by appointment at our DHA or City Court chambers.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* DHA Chamber */}
            <div className="flex flex-col justify-between rounded-sm border border-border bg-background p-6 sm:p-8 shadow-card transition-transform hover:-translate-y-1">
              <div>
                <span className="eyebrow text-gold-deep">South Karachi</span>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-foreground">
                  DHA Phase 7 Chamber
                </h3>
                <div className="gold-rule mt-3" />
                <p className="mt-4 flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    Ground Floor No. 3, Plot C/7/C, Khayaban-e-Sehar Commercial, Phase 7, Defence Housing Authority (DHA), Karachi, Pakistan.
                  </span>
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                <a
                  href="tel:+923008211981"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold-deep"
                >
                  <Phone className="h-4 w-4" />
                  <span>0300-8211981</span>
                </a>
                <Link
                  href="/offices"
                  className="text-xs font-bold text-gold-deep hover:underline uppercase tracking-wider"
                >
                  Directions & Hours →
                </Link>
              </div>
            </div>

            {/* City Court Chamber */}
            <div className="flex flex-col justify-between rounded-sm border border-border bg-background p-6 sm:p-8 shadow-card transition-transform hover:-translate-y-1">
              <div>
                <span className="eyebrow text-gold-deep">Judicial District</span>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-foreground">
                  City Court Chamber
                </h3>
                <div className="gold-rule mt-3" />
                <p className="mt-4 flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    Office 102, Mezzanine Floor, Fareed Chamber, Syedna Tahir Saifuddin Road, Adjacent Green Centre, Opposite City Court, Karachi, Sindh, Pakistan.
                  </span>
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                <a
                  href="tel:+923008211981"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold-deep"
                >
                  <Phone className="h-4 w-4" />
                  <span>0300-8211981</span>
                </a>
                <Link
                  href="/offices"
                  className="text-xs font-bold text-gold-deep hover:underline uppercase tracking-wider"
                >
                  Directions & Hours →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. LEAD CONSULTATION & WHATSAPP REDIRECTION FORM */}
      <section id="consultation" className="py-14 sm:py-24 bg-ink text-ink-foreground border-t border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] items-center">
            <div>
              <p className="eyebrow text-gold">Direct Access to Counsel</p>
              <h2 className="mt-2 font-display text-3xl sm:text-5xl font-bold uppercase tracking-wide">
                Book a Private Consultation
              </h2>
              <div className="gold-rule mt-3" />
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink-foreground/80 font-normal">
                Facing immediate arrest, unlawful departmental orders, or property litigation? Submit your inquiry directly to Advocate Raheel Anis. All messages are transmitted securely to our designated WhatsApp line for swift action.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="tel:+923008211981"
                  className="flex items-center gap-4 rounded-sm border border-border/20 bg-white/5 p-4 hover:border-gold/50 transition-colors"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gold/20 text-gold shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase text-ink-muted">Immediate Telephone Contact</p>
                    <p className="font-display text-xl font-bold text-ink-foreground">0300-8211981</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/923008211981?text=Hello%20Advocate%20Raheel%20Anis,%20I%20would%20like%20to%20consult%20regarding%20a%20legal%20matter."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-sm border border-border/20 bg-white/5 p-4 hover:border-whatsapp/50 transition-colors"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-whatsapp/20 text-whatsapp shrink-0">
                    <MessageCircle className="h-5 w-5 fill-current" />
                  </div>
                  <div>
                    <p className="text-xs uppercase text-ink-muted">Official WhatsApp Helpline</p>
                    <p className="font-display text-xl font-bold text-ink-foreground">+92 300 8211981</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Embedded WhatsApp consultation form */}
            <div>
              <WhatsAppConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
