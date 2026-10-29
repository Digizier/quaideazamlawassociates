import React from "react";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LawFirmJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://quaideazamlawassociates.com/#organization",
    "name": "Quaid-e-Azam Law Associates",
    "alternateName": "Advocate Raheel Anis Chambers",
    "url": "https://quaideazamlawassociates.com",
    "logo": "https://quaideazamlawassociates.com/images/firm-logo.png",
    "image": "https://quaideazamlawassociates.com/images/high-court.jpg",
    "description": "Premier Karachi law firm led by Advocate Raheel Anis, specializing in civil, criminal, banking, corporate, tax, family, property, and constitutional matters before the High Court of Sindh and subordinate courts.",
    "telephone": "+923008211981",
    "email": "raheelanis81@gmail.com",
    "priceRange": "$$",
    "currenciesAccepted": "PKR",
    "paymentAccepted": "Cash, Bank Transfer",
    "openingHours": "Mo,Tu,We,Th,Fr,Sa 10:00-20:00",
    "areaServed": [
      {
        "@type": "City",
        "name": "Karachi"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Sindh"
      },
      {
        "@type": "Country",
        "name": "Pakistan"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Advocate Raheel Anis",
      "jobTitle": "Advocate High Court of Sindh",
      "telephone": "+923008211981",
      "email": "raheelanis81@gmail.com",
      "memberOf": [
        {
          "@type": "Organization",
          "name": "Karachi Bar Association"
        },
        {
          "@type": "Organization",
          "name": "High Court Bar Association Sindh (SHCBA)"
        }
      ]
    },
    "department": [
      {
        "@type": "LegalService",
        "name": "Quaid-e-Azam Law Associates - DHA Branch",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Ground Floor No. 3, Plot C/7/C, Khayaban-e-Sehar Commercial, Phase 7, DHA",
          "addressLocality": "Karachi",
          "addressRegion": "Sindh",
          "postalCode": "75500",
          "addressCountry": "PK"
        },
        "telephone": "+923008211981"
      },
      {
        "@type": "LegalService",
        "name": "Quaid-e-Azam Law Associates - City Court Branch",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office 102, Mezzanine Floor, Fareed Chamber, Syedna Tahir Saifuddin Road, Adjacent Green Centre, Opposite City Court",
          "addressLocality": "Karachi",
          "addressRegion": "Sindh",
          "postalCode": "74200",
          "addressCountry": "PK"
        },
        "telephone": "+923008211981"
      }
    ],
    "sameAs": [
      "https://wa.me/923008211981"
    ]
  };

  return <JsonLd data={schema} />;
}
