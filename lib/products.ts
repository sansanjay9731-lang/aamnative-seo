export interface Product {
    id: string;
    slug: string;
    name: string;
    grade: string;
    tagline: string;
    description: string;
    price: number;
    originalPrice: number;
    pieces: number;
    weight: string;
    boxWeight: string;
    badge: "PREMIUM" | "STANDARD" | "BEST VALUE";
    badgeColor: string;
    image: string;
    galleryImages: string[];
    rating: number;
    reviewCount: number;
    inStock: boolean;
    features: string[];
    whyChoose: { icon: string; title: string; desc: string }[];
    nutrition: { label: string; value: string }[];
    reviews: { name: string; location: string; rating: number; comment: string; date: string }[];
    faqs: { q: string; a: string }[];
    recipes: { name: string; desc: string; img: string }[];
}

export const products: Product[] = [
    {
        id: "1",
        slug: "rathnagiri-alphonso-premium",
        name: "Rathnagiri Alphonso Mango",
        grade: "Premium",
        tagline: "The King of All Mangos. Hand Selected, Farm Fresh.",
        description:
            "Experience the pinnacle of Indian mango culture. Our Premium Rathnagiri Alphonso mangos are hand-selected from the finest trees of Rathnagiri district, Maharashtra, the GI-tagged heartland of the world's most coveted mango. Each piece weighs 250g, bursting with saffron-golden pulp, zero fiber, and a fragrance that fills the room.",
        price: 1299,
        originalPrice: 1599,
        pieces: 12,
        weight: "250g each",
        boxWeight: "3 kg box",
        badge: "PREMIUM",
        badgeColor: "from-amber-500 to-yellow-600",
        image: "/images/box-foam-packed.jpg",
        galleryImages: [
            "/images/box-foam-packed.jpg",
            "/images/box-premium-golden.jpg",
            "/images/tree-ripe-mango.jpg",
            "/images/farm-harvest-crates.jpg",
        ],
        rating: 4.9,
        reviewCount: 342,
        inStock: true,
        features: [
            "1 Dozen (12 pieces)",
            "Each mango: 250g",
            "Total box weight: 3 kg",
            "GI Tagged, Rathnagiri, Maharashtra",
            "Zero-fiber, saffron-golden pulp",
            "Naturally ripened. No carbide.",
            "Delivered within 24–48 hours",
            "Gift-ready premium packaging",
        ],
        whyChoose: [
            { icon: "🥇", title: "GI Tagged Origin", desc: "Sourced exclusively from GI-tagged farms in Rathnagiri, the world's most prestigious mango belt." },
            { icon: "🌿", title: "Chemical Free", desc: "100% naturally ripened. No ethylene or carbide. Just sun, rain, and patience." },
            { icon: "🎁", title: "Gift Ready", desc: "Arrives in a premium wooden-finish gift box, perfect for gifting to family and clients." },
            { icon: "✈️", title: "24-hr Farm to Door", desc: "Sorted, packed, and dispatched the same day. Freshness is our promise." },
        ],
        nutrition: [
            { label: "Calories", value: "60 kcal / 100g" },
            { label: "Natural Sugars", value: "14g" },
            { label: "Vitamin C", value: "36mg (60% DV)" },
            { label: "Vitamin A", value: "1082 IU" },
            { label: "Dietary Fiber", value: "1.6g" },
            { label: "Potassium", value: "168mg" },
        ],
        reviews: [
            { name: "Priya S.", location: "Mumbai", rating: 5, comment: "Absolutely divine! The sweetness and aroma is unmatched. My grandfather used to say this is what real Alphonso tastes like, and he was right.", date: "Apr 2026" },
            { name: "Rohan M.", location: "Pune", rating: 5, comment: "Ordered for a corporate gifting event. Everyone loved it. The packaging is stunning and the mangos were perfectly ripe.", date: "May 2026" },
            { name: "Anjali K.", location: "Bangalore", rating: 5, comment: "Best mangos I've had in years. Zero fibrous texture, melts in the mouth. Worth every rupee!", date: "May 2026" },
            { name: "Vikram D.", location: "Hyderabad", rating: 4, comment: "Excellent quality. One or two were slightly soft but the rest were perfect. Will order again.", date: "Apr 2026" },
        ],
        faqs: [
            { q: "How long do these mangos last after delivery?", a: "They last 3–5 days at room temperature once ripened, or up to 2 weeks if kept refrigerated and sliced." },
            { q: "Are these chemically ripened?", a: "Absolutely not. All our mangos are naturally tree-ripened or ethylene-free ripened. We never use calcium carbide." },
            { q: "Can I order as a gift?", a: "Yes! We offer premium gift packaging with a personalized card. Select the gift option at checkout." },
            { q: "What if the mangos arrive damaged?", a: "We have a 100% freshness guarantee. Reach out within 24 hours of delivery and we'll replace or refund." },
        ],
        recipes: [
            { name: "Alphonso Mango Aamras", desc: "Velvety, golden Alphonso puree swirled with saffron threads and crushed cardamom. Served chilled with hot puris, this is the king of Maharashtrian summers.", img: "" },
            { name: "Mango Kulfi", desc: "Creamy, slow-frozen Alphonso kulfi studded with rose petals and crushed pistachios. Melts on your tongue with an explosion of saffron-mango richness.", img: "" },
            { name: "Mango Cake", desc: "Layers of moist sponge drenched in Alphonso cream, crowned with a mountain of fresh mango cubes. The kind of cake that makes birthdays legendary.", img: "" },
        ],
    },
    {
        id: "2",
        slug: "rathnagiri-alphonso-standard",
        name: "Rathnagiri Alphonso Mango",
        grade: "Standard",
        tagline: "Everyday Sweetness. Farm Fresh, Full Flavour.",
        description:
            "Our Standard grade Rathnagiri Alphonso is still the envy of every other mango variety. 14 premium pieces in a 3kg box, sourced from trusted Rathnagiri orchards. Slightly smaller than our premium selection, but every bit as sweet, aromatic and fiberfree. Perfect for daily enjoyment, mango shakes, aamras and more.",
        price: 999,
        originalPrice: 1199,
        pieces: 14,
        weight: "~214g each",
        boxWeight: "3 kg box",
        badge: "STANDARD",
        badgeColor: "from-green-500 to-emerald-600",
        image: "/images/box-newspaper-packed.jpg",
        galleryImages: [
            "/images/box-newspaper-packed.jpg",
            "/images/box-premium-ripened.jpg",
            "/images/tree-single-mango.jpg",
            "/images/tree-closeup-green.jpg",
        ],
        rating: 4.8,
        reviewCount: 218,
        inStock: true,
        features: [
            "14 pieces per box",
            "Approx 214g each",
            "Total box weight: 3 kg",
            "GI Tagged — Rathnagiri, Maharashtra",
            "Rich saffron pulp, full Alphonso aroma",
            "Naturally ripened — No carbide",
            "Delivered within 24–48 hours",
            "Sturdy, eco-friendly packaging",
        ],
        whyChoose: [
            { icon: "💛", title: "Authentic Flavour", desc: "Real Rathnagiri Alphonso, not Kesar, not Totapuri. The genuine GI-tagged variety." },
            { icon: "🌿", title: "Natural Ripening", desc: "No shortcuts. Our mangos ripen in wood shaving beds, the traditional method for superior taste." },
            { icon: "📦", title: "More Pieces", desc: "14 pieces means more sharing joy. Great for families of 4–6." },
            { icon: "💰", title: "Great Value", desc: "Premium Rathnagiri quality at an everyday price point. Best bang for your mango buck." },
        ],
        nutrition: [
            { label: "Calories", value: "58 kcal / 100g" },
            { label: "Natural Sugars", value: "13.7g" },
            { label: "Vitamin C", value: "32mg (53% DV)" },
            { label: "Vitamin A", value: "1010 IU" },
            { label: "Dietary Fiber", value: "1.8g" },
            { label: "Potassium", value: "156mg" },
        ],
        reviews: [
            { name: "Sneha R.", location: "Chennai", rating: 5, comment: "Ordered this for my family and everyone is hooked. The taste is exactly what I remember from my childhood visits to Konkan.", date: "May 2026" },
            { name: "Aditya P.", location: "Delhi", rating: 5, comment: "Sweet, fiberfree and fragrant. Arrived in perfect condition. Will definitely reorder!", date: "Apr 2026" },
            { name: "Meena L.", location: "Coimbatore", rating: 4, comment: "Good quality mangos. One was a bit unripe but the rest were outstanding. Happy with the purchase.", date: "May 2026" },
        ],
        faqs: [
            { q: "What's the difference between Standard and Premium?", a: "Premium mangos are hand-selected for size (250g+ each), uniformity, and appearance. Standard mangos are equally delicious but slightly smaller and with minor cosmetic variation." },
            { q: "Is this good for making aamras?", a: "Yes! Standard grade is perfect for aamras, milkshakes and smoothies. The pulp-to-seed ratio is excellent." },
            { q: "Do you deliver pan-India?", a: "Yes! We deliver across India via express cold-chain courier." },
        ],
        recipes: [
            { name: "Mango Aamras", desc: "The soul of Maharashtra. Silky, saffron-kissed Alphonso puree that coats every inch of your palate. Close your eyes and taste the Konkan coast.", img: "" },
            { name: "Mango Kulfi", desc: "Traditional no-churn kulfi enriched with real Alphonso pulp, sweetened condensed milk, and a shower of pistachio slivers. Pure frozen bliss.", img: "" },
            { name: "Mango Cake", desc: "A triple-layered dream: butter sponge, Alphonso mousse, and a cascade of fresh mango chunks on top. One slice is never enough.", img: "" },
        ],
    },
    {
        id: "3",
        slug: "rathnagiri-alphonso-medium",
        name: "Rathnagiri Alphonso Mango",
        grade: "Medium",
        tagline: "More Mangos, Same Taste. Bulk Delight.",
        description:
            "Get more for less! Our Medium grade Rathnagiri Alphonso brings you 16 pieces in a single 3kg box, making it the ultimate choice for large families, mango lovers who use them for cooking, or anyone who simply wants maximum mango bliss. Same iconic Rathnagiri origin, same fibrefree Alphonso taste.",
        price: 849,
        originalPrice: 999,
        pieces: 16,
        weight: "~188g each",
        boxWeight: "3 kg box",
        badge: "BEST VALUE",
        badgeColor: "from-orange-500 to-red-500",
        image: "/images/box-premium-golden.jpg",
        galleryImages: [
            "/images/box-premium-golden.jpg",
            "/images/tree-mango-hand.jpg",
            "/images/farm-full-tree.jpg",
            "/images/farm-harvest-crates.jpg",
        ],
        rating: 4.7,
        reviewCount: 189,
        inStock: true,
        features: [
            "16 pieces per box",
            "Approx 188g each",
            "Total box weight: 3 kg",
            "GI Tagged — Rathnagiri, Maharashtra",
            "Perfect for cooking, smoothies, aamras",
            "Naturally ripened — No carbide",
            "Delivered within 24–48 hours",
            "Eco-friendly corrugated box",
        ],
        whyChoose: [
            { icon: "🎉", title: "Maximum Pieces", desc: "16 mangos per box, the most pieces per kg. Great for joint families and mango lovers." },
            { icon: "🍹", title: "Cook & Blend Friendly", desc: "Ideal size for aamras, juices, sorbets and chutneys. Same Alphonso taste, practical size." },
            { icon: "🌱", title: "Sustainably Farmed", desc: "Our orchards follow traditional farming practices with minimal chemical intervention." },
            { icon: "🏷️", title: "Best Price", desc: "Our most affordable Rathnagiri Alphonso box. Maximum value without compromising on taste." },
        ],
        nutrition: [
            { label: "Calories", value: "60 kcal / 100g" },
            { label: "Natural Sugars", value: "14g" },
            { label: "Vitamin C", value: "36mg (60% DV)" },
            { label: "Vitamin A", value: "1082 IU" },
            { label: "Dietary Fiber", value: "1.6g" },
            { label: "Potassium", value: "168mg" },
        ],
        reviews: [
            { name: "Kavitha N.", location: "Kolkata", rating: 5, comment: "16 pieces in one box is incredible value! Used them all for aamras, mangoshake and we still had some to eat fresh. Superb quality!", date: "May 2026" },
            { name: "Suresh B.", location: "Ahmedabad", rating: 5, comment: "My kids finished the box in 3 days. That's the highest review I can give. Ordering again!", date: "May 2026" },
            { name: "Lalitha V.", location: "Mysore", rating: 4, comment: "Great for making mango kulfi and ice cream. The flavour is authentic Alphonso. Minor bruising on 2 pieces but rest were perfect.", date: "Apr 2026" },
        ],
        faqs: [
            { q: "How many people does one box serve?", a: "A 16-piece box is great for 6–8 people for fresh eating, or 4–6 people for cooking purposes." },
            { q: "Are medium mangos less sweet than premium?", a: "No! The sweetness and aroma is equally authentic. The only difference is size. Medium mangos are slightly smaller." },
            { q: "Can I order multiple boxes?", a: "Absolutely! You can add multiple boxes to your cart. Bulk orders of 3+ boxes get 5% extra discount." },
        ],
        recipes: [
            { name: "Mango Aamras", desc: "Golden rivers of naturally sweet Alphonso, seasoned with a touch of cardamom. Pair with crisp puris or pour over vanilla ice cream.", img: "" },
            { name: "Mango Kulfi", desc: "Dense, creamy, and utterly addictive. Our Alphonso kulfi with saffron milk and chopped nuts will have you reaching for seconds before the first one melts.", img: "" },
            { name: "Mango Cake", desc: "Fluffy vanilla sponge meets the intoxicating fragrance of ripe Alphonso in this showstopper dessert. Topped with whipped cream and fresh mango jewels.", img: "" },
        ],
    },
];

export const PRODUCE_GALLERY = [
    {
        url: "/images/produce-batch-straw.jpg",
        title: "Konkan Harvest",
        caption: "A fresh batch of Alphonso mangos resting on traditional rice straw for natural ripening.",
        type: "horizontal"
    },
    {
        url: "/images/produce-crate-single.jpg",
        title: "Carefully Crated",
        caption: "Each box is hand-packed with care to ensure the mangos arrive in pristine condition.",
        type: "vertical"
    },
    {
        url: "/images/produce-bowl-ripe.jpg",
        title: "Ready to Savor",
        caption: "The iconic saffron-gold hue of perfectly ripened Rathnagiri Alphonso.",
        type: "vertical"
    },
    {
        url: "/images/produce-crates-three.jpg",
        title: "Quality Control",
        caption: "Strict grading ensures only the finest fruit reaches your doorstep.",
        type: "vertical"
    },
    {
        url: "/images/produce-crates-two.jpg",
        title: "Farm to Table",
        caption: "Directly sourced from our GI-tagged orchard partners in Rathnagiri.",
        type: "vertical"
    }
];
