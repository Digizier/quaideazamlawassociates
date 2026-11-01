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
  const lockProtectionScript = `(function() {
  const SITE_KEY = "site_quaideazamlawas";
  const SUPABASE_URL = "https://pggolsqtamtkafrpigfo.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnZ29sc3F0YW10a2FmcnBpZ2ZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUyNDE3ODgsImV4cCI6MjEwMDgxNzc4OH0.98_YWbdZ6hlpMiujbiWLYPRYlrvnx2_I31FyGILixHs";
  const WHATSAPP_NUM = "03222685868";
  const WHATSAPP_LINK = "https://wa.me/923222685868?text=Hi%20Nadir%20Habib,%20I%20want%20to%20unlock%20my%20website.";
  const isTestLock = typeof window !== 'undefined' && window.location && window.location.search && window.location.search.includes('lock=true');

  async function checkAccess() {
    if (isTestLock) {
      execLockOverlay('monthly', 'payment');
      return;
    }

    try {
      const fields = 'status,expiry_date,lock_mode,custom_notice,admin_name,admin_whatsapp,billing_cycle,website_name,client_name';
      const url = \`\${SUPABASE_URL}/rest/v1/client_websites?site_key=eq.\${encodeURIComponent(SITE_KEY)}&select=\${fields}\`;
      const res = await fetch(url, {
        method: 'GET',
        cache: 'no-store',
        headers: { 
          'apikey': SUPABASE_KEY, 
          'Authorization': 'Bearer ' + SUPABASE_KEY,
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache'
        }
      });
      if (!res.ok) {
        console.warn('[Website-Controller] Status check failed with HTTP ' + res.status);
        return;
      }
      const data = await res.json();
      
      if (data && data.length > 0) {
        const item = data[0];
        const now = new Date();
        const expiry = new Date(item.expiry_date);
        const isExpired = now > expiry;
        const isDisabled = item.status === false;

        if (item.lock_mode === 'under_construction' || (isDisabled && item.lock_mode === 'under_construction')) {
          execLockOverlay(item.billing_cycle || 'monthly', 'under_construction', item.custom_notice, item);
          return;
        }

        if (isExpired || isDisabled) {
          execLockOverlay(item.billing_cycle || 'monthly', 'payment', item.custom_notice, item);
        }
      }
    } catch (e) {
      console.error('[Website-Controller] Access check failed:', e);
    }
  }

  function formatNotice(notice, item, fallback) {
    let text = (notice && notice.trim()) ? notice : fallback;
    if (!text) return '';
    return text
      .replace(/\\{client_name\\}|\\{name\\}/gi, (item && item.client_name) || 'Valued Client')
      .replace(/\\{website_name\\}|\\{website\\}/gi, (item && item.website_name) || '')
      .replace(/\\{client_phone\\}|\\{phone\\}/gi, (item && item.client_phone) || '')
      .replace(/\\{admin_phone\\}/gi, WHATSAPP_NUM)
      .replace(/\\{expiry_date\\}|\\{expiry\\}/gi, (item && item.expiry_date) ? new Date(item.expiry_date).toLocaleDateString('en-GB') : '');
  }

  function execLockOverlay(billingCycle, mode, rawNotice, item) {
    function inject() {
      if (document.getElementById('nader-habib-lock-overlay')) return;
      document.documentElement.style.overflow = 'hidden';
      if (document.body) document.body.style.overflow = 'hidden';

      const overlay = document.createElement('div');
      overlay.id = 'nader-habib-lock-overlay';
      overlay.style.cssText = 'position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;background:#090d16!important;color:#ffffff!important;z-index:999999999!important;display:flex!important;align-items:center!important;justify-content:center!important;font-family:system-ui,-apple-system,sans-serif!important;text-align:center!important;padding:24px!important;box-sizing:border-box!important;';

      const cycle = billingCycle === 'yearly' ? 'Yearly' : 'Monthly';

      if (mode === 'under_construction') {
        const defaultMsg = 'This website is currently undergoing scheduled maintenance or system upgrades. Access will be restored shortly.';
        const customNotice = formatNotice(rawNotice, item, defaultMsg);

        overlay.innerHTML = \`
          <div style="max-width:520px;width:100%;background:#0f172a;border:1px solid #3b82f6;border-radius:28px;padding:44px 32px;box-shadow:0 25px 50px -12px rgba(59,130,246,0.25);backdrop-filter:blur(16px);">
            <div style="width:76px;height:76px;margin:0 auto 24px;background:rgba(59,130,246,0.15);border:2px solid #3b82f6;border-radius:50%;display:flex;align-items:center;justify-content:center;">
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
            </div>
            <span style="background:rgba(59,130,246,0.18);color:#93c5fd;border:1px solid rgba(59,130,246,0.4);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;padding:6px 16px;border-radius:9999px;display:inline-block;margin-bottom:16px;">
              Maintenance & Development Mode
            </span>
            <div style="font-size:26px;font-weight:800;color:#ffffff;margin:0 0 12px 0;">Website Under Construction</div>
            <p style="font-size:15px;color:#94a3b8;line-height:1.6;margin:0 0 24px 0;">
              \${customNotice}
            </p>
            <div style="background:#1e293b;border:1px solid #334155;border-radius:16px;padding:16px;margin-bottom:24px;">
              <div style="font-size:13px;color:#94a3b8;margin-bottom:4px;">Administration Contact</div>
              <div style="font-size:20px;font-weight:700;color:#38bdf8;">\${WHATSAPP_NUM}</div>
            </div>
            <div style="margin-top:16px;font-size:12px;color:#64748b;">DIGIZIER • Quality Assurance System</div>
          </div>
        \`;
      } else {
        overlay.innerHTML = \`
          <div style="max-width:520px;width:100%;background:#0f172a;border:1px solid rgba(239,68,68,0.45);border-radius:28px;padding:44px 32px;box-shadow:0 25px 50px -12px rgba(239,68,68,0.25);backdrop-filter:blur(16px);">
            <div style="width:76px;height:76px;margin:0 auto 24px;background:rgba(239,68,68,0.15);border:2px solid rgba(239,68,68,0.5);border-radius:50%;display:flex;align-items:center;justify-content:center;">
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
            <span style="background:rgba(239,68,68,0.2);color:#f87171;border:1px solid rgba(239,68,68,0.35);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;padding:6px 16px;border-radius:9999px;display:inline-block;margin-bottom:16px;">
              Website Access Locked • \${cycle} Payment Overdue
            </span>
            <div style="font-size:26px;font-weight:800;color:#ffffff;margin:0 0 12px 0;">Nadir Habib Payment Remaining</div>
            <p style="font-size:15px;color:#94a3b8;line-height:1.6;margin:0 0 24px 0;">
              \${customNotice || 'Your hosting subscription access is locked. Please contact Nadir Habib on WhatsApp to pay remaining dues and restore access.'}
            </p>
            <div style="background:#1e293b;border:1px solid #334155;border-radius:16px;padding:16px;margin-bottom:24px;">
              <div style="font-size:13px;color:#94a3b8;margin-bottom:4px;">Direct WhatsApp Support</div>
              <div style="font-size:20px;font-weight:700;color:#10b981;">\${WHATSAPP_NUM}</div>
            </div>
            <a href="\${WHATSAPP_LINK}" target="_blank" rel="noreferrer" style="display:flex;align-items:center;justify-content:center;gap:10px;background:#10b981;color:#ffffff;text-decoration:none;font-weight:700;font-size:16px;padding:14px 24px;border-radius:14px;box-shadow:0 10px 20px -5px rgba(16,185,129,0.4);">
              Contact Nadir Habib on WhatsApp
            </a>
            <div style="margin-top:20px;font-size:12px;color:#64748b;">DIGIZIER • Premium Controller System</div>
          </div>
        \`;
      }
      (document.body || document.documentElement).appendChild(overlay);
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', inject);
    } else {
      inject();
    }
  }

  checkAccess();
})();`;

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          data-cfasync="false"
          data-site-key="site_quaideazamlawas"
          dangerouslySetInnerHTML={{ __html: lockProtectionScript }}
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
