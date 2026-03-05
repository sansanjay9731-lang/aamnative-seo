"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { Star, ArrowRight, ArrowUpRight } from "lucide-react";
import { products } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import ProduceGallery from "@/components/ProduceGallery";
import type { Variants } from "framer-motion";

/* ─── Animation presets ─── */
const reveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};
const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

/* ─── Page ─── */
export default function HomeClient() {
  return (
    <div>
      <HeroSection />
      <StatementBar />
      <ProductsEditorial />
      <ManifestoSection />
      <FarmChapter />
      <ProduceGallery />
      <ProcessSection />
      <TestimonialsSection />
      <EmailSection />
    </div>
  );
}

/* ══════════ 1. CINEMATIC HERO ══════════ */
function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section ref={ref} style={{ position: "relative", height: "100svh", minHeight: "600px", overflow: "hidden", display: "flex", alignItems: "center" }}>
      {/* Parallax photo */}
      <motion.div style={{ position: "absolute", inset: 0, y: imgY }}>
        <Image
          src="/images/farm-full-tree.jpg"
          alt="Lush Alphonso mango tree laden with fruit, Aam Native"
          fill className="object-cover" priority sizes="100vw"
        />
      </motion.div>

      {/* Cinematic overlay — not flat dark, layered atmospheric */}
      <div style={{ position: "absolute", inset: 0, background: "var(--g-cinematic)" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 60% 60%, transparent, rgba(12,21,16,0.7))" }} />

      {/* Headline */}
      <motion.div
        style={{ position: "relative", zIndex: 10, width: "100%", paddingBottom: "clamp(2rem, 6vh, 4rem)", y: textY }}
      >
        <div className="container">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            {/* Eyebrow */}
            <motion.p variants={reveal}
              style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              Rathnagiri, Maharashtra · Since 1968
            </motion.p>

            {/* Giant italic serif */}
            <motion.h1 variants={reveal} className="h-display"
              style={{ color: "white", maxWidth: "1000px", marginBottom: "2rem" }}>
              Buy GI-Certified<br />
              <span style={{ color: "var(--saffron-l)" }}>Ratnagiri Alphonso</span> Mangoes <em style={{ fontStyle: "normal", fontWeight: 300, color: "rgba(255,255,255,0.75)" }}>Online.</em>
            </motion.h1>

            {/* Descriptor */}
            <motion.p variants={reveal}
              style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.0625rem", lineHeight: 1.75, maxWidth: "420px", marginBottom: "2.5rem" }}>
              GI-certified Hapus from the red laterite slopes of Ratnagiri. Farm-direct, naturally ripened, zero compromise.
            </motion.p>

            {/* CTAs — elegant, not utility */}
            <motion.div variants={reveal} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/products" className="btn btn-saffron glow-pulse">
                Discover Our Boxes
              </Link>
              <Link href="/about" className="btn btn-ghost">
                Our Farm
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Corner trust mark — subtle, not a chip */}
      <div style={{ position: "absolute", top: "calc(var(--header-h) + 1.5rem)", right: "1.5rem", textAlign: "right" }}>
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", lineHeight: 1.8 }}>
          GI Certified<br />Zero Carbide<br />Farm Direct
        </p>
      </div>
    </section>
  );
}

