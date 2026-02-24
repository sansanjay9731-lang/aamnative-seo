"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PRODUCE_GALLERY } from "@/lib/products";

export default function ProduceGallery() {
    return (
        <section style={{ background: "white", padding: "5rem 0" }}>
            <div className="container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: "center", marginBottom: "3.5rem" }}
                >
                    <p style={{
                        color: "var(--saffron, #E07B16)", fontSize: "0.65rem", fontWeight: 800,
                        letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.75rem"
                    }}>
                        Behind the Scenes
                    </p>
                    <h2 style={{
                        fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 5vw, 3rem)",
                        fontWeight: 800, color: "var(--ink, #0C1510)", lineHeight: 1.1
                    }}>
                        Look at our <span style={{ color: "var(--grove, #1F5C3A)", fontStyle: "italic" }}>Produce</span>
                    </h2>
                    <p style={{
                        color: "var(--muted, #666)", fontSize: "0.95rem", marginTop: "1rem",
                        maxWidth: "500px", marginInline: "auto", lineHeight: 1.6
                    }}>
                        Real photos from our partner farms in Rathnagiri. Freshly harvested,
                        graded for perfection, and packed with traditional wisdom.
                    </p>
                </motion.div>

                {/* Grid Layout (Bento Style) */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                    gridAutoRows: "320px",
                    gap: "1.5rem"
                }}>
                    {PRODUCE_GALLERY.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            whileHover={{ y: -5 }}
                            style={{
                                position: "relative",
                                borderRadius: "24px",
                                overflow: "hidden",
                                background: "#F9F7F2",
                                gridColumn: item.type === "horizontal" ? "span 2" : "span 1",
                                gridRow: "span 1",
                                boxShadow: "0 10px 40px rgba(0,0,0,0.03)",
                                border: "1px solid #F0EBE0"
                            }}
                        >
                            <Image
                                src={item.url}
                                alt={item.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{
                                    transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                                    // Professional trick: Crop the bottom watermark by slightly shifting position up
                                    objectPosition: "center 20%"
                                }}
                            />

                            {/* Overlay on hover */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(to top, rgba(12,21,16,0.8) 0%, transparent 60%)",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-end",
                                    padding: "2rem",
                                    pointerEvents: "none"
                                }}
                            >
                                <h4 style={{ color: "white", fontFamily: "'Fraunces', serif", fontSize: "1.25rem", marginBottom: "0.25rem" }}>
                                    {item.title}
                                </h4>
                                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", lineHeight: 1.4 }}>
                                    {item.caption}
                                </p>
                            </motion.div>

                            {/* Corner Badge */}
                            <div style={{
                                position: "absolute",
                                top: "1.25rem",
                                left: "1.25rem",
                                background: "rgba(255,255,255,0.9)",
                                backdropFilter: "blur(8px)",
                                padding: "0.4rem 0.8rem",
                                borderRadius: "100px",
                                fontSize: "0.6rem",
                                fontWeight: 800,
                                letterSpacing: "0.05em",
                                color: "var(--grove, #1F5C3A)",
                                textTransform: "uppercase"
                            }}>
                                Actual Photo
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Trust Line */}
                <p style={{
                    textAlign: "center", marginTop: "3rem", color: "var(--muted, #888)",
                    fontSize: "0.75rem", fontStyle: "italic"
                }}>
                    What you see is exactly what we deliver. No stock photos, just pure Aam Native quality.
                </p>
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    div[style*="grid-template-columns"] {
                        grid-template-columns: 1fr !important;
                    }
                    div[style*="grid-column: span 2"] {
                        grid-column: span 1 !important;
                    }
                }
            `}</style>
        </section>
    );
}
