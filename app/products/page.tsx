import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";
import { products } from "@/lib/products";

const BASE_URL = "https://aamnative.com";

export const metadata: Metadata = {
  title: "Buy Ratnagiri Alphonso Mangoes Online — Premium, Standard & Regular Boxes",
  description:
    "Shop GI-certified Ratnagiri Alphonso (Hapus) mangoes online. Premium (12 pcs · ₹2,999), Standard (14 pcs · ₹2,799), Regular (16 pcs · ₹2,699). Farm-direct, naturally ripened, delivered in 24–48 hours across India.",
  keywords: [
    "buy Alphonso mango box online",
    "Ratnagiri Alphonso mango order",
    "Hapus mango price box India",
    "GI certified mango online",
    "carbide free Alphonso mango",
    "farm fresh mango delivery India",
    "Alphonso mango 3kg box buy",
    "Ratnagiri mango price 2026",
  ],
  alternates: { canonical: `${BASE_URL}/products` },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/products`,
    title: "Buy Ratnagiri Alphonso Mangoes — Aam Native",
    description:
      "GI-certified Alphonso mango boxes from ₹2,699. Premium, Standard & Regular. Farm-to-door in 24–48 hrs. Naturally ripened, zero carbide.",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Aam Native Ratnagiri Alphonso Mango Boxes — Premium, Standard, Regular",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Ratnagiri Alphonso Mangoes — Aam Native",
    description: "GI-certified Alphonso boxes from ₹2,699. Farm-direct. Naturally ripened. Order now.",
    images: [`${BASE_URL}/og-image.jpg`],
  },
};

// Product catalogue ItemList schema
const catalogueSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${BASE_URL}/products#itemlist`,
  name: "Ratnagiri Alphonso Mango Boxes — Aam Native",
  description:
    "GI-certified Ratnagiri Alphonso mango boxes available for online order and pan-India delivery.",
  url: `${BASE_URL}/products`,
  numberOfItems: products.length,
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${p.name} — ${p.grade} Grade`,
    url: `${BASE_URL}/products/${p.slug}`,
    image: `${BASE_URL}${p.image}`,
    description: p.tagline,
  })),
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogueSchema) }}
      />
      <ProductsClient />
    </>
  );
}
