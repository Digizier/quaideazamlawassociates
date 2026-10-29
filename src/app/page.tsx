import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Scale,
  Phone,
  MessageCircle,
  Shield,
  ArrowRight,
  MapPin,
  CheckCircle,
  FileText,
  Lock,
  Target,
  Gavel,
  Landmark,
  Briefcase,
  Receipt,
  Users,
  Home as HomeIcon,
  ScrollText,
} from "lucide-react";
import { PRACTICE_AREAS } from "@/data/practiceAreas";
import { WhatsAppConsultationForm } from "@/components/WhatsAppConsultationForm";

export default function HomePage() {
  return (
    <div className="relative">
      {/* 1. HERO SECTION (Identical visual design to Reference Image 1) */}
      <section id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-ink">
        {/* Background Image with slow zoom animation */}
        <img
          src="/images/high-court.jpg"
          alt="Sindh High Court building, Karachi"
          className="animate-slow-zoom absolute inset-0 -z-20 h-full w-full object-cover"
        />

        {/* Hero Overlay Gradient */}
        <div className="bg-hero-overlay absolute inset-0 -z-10" />

        {/* Quaid-e-Azam Portrait seamlessly blended with dual mask-image gradient */}
        <img
          src="/images/quaid-e-azam.png"
          alt="Quaid-e-Azam Muhammad Ali Jinnah"
          className="animate-rise pointer-events-none absolute right-0 bottom-0 -z-10 h-[50%] w-auto object-cover opacity-30 quaid-portrait-mask sm:h-[60%] sm:opacity-45 lg:h-[88%] lg:opacity-80"
        />

        {/* Hero Content */}
        <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 sm:px-6 pt-32 pb-16">
          <div className="max-w-2xl">
            <p className="animate-rise eyebrow flex items-center gap-3 text-gold">
              <Scale className="h-4 w-4 text-gold" />
              <span>Advocates &amp; Legal Consultants · Karachi</span>
            </p>

            <h1
              className="animate-rise mt-6 text-5xl leading-[1.02] font-extrabold tracking-wide text-ink-foreground uppercase sm:text-7xl font-display"
              style={{ animationDelay: "0.1s" }}
            >
              Quaid-e-Azam <br className="hidden sm:inline" />
              <span className="text-gold-gradient">Law Associates</span>
            </h1>

            <p
              className="animate-rise mt-4 max-w-xl text-lg leading-relaxed text-ink-foreground/80 font-normal"
              style={{ animationDelay: "0.3s" }}
            >
              Trusted legal representation led by Advocate Raheel Anis — delivered with professionalism, dedication and complete confidentiality.
            </p>

            {/* CTAs */}
            <div
              className="animate-rise mt-10 flex flex-wrap gap-3"
              style={{ animationDelay: "0.4s" }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer bg-gold-gradient text-gold-foreground font-semibold shadow-gold hover:brightness-105 hover:-translate-y-0.5 transition-all h-13 rounded-sm px-8 text-[0.95rem]"
              >
                Book Consultation
              </Link>

              <a
                href="tel:+923008211981"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer transition-colors border border-ink-foreground/40 text-ink-foreground font-semibold hover:bg-ink-foreground/10 hover:border-gold h-13 rounded-sm px-8 text-[0.95rem]"
              >
                <Phone className="h-4 w-4 text-gold" />
                <span>0300-8211981</span>
              </a>

              <a
                href="https://wa.me/923008211981?text=Hello%20Advocate%20Raheel%20Anis,%20I%20would%20like%20to%20consult%20regarding%20a%20legal%20matter."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer transition-colors bg-whatsapp text-white font-semibold shadow hover:brightness-110 h-13 rounded-sm px-8 text-[0.95rem]"
              >
                <MessageCircle className="h-4 w-4 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Minimalist Trust Stats (Identical to Reference Image 1) */}
          <dl
            className="animate-rise mt-16 sm:mt-20 grid max-w-3xl grid-cols-3 gap-6 border-t border-ink-foreground/15 pt-8"
            style={{ animationDelay: "0.55s" }}
          >
            <div>
              <dt className="font-display text-3xl sm:text-4xl font-bold text-gold">2</dt>
              <dd className="mt-1 text-xs tracking-wide text-ink-foreground/70 uppercase">
                Offices in Karachi
              </dd>
            </div>
            <div>
              <dt className="font-display text-3xl sm:text-4xl font-bold text-gold">9+</dt>
              <dd className="mt-1 text-xs tracking-wide text-ink-foreground/70 uppercase">
                Areas of practice
              </dd>
            </div>
            <div>
              <dt className="font-display text-3xl sm:text-4xl font-bold text-gold">100%</dt>
              <dd className="mt-1 text-xs tracking-wide text-ink-foreground/70 uppercase">
                Confidential advice
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 2. PRACTISING BEFORE THE COURTS OF SINDH (Exact Reference Layout) */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 text-center">
          <p className="font-display text-2xl font-bold tracking-wide text-gold-deep uppercase sm:text-3xl">
            Practising before the courts of Sindh
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div className="flex flex-col items-center gap-4">
              <img
                src="/images/karachi-bar.png"
                alt="Karachi Bar Association logo"
                className="h-24 w-24 object-contain"
                loading="lazy"
              />
              <span className="font-display text-2xl font-extrabold text-foreground">
                Karachi Bar Association
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <img
                src="/images/shcba-karachi.png"
                alt="High Court Bar Association Sindh logo"
                className="h-24 w-24 object-contain"
                loading="lazy"
              />
              <span className="font-display text-2xl font-extrabold text-foreground">
                High Court Bar Association Sindh
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FIRM EMBLEM & MISSION QUOTES (Exact Reference Section) */}
      <section className="bg-ink py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/firm-logo.png"
              alt="Quaid-e-Azam Law Associates logo"
              className="h-36 w-36 sm:h-44 sm:w-44 rounded-full bg-card object-contain p-2 shadow-elegant"
              loading="lazy"
            />
            <h2 className="mt-8 text-4xl font-extrabold tracking-wide text-gold-gradient uppercase sm:text-6xl font-display">
              Quaid-e-Azam Law Associates
            </h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <div className="rounded-sm border border-gold/40 bg-ink/60 p-8 shadow-sm">
              <p className="font-display text-lg leading-relaxed font-normal text-ink-foreground">
                “We treat every client&apos;s case with the highest degree of priority, confidentiality, and professional zeal.”
              </p>
            </div>
            <div className="rounded-sm border border-gold/40 bg-ink/60 p-8 shadow-sm">
              <p className="font-display text-lg leading-relaxed font-normal text-ink-foreground">
                “Delivering practical, result-oriented legal solutions tailored to your specific needs.”
              </p>
            </div>
            <div className="rounded-sm border border-gold/40 bg-ink/60 p-8 shadow-sm">
              <p className="font-display text-lg leading-relaxed font-normal text-ink-foreground">
                “Standing as your shield and voice before the courts of law.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT THE FIRM SPOTLIGHT (With Law Reports Image) */}
      <section id="about" className="scroll-mt-20 py-16 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 sm:gap-16 px-4 sm:px-6 lg:grid-cols-2">
          <div className="relative">
            <img
              src="/images/books.jpg"
              alt="Pakistan Supreme Court Cases law reports"
              className="aspect-[4/5] w-full max-w-md rounded-sm object-cover shadow-elegant"
              loading="lazy"
            />
            <div className="absolute -right-2 -bottom-8 hidden w-64 rounded-sm bg-ink p-6 shadow-elegant sm:block lg:-right-6">
              <p className="font-display text-2xl leading-snug text-ink-foreground italic">
                “Honest, effective and result-oriented legal services.”
              </p>
              <p className="eyebrow mt-4 text-gold">Our mission</p>
            </div>
          </div>

          <div>
            <div className="max-w-2xl">
              <p className="eyebrow text-gold-deep">About the Firm</p>
              <div className="gold-rule mt-4" />
              <h2 className="mt-5 text-3xl sm:text-5xl leading-tight font-bold text-foreground font-display">
                PROTECTING YOUR RIGHTS WITH STRATEGY AND HONESTY
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
                Quaid-e-Azam Law Associates is a Karachi law firm providing legal services across civil, criminal, corporate, taxation, banking, family, constitutional and property matters.
              </p>
            </div>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Our vision:</strong> to be one of Pakistan&apos;s most respected law firms, known for excellence and integrity.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="border-t-2 border-gold pt-5">
                <Scale className="h-6 w-6 text-primary" />
                <h3 className="mt-3 text-xl font-bold font-display">Justice</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Defending individual and corporate rights without fear or favour.
                </p>
              </div>
              <div className="border-t-2 border-gold pt-5">
                <Lock className="h-6 w-6 text-primary" />
                <h3 className="mt-3 text-xl font-bold font-display">Integrity</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Complete transparency and strict client confidentiality.
                </p>
              </div>
              <div className="border-t-2 border-gold pt-5">
                <Target className="h-6 w-6 text-primary" />
                <h3 className="mt-3 text-xl font-bold font-display">Excellence</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Thorough research, sharp drafting and strong courtroom advocacy.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-gold-deep"
              >
                <span>Read Full Firm Story &amp; Bar Affiliations</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEAD ADVOCATE SPOTLIGHT (Chambers Background) */}
      <section id="advocate" className="relative isolate scroll-mt-20 overflow-hidden bg-ink py-20 sm:py-28">
        <img
          src="/images/chambers.jpg"
          alt="Law Chambers Karachi"
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35"
          loading="lazy"
        />
        <div className="bg-ink-overlay absolute inset-0 -z-10" />

        <div className="mx-auto grid max-w-7xl gap-12 sm:gap-16 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="max-w-2xl">
              <p className="eyebrow text-gold">Lead Advocate</p>
              <div className="gold-rule mt-4" />
              <h2 className="mt-5 text-4xl sm:text-5xl leading-tight font-bold text-ink-foreground font-display">
                Advocate <span className="text-gold-gradient">Raheel Anis</span>
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink-foreground/80">
                Dedicated courtroom advocacy and strategic representation in Karachi. Advocate Raheel Anis specialises in civil, criminal, corporate, banking, taxation, constitutional, family and property matters — committed to practical legal solutions with honesty, dedication and professionalism.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/advocate"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold-gradient px-8 text-sm font-semibold text-gold-foreground shadow-gold hover:brightness-105 h-13"
              >
                <span>Speak with the Advocate</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="flex items-start gap-5 rounded-sm border border-ink-foreground/15 bg-ink/60 p-6 backdrop-blur">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/60 text-gold">
                <Landmark className="h-5 w-5" />
              </span>
              <div>
                <p className="eyebrow text-gold">Primary Jurisdiction</p>
                <p className="mt-2 font-display text-xl sm:text-2xl text-ink-foreground">
                  Karachi &amp; Sindh Appellate Courts
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 rounded-sm border border-ink-foreground/15 bg-ink/60 p-6 backdrop-blur">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/60 text-gold">
                <Shield className="h-5 w-5" />
              </span>
              <div>
                <p className="eyebrow text-gold">Client Privilege</p>
                <p className="mt-2 font-display text-xl sm:text-2xl text-ink-foreground">
                  100% Confidential Legal Advisory
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 rounded-sm border border-ink-foreground/15 bg-ink/60 p-6 backdrop-blur">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/60 text-gold">
                <Gavel className="h-5 w-5" />
              </span>
              <div>
                <p className="eyebrow text-gold">Courtroom Focus</p>
                <p className="mt-2 font-display text-xl sm:text-2xl text-ink-foreground">
                  Trial, appellate and writ jurisdiction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRACTICE AREAS GRID (Compact 2-Column on Mobile) */}
      <section id="practice" className="scroll-mt-20 bg-secondary/60 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-gold-deep">Legal Capabilities</p>
            <div className="gold-rule mt-4 mx-auto" />
            <h2 className="mt-5 text-3xl sm:text-5xl leading-tight font-bold text-foreground font-display">
              Our Key Practice Areas
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
              Strategic, result-driven courtroom advocacy and legal advisory across the primary divisions of Pakistani law.
            </p>
          </div>

          {/* 2-Column on Mobile, 3-Column on Desktop */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {PRACTICE_AREAS.map((practice) => (
              <Link
                key={practice.slug}
                href={`/practice-areas/${practice.slug}`}
                className="group flex flex-col justify-between rounded-sm border border-border bg-card p-5 sm:p-7 transition-all hover:bg-ink hover:border-gold hover:shadow-card"
              >
                <div>
                  <div className="flex items-center justify-between text-gold-deep group-hover:text-gold">
                    <Scale className="h-6 w-6" />
                    <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-4 font-display text-lg sm:text-2xl font-bold text-foreground group-hover:text-ink-foreground transition-colors">
                    {practice.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground group-hover:text-ink-foreground/75 transition-colors line-clamp-2 sm:line-clamp-3">
                    {practice.shortDescription}
                  </p>
                </div>
                <span className="mt-4 text-[0.7rem] sm:text-xs font-semibold text-primary group-hover:text-gold block">
                  Read Practice Guidance →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-gold-deep"
            >
              <span>Explore All 9 Practice Areas Directory</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CONSTITUTIONAL PRACTICE FOCUS (With 1973 Constitution Book) */}
      <section className="py-20 sm:py-28 bg-card border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-10 overflow-hidden rounded-sm bg-ink lg:grid-cols-[1fr_1.3fr]">
            <img
              src="/images/constitution.jpg"
              alt="The 1973 Constitution of the Islamic Republic of Pakistan"
              className="h-full max-h-[560px] w-full object-cover object-top"
              loading="lazy"
            />
            <div className="p-8 sm:p-12 text-ink-foreground">
              <p className="eyebrow text-gold">Constitutional Practice</p>
              <h3 className="mt-4 text-3xl sm:text-5xl leading-tight font-bold font-display">
                Upholding the rights guaranteed by the 1973 Constitution
              </h3>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink-foreground/80">
                When a public body oversteps its powers or your fundamental rights are at stake, we file and argue constitutional writ petitions before the Sindh High Court.
              </p>
              <ul className="mt-8 grid gap-3 text-sm text-ink-foreground/90 sm:grid-cols-2">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Writ petitions (Art. 199)
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Fundamental rights defense
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Service matters &amp; seniority
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Challenges to unlawful orders
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/practice-areas/constitutional-petitions"
                  className="inline-flex items-center gap-2 text-sm font-bold text-gold hover:underline"
                >
                  <span>Learn About High Court Writs</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TWO OFFICES ACROSS KARACHI */}
      <section id="offices" className="scroll-mt-20 bg-secondary/60 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-gold-deep">Our Offices</p>
            <div className="gold-rule mt-4 mx-auto" />
            <h2 className="mt-5 text-3xl sm:text-5xl leading-tight font-bold text-foreground font-display">
              Two offices across Karachi
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
              Visit us at the location most convenient for you.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="flex flex-col rounded-sm border border-border bg-card p-8 shadow-elegant transition-transform hover:-translate-y-1">
              <p className="eyebrow text-gold-deep">Khayaban-e-Sehar</p>
              <h3 className="mt-2 text-2xl sm:text-3xl font-bold font-display">DHA Phase 7</h3>
              <div className="gold-rule mt-4" />
              <p className="mt-6 flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>
                  Ground Floor No. 3, Plot C/7/C, Khayaban-e-Sehar Commercial, Phase 7, DHA, Karachi, Pakistan.
                </span>
              </p>
              <div className="mt-5">
                <a href="tel:+923008211981" className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-foreground hover:text-primary">
                    0300-8211981
                  </span>
                </a>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold">
                <a
                  href="https://www.google.com/maps/search/Khayaban-e-Sehar+Phase+7+DHA+Karachi"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:text-gold-deep flex items-center gap-1.5"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  Get directions
                </a>
                <Link href="/offices" className="text-gold-deep hover:underline">
                  Chamber Details →
                </Link>
              </div>
            </article>

            <article className="flex flex-col rounded-sm border border-border bg-card p-8 shadow-elegant transition-transform hover:-translate-y-1">
              <p className="eyebrow text-gold-deep">Fareed Chamber</p>
              <h3 className="mt-2 text-2xl sm:text-3xl font-bold font-display">City Court Area</h3>
              <div className="gold-rule mt-4" />
              <p className="mt-6 flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>
                  Office 102, Mezzanine Floor, Fareed Chamber, Syedna Tahir Saifuddin Road, Adjacent Green Centre, Opposite City Court, Karachi, Sindh, Pakistan.
                </span>
              </p>
              <div className="mt-5">
                <a href="tel:+923008211981" className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-foreground hover:text-primary">
                    0300-8211981
                  </span>
                </a>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold">
                <a
                  href="https://www.google.com/maps/search/Fareed+Chamber+Syedna+Tahir+Saifuddin+Road+Karachi"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:text-gold-deep flex items-center gap-1.5"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  Get directions
                </a>
                <Link href="/offices" className="text-gold-deep hover:underline">
                  Chamber Details →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 9. LEAD CONSULTATION & WHATSAPP FORM */}
      <section id="contact" className="scroll-mt-20 py-20 sm:py-28 bg-card border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-12 sm:gap-16 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="max-w-2xl">
              <p className="eyebrow text-gold-deep">Get In Touch</p>
              <div className="gold-rule mt-4" />
              <h2 className="mt-5 text-3xl sm:text-5xl leading-tight font-bold text-foreground font-display">
                Contact Advocate Raheel Anis
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
                Urgent legal representation and consultation in Karachi. Reach us directly by call, WhatsApp or email.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <a
                href="tel:+923008211981"
                className="flex items-center gap-5 rounded-sm border border-border bg-background p-4 sm:p-5 transition-colors hover:border-gold"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-gold shrink-0">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                    Mobile / WhatsApp
                  </span>
                  <span className="font-display text-xl sm:text-2xl font-bold text-foreground">
                    0300-8211981
                  </span>
                </div>
              </a>

              <a
                href="mailto:raheelanis81@gmail.com"
                className="flex items-center gap-5 rounded-sm border border-border bg-background p-4 sm:p-5 transition-colors hover:border-gold"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-gold shrink-0">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                    Email
                  </span>
                  <span className="truncate block font-display text-lg sm:text-2xl font-bold text-foreground">
                    raheelanis81@gmail.com
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div>
            <WhatsAppConsultationForm />
          </div>
        </div>
      </section>
    </div>
  );
}
