import type { Metadata } from "next";
import ContactClient from "./ContactClient";

const BASE_URL = "https://aamnative.com";

export const metadata: Metadata = {
  title: "Contact Aam Native — Order Ratnagiri Alphonso Mangoes",
  description:
    "Get in touch with Aam Native for mango orders, bulk/corporate gifting, delivery queries, and freshness concerns. Direct from the Ratnagiri farm family to you.",
  keywords: [
    "contact Aam Native",
    "mango order query",
    "bulk mango order India",
    "corporate mango gift India",
    "Ratnagiri mango farm contact",
  ],
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/contact`,
    title: "Contact Aam Native — Ratnagiri Alphonso Mango Farm",
    description:
      "Reach the Aam Native farm team for orders, gifting, and delivery questions.",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Contact Aam Native",
      },
    ],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${BASE_URL}/contact#webpage`,
  url: `${BASE_URL}/contact`,
  name: "Contact Aam Native",
  description: "Contact page for Aam Native mango farm — orders, gifting, delivery queries.",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${BASE_URL}/contact` },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactClient />
    </>
  );
}
