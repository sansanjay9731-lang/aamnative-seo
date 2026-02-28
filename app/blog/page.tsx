import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/lib/posts";

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

const blogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${BASE_URL}/blog#itemlist`,
    name: "Mango Blog — Aam Native",
    description: "Alphonso season guides, GI certification explained, mango recipes, and farm stories from Ratnagiri.",
    url: `${BASE_URL}/blog`,
    numberOfItems: posts.length,
    itemListElement: posts.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.title,
        url: `${BASE_URL}/blog/${p.slug}`,
        image: `${BASE_URL}${p.image}`,
        description: p.excerpt,
    })),
};

export default function BlogPage() {
    return (
        <div style={{ paddingTop: "calc(var(--header-h) + 2rem)" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
            />
            <div className="container" style={{ padding: "2rem 1.25rem 4rem" }}>
                <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                    From the Farm
                </h1>
                <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                    Stories about mangos, recipes, and life on a Rathnagiri orchard
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
                    {posts.map(post => (
                        <Link href={`/blog/${post.slug}`} key={post.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <article style={{
                                borderRadius: "20px", overflow: "hidden", background: "white",
                                border: "1px solid var(--border)", transition: "box-shadow 0.2s", height: "100%", display: "flex", flexDirection: "column"
                            }}>
                                <div style={{ height: "180px", position: "relative", background: "var(--sand)" }}>
                                    <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                                </div>
                                <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                                    <div style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem" }}>
                                        <span style={{ fontSize: "0.7rem", color: "var(--muted)", fontWeight: 600 }}>{post.date}</span>
                                        <span style={{ fontSize: "0.7rem", color: "var(--saffron)", fontWeight: 700 }}>{post.readTime}</span>
                                    </div>
                                    <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.05rem", fontWeight: 700, lineHeight: 1.3, marginBottom: "0.5rem" }}>
                                        {post.title}
                                    </h2>
                                    <p style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.6, marginBottom: "1rem", flex: 1 }}>
                                        {post.excerpt}
                                    </p>
                                    <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--saffron)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "auto" }}>
                                        Read More →
                                    </span>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
