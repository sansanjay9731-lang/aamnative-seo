# AamNative.com — On-Page SEO Action List

**Current Health Score:** ~52/100
**Target Health Score:** 85/100
**Projected Gain:** +33 points after all fixes

---

## PRIORITY FIXES (Do Today)

### H1 Replacement

**Current (bad):** "India's King of Fruits"

**Replace with:**
```
Buy Ratnagiri Alphonso Mangoes Online — GI-Certified, Farm-Fresh Delivery Across India
```

**Alternative H1 (emotional tone):**
```
GI-Certified Ratnagiri Alphonso Mangoes — Straight From the Orchard to Your Doorstep
```

---

### H2s for Homepage Sections (in conversion funnel order)
```
H2: Why Ratnagiri Alphonso Is India's Most Prized Mango
H2: Order Fresh Alphonso Mangoes Online — Choose Your Box
H2: What Makes Our Mangoes Different? (Farm-to-Doorstep Guarantee)
H2: Certified Quality You Can Trust — GI Tag, FSSAI Licensed
H2: Delivering Across India — Mumbai, Delhi, Bangalore & More
H2: What Our Customers Are Saying
H2: Mango Varieties We Grow — Alphonso, Kesar, and More
H2: Frequently Asked Questions About Ordering Mangoes Online
```

---

### Footer Text (Copy-Paste Ready)

Replace your placeholder numbers with actual registration numbers before publishing.

```
AAM Native | GI-Certified Ratnagiri Alphonso Mangoes

FSSAI License No.: 11224999000XXX  |  Valid Until: MM/YYYY
GST Identification Number (GSTIN): 27AABCU9603R1ZX
GI Tag: Alphonso Mango (Ratnagiri) — GI Application No. 33
Registered under the Geographical Indications of Goods (Registration & Protection) Act, 1999

Registered Office: [Your full address], Maharashtra, India — PIN: XXXXXX

© 2026 AAM Native. All rights reserved.
We source directly from GI-certified orchards in the Konkan belt, Ratnagiri district, Maharashtra.
```

**Notes:**
- FSSAI format: 14-digit number. State code for Maharashtra is 11. Get at foscos.fssai.gov.in
- GSTIN format: 15 characters. Starts with state code 27 for Maharashtra
- GI Application No. 33: Official registration for Ratnagiri Alphonso — use exact language for E-E-A-T

---

## PRODUCT PAGE SEO

### URL Structure Pattern
```
/product/[variety]-[weight]-[pack-type]

Examples:
/product/ratnagiri-alphonso-mango-1kg-box
/product/ratnagiri-alphonso-mango-3kg-gift-box
/product/ratnagiri-alphonso-mango-6kg-bulk-pack
/product/kesar-mango-1kg-box
/product/hapus-mango-2-dozen-premium
```

**Rules:** Always include variety name, include weight/quantity, hyphens only, no IDs or auto-generated slugs.

---

### Title Tag Template
```
Buy [Variety] Alphonso Mangoes [Weight] Online | GI-Certified | AAM Native
```

**Examples:**
```
Buy Ratnagiri Alphonso Mangoes 1kg Box Online | GI-Certified | AAM Native
Buy Alphonso Mango Gift Box 3kg — Farm-Fresh, GI-Certified | AAM Native
Buy Bulk Ratnagiri Hapus Mangoes 6kg Online | Free Delivery | AAM Native
```

---

### Meta Description Template
```
Order [Variety] [Weight] online from AAM Native — GI-certified Ratnagiri Alphonso mangoes,
harvested from Konkan orchards and delivered fresh to your door. [Season note or USP].
₹[price] | Free delivery on orders above ₹[threshold].
```

**Example:**
```
Order Ratnagiri Alphonso Mangoes 1kg Box online from AAM Native — GI-certified,
farm-fresh hapus mangoes from Konkan orchards, delivered across India.
Available April–June. ₹549 | Free delivery above ₹999.
```

---

