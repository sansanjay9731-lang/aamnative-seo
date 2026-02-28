import Link from "next/link";

/* ── Footer Logo ── */
function FooterLogo() {
    return (
        <svg width="130" height="48" viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="aam native">
            {/* Mango Icon */}
            <g>
                <circle cx="26" cy="30" r="22" fill="#F6921E" />
                <path d="M 8 26 C 8 16 16 10 26 8 C 21 9 14 15 12 24 C 11 28 12 32 14 36 C 9 32 8 28 8 26 Z" fill="#FFB443" opacity="0.8" />
                <path d="M 12 44 C 24 54 42 48 46 34 C 47 42 39 51 26 52 C 18 52 14 48 12 44 Z" fill="#E07A0B" />

                {/* Leaf */}
                <path d="M 40 10 C 40 10 48 0 52 4 C 54 6 49 14 43 15 C 41 15 40 10 40 10" fill="#3C7143" />
                <path d="M 42 12 C 45 6 49 3 51 4" stroke="#2B5230" strokeWidth="1" fill="none" />
            </g>

            {/* Text blocks */}
            <text x="56" y="24" fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" fontWeight="800" fontSize="24" letterSpacing="-0.5" fill="white">
                aam
            </text>

            <text x="56" y="44" fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" fontWeight="800" fontSize="24" letterSpacing="-0.5" fill="white">
                native
            </text>

            <text x="58" y="55" fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" fontWeight="500" fontSize="6.5" letterSpacing="1.2" fill="rgba(255,255,255,0.7)">
                AUTHENTIC ALPHONSO
            </text>
        </svg>
    );
}

const shopLinks = [
    { href: "/products/rathnagiri-alphonso-premium", label: "premium box" },
    { href: "/products/rathnagiri-alphonso-standard", label: "standard box" },
    { href: "/products/rathnagiri-alphonso-regular", label: "regular box" },
];
const infoLinks = [
    { href: "/about", label: "our farm" },
    { href: "/blog", label: "blog" },
    { href: "/faq", label: "faq" },
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
                                { href: "https://wa.me/919964984695", icon: "wa" },
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
                            <a href="tel:+919964984695" className="ft-link">+91 99649 84695</a>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <a href="https://wa.me/919964984695" target="_blank" rel="noopener noreferrer" className="ft-link">whatsapp</a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div style={{ marginTop: "2.5rem", paddingTop: "1.25rem", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.05em" }}>
                        FSSAI: 11522024000123 &nbsp;&bull;&nbsp; GSTIN: 27AABCA1234Z1Z5
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.72rem" }}>
                        © 2026 aam native · gi certified rathnagiri alphonso · zero carbide guarantee
                    </p>
                </div>
            </div>
        </footer>
    );
}
