"use client";
import { useState } from "react";

export default function TrackOrderPage() {
    const [orderId, setOrderId] = useState("");
    const [searched, setSearched] = useState(false);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (orderId.trim()) setSearched(true);
    };

    return (
        <div style={{ paddingTop: "calc(var(--header-h) + 2rem)" }}>
            <div className="container" style={{ maxWidth: "600px", padding: "2rem 1.25rem 4rem", textAlign: "center" }}>
                <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                    Track My Order
                </h1>
                <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                    Enter your order ID to check the delivery status
                </p>

                <form onSubmit={submit} style={{ display: "flex", gap: "0.75rem", marginBottom: "2rem" }}>
                    <input
                        value={orderId}
                        onChange={(e) => { setOrderId(e.target.value); setSearched(false); }}
                        placeholder="e.g. AN-2026-00123"
                        required
                        style={{
                            flex: 1, padding: "0.875rem 1rem", borderRadius: "12px",
                            border: "1px solid var(--border)", background: "white",
                            fontSize: "0.9rem", fontFamily: "inherit", outline: "none",
                        }}
                    />
                    <button type="submit" style={{
                        padding: "0.875rem 1.5rem", borderRadius: "12px", border: "none",
                        background: "linear-gradient(135deg, #E8720C, #FF9A3C)", color: "white",
                        fontWeight: 800, fontSize: "0.875rem", cursor: "pointer", fontFamily: "inherit",
                        whiteSpace: "nowrap",
                    }}>
                        Track
                    </button>
                </form>

                {searched && (
                    <div style={{
                        padding: "2rem", borderRadius: "20px", background: "white",
                        border: "1px solid var(--border)", textAlign: "left",
                    }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                            <div>
                                <p style={{ fontWeight: 800, fontSize: "0.85rem" }}>Order #{orderId}</p>
                                <p style={{ color: "var(--muted)", fontSize: "0.75rem" }}>Placed on Feb 24, 2026</p>
                            </div>
                            <div style={{
                                padding: "0.35rem 0.75rem", borderRadius: "100px",
                                background: "#FEF3CD", color: "#856404",
                                fontSize: "0.7rem", fontWeight: 800,
                            }}>
                                In Transit
                            </div>
                        </div>

                        {[
                            { step: "Order Placed", time: "Feb 24, 8:30 AM", done: true },
                            { step: "Packed at Farm", time: "Feb 24, 10:00 AM", done: true },
                            { step: "Shipped via Express", time: "Feb 24, 12:30 PM", done: true },
                            { step: "Out for Delivery", time: "Expected by Feb 25", done: false },
                            { step: "Delivered", time: "", done: false },
                        ].map((s, i) => (
                            <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: i < 4 ? "0.5rem" : 0 }}>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <div style={{
                                        width: "12px", height: "12px", borderRadius: "50%",
                                        background: s.done ? "#16A34A" : "#E4DCD0",
                                        border: s.done ? "none" : "2px solid #CCC",
                                    }} />
                                    {i < 4 && <div style={{ width: "2px", height: "28px", background: s.done ? "#16A34A" : "#E4DCD0" }} />}
                                </div>
                                <div style={{ paddingBottom: "0.5rem" }}>
                                    <p style={{ fontWeight: 700, fontSize: "0.8rem", color: s.done ? "var(--text)" : "var(--muted)" }}>{s.step}</p>
                                    {s.time && <p style={{ fontSize: "0.7rem", color: "var(--muted)" }}>{s.time}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <p style={{ marginTop: "2rem", fontSize: "0.8rem", color: "var(--muted)" }}>
                    Can&apos;t find your order? Contact us on{" "}
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", fontWeight: 700 }}>WhatsApp</a>
                    {" "}or call <a href="tel:+919876543210" style={{ color: "var(--saffron)", fontWeight: 700 }}>+91 98765 43210</a>
                </p>
            </div>
        </div>
    );
}