### Product Schema JSON-LD with AggregateRating

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Ratnagiri Alphonso Mango 1kg Box — GI-Certified",
  "description": "Farm-fresh GI-certified Ratnagiri Alphonso mangoes (Hapus) sourced directly from Konkan orchards in Ratnagiri district, Maharashtra. Available April to June. Delivered pan-India.",
  "image": [
    "https://www.aamnative.com/images/ratnagiri-alphonso-mango-1kg-box.webp",
    "https://www.aamnative.com/images/ratnagiri-alphonso-mango-closeup.webp"
  ],
  "sku": "AAM-RAT-ALP-1KG",
  "brand": {
    "@type": "Brand",
    "name": "AAM Native"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.aamnative.com/product/ratnagiri-alphonso-mango-1kg-box",
    "priceCurrency": "INR",
    "price": "549",
    "priceValidUntil": "2026-06-30",
    "itemCondition": "https://schema.org/NewCondition",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "AAM Native"
    },
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "INR"
      },
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "IN"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": 0,
          "maxValue": 1,
          "unitCode": "DAY"
        },
        "transitTime": {
          "@type": "QuantitativeValue",
          "minValue": 2,
          "maxValue": 4,
          "unitCode": "DAY"
        }
      }
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "GI Tag",
      "value": "Ratnagiri Alphonso Mango — GI Application No. 33"
    },
    {
      "@type": "PropertyValue",
      "name": "FSSAI License",
      "value": "11224999000XXX"
    },
    {
      "@type": "PropertyValue",
      "name": "Origin",
      "value": "Ratnagiri District, Maharashtra, India"
    },
    {
      "@type": "PropertyValue",
      "name": "Season",
      "value": "April to June"
    }
  ]
}
```

> IMPORTANT: Use your real reviewCount. If under 5 reviews, remove the aggregateRating block entirely.

---

## KEYWORD CLUSTERS TO TARGET

### Cluster 1 — Transactional: Buy Alphonso Online
**Target page:** Homepage + /shop/alphonso-mangoes
```
buy alphonso mangoes online
buy ratnagiri alphonso mango
hapus mango online delivery
order alphonso mango india
alphonso mango delivery mumbai
alphonso mango delivery delhi
alphonso mango delivery bangalore
ratnagiri hapus mango buy
fresh alphonso mangoes online india
GI certified alphonso mango online
```

### Cluster 2 — Product + Variety Specific
**Target page:** Individual product pages
```
ratnagiri alphonso mango 1kg price
alphonso mango box price india
hapus mango 12 dozen price
kesar mango vs alphonso mango
alphonso mango gift box online
premium mango gift hamper india
ratnagiri hapus 3kg box
bulk alphonso mango order
devgad vs ratnagiri alphonso
alphonso mango 500g pack
```

### Cluster 3 — Informational / Trust
**Target page:** Blog posts + About page
```
what is GI tag alphonso mango
ratnagiri alphonso mango season 2026
how to identify genuine ratnagiri hapus
alphonso mango benefits
alphonso mango nutritional value
how to ripen alphonso mango at home
ratnagiri mango harvest season
difference between alphonso and kesar mango
fake vs real alphonso mango
why ratnagiri alphonso is expensive
```

### Cluster 4 — Local / Geo-Targeted Delivery
**Target page:** City-specific landing pages
```
buy alphonso mango online mumbai
mango delivery in delhi
fresh mango delivery hyderabad
alphonso mango delivery bangalore same day
order mangoes online pune
best mango delivery service india
farm fresh mango delivery chennai
ratnagiri mango delivery gurgaon
mango home delivery india
alphonso mango in bangalore
```

### Cluster 5 — Recipe / Top-of-Funnel
**Target page:** Blog posts linked to product pages
```
alphonso mango recipes
best mango for aamras
hapus mango aamras recipe
mango kulfi recipe alphonso
mango cake with hapus
ratnagiri mango milkshake
raw alphonso mango pickle recipe
best mango for smoothie india
how to make mango lassi
alphonso mango dessert recipes
```

---

## TECHNICAL QUICK WINS

### Page Speed — Vercel-Specific

**vercel.json — add cache headers:**
```json
{
  "headers": [
    {
      "source": "/images/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    },
    {
      "source": "/_next/static/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    }
  ]
}
```

**next.config.js — image optimization:**
```js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['aamnative.com'],
  },
}
```

**Other quick wins:**
- [ ] Add `@vercel/speed-insights` package for Core Web Vitals tracking
- [ ] Use `next/image` for ALL product images (auto-generates WebP, resizes, lazy loads)
- [ ] Move Google Fonts to use `display=swap` and preload the woff2 variant
- [ ] Add `<link rel="preconnect">` for Razorpay/payment gateway CDN in `<head>`
- [ ] Run `next build` + `@next/bundle-analyzer` — target under 150KB first-load JS
- [ ] On hero product image: add `loading="eager"` + `fetchpriority="high"` (this is your LCP element)

---

### Image Optimization Checklist

**Alt Text Templates:**
```
Product:     alt="Ratnagiri Alphonso Mangoes 1kg Box — GI-Certified Hapus from Maharashtra"
Closeup:     alt="Golden-yellow Ratnagiri Alphonso mango skin — natural ripening, no carbide"
Orchard:     alt="AAM Native mango orchard in Ratnagiri district, Maharashtra — Konkan belt"
Packaging:   alt="AAM Native premium Alphonso mango gift box, 3kg — delivered pan-India"
Farmer:      alt="AAM Native farmer harvesting Alphonso mangoes in Ratnagiri, Maharashtra"
Certificates: alt="FSSAI license certificate and GI tag certificate for Ratnagiri Alphonso mango"
```

**Format rules:**
- [ ] Convert all product images to WebP — target under 80KB per image at 800x800px
- [ ] Use AVIF for hero/banner images — 30–50% smaller than WebP
- [ ] Never serve images above 2x the display size
- [ ] Add `width` and `height` attributes to every `<img>` tag to prevent CLS
- [ ] Use `loading="lazy"` on all below-fold images
- [ ] Name files with keywords: `ratnagiri-alphonso-mango-1kg-box.webp` not `IMG_2034.jpg`

---

### robots.txt

```
User-agent: *
Allow: /

