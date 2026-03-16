import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import { stateData, deliveryCities } from "@/lib/seo-data";

const BASE_URL = "https://www.aamnative.com";

export function generateStaticParams() {
    return Object.keys(stateData).map((state) => ({ state }));
}

export async function generateMetadata(
    { params }: { params: Promise<{ state: string }> }
): Promise<Metadata> {
    const { state } = await params;
    const data = stateData[state];

    if (!data) return {};

    return {
        title: `Buy Alphonso Mangoes Online in ${data.name} | Delivery to ${data.cities.length}+ Cities`,
        description: `Order fresh Ratnagiri Alphonso mangoes with delivery across ${data.name}. We deliver to ${data.cities.length}+ cities including major metros. Farm-direct, zero carbide, GI-certified.`,
        alternates: { canonical: `${BASE_URL}/mango/delivery/state/${data.slug}` },
    };
}

function buildSchema(data: { name: string; slug: string; cities: string[] }) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
            { "@type": "ListItem", position: 2, name: "Mango Delivery", item: `${BASE_URL}/mango/delivery` },
            { "@type": "ListItem", position: 3, name: data.name, item: `${BASE_URL}/mango/delivery/state/${data.slug}` },
        ]
    };
}

export default async function StateDeliveryPage(
    { params }: { params: Promise<{ state: string }> }
) {
    const { state } = await params;
    const data = stateData[state];

    if (!data) notFound();

    const cityEntries = data.cities
        .map((key) => deliveryCities[key as keyof typeof deliveryCities])
        .filter(Boolean);

    return (
        <div style={{ paddingTop: "calc(var(--header-h) + 2rem)", paddingBottom: "6rem", background: "var(--an-cream)", minHeight: "100vh" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(data)) }}
            />
            <div className="container" style={{ maxWidth: "960px" }}>
                <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", color: "var(--an-muted)", marginBottom: "2rem" }}>
                    <ArrowLeft size={14} /> Back to Home
                </Link>

                <div style={{ background: "white", borderRadius: "24px", padding: "3rem 2.5rem", border: "1px solid var(--an-border)", boxShadow: "0 12px 40px rgba(0,0,0,0.03)" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--an-saffron)", textTransform: "uppercase", letterSpacing: "0.15em", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                        <MapPin size={14} /> {data.name} Delivery Network
                    </span>
                    <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2, margin: "1rem 0 1rem" }}>
                        Fresh Alphonso Mango Delivery Across {data.name}
                    </h1>
                    <p style={{ fontSize: "1.1rem", color: "var(--an-muted)", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                        We deliver GI-Certified, naturally ripened Ratnagiri Alphonso mangoes to {cityEntries.length} cities across {data.name}. Farm-direct, zero carbide, with temperature-controlled shipping.
                    </p>

                    <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>
                        Cities We Deliver To in {data.name}
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1rem", marginBottom: "3rem" }}>
                        {cityEntries.map((city) => (
                            <Link
                                key={city.slug}
                                href={`/mango/delivery/${city.slug}`}
                                style={{
                                    display: "block",
                                    background: "#F0FDF4",
                                    padding: "1.25rem",
                                    borderRadius: "16px",
                                    border: "1px solid #DCFCE7",
                                    textDecoration: "none",
                                    color: "inherit",
                                    transition: "all 0.2s"
                                }}
                            >
                                <strong style={{ display: "block", fontSize: "1rem", marginBottom: "0.25rem", color: "#166534" }}>
                                    {city.name}
                                </strong>
                                <span style={{ fontSize: "0.85rem", color: "#15803D" }}>
                                    {city.deliveryTimeline}
                                </span>
                            </Link>
                        ))}
                    </div>

                    <div style={{ textAlign: "center" }}>
                        <Link href="/products" style={{ display: "inline-flex", background: "linear-gradient(135deg, #1B5E3B, #2A7A4F)", color: "white", padding: "1rem 2rem", borderRadius: "12px", textDecoration: "none", fontWeight: 800, fontSize: "1.05rem", boxShadow: "0 8px 24px rgba(27,94,59,0.3)" }}>
                            Order Alphonso Mangoes Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
