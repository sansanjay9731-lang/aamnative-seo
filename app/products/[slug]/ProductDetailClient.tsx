"use client";

import { useState, use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    Star, ShieldCheck, Truck, Leaf, Clock, Plus, Minus,
    ShoppingCart, ChevronDown, ChevronUp, ArrowLeft, Zap, Award, CheckCircle2, Users
} from "lucide-react";
import { products } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import ProduceGallery from "@/components/ProduceGallery";

/* ─── User's real dessert photos ─── */
const RECIPE_IMGS: Record<string, string> = {
    "Alphonso Mango Aamras": "/images/dessert-aamras.jpg",
    "Mango Aamras": "/images/dessert-aamras.jpg",
    "Mango Kulfi": "/images/dessert-kulfi.jpg",
    "Mango Cake": "/images/dessert-mango-cake.jpg",
    "Mango Lassi": "/images/dessert-aamras.jpg",
    "Mango Shake": "/images/dessert-aamras.jpg",
};

/* ─── Social proof numbers ─── */
const PROOF = [
    { icon: <Users size={14} />, text: "2,847 ordered this season" },
    { icon: <Star size={14} style={{ fill: "#FBBF24", color: "#FBBF24" }} />, text: "4.9 · 749 verified reviews" },
    { icon: <Truck size={14} />, text: "Delivered tomorrow if ordered now" },
];

