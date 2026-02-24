import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const BASE_URL = "https://aamnative.com"; // update when live

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Aam Native — Farm-Fresh Rathnagiri Alphonso Mangos | Order Online",
    template: "%s | Aam Native",
  },
  description:
    "Buy GI-certified Rathnagiri Alphonso mangos delivered farm-fresh to your door in 24 hours. No carbide ripening. Premium, Standard & Medium boxes. Direct from Konkan coast orchards.",
  keywords: [
    "Alphonso mango online", "buy Hapus mango", "Rathnagiri mango order",
    "GI certified mango India", "farm fresh mango delivery", "Aam Native",
    "Alphonso mango Mumbai", "Hapus mango delivery", "Konkan mango",
    "natural ripened mango", "premium mango box India",
  ],
  authors: [{ name: "Aam Native", url: BASE_URL }],
  creator: "Aam Native",
  publisher: "Aam Native",
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Aam Native",
    title: "Aam Native — Farm-Fresh Rathnagiri Alphonso Mangos",
    description: "GI-certified Rathnagiri Alphonso mangos. Farm-to-door in 24 hours. No carbide. No chemicals. Authentic taste.",
    images: [{ url: `${BASE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Aam Native — Authentic Alphonso Mango" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aam Native — Authentic Rathnagiri Alphonso Mangos",
    description: "From GI-tagged Rathnagiri orchards to your doorstep in 24 hours. Order the real Alphonso.",
    images: [`${BASE_URL}/og-image.jpg`],
    creator: "@aamnative",
  },
  alternates: { canonical: BASE_URL },
  verification: { google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN" },
};

// ── Structured Data ──
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aam Native",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.svg`,
  contactPoint: { "@type": "ContactPoint", telephone: "+91-98765-43210", contactType: "customer service", areaServed: "IN" },
  sameAs: [
    "https://www.instagram.com/aamnative",
    "https://www.facebook.com/aamnative",
  ],
};

const localBizSchema = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Aam Native",
  description: "Premium Rathnagiri Alphonso mango farm delivering directly to consumers across India",
  url: BASE_URL,
  priceRange: "₹₹",
  servesCuisine: "Fresh Produce",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Alphonso Mango Boxes",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Rathnagiri Alphonso Premium" }, price: "1299", priceCurrency: "INR" },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Rathnagiri Alphonso Standard" }, price: "999", priceCurrency: "INR" },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Rathnagiri Alphonso Medium" }, price: "849", priceCurrency: "INR" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizSchema) }}
        />
      </head>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
