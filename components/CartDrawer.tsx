"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
    const { isOpen, closeCart, items, removeItem, updateQty, subtotal } = useCart();
    const freeAt = 999;
    const progress = Math.min(100, (subtotal / freeAt) * 100);
    const remaining = Math.max(0, freeAt - subtotal);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ position: "fixed", inset: 0, zIndex: 50, background: "rgba(12,21,16,0.55)", backdropFilter: "blur(4px)" }}
                        onClick={closeCart}
                    />

                    {/* Drawer */}
                    <motion.aside
                        initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 28, stiffness: 220 }}
                        style={{ position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 50, width: "100%", maxWidth: "420px", background: "white", display: "flex", flexDirection: "column" }}
                        role="dialog" aria-modal aria-label="Your cart"
                    >
                        {/* ── Header ── */}
                        <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                                <ShoppingBag size={18} style={{ color: "var(--saffron)" }} />
                                <h2 className="serif" style={{ fontSize: "1.125rem", fontWeight: 700 }}>
                                    Your Cart
                                    {items.length > 0 && (
                                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "0.875rem", color: "var(--muted)", marginLeft: "0.375rem" }}>
                                            ({items.length})
                                        </span>
                                    )}
                                </h2>
                            </div>
                            <button onClick={closeCart} aria-label="Close cart"
                                style={{ width: "36px", height: "36px", borderRadius: "50%", border: "1.5px solid var(--border)", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <X size={16} />
                            </button>
                        </div>

                        {/* ── Free delivery bar ── */}
                        {items.length > 0 && (
                            <div style={{ padding: "0.875rem 1.5rem", borderBottom: "1px solid var(--border)" }}>
                                <p style={{ fontSize: "0.78rem", fontWeight: 600, color: remaining === 0 ? "#15803D" : "var(--muted)", marginBottom: "0.5rem" }}>
                                    {remaining === 0 ? "🎉 You've unlocked free delivery!" : (
                                        <>Add <span style={{ color: "var(--saffron)", fontWeight: 800 }}>₹{remaining.toLocaleString("en-IN")}</span> more for free delivery</>
                                    )}
                                </p>
                                <div style={{ height: "3px", background: "var(--border)", borderRadius: "100px", overflow: "hidden" }}>
                                    <div style={{ height: "100%", width: `${progress}%`, background: "var(--g-saffron)", borderRadius: "100px", transition: "width 0.5s ease" }} />
                                </div>
                            </div>
                        )}

                        {/* ── Items ── */}
                        <div style={{ flex: 1, overflowY: "auto", padding: "1.25rem 1.5rem" }}>
                            {items.length === 0 ? (
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", gap: "1.25rem" }}>
                                    <span style={{ fontSize: "3.5rem" }}>🥭</span>
                                    <div>
                                        <p className="serif" style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.375rem" }}>Your cart is empty</p>
                                        <p className="body-sm">Add some Alphonso mangos.</p>
                                    </div>
                                    <Link href="/products" className="btn btn-saffron" onClick={closeCart} style={{ fontSize: "0.8125rem", padding: "0.875rem 1.75rem" }}>
                                        Shop Now
                                    </Link>
                                </div>
                            ) : (
                                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                                    {items.map((item, i) => (
                                        <motion.div key={item.product.id}
                                            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.07 }}
                                            style={{ display: "flex", gap: "1rem", paddingBottom: "1.25rem", borderBottom: "1px solid var(--border)" }}
                                        >
                                            {/* Image */}
                                            <div style={{ width: "76px", height: "76px", borderRadius: "12px", overflow: "hidden", position: "relative", flexShrink: 0, background: "var(--parchment)" }}>
                                                <Image src={item.product.image} alt={item.product.name} fill className="object-cover" sizes="76px" />
                                            </div>

                                            {/* Info */}
                                            <div style={{ flex: 1, minWidth: 0 }}>
                                                <p style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "0.2rem" }}>
                                                    {item.product.grade}
                                                </p>
                                                <p style={{ fontWeight: 700, fontSize: "0.9rem", lineHeight: 1.3, marginBottom: "0.625rem" }}>
                                                    {item.product.name}
                                                </p>

                                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                                    {/* Qty */}
                                                    <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", background: "var(--parchment)", borderRadius: "100px", padding: "0.3rem 0.75rem" }}>
                                                        <button onClick={() => updateQty(item.product.id, item.quantity - 1)}
                                                            style={{ width: "22px", height: "22px", borderRadius: "50%", border: "none", background: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--sh-xs)" }}>
                                                            <Minus size={11} />
                                                        </button>
                                                        <span style={{ fontWeight: 800, fontSize: "0.875rem", minWidth: "18px", textAlign: "center" }}>{item.quantity}</span>
                                                        <button onClick={() => updateQty(item.product.id, item.quantity + 1)}
                                                            style={{ width: "22px", height: "22px", borderRadius: "50%", border: "none", background: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--sh-xs)" }}>
                                                            <Plus size={11} />
                                                        </button>
                                                    </div>

                                                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                                        <span className="serif" style={{ fontSize: "1.125rem", fontWeight: 800, color: "var(--saffron)" }}>
                                                            ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                                                        </span>
                                                        <button onClick={() => removeItem(item.product.id)} aria-label="Remove"
                                                            style={{ color: "#DC2626", border: "none", background: "transparent", cursor: "pointer", display: "flex" }}>
                                                            <Trash2 size={14} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* ── Footer ── */}
                        {items.length > 0 && (
                            <div style={{ padding: "1.375rem 1.5rem", borderTop: "1px solid var(--border)", background: "var(--parchment)" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1.25rem" }}>
                                    <span style={{ fontWeight: 600, color: "var(--muted)", fontSize: "0.875rem" }}>Subtotal</span>
                                    <span className="serif" style={{ fontSize: "1.875rem", fontWeight: 800, color: "var(--saffron)" }}>
                                        ₹{subtotal.toLocaleString("en-IN")}
                                    </span>
                                </div>
                                <Link
                                    href="/checkout"
                                    onClick={closeCart}
                                    className="btn btn-saffron glow-pulse flex items-center justify-center gap-2"
                                    style={{ width: "100%", borderRadius: "14px", padding: "1.0625rem", fontSize: "0.875rem", textDecoration: "none" }}
                                >
                                    Proceed to Checkout <ArrowRight size={15} />
                                </Link>
                                <p style={{ textAlign: "center", fontSize: "0.7rem", color: "var(--muted)", marginTop: "0.875rem" }}>
                                    🔒 Secure checkout · 100% freshness guarantee
                                </p>
                            </div>
                        )}
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
}
