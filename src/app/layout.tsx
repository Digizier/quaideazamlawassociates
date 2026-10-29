import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { LawFirmJsonLd } from "@/components/JsonLd";
import { Preloader } from "@/components/Preloader";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F1D17",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://quaideazamlawassociates.com"),
  title: {
    default: "Quaid-e-Azam Law Associates | Advocate Raheel Anis, Karachi",
    template: "%s | Quaid-e-Azam Law Associates",
  },
  description:
    "Prominent Karachi law firm led by Advocate Raheel Anis (Advocate High Court of Sindh). Litigating constitutional writs, criminal bail, civil disputes, corporate compliance, taxation, and property matters across Sindh.",
  keywords: [
    "Quaid-e-Azam Law Associates",
    "Advocate Raheel Anis",
    "High Court Advocate Karachi",
    "Sindh High Court Writ Lawyer",
    "Criminal Lawyer Karachi",
    "Bail Advocate City Courts",
    "Civil Litigation Lawyer Pakistan",
    "Tax Lawyer FBR Karachi",
    "Property Dispute Lawyer DHA Karachi",
    "Family Court Khula Lawyer Karachi",
  ],
  authors: [{ name: "Advocate Raheel Anis", url: "https://quaideazamlawassociates.com" }],
  creator: "Quaid-e-Azam Law Associates",
  publisher: "Quaid-e-Azam Law Associates",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Quaid-e-Azam Law Associates | Advocate Raheel Anis, Karachi",
    description:
      "Premier legal representation in Karachi. Civil, criminal, banking, corporate, taxation, family, property, and constitutional matters before the High Court of Sindh.",
    url: "https://quaideazamlawassociates.com",
    siteName: "Quaid-e-Azam Law Associates",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/images/high-court.jpg",
        width: 1200,
        height: 630,
        alt: "Sindh High Court - Quaid-e-Azam Law Associates Karachi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quaid-e-Azam Law Associates | Advocate Raheel Anis",
    description:
      "Karachi law firm led by Advocate Raheel Anis. Professional advocacy before the High Court of Sindh and City Courts. Direct WhatsApp: 0300-8211981.",
    images: ["/images/high-court.jpg"],
  },
  icons: {
    icon: "/images/firm-logo.png",
    apple: "/images/firm-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preload" href="/images/firm-crest-official.jpg" as="image" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var isDebug = window.location.search.indexOf('debug_phase') !== -1;
                if (!isDebug) {
                  if (sessionStorage.getItem('qla_preloader_seen') === '1' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                    document.documentElement.classList.add('preloader-done');
                  }
                }
              } catch(e) {}
            `,
          }}
        />
        <LawFirmJsonLd />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-gold/30 selection:text-ink">
        <Preloader />
        <Header />
        <main className="min-h-[calc(100vh-140px)]">{children}</main>
        <Footer />
        <MobileBottomNav />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
