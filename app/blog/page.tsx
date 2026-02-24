import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const BASE_URL = "https://aamnative.com";

export const metadata: Metadata = {
  title: "Mango Blog — Alphonso Season, Recipes & Farm Stories | Aam Native",
  description:
    "Explore Aam Native's mango blog: Alphonso season guides, GI certification explained, mango recipes, farm stories from Ratnagiri, and tips for buying authentic Hapus online.",
  keywords: [
    "Alphonso mango blog",
    "Ratnagiri mango season 2026",
    "how to identify real Alphonso mango",
    "GI certified mango India",
    "mango recipes India",
    "Hapus mango guide",
    "carbide free mango tips",
    "mango farm Ratnagiri stories",
  ],
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/blog`,
    title: "Mango Blog — Alphonso Season, Recipes & Farm Stories | Aam Native",
    description:
      "Season guides, GI certification, farm stories, and authentic mango recipes from Aam Native.",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Aam Native Mango Blog",
      },
    ],
  },
};

const posts = [
    {
        slug: "why-rathnagiri-alphonso",
        title: "Why Rathnagiri Alphonso is the World's Most Coveted Mango",
        excerpt: "The Konkan coast of Maharashtra has a unique microclimate that makes Rathnagiri the undisputed capital of Alphonso mangos. Here's what makes them so special.",
        image: "/images/tree-ripe-mango.jpg",
        date: "March 2026",
        readTime: "4 min read",
    },
    {
        slug: "how-we-ripen-mangos",
        title: "Natural vs Carbide Ripening: How We Keep Your Mangos Safe",
        excerpt: "Did you know that most mangos in India are ripened with calcium carbide, a banned chemical? We use traditional wood-shaving beds and here's why it matters.",
        image: "/images/farm-harvest-crates.jpg",
        date: "March 2026",
        readTime: "5 min read",
    },
    {
        slug: "perfect-aamras-recipe",
        title: "How to Make the Perfect Aamras at Home",
        excerpt: "There's nothing quite like a bowl of chilled aamras with hot pooris. Our simple recipe uses just 4 ingredients and takes under 10 minutes.",
        image: "/images/box-premium-golden.jpg",
        date: "February 2026",
        readTime: "3 min read",
    },
    {
        slug: "alphonso-season-guide",
        title: "Alphonso Season Guide: When to Buy and What to Expect",
        excerpt: "Alphonso season runs from mid-March to late June. Here's a week-by-week breakdown of sweetness, availability, and the best times to order.",
        image: "/images/farm-full-tree.jpg",
        date: "February 2026",
        readTime: "4 min read",
    },
];

export default function BlogPage() {
    return (
        <div style={{ paddingTop: "calc(var(--header-h) + 2rem)" }}>
            <div className="container" style={{ padding: "2rem 1.25rem 4rem" }}>
                <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                    From the Farm
                </h1>
                <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                    Stories about mangos, recipes, and life on a Rathnagiri orchard
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
                    {posts.map(post => (
                        <article key={post.slug} style={{
                            borderRadius: "20px", overflow: "hidden", background: "white",
                            border: "1px solid var(--border)", transition: "box-shadow 0.2s",
                        }}>
                            <div style={{ height: "180px", position: "relative", background: "var(--sand)" }}>
                                <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                            </div>
                            <div style={{ padding: "1.5rem" }}>
                                <div style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem" }}>
                                    <span style={{ fontSize: "0.7rem", color: "var(--muted)", fontWeight: 600 }}>{post.date}</span>
                                    <span style={{ fontSize: "0.7rem", color: "var(--saffron)", fontWeight: 700 }}>{post.readTime}</span>
                                </div>
                                <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.05rem", fontWeight: 700, lineHeight: 1.3, marginBottom: "0.5rem" }}>
                                    {post.title}
                                </h2>
                                <p style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.6, marginBottom: "1rem" }}>
                                    {post.excerpt}
                                </p>
                                <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--saffron)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                    Read More →
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