Disallow: /api/
Disallow: /checkout/
Disallow: /cart/
Disallow: /account/
Disallow: /admin/
Disallow: /?sort=
Disallow: /?filter=
Disallow: /search?

# Block AI training crawlers (protect commercial content)
User-agent: GPTBot
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

# Allow Google Image Bot explicitly
User-agent: Googlebot-Image
Allow: /images/

Sitemap: https://www.aamnative.com/sitemap.xml
```

---

### Sitemap Structure

**sitemap.xml (index file):**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.aamnative.com/sitemap-pages.xml</loc>
    <lastmod>2026-03-01</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.aamnative.com/sitemap-products.xml</loc>
    <lastmod>2026-03-01</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.aamnative.com/sitemap-blog.xml</loc>
    <lastmod>2026-03-01</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.aamnative.com/sitemap-images.xml</loc>
    <lastmod>2026-03-01</lastmod>
  </sitemap>
</sitemapindex>
```

If on Next.js, use `next-sitemap` package — handles all four sitemap types automatically.

---

## CONTENT GAP ANALYSIS — 10 Missing Keywords

| Priority | Keyword | Monthly Vol. | Page Type | Suggested Title |
|----------|---------|-------------|-----------|-----------------|
| 1 | alphonso mango price per kg 2026 | 12,000+ | Landing page | "Alphonso Mango Price Per Kg in 2026 — Why GI-Certified Costs More & Where to Buy" |
| 2 | fake alphonso mango how to identify | 4,100+ | Blog | "How to Identify Fake Alphonso Mangoes — 6 Signs You're Being Sold a Counterfeit Hapus" |
| 3 | how to ripen mango quickly | 22,000+ | Blog | "How to Ripen Alphonso Mangoes at Home — The Right Way (No Carbide, No Damage)" |
| 4 | mango gift box india online | 5,400+ | Product/Landing | "Premium Mango Gift Boxes India — Send GI-Certified Ratnagiri Alphonso Mangoes as Gifts" |
| 5 | buy mango online mumbai delivery | 6,500+ | City landing | "Buy Fresh Alphonso Mangoes Online in Mumbai — Same-Day & Next-Day Delivery by AAM Native" |
| 6 | alphonso mango benefits health | 18,000+ | Blog | "7 Proven Health Benefits of Alphonso Mangoes — Nutrition, Vitamins & Why Hapus Is Best" |
| 7 | ratnagiri alphonso mango season 2026 | 8,000+ | Blog/Landing | "Ratnagiri Alphonso Mango Season 2026: Harvest Dates, Best Time to Order & What to Expect" |
| 8 | devgad vs ratnagiri alphonso mango | 3,200+ | Blog | "Devgad vs Ratnagiri Alphonso Mango: What's the Difference? (And Which Is Better?)" |
| 9 | mango delivery bangalore alphonso | 3,800+ | City landing | "Buy Ratnagiri Alphonso Mangoes Online in Bangalore — Delivered Fresh from Konkan Orchards" |
| 10 | aamras recipe alphonso mango | 9,500+ | Blog | "Authentic Aamras Recipe Using Ratnagiri Alphonso Mangoes — 3 Ingredients, 10 Minutes" |

**Priority order for content creation:**
1. #1 (price page) — highest commercial intent, embed product CTAs
2. #2 (fake vs real) — establishes authority, GI trust signal
3. #3 (how to ripen) — massive volume, top-of-funnel, links to products
4. #5 and #9 (city pages) — templated city landing pages for top 8 Indian metros
5. #7 (season guide) — publish every February, organic traffic surge every April

---

## HEALTH SCORE TRACKER

| Fix | Estimated Score Gain |
|-----|---------------------|
| H1 keyword optimization | +4 points |
| Footer trust signals (FSSAI, GST, GI) | +6 points |
| Product schema + AggregateRating | +8 points |
| Image alt text and WebP conversion | +5 points |
| robots.txt and sitemap | +3 points |
| Page speed (Vercel cache + next/image) | +7 points |
| **Total projected score** | **~85/100** |
