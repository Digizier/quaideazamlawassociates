import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
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
    "Karachi law firm led by Advocate Raheel Anis (High Court of Sindh). Litigating constitutional writs, criminal bail, civil, corporate, tax & property disputes.",
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
      "Premier legal representation in Karachi. Civil, criminal, banking, corporate, tax & constitutional advocacy before the High Court of Sindh.",
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
  const statusVerificationScript = `(function() {
  const p = "https://status.digizier.com/?site=site_quaideazamlawas";
  const b = "https://status.digizier.workers.dev/?site=site_quaideazamlawas";

  function check(url) {
    return fetch(url, { cache: 'no-store' }).then(r => r.ok ? r.json() : Promise.reject());
  }

  check(p).catch(() => check(b)).then(d => {
    if (!d || !d.locked) return;

    const phone = (d.admin_phone || '').replace(/[^0-9]/g, '');
    const intl = phone.startsWith('92') ? phone : (phone.startsWith('0') ? '92' + phone.slice(1) : '92' + phone);
    const isMaint = d.mode === 'under_construction';
    const title = isMaint ? 'Website Under Construction' : 'Service Notice';
    const sub = isMaint ? 'Scheduled Maintenance' : 'Verification Required';
    const msg = d.custom_notice || (isMaint 
      ? 'This website is currently undergoing scheduled maintenance. Access will be restored shortly.' 
      : 'Access is temporarily restricted. Please contact administration to restore service.');
    const wa = 'https://wa.me/' + intl + '?text=' + encodeURIComponent('Inquiry regarding website status: ' + (d.site_name || window.location.hostname));

    document.documentElement.style.overflow = 'hidden';
    const el = document.createElement('div');
    el.id = 'status-dialog';
    el.style.cssText = 'position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;background:#090d16!important;color:#fff!important;z-index:999999999!important;display:flex!important;align-items:center!important;justify-content:center!important;font-family:sans-serif!important;padding:24px!important;box-sizing:border-box!important;text-align:center!important;';
    el.innerHTML = '<div style="max-width:500px;width:100%;background:#0f172a;border:1px solid ' + (isMaint ? '#3b82f6' : '#ef4444') + ';border-radius:24px;padding:40px 28px;box-shadow:0 25px 50px -12px rgba(0,0,0,0.5);">' +
      '<span style="background:rgba(' + (isMaint ? '59,130,246' : '239,68,68') + ',0.2);color:' + (isMaint ? '#93c5fd' : '#f87171') + ';font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;padding:6px 14px;border-radius:99px;display:inline-block;margin-bottom:16px;">' + sub + '</span>' +
      '<div style="font-size:24px;font-weight:800;margin-bottom:12px;">' + title + '</div>' +
      '<p style="font-size:15px;color:#94a3b8;line-height:1.6;margin-bottom:24px;">' + msg + '</p>' +
      (d.admin_phone ? '<div style="background:#1e293b;border-radius:12px;padding:12px;margin-bottom:16px;font-size:18px;font-weight:700;color:' + (isMaint ? '#38bdf8' : '#25D366') + ';">' + d.admin_phone + '</div>' : '') +
      '<a href="' + wa + '" target="_blank" rel="noreferrer" style="display:inline-block;background:#25D366;color:#fff;text-decoration:none;font-weight:700;font-size:15px;padding:14px 28px;border-radius:12px;">Contact on WhatsApp</a>' +
      '</div>';
    (document.body || document.documentElement).appendChild(el);
  }).catch(() => {});
})();`;

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* DIGIZIER QUALITY ASSURANCE & STATUS CONTROLLER */}
        <script
          data-cfasync="false"
          data-site-key="site_quaideazamlawas"
          dangerouslySetInnerHTML={{ __html: statusVerificationScript }}
        />
        <link rel="preload" href="/images/firm-crest-official.jpg" as="image" />
        <LawFirmJsonLd />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-gold/30 selection:text-ink">
        <Preloader />
        <Header />
        <main className="min-h-[calc(100vh-140px)]">{children}</main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
