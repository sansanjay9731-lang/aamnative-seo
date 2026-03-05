import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Truck, PackageCheck, Zap } from "lucide-react";
import { deliveryCities, getAllCombos, varieties } from "@/lib/seo-data";

const BASE_URL = "https://aamnative.com";

export function generateStaticParams() {
    const cityParams = Object.keys(deliveryCities).map((city) => ({ city }));
    const comboParams = getAllCombos().map((combo) => ({ city: combo.slug }));
    return [...cityParams, ...comboParams];
}

function resolveCityData(slug: string) {
    // 1. Check if it's a direct city
    if (deliveryCities[slug as keyof typeof deliveryCities]) {
        return {
            city: deliveryCities[slug as keyof typeof deliveryCities],
            variety: null
        };
    }
    // 2. Check if it's a combo
    const combo = getAllCombos().find(c => c.slug === slug);
    if (combo) {
        return {
            city: deliveryCities[combo.cityKey as keyof typeof deliveryCities],
            // @ts-ignore
            variety: varieties[combo.varietyKey]
        };
    }
    return null;
}

export async function generateMetadata(
    { params }: { params: Promise<{ city: string }> }
): Promise<Metadata> {
    const { city } = await params;
    const resolved = resolveCityData(city);

    if (!resolved) return {};

    const { city: cityData, variety } = resolved;

    const title = variety
        ? `Buy ${variety.name} Mangoes Online in ${cityData.name} | Direct Delivery`
        : `Buy Ratnagiri Alphonso Mangoes Online in ${cityData.name} | Fast Delivery`;

    const description = variety
        ? `Order fresh ${variety.name} mangoes online with ${cityData.deliveryTimeline} delivery to ${cityData.name}. GI-Certified, organic, farm-direct to your home.`
        : `Order fresh, GI-Certified Ratnagiri Alphonso Mangoes online with ${cityData.deliveryTimeline} delivery to ${cityData.name}. Zero carbide, farm-direct to your door.`;

    return {
        title,
        description,
        alternates: { canonical: `${BASE_URL}/mango/delivery/${city}` },
    };
}

export default async function CityDeliveryPage(
    { params }: { params: Promise<{ city: string }> }
) {
    const { city } = await params;
    const resolved = resolveCityData(city);

    if (!resolved) notFound();

    const { city: data, variety } = resolved;

    return (
        <div style={{ paddingTop: "calc(var(--header-h) + 2rem)", paddingBottom: "6rem", background: "var(--an-cream)", minHeight: "100vh" }}>
            <div className="container" style={{ maxWidth: "800px" }}>
                <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", color: "var(--an-muted)", marginBottom: "2rem" }}>
                    <ArrowLeft size={14} /> Back
                </Link>

                <div style={{ background: "white", borderRadius: "24px", padding: "3rem 2.5rem", border: "1px solid var(--an-border)", boxShadow: "0 12px 40px rgba(0,0,0,0.03)" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--an-saffron)", textTransform: "uppercase", letterSpacing: "0.15em", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                        <Zap size={14} /> {variety ? `${variety.name} for ${data.name}` : `Express Delivery to ${data.name}`}
                    </span>
                    <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2, margin: "1rem 0 1.5rem" }}>
                        {variety ? `Order Fresh ${variety.name} in ${data.name}` : `Fresh Ratnagiri Alphonso Mangoes Delivered in ${data.name}`}
                    </h1>
                    <p style={{ fontSize: "1.1rem", color: "var(--an-muted)", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                        Craving authentic Hapus in {data.name}? We ship GI-Certified, zero-carbide Alphonso mangoes directly from our Rathnagiri orchards to your doorstep.
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "3rem" }}>
                        <div style={{ background: "#F0FDF4", padding: "1.5rem", borderRadius: "16px", border: "1px solid #DCFCE7" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                                <Truck size={20} color="#16A34A" />
                                <strong style={{ color: "#15803D" }}>Timeline</strong>
                            </div>
                            <p style={{ fontSize: "1.25rem", fontWeight: 800, color: "#166534" }}>{data.deliveryTimeline}</p>
                        </div>
                        <div style={{ background: "#EFF6FF", padding: "1.5rem", borderRadius: "16px", border: "1px solid #DBEAFE" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                                <PackageCheck size={20} color="#2563EB" />
                                <strong style={{ color: "#1D4ED8" }}>Logistics Partners</strong>
                            </div>
                            <p style={{ fontSize: "1rem", fontWeight: 700, color: "#1E40AF" }}>{data.shippingPartners.join(", ")}</p>
                        </div>
                    </div>

                    <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Popular Pincodes We Serve in {data.name}</h2>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "3rem" }}>
                        {data.popularPinCodes.map(pin => (
                            <span key={pin} style={{ background: "var(--an-mist)", color: "var(--an-text)", padding: "0.4rem 0.75rem", borderRadius: "100px", fontSize: "0.85rem", fontWeight: 600 }}>
                                {pin}
                            </span>
                        ))}
                        <span style={{ background: "transparent", color: "var(--an-muted)", padding: "0.4rem 0.75rem", fontSize: "0.85rem", fontWeight: 600 }}>
                            ...and all other {data.name} pincodes.
                        </span>
                    </div>

                    <div style={{ textAlign: "center", marginTop: "1rem" }}>
                        <Link href="/products" style={{ display: "inline-flex", background: "linear-gradient(135deg, #1B5E3B, #2A7A4F)", color: "white", padding: "1rem 2rem", borderRadius: "12px", textDecoration: "none", fontWeight: 800, fontSize: "1.05rem", boxShadow: "0 8px 24px rgba(27,94,59,0.3)" }}>
                            Order For {data.name} Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
