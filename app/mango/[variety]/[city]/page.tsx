import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Truck, Leaf, Sun } from "lucide-react";
import { comboPages, varieties, deliveryCities } from "@/lib/seo-data";

const BASE_URL = "https://www.aamnative.com";

export function generateStaticParams() {
    return comboPages.map((c) => ({ variety: c.variety, city: c.city }));
}

export async function generateMetadata(
    { params }: { params: Promise<{ variety: string; city: string }> }
): Promise<Metadata> {
    const { variety, city } = await params;

    const combo = comboPages.find((c) => c.variety === variety && c.city === city);
    if (!combo) return {};

    const v = varieties[variety as keyof typeof varieties];
    const c = deliveryCities[city as keyof typeof deliveryCities];
    if (!v || !c) return {};

    const vShort = v.name.split("(")[0].trim();

    return {
        title: `Buy ${vShort} Mangoes in ${c.name} | ${c.deliveryTimeline} Delivery | Aam Native`,
        description: `Order fresh ${v.name} mangoes online with ${c.deliveryTimeline} delivery to ${c.name}. ${v.brixRange} Brix sweetness, farm-direct, zero carbide. ${c.deliveryTimeline} shipping via ${c.shippingPartners[0]}.`,
        alternates: { canonical: `${BASE_URL}/mango/${v.slug}/${c.slug}` },
    };
}

export default async function ComboPage(
    { params }: { params: Promise<{ variety: string; city: string }> }
) {
    const { variety, city } = await params;

    const combo = comboPages.find((c) => c.variety === variety && c.city === city);
    if (!combo) notFound();

    const v = varieties[variety as keyof typeof varieties];
    const c = deliveryCities[city as keyof typeof deliveryCities];
    if (!v || !c) notFound();

    const vShort = v.name.split("(")[0].trim();

    return (
        <div style={{ paddingTop: "calc(var(--header-h) + 2rem)", paddingBottom: "6rem", background: "var(--an-cream)", minHeight: "100vh" }}>
            <div className="container" style={{ maxWidth: "800px" }}>
                <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", color: "var(--an-muted)", marginBottom: "2rem" }}>
                    <ArrowLeft size={14} /> Back
                </Link>

                <div style={{ background: "white", borderRadius: "24px", padding: "3rem 2.5rem", border: "1px solid var(--an-border)", boxShadow: "0 12px 40px rgba(0,0,0,0.03)" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--an-saffron)", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                        {vShort} + {c.name}
                    </span>
                    <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2, margin: "1rem 0 1.5rem" }}>
                        Buy {vShort} Mangoes Online in {c.name}
                    </h1>
                    <p style={{ fontSize: "1.1rem", color: "var(--an-muted)", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                        Get farm-fresh {v.name} delivered to your doorstep in {c.name}. {v.description}
                    </p>

                    {/* Variety info cards */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
                        <div style={{ background: "#FEF3C7", padding: "1.25rem", borderRadius: "16px", border: "1px solid #FDE68A" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                                <Sun size={18} color="#D97706" />
                                <strong style={{ color: "#B45309", fontSize: "0.85rem", textTransform: "uppercase" }}>Season</strong>
                            </div>
                            <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#92400E", margin: 0 }}>{v.seasonWindow}</p>
                        </div>
                        <div style={{ background: "#F0FDF4", padding: "1.25rem", borderRadius: "16px", border: "1px solid #DCFCE7" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                                <Leaf size={18} color="#16A34A" />
                                <strong style={{ color: "#15803D", fontSize: "0.85rem", textTransform: "uppercase" }}>Sweetness</strong>
                            </div>
                            <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#166534", margin: 0 }}>{v.brixRange} Brix</p>
                        </div>
                    </div>

                    {/* Delivery info */}
                    <div style={{ background: "#EFF6FF", padding: "1.5rem", borderRadius: "16px", border: "1px solid #DBEAFE", marginBottom: "2.5rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                            <Truck size={20} color="#2563EB" />
                            <strong style={{ color: "#1D4ED8", fontSize: "1rem" }}>Delivery to {c.name}</strong>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                            <div>
                                <p style={{ fontSize: "0.75rem", color: "#3B82F6", textTransform: "uppercase", fontWeight: 700, margin: "0 0 0.25rem" }}>Timeline</p>
                                <p style={{ fontSize: "1rem", fontWeight: 700, color: "#1E40AF", margin: 0 }}>{c.deliveryTimeline}</p>
                            </div>
                            <div>
                                <p style={{ fontSize: "0.75rem", color: "#3B82F6", textTransform: "uppercase", fontWeight: 700, margin: "0 0 0.25rem" }}>Partners</p>
                                <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "#1E40AF", margin: 0 }}>{c.shippingPartners.join(", ")}</p>
                            </div>
                        </div>
                    </div>

                    {/* Pricing */}
                    <div style={{ background: "var(--an-mist)", border: "1px solid var(--an-border)", borderRadius: "16px", padding: "1.5rem", marginBottom: "2.5rem" }}>
                        <h2 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "1rem" }}>Pricing & Nutrition</h2>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            <li style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                                <span style={{ color: "var(--an-muted)" }}>Market Price</span>
                                <strong>{v.pricingRange}</strong>
                            </li>
                            <li style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                                <span style={{ color: "var(--an-muted)" }}>Calories</span>
                                <strong>{v.nutritionalData.calories}</strong>
                            </li>
                            <li style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                                <span style={{ color: "var(--an-muted)" }}>Vitamin C</span>
                                <strong>{v.nutritionalData.vitaminC}</strong>
                            </li>
                            <li style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 0" }}>
                                <span style={{ color: "var(--an-muted)" }}>Dietary Fiber</span>
                                <strong>{v.nutritionalData.dietaryFiber}</strong>
                            </li>
                        </ul>
                    </div>

                    {/* Popular pincodes */}
                    <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>Popular Pincodes in {c.name}</h2>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "3rem" }}>
                        {c.popularPinCodes.map(pin => (
                            <span key={pin} style={{ background: "var(--an-mist)", color: "var(--an-text)", padding: "0.4rem 0.75rem", borderRadius: "100px", fontSize: "0.85rem", fontWeight: 600 }}>
                                {pin}
                            </span>
                        ))}
                        <span style={{ color: "var(--an-muted)", padding: "0.4rem 0.75rem", fontSize: "0.85rem" }}>
                            ...and all other {c.name} pincodes
                        </span>
                    </div>

                    {/* Related links */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
                        <Link href={`/mango/${v.slug}`} style={{ fontSize: "0.85rem", color: "var(--an-saffron)", fontWeight: 700, textDecoration: "underline" }}>
                            More about {vShort}
                        </Link>
                        <Link href={`/mango/delivery/${c.slug}`} style={{ fontSize: "0.85rem", color: "var(--an-saffron)", fontWeight: 700, textDecoration: "underline" }}>
                            All mangoes in {c.name}
                        </Link>
                    </div>

                    <div style={{ textAlign: "center", marginTop: "1rem" }}>
                        <Link href="/products" style={{ display: "inline-flex", background: "linear-gradient(135deg, #1B5E3B, #2A7A4F)", color: "white", padding: "1rem 2rem", borderRadius: "12px", textDecoration: "none", fontWeight: 800, fontSize: "1.05rem", boxShadow: "0 8px 24px rgba(27,94,59,0.3)" }}>
                            Order {vShort} for {c.name} Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
