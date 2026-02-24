"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";
import { products } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import type { Variants } from "framer-motion";

const reveal: Variants = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const grades = ["All", "Premium", "Standard", "Medium"] as const;

export default function ProductsPage() {
    const [filter, setFilter] = useState<typeof grades[number]>("All");
    const { addItem } = useCart();
    const [added, setAdded] = useState<string | null>(null);

    const filtered = products.filter(p => filter === "All" ? true : p.grade === filter);

    const handleAdd = (product: typeof products[0]) => {
        addItem(product);
        setAdded(product.id);
        setTimeout(() => setAdded(null), 2000);
    };

    return (
        <div>
            {/* ── HERO BANNER ── */}
            <section style={{ position: "relative", height: "340px", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0 }}>
                    <Image
                        src="/images/tree-closeup-green.jpg"
                        alt="Rathnagiri Alphonso Mango close-up on tree, Aam Native"
                        fill className="object-cover" priority sizes="100vw"
                        style={{ objectPosition: "center 60%" }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "var(--g-cinematic)" }} />
                </div>
                <div className="container" style={{ position: "relative", zIndex: 10, paddingBottom: "3rem" }}>
                    <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
                        <motion.p variants={reveal}
                            style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                            Season 2026 · Limited Harvest
                        </motion.p>
                        <motion.h1 variants={reveal} className="serif"
                            style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 700, fontStyle: "italic", color: "white", lineHeight: 1.1 }}>
                            Alphonso,<br />
                            <span style={{ color: "var(--saffron-l)" }}>Three Ways.</span>
                        </motion.h1>
                    </motion.div>
                </div>
            </section>

            {/* ── FILTER + GRID ── */}
            <section className="section" style={{ background: "var(--cream)" }}>
                <div className="container">
                    {/* Grade filter — elegant underline tabs, not chips */}
                    <div style={{ display: "flex", gap: "0", marginBottom: "3.5rem", borderBottom: "1.5px solid var(--border)" }}>
                        {grades.map(g => (
                            <button key={g} onClick={() => setFilter(g)}
                                style={{
                                    padding: "0.75rem 1.375rem",
                                    background: "none", border: "none", cursor: "pointer",
                                    fontSize: "0.875rem", fontWeight: filter === g ? 800 : 500,
                                    color: filter === g ? "var(--text)" : "var(--muted)",
                                    borderBottom: filter === g ? "2.5px solid var(--saffron)" : "2.5px solid transparent",
                                    marginBottom: "-1.5px", transition: "all 0.2s",
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                }}>
                                {g}
                            </button>
                        ))}
                    </div>

                    {/* Product grid */}
                    <div className="product-grid">
                        {filtered.map((product, i) => {
                            const discount = Math.round((1 - product.price / product.originalPrice) * 100);
                            const accentColor = product.grade === "Premium" ? "var(--saffron)" : "var(--grove)";

                            return (
                                <motion.div key={product.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="card-clean"
                                >
                                    {/* Photo */}
                                    <div style={{ position: "relative", height: "300px", background: "var(--parchment)", overflow: "hidden" }}>
                                        <Image
                                            src={product.image}
                                            alt={`${product.name} · ${product.grade} Alphonso · Aam Native`}
                                            fill className="object-cover"
                                            style={{ transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
                                            sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            onMouseOver={e => (e.currentTarget.style.transform = "scale(1.06)")}
                                            onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
                                        />
                                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,21,16,0.45), transparent 60%)" }} />

                                        {/* Grade pill on photo */}
                                        <div style={{ position: "absolute", top: "1rem", left: "1rem" }}>
                                            <span style={{ background: "rgba(12,21,16,0.72)", backdropFilter: "blur(6px)", color: "white", fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.18em", padding: "0.3rem 0.85rem", borderRadius: "100px", textTransform: "uppercase" }}>
                                                {product.grade}
                                            </span>
                                        </div>

                                        {/* Rating */}
                                        <div style={{ position: "absolute", bottom: "1rem", right: "1rem", background: "rgba(255,255,255,0.95)", borderRadius: "100px", padding: "0.25rem 0.7rem", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                                            <Star size={11} fill="#FBBF24" color="#FBBF24" />
                                            <span style={{ fontSize: "0.74rem", fontWeight: 800 }}>{product.rating}</span>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div style={{ padding: "1.5rem" }}>
                                        <p style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.35rem" }}>
                                            {product.pieces} pcs · {product.boxWeight}
                                        </p>
                                        <h2 className="serif" style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.375rem", lineHeight: 1.25 }}>
                                            {product.name}
                                        </h2>
                                        <p className="body-sm" style={{ marginBottom: "1.25rem" }}>{product.tagline}</p>

                                        {/* Price */}
                                        <div style={{ display: "flex", alignItems: "baseline", gap: "0.625rem", marginBottom: "1.375rem" }}>
                                            <span className="serif" style={{ fontSize: "1.875rem", fontWeight: 800, color: accentColor, lineHeight: 1 }}>
                                                ₹{product.price.toLocaleString("en-IN")}
                                            </span>
                                            <span style={{ fontSize: "0.875rem", textDecoration: "line-through", color: "var(--muted)", opacity: 0.6 }}>
                                                ₹{product.originalPrice.toLocaleString("en-IN")}
                                            </span>
                                            <span style={{ fontSize: "0.65rem", fontWeight: 800, color: "#15803D", background: "#DCFCE7", borderRadius: "6px", padding: "0.15rem 0.5rem" }}>
                                                −{discount}%
                                            </span>
                                        </div>

                                        {/* Actions */}
                                        <div style={{ display: "flex", gap: "0.625rem" }}>
                                            <button onClick={() => handleAdd(product)}
                                                style={{
                                                    flex: 1, padding: "0.9rem", borderRadius: "12px", border: "none",
                                                    background: added === product.id ? "#1F5C3A" : "var(--g-saffron)",
                                                    color: "white", fontWeight: 800, fontSize: "0.82rem", cursor: "pointer",
                                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                                    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                                                    transform: added === product.id ? "scale(0.98)" : "scale(1)",
                                                }}>
                                                {added === product.id ? "✓ In Cart" : "Add to Cart"}
                                            </button>
                                            <Link href={`/products/${product.slug}`}
                                                style={{
                                                    padding: "0.9rem 1.1rem", borderRadius: "12px",
                                                    border: "1.5px solid var(--border)", color: "var(--text)",
                                                    fontWeight: 700, fontSize: "0.8rem", textDecoration: "none",
                                                    display: "flex", alignItems: "center", gap: "0.2rem",
                                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                                }}>
                                                <ArrowUpRight size={14} />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
