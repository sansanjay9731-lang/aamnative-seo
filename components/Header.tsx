"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Menu, X } from "lucide-react";
import CartDrawer from "./CartDrawer";

/* ──────────────────────────────────────────
   LOGO — Bold Minimalist / Living Food
   Flat orange circle (mango) + green leaf notch
   Lowercase "aam native" in clean sans-serif
   ────────────────────────────────────────── */
function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
    const isDark = variant === "dark";
    const textFill = isDark ? "#1F5C3A" : "#FFFFFF";
    const subFill = isDark ? "#9CA38B" : "rgba(255,255,255,0.45)";

    return (
        <svg width="160" height="36" viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="aam native logo">
            {/* Mango circle — solid flat orange */}
            <circle cx="16" cy="19" r="13" fill="#E8720C" />

            {/* Leaf notch — geometric, top-right of circle */}
            <path d="M24 8 C24 8 28 4 28 2 C27.5 2.2 25 4 24 6 C23 4 20.5 2.2 20 2 C20 4 24 8 24 8Z" fill="#1F5C3A" />

            {/* Subtle highlight on mango */}
            <ellipse cx="12" cy="16" rx="3.5" ry="5" fill="rgba(255,255,255,0.15)" />

            {/* "aam native" — lowercase, bold, clean */}
            <text x="36" y="22" fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" fontWeight="700" fontSize="16.5" letterSpacing="-0.3" fill={textFill}>
                aam native
            </text>

            {/* Tagline — subtle, spaced */}
            <text x="37" y="33" fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="2.5" fill={subFill}>
                authentic alphonso
            </text>
        </svg>
    );
}

export default function Header() {
    const { totalItems, openCart } = useCart();
    const [scrolled, setScrolled] = useState(true); // default to solid to avoid white-on-white flash
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll(); // immediately check on mount
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onSolid = scrolled || menuOpen;
    const textColor = onSolid ? "var(--text)" : "rgba(255,255,255,0.85)";
    const borderColor = onSolid ? "var(--border)" : "rgba(255,255,255,0.25)";

    return (
        <>
            <header
                className="header-fullwidth"
                style={{
                    position: "fixed", top: 0, zIndex: 100,
                    height: "var(--header-h)",
                    background: onSolid ? "rgba(253,250,245,0.97)" : "transparent",
                    backdropFilter: onSolid ? "blur(20px) saturate(1.8)" : "none",
                    borderBottom: onSolid ? "1px solid rgba(0,0,0,0.06)" : "none",
                    transition: "all 0.45s ease",
                }}>
                <div className="container" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

                    {/* Logo */}
                    <Link href="/" aria-label="aam native — home" style={{ display: "flex", alignItems: "center" }}>
                        <Logo variant={onSolid ? "dark" : "light"} />
                    </Link>

                    {/* Desktop nav — minimal, clean */}
                    <nav aria-label="Main navigation"
                        style={{ display: "none", alignItems: "center", gap: "2.25rem" }}
                        className="md:flex">
                        {[
                            { href: "/products", label: "shop" },
                            { href: "/about", label: "our farm" },
                        ].map(link => (
                            <Link key={link.href} href={link.href}
                                style={{
                                    fontWeight: 600, fontSize: "0.8125rem", letterSpacing: "0.02em",
                                    textDecoration: "none", color: textColor,
                                    transition: "color 0.2s", textTransform: "lowercase",
                                }}>
                                {link.label}
                            </Link>
                        ))}

                        {/* CTA pill */}
                        <Link href="/products"
                            style={{
                                padding: "0.6rem 1.5rem", borderRadius: "100px",
                                background: onSolid ? "#1F5C3A" : "rgba(255,255,255,0.12)",
                                backdropFilter: onSolid ? "none" : "blur(6px)",
                                border: onSolid ? "none" : "1px solid rgba(255,255,255,0.2)",
                                color: "white", fontWeight: 700, fontSize: "0.8125rem",
                                textDecoration: "none", transition: "all 0.3s",
                            }}>
                            order now
                        </Link>
                    </nav>

                    {/* Right — cart + menu */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                        {/* Cart button */}
                        <button onClick={openCart} aria-label={`Cart — ${totalItems} items`}
                            style={{
                                position: "relative", width: "42px", height: "42px", borderRadius: "50%",
                                border: `1.5px solid ${borderColor}`, background: "transparent",
                                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                                transition: "all 0.2s",
                            }}>
                            <ShoppingBag size={18} color={onSolid ? "var(--text)" : "white"} />
                            {totalItems > 0 && (
                                <span style={{
                                    position: "absolute", top: "4px", right: "4px",
                                    width: "16px", height: "16px", borderRadius: "50%",
                                    background: "#E8720C", color: "white",
                                    fontSize: "0.56rem", fontWeight: 800,
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                }}>
                                    {totalItems}
                                </span>
                            )}
                        </button>

                        {/* Mobile menu */}
                        <button onClick={() => setMenuOpen(m => !m)} aria-label="Menu"
                            className="md:hidden"
                            style={{
                                width: "42px", height: "42px", borderRadius: "50%",
                                border: `1.5px solid ${borderColor}`, background: "transparent",
                                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                                transition: "all 0.2s",
                            }}>
                            {menuOpen
                                ? <X size={17} color={onSolid ? "var(--text)" : "white"} />
                                : <Menu size={17} color={onSolid ? "var(--text)" : "white"} />}
                        </button>
                    </div>
                </div>

                {/* Mobile flyout */}
                {menuOpen && (
                    <div style={{
                        background: "rgba(253,250,245,0.99)", backdropFilter: "blur(24px)",
                        borderTop: "1px solid var(--border)",
                        padding: "1.25rem 1.25rem 2rem",
                    }}>
                        <nav style={{ display: "flex", flexDirection: "column" }}>
                            {[
                                { href: "/", label: "home" },
                                { href: "/products", label: "shop" },
                                { href: "/about", label: "our farm" },
                            ].map(link => (
                                <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                                    style={{
                                        padding: "1rem 0", fontWeight: 600, fontSize: "1.125rem",
                                        color: "var(--text)", textDecoration: "none",
                                        borderBottom: "1px solid var(--border)",
                                        textTransform: "lowercase",
                                    }}>
                                    {link.label}
                                </Link>
                            ))}
                            <Link href="/products" className="btn btn-saffron" onClick={() => setMenuOpen(false)}
                                style={{ marginTop: "1.5rem", borderRadius: "14px", padding: "1rem", justifyContent: "center", textTransform: "lowercase" }}>
                                order now
                            </Link>
                        </nav>
                    </div>
                )}
            </header>

            <CartDrawer />
        </>
    );
}
