import Link from "next/link";

/* ── Footer Logo ── */
function FooterLogo() {
    return (
        <svg width="148" height="36" viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="aam native">
            <circle cx="16" cy="19" r="13" fill="#E8720C" />
            <path d="M24 8 C24 8 28 4 28 2 C27.5 2.2 25 4 24 6 C23 4 20.5 2.2 20 2 C20 4 24 8 24 8Z" fill="#27724A" />
            <ellipse cx="12" cy="16" rx="3.5" ry="5" fill="rgba(255,255,255,0.15)" />
            <text x="36" y="22" fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" fontWeight="700" fontSize="16.5" letterSpacing="-0.3" fill="white">aam native</text>
            <text x="37" y="33" fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" fontWeight="500" fontSize="5.5" letterSpacing="2.5" fill="rgba(255,255,255,0.35)">authentic alphonso</text>
        </svg>
    );
}

const shopLinks = [
    { href: "/products/rathnagiri-alphonso-premium", label: "premium box" },
    { href: "/products/rathnagiri-alphonso-standard", label: "standard box" },
    { href: "/products/rathnagiri-alphonso-medium", label: "medium box" },
];
const infoLinks = [
    { href: "/about", label: "our farm" },
    { href: "/blog", label: "blog" },
    { href: "/contact", label: "contact us" },
    { href: "/track-order", label: "track my order" },
];
const policyLinks = [
    { href: "/privacy-policy", label: "privacy policy" },
    { href: "/return-refund-policy", label: "return & refund" },
    { href: "/shipping-policy", label: "shipping policy" },
    { href: "/terms-of-service", label: "terms of service" },
];

export default function Footer() {
    return (
        <footer style={{ background: "var(--ink)", color: "white" }}>
            <style>{`
        .ft-link { color: rgba(255,255,255,0.45); font-size: 0.8125rem; text-decoration: none; transition: color 0.2s; text-transform: lowercase; }
        .ft-link:hover { color: white; }
        .ft-social { width:34px;height:34px;border-radius:8px;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.04);display:flex;align-items:center;justify-content:center;font-size:0.6rem;font-weight:700;color:rgba(255,255,255,0.5);text-decoration:none;transition:all 0.2s; }
        .ft-social:hover { background:var(--saffron,#E8720C);color:white;border-color:transparent; }
      `}</style>

            <div className="container" style={{ padding: "3.5rem 1.25rem 2rem" }}>
                <div style={{ display: "grid", gap: "2.5rem", gridTemplateColumns: "1fr" }} className="md:grid-cols-5">

                    {/* Brand */}
                    <div>
                        <FooterLogo />
                        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8125rem", lineHeight: 1.7, marginTop: "1.25rem", maxWidth: "280px" }}>
                            Rathnagiri&apos;s finest Alphonso. Grown for generations, delivered farm-direct. No brokers, no chemicals, just the real thing.
                        </p>
                        <div style={{ marginTop: "1.25rem", display: "flex", gap: "0.5rem" }}>
                            {[
                                { href: "https://instagram.com/aamnative", icon: "ig" },
                                { href: "https://facebook.com/aamnative", icon: "fb" },
                                { href: "https://youtube.com/@aamnative", icon: "yt" },
                                { href: "https://wa.me/919876543210", icon: "wa" },
                            ].map(s => (
                                <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer" className="ft-social" aria-label={s.icon}>
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <p style={{ color: "var(--saffron, #E8720C)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>shop</p>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                            {shopLinks.map(l => (
                                <li key={l.href}><Link href={l.href} className="ft-link">{l.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Info */}
                    <div>
                        <p style={{ color: "var(--saffron, #E8720C)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>info</p>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                            {infoLinks.map(l => (
                                <li key={l.label}><Link href={l.href} className="ft-link">{l.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Policies */}
                    <div>
                        <p style={{ color: "var(--saffron, #E8720C)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>policies</p>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                            {policyLinks.map(l => (
                                <li key={l.label}><Link href={l.href} className="ft-link">{l.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <p style={{ color: "var(--saffron, #E8720C)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>contact</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                            <a href="tel:+919876543210" className="ft-link">+91 98765 43210</a>
                            <a href="mailto:hello@aamnative.com" className="ft-link">hello@aamnative.com</a>
                            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="ft-link">whatsapp</a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div style={{ marginTop: "2.5rem", paddingTop: "1.25rem", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
                    <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.72rem" }}>
                        © 2026 aam native · gi certified rathnagiri alphonso · zero carbide guarantee
                    </p>
                </div>
            </div>
        </footer>
    );
}
