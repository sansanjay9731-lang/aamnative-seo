export default function ShippingPolicyPage() {
    const h2: React.CSSProperties = { fontFamily: "'Fraunces', serif", fontSize: "1.25rem", fontWeight: 700, margin: "2rem 0 0.75rem" };
    const p: React.CSSProperties = { color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.8, marginBottom: "0.75rem" };

    return (
        <div style={{ paddingTop: "calc(var(--header-h) + 2rem)" }}>
            <div className="container" style={{ maxWidth: "720px", padding: "2rem 1.25rem 4rem" }}>
                <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "2rem", fontWeight: 700, marginBottom: "0.25rem" }}>Shipping Policy</h1>
                <p style={{ ...p, marginBottom: "2rem" }}>How we get farm-fresh mangos to your doorstep</p>

                <h2 style={h2}>Delivery Coverage</h2>
                <p style={p}>We deliver pan-India across all major cities and towns. Our cold-chain logistics ensure your mangos stay fresh from our Rathnagiri farm to your home.</p>

                <h2 style={h2}>Delivery Timeline</h2>
                <p style={p}>Orders placed before 2 PM are dispatched the same day. Delivery typically takes 24 to 48 hours for metro cities (Mumbai, Pune, Delhi, Bangalore, Hyderabad, Chennai, Kolkata) and 48 to 72 hours for other locations.</p>

                <h2 style={h2}>Shipping Charges</h2>
                <p style={p}>We offer free shipping on all orders above ₹999. For orders below ₹999, a flat delivery charge of ₹99 applies.</p>

                <h2 style={h2}>Packaging</h2>
                <p style={p}>Each box is carefully packed with natural hay bedding and foam separators to prevent bruising during transit. Premium grade orders come in gift-quality wooden-finish boxes.</p>

                <h2 style={h2}>Order Tracking</h2>
                <p style={p}>Once your order is dispatched, you will receive a tracking link via SMS and WhatsApp. You can also track your order on our <a href="/track-order" style={{ color: "var(--saffron)" }}>Track My Order</a> page.</p>

                <h2 style={h2}>Delivery Issues</h2>
                <p style={p}>If your order is delayed beyond the expected delivery window, please contact us immediately at +91 98765 43210 or WhatsApp us. We will investigate and provide a resolution within 24 hours.</p>
            </div>
        </div>
    );
}
