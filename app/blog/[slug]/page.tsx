import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/lib/posts";

const BASE_URL = "https://aamnative.com";

export function generateStaticParams() {
    return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);
    if (!post) return {};

    const url = `${BASE_URL}/blog/${post.slug}`;
    const image = `${BASE_URL}${post.image}`;

    return {
        title: `${post.title} | Aam Native Blog`,
        description: post.excerpt,
        alternates: { canonical: url },
        openGraph: {
            type: "article",
            url,
            title: post.title,
            description: post.excerpt,
            publishedTime: new Date(post.date).toISOString(), // Mocking exact date parsing for SEO purposes
            authors: [post.author],
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [image],
        },
    };
}

function buildArticleSchema(post: typeof posts[0]) {
    const url = `${BASE_URL}/blog/${post.slug}`;
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": `${url}#article`,
                headline: post.title,
                description: post.excerpt,
                image: `${BASE_URL}${post.image}`,
                author: {
                    "@type": "Person",
                    name: post.author,
                },
                publisher: {
                    "@id": `${BASE_URL}/#organization`,
                },
                datePublished: new Date(post.date).toISOString(),
                mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": url,
                },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
                    { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
                    { "@type": "ListItem", position: 3, name: post.title, item: url },
                ]
            }
        ]
    };
}

export default async function BlogPostPage(
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);
    if (!post) notFound();

    return (
        <div style={{ paddingTop: "calc(var(--header-h) + 2rem)", paddingBottom: "6rem" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(buildArticleSchema(post)) }}
            />

            <div className="container" style={{ maxWidth: "800px" }}>
                <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", color: "var(--muted)", marginBottom: "2rem" }}>
                    <ArrowLeft size={14} /> Back to Blog
                </Link>

                <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                    <span style={{ fontSize: "0.8rem", color: "var(--saffron)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em" }}>{post.date}</span>
                    <span style={{ fontSize: "0.8rem", color: "var(--muted)", fontWeight: 600 }}>·</span>
                    <span style={{ fontSize: "0.8rem", color: "var(--muted)", fontWeight: 600 }}>{post.readTime}</span>
                </div>

                <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "1.5rem" }}>
                    {post.title}
                </h1>

                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "3rem" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--g-saffron)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700 }}>
                        {post.author.charAt(0)}
                    </div>
                    <div>
                        <p style={{ fontWeight: 700, fontSize: "0.9rem" }}>{post.author}</p>
                        <p style={{ fontSize: "0.75rem", color: "var(--muted)" }}>Aam Native</p>
                    </div>
                </div>

                <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "24px", overflow: "hidden", marginBottom: "3rem" }}>
                    <Image src={post.image} alt={post.title} fill className="object-cover" priority sizes="(max-width: 800px) 100vw, 800px" />
                </div>

                <div
                    className="prose prose-lg"
                    style={{ color: "var(--text)", lineHeight: 1.8 }}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>
        </div>
    );
}
