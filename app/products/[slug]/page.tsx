import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import ProductDetailClient from "./ProductDetailClient";

const BASE_URL = "https://aamnative.com";

// Pre-generate all product routes at build time
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

// Dynamic metadata per product
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  const title = `${product.name} ${product.grade} — ${product.pieces} pcs · ₹${product.price} | Aam Native`;
  const description = `Buy ${product.name} (${product.grade}) online. ${product.pieces} GI-certified Ratnagiri Alphonso mangoes, ${product.boxWeight}. ${product.tagline} Naturally ripened, zero carbide. Delivered in 24–48 hrs across India.`;
  const url = `${BASE_URL}/products/${product.slug}`;
  const image = `${BASE_URL}${product.image}`;

  return {
    title,
    description,
    keywords: [
      `buy ${product.name} online`,
      `${product.name} ${product.grade} price`,
      `Ratnagiri Alphonso ${product.grade.toLowerCase()} box`,
      "GI certified Alphonso mango",
      "Hapus mango order India",
      "carbide free mango online",
      `Alphonso mango ${product.pieces} pieces`,
      "farm fresh mango delivery",
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${product.name} ${product.grade} (${product.pieces} pcs) — Aam Native`,
      description,
      images: [
        {
          url: image,
          width: 800,
          height: 800,
          alt: `${product.name} ${product.grade} — Aam Native`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} ${product.grade} — ₹${product.price} | Aam Native`,
      description,
      images: [image],
    },
  };
}

// Full Product + Offer + AggregateRating + FAQPage + BreadcrumbList schema
function buildProductSchema(product: (typeof products)[0]) {
  const url = `${BASE_URL}/products/${product.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${url}#product`,
        name: `${product.name} — ${product.grade} Grade`,
        description: product.description,
        sku: product.id,
        brand: {
          "@type": "Brand",
          name: "Aam Native",
          url: BASE_URL,
        },
        image: product.galleryImages.map((img) => `${BASE_URL}${img}`),
        url,
        category: "Fresh Fruit > Mango > Alphonso",
        countryOfOrigin: { "@type": "Country", name: "India" },
        additionalProperty: [
          { "@type": "PropertyValue", name: "Variety", value: "Alphonso (Hapus)" },
          { "@type": "PropertyValue", name: "Origin", value: "Ratnagiri, Maharashtra, India" },
          { "@type": "PropertyValue", name: "GI Tag", value: "Yes — Ratnagiri Alphonso GI Certified" },
          { "@type": "PropertyValue", name: "Grade", value: product.grade },
          { "@type": "PropertyValue", name: "Pieces per Box", value: String(product.pieces) },
          { "@type": "PropertyValue", name: "Box Weight", value: product.boxWeight },
          { "@type": "PropertyValue", name: "Average Piece Weight", value: product.weight },
          { "@type": "PropertyValue", name: "Ripening Method", value: "Naturally ripened — no carbide" },
          { "@type": "PropertyValue", name: "Season", value: "March to June" },
        ],
        nutrition: {
          "@type": "NutritionInformation",
          servingSize: "100g",
          calories: "60 calories",
          fatContent: "0.38g",
          carbohydrateContent: "15g",
          sugarContent: "14g",
          fiberContent: "1.6g",
          proteinContent: "0.82g",
          vitaminCContent: "36mg",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: String(product.rating),
          reviewCount: String(product.reviewCount),
          bestRating: "5",
          worstRating: "1",
        },
        review: product.reviews.map((r) => ({
          "@type": "Review",
          author: { "@type": "Person", name: r.name },
          reviewRating: {
            "@type": "Rating",
            ratingValue: String(r.rating),
            bestRating: "5",
          },
          datePublished: r.date,
          reviewBody: r.comment,
          locationCreated: { "@type": "Place", name: r.location },
        })),
        offers: {
          "@type": "Offer",
          "@id": `${url}#offer`,
          url,
          priceCurrency: "INR",
          price: String(product.price),
          priceValidUntil: "2026-07-31",
          availability: product.inStock
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
          itemCondition: "https://schema.org/NewCondition",
          seller: { "@id": `${BASE_URL}/#organization` },
          shippingDetails: {
            "@type": "OfferShippingDetails",
            shippingRate: {
              "@type": "MonetaryAmount",
              value: "0",
              currency: "INR",
            },
            shippingDestination: {
              "@type": "DefinedRegion",
              addressCountry: "IN",
            },
            deliveryTime: {
              "@type": "ShippingDeliveryTime",
              handlingTime: {
                "@type": "QuantitativeValue",
                minValue: 0,
                maxValue: 1,
                unitCode: "DAY",
              },
              transitTime: {
                "@type": "QuantitativeValue",
                minValue: 1,
                maxValue: 2,
                unitCode: "DAY",
              },
            },
          },
          hasMerchantReturnPolicy: {
            "@type": "MerchantReturnPolicy",
            applicableCountry: "IN",
            returnPolicyCategory:
              "https://schema.org/MerchantReturnFiniteReturnWindow",
            merchantReturnDays: 1,
            returnMethod: "https://schema.org/ReturnByMail",
            returnFees: "https://schema.org/FreeReturn",
            refundType: "https://schema.org/FullRefund",
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: product.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "All Mangoes",
            item: `${BASE_URL}/products`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${product.name} — ${product.grade}`,
            item: url,
          },
        ],
      },
    ],
  };
}

export default async function ProductPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildProductSchema(product)) }}
      />
      <ProductDetailClient params={Promise.resolve({ slug })} />
    </>
  );
}
