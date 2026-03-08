"use client";
import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQCategory {
  category: string;
  items: FAQItem[];
}

export default function FAQClient({ faqs }: { faqs: FAQCategory[] }) {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (key: string) => setOpen(open === key ? null : key);

  return (
    <div style={{ paddingTop: "calc(var(--header-h) + 2rem)" }}>
      <div className="container" style={{ maxWidth: "760px", padding: "2rem 1.25rem 5rem" }}>

        {/* Page Header */}
        <div style={{ marginBottom: "3rem" }}>
          <p style={{
            color: "var(--saffron)", fontSize: "0.65rem", fontWeight: 700,
            letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "0.75rem",
          }}>
            Ratnagiri · Maharashtra · Since 1968
          </p>
          <h1 style={{
            fontFamily: "'Fraunces', serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 700, lineHeight: 1.2, marginBottom: "1rem",
          }}>
            Frequently Asked Questions
          </h1>
          <p style={{ color: "var(--an-muted)", fontSize: "0.9375rem", lineHeight: 1.75, maxWidth: "560px" }}>
            Everything you need to know about GI-certified Ratnagiri Alphonso mangoes —
            carbide-free ripening, season dates, grades, delivery, and storage.
          </p>
        </div>

        {/* Quick links */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "3rem",
        }}>
          {faqs.map((cat) => (
            <a
              key={cat.category}
              href={`#${cat.category.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
              style={{
                padding: "0.4rem 0.875rem", borderRadius: "999px",
                border: "1px solid var(--border)", background: "white",
                fontSize: "0.78rem", fontWeight: 600, color: "var(--text)",
                textDecoration: "none", transition: "all 0.15s",
              }}
            >
              {cat.category}
            </a>
          ))}
        </div>

        {/* FAQ Categories */}
        {faqs.map((cat) => {
          const catId = cat.category.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
          return (
            <section key={cat.category} id={catId} style={{ marginBottom: "3rem" }}>
              <h2 style={{
                fontFamily: "'Fraunces', serif", fontSize: "1.125rem", fontWeight: 700,
                marginBottom: "1rem", paddingBottom: "0.75rem",
                borderBottom: "2px solid var(--saffron)",
                color: "var(--text)",
              }}>
                {cat.category}
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {cat.items.map((item, i) => {
                  const key = `${catId}-${i}`;
                  const isOpen = open === key;
                  return (
                    <div
                      key={key}
                      style={{
                        borderRadius: "14px",
                        border: `1px solid ${isOpen ? "var(--saffron)" : "var(--border)"}`,
                        background: "white",
                        overflow: "hidden",
                        transition: "border-color 0.2s",
                      }}
                    >
                      <button
                        onClick={() => toggle(key)}
                        aria-expanded={isOpen}
                        style={{
                          width: "100%", padding: "1.125rem 1.25rem",
                          display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                          gap: "1rem", background: "none", border: "none",
                          cursor: "pointer", textAlign: "left", fontFamily: "inherit",
                        }}
                      >
                        <span style={{
                          fontWeight: 700, fontSize: "0.9rem", lineHeight: 1.5,
                          color: "var(--text)", flex: 1,
                        }}>
                          {item.q}
                        </span>
                        <span style={{
                          flexShrink: 0, width: "22px", height: "22px",
                          borderRadius: "50%",
                          background: isOpen ? "var(--saffron)" : "var(--border-light, #f0ece6)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: "0.75rem", color: isOpen ? "white" : "var(--an-muted)",
                          transition: "all 0.2s", transform: isOpen ? "rotate(45deg)" : "none",
                          marginTop: "2px",
                        }}>
                          +
                        </span>
                      </button>

                      {isOpen && (
                        <div style={{
                          padding: "0 1.25rem 1.25rem",
                          borderTop: "1px solid var(--border)",
                        }}>
                          <p style={{
                            fontSize: "0.875rem", lineHeight: 1.8,
                            color: "var(--an-muted)", paddingTop: "1rem",
                          }}>
                            {item.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}

        {/* Bottom CTA */}
        <div style={{
          marginTop: "3rem", padding: "2rem", borderRadius: "20px",
          background: "linear-gradient(135deg, #FFF8F0, #FFF3E5)",
          border: "1px solid rgba(232,114,12,0.15)", textAlign: "center",
        }}>
          <p style={{
            fontFamily: "'Fraunces', serif", fontSize: "1.125rem",
            fontWeight: 700, marginBottom: "0.5rem",
          }}>
            Still have questions?
          </p>
          <p style={{ color: "var(--an-muted)", fontSize: "0.875rem", marginBottom: "1.25rem" }}>
            Our farm team is available on WhatsApp daily during the season.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "0.75rem 1.5rem", borderRadius: "12px",
                background: "linear-gradient(135deg, #E8720C, #FF9A3C)",
                color: "white", fontWeight: 800, fontSize: "0.875rem",
                textDecoration: "none",
              }}
            >
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              style={{
                padding: "0.75rem 1.5rem", borderRadius: "12px",
                border: "1.5px solid var(--border)", background: "white",
                color: "var(--text)", fontWeight: 700, fontSize: "0.875rem",
                textDecoration: "none",
              }}
            >
              Contact Form
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
