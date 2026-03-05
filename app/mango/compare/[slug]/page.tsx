import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";
import { comparisons, varieties } from "@/lib/seo-data";

const BASE_URL = "https://aamnative.com";

export function generateStaticParams() {
    return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params;
    const data = comparisons.find((c) => c.slug === slug);

    if (!data) return {};

    const v1 = varieties[data.variety1 as keyof typeof varieties];
    const v2 = varieties[data.variety2 as keyof typeof varieties];

    if (!v1 || !v2) return {};

    return {
        title: `${v1.name.split("(")[0].trim()} vs ${v2.name.split("(")[0].trim()} — Which Mango Is Better? | Aam Native`,
        description: `Detailed comparison of ${v1.name} vs ${v2.name} — taste, aroma, texture, season, and price. Find out which mango variety is right for you.`,
        alternates: { canonical: `${BASE_URL}/mango/compare/${slug}` },
    };
}

function buildSchema(v1Name: string, v2Name: string, slug: string) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: `What is the difference between ${v1Name} and ${v2Name} mangoes?`,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `${v1Name} and ${v2Name} differ in taste, aroma, texture, season, and price. Visit our detailed comparison at aamnative.com/mango/compare/${slug} to learn which is best for you.`
                }
            },
            {
                "@type": "Question",
                name: `Which is sweeter, ${v1Name} or ${v2Name}?`,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `Both are delicious mangoes with different sweetness profiles. Check our Brix score comparison for exact sweetness levels.`
                }
            }
        ]
    };
}

export default async function ComparisonPage(
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    const data = comparisons.find((c) => c.slug === slug);

    if (!data) notFound();

    const v1 = varieties[data.variety1 as keyof typeof varieties];
    const v2 = varieties[data.variety2 as keyof typeof varieties];

    if (!v1 || !v2) notFound();

    const v1Short = v1.name.split("(")[0].trim();
    const v2Short = v2.name.split("(")[0].trim();

    const rows = [
        { label: "Sweetness (Brix)", val1: v1.brixRange, val2: v2.brixRange },
        { label: "Season", val1: v1.seasonWindow, val2: v2.seasonWindow },
        { label: "Price Range", val1: v1.pricingRange, val2: v2.pricingRange },
        { label: "Calories (per 100g)", val1: v1.nutritionalData.calories, val2: v2.nutritionalData.calories },
    ];

    const diffs = [
        { label: "Taste", text: data.tasteDiff },
        { label: "Aroma", text: data.aromaDiff },
        { label: "Texture", text: data.textureDiff },
        { label: "Season", text: data.seasonDiff },
        { label: "Price", text: data.priceDiff },
    ];

    return (
        <div style={{ paddingTop: "calc(var(--header-h) + 2rem)", paddingBottom: "6rem", background: "var(--an-cream)", minHeight: "100vh" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(v1Short, v2Short, slug)) }}
            />
            <div className="container" style={{ maxWidth: "900px" }}>
                <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", color: "var(--an-muted)", marginBottom: "2rem" }}>
                    <ArrowLeft size={14} /> Back to Home
                </Link>

                <div style={{ background: "white", borderRadius: "24px", padding: "3rem 2.5rem", border: "1px solid var(--an-border)", boxShadow: "0 12px 40px rgba(0,0,0,0.03)" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--an-saffron)", textTransform: "uppercase", letterSpacing: "0.15em", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                        <Scale size={14} /> Mango Comparison
                    </span>
                    <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2, margin: "1rem 0 1.5rem" }}>
                        {v1Short} vs {v2Short}: Which Mango Should You Buy?
                    </h1>

                    {/* Side-by-side comparison table */}
                    <div style={{ overflowX: "auto", marginBottom: "3rem" }}>
                        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
                            <thead>
                                <tr>
                                    <th style={{ textAlign: "left", padding: "1rem", borderBottom: "2px solid var(--an-border)", fontWeight: 700 }}></th>
                                    <th style={{ textAlign: "center", padding: "1rem", borderBottom: "2px solid var(--an-border)", fontWeight: 800, color: "#B45309" }}>{v1Short}</th>
                                    <th style={{ textAlign: "center", padding: "1rem", borderBottom: "2px solid var(--an-border)", fontWeight: 800, color: "#15803D" }}>{v2Short}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, i) => (
                                    <tr key={i}>
                                        <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid rgba(0,0,0,0.05)", fontWeight: 600, color: "var(--an-muted)" }}>{row.label}</td>
                                        <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid rgba(0,0,0,0.05)", textAlign: "center", fontWeight: 600 }}>{row.val1}</td>
                                        <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid rgba(0,0,0,0.05)", textAlign: "center", fontWeight: 600 }}>{row.val2}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Detailed differences */}
                    <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>Detailed Comparison</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
                        {diffs.map((diff, i) => (
                            <div key={i} style={{ background: "var(--an-mist)", border: "1px solid var(--an-border)", borderRadius: "16px", padding: "1.25rem" }}>
                                <strong style={{ display: "block", fontSize: "0.9rem", textTransform: "uppercase", color: "var(--an-saffron)", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>{diff.label}</strong>
                                <p style={{ fontSize: "0.95rem", color: "var(--an-text)", lineHeight: 1.6, margin: 0 }}>{diff.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* Best for */}
                    <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.25rem" }}>Best For</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "3rem" }}>
                        <div style={{ background: "#FEF3C7", padding: "1.25rem", borderRadius: "16px", border: "1px solid #FDE68A" }}>
                            <strong style={{ display: "block", color: "#B45309", marginBottom: "0.5rem" }}>{v1Short}</strong>
                            <p style={{ fontSize: "0.9rem", color: "#92400E", margin: 0, lineHeight: 1.5 }}>{data.bestFor.variety1}</p>
                        </div>
                        <div style={{ background: "#F0FDF4", padding: "1.25rem", borderRadius: "16px", border: "1px solid #DCFCE7" }}>
                            <strong style={{ display: "block", color: "#15803D", marginBottom: "0.5rem" }}>{v2Short}</strong>
                            <p style={{ fontSize: "0.9rem", color: "#166534", margin: 0, lineHeight: 1.5 }}>{data.bestFor.variety2}</p>
                        </div>
                    </div>

                    {/* Verdict */}
                    <div style={{ background: "linear-gradient(135deg, #FFF7ED, #FEF3C7)", border: "2px solid #FDE68A", borderRadius: "16px", padding: "1.5rem", marginBottom: "2rem" }}>
                        <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#92400E", marginBottom: "0.75rem" }}>Our Verdict</h2>
                        <p style={{ fontSize: "1rem", color: "#78350F", lineHeight: 1.6, margin: 0 }}>{data.verdict}</p>
                    </div>

                    <div style={{ textAlign: "center", marginTop: "2rem" }}>
                        <Link href="/products" style={{ display: "inline-flex", background: "linear-gradient(135deg, #E8720C, #FF9A3C)", color: "white", padding: "1rem 2rem", borderRadius: "12px", textDecoration: "none", fontWeight: 800, fontSize: "1.05rem", boxShadow: "0 8px 24px rgba(232,114,12,0.3)" }}>
                            Shop Fresh Mangoes Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
