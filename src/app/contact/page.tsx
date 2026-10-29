import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck, AlertCircle } from "lucide-react";
import { WhatsAppConsultationForm } from "@/components/WhatsAppConsultationForm";

export const metadata: Metadata = {
  title: "Contact Advocate Raheel Anis | Karachi Law Chambers",
  description:
    "Direct contact details for Quaid-e-Azam Law Associates. Connect with Advocate Raheel Anis via phone, WhatsApp (0300-8211981), email, or schedule an in-person chamber consultation in DHA or City Court area.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Breadcrumb & Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-gold-deep uppercase tracking-widest">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Contact & Consultation</span>
          </div>
          <h1 className="mt-3 font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-foreground tracking-tight">
            Contact <span className="text-primary">Advocate Raheel Anis</span>
          </h1>
          <div className="gold-rule mt-4" />
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Connect directly for urgent courtroom representation, constitutional advice, or ongoing corporate retainerships in Karachi. All inquiries receive prompt, confidential review.
          </p>
        </div>

        {/* Urgent Emergency Alert Banner */}
        <div className="mt-8 rounded-sm border-l-4 border-red-600 bg-red-50 p-4 sm:p-5 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-red-950">Urgent Bail, Custodial Arrest, or Imminent Demolition?</h4>
            <p className="text-xs sm:text-sm text-red-800 mt-0.5 leading-relaxed">
              If you or a client requires immediate pre-arrest bail protection before Sessions Court or High Court, do not wait for email. Call or WhatsApp Advocate Raheel Anis immediately at{" "}
              <a href="tel:+923008211981" className="font-bold underline text-red-950">
                0300-8211981
              </a>.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          {/* Left Column: Direct Channels & Chambers */}
          <div className="space-y-6">
            <div className="rounded-sm border border-border bg-card p-6 sm:p-8 shadow-sm">
              <span className="eyebrow text-gold-deep">Primary Helpline</span>
              <h3 className="mt-2 font-display text-2xl font-bold text-foreground">
                Direct Contact Lines
              </h3>

              <div className="mt-6 space-y-4">
                <a
                  href="tel:+923008211981"
                  className="flex items-center gap-4 rounded-sm border border-border/80 bg-background p-4 hover:border-gold transition-colors"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                      Mobile & Direct Call
                    </span>
                    <span className="font-display text-xl font-bold text-foreground">
                      0300-8211981
                    </span>
                  </div>
                </a>

                <a
                  href="https://wa.me/923008211981?text=Hello%20Advocate%20Raheel%20Anis,%20I%20would%20like%20to%20consult%20regarding%20a%20legal%20matter."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-sm border border-emerald-200 bg-emerald-50/50 p-4 hover:border-whatsapp transition-colors"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-whatsapp text-white shrink-0">
                    <MessageCircle className="h-5 w-5 fill-current" />
                  </div>
                  <div>
                    <span className="block text-[0.65rem] uppercase tracking-wider text-emerald-800">
                      WhatsApp Messaging
                    </span>
                    <span className="font-display text-xl font-bold text-emerald-950">
                      +92 300 8211981
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:raheelanis81@gmail.com"
                  className="flex items-center gap-4 rounded-sm border border-border/80 bg-background p-4 hover:border-gold transition-colors"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                      Email Address
                    </span>
                    <span className="truncate block font-display text-lg font-bold text-foreground">
                      raheelanis81@gmail.com
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Chamber Locations */}
            <div className="rounded-sm border border-border bg-card p-6 sm:p-8 shadow-sm space-y-5">
              <span className="eyebrow text-gold-deep">Chamber Addresses</span>
              <h3 className="font-display text-2xl font-bold text-foreground">
                In-Person Meetings
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="border-l-2 border-gold pl-3">
                  <strong className="block text-foreground font-semibold">1. DHA Phase 7 Chamber</strong>
                  <p className="text-muted-foreground mt-0.5 leading-relaxed">
                    Ground Floor No. 3, Plot C/7/C, Khayaban-e-Sehar Commercial, Phase 7, DHA, Karachi.
                  </p>
                </div>

                <div className="border-l-2 border-gold pl-3">
                  <strong className="block text-foreground font-semibold">2. City Court Chamber</strong>
                  <p className="text-muted-foreground mt-0.5 leading-relaxed">
                    Office 102, Mezzanine Floor, Fareed Chamber, Syedna Tahir Saifuddin Rd, Opp. City Court, Karachi.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-xs text-muted-foreground flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span>Consultations Monday to Saturday · By Prior Appointment</span>
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp Form */}
          <div>
            <WhatsAppConsultationForm />
          </div>
        </div>
      </div>
    </div>
  );
}
