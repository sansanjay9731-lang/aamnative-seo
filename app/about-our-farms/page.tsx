import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin, Trees, TestTube } from "lucide-react";

export const metadata: Metadata = {
    title: "About Our Ratnagiri Farms | Exact Origin Data | Aam Native",
    description: "Transparency matters. View the exact GPS coordinates, soil data (laterite composition), and tree ages of the Aam Native GI-certified Alphonso orchards.",
    alternates: { canonical: "https://aamnative.com/about-our-farms" },
};

export default function AboutOurFarmsPage() {
    return (
        <div style={{ paddingTop: "calc(var(--header-h) + 2rem)", paddingBottom: "6rem", background: "var(--an-parchment)", minHeight: "100vh" }}>
            <div className="container" style={{ maxWidth: "800px" }}>
                <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", color: "var(--an-muted)", marginBottom: "2rem" }}>
                    <ArrowLeft size={14} /> Back to Home
                </Link>

                <div style={{ background: "white", borderRadius: "24px", padding: "3rem 2.5rem", border: "1px solid var(--an-border)", boxShadow: "0 12px 40px rgba(0,0,0,0.03)" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--an-saffron)", textTransform: "uppercase", letterSpacing: "0.15em" }}>The Origin</span>
                    <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, margin: "0.5rem 0 1.5rem" }}>
                        Our Orchards
                    </h1>
                    <p style={{ fontSize: "1.1rem", color: "var(--an-text)", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                        We believe that true premium mangoes come with traceability. You shouldn't just know they are "from Maharashtra" — you should know exactly which soil produced them.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "3rem" }}>
                        {/* Farm 1 */}
                        <div style={{ background: "var(--an-mist)", border: "1px solid var(--an-border)", borderRadius: "16px", padding: "1.5rem" }}>
                            <h2 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "1rem" }}>Aam Native Main Orchard</h2>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                                    <MapPin size={20} color="var(--an-saffron)" style={{ marginTop: "0.1rem", flexShrink: 0 }} />
                                    <div>
                                        <p style={{ fontSize: "0.75rem", color: "var(--an-muted)", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.2rem" }}>GPS Coordinates</p>
                                        <p style={{ fontSize: "0.95rem", fontWeight: 600 }}>16.9902° N, 73.3000° E</p>
                                        <p style={{ fontSize: "0.85rem", color: "var(--an-muted)" }}>Ratnagiri, Maharashtra</p>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                                    <Trees size={20} color="var(--an-grove)" style={{ marginTop: "0.1rem", flexShrink: 0 }} />
                                    <div>
                                        <p style={{ fontSize: "0.75rem", color: "var(--an-muted)", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.2rem" }}>Tree Profiles</p>
                                        <p style={{ fontSize: "0.95rem", fontWeight: 600 }}>Planted: 1968 - 1985</p>
                                        <p style={{ fontSize: "0.85rem", color: "var(--an-muted)" }}>Count: ~400 Mature Trees</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Soil Data */}
                        <div style={{ background: "#FEF3C7", border: "1px solid #FDE68A", borderRadius: "16px", padding: "1.5rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                                <TestTube size={24} color="#D97706" />
                                <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#92400E" }}>Soil Composition Data</h2>
                            </div>
                            <p style={{ fontSize: "0.95rem", color: "#713F12", lineHeight: 1.6, marginBottom: "1rem" }}>
                                The magic of the Ratnagiri Alphonso lies in the <strong>Red Laterite soil</strong> found exclusively along this coastal ridge. This porous, iron-rich soil forces the tree roots to dive deep, stressing the tree just enough to produce intensely sweet, highly aromatic fruit rather than excessive foliage.
                            </p>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                <li style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid rgba(146,64,14,0.1)" }}>
                                    <span style={{ color: "#92400E", fontWeight: 600 }}>Iron Oxide (Fe₂O₃)</span>
                                    <strong style={{ color: "#713F12" }}>High (~12-15%)</strong>
                                </li>
                                <li style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid rgba(146,64,14,0.1)" }}>
                                    <span style={{ color: "#92400E", fontWeight: 600 }}>Aluminum Oxide (Al₂O₃)</span>
                                    <strong style={{ color: "#713F12" }}>Medium (~8-10%)</strong>
                                </li>
                                <li style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0" }}>
                                    <span style={{ color: "#92400E", fontWeight: 600 }}>pH Level</span>
                                    <strong style={{ color: "#713F12" }}>Acidic (5.5 - 6.5)</strong>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ textAlign: "center", marginTop: "2rem" }}>
                        <Link href="/products" style={{ display: "inline-flex", background: "var(--an-ink)", color: "white", padding: "1rem 2rem", borderRadius: "12px", textDecoration: "none", fontWeight: 800, fontSize: "1.05rem", boxShadow: "0 8px 24px rgba(0,0,0,0.2)" }}>
                            Taste the Terroir
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
