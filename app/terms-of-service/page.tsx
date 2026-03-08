export default function TermsOfServicePage() {
    const h2: React.CSSProperties = { fontFamily: "'Fraunces', serif", fontSize: "1.25rem", fontWeight: 700, margin: "2rem 0 0.75rem" };
    const p: React.CSSProperties = { color: "var(--an-muted)", fontSize: "0.875rem", lineHeight: 1.8, marginBottom: "0.75rem" };

    return (
        <div style={{ paddingTop: "calc(var(--header-h) + 2rem)" }}>
            <div className="container" style={{ maxWidth: "720px", padding: "2rem 1.25rem 4rem" }}>
                <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "2rem", fontWeight: 700, marginBottom: "0.25rem" }}>Terms of Service</h1>
                <p style={{ ...p, marginBottom: "2rem" }}>Effective from February 2026</p>

                <h2 style={h2}>Acceptance of Terms</h2>
                <p style={p}>By using the Aam Native website and placing an order, you agree to these Terms of Service. Please read them carefully before making any purchase.</p>

                <h2 style={h2}>Products</h2>
                <p style={p}>All mangos sold on Aam Native are sourced from GI-tagged Rathnagiri orchards. Images shown are representative. Natural variation in size, colour, and ripeness is expected with fresh produce.</p>

                <h2 style={h2}>Pricing</h2>
                <p style={p}>All prices are listed in Indian Rupees (INR) and include applicable taxes. We reserve the right to update pricing based on seasonal availability. Prices at the time of order placement will be honoured.</p>

                <h2 style={h2}>Orders</h2>
                <p style={p}>Orders are confirmed once payment is received. We reserve the right to cancel orders in case of stock unavailability, in which case a full refund will be issued within 3 to 5 business days.</p>

                <h2 style={h2}>User Accounts</h2>
                <p style={p}>You are responsible for maintaining the confidentiality of your account credentials. Any activity under your account is your responsibility.</p>

                <h2 style={h2}>Intellectual Property</h2>
                <p style={p}>All content on this website, including text, images, logos, and design, is the property of Aam Native and may not be reproduced without written permission.</p>

                <h2 style={h2}>Limitation of Liability</h2>
                <p style={p}>Aam Native is not liable for delays caused by courier partners, natural disasters, or circumstances beyond our control. Our maximum liability is limited to the value of your order.</p>

                <h2 style={h2}>Governing Law</h2>
                <p style={p}>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Ratnagiri, Maharashtra.</p>

                <h2 style={h2}>Contact</h2>
                <p style={p}>For questions about these terms, email us at <a href="mailto:hello@aamnative.com" style={{ color: "var(--saffron)" }}>hello@aamnative.com</a>.</p>
            </div>
        </div>
    );
}
