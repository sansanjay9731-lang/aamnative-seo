export default function PrivacyPolicyPage() {
    const h2: React.CSSProperties = { fontFamily: "'Fraunces', serif", fontSize: "1.25rem", fontWeight: 700, margin: "2rem 0 0.75rem" };
    const p: React.CSSProperties = { color: "var(--an-muted)", fontSize: "0.875rem", lineHeight: 1.8, marginBottom: "0.75rem" };

    return (
        <div style={{ paddingTop: "calc(var(--header-h) + 2rem)" }}>
            <div className="container" style={{ maxWidth: "720px", padding: "2rem 1.25rem 4rem" }}>
                <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "2rem", fontWeight: 700, marginBottom: "0.25rem" }}>Privacy Policy</h1>
                <p style={{ ...p, marginBottom: "2rem" }}>Last updated: February 2026</p>

                <h2 style={h2}>Information We Collect</h2>
                <p style={p}>When you place an order on Aam Native, we collect your name, email, phone number, shipping address, and payment details. This information is essential to process and deliver your order.</p>

                <h2 style={h2}>How We Use Your Information</h2>
                <p style={p}>We use your personal data to fulfill orders, send shipping updates, respond to your questions, and improve our service. We may also send you seasonal offers and updates about new harvests if you opt in.</p>

                <h2 style={h2}>Data Sharing</h2>
                <p style={p}>We do not sell your personal information to third parties. We share your data only with trusted logistics partners (for delivery) and our payment gateway (Razorpay) to process transactions securely.</p>

                <h2 style={h2}>Cookies</h2>
                <p style={p}>Our website uses cookies to remember your cart, improve site performance, and understand how visitors use our pages. You can disable cookies in your browser settings at any time.</p>

                <h2 style={h2}>Data Security</h2>
                <p style={p}>We use industry-standard SSL encryption for all transactions. Your payment information is processed through Razorpay and we never store your card details on our servers.</p>

                <h2 style={h2}>Your Rights</h2>
                <p style={p}>You can request to view, update, or delete your personal data at any time by contacting us at hello@aamnative.com or calling +91 98765 43210.</p>

                <h2 style={h2}>Contact</h2>
                <p style={p}>For privacy-related questions, contact us at <a href="mailto:hello@aamnative.com" style={{ color: "var(--saffron)" }}>hello@aamnative.com</a>.</p>
            </div>
        </div>
    );
}
