import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Scale,
  Landmark,
  FileCheck,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { PRACTICE_AREAS, PracticeArea } from "@/data/practiceAreas";
import { WhatsAppConsultationForm } from "@/components/WhatsAppConsultationForm";
import { JsonLd } from "@/components/JsonLd";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PRACTICE_AREAS.map((practice) => ({
    slug: practice.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const practice = PRACTICE_AREAS.find((p) => p.slug === params.slug);
  if (!practice) {
    return {
      title: "Practice Area Not Found | Quaid-e-Azam Law Associates",
    };
  }

  return {
    title: `${practice.title} | Advocate Raheel Anis, Karachi`,
    description: `${practice.tagline}. Legal representation, drafting, and advocacy before the High Court of Sindh and Karachi courts. Consult Advocate Raheel Anis.`,
    alternates: {
      canonical: `/practice-areas/${practice.slug}`,
    },
    openGraph: {
      title: `${practice.title} | Quaid-e-Azam Law Associates`,
      description: practice.shortDescription,
      url: `https://quaideazamlawassociates.com/practice-areas/${practice.slug}`,
    },
  };
}

export default function PracticeAreaDetailPage({ params }: Props) {
  const practice = PRACTICE_AREAS.find((p) => p.slug === params.slug);

  if (!practice) {
    notFound();
  }

  // FAQ Schema for Rich Snippets & AI SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": practice.faq.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <div className="pt-28 pb-16 sm:pt-36 sm:pb-24">
      <JsonLd data={faqSchema} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-gold-deep uppercase tracking-widest">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/practice-areas" className="hover:underline">Practice Areas</Link>
          <span>/</span>
          <span className="truncate max-w-[200px] sm:max-w-none text-foreground">{practice.title}</span>
        </div>

        {/* Practice Hero */}
        <div className="mt-6 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="font-urdu text-lg sm:text-xl text-primary font-bold">
              {practice.urduTitle}
            </span>
          </div>

          <h1 className="mt-2 font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-foreground tracking-tight">
            {practice.title}
          </h1>

          <p className="eyebrow text-gold-deep mt-2 font-bold text-sm">
            {practice.tagline}
          </p>
          <div className="gold-rule mt-4" />

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground font-normal">
            {practice.fullDescription}
          </p>
        </div>

        {/* 2-Column Grid: Services & Statutory Framework */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Key Services Offered */}
          <div className="rounded-sm border border-border bg-card p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2">
              <FileCheck className="h-5 w-5 text-primary" />
              <h2 className="font-display text-2xl font-bold text-foreground">
                Key Services & Remedies
              </h2>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Direct litigation, drafting, and trial representation handled by our chambers:
            </p>

            <ul className="mt-6 space-y-3.5">
              {practice.keyServices.map((service, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                  <CheckCircle className="h-4 w-4 text-gold-deep shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Governing Statutes & Courts Handled */}
          <div className="space-y-6">
            <div className="rounded-sm border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                <h3 className="font-display text-xl font-bold text-foreground">
                  Governing Statutes & Acts
                </h3>
              </div>
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-muted-foreground">
                {practice.governingLaws.map((law, i) => (
                  <li key={i} className="flex items-center gap-2 font-mono text-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                    <span>{law}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-sm border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Landmark className="h-5 w-5 text-primary" />
                <h3 className="font-display text-xl font-bold text-foreground">
                  Courts & Forums Handled
                </h3>
              </div>
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-muted-foreground">
                {practice.courtsHandled.map((court, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{court}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Practical Counsel Insight */}
        <div className="mt-12 rounded-sm border-l-4 border-gold bg-secondary/50 p-6 sm:p-8">
          <div className="flex items-center gap-2 text-gold-deep">
            <AlertCircle className="h-5 w-5" />
            <span className="font-display font-bold text-lg text-foreground">
              Advocate Raheel Anis — Strategic Practice Insight
            </span>
          </div>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-foreground/85 font-medium italic">
            “{practice.practicalInsight}”
          </p>
        </div>

        {/* Practice Area FAQs */}
        <div className="mt-16 sm:mt-24">
          <div className="max-w-2xl">
            <span className="eyebrow text-gold-deep">Frequently Asked Questions</span>
            <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold text-foreground">
              Questions Regarding {practice.title}
            </h2>
            <div className="gold-rule mt-3" />
          </div>

          <div className="mt-8 space-y-4 max-w-4xl">
            {practice.faq.map((item, i) => (
              <div
                key={i}
                className="rounded-sm border border-border bg-card p-5 sm:p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-gold-deep shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {item.question}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp Lead Form for this Practice Area */}
        <div className="mt-16 sm:mt-24">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="eyebrow text-gold-deep">Direct Case Assessment</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground">
              Consult on Your {practice.title} Matter
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Inquiries submitted here route straight to Advocate Raheel Anis on WhatsApp for prompt evaluation.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <WhatsAppConsultationForm initialSubject={practice.title} />
          </div>
        </div>

        {/* Other Practice Areas Navigation */}
        <div className="mt-16 border-t border-border pt-8 flex items-center justify-between">
          <Link
            href="/practice-areas"
            className="text-xs sm:text-sm font-semibold text-primary hover:text-gold-deep flex items-center gap-2"
          >
            ← View All Practice Areas
          </Link>

          <Link
            href="/contact"
            className="text-xs sm:text-sm font-semibold text-gold-deep hover:underline flex items-center gap-1"
          >
            Chambers Contacts →
          </Link>
        </div>
      </div>
    </div>
  );
}
