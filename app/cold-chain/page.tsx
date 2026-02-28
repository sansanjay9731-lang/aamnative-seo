import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ThermometerSnowflake, Package, Plane } from "lucide-react";

export const metadata: Metadata = {
    title: "Cold Chain Logistics | Farm to Doorstep Delivery | Aam Native",
    description: "Learn how we safely pack and transport delicate, tree-ripened Alphonso mangoes across India using our specialized cold chain and ventilated packaging systems.",
    alternates: { canonical: "https://aamnative.com/cold-chain" },
};

export default function ColdChainPage() {
    return (
        <div style={{ paddingTop: "calc(var(--header-h) + 2rem)", paddingBottom: "6rem", background: "white", minHeight: "100vh" }}>
            <div className="container" style={{ maxWidth: "800px" }}>
                <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", color: "var(--an-muted)", marginBottom: "2rem" }}>
                    <ArrowLeft size={14} /> Back to Home
                </Link>

                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "1.5rem" }}>
                        Our Cold Chain &<br />
                        <span style={{ color: "#2563EB" }}>Packaging Logistics</span>
                    </h1>
                    <p style={{ fontSize: "1.1rem", color: "var(--an-muted)", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto" }}>
                        A perfectly ripened Alphonso is highly delicate. To ensure 100% freshness upon delivery, we execute a rigorous, temperature-controlled transit strategy.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", marginBottom: "4rem" }}>
                    {/* Step 1 */}
                    <div style={{ display: "flex", gap: "1.5rem", padding: "2rem", background: "#F8FAFC", borderRadius: "24px", border: "1px solid #E2E8F0" }}>
                        <div style={{ background: "#DBEAFE", width: "60px", height: "60px", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <Package size={32} color="#2563EB" />
                        </div>
                        <div>
                            <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1E293B", marginBottom: "0.75rem" }}>1. Ventilated Transit Crates</h2>
                            <p style={{ color: "#475569", lineHeight: 1.6, marginBottom: "1rem" }}>
                                We do not use fully sealed cardboard boxes during transit, which trap ethylene gas and moisture, leading to rapid over-ripening and fungal growth.
                            </p>
                            <div style={{ display: "inline-block", background: "white", padding: "0.75rem 1rem", borderRadius: "8px", border: "1px solid #E2E8F0", fontSize: "0.85rem", fontWeight: 700, color: "#334155" }}>
                                Specification: <span style={{ color: "#2563EB" }}>3-Ply Corrugated with 12 Air Vents</span>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div style={{ display: "flex", gap: "1.5rem", padding: "2rem", background: "#F0FDF4", borderRadius: "24px", border: "1px solid #DCFCE7" }}>
                        <div style={{ background: "#DCFCE7", width: "60px", height: "60px", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <ThermometerSnowflake size={32} color="#16A34A" />
                        </div>
                        <div>
                            <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#14532D", marginBottom: "0.75rem" }}>2. Temperature Regulation (Pre-cooling)</h2>
                            <p style={{ color: "#166534", lineHeight: 1.6, marginBottom: "1rem" }}>
                                Before dispatch, our boxes are staged in a pre-cooling facility to remove "field heat." This drastically slows down the respiration rate of the fruit during the journey.
                            </p>
                            <div style={{ display: "inline-block", background: "white", padding: "0.75rem 1rem", borderRadius: "8px", border: "1px solid #BBF7D0", fontSize: "0.85rem", fontWeight: 700, color: "#14532D" }}>
                                Dispatch Core Temp: <span style={{ color: "#16A34A" }}>18°C - 20°C</span>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div style={{ display: "flex", gap: "1.5rem", padding: "2rem", background: "#FFF7ED", borderRadius: "24px", border: "1px solid #FFEDD5" }}>
                        <div style={{ background: "#FFEDD5", width: "60px", height: "60px", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <Plane size={32} color="#EA580C" />
                        </div>
                        <div>
                            <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#9A3412", marginBottom: "0.75rem" }}>3. Express Air Logistics</h2>
                            <p style={{ color: "#C2410C", lineHeight: 1.6, marginBottom: "1rem" }}>
                                For non-local deliveries (outside Mumbai/Pune), we utilize express air cargo. Surface transport across India during summer can easily subject the fruit to 40°C+ temperatures inside closed trucks, ruining the batch.
                            </p>
                            <div style={{ display: "inline-block", background: "white", padding: "0.75rem 1rem", borderRadius: "8px", border: "1px solid #FED7AA", fontSize: "0.85rem", fontWeight: 700, color: "#9A3412" }}>
                                Target Air Transit Time: <span style={{ color: "#EA580C" }}>24 - 48 Hours Max</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
