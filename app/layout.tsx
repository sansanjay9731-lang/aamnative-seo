import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const BASE_URL = "https://aamnative.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Aam Native | Buy GI-Certified Ratnagiri Alphonso Mangoes Online | Farm Direct",
    template: "%s | Aam Native",
  },
  description:
    "Buy authentic GI-certified Ratnagiri Alphonso (Hapus) mangoes online. Farm-to-door delivery in 24–48 hours. Naturally ripened, zero carbide. Premium, Standard & Regular boxes. Direct from Konkan orchards.",
  keywords: [
    "buy Alphonso mango online India",
    "Ratnagiri Alphonso mango order",
    "GI certified Hapus mango",
    "farm fresh mango delivery India",
    "carbide free mango online",
    "naturally ripened Alphonso mango",
    "buy Hapus mango online",
    "Alphonso mango Mumbai delivery",
    "Konkan mango farm direct",
    "premium mango box India",
    "Ratnagiri mango price",
    "authentic Alphonso mango 2026",
    "mango delivery Bangalore",
    "mango delivery Delhi NCR",
    "mango delivery Pune",
    "best mango website India",
  ],
  authors: [{ name: "Aam Native", url: BASE_URL }],
  creator: "Aam Native",
  publisher: "Aam Native",
  category: "Food & Grocery",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Aam Native",
    title: "Aam Native | Buy GI-Certified Ratnagiri Alphonso Mangoes Online",
    description:
      "Authentic GI-certified Ratnagiri Alphonso mangoes. Farm-to-door in 24-48 hours. No carbide, no chemicals. Premium, Standard & Regular boxes direct from Konkan orchards.",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Aam Native | Authentic GI-Certified Ratnagiri Alphonso Mangoes",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@aamnative",
    creator: "@aamnative",
    title: "Aam Native | Authentic Ratnagiri Alphonso Mangoes Online",
    description:
      "GI-tagged Ratnagiri orchards → your doorstep in 24 hrs. Naturally ripened. No carbide. Order the real Hapus.",
    images: [`${BASE_URL}/og-image.jpg`],
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-IN": BASE_URL,
    },
  },
  verification: { google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN" },
};

// ── Structured Data ──
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Aam Native",
  legalName: "Aam Native Fresh Produce",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    "url": `${BASE_URL}/logo.svg`,
    "width": 300,
    "height": 300,
    "caption": "Aam Native: Authentic Ratnagiri Alphonso Mangoes",
  },
  image: `${BASE_URL}/og-image.jpg`,
  description:
    "Aam Native delivers GI-certified Ratnagiri Alphonso (Hapus) mangoes directly from Konkan coast orchards to your doorstep across India. Naturally ripened, zero carbide, farm-fresh in 24–48 hours.",
  foundingDate: "2020",
  founder: {
    "@type": "Person",
    "name": "Aam Native Family",
  },
  foundingLocation: {
    "@type": "Place",
    "name": "Ratnagiri, Maharashtra, India",
  },
  address: {
    "@type": "PostalAddress",
    "addressLocality": "Ratnagiri",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN",
  },
  areaServed: {
    "@type": "Country",
    "name": "India",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      "telephone": "+91-99649-84695",
      "contactType": "customer service",
      "email": "hello@aamnative.com",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Marathi"],
    },
  ],
  sameAs: [
    "https://www.instagram.com/aamnative",
    "https://www.facebook.com/aamnative",
    "https://twitter.com/aamnative",
    "https://www.youtube.com/@aamnative",
  ],
  knowsAbout: [
    "Alphonso Mango",
    "Ratnagiri Alphonso",
    "Hapus Mango",
    "GI Tagged Mangoes",
    "Mango cultivation in Maharashtra",
    "Natural Ripening Process",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Aam Native",
  description:
    "Buy GI-certified Ratnagiri Alphonso mangoes online. Farm-direct delivery across India.",
  publisher: { "@id": `${BASE_URL}/#organization` },
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/products?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const localBizSchema = {
  "@context": "https://schema.org",
  "@type": "Store",
  "@id": `${BASE_URL}/#store`,
  name: "Aam Native",
  description:
    "Premium Ratnagiri Alphonso mango farm delivering directly to consumers across India. GI-certified, naturally ripened, zero carbide.",
  url: BASE_URL,
  image: `${BASE_URL}/og-image.jpg`,
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Net Banking",
  areaServed: { "@type": "Country", name: "India" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "749",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Ratnagiri Alphonso Mango Boxes",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Ratnagiri Alphonso Mango: Premium Grade",
          url: `${BASE_URL}/products/rathnagiri-alphonso-premium`,
        },
        price: "2999",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-07-31",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Ratnagiri Alphonso Mango: Standard Grade",
          url: `${BASE_URL}/products/rathnagiri-alphonso-standard`,
        },
        price: "2799",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-07-31",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Ratnagiri Alphonso Mango: Regular Grade",
          url: `${BASE_URL}/products/rathnagiri-alphonso-regular`,
        },
        price: "2699",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-07-31",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="msvalidate.01" content="0FAAFE6215C6AE801C523439096A4682" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizSchema) }}
        />
        {/* Meta Pixel Code */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '890407196956246');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=890407196956246&ev=PageView&noscript=1"
          />
        </noscript>
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