/* ══════════ 2. STATEMENT BAR — editorial, not marquee ══════════ */
function StatementBar() {
  const items = [
    "Hand-picked by our family",
    "Rathnagiri · Sindhudurg · Raigad",
    "Naturally wood-ripened",
    "Zero chemicals, zero shortcuts",
    "Delivered within 48 hours",
    "100% freshness or refund",
  ];
  return (
    <div style={{ background: "var(--dusk)", overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <div style={{ padding: "1.125rem 0", display: "flex", alignItems: "center" }}>
        <div className="marquee-track" style={{ display: "flex", flexShrink: 0, gap: "3.5rem", paddingLeft: "3.5rem", whiteSpace: "nowrap" }}>
          {[...items, ...items, ...items].map((item, i) => (
            <span key={i} style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", flexShrink: 0 }}>
              {i % items.length === 0
                ? <span style={{ color: "var(--saffron-l)", marginRight: "3.5rem" }}>✦</span>
                : null}
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════ 3. EDITORIAL PRODUCT SHOWCASE ══════════ */
function ProductsEditorial() {
  return (
    <section className="section" style={{ background: "var(--cream)" }}>
      <div className="container">
        {/* Section header */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <motion.p variants={reveal} className="eyebrow" style={{ marginBottom: "0.75rem" }}>
              Season 2026 · Limited Harvest
            </motion.p>
            <motion.h2 variants={reveal} className="h-section">
              Order Fresh Alphonso<br />
              <span style={{ fontStyle: "italic", color: "var(--saffron)" }}>Mangoes Online</span>
            </motion.h2>
          </div>
          <motion.div variants={reveal}>
            <Link href="/products" className="btn btn-link">
              All products <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Products — editorial cards */}
        <div className="product-grid">
          {products.map((product, i) => (
            <EditorialProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EditorialProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const gradeColor = product.grade === "Premium" ? "var(--saffron)" : product.grade === "Standard" ? "var(--grove)" : "var(--saffron)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="card-clean"
    >
      {/* Photo — tall, full bleed */}
      <div style={{ position: "relative", height: "280px", background: "var(--parchment)", overflow: "hidden" }}>
        <Image
          src={product.image}
          alt={`${product.name} · Aam Native · ${product.grade} Alphonso`}
          fill className="object-cover"
          style={{ transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
          sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onMouseOver={e => (e.currentTarget.style.transform = "scale(1.06)")}
          onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
        />
        {/* Subtle bottom gradient */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(12,21,16,0.55), transparent)" }} />

        {/* Grade — elegant, top left */}
        <div style={{ position: "absolute", top: "1rem", left: "1rem" }}>
          <span style={{ display: "inline-block", background: "rgba(12,21,16,0.75)", backdropFilter: "blur(8px)", color: "white", fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.18em", padding: "0.3rem 0.85rem", borderRadius: "100px", textTransform: "uppercase" }}>
            {product.grade}
          </span>
        </div>

        {/* Star + rating */}
        <div style={{ position: "absolute", bottom: "1rem", right: "1rem", display: "flex", alignItems: "center", gap: "0.25rem", background: "rgba(255,255,255,0.95)", borderRadius: "100px", padding: "0.25rem 0.7rem" }}>
          <Star size={11} fill="#FBBF24" color="#FBBF24" />
          <span style={{ fontSize: "0.74rem", fontWeight: 800, color: "var(--text)" }}>{product.rating}</span>
          <span style={{ fontSize: "0.68rem", color: "var(--muted)" }}>({product.reviewCount})</span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem" }}>
        {/* Eyebrow */}
        <p style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.35rem" }}>
          {product.pieces} pcs · {product.boxWeight}
        </p>

        {/* Name */}
        <h3 className="serif" style={{ fontSize: "1.2rem", fontWeight: 700, lineHeight: 1.3, marginBottom: "0.5rem" }}>
          {product.name}
        </h3>

        <p className="body-sm" style={{ marginBottom: "1.25rem" }}>{product.tagline}</p>

        {/* Price row */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.625rem", marginBottom: "1.25rem" }}>
          <span className="serif" style={{ fontSize: "1.75rem", fontWeight: 800, color: gradeColor }}>
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          <span style={{ fontSize: "0.875rem", textDecoration: "line-through", color: "var(--muted)", opacity: 0.7 }}>
            ₹{product.originalPrice.toLocaleString("en-IN")}
          </span>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: "0.625rem" }}>
          <button onClick={handleAdd}
            style={{
              flex: 1, padding: "0.875rem", borderRadius: "12px", border: "none",
              background: added ? "#1F5C3A" : "var(--g-saffron)",
              color: "white", fontWeight: 800, fontSize: "0.82rem", cursor: "pointer",
              fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "all 0.25s",
            }}>
            {added ? "✓ In Cart" : "Add to Cart"}
          </button>
          <Link href={`/products/${product.slug}`}
            style={{
              padding: "0.875rem 1.1rem", borderRadius: "12px",
              border: "1.5px solid var(--border)", color: "var(--text)",
              fontWeight: 700, fontSize: "0.8rem", textDecoration: "none",
              display: "flex", alignItems: "center", gap: "0.25rem",
              fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "all 0.2s",
            }}
            onMouseOver={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--saffron)"; (e.currentTarget as HTMLElement).style.color = "var(--saffron)"; }}
            onMouseOut={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
          >
            View <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ══════════ 4. MANIFESTO — full dark, one singular statement ══════════ */
function ManifestoSection() {
  return (
    <section style={{ background: "var(--ink)", padding: "8rem 0 8rem", overflow: "hidden", position: "relative" }}>
      {/* Ambient texture — blurred golden radial */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "800px", height: "400px", background: "radial-gradient(ellipse, rgba(224,123,22,0.08) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={stagger}
          style={{ maxWidth: "820px" }}>

          <motion.p variants={reveal} className="eyebrow" style={{ color: "rgba(255,255,255,0.35)", marginBottom: "2rem" }}>
            Our philosophy
          </motion.p>

          <motion.blockquote variants={reveal}
            className="serif"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.25rem)", fontWeight: 600, fontStyle: "italic", color: "rgba(255,255,255,0.92)", lineHeight: 1.35, marginBottom: "2.5rem" }}>
            "The Alphonso is not just a mango. It is the terroir of the Konkan coast, the patience of an orchard that cannot be rushed, and the discipline of a family that refuses to compromise. Season after season, tree after tree."
          </motion.blockquote>

          <motion.div variants={reveal} style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <div style={{ width: "40px", height: "1.5px", background: "var(--g-saffron)" }} />
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em" }}>
              Founder, Aam Native · Third-generation orchard
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════ 5. FARM CHAPTER — editorial asymmetric ══════════ */
function FarmChapter() {
  return (
    <section className="section-lg" style={{ background: "var(--parchment)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3.5rem", alignItems: "center" }}>
          {/* Image block — editorial proportion */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
            variants={slideLeft}
            style={{ position: "relative" }}
          >
            <div style={{ borderRadius: "var(--r-xl)", overflow: "hidden", aspectRatio: "4/5", maxHeight: "600px", position: "relative" }}>
              <Image
                src="/images/farm-full-tree.jpg"
                alt="Our Alphonso mango tree loaded with fruit, Rathnagiri, Maharashtra"
                fill className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 16 }} whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.7 }}
              style={{
                position: "absolute", bottom: "-1.5rem", right: "-0.5rem",
                background: "white", borderRadius: "20px", padding: "1.25rem 1.5rem",
                boxShadow: "0 12px 48px rgba(0,0,0,0.12)",
                display: "flex", flexDirection: "column", gap: "0.2rem"
              }}>
              <span className="serif" style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--saffron)", lineHeight: 1 }}>50+</span>
              <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Years of craft</span>
              <span style={{ fontSize: "0.72rem", color: "var(--muted)", marginTop: "0.1rem" }}>Est. 1968 · Ratnagiri</span>
            </motion.div>
          </motion.div>

          {/* Text — right column */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={slideRight}>
            <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>The Origin</p>
            <h2 className="h-section" style={{ marginBottom: "1.5rem" }}>
              Why Ratnagiri Alphonso Is<br />
              <span style={{ fontStyle: "italic", color: "var(--saffron)" }}>India's Most Prized Mango.</span>
            </h2>
            <div style={{ width: "48px", height: "2px", background: "var(--g-saffron)", marginBottom: "2rem", borderRadius: "2px" }} />

            <p className="body-lg" style={{ marginBottom: "1.25rem" }}>
              My grandfather planted our first 40 trees in 1968 on the red laterite slopes above the Konkan coast. The salty sea air, volcanic soil, and precise monsoon made the microclimate that only Rathnagiri can offer, and only Alphonso can fully express.
            </p>
            <p className="body-lg" style={{ marginBottom: "2.5rem" }}>
              For decades we sold to brokers at APMC. In 2010, I started delivering directly, removing the middlemen, raising quality standards, and building a relationship with 2,500+ families who now wait for our boxes every season.
            </p>

            {/* Quality credentials */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "2.5rem" }}>
              {[
                ["🌿", "Zero Carbide"],
                ["🏅", "GI Certified"],
                ["📦", "Farm Direct"],
                ["♻️", "Eco Packaging"],
              ].map(([icon, label]) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.875rem 1.125rem", borderRadius: "12px", background: "white" }}>
                  <span style={{ fontSize: "1.125rem" }}>{icon}</span>
                  <span style={{ fontSize: "0.8125rem", fontWeight: 700 }}>{label}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn btn-link">
              Read our full story <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════ 6. PROCESS — elegant, numbered ══════════ */
function ProcessSection() {
  const steps = [
    { n: "01", label: "Hand Picked", desc: "Each mango inspected at the tree. Bruised or under-ripe? Returned to the branch." },
    { n: "02", label: "Graded & Sorted", desc: "By size, weight, and the golden flush of colour that signals peak ripeness." },
    { n: "03", label: "Wood-Ripened", desc: "Traditional hay & wood-shaving method. No gas, no spray, no shortcuts." },
    { n: "04", label: "Packed to Order", desc: "Ventilated single-layer boxes. Each mango cradled to survive the journey." },
    { n: "05", label: "Delivered Direct", desc: "Farm to your door in 24–48 hours. Cold-chain where needed." },
  ];

  return (
    <section className="section" style={{ background: "white" }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0", marginTop: "1rem" }}>
          <motion.div variants={reveal} style={{ marginBottom: "3.5rem" }}>
            <p className="eyebrow" style={{ marginBottom: "0.875rem" }}>The Aam Native Promise</p>
            <h2 className="h-section">What Makes Our Mangoes<br /><span style={{ fontStyle: "italic", color: "var(--saffron)" }}>Different?</span></h2>
          </motion.div>

          {steps.map((s, i) => (
            <motion.div key={s.n}
              initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7 }}
              style={{
                display: "flex", gap: "2rem", alignItems: "flex-start",
                padding: "1.75rem 0",
                borderBottom: i < steps.length - 1 ? "1px solid var(--border)" : "none"
              }}>
              <span className="serif" style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--sand)", lineHeight: 1, flexShrink: 0, minWidth: "60px" }}>{s.n}</span>
              <div>
                <h3 style={{ fontWeight: 800, fontSize: "1rem", marginBottom: "0.4rem" }}>{s.label}</h3>
                <p className="body-sm">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════ 7. TESTIMONIALS — pull quotes, editorial ══════════ */
function TestimonialsSection() {
  const reviews = [
    { name: "Priya S.", loc: "Mumbai", text: "Best Alphonso I've ordered online. The sweetness and fragrance is exactly what I remember from my grandmother's home in Ratnagiri.", rating: 5 },
    { name: "Rohan M.", loc: "Pune", text: "Ordered 3 boxes for gifting. Every recipient called to ask where I got them. Packaging is beautiful, mangos are extraordinary.", rating: 5 },
    { name: "Anjali K.", loc: "Bangalore", text: "Sceptical about ordering mangos online but these exceeded every expectation. Zero fibre, perfectly ripe, arrived next day.", rating: 5 },
    { name: "Vikram D.", loc: "Delhi", text: "The Premium box is worth every rupee. My kids fight over the last mango. This is now a family tradition every summer.", rating: 5 },
  ];

  return (
    <section className="section" style={{ background: "var(--parchment)" }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <motion.p variants={reveal} className="eyebrow" style={{ marginBottom: "0.875rem" }}>What they say</motion.p>
          <motion.div variants={reveal} style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <h2 className="h-section">
              What Our<br />
              <span style={{ fontStyle: "italic", color: "var(--saffron)" }}>Customers Are Saying.</span>
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#FBBF24" color="#FBBF24" />)}
              <span className="serif" style={{ fontSize: "1.5rem", fontWeight: 800, marginLeft: "0.375rem" }}>4.9</span>
              <span className="body-sm" style={{ marginLeft: "0.375rem" }}>from 749 reviews</span>
            </div>
          </motion.div>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1.25rem" }} className="sm:grid-cols-2">
          {reviews.map((r, i) => (
            <motion.div key={r.name}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="card-clean" style={{ padding: "1.75rem" }}>
              {/* Large quote mark */}
              <div className="serif" style={{ fontSize: "4rem", color: "var(--saffron)", lineHeight: 0.8, marginBottom: "1rem", opacity: 0.4 }}>"</div>
              <p className="serif" style={{ fontSize: "1rem", lineHeight: 1.7, fontWeight: 400, fontStyle: "italic", color: "var(--text)", marginBottom: "1.5rem" }}>
                {r.text}
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "var(--g-saffron)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: "0.875rem" }}>
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "0.875rem" }}>{r.name}</p>
                    <p style={{ fontSize: "0.72rem", color: "var(--muted)" }}>{r.loc} · Verified Purchase</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "2px" }}>
                  {[...Array(r.rating)].map((_, j) => <Star key={j} size={12} fill="#FBBF24" color="#FBBF24" />)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════ 8. EMAIL — minimal, confident ══════════ */
function EmailSection() {
  return (
    <section style={{ background: "var(--grove)", padding: "6rem 0" }}>
      <div className="container" style={{ maxWidth: "580px", textAlign: "center" }}>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={stagger}>
          <motion.p variants={reveal} style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Season opens March 2026
          </motion.p>
          <motion.h2 variants={reveal} className="h-section serif" style={{ color: "white", marginBottom: "1rem" }}>
            Be first.<br />
            <span style={{ color: "var(--saffron-l)", fontStyle: "italic" }}>Save 10%.</span>
          </motion.h2>
          <motion.p variants={reveal} className="body" style={{ color: "rgba(255,255,255,0.55)", marginBottom: "2.5rem" }}>
            Stock opens in March and sells out in weeks. Join 3,000+ families on our early access list.
          </motion.p>
          <motion.form variants={reveal} onSubmit={e => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            <input type="email" placeholder="your@email.com" required
              style={{
                width: "100%", padding: "1.125rem 1.375rem", borderRadius: "14px",
                border: "1.5px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.06)", backdropFilter: "blur(8px)",
                color: "white", fontSize: "0.9375rem", outline: "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            />
            <button type="submit" className="btn btn-saffron" style={{ borderRadius: "14px", padding: "1.125rem", fontSize: "0.875rem", width: "100%", justifyContent: "center" }}>
              Reserve My Early Access
            </button>
          </motion.form>
          <motion.p variants={reveal} style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.72rem", marginTop: "1.25rem" }}>
            No spam. Unsubscribe anytime.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
