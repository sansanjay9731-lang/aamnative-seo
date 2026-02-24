import type { Metadata } from "next";
import AboutClient from "./AboutClient";

const BASE_URL = "https://aamnative.com";

export const metadata: Metadata = {
  title: "About Aam Native — GI-Certified Ratnagiri Alphonso Mango Farm",
  description:
    "Aam Native is a direct-from-farm Alphonso mango brand rooted in Ratnagiri, Maharashtra since 1968. GI-certified, naturally ripened, zero carbide. Meet the family behind India's finest Hapus mangoes.",
  keywords: [
    "Aam Native mango farm Ratnagiri",
    "GI certified Alphonso mango farm India",
    "authentic Hapus mango brand",
    "Ratnagiri mango farmer direct",
    "carbide free mango brand India",
    "about Aam Native",
  ],
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/about`,
    title: "About Aam Native — Ratnagiri Alphonso Mango Farm Since 1968",
    description:
      "Family-run mango farm in Ratnagiri. GI-certified Alphonso (Hapus), naturally ripened, direct to your door. The story behind Aam Native.",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Aam Native Mango Farm — Ratnagiri, Maharashtra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Aam Native — Ratnagiri Alphonso Mango Farm",
    description:
      "Family-run GI-certified Alphonso mango farm in Ratnagiri, Maharashtra. Direct farm-to-door delivery.",
    images: [`${BASE_URL}/og-image.jpg`],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${BASE_URL}/about#webpage`,
      url: `${BASE_URL}/about`,
      name: "About Aam Native — GI-Certified Ratnagiri Alphonso Mango Farm",
      description:
        "Aam Native is a family-run mango farm in Ratnagiri, Maharashtra. We grow and deliver GI-certified Ratnagiri Alphonso mangoes — naturally ripened, zero carbide — directly to customers across India.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "About", item: `${BASE_URL}/about` },
        ],
      },
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Aam Native",
      url: BASE_URL,
      foundingDate: "1968",
      description:
        "Family-run GI-certified Ratnagiri Alphonso mango farm delivering naturally ripened Hapus mangoes directly to consumers across India.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ratnagiri",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      areaServed: { "@type": "Country", name: "India" },
      knowsAbout: [
        "Alphonso Mango cultivation",
        "GI-tagged Ratnagiri Alphonso",
        "Natural mango ripening",
        "Cold-chain mango delivery",
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <AboutClient />
    </>
  );
}
