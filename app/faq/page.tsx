import type { Metadata } from "next";
import FAQClient from "./FAQClient";

const BASE_URL = "https://aamnative.com";

export const metadata: Metadata = {
  title: "FAQ — Ratnagiri Alphonso Mango Questions Answered | Aam Native",
  description:
    "Everything you need to know about GI-certified Ratnagiri Alphonso mangoes — carbide-free ripening, season dates, delivery, grades, storage, and how to identify real Hapus.",
  keywords: [
    "alphonso mango FAQ",
    "hapus mango questions",
    "GI certified mango india",
    "carbide free mango meaning",
    "ratnagiri alphonso season 2026",
    "how to identify real alphonso mango",
    "alphonso mango delivery india",
    "mango grade premium standard",
    "how to store alphonso mango",
    "buy hapus mango online india",
  ],
  alternates: { canonical: `${BASE_URL}/faq` },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/faq`,
    title: "Alphonso Mango FAQ — Aam Native",
    description:
      "All your questions about GI-certified Ratnagiri Alphonso mangoes answered — season, grades, carbide-free ripening, delivery, and storage.",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Aam Native — Ratnagiri Alphonso Mango FAQ",
      },
    ],
  },
};

const faqs = [
  {
    category: "About Our Mangoes",
    items: [
      {
        q: "What makes Ratnagiri Alphonso mango different from other mangoes?",
        a: "Ratnagiri Alphonso mango (Hapus) is GI-certified by the Government of India, guaranteeing its origin in Ratnagiri district, Maharashtra. It is distinguished by saffron-yellow pulp, near-zero fiber, exceptional sweetness (Brix 18–24), and a floral-saffron aroma that develops exclusively in the Konkan coastal microclimate. No other Indian mango variety commands comparable export premiums in Europe and the Middle East.",
      },
      {
        q: "What is a GI-certified mango and why does it matter?",
        a: "A GI-certified mango carries a Geographical Indication tag issued by the Government of India under the GI of Goods (Registration and Protection) Act, 1999. The GI tag certifies that the mango was grown in the specified region (Ratnagiri district) and meets established quality standards. It protects consumers from counterfeit or mislabeled mangoes sold as 'Alphonso' that were actually grown elsewhere.",
      },
      {
        q: "Is Aam Native's Alphonso mango GI certified?",
        a: "Yes. Aam Native sources exclusively from GI-registered farms in Ratnagiri district, Maharashtra. Each batch is accompanied by GI certification documentation. You can verify Ratnagiri Alphonso GI registration on the official Government of India GI registry at giindiaonline.gov.in.",
      },
      {
        q: "What is the difference between Ratnagiri Alphonso and Devgad Alphonso?",
        a: "Both are GI-certified Hapus varieties but grown in different districts of Maharashtra. Ratnagiri Alphonso (Ratnagiri district) has a more intense aroma and thinner skin due to its laterite soil and coastal humidity. Devgad Alphonso (Sindhudurg district) has a slightly firmer texture and longer shelf life. Both are authentic Hapus — Aam Native sources exclusively from Ratnagiri.",
      },
      {
        q: "How do I identify a real Ratnagiri Alphonso mango?",
        a: "Authentic Ratnagiri Alphonso mangoes have: (1) saffron-yellow skin — not uniformly orange or red; a green shoulder near the stem is normal, (2) a rich floral-saffron aroma with no chemical or alcoholic odor, (3) smooth, fiber-free pulp that melts on the tongue, (4) oval to oblong shape weighing 200–400g, and (5) a GI certification tag from the seller. A chemical smell indicates carbide ripening — avoid those.",
      },
    ],
  },
  {
    category: "Carbide-Free & Natural Ripening",
    items: [
      {
        q: "Are your mangoes carbide-free?",
        a: "Yes — guaranteed. Calcium carbide (CaC₂) ripening is illegal under FSSAI regulations in India and produces acetylene gas, a known health hazard. All Aam Native mangoes are naturally tree-ripened and post-harvest matured using traditional wood-shaving beds without any chemical agents. Our supply chain is fully carbide-free.",
      },
      {
        q: "What is carbide ripening and why is it harmful?",
        a: "Calcium carbide is a chemical that accelerates artificial ripening by releasing acetylene gas — a carcinogen analog of ethylene. Carbide-ripened mangoes ripen unevenly from the outside in, leaving inner flesh unripe, and carry a distinctive chemical odor. The FSSAI prohibits its use, but enforcement is inconsistent in wholesale markets. Carbide-ripened fruit has been linked to neurological effects from arsenic and phosphorus impurities in industrial-grade calcium carbide.",
      },
      {
        q: "How are your mangoes ripened naturally?",
        a: "Our Ratnagiri Alphonso mangoes are harvested at optimum maturity and ripened in traditional wood-shaving (bhagar) beds — a method used in Konkan for generations. The mangoes rest in dry wood shavings which regulate temperature and humidity, allowing natural ethylene produced by the fruit itself to complete the ripening process. This produces the characteristic intense aroma and saffron-gold color that carbide-ripened mangoes cannot replicate.",
      },
    ],
  },
  {
    category: "Season & Availability",
    items: [
      {
        q: "When does the Alphonso mango season start in 2026?",
        a: "The Ratnagiri Alphonso mango season for 2026 is expected to begin in mid-March 2026, with peak availability in April and early May 2026. The season typically closes by late May or early June. Season timing may vary by ±2 weeks depending on monsoon patterns in the preceding year. Aam Native opens pre-season bookings in February — sign up to reserve your batch before public availability.",
      },
      {
        q: "What happens if I order outside the mango season?",
        a: "Aam Native only sells during the actual Alphonso season (March–June). We do not sell off-season frozen or cold-stored mangoes. If you place a pre-season order, it will be fulfilled when the first quality batches arrive from the farm. We will notify you by WhatsApp and email before dispatch.",
      },
    ],
  },
  {
    category: "Grades & Products",
    items: [
      {
        q: "What is the difference between Premium, Standard, and Regular grades?",
        a: "All three grades are the same authentic GI-certified Ratnagiri Alphonso — the difference is size and presentation. Premium (12 pieces, ~250g each) are hand-selected for the largest size, most uniform appearance, and gift-ready presentation. Standard (14 pieces, ~214g each) are slightly smaller with minor cosmetic variation — equally delicious. Regular (16 pieces, ~188g each) is our best-value option, ideal for cooking, aamras, and families who want maximum mango.",
      },
      {
        q: "Which grade should I buy for gifting?",
        a: "The Premium grade is our most popular corporate and personal gifting option — 12 large, uniform, saffron-gold mangoes in premium gift packaging. For family gifting where quantity matters more than presentation, Standard or Regular are excellent choices at better value.",
      },
      {
        q: "Can I order in bulk or for corporate gifting?",
        a: "Yes. Aam Native offers bulk orders and branded corporate gifting boxes with custom packaging and personalized notes. Minimum bulk order is 5 boxes. Contact us via WhatsApp at +91 98765 43210 or email hello@aamnative.com for bulk pricing and custom branding options.",
      },
    ],
  },
  {
    category: "Delivery & Freshness",
    items: [
      {
        q: "How does Aam Native deliver fresh mangoes without losing quality?",
        a: "Mangoes are harvested at optimum maturity, packed within 24–48 hours of harvest, and dispatched via expedited courier to reach customers within 2–4 days. We use temperature-controlled corrugated packaging designed for mango transit. This eliminates the cold storage delays that degrade Alphonso flavour in conventional supermarket supply chains.",
      },
      {
        q: "Do you deliver Alphonso mangoes across all of India?",
        a: "Yes. Aam Native delivers to 500+ pincodes across India, including all major metros (Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, Kolkata) and Tier-2 cities. Delivery typically takes 2–4 business days from dispatch. Some remote pincodes may have extended timelines — check at checkout.",
      },
      {
        q: "What if my mangoes arrive damaged or unripe?",
        a: "We have a 100% freshness guarantee. If your mangoes arrive damaged, over-ripe, or with significant quality issues, contact us within 24 hours of delivery with a photo. We will replace the order or issue a full refund — no questions asked.",
      },
    ],
  },
  {
    category: "Storage & Ripening at Home",
    items: [
      {
        q: "How do I store Alphonso mangoes after they arrive?",
        a: "Store unripe Alphonso mangoes at room temperature (24–28°C) away from direct sunlight — they will ripen in 2–4 days. Once ripe (identified by a strong saffron aroma and a slight give when gently pressed), refrigerate and consume within 2–3 days. Do not refrigerate unripe mangoes — cold temperatures halt the ripening process and permanently damage the flavour.",
      },
      {
        q: "How do I know when an Alphonso mango is ripe and ready to eat?",
        a: "A ripe Ratnagiri Alphonso mango: (1) fills the room with an intense saffron-floral fragrance, (2) yields slightly to gentle thumb pressure (not mushy), (3) has turned fully saffron-yellow with no green patches, and (4) the stem end feels slightly soft. Do not rely on colour alone — smell is the most reliable indicator for Alphonso.",
      },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${BASE_URL}/faq#webpage`,
  url: `${BASE_URL}/faq`,
  name: "Ratnagiri Alphonso Mango FAQ — Aam Native",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "FAQ", item: `${BASE_URL}/faq` },
    ],
  },
  mainEntity: faqs.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQClient faqs={faqs} />
    </>
  );
}
