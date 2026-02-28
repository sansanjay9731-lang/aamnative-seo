import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Leaf, Sun } from "lucide-react";
import { varieties } from "@/lib/seo-data";

const BASE_URL = "https://aamnative.com";

export function generateStaticParams() {
    return Object.keys(varieties).map((variety) => ({ variety }));
}

export async function generateMetadata(
    { params }: { params: Promise<{ variety: string }> }
): Promise<Metadata> {
    const { variety } = await params;
    const data = varieties[variety as keyof typeof varieties];

    if (!data) return {};

    return {
        title: `Buy ${data.name} Mangoes Online | Farm Direct | Aam Native`,
        description: `Order fresh ${data.name} mangoes online. Experience authentic sweetness (${data.brixRange} Brix). Direct from farm, zero carbide. Picked during peak ${data.seasonWindow}.`,
        alternates: { canonical: `${BASE_URL}/mango/${data.slug}` },
    };
}

export default async function VarietyPage(
    { params }: { params: Promise<{ variety: string }> }
) {
    const { variety } = await params;

    // Explicitly handle "alphonso" mapping to the root pillar page if someone navigates here directly
    if (variety === "alphonso") {
        return (
            <div style={{ padding: "8rem 2rem", textAlign: "center", minHeight: "100vh" }}>
                <h1>Redirecting to Alphonso...</h1>
                <meta httpEquiv="refresh" content={`0;url=/mango/alphonso`} />
            </div>
        )
    }

    const data = varieties[variety as keyof typeof varieties];
    if (!data) notFound();

    return (
        <div style={{ paddingTop: "calc(var(--header-h) + 2rem)", paddingBottom: "6rem", background: "var(--an-cream)", minHeight: "100vh" }}>
            <div className="container" style={{ maxWidth: "800px" }}>
                <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", color: "var(--an-muted)", marginBottom: "2rem" }}>
                    <ArrowLeft size={14} /> Back to Home
                </Link>

                <div style={{ background: "white", borderRadius: "24px", padding: "3rem 2.5rem", border: "1px solid var(--an-border)", boxShadow: "0 12px 40px rgba(0,0,0,0.03)" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--an-saffron)", textTransform: "uppercase", letterSpacing: "0.15em" }}>Premium Variety</span>
                    <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, margin: "0.5rem 0 1.5rem" }}>
                        {data.name}
                    </h1>
                    <p style={{ fontSize: "1.1rem", color: "var(--an-muted)", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                        {data.description}
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "3rem" }}>
                        <div style={{ background: "#FEF3C7", padding: "1.25rem", borderRadius: "16px", border: "1px solid #FDE68A" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                                <Sun size={18} color="#D97706" />
                                <strong style={{ color: "#B45309", fontSize: "0.85rem", textTransform: "uppercase" }}>Season</strong>
                            </div>
                            <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#92400E" }}>{data.seasonWindow}</p>
                        </div>
                        <div style={{ background: "#F0FDF4", padding: "1.25rem", borderRadius: "16px", border: "1px solid #DCFCE7" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                                <Leaf size={18} color="#16A34A" />
                                <strong style={{ color: "#15803D", fontSize: "0.85rem", textTransform: "uppercase" }}>Sweetness</strong>
                            </div>
                            <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#166534" }}>{data.brixRange} Brix</p>
                        </div>
                    </div>

                    <div style={{ background: "var(--an-mist)", border: "1px solid var(--an-border)", borderRadius: "16px", padding: "1.5rem", marginBottom: "3rem" }}>
                        <h2 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "1rem" }}>Nutritional Profile (per 100g)</h2>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            <li style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                                <span style={{ color: "var(--an-muted)" }}>Calories</span>
                                <strong>{data.nutritionalData.calories}</strong>
                            </li>
                            <li style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                                <span style={{ color: "var(--an-muted)" }}>Vitamin C</span>
                                <strong>{data.nutritionalData.vitaminC}</strong>
                            </li>
                            <li style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 0" }}>
                                <span style={{ color: "var(--an-muted)" }}>Dietary Fiber</span>
                                <strong>{data.nutritionalData.dietaryFiber}</strong>
                            </li>
                        </ul>
                    </div>

                    <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.25rem" }}>The Aam Native Guarantee</h2>
                    <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
                        {[
                            { title: "Naturally Ripened", desc: "No calcium carbide. Period." },
                            { title: "Farm to Door", desc: "We bypass mandis to ensure maximum freshness." },
                        ].map((item, i) => (
                            <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                                <CheckCircle2 size={20} style={{ color: "var(--an-saffron)", flexShrink: 0, marginTop: "0.1rem" }} />
                                <div>
                                    <strong style={{ display: "block", fontSize: "0.95rem", marginBottom: "0.15rem" }}>{item.title}</strong>
                                    <span style={{ color: "var(--an-muted)", fontSize: "0.85rem", lineHeight: 1.4 }}>{item.desc}</span>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div style={{ textAlign: "center", marginTop: "2rem" }}>
                        <Link href="/products" style={{ display: "inline-flex", background: "var(--an-warm)", color: "var(--an-text)", padding: "1rem 2rem", borderRadius: "12px", textDecoration: "none", fontWeight: 800, fontSize: "1.05rem", border: "2px solid var(--an-border)", transition: "all 0.2s" }} className="hover:border-saffron">
                            View Available {data.name.split(" ")[0]} Boxes
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
