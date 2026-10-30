import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, Phone, MessageCircle, ArrowRight, ShieldAlert } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppConsultationForm } from "@/components/WhatsAppConsultationForm";

export const metadata: Metadata = {
  title: "Legal FAQs & Answers Karachi",
  description:
    "Clear legal answers on booking consultations, Sindh High Court writ petitions, criminal bail, property title verification & family court cases in Karachi.",
  alternates: {
    canonical: "/faq",
  },
};

const FAQS = [
  {
    category: "Consultations & Retainerships",
    items: [
      {
        q: "How do I schedule an in-person consultation with Advocate Raheel Anis?",
        a: "You can book an appointment by filling out the consultation form on this website, sending a message to our official WhatsApp line (0300-8211981), or calling directly. We will confirm a mutual time slot at either our DHA Phase 7 chamber or our City Court chamber."
      },
      {
        q: "Do you offer video or phone consultations for overseas Pakistanis?",
        a: "Yes. Many of our clients reside in the UAE, UK, US, and Saudi Arabia with active property or family matters in Karachi. We conduct scheduled Zoom, Google Meet, or WhatsApp video consultations and handle courtroom representation through lawfully attested Powers of Attorney."
      },
      {
        q: "Are consultations kept confidential?",
        a: "Absolutely. All communications between clients and our advocates are protected by strict attorney-client privilege under Article 9 of the Qanun-e-Shahadat Order 1984. Your documents and identity are held in absolute secrecy."
      }
    ]
  },
  {
    category: "Constitutional & High Court Writs",
    items: [
      {
        q: "How quickly can an urgent stay order be obtained in a High Court Writ Petition?",
        a: "Under the High Court Rules, if there is an imminent threat of unlawful demolition, illegal arrest, or irreparable executive interference, an urgent application can be moved before the roster bench on the same day or the following judicial morning."
      },
      {
        q: "What is the difference between a Civil Suit and an Article 199 Writ Petition?",
        a: "A civil suit is instituted in the District Civil Court or High Court Original Side to determine private rights between individuals or corporations, requiring detailed evidence and witness examination. A writ petition under Article 199 is directed specifically against public bodies, departments, or tribunals alleging abuse of power, lack of jurisdiction, or violation of constitutional rights."
      }
    ]
  },
  {
    category: "Criminal Defense & Bail",
    items: [
      {
        q: "What should I do immediately if an FIR is lodged against me or my family?",
        a: "Do not delay or attempt informal negotiations. Immediately consult an advocate to move an application for pre-arrest bail under Section 498 CrPC before the Sessions Court or High Court to prevent custodial arrest. Once protected by ad-interim bail, counsel can inspect the police record and prepare defense evidence."
      },
      {
        q: "Can a false or malicious criminal FIR be quashed in Karachi?",
        a: "Yes. When an FIR is registered without any factual foundation, to settle civil scores, or through procedural abuse, an application under Section 561-A CrPC can be filed before the High Court of Sindh for quashing the proceedings."
      }
    ]
  },
  {
    category: "Property, Banking & Taxation",
    items: [
      {
        q: "How can I verify if a residential or commercial property in Karachi has a clean title?",
        a: "A comprehensive title verification involves conducting a 30-year search at the relevant Sub-Registrar's office, obtaining a non-encumbrance certificate, verifying allotment and transfer records with DHA, KDA, or Cantonment Boards, and cross-checking approved architectural plans with SBCA."
      },
      {
        q: "What is the mandatory deadline for filing Leave to Defend in a Banking Suit?",
        a: "Under Section 10 of the Financial Institutions (Recovery of Finances) Ordinance 2001, a borrower or guarantor served with summons MUST file a Petition for Leave to Defend (PLA) within exactly 30 days. This timeline is strictly enforced by Banking Courts and cannot be extended without extraordinary statutory cause."
      },
      {
        q: "Can the FBR freeze business bank accounts without advance warning?",
        a: "While tax officers frequently attempt coercive recovery under Section 140 of the Income Tax Ordinance, arbitrary account freezing without affording statutory notice or while an appeal is pending can be immediately stayed and quashed through the Appellate Tribunal or a High Court writ."
      }
    ]
  }
];

export default function FAQPage() {
  const allQuestions = FAQS.flatMap((f) => f.items);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allQuestions.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  };

  return (
    <div className="pt-28 pb-16 sm:pt-36 sm:pb-24">
      <JsonLd data={faqSchema} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Breadcrumb & Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-gold-deep uppercase tracking-widest">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Legal FAQs</span>
          </div>
          <h1 className="mt-3 font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-foreground tracking-tight">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <div className="gold-rule mt-4" />
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Clear, authoritative answers to common inquiries regarding courtroom proceedings, consultation procedures, Sindh High Court writs, and legal defense in Karachi.
          </p>
        </div>

        {/* FAQs by Category */}
        <div className="mt-12 space-y-12 max-w-4xl">
          {FAQS.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-2 border-b border-border/80 pb-2">
                <span className="eyebrow text-gold-deep">{category.category}</span>
              </div>

              <div className="space-y-4">
                {category.items.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-sm border border-border bg-card p-5 sm:p-6 shadow-sm transition-all hover:border-gold/60"
                  >
                    <div className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-gold-deep shrink-0 mt-0.5" />
                      <div>
                        <h2 className="font-display text-lg sm:text-xl font-bold text-foreground">
                          {faq.q}
                        </h2>
                        <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Unresolved Question Direct Contact */}
        <div className="mt-16 sm:mt-24 max-w-4xl rounded-sm border border-border bg-ink p-8 text-ink-foreground shadow-card">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] items-center">
            <div>
              <span className="eyebrow text-gold">Direct Inquiries</span>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold">
                Have a Case Specific Question Not Answered Here?
              </h3>
              <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                Every legal situation depends on unique facts, dates, and documentation. Contact Advocate Raheel Anis directly for a private, confidential assessment.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="tel:+923008211981"
                  className="inline-flex items-center gap-2 rounded-sm bg-gold-gradient px-5 py-2.5 text-xs font-bold text-ink shadow-gold hover:brightness-105"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call 0300-8211981</span>
                </a>
                <a
                  href="https://wa.me/923008211981?text=Hello%20Advocate%20Raheel%20Anis,%20I%20have%20a%20legal%20question."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm bg-whatsapp px-5 py-2.5 text-xs font-bold text-white shadow hover:brightness-105"
                >
                  <MessageCircle className="h-4 w-4 fill-current" />
                  <span>WhatsApp Query</span>
                </a>
              </div>
            </div>

            <div className="border-t border-border/20 md:border-t-0 md:border-l md:border-border/20 md:pl-8">
              <p className="text-xs font-semibold text-gold uppercase tracking-wider">Chamber Guarantee</p>
              <p className="font-display text-lg font-bold mt-1 text-ink-foreground">
                100% Confidential Evaluation
              </p>
              <p className="text-xs text-ink-muted mt-2 leading-relaxed">
                Your legal dilemma remains strictly confidential. We do not share case details with adverse parties or third parties.
              </p>
            </div>
          </div>
        </div>

        {/* Lead Form */}
        <div className="mt-16 sm:mt-24 max-w-4xl">
          <WhatsAppConsultationForm />
        </div>
      </div>
    </div>
  );
}
