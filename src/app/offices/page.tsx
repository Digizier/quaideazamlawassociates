import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ShieldCheck, Navigation, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Chambers & Office Locations | Quaid-e-Azam Law Associates Karachi",
  description:
    "Visit Quaid-e-Azam Law Associates at our two Karachi chambers: DHA Phase 7 (Khayaban-e-Sehar) and City Court Area (Fareed Chamber). Direct consultations with Advocate Raheel Anis.",
  alternates: {
    canonical: "/offices",
  },
};

export default function OfficesPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Breadcrumb & Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-gold-deep uppercase tracking-widest">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Chambers & Offices</span>
          </div>
          <h1 className="mt-3 font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-foreground tracking-tight">
            Two Chambers Across <span className="text-primary">Karachi</span>
          </h1>
          <div className="gold-rule mt-4" />
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
            For client convenience, Quaid-e-Azam Law Associates operates two chambers in Karachi — situated in DHA Phase 7 for corporate and private advisory, and opposite City Courts for rapid daily trial and court coordination.
          </p>
        </div>

        {/* Two Chamber Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Chamber 1: DHA Phase 7 */}
          <div className="flex flex-col justify-between rounded-sm border border-border bg-card p-6 sm:p-10 shadow-card">
            <div>
              <div className="flex items-center justify-between">
                <span className="eyebrow text-gold-deep">South Karachi Chamber</span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  By Appointment
                </span>
              </div>

              <h2 className="mt-3 font-display text-2xl sm:text-4xl font-bold text-foreground">
                DHA Phase 7 Chamber
              </h2>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mt-0.5">Khayaban-e-Sehar Commercial</p>
              <div className="gold-rule mt-3" />

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-foreground font-semibold">Chamber Address:</strong>
                    <p className="text-muted-foreground leading-relaxed mt-0.5">
                      Ground Floor No. 3, Plot C/7/C, Khayaban-e-Sehar Commercial, Phase 7, Defence Housing Authority (DHA), Karachi, Pakistan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-foreground font-semibold">Consultation Hours:</strong>
                    <p className="text-muted-foreground leading-relaxed mt-0.5">
                      Monday to Saturday: 10:00 AM – 8:00 PM (Scheduled Meetings)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-foreground font-semibold">Direct Phone / WhatsApp:</strong>
                    <a href="tel:+923008211981" className="text-primary font-bold hover:text-gold-deep">
                      0300-8211981
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-3">
              <a
                href="https://www.google.com/maps/search/Khayaban-e-Sehar+Commercial+Phase+7+DHA+Karachi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-gold-deep"
              >
                <Navigation className="h-4 w-4" />
                <span>Open in Google Maps</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-gold-gradient px-4 py-2 text-xs font-bold text-ink shadow-gold hover:brightness-105"
              >
                Schedule DHA Visit
              </Link>
            </div>
          </div>

          {/* Chamber 2: City Courts */}
          <div className="flex flex-col justify-between rounded-sm border border-border bg-card p-6 sm:p-10 shadow-card">
            <div>
              <div className="flex items-center justify-between">
                <span className="eyebrow text-gold-deep">Judicial Complex Chamber</span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Court Hours
                </span>
              </div>

              <h2 className="mt-3 font-display text-2xl sm:text-4xl font-bold text-foreground">
                City Court Chamber
              </h2>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mt-0.5">Fareed Chamber Area</p>
              <div className="gold-rule mt-3" />

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-foreground font-semibold">Chamber Address:</strong>
                    <p className="text-muted-foreground leading-relaxed mt-0.5">
                      Office 102, Mezzanine Floor, Fareed Chamber, Syedna Tahir Saifuddin Road, Adjacent Green Centre, Opposite City Court, Karachi, Sindh, Pakistan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-foreground font-semibold">Operating Schedule:</strong>
                    <p className="text-muted-foreground leading-relaxed mt-0.5">
                      Monday to Saturday: Active during morning court sessions & afternoon client conferences.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-foreground font-semibold">Direct Phone / WhatsApp:</strong>
                    <a href="tel:+923008211981" className="text-primary font-bold hover:text-gold-deep">
                      0300-8211981
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-3">
              <a
                href="https://www.google.com/maps/search/Fareed+Chamber+Syedna+Tahir+Saifuddin+Road+Karachi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-gold-deep"
              >
                <Navigation className="h-4 w-4" />
                <span>Open in Google Maps</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-gold-gradient px-4 py-2 text-xs font-bold text-ink shadow-gold hover:brightness-105"
              >
                Schedule Court Visit
              </Link>
            </div>
          </div>
        </div>

        {/* Practical Consultation Guidelines */}
        <div className="mt-16 rounded-sm border border-border bg-secondary/30 p-6 sm:p-10">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-primary" />
            <h3 className="font-display text-2xl font-bold text-foreground">
              What to Bring to Your In-Chamber Consultation
            </h3>
          </div>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            To make the most of your consultation with Advocate Raheel Anis, we recommend having the following ready:
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
            <div className="rounded-sm border border-border bg-card p-4">
              <span className="font-bold text-foreground block">1. Identification</span>
              <p className="text-muted-foreground mt-1">Original CNIC or Passport for verifying attorney-client relationship.</p>
            </div>
            <div className="rounded-sm border border-border bg-card p-4">
              <span className="font-bold text-foreground block">2. Primary Documents</span>
              <p className="text-muted-foreground mt-1">Contracts, registered sale deeds, FIR copies, or show-cause notices.</p>
            </div>
            <div className="rounded-sm border border-border bg-card p-4">
              <span className="font-bold text-foreground block">3. Chronology of Events</span>
              <p className="text-muted-foreground mt-1">A brief bullet-point summary of dates, payments, or communications.</p>
            </div>
            <div className="rounded-sm border border-border bg-card p-4">
              <span className="font-bold text-foreground block">4. Prior Court Orders</span>
              <p className="text-muted-foreground mt-1">Any interim stays, decrees, or previous notices received from adverse parties.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
