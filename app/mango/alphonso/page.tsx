import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck, Truck } from "lucide-react";
import { varieties } from "@/lib/seo-data";

const data = varieties.alphonso;
const BASE_URL = "https://aamnative.com";

export const metadata: Metadata = {
    title: "Ratnagiri Alphonso Mango (Hapus) | GI-Certified Farm Direct",
    description: "Discover the King of Mangos. Buy GI-Certified Ratnagiri Alphonso (Hapus) mangos online. Naturally ripened, zero carbide, farm-fresh delivery across India.",
    alternates: { canonical: `${BASE_URL}/mango/alphonso` },
};

export default function AlphonsoPillarPage() {
    return (
        <div style={{ paddingTop: "calc(var(--header-h) + 2rem)", paddingBottom: "6rem", background: "var(--an-cream)", minHeight: "100vh" }}>
            <div className="container" style={{ maxWidth: "800px" }}>
                <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", color: "var(--an-muted)", marginBottom: "2rem" }}>
                    <ArrowLeft size={14} /> Back to Home
                </Link>

                <div style={{ background: "white", borderRadius: "24px", padding: "3rem 2.5rem", border: "1px solid var(--an-border)", boxShadow: "0 12px 40px rgba(0,0,0,0.03)" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--an-saffron)", textTransform: "uppercase", letterSpacing: "0.15em" }}>The Supreme Variety</span>
                    <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, margin: "0.5rem 0 1.5rem" }}>
                        {data.name}
                    </h1>
                    <p style={{ fontSize: "1.1rem", color: "var(--an-muted)", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                        {data.description} Our mangos are exclusively grown on mature trees in the laterite soils of the Konkan coast, ensuring unparalleled sweetness and aroma.
                    </p>

                    <div style={{ background: "#FDFCF2", border: "1px solid #F2E9C4", borderRadius: "16px", padding: "1.5rem", marginBottom: "3rem" }}>
                        <h2 style={{ fontSize: "1rem", fontWeight: 800, color: "#854D0E", marginBottom: "1rem" }}>Variety Specifications</h2>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                            <div>
                                <p style={{ fontSize: "0.7rem", color: "#A16207", textTransform: "uppercase", fontWeight: 700 }}>Peak Season</p>
                                <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "#713F12" }}>{data.seasonWindow}</p>
                            </div>
                            <div>
                                <p style={{ fontSize: "0.7rem", color: "#A16207", textTransform: "uppercase", fontWeight: 700 }}>Sweetness (Brix)</p>
                                <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "#713F12" }}>{data.brixRange}</p>
                            </div>
                            <div>
                                <p style={{ fontSize: "0.7rem", color: "#A16207", textTransform: "uppercase", fontWeight: 700 }}>Avg Market Price</p>
                                <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "#713F12" }}>{data.pricingRange}</p>
                            </div>
                        </div>
                    </div>

                    <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.75rem", fontWeight: 700, marginBottom: "1.25rem" }}>Why Choose Ratnagiri Hapus?</h2>
                    <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
                        {[
                            { title: "Unmistakable Aroma", desc: "A single naturally ripened Ratnagiri Alphonso can fill a room with its sweet, floral scent." },
                            { title: "Buttery Texture", desc: "Zero fibrousness. The pulp is smooth, dense, and melts in the mouth." },
                            { title: "GI Tag Protection", desc: "True Ratnagiri Alphonso is geographically protected, meaning imitators from other states cannot legally use the name." }
                        ].map((item, i) => (
                            <li key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                                <CheckCircle2 size={24} style={{ color: "var(--an-saffron)", flexShrink: 0, marginTop: "0.15rem" }} />
                                <div>
                                    <strong style={{ display: "block", fontSize: "1.05rem", marginBottom: "0.25rem" }}>{item.title}</strong>
                                    <span style={{ color: "var(--an-muted)", fontSize: "0.9rem", lineHeight: 1.5 }}>{item.desc}</span>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div style={{ textAlign: "center", marginTop: "2rem" }}>
                        <Link href="/products" style={{ display: "inline-flex", background: "linear-gradient(135deg, #E8720C, #FF9A3C)", color: "white", padding: "1rem 2rem", borderRadius: "12px", textDecoration: "none", fontWeight: 800, fontSize: "1.05rem", boxShadow: "0 8px 24px rgba(232,114,12,0.3)" }}>
                            Shop Fresh Alphonso Boxes
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
