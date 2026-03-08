"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Award, Heart, Users } from "lucide-react";

import type { Variants } from "framer-motion";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function AboutPage() {
    const values = [
        { icon: <Leaf size={22} style={{ color: "var(--grove-l)" }} />, title: "Grown with Integrity", desc: "We never use carbide gas, chemical sprays, or artificial sweeteners. The mango does all the work." },
        { icon: <Award size={22} style={{ color: "var(--saffron)" }} />, title: "GI Certified Source", desc: "Every mango comes from the three GI-tagged districts of Rathnagiri, Sindhudurg, and Raigad." },
        { icon: <Heart size={22} style={{ color: "#EF4444" }} />, title: "Direct Connection", desc: "No broker. No wholesale market. You talk to the farmer's family. We reply within the hour." },
        { icon: <Users size={22} style={{ color: "var(--jade)" }} />, title: "Community First", desc: "10% of profit reinvested into orchard worker welfare and children's education in Ratnagiri." },
    ];

    return (
        <div>
            {/* Hero */}
            <section style={{ position: "relative", height: "56vw", minHeight: "320px", maxHeight: "560px", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0 }}>
                    <Image
                        src="/images/tree-mango-hand.jpg"
                        alt="Aam Native, Rathnagiri Alphonso mango orchard, three generations of farming"
                        fill className="object-cover" priority sizes="100vw"
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,27,15,0.9) 0%, rgba(13,27,15,0.3) 60%, transparent 100%)" }} />
                </div>
                <div className="container" style={{ position: "relative", zIndex: 10, paddingBottom: "2.5rem" }}>
                    <motion.div initial="hidden" animate="show" variants={stagger}>
                        <motion.p variants={fadeUp} style={{ color: "#FF9A3C", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                            Since 1968 · Rathnagiri, Maharashtra
                        </motion.p>
                        <motion.h1 variants={fadeUp} style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 800, color: "white", lineHeight: 1.1, maxWidth: "560px" }}>
                            Three Generations.<br />One Promise.
                        </motion.h1>
                    </motion.div>
                </div>
            </section>

            {/* Founder story */}
            <section style={{ padding: "4rem 0", background: "var(--cream)" }}>
                <div className="container" style={{ maxWidth: "760px" }}>
                    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
                        <motion.p variants={fadeUp} style={{ color: "var(--saffron)", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Our Story</motion.p>
                        <motion.h2 variants={fadeUp} style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.25rem", color: "var(--text)" }}>
                            Why We Started<br />
                            <span style={{ color: "var(--saffron)", fontStyle: "italic" }}>Aam Native</span>
                        </motion.h2>
                        <motion.div variants={fadeUp} style={{ width: "48px", height: "2px", background: "linear-gradient(90deg, var(--saffron), var(--saffron-l))", borderRadius: "2px", marginBottom: "1.75rem" }} />

                        {[
                            "My grandfather planted our first 40 trees in 1968 on the red laterite slopes above the Sahyadri foothills in Ratnagiri. He chose this land for the same reasons every serious Alphonso farmer knows: the salty sea breeze off the Arabian Sea, the iron-rich volcanic soil, and the precise monsoon timing that Konkan receives.",
                            "For 40 years, our family sold mangos at the APMC wholesale market in Mumbai. Every year was the same story: brokers pushing prices down, buyers who couldn't tell a Rathnagiri from a Devgad mango, and no recognition of the care we'd put in.",
                            "In 2010, I started delivering directly to four families in Pune. Word spread. By 2015, we had 200 families. Today, Aam Native delivers to 2,500+ households across 18 cities directly, with our name and our phone number on every box.",
                            "Our promise is simple: if the mango doesn't eat like the best you've ever had, you get your money back. No one has asked us for it since 2022.",
                        ].map((para, i) => (
                            <motion.p key={i} variants={fadeUp} style={{ color: "var(--an-muted)", fontSize: "0.9375rem", lineHeight: 1.8, marginBottom: "1.125rem" }}>
                                {para}
                            </motion.p>
                        ))}

                        <motion.div variants={fadeUp} style={{
                            fontFamily: "'Fraunces', serif", fontStyle: "italic", fontSize: "1rem",
                            color: "var(--grove)", borderLeft: "3px solid var(--saffron)", paddingLeft: "1.25rem",
                            marginTop: "2rem", lineHeight: 1.7, background: "rgba(224,123,22,0.04)",
                            borderRadius: "0 12px 12px 0", padding: "1.5rem 1.5rem 1.5rem 1.25rem"
                        }}>
                            &quot;We didn&apos;t build Aam Native to be a fruit company. We built it to prove that India&apos;s most beloved mango deserves the same direct relationship with the consumer that a French wine château or a Scottish whisky distillery has. The name says it all: Aam means mango, and Native is who we are.&quot;
                            <br /><br />
                            <strong style={{ fontStyle: "normal", fontSize: "0.8rem", color: "var(--text)", letterSpacing: "0.05em" }}>Founder, Aam Native</strong>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section style={{ padding: "5rem 0", background: "var(--ink)" }}>
                <div className="container">
                    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
                        style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <motion.p variants={fadeUp} style={{ color: "var(--saffron-l)", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Our Values</motion.p>
                        <motion.h2 variants={fadeUp} style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, color: "white", lineHeight: 1.15 }}>
                            What <span style={{ color: "#FF9A3C", fontStyle: "italic" }}>Drives</span> Us
                        </motion.h2>
                    </motion.div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
                        {values.map((v, i) => (
                            <motion.div key={v.title}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                                style={{
                                    padding: "2rem 1.5rem", borderRadius: "20px",
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    backdropFilter: "blur(4px)",
                                    transition: "background 0.3s, border-color 0.3s",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                                }}
                            >
                                <div style={{
                                    width: "52px", height: "52px", borderRadius: "14px",
                                    background: "rgba(255,255,255,0.08)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    marginBottom: "1.25rem"
                                }}>
                                    {v.icon}
                                </div>
                                <h3 style={{ color: "white", fontWeight: 700, fontSize: "1rem", marginBottom: "0.625rem" }}>{v.title}</h3>
                                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8125rem", lineHeight: 1.7 }}>{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Farm Photo Grid */}
            <section style={{ padding: "4.5rem 0", background: "var(--cream)" }}>
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                        <p style={{ color: "var(--saffron)", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "0.75rem" }}>From the Orchard</p>
                        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 800, color: "var(--text)" }}>
                            Real Moments, <span style={{ color: "var(--saffron)", fontStyle: "italic" }}>Real Mangos</span>
                        </h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                        {[
                            { src: "/images/farm-harvest-crates.jpg", alt: "Harvest crates at our Rathnagiri farm" },
                            { src: "/images/tree-ripe-mango.jpg", alt: "Ripe Alphonso mango on tree" },
                            { src: "/images/box-premium-golden.jpg", alt: "Premium golden Alphonso box ready to ship" },
                            { src: "/images/tree-single-mango.jpg", alt: "Single Alphonso mango closeup" },
                        ].map((img, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                style={{
                                    borderRadius: "16px", overflow: "hidden",
                                    aspectRatio: i === 0 ? "1.2/1" : "1/1",
                                    position: "relative",
                                    gridRow: i === 0 ? "span 1" : undefined,
                                }}
                            >
                                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 25vw" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section style={{ padding: "4rem 0", background: "var(--parchment)" }}>
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1.5rem" }}>
                        {[
                            { val: "50+", label: "Years Farming" },
                            { val: "2,500+", label: "Families Served" },
                            { val: "18", label: "Cities Delivered" },
                            { val: "4.9★", label: "Average Rating" },
                        ].map((s, i) => (
                            <motion.div key={s.label}
                                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.09 }}
                                style={{ textAlign: "center", padding: "2rem 1rem" }}>
                                <p style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "var(--saffron)", lineHeight: 1 }}>{s.val}</p>
                                <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--an-muted)", marginTop: "0.5rem", textTransform: "uppercase", letterSpacing: "0.12em" }}>{s.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: "5rem 0", background: "var(--grove)", textAlign: "center" }}>
                <div className="container" style={{ maxWidth: "540px" }}>
                    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
                        <motion.p variants={fadeUp} style={{ color: "#86EFAC", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                            Taste the Difference
                        </motion.p>
                        <motion.h2 variants={fadeUp} style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, color: "white", lineHeight: 1.15, marginBottom: "1.5rem" }}>
                            Ready to Try the<br />
                            <span style={{ color: "#FF9A3C" }}>Real Alphonso?</span>
                        </motion.h2>
                        <motion.div variants={fadeUp}>
                            <Link href="/products"
                                style={{
                                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                                    padding: "1rem 2rem", borderRadius: "100px",
                                    background: "linear-gradient(135deg, #E07B16, #F59A3A)",
                                    color: "white", fontWeight: 800, fontSize: "0.9rem",
                                    textDecoration: "none", transition: "transform 0.2s, box-shadow 0.2s",
                                    boxShadow: "0 4px 20px rgba(224,123,22,0.4)",
                                }}
                            >
                                Shop Mangos Now <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
