import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Scale, Info, HelpCircle } from "lucide-react";
import { posts } from "@/lib/posts";
import { comparisons } from "@/lib/seo-data";

const BASE_URL = "https://aamnative.com";

export function generateStaticParams() {
    const postParams = posts.map((p) => ({ slug: p.slug }));
    const comparisonParams = comparisons.map((c) => ({ slug: c.slug }));
    return [...postParams, ...comparisonParams];
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);
    const comparison = comparisons.find((c) => c.slug === slug);

    if (!post && !comparison) return {};

    if (comparison) {
        return {
            title: comparison.metaTitle,
            description: comparison.metaDescription,
            alternates: { canonical: `${BASE_URL}/blog/${comparison.slug}` },
        };
    }

    const url = `${BASE_URL}/blog/${post!.slug}`;
    const image = `${BASE_URL}${post!.image}`;

    return {
        title: `${post!.title} | Aam Native Blog`,
        description: post!.excerpt,
        alternates: { canonical: url },
        openGraph: {
            type: "article",
            url,
            title: post!.title,
            description: post!.excerpt,
            publishedTime: new Date(post!.date).toISOString(),
            authors: [post!.author],
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: post!.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post!.title,
            description: post!.excerpt,
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

function buildComparisonSchema(comp: typeof comparisons[0]) {
    const url = `${BASE_URL}/blog/${comp.slug}`;
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": `${url}#article`,
                headline: comp.title,
                description: comp.metaDescription,
                author: { "@id": `${BASE_URL}/#organization` },
                datePublished: "2026-03-01T00:00:00Z",
            },
            {
                "@type": "FAQPage",
                mainEntity: comp.faqs.map(f => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a }
                }))
            }
        ]
    };
}

export default async function BlogPostPage(
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);
    const comparison = comparisons.find((c) => c.slug === slug);

    if (!post && !comparison) notFound();

    if (comparison) {
        return (
            <div style={{ paddingTop: "calc(var(--header-h) + 2rem)", paddingBottom: "6rem" }}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(buildComparisonSchema(comparison)) }}
                />
                <div className="container" style={{ maxWidth: "800px" }}>
                    <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", color: "var(--muted)", marginBottom: "2rem" }}>
                        <ArrowLeft size={14} /> Back to Blog
                    </Link>

                    <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.75rem, 4.5vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "2rem" }}>
                        {comparison.title}
                    </h1>

                    <div style={{ background: "var(--an-mist)", border: "1.5px solid var(--an-border)", borderRadius: "20px", padding: "1.5rem", marginBottom: "3rem" }}>
                        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1rem" }}>
                            <div style={{ background: "var(--saffron)", color: "white", borderRadius: "50%", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Scale size={18} />
                            </div>
                            <h2 style={{ fontSize: "1.1rem", fontWeight: 800 }}>Comparison Verdict</h2>
                        </div>
                        <p style={{ fontStyle: "italic", fontSize: "1.1rem", color: "var(--text)", lineHeight: 1.6 }}>{comparison.verdict}</p>
                    </div>

                    <div style={{ overflowX: "auto", marginBottom: "4rem" }}>
                        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "400px" }}>
                            <thead>
                                <tr style={{ borderBottom: "2px solid var(--an-border)" }}>
                                    <th style={{ textAlign: "left", padding: "1rem", fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase" }}>Feature</th>
                                    <th style={{ textAlign: "left", padding: "1rem", fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", color: "var(--saffron)" }}>Variety A</th>
                                    <th style={{ textAlign: "left", padding: "1rem", fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", color: "var(--grove)" }}>Variety B</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparison.comparisonPoints.map((pt, i) => (
                                    <tr key={i} style={{ borderBottom: "1px solid var(--an-border)" }}>
                                        <td style={{ padding: "1rem", fontWeight: 700, fontSize: "0.9rem" }}>{pt.label}</td>
                                        <td style={{ padding: "1rem", fontSize: "0.9rem" }}>{pt.a}</td>
                                        <td style={{ padding: "1rem", fontSize: "0.9rem" }}>{pt.b}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                        <HelpCircle size={24} color="var(--saffron)" /> Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "4rem" }}>
                        {comparison.faqs.map((faq, i) => (
                            <div key={i} style={{ background: "white", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--an-border)" }}>
                                <p style={{ fontWeight: 800, fontSize: "1rem", marginBottom: "0.5rem", color: "var(--text)" }}>{faq.q}</p>
                                <p style={{ fontSize: "0.95rem", color: "var(--an-muted)", lineHeight: 1.6 }}>{faq.a}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: "center", background: "var(--an-cream)", padding: "3rem", borderRadius: "24px", border: "1px solid var(--an-border)" }}>
                        <h3 className="serif" style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Ready to taste the difference?</h3>
                        <p style={{ marginBottom: "2rem", color: "var(--an-muted)" }}>Order fresh, farm-direct Ratnagiri Alphonso mangoes today.</p>
                        <Link href="/products" className="btn btn-saffron" style={{ display: "inline-flex" }}>Shop Mango Boxes</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={{ paddingTop: "calc(var(--header-h) + 2rem)", paddingBottom: "6rem" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(buildArticleSchema(post!)) }}
            />

            <div className="container" style={{ maxWidth: "800px" }}>
                <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", color: "var(--muted)", marginBottom: "2rem" }}>
                    <ArrowLeft size={14} /> Back to Blog
                </Link>

                <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                    <span style={{ fontSize: "0.8rem", color: "var(--saffron)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em" }}>{post!.date}</span>
                    <span style={{ fontSize: "0.8rem", color: "var(--muted)", fontWeight: 600 }}>·</span>
                    <span style={{ fontSize: "0.8rem", color: "var(--muted)", fontWeight: 600 }}>{post!.readTime}</span>
                </div>

                <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "1.5rem" }}>
                    {post!.title}
                </h1>

                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "3rem" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--g-saffron)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700 }}>
                        {post!.author.charAt(0)}
                    </div>
                    <div>
                        <p style={{ fontWeight: 700, fontSize: "0.9rem" }}>{post!.author}</p>
                        <p style={{ fontSize: "0.75rem", color: "var(--muted)" }}>Aam Native</p>
                    </div>
                </div>

                <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "24px", overflow: "hidden", marginBottom: "3rem" }}>
                    <Image src={post!.image} alt={post!.title} fill className="object-cover" priority sizes="(max-width: 800px) 100vw, 800px" />
                </div>

                <div
                    className="prose prose-lg"
                    style={{ color: "var(--text)", lineHeight: 1.8 }}
                    dangerouslySetInnerHTML={{ __html: post!.content }}
                />
            </div>
        </div>
    );
}
