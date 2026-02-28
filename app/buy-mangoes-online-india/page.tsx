import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Truck, ArrowRight } from "lucide-react";

const BASE_URL = "https://aamnative.com";

export const metadata: Metadata = {
    title: "Buy Mangoes Online in India | GI Certified Farm Direct | Aam Native",
    description: "Buy premium, naturally ripened Ratnagiri Alphonso mangoes online in India. Direct from farm to home. Zero carbide, 100% freshness guarantee. Order now.",
    alternates: { canonical: `${BASE_URL}/buy-mangoes-online-india` },
};

export default function BuyMangoesOnlinePage() {
    return (
        <div style={{ paddingTop: "calc(var(--header-h) + 2rem)", paddingBottom: "6rem", background: "white" }}>
            <div className="container" style={{ maxWidth: "800px" }}>

                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--an-saffron)", textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: "1rem" }}>
                        Farm Direct Delivery
                    </span>
                    <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "1.5rem" }}>
                        Buy Authentic Mangoes<br />
                        <span style={{ color: "var(--an-saffron)" }}>Online in India</span>
                    </h1>
                    <p style={{ fontSize: "1.1rem", color: "var(--an-muted)", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto" }}>
                        Skip the middlemen and the artificially ripened market produce. Get GI-Certified Ratnagiri Alphonso mangoes delivered straight from our orchard to your doorstep.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", marginBottom: "4rem" }}>
                    {[
                        { icon: <ShieldCheck size={32} color="#16A34A" />, title: "Zero Carbide", desc: "Naturally ripened using traditional hay beds. 100% chemical-free." },
                        { icon: <Truck size={32} color="var(--an-saffron)" />, title: "Farm to Door", desc: "Harvested to order and shipped via express air logistics." },
                        { icon: <CheckCircle2 size={32} color="#2563EB" />, title: "Quality Guarantee", desc: "Any damaged or spoiled fruit? We replace it, no questions asked." }
                    ].map(feature => (
                        <div key={feature.title} style={{ background: "var(--an-cream)", padding: "2rem", borderRadius: "20px", textAlign: "center", border: "1px solid var(--an-border)" }}>
                            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>{feature.icon}</div>
                            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "0.5rem" }}>{feature.title}</h3>
                            <p style={{ fontSize: "0.9rem", color: "var(--an-muted)", lineHeight: 1.6 }}>{feature.desc}</p>
                        </div>
                    ))}
                </div>

                <div style={{ background: "var(--an-warm)", borderRadius: "24px", padding: "3rem", textAlign: "center" }}>
                    <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>Ready to taste the real thing?</h2>
                    <p style={{ fontSize: "1rem", color: "var(--an-muted)", marginBottom: "2rem", maxWidth: "400px", margin: "0 auto 2rem" }}>
                        Pre-order for the 2026 season today and secure your boxes before we sell out.
                    </p>
                    <Link href="/products" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--ink)", color: "white", padding: "1rem 2rem", borderRadius: "12px", textDecoration: "none", fontWeight: 700, fontSize: "1rem" }}>
                        Browse Mango Boxes <ArrowRight size={16} />
                    </Link>
                </div>

            </div>
        </div>
    );
}
