export default function ReturnRefundPolicyPage() {
    const h2: React.CSSProperties = { fontFamily: "'Fraunces', serif", fontSize: "1.25rem", fontWeight: 700, margin: "2rem 0 0.75rem" };
    const p: React.CSSProperties = { color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.8, marginBottom: "0.75rem" };

    return (
        <div style={{ paddingTop: "calc(var(--header-h) + 2rem)" }}>
            <div className="container" style={{ maxWidth: "720px", padding: "2rem 1.25rem 4rem" }}>
                <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "2rem", fontWeight: 700, marginBottom: "0.25rem" }}>Return &amp; Refund Policy</h1>
                <p style={{ ...p, marginBottom: "2rem" }}>Your satisfaction is our priority</p>

                <h2 style={h2}>Freshness Guarantee</h2>
                <p style={p}>We stand behind the quality of every mango we ship. If your mangos arrive damaged, overripe, or not up to the expected quality, we will either replace the entire box or issue a full refund.</p>

                <h2 style={h2}>How to Report an Issue</h2>
                <p style={p}>Contact us within 24 hours of delivery with clear photos of the damaged mangos and your order ID. You can reach us via:</p>
                <ul style={{ ...p, paddingLeft: "1.25rem", listStyleType: "disc" }}>
                    <li>WhatsApp: +91 98765 43210</li>
                    <li>Email: hello@aamnative.com</li>
                    <li>Phone: +91 98765 43210</li>
                </ul>

                <h2 style={h2}>Refund Process</h2>
                <p style={p}>Once we verify the issue, refunds are processed within 3 to 5 business days to your original payment method. Replacement boxes are dispatched within 24 hours of approval.</p>

                <h2 style={h2}>Non-Returnable Items</h2>
                <p style={p}>Due to the perishable nature of mangos, we cannot accept returns of opened or partially consumed boxes. However, if there is a genuine quality concern, we will always work with you to find a fair resolution.</p>

                <h2 style={h2}>Cancellations</h2>
                <p style={p}>Orders can be cancelled within 2 hours of placement for a full refund. Once the order has been packed and dispatched, cancellations are not possible.</p>
            </div>
        </div>
    );
}
