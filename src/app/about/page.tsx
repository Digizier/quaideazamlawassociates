import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Scale, ShieldCheck, Landmark, Award, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Our Law Chambers",
  description:
    "Learn about Quaid-e-Azam Law Associates, our founding philosophy, bar standing across Sindh, and legal advocacy led by Advocate Raheel Anis in Karachi.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Breadcrumb & Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-gold-deep uppercase tracking-widest">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
          <h1 className="mt-3 font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-foreground tracking-tight">
            Protecting Rights With <span className="text-primary">Strategy & Honesty</span>
          </h1>
          <div className="gold-rule mt-4" />
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Quaid-e-Azam Law Associates is a distinguished Karachi law firm providing full-spectrum advocacy across civil, criminal, corporate, banking, taxation, family, constitutional, and real estate laws.
          </p>
        </div>

        {/* Founding Philosophy & Jinnah's Legacy */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2 items-center">
          <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-sm overflow-hidden border border-border shadow-card">
            <Image
              src="/images/books.jpg"
              alt="Supreme Court Cases and Pakistan Legal Reference Reports"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 600px"
              priority
            />
          </div>

          <div>
            <span className="eyebrow text-gold-deep">Founding Philosophy</span>
            <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold text-foreground">
              Inspired by the Standard of Quaid-e-Azam Muhammad Ali Jinnah
            </h2>
            <div className="gold-rule mt-3" />
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
              Quaid-e-Azam Muhammad Ali Jinnah was not only the founding father of Pakistan but one of the most brilliant, uncompromising, and ethically upright barristers in legal history. His courtroom discipline, absolute honesty with judges and clients, and meticulous command of facts inspire the daily work of our chambers.
            </p>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
              Under the stewardship of <strong className="text-foreground">Advocate Raheel Anis</strong>, our firm rejects superficial promises and artificial guarantees. We evaluate cases on legal merit, prepare forensic evidence, and present arguments with unshakeable conviction before the bench.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="rounded-sm border border-border bg-card p-3">
                <span className="block font-bold text-primary">Uncompromising Truth</span>
                <span className="text-xs text-muted-foreground">Frank legal assessments from day one</span>
              </div>
              <div className="rounded-sm border border-border bg-card p-3">
                <span className="block font-bold text-primary">Strict Confidentiality</span>
                <span className="text-xs text-muted-foreground">Protected attorney-client privilege</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values - 2-Column Mobile Grid */}
        <div className="mt-16 sm:mt-24">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow text-gold-deep">Firm Pillars</span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-foreground">
              The Three Pillars of Our Practice
            </h2>
            <div className="gold-rule mx-auto mt-3" />
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-sm border border-border bg-card p-6 shadow-sm">
              <Scale className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-display text-2xl font-bold text-foreground">Justice</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                We believe the law exists to protect individual dignity and commercial fairness. Whether defending against arbitrary state interference, corporate exploitation, or personal injustice, our advocacy is fearless and unrelenting.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-card p-6 shadow-sm">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-display text-2xl font-bold text-foreground">Integrity</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Honesty with clients is the cornerstone of our practice. We provide clear, unvarnished legal opinions on probability, statutory hurdles, and estimated timelines, avoiding unnecessary litigation when negotiated settlement serves the client best.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-card p-6 shadow-sm">
              <Award className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-display text-2xl font-bold text-foreground">Excellence</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Preparation wins cases. Our team invests extensive hours in investigating records, verifying revenue entries, interrogating financial trails, and drafting articulate pleadings grounded in authoritative Supreme Court precedents.
              </p>
            </div>
          </div>
        </div>

        {/* Bar Affiliations Section */}
        <div className="mt-16 sm:mt-24 rounded-sm border border-border bg-secondary/30 p-6 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <span className="eyebrow text-gold-deep">Professional Affiliations</span>
              <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold text-foreground">
                Recognized Standing Across Sindh Courts
              </h2>
              <div className="gold-rule mt-3" />
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                Our advocates are active members of Pakistan's most prominent bar associations, upholding high professional conduct and contributing to legal jurisprudence in Karachi:
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground text-sm">High Court Bar Association Sindh (SHCBA)</strong>
                    <p className="text-xs text-muted-foreground">Principal seat Karachi, appellate and writ practice.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground text-sm">Karachi Bar Association (KBA)</strong>
                    <p className="text-xs text-muted-foreground">The largest bar association in Pakistan, active trial practice across City Courts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground text-sm">Sindh Bar Council</strong>
                    <p className="text-xs text-muted-foreground">Statutory licensing and regulatory authority for advocates of Sindh.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-sm border border-border bg-card p-4 flex flex-col items-center text-center shadow-sm">
                <div className="relative h-20 w-20">
                  <Image
                    src="/images/karachi-bar.png"
                    alt="Karachi Bar Association Seal"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="mt-3 font-display font-bold text-sm text-foreground">Karachi Bar</span>
              </div>

              <div className="rounded-sm border border-border bg-card p-4 flex flex-col items-center text-center shadow-sm">
                <div className="relative h-20 w-20">
                  <Image
                    src="/images/shcba-karachi.png"
                    alt="Sindh High Court Bar Association Seal"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="mt-3 font-display font-bold text-sm text-foreground">SHCBA Sindh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Prompt */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-gold-gradient px-8 text-sm font-bold text-ink shadow-gold hover:brightness-105"
          >
            <span>Schedule a Consultation with Counsel</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
