"use client";
import { useState } from "react";
import type { Metadata } from "next";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [sent, setSent] = useState(false);

    const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 4000);
    };

    const fieldStyle: React.CSSProperties = {
        width: "100%", padding: "0.875rem 1rem", borderRadius: "12px",
        border: "1px solid var(--border)", background: "white",
        fontSize: "0.875rem", fontFamily: "inherit", outline: "none",
        transition: "border-color 0.2s",
    };

    return (
        <div style={{ paddingTop: "calc(var(--header-h) + 2rem)" }}>
            <div className="container" style={{ maxWidth: "720px", padding: "2rem 1.25rem 4rem" }}>
                <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                    Contact Us
                </h1>
                <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                    Have a question about your order or want to buy in bulk? We'd love to hear from you.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", marginBottom: "2.5rem" }}>
                    {[
                        { icon: "📞", label: "Call Us", value: "+91 98765 43210", href: "tel:+919876543210" },
                        { icon: "✉️", label: "Email", value: "hello@aamnative.com", href: "mailto:hello@aamnative.com" },
                        { icon: "💬", label: "WhatsApp", value: "Chat with us", href: "https://wa.me/919876543210" },
                    ].map(c => (
                        <a key={c.label} href={c.href} target={c.label === "WhatsApp" ? "_blank" : undefined}
                            style={{
                                padding: "1.25rem", borderRadius: "16px", border: "1px solid var(--border)",
                                background: "white", textDecoration: "none", textAlign: "center",
                                transition: "box-shadow 0.2s",
                            }}>
                            <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{c.icon}</div>
                            <p style={{ fontWeight: 700, fontSize: "0.8rem", color: "var(--text)", marginBottom: "0.25rem" }}>{c.label}</p>
                            <p style={{ fontSize: "0.75rem", color: "var(--muted)" }}>{c.value}</p>
                        </a>
                    ))}
                </div>

                <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                        <input name="name" placeholder="Your name" value={form.name} onChange={handle} required style={fieldStyle} />
                        <input name="email" type="email" placeholder="Email address" value={form.email} onChange={handle} required style={fieldStyle} />
                    </div>
                    <input name="phone" type="tel" placeholder="Phone number (optional)" value={form.phone} onChange={handle} style={fieldStyle} />
                    <textarea name="message" placeholder="Your message..." value={form.message} onChange={handle} required rows={5}
                        style={{ ...fieldStyle, resize: "vertical" }} />
                    <button type="submit"
                        style={{
                            padding: "1rem", borderRadius: "14px", border: "none", cursor: "pointer",
                            background: "linear-gradient(135deg, #E8720C, #FF9A3C)", color: "white",
                            fontWeight: 800, fontSize: "0.9375rem", fontFamily: "inherit",
                        }}>
                        {sent ? "✓ Message Sent!" : "Send Message"}
                    </button>
                </form>
            </div>
        </div>
    );
}