/* ─── CTA block — reused in multiple places ─── */
function AddToCartBlock({
    product, accent, qty, setQty, added, onAdd
}: {
    product: ReturnType<typeof products.find> & object,
    accent: string, qty: number,
    setQty: React.Dispatch<React.SetStateAction<number>>,
    added: boolean, onAdd: () => void
}) {
    if (!product) return null;
    const discount = Math.round((1 - product.price / product.originalPrice) * 100);
    return (
        <div style={{ background: "var(--an-cream)", borderRadius: "20px", padding: "1.5rem", border: "1px solid var(--an-border)" }}>
            {/* Price */}
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "0.5rem" }}>
                <span style={{ fontFamily: "'Fraunces', serif", fontSize: "2.25rem", fontWeight: 800, color: accent, lineHeight: 1 }}>
                    ₹{product.price.toLocaleString("en-IN")}
                </span>
                <span style={{ fontSize: "1.05rem", textDecoration: "line-through", color: "var(--an-muted)" }}>
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
                <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#15803D", background: "#DCFCE7", borderRadius: "100px", padding: "0.2rem 0.7rem" }}>
                    Save {discount}%
                </span>
            </div>
            <p style={{ fontSize: "0.8rem", color: "var(--an-muted)", marginBottom: "1.25rem" }}>
                {product.pieces} mangos · {product.boxWeight} · {product.weight} avg
            </p>

            {/* Urgency row */}
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", background: "#FEF2F2", borderRadius: "100px", padding: "0.35rem 0.85rem" }}>
                    <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#EF4444", animation: "pulse 1.4s ease-in-out infinite" }} />
                    <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#991B1B" }}>Only 8 boxes left</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", background: "#F0FDF4", borderRadius: "100px", padding: "0.35rem 0.85rem" }}>
                    <Zap size={11} style={{ color: "#16A34A" }} />
                    <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#15803D" }}>Delivered Tomorrow</span>
                </div>
            </div>

            {/* Quantity + CTA */}
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "white", borderRadius: "12px", padding: "0.5rem 0.75rem", border: "1.5px solid var(--an-border)", flexShrink: 0 }}>
                    <button onClick={() => setQty(q => Math.max(1, q - 1))}
                        style={{ width: "28px", height: "28px", borderRadius: "8px", border: "none", background: "var(--an-mist)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Minus size={13} />
                    </button>
                    <span style={{ fontWeight: 800, fontSize: "1rem", minWidth: "22px", textAlign: "center" }}>{qty}</span>
                    <button onClick={() => setQty(q => q + 1)}
                        style={{ width: "28px", height: "28px", borderRadius: "8px", border: "none", background: "var(--an-mist)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Plus size={13} />
                    </button>
                </div>
                <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(232,114,12,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onAdd}
                    style={{
                        flex: 1, padding: "0.95rem 1.5rem", borderRadius: "14px", border: "none",
                        background: added ? "#16A34A" : `linear-gradient(135deg, #E8720C, #FF9A3C)`,
                        color: "white", fontWeight: 800, fontSize: "1rem", cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        transition: "background 0.3s ease",
                    }}>
                    <ShoppingCart size={18} />
                    {added ? "✓ Added to Cart!" : `Add ${qty} Box${qty > 1 ? "es" : ""} · ₹${(product.price * qty).toLocaleString("en-IN")}`}
                </motion.button>
            </div>

            {/* Trust micro-badges */}
            <div style={{ display: "flex", gap: "0.5rem", paddingTop: "0.875rem", marginTop: "0.25rem", borderTop: "1px solid var(--an-border)" }}>
                {[
                    { icon: <Leaf size={14} style={{ color: "#16A34A" }} />, text: "100% Organic" },
                    { icon: <Truck size={14} style={{ color: "var(--an-saffron)" }} />, text: "Fast Shipping" },
                    { icon: <ShieldCheck size={14} style={{ color: "#2563EB" }} />, text: "Freshness Ext" },
                    { icon: <Award size={14} style={{ color: "#7C3AED" }} />, text: "GI Tagged" },
                ].map(b => (
                    <div key={b.text} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.35rem", padding: "0.25rem" }}>
                        <div style={{ padding: "0.5rem", borderRadius: "10px", background: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>{b.icon}</div>
                        <span style={{ fontSize: "0.55rem", fontWeight: 800, color: "var(--an-muted)", textAlign: "center", lineHeight: 1.2, textTransform: "uppercase", letterSpacing: "0.02em" }}>{b.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const product = products.find(p => p.slug === slug);
    const related = products.filter(p => p.slug !== slug);
    const { addItem } = useCart();

    const [qty, setQty] = useState(1);
    const [mainImg, setMainImg] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [added, setAdded] = useState(false);

    if (!product) {
        return (
            <div style={{ paddingTop: "var(--header-h)", minHeight: "70vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
                <p style={{ fontSize: "3rem" }}>🥭</p>
                <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.5rem", fontWeight: 700 }}>Product not found</h1>
                <Link href="/products" className="btn btn-primary" style={{ fontSize: "0.875rem", padding: "0.75rem 1.5rem" }}>Browse All Products</Link>
            </div>
        );
    }

    const handleAdd = () => {
        addItem(product, qty);
        setAdded(true);
        setTimeout(() => setAdded(false), 2500);
    };

    const discount = Math.round((1 - product.price / product.originalPrice) * 100);
    const accent = product.grade === "Premium" ? "var(--an-saffron)" : product.grade === "Standard" ? "#1F5C3A" : "var(--an-saffron)";
    const badgeBg = product.badge === "PREMIUM" ? "#E8720C" : product.badge === "STANDARD" ? "#1B5E3B" : "#C85F08";

    return (
        <>
            <div style={{ paddingTop: "var(--header-h)" }}>

                {/* ══ SOCIAL PROOF TICKER ══ */}
                <div style={{ background: "#1B5E3B", padding: "0.6rem 0", overflow: "hidden" }}>
                    <div style={{ display: "flex", justifyContent: "center", gap: "2.5rem", flexWrap: "wrap", padding: "0 1rem" }}>
                        {PROOF.map((p, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.45rem", color: "rgba(255,255,255,0.85)", fontSize: "0.72rem", fontWeight: 600 }}>
                                <span style={{ color: "#86EFAC" }}>{p.icon}</span>
                                {p.text}
                                {i < PROOF.length - 1 && <span style={{ color: "rgba(255,255,255,0.2)", marginLeft: "1.25rem" }}>·</span>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ══ BREADCRUMB ══ */}
                <div className="container" style={{ padding: "0.875rem 1.125rem" }}>
                    <Link href="/products" style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", color: "var(--an-muted)", fontSize: "0.78rem", textDecoration: "none", fontWeight: 600 }}>
                        <ArrowLeft size={13} /> All Products
                    </Link>
                </div>

                {/* ══ MAIN 2-COLUMN LAYOUT ══ */}
                <section className="container pdp-main-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem", paddingBottom: "3rem" }}>

                    {/* LEFT COL — Gallery */}
                    <div>
                        {/* Main image */}
                        <div style={{ borderRadius: "24px", overflow: "hidden", aspectRatio: "4/3", position: "relative", background: "var(--an-warm)", marginBottom: "0.875rem" }}>
                            <AnimatePresence mode="wait">
                                <motion.div key={mainImg} initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                                    style={{ position: "absolute", inset: 0 }}>
                                    <Image
                                        src={product.galleryImages?.[mainImg] || product.image}
                                        alt={`${product.name} by Aam Native`}
                                        fill className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 55vw"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>
                            {/* Badge */}
                            <span style={{ position: "absolute", top: "1rem", left: "1rem", background: badgeBg, color: "white", fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.14em", padding: "0.3rem 0.9rem", borderRadius: "100px", textTransform: "uppercase", zIndex: 10 }}>
                                {product.badge}
                            </span>
                            {/* Discount badge */}
                            <span style={{ position: "absolute", top: "1rem", right: "1rem", background: "#DCFCE7", color: "#15803D", fontSize: "0.7rem", fontWeight: 800, padding: "0.3rem 0.75rem", borderRadius: "100px", zIndex: 10 }}>
                                Save {discount}%
                            </span>
                        </div>
                        {/* Thumbnails */}
                        <div style={{ display: "flex", gap: "0.625rem", overflowX: "auto", paddingBottom: "0.25rem" }}>
                            {(product.galleryImages || [product.image]).slice(0, 4).map((img, i) => (
                                <button key={i} onClick={() => setMainImg(i)}
                                    style={{ width: "76px", height: "76px", flexShrink: 0, borderRadius: "12px", overflow: "hidden", border: mainImg === i ? "2.5px solid var(--an-saffron)" : "2px solid transparent", padding: 0, cursor: "pointer", position: "relative", background: "var(--an-warm)", transition: "border-color 0.2s" }}>
                                    <Image src={img} alt={`View ${i + 1}`} fill className="object-cover" sizes="76px" />
                                </button>
                            ))}
                        </div>

                        {/* ── Photo trust caption ── */}
                        <p style={{ fontSize: "0.68rem", color: "var(--an-muted)", marginTop: "0.75rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                            <CheckCircle2 size={12} style={{ color: "#16A34A", flexShrink: 0 }} />
                            Real photos from our Rathnagiri orchard. No stock images.
                        </p>
                    </div>

                    {/* RIGHT COL — Product info + CTA */}
                    <div>
                        {/* Grade eyebrow */}
                        <p style={{ fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: accent, marginBottom: "0.4rem" }}>
                            {product.grade} Grade · GI Certified Alphonso
                        </p>
                        {/* Name */}
                        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.6rem, 5vw, 2.25rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "0.75rem", color: "var(--an-text)" }}>
                            {product.name}
                        </h1>

                        {/* Star rating + reviews — clickable */}
                        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
                            <div style={{ display: "flex", gap: "2px" }}>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={15} fill={i < Math.round(product.rating) ? "#FBBF24" : "transparent"} color={i < Math.round(product.rating) ? "#FBBF24" : "#D1D5DB"} />
                                ))}
                            </div>
                            <span style={{ fontWeight: 800, fontSize: "0.9rem" }}>{product.rating}</span>
                            <a href="#reviews" style={{ color: "var(--an-muted)", fontSize: "0.8rem", textDecoration: "underline" }}>
                                ({product.reviewCount} reviews)
                            </a>
                            <span style={{ fontSize: "0.72rem", fontWeight: 700, background: "#EFF6FF", color: "#1D4ED8", borderRadius: "100px", padding: "0.2rem 0.65rem" }}>
                                ✓ Verified Purchases
                            </span>
                        </div>

                        {/* ★ MAIN CTA BLOCK ★ */}
                        <AddToCartBlock product={product} accent={accent} qty={qty} setQty={setQty} added={added} onAdd={handleAdd} />

                        {/* GI Certification Trust Block */}
                        <div style={{ marginTop: "1.5rem", padding: "1.25rem", borderRadius: "20px", background: "#FDFCF2", border: "1px solid #F2E9C4", display: "flex", gap: "1rem", alignItems: "center" }}>
                            <div style={{ width: "50px", height: "50px", flexShrink: 0, borderRadius: "50%", background: "#DEB606", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                                <Award size={28} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: "0.85rem", fontWeight: 800, color: "#854D0E", marginBottom: "0.15rem" }}>Authentic GI-Tagged Produce</h4>
                                <p style={{ fontSize: "0.75rem", color: "#A16207", lineHeight: 1.4 }}>Certified Rathnagiri Alphonso. Verification number: GI-PN-1309/24. 100% traceability to farm.</p>
                            </div>
                        </div>

                        {/* Tagline desc */}
                        <p style={{ marginTop: "1.5rem", fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--an-muted)" }}>
                            {product.tagline}. {product.description}
                        </p>
                    </div>
                </section>

                {/* ══ DESCRIPTION + WHY CHOOSE ══ */}
                <section style={{ background: "var(--an-warm)", padding: "3rem 0" }}>
                    <div className="container">
                        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem" }}>
                            {/* Why Choose cards */}
                            <div>
                                <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.35rem", fontWeight: 700, marginBottom: "1.25rem" }}>
                                    Why Choose This Box
                                </h2>
                                <div className="pdp-why-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.875rem" }}>
                                    {product.whyChoose.map(w => (
                                        <div key={w.title} style={{ background: "white", borderRadius: "16px", padding: "1.125rem", border: "1px solid var(--an-border)" }}>
                                            <span style={{ fontSize: "1.5rem", display: "block", marginBottom: "0.5rem" }}>{w.icon}</span>
                                            <p style={{ fontWeight: 800, fontSize: "0.8125rem", marginBottom: "0.35rem" }}>{w.title}</p>
                                            <p style={{ fontSize: "0.75rem", color: "var(--an-muted)", lineHeight: 1.55 }}>{w.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Box includes */}
                            <div>
                                <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.35rem", fontWeight: 700, marginBottom: "1.25rem" }}>
                                    What's in the Box
                                </h2>
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                    {product.features.map(f => (
                                        <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "0.75rem 1rem", borderRadius: "12px", background: "white", border: "1px solid var(--an-border)" }}>
                                            <CheckCircle2 size={16} style={{ color: "#16A34A", flexShrink: 0, marginTop: "1px" }} />
                                            <span style={{ fontSize: "0.8125rem", lineHeight: 1.5, fontWeight: 500 }}>{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ★ REPEAT CTA after description ★ */}
                        <div style={{ marginTop: "2.5rem", background: "linear-gradient(135deg, #1B5E3B 0%, #2A7A4F 100%)", borderRadius: "20px", padding: "1.75rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center", textAlign: "center" }}>
                            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase" }}>Limited Season · Ships in 24 hours</p>
                            <p style={{ fontFamily: "'Fraunces', serif", fontSize: "1.5rem", fontWeight: 700, color: "white", fontStyle: "italic", lineHeight: 1.3 }}>
                                Ready to taste the real Alphonso?
                            </p>
                            <button onClick={handleAdd}
                                style={{
                                    padding: "1rem 2.5rem", borderRadius: "14px", border: "none",
                                    background: "linear-gradient(135deg, #E8720C, #FF9A3C)",
                                    color: "white", fontWeight: 800, fontSize: "1rem", cursor: "pointer",
                                    display: "flex", alignItems: "center", gap: "0.5rem",
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    boxShadow: "0 6px 24px rgba(232,114,12,0.45)",
                                }}>
                                <ShoppingCart size={18} />
                                {added ? "✓ Added!" : `Add to Cart · ₹${(product.price * qty).toLocaleString("en-IN")}`}
                            </button>
                            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem" }}>Free cancellation · 100% freshness guarantee</p>
                        </div>
                    </div>
                </section>

                {/* ══ NUTRITION — VISUAL CARDS ON DARK GREEN ══ */}
                <section style={{ background: "#0C1A10", padding: "3rem 0" }}>
                    <div className="container">
                        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "1.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
                            <div>
                                <p style={{ color: "#86EFAC", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                                    Natural Goodness
                                </p>
                                <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.5rem", fontWeight: 700, color: "white", lineHeight: 1.2 }}>
                                    Nutrition <span style={{ color: "#FF9A3C" }}>per 100g</span>
                                </h2>
                            </div>
                            <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "rgba(255,255,255,0.35)", fontStyle: "italic" }}>Naturally sweetened. No sugar added.</span>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem" }}>
                            {product.nutrition.map(n => (
                                <motion.div key={n.label}
                                    whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}
                                    style={{
                                        padding: "1.25rem 1rem", borderRadius: "16px",
                                        background: "rgba(255,255,255,0.05)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        textAlign: "center", cursor: "default"
                                    }}>
                                    <p style={{ fontFamily: "'Fraunces', serif", fontSize: "1.4rem", fontWeight: 800, color: "#FF9A3C", lineHeight: 1 }}>{n.value.split(" ")[0]}</p>
                                    <p style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.4)", marginTop: "0.35rem", textTransform: "uppercase", letterSpacing: "0.08em", lineHeight: 1.4 }}>
                                        {n.label}{n.value.includes(" ") ? `\n${n.value.split(" ").slice(1).join(" ")}` : ""}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══ REVIEWS ══ */}
                <section id="reviews" style={{ background: "var(--an-cream)", padding: "3rem 0" }}>
                    <div className="container">
                        {/* Header with aggregate */}
                        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.35rem", fontWeight: 700 }}>Customer Reviews</h2>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "white", borderRadius: "100px", padding: "0.4rem 1rem", boxShadow: "var(--shadow-xs)" }}>
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#FBBF24" color="#FBBF24" />)}
                                <span style={{ fontWeight: 800, fontSize: "1rem" }}>{product.rating}</span>
                                <span style={{ color: "var(--an-muted)", fontSize: "0.8rem" }}>({product.reviewCount})</span>
                            </div>
                        </div>
                        <p style={{ fontSize: "0.78rem", color: "var(--an-muted)", marginBottom: "1.75rem" }}>
                            All reviews are from verified purchasers. No paid placements.
                        </p>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
                            {product.reviews.slice(0, 4).map((r) => (
                                <motion.div key={r.name}
                                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ duration: 0.5 }}
                                    style={{ background: "white", borderRadius: "18px", padding: "1.25rem", border: "1px solid var(--an-border)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                                    <div style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem", alignItems: "flex-start" }}>
                                        <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "linear-gradient(135deg, #E8720C, #FF9A3C)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: "1rem", flexShrink: 0 }}>
                                            {r.name.charAt(0)}
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.25rem" }}>
                                                <p style={{ fontWeight: 800, fontSize: "0.875rem" }}>{r.name}</p>
                                                <span style={{ fontSize: "0.68rem", color: "var(--an-muted)" }}>{r.date}</span>
                                            </div>
                                            <p style={{ fontSize: "0.72rem", color: "var(--an-muted)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                                                <CheckCircle2 size={11} style={{ color: "#16A34A" }} /> Verified · {r.location}
                                            </p>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", gap: "2px", marginBottom: "0.625rem" }}>
                                        {[...Array(r.rating)].map((_, i) => <Star key={i} size={13} fill="#FBBF24" color="#FBBF24" />)}
                                    </div>
                                    <p style={{ fontSize: "0.8375rem", lineHeight: 1.65, color: "var(--an-text)" }}>"{r.comment}"</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* ★ REPEAT CTA after reviews ★ */}
                        <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.875rem", padding: "1.75rem", background: "white", borderRadius: "20px", border: "1px solid var(--an-border)", textAlign: "center" }}>
                            <div style={{ display: "flex", gap: "2px" }}>
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FBBF24" color="#FBBF24" />)}
                            </div>
                            <p style={{ fontFamily: "'Fraunces', serif", fontSize: "1.125rem", fontWeight: 600, fontStyle: "italic" }}>
                                "Join {product.reviewCount}+ happy customers this season"
                            </p>
                            <button onClick={handleAdd}
                                style={{
                                    padding: "0.95rem 2.5rem", borderRadius: "14px", border: "none",
                                    background: added ? "#16A34A" : "linear-gradient(135deg, #E8720C, #FF9A3C)",
                                    color: "white", fontWeight: 800, fontSize: "0.9375rem", cursor: "pointer",
                                    display: "flex", alignItems: "center", gap: "0.5rem",
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    boxShadow: "0 4px 18px rgba(232,114,12,0.35)",
                                }}>
                                <ShoppingCart size={16} />
                                {added ? "✓ Added to Cart!" : `Order Now · ₹${product.price.toLocaleString("en-IN")}`}
                            </button>
                            <p style={{ fontSize: "0.7rem", color: "var(--an-muted)" }}>🔒 Secure checkout · 24hr freshness guarantee</p>
                        </div>
                    </div>
                </section>

                {/* ══ WAYS TO ENJOY — CINEMATIC DESSERT SHOWCASE ══ */}
                <section style={{ background: "var(--ink, #0C1510)", padding: "4.5rem 0 5rem", position: "relative", overflow: "hidden" }}>
                    {/* Ambient golden glow */}
                    <div style={{
                        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                        width: "900px", height: "500px",
                        background: "radial-gradient(ellipse, rgba(224,123,22,0.06) 0%, transparent 70%)",
                        borderRadius: "50%", pointerEvents: "none",
                    }} />

                    <div className="container" style={{ position: "relative", zIndex: 1 }}>
                        {/* Section header */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{ textAlign: "center", marginBottom: "3rem" }}
                        >
                            <p style={{
                                color: "var(--saffron-l, #F59A3A)", fontSize: "0.6rem", fontWeight: 800,
                                letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.75rem",
                            }}>
                                🥭 Made with our Alphonso
                            </p>
                            <h2 style={{
                                fontFamily: "'Fraunces', serif",
                                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                                fontWeight: 800, color: "white", lineHeight: 1.15,
                            }}>
                                Ways to <span style={{ color: "var(--saffron, #E07B16)", fontStyle: "italic" }}>Enjoy</span>
                            </h2>
                            <p style={{
                                color: "rgba(255,255,255,0.4)", fontSize: "0.9rem",
                                marginTop: "0.75rem", maxWidth: "440px", marginInline: "auto", lineHeight: 1.65,
                            }}>
                                From the classic Konkani aamras to decadent desserts, our Alphonso transforms into pure magic.
                            </p>
                        </motion.div>

                        {/* Dessert cards */}
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
                            {(product.recipes || []).map((r, i) => {
                                const correctImg = RECIPE_IMGS[r.name] || RECIPE_IMGS["Alphonso Mango Aamras"];
                                const emoji = r.name.includes("Aamras") ? "🍯" : r.name.includes("Kulfi") ? "🍧" : "🎂";
                                return (
                                    <motion.div
                                        key={r.name}
                                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.12, duration: 0.55, ease: "easeOut" }}
                                        whileHover={{ y: -8, scale: 1.02 }}
                                        style={{
                                            borderRadius: "24px", overflow: "hidden",
                                            background: "rgba(255,255,255,0.03)",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                            cursor: "default",
                                            transition: "border-color 0.3s, box-shadow 0.3s",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = "rgba(224,123,22,0.3)";
                                            e.currentTarget.style.boxShadow = "0 20px 60px rgba(224,123,22,0.15), 0 0 80px rgba(224,123,22,0.05)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                                            e.currentTarget.style.boxShadow = "none";
                                        }}
                                    >
                                        {/* Image with cinematic overlay */}
                                        <div style={{ height: "240px", position: "relative", overflow: "hidden" }}>
                                            <Image
                                                src={correctImg}
                                                alt={r.name}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                style={{ transition: "transform 0.5s ease" }}
                                                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.08)"; }}
                                                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                                            />
                                            {/* Bottom gradient for text readability */}
                                            <div style={{
                                                position: "absolute", bottom: 0, left: 0, right: 0, height: "50%",
                                                background: "linear-gradient(to top, rgba(12,21,16,0.8), transparent)",
                                            }} />
                                            {/* Emoji badge */}
                                            <div style={{
                                                position: "absolute", top: "1rem", right: "1rem",
                                                width: "44px", height: "44px", borderRadius: "14px",
                                                background: "rgba(255,255,255,0.12)", backdropFilter: "blur(12px)",
                                                display: "flex", alignItems: "center", justifyContent: "center",
                                                fontSize: "1.35rem",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                            }}>
                                                {emoji}
                                            </div>
                                            {/* Recipe label */}
                                            <div style={{
                                                position: "absolute", bottom: "1rem", left: "1rem",
                                                background: "linear-gradient(135deg, var(--saffron, #E07B16), var(--saffron-l, #F59A3A))",
                                                padding: "0.35rem 0.9rem", borderRadius: "100px",
                                                fontSize: "0.6rem", fontWeight: 800, color: "white",
                                                letterSpacing: "0.15em", textTransform: "uppercase",
                                            }}>
                                                Dessert Recipe
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div style={{ padding: "1.75rem 1.5rem 2rem" }}>
                                            <h3 style={{
                                                fontFamily: "'Fraunces', serif", fontWeight: 800,
                                                fontSize: "1.25rem", color: "white", marginBottom: "0.75rem",
                                            }}>
                                                {r.name}
                                            </h3>
                                            <p style={{
                                                fontSize: "0.85rem", color: "rgba(255,255,255,0.5)",
                                                lineHeight: 1.75, marginBottom: "1rem",
                                            }}>
                                                {r.desc}
                                            </p>
                                            <div style={{
                                                display: "flex", alignItems: "center", gap: "0.375rem",
                                                color: "var(--saffron, #E07B16)", fontSize: "0.72rem",
                                                fontWeight: 700, letterSpacing: "0.05em",
                                            }}>
                                                <span style={{
                                                    width: "24px", height: "1.5px", borderRadius: "1px",
                                                    background: "linear-gradient(90deg, var(--saffron, #E07B16), transparent)",
                                                }} />
                                                Best with our {product.grade} grade
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Bottom appetizer tagline */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            style={{
                                textAlign: "center", marginTop: "2.5rem",
                                color: "rgba(255,255,255,0.25)", fontSize: "0.75rem",
                                fontStyle: "italic",
                            }}
                        >
                            Each dessert is made even more divine with authentic Rathnagiri Alphonso mangos.
                        </motion.p>
                    </div>
                </section>

                <ProduceGallery />


                {/* ══ FAQ ══ */}
                <section style={{ background: "white", padding: "3rem 0" }}>
                    <div className="container">
                        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.35rem", fontWeight: 700, marginBottom: "1.25rem" }}>Frequently Asked</h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                            {(product.faqs || []).map((faq, i) => (
                                <div key={i} style={{ borderRadius: "14px", border: "1px solid var(--an-border)", overflow: "hidden" }}>
                                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        style={{ width: "100%", padding: "1.125rem", display: "flex", justifyContent: "space-between", alignItems: "center", background: openFaq === i ? "#FFFBF5" : "white", border: "none", cursor: "pointer", textAlign: "left", gap: "0.5rem" }}>
                                        <span style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--an-text)" }}>{faq.q}</span>
                                        {openFaq === i ? <ChevronUp size={16} color="var(--an-saffron)" /> : <ChevronDown size={16} color="var(--an-muted)" />}
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === i && (
                                            <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} style={{ overflow: "hidden" }}>
                                                <p style={{ padding: "0 1.125rem 1rem", fontSize: "0.8375rem", color: "var(--an-muted)", lineHeight: 1.65 }}>{faq.a}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══ RELATED — HORIZONTAL PRODUCT CARDS ══ */}
                <section style={{ background: "#F5F0E8", padding: "2.5rem 0" }}>
                    <div className="container">
                        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.25rem" }}>Other Grades Available</h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                            {related.map(p => {
                                const relAccent = p.grade === "Premium" ? "var(--an-saffron)" : p.grade === "Standard" ? "#1F5C3A" : "var(--an-saffron)";
                                return (
                                    <Link key={p.id} href={`/products/${p.slug}`} style={{ textDecoration: "none" }}>
                                        <div style={{ background: "white", borderRadius: "18px", padding: "1rem", display: "flex", gap: "1rem", alignItems: "center", border: "1px solid var(--an-border)", transition: "box-shadow 0.2s" }}>
                                            <div style={{ width: "80px", height: "80px", borderRadius: "14px", overflow: "hidden", position: "relative", flexShrink: 0, background: "var(--an-warm)" }}>
                                                <Image src={p.image} alt={p.name} fill className="object-cover" sizes="80px" />
                                            </div>
                                            <div style={{ flex: 1, minWidth: 0 }}>
                                                <p style={{ fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: relAccent, marginBottom: "0.2rem" }}>{p.grade} Grade</p>
                                                <p style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.25rem", color: "var(--an-text)" }}>{p.name}</p>
                                                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                                    <span style={{ fontWeight: 800, color: relAccent, fontSize: "1.05rem" }}>₹{p.price.toLocaleString("en-IN")}</span>
                                                    <span style={{ fontSize: "0.72rem", color: "var(--an-muted)", textDecoration: "line-through" }}>₹{p.originalPrice.toLocaleString("en-IN")}</span>
                                                </div>
                                            </div>
                                            <div style={{ flexShrink: 0, background: "linear-gradient(135deg, #E8720C, #FF9A3C)", color: "white", borderRadius: "10px", padding: "0.6rem 1rem", fontSize: "0.75rem", fontWeight: 800 }}>
                                                View →
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>

            {/* ══ STICKY MOBILE CTA — always visible ══ */}
            <div className="md:hidden" style={{
                position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 50,
                background: "white", borderTop: "1px solid var(--an-border)",
                padding: "0.875rem 1.125rem",
                boxShadow: "0 -8px 32px rgba(0,0,0,0.12)",
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", background: "var(--an-mist)", borderRadius: "10px", padding: "0.5rem 0.625rem", flexShrink: 0 }}>
                        <button onClick={() => setQty(q => Math.max(1, q - 1))}
                            style={{ width: "30px", height: "30px", borderRadius: "8px", border: "1.5px solid var(--an-border)", background: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Minus size={13} />
                        </button>
                        <span style={{ fontWeight: 800, fontSize: "0.9rem", minWidth: "20px", textAlign: "center" }}>{qty}</span>
                        <button onClick={() => setQty(q => q + 1)}
                            style={{ width: "30px", height: "30px", borderRadius: "8px", border: "1.5px solid var(--an-border)", background: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Plus size={13} />
                        </button>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.96 }}
                        className="btn btn-primary" onClick={handleAdd}
                        style={{
                            flex: 1, borderRadius: "14px", padding: "1rem",
                            background: added ? "#16A34A" : `linear-gradient(135deg, ${accent}, #FF9A3C)`,
                            justifyContent: "center", fontSize: "0.9375rem", fontWeight: 800,
                            boxShadow: "0 8px 25px rgba(232,114,12,0.35)",
                            border: "none", color: "white", display: "flex", alignItems: "center", gap: "0.6rem",
                            cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}>
                        <ShoppingCart size={18} />
                        {added ? "✓ Added!" : `₹${(product.price * qty).toLocaleString("en-IN")} · Add Now`}
                    </motion.button>
                </div>
            </div>
        </>
    );
}
