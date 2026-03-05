// This file serves as the core "data spreadsheet" for Aam Native's programmatic SEO pages.

export const farmData = {
    locations: ["Ratnagiri", "Sindhudurg", "Raigad"],
    soilType: "Red Laterite",
    treeAges: "30-60+ years",
    certifications: ["GI Tagged", "Zero Carbide", "Naturally Ripened"],
    harvestSeason: "Mid-March to Late June",
};

export interface VarietyData {
    name: string;
    slug: string;
    description: string;
    brixRange: string;
    seasonWindow: string;
    pricingRange: string;
    nutritionalData: {
        calories: string;
        vitaminC: string;
        dietaryFiber: string;
    };
}

export interface CityData {
    name: string;
    slug: string;
    deliveryTimeline: string;
    shippingPartners: string[];
    popularPinCodes: string[];
    volumeDemand: "Very High" | "High" | "Medium" | "Low";
}

export const varieties: Record<string, VarietyData> = {
    alphonso: {
        name: "Ratnagiri Alphonso (Hapus)",
        slug: "alphonso",
        description: "The universally undisputed King of Mangos, grown in the unique microclimate of the Konkan coast.",
        brixRange: "18 - 22°",
        seasonWindow: "March 15 - June 20",
        pricingRange: "₹1,500 - ₹3,500 per dozen",
        nutritionalData: {
            calories: "60 kcal per 100g",
            vitaminC: "36.4 mg",
            dietaryFiber: "1.6 g"
        }
    },
    kesar: {
        name: "Gir Kesar Mango",
        slug: "kesar",
        description: "Known as the 'Queen of Mangos', Kesar boasts a unique saffron color, exceptional fragrance, and a balanced sweet-tangy flavor perfect for aamras.",
        brixRange: "16 - 19°",
        seasonWindow: "Mid-April - July",
        pricingRange: "₹800 - ₹1,800 per dozen",
        nutritionalData: {
            calories: "58 kcal per 100g",
            vitaminC: "32.0 mg",
            dietaryFiber: "1.8 g"
        }
    },
    dasheri: {
        name: "Malihabad Dasheri",
        slug: "dasheri",
        description: "A North Indian favorite from Uttar Pradesh, distinguished by its elongated shape, fiberless sweet pulp, and thin skin.",
        brixRange: "14 - 18°",
        seasonWindow: "May - July",
        pricingRange: "₹600 - ₹1,400 per dozen",
        nutritionalData: {
            calories: "55 kcal per 100g",
            vitaminC: "29.0 mg",
            dietaryFiber: "1.5 g"
        }
    },
    langra: {
        name: "Varanasi Langra",
        slug: "langra",
        description: "Intensely sweet and slightly fibrous, Langra retains its green skin even when fully ripe, hiding a lemon-yellow, juicy interior.",
        brixRange: "16 - 21°",
        seasonWindow: "Mid-June - August",
        pricingRange: "₹500 - ₹1,200 per dozen",
        nutritionalData: {
            calories: "59 kcal per 100g",
            vitaminC: "34.0 mg",
            dietaryFiber: "1.7 g"
        }
    },
    banganapalli: {
        name: "Banganapalli (Safeda)",
        slug: "banganapalli",
        description: "The pride of Andhra Pradesh. These large, plump mangos feature a smooth, spotless yellow skin and firm, fiberless flesh.",
        brixRange: "15 - 18°",
        seasonWindow: "April - June",
        pricingRange: "₹400 - ₹1,000 per dozen",
        nutritionalData: {
            calories: "54 kcal per 100g",
            vitaminC: "30.0 mg",
            dietaryFiber: "2.0 g"
        }
    }
};

export const deliveryCities: Record<string, CityData> = {
    mumbai: {
        name: "Mumbai",
        slug: "mumbai",
        deliveryTimeline: "24 Hours (Next Day Delivery)",
        shippingPartners: ["BlueDart", "Aam Native Direct Fleet"],
        popularPinCodes: ["400001", "400050", "400052", "400053", "400004", "400012", "400014"],
        volumeDemand: "Very High"
    },
    delhi: {
        name: "Delhi NCR",
        slug: "delhi",
        deliveryTimeline: "48 - 72 Hours",
        shippingPartners: ["Delhivery Air", "BlueDart Air"],
        popularPinCodes: ["110001", "110011", "110020", "110024", "110048"],
        volumeDemand: "High"
    },
    bangalore: {
        name: "Bangalore",
        slug: "bangalore",
        deliveryTimeline: "48 Hours",
        shippingPartners: ["Delhivery Air", "BlueDart Air"],
        popularPinCodes: ["560001", "560034", "560038", "560102"],
        volumeDemand: "High"
    },
    pune: {
        name: "Pune",
        slug: "pune",
        deliveryTimeline: "24 Hours (Next Day Delivery)",
        shippingPartners: ["Aam Native Direct Fleet"],
        popularPinCodes: ["411001", "411004", "411007", "411014"],
        volumeDemand: "High"
    },
    hyderabad: {
        name: "Hyderabad",
        slug: "hyderabad",
        deliveryTimeline: "48 Hours",
        shippingPartners: ["Delhivery Air", "BlueDart Air"],
        popularPinCodes: ["500001", "500034", "500081", "500032"],
        volumeDemand: "High"
    },
    chennai: {
        name: "Chennai",
        slug: "chennai",
        deliveryTimeline: "48 - 72 Hours",
        shippingPartners: ["Delhivery Air", "BlueDart Air"],
        popularPinCodes: ["600001", "600020", "600034", "600040"],
        volumeDemand: "Medium"
    },
    kolkata: {
        name: "Kolkata",
        slug: "kolkata",
        deliveryTimeline: "48 - 72 Hours",
        shippingPartners: ["Delhivery Air", "BlueDart Air"],
        popularPinCodes: ["700001", "700019", "700029", "700071"],
        volumeDemand: "Medium"
    },
    ahmedabad: {
        name: "Ahmedabad",
        slug: "ahmedabad",
        deliveryTimeline: "24 - 48 Hours",
        shippingPartners: ["Delhivery Surface", "BlueDart Air"],
        popularPinCodes: ["380001", "380015", "380054"],
        volumeDemand: "High"
    },
    surat: {
        name: "Surat",
        slug: "surat",
        deliveryTimeline: "24 - 48 Hours",
        shippingPartners: ["Delhivery Surface", "BlueDart Air"],
        popularPinCodes: ["395001", "395003", "395007"],
        volumeDemand: "Medium"
    },
    jaipur: {
        name: "Jaipur",
        slug: "jaipur",
        deliveryTimeline: "48 - 72 Hours",
        shippingPartners: ["Delhivery Air", "BlueDart Air"],
        popularPinCodes: ["302001", "302004", "302015"],
        volumeDemand: "Medium"
    },
    lucknow: {
        name: "Lucknow",
        slug: "lucknow",
        deliveryTimeline: "48 - 72 Hours",
        shippingPartners: ["Delhivery Air", "BlueDart Air"],
        popularPinCodes: ["226001", "226010", "226016"],
        volumeDemand: "Medium"
    },
    kanpur: {
        name: "Kanpur",
        slug: "kanpur",
        deliveryTimeline: "48 - 72 Hours",
        shippingPartners: ["Delhivery Air"],
        popularPinCodes: ["208001", "208012", "208011"],
        volumeDemand: "Medium"
    },
    nagpur: {
        name: "Nagpur",
        slug: "nagpur",
        deliveryTimeline: "24 - 48 Hours",
        shippingPartners: ["Delhivery Surface", "BlueDart Air"],
        popularPinCodes: ["440001", "440010", "440022"],
        volumeDemand: "Medium"
    },
    indore: {
        name: "Indore",
        slug: "indore",
        deliveryTimeline: "48 - 72 Hours",
        shippingPartners: ["Delhivery Air"],
        popularPinCodes: ["452001", "452009", "452010"],
        volumeDemand: "Medium"
    },
    bhopal: {
        name: "Bhopal",
        slug: "bhopal",
        deliveryTimeline: "48 - 72 Hours",
        shippingPartners: ["Delhivery Air"],
        popularPinCodes: ["462001", "462003", "462016"],
        volumeDemand: "Medium"
    },
    patna: {
        name: "Patna",
        slug: "patna",
        deliveryTimeline: "72 Hours",
        shippingPartners: ["Delhivery Air", "BlueDart Express"],
        popularPinCodes: ["800001", "800013", "800014"],
        volumeDemand: "Medium"
    },
    vadodara: {
        name: "Vadodara",
        slug: "vadodara",
        deliveryTimeline: "24 - 48 Hours",
        shippingPartners: ["Delhivery Surface", "BlueDart Air"],
        popularPinCodes: ["390001", "390007", "390020"],
        volumeDemand: "Medium"
    },
    ludhiana: {
        name: "Ludhiana",
        slug: "ludhiana",
        deliveryTimeline: "72 Hours",
        shippingPartners: ["Delhivery Air", "BlueDart Express"],
        popularPinCodes: ["141001", "141002", "141003"],
        volumeDemand: "Medium"
    },
    agra: {
        name: "Agra",
        slug: "agra",
        deliveryTimeline: "48 - 72 Hours",
        shippingPartners: ["Delhivery Air"],
        popularPinCodes: ["282001", "282002", "282004"],
        volumeDemand: "Medium"
    },
    nashik: {
        name: "Nashik",
        slug: "nashik",
        deliveryTimeline: "24 - 48 Hours",
        shippingPartners: ["Aam Native Direct Fleet", "Delhivery Surface"],
        popularPinCodes: ["422001", "422003", "422009"],
        volumeDemand: "Medium"
    },
    faridabad: {
        name: "Faridabad",
        slug: "faridabad",
        deliveryTimeline: "48 - 72 Hours",
        shippingPartners: ["Delhivery Air"],
        popularPinCodes: ["121001", "121002", "121004"],
        volumeDemand: "Medium"
    },
    meerut: {
        name: "Meerut",
        slug: "meerut",
        deliveryTimeline: "48 - 72 Hours",
        shippingPartners: ["Delhivery Air"],
        popularPinCodes: ["250001", "250002", "250004"],
        volumeDemand: "Low"
    },
    rajkot: {
        name: "Rajkot",
        slug: "rajkot",
        deliveryTimeline: "24 - 48 Hours",
        shippingPartners: ["Delhivery Surface", "BlueDart Air"],
        popularPinCodes: ["360001", "360002", "360005"],
        volumeDemand: "Low"
    },
    kalyan: {
        name: "Kalyan-Dombivali",
        slug: "kalyan-dombivali",
        deliveryTimeline: "24 Hours (Next Day Delivery)",
        shippingPartners: ["Aam Native Direct Fleet"],
        popularPinCodes: ["421301", "421201", "421202"],
        volumeDemand: "Medium"
    },
    vasai_virar: {
        name: "Vasai-Virar",
        slug: "vasai-virar",
        deliveryTimeline: "24 Hours (Next Day Delivery)",
        shippingPartners: ["Aam Native Direct Fleet"],
        popularPinCodes: ["401201", "401202", "401209"],
        volumeDemand: "Medium"
    },
    varanasi: {
        name: "Varanasi",
        slug: "varanasi",
        deliveryTimeline: "48 - 72 Hours",
        shippingPartners: ["Delhivery Air"],
        popularPinCodes: ["221001", "221002", "221005"],
        volumeDemand: "Low"
    },
    srinagar: {
        name: "Srinagar",
        slug: "srinagar",
        deliveryTimeline: "72 - 96 Hours",
        shippingPartners: ["BlueDart Express"],
        popularPinCodes: ["190001", "190008", "190010"],
        volumeDemand: "Low"
    },
    aurangabad: {
        name: "Aurangabad",
        slug: "aurangabad",
        deliveryTimeline: "24 - 48 Hours",
        shippingPartners: ["Delhivery Surface"],
        popularPinCodes: ["431001", "431005", "431003"],
        volumeDemand: "Medium"
    },
    dhanbad: {
        name: "Dhanbad",
        slug: "dhanbad",
        deliveryTimeline: "72 Hours",
        shippingPartners: ["Delhivery Air", "BlueDart Express"],
        popularPinCodes: ["826001", "828104", "828106"],
        volumeDemand: "Low"
    },
    amritsar: {
        name: "Amritsar",
        slug: "amritsar",
        deliveryTimeline: "72 Hours",
        shippingPartners: ["Delhivery Air"],
        popularPinCodes: ["143001", "143002", "143006"],
        volumeDemand: "Low"
    },
    allahabad: {
        name: "Prayagraj (Allahabad)",
        slug: "prayagraj",
        deliveryTimeline: "48 - 72 Hours",
        shippingPartners: ["Delhivery Air"],
        popularPinCodes: ["211001", "211002", "211003"],
        volumeDemand: "Low"
    },
    ranchi: {
        name: "Ranchi",
        slug: "ranchi",
        deliveryTimeline: "72 Hours",
        shippingPartners: ["Delhivery Air", "BlueDart Express"],
        popularPinCodes: ["834001", "834002", "834008"],
        volumeDemand: "Low"
    }
};

// ── State groupings for state-level aggregation pages ──
export const states: Record<string, { name: string; slug: string; cities: string[] }> = {
    maharashtra: {
        name: "Maharashtra",
        slug: "maharashtra",
        cities: ["mumbai", "pune", "nagpur", "nashik", "aurangabad", "kalyan", "vasai_virar"],
    },
    gujarat: {
        name: "Gujarat",
        slug: "gujarat",
        cities: ["ahmedabad", "surat", "vadodara", "rajkot"],
    },
    delhi_ncr: {
        name: "Delhi NCR",
        slug: "delhi-ncr",
        cities: ["delhi", "faridabad", "meerut"],
    },
    karnataka: {
        name: "Karnataka",
        slug: "karnataka",
        cities: ["bangalore"],
    },
    telangana: {
        name: "Telangana",
        slug: "telangana",
        cities: ["hyderabad"],
    },
    tamil_nadu: {
        name: "Tamil Nadu",
        slug: "tamil-nadu",
        cities: ["chennai"],
    },
    west_bengal: {
        name: "West Bengal",
        slug: "west-bengal",
        cities: ["kolkata"],
    },
    rajasthan: {
        name: "Rajasthan",
        slug: "rajasthan",
        cities: ["jaipur"],
    },
    uttar_pradesh: {
        name: "Uttar Pradesh",
        slug: "uttar-pradesh",
        cities: ["lucknow", "kanpur", "agra", "varanasi", "allahabad"],
    },
    madhya_pradesh: {
        name: "Madhya Pradesh",
        slug: "madhya-pradesh",
        cities: ["indore", "bhopal"],
    },
    bihar: {
        name: "Bihar",
        slug: "bihar",
        cities: ["patna"],
    },
    punjab: {
        name: "Punjab",
        slug: "punjab",
        cities: ["ludhiana", "amritsar"],
    },
    jharkhand: {
        name: "Jharkhand",
        slug: "jharkhand",
        cities: ["ranchi", "dhanbad"],
    },
    jammu_kashmir: {
        name: "Jammu & Kashmir",
        slug: "jammu-kashmir",
        cities: ["srinagar"],
    },
};

// ── Comparison data for variety-vs-variety pages ──
export interface ComparisonPair {
    slug: string;
    varietyA: keyof typeof varieties;
    varietyB: keyof typeof varieties;
    title: string;
    metaTitle: string;
    metaDescription: string;
    verdict: string;
    comparisonPoints: { label: string; a: string; b: string }[];
    faqs: { q: string; a: string }[];
}

export const comparisons: ComparisonPair[] = [
    {
        slug: "alphonso-vs-kesar",
        varietyA: "alphonso",
        varietyB: "kesar",
        title: "Alphonso vs Kesar Mango: Which Is Better?",
        metaTitle: "Alphonso vs Kesar Mango | Taste, Price & Nutrition Compared (2026)",
        metaDescription: "Detailed comparison of Alphonso and Kesar mangoes. Compare taste, sweetness (Brix), price, season, origin, and nutritional value. Find out which mango is best for you.",
        verdict: "Alphonso wins on aroma and sweetness intensity, Kesar wins on value and aamras texture. For premium gifting, choose Alphonso. For daily eating and recipes, Kesar is unbeatable.",
        comparisonPoints: [
            { label: "Origin", a: "Ratnagiri, Maharashtra", b: "Junagadh/Gir, Gujarat" },
            { label: "Sweetness (Brix)", a: "18–22°", b: "16–19°" },
            { label: "Season", a: "March–June", b: "April–July" },
            { label: "Price Range", a: "₹1,500–₹3,500/doz", b: "₹800–₹1,800/doz" },
            { label: "Texture", a: "Creamy, fiberless", b: "Smooth, slightly pulpy" },
            { label: "Aroma", a: "Intense saffron-floral", b: "Sweet, mild fragrance" },
            { label: "Best For", a: "Eating fresh, gifting", b: "Aamras, milkshakes, cooking" },
            { label: "GI Certified", a: "Yes", b: "Yes" },
        ],
        faqs: [
            { q: "Which is sweeter, Alphonso or Kesar?", a: "Alphonso is sweeter with Brix readings of 18–22° compared to Kesar's 16–19°. However, Kesar has a more balanced sweet-tangy profile that many people prefer in recipes." },
            { q: "Why is Alphonso more expensive than Kesar?", a: "Alphonso commands a premium due to its limited growing region (Ratnagiri/Devgad), shorter harvest window, higher global demand, and GI-certified status. Kesar is more widely cultivated across Gujarat." },
            { q: "Can I use Alphonso for aamras instead of Kesar?", a: "Yes, Alphonso makes excellent aamras. However, Kesar is traditionally preferred for aamras in Gujarat because its pulp-to-fiber ratio creates a thicker, smoother consistency." },
        ],
    },
    {
        slug: "alphonso-vs-dasheri",
        varietyA: "alphonso",
        varietyB: "dasheri",
        title: "Alphonso vs Dasheri Mango: Complete Comparison",
        metaTitle: "Alphonso vs Dasheri Mango | Taste, Price & Season Compared (2026)",
        metaDescription: "Alphonso vs Dasheri mango comparison. Compare sweetness, fiber, pricing, season dates, and which variety is best for eating vs cooking. Expert guide.",
        verdict: "Alphonso is the premium choice for pure eating and gifting. Dasheri offers excellent value and is the go-to mango for North Indian households.",
        comparisonPoints: [
            { label: "Origin", a: "Ratnagiri, Maharashtra", b: "Malihabad, Uttar Pradesh" },
            { label: "Sweetness (Brix)", a: "18–22°", b: "14–18°" },
            { label: "Season", a: "March–June", b: "May–July" },
            { label: "Price Range", a: "₹1,500–₹3,500/doz", b: "₹600–₹1,400/doz" },
            { label: "Texture", a: "Creamy, fiberless", b: "Smooth, fiberless, thin skin" },
            { label: "Aroma", a: "Intense saffron-floral", b: "Sweet, mild honeyed" },
            { label: "Best For", a: "Eating fresh, gifting", b: "Eating fresh, juice, desserts" },
            { label: "Shelf Life", a: "3–5 days when ripe", b: "2–3 days when ripe" },
        ],
        faqs: [
            { q: "Is Dasheri a good alternative to Alphonso?", a: "Dasheri is an excellent mango but has a different flavour profile. It's sweeter in a honeyed way vs Alphonso's saffron-floral complexity. For North Indian palates, Dasheri is often the preferred choice." },
            { q: "Which mango has less fiber, Alphonso or Dasheri?", a: "Both are remarkably fiberless. Alphonso has a creamier, more buttery texture while Dasheri has a smooth, more liquid pulp." },
        ],
    },
    {
        slug: "alphonso-vs-langra",
        varietyA: "alphonso",
        varietyB: "langra",
        title: "Alphonso vs Langra Mango: Which Should You Buy?",
        metaTitle: "Alphonso vs Langra Mango | Taste, Season & Price Compared (2026)",
        metaDescription: "Compare Alphonso and Langra mangoes: sweetness, season timing, price, fiber content, and best uses. Find out which variety suits your taste.",
        verdict: "Alphonso arrives earlier in the season with premium sweetness. Langra extends the mango season into August with intense sweetness at a lower price point.",
        comparisonPoints: [
            { label: "Origin", a: "Ratnagiri, Maharashtra", b: "Varanasi, Uttar Pradesh" },
            { label: "Sweetness (Brix)", a: "18–22°", b: "16–21°" },
            { label: "Season", a: "March–June", b: "June–August" },
            { label: "Price Range", a: "₹1,500–₹3,500/doz", b: "₹500–₹1,200/doz" },
            { label: "Texture", a: "Creamy, fiberless", b: "Juicy, slightly fibrous" },
            { label: "Skin When Ripe", a: "Saffron-yellow", b: "Stays green" },
            { label: "Best For", a: "Eating fresh, gifting", b: "Eating fresh, making juice" },
            { label: "Fiber Content", a: "Near zero", b: "Moderate" },
        ],
        faqs: [
            { q: "Does Langra stay green when ripe?", a: "Yes, Langra is unique in that its skin remains green even when fully ripe. Don't judge ripeness by color: press gently and smell for a sweet aroma instead." },
            { q: "Can I get Alphonso and Langra in the same month?", a: "There is a brief overlap in June. Alphonso season ends around mid-June while Langra starts arriving from mid-June. You can enjoy both varieties during this overlap window." },
        ],
    },
    {
        slug: "alphonso-vs-banganapalli",
        varietyA: "alphonso",
        varietyB: "banganapalli",
        title: "Alphonso vs Banganapalli Mango: Head to Head",
        metaTitle: "Alphonso vs Banganapalli (Safeda) Mango | Complete Comparison (2026)",
        metaDescription: "Compare Alphonso and Banganapalli mangoes. Size, sweetness, price, fiber, and best uses compared. Find out which South Indian favourite wins.",
        verdict: "Alphonso is the connoisseur's choice. Banganapalli is the family bulk-buy champion: bigger fruit at lower prices with excellent taste.",
        comparisonPoints: [
            { label: "Origin", a: "Ratnagiri, Maharashtra", b: "Banganapalle, Andhra Pradesh" },
            { label: "Sweetness (Brix)", a: "18–22°", b: "15–18°" },
            { label: "Season", a: "March–June", b: "April–June" },
            { label: "Price Range", a: "₹1,500–₹3,500/doz", b: "₹400–₹1,000/doz" },
            { label: "Size", a: "200–300g", b: "300–500g" },
            { label: "Texture", a: "Creamy, fiberless", b: "Firm, fiberless, juicy" },
            { label: "Skin", a: "Thin, delicate", b: "Smooth, spotless yellow" },
            { label: "Best For", a: "Eating fresh, premium gifting", b: "Daily eating, juice, smoothies" },
        ],
        faqs: [
            { q: "Is Banganapalli good for making mango juice?", a: "Excellent. Banganapalli's high juice content and firm texture make it ideal for juices, smoothies, and mango lassi. It's the most popular juice mango in South India." },
            { q: "Which is bigger, Alphonso or Banganapalli?", a: "Banganapalli is significantly larger (300–500g vs 200–300g for Alphonso). You get more fruit per piece with Banganapalli." },
        ],
    },
    {
        slug: "kesar-vs-dasheri",
        varietyA: "kesar",
        varietyB: "dasheri",
        title: "Kesar vs Dasheri Mango: Gujarat vs UP",
        metaTitle: "Kesar vs Dasheri Mango | Taste, Price & Nutrition Compared (2026)",
        metaDescription: "Compare Kesar and Dasheri mangoes: sweetness, season, price, fiber, origin, and best uses. Find out whether Gujarat's Queen or UP's favourite wins.",
        verdict: "Kesar wins on colour, aamras potential, and aroma. Dasheri wins on price and availability. Both are excellent mid-range choices.",
        comparisonPoints: [
            { label: "Origin", a: "Junagadh/Gir, Gujarat", b: "Malihabad, Uttar Pradesh" },
            { label: "Sweetness (Brix)", a: "16–19°", b: "14–18°" },
            { label: "Season", a: "April–July", b: "May–July" },
            { label: "Price Range", a: "₹800–₹1,800/doz", b: "₹600–₹1,400/doz" },
            { label: "Colour", a: "Deep saffron-orange", b: "Golden yellow" },
            { label: "Texture", a: "Smooth, pulpy", b: "Smooth, thin-skinned" },
            { label: "Best For", a: "Aamras, milkshakes", b: "Eating fresh, juice, desserts" },
            { label: "Aroma", a: "Distinctive saffron note", b: "Sweet, honeyed" },
        ],
        faqs: [
            { q: "Which is better for aamras, Kesar or Dasheri?", a: "Kesar is the traditional choice for aamras in Gujarat and Maharashtra. Its thick pulp and saffron colour make it the gold standard. Dasheri works for aamras too, but the consistency is thinner." },
            { q: "Are both Kesar and Dasheri available in summer?", a: "Yes, they overlap from May to July. Kesar starts a bit earlier (April) while Dasheri peaks in June–July." },
        ],
    },
    {
        slug: "ratnagiri-vs-devgad",
        varietyA: "alphonso",
        varietyB: "alphonso",
        title: "Ratnagiri vs Devgad Alphonso: The Ultimate Hapus Battle",
        metaTitle: "Ratnagiri vs Devgad Alphonso Mango | Which Is Better? (2026)",
        metaDescription: "Compare Ratnagiri and Devgad Alphonso mangoes. Taste, aroma, season timing, shelf life, and price compared. Both are GI-certified Hapus: find out which is best.",
        verdict: "Ratnagiri Alphonso has a more intense aroma and richer sweetness. Devgad Alphonso has firmer flesh and longer shelf life. Both are authentic GI-certified Hapus.",
        comparisonPoints: [
            { label: "District", a: "Ratnagiri", b: "Sindhudurg (Devgad)" },
            { label: "GI Certified", a: "Yes", b: "Yes" },
            { label: "Season Start", a: "Mid-March", b: "Early April" },
            { label: "Season End", a: "Late May", b: "Mid-June" },
            { label: "Aroma", a: "Intense, complex saffron-floral", b: "Moderate, clean saffron" },
            { label: "Texture", a: "Very creamy, thin skin", b: "Slightly firmer, thicker skin" },
            { label: "Shelf Life", a: "3–5 days", b: "5–7 days" },
            { label: "Best For", a: "Immediate eating, connoisseurs", b: "Shipping long distances, bulk orders" },
        ],
        faqs: [
            { q: "Is Ratnagiri Alphonso better than Devgad?", a: "Neither is objectively 'better'; they are both GI-certified Hapus from the Konkan coast. Ratnagiri is prized for more intense aroma and creamier flesh. Devgad is valued for better shelf life and firmness. Aam Native sources exclusively from Ratnagiri for peak flavour." },
            { q: "Why does Ratnagiri Alphonso have stronger aroma?", a: "Ratnagiri's specific microclimate (higher humidity, closer proximity to the coast, and the unique mineral composition of its laterite soil) produces higher concentrations of volatile aromatic compounds in the fruit." },
            { q: "Which Alphonso is easier to ship without damage?", a: "Devgad Alphonso ships better due to firmer flesh and thicker skin. Ratnagiri Alphonso requires more careful handling, which is why Aam Native uses temperature-controlled packaging for every shipment." },
        ],
    },
];

// ── Helper: Get all variety slugs ──
export const varietySlugs = Object.values(varieties).map((v) => v.slug);

// ── Helper: Get all city slugs ──
export const citySlugs = Object.values(deliveryCities).map((c) => c.slug);

// ── Helper: Generate combo pairs (city x variety) ──
// Only generate combos for Alphonso and Kesar (highest search volume)
export const comboVarieties = ["alphonso", "kesar"] as const;

export function getComboSlug(varietySlug: string, citySlug: string): string {
    return `${varietySlug}-mango-${citySlug}-delivery`;
}

export function getAllCombos(): { varietyKey: string; cityKey: string; slug: string }[] {
    const combos: { varietyKey: string; cityKey: string; slug: string }[] = [];
    for (const vKey of comboVarieties) {
        // @ts-ignore
        const variety = varieties[vKey];
        for (const [cKey, city] of Object.entries(deliveryCities)) {
            combos.push({
                varietyKey: vKey,
                cityKey: cKey,
                slug: getComboSlug(variety.slug, city.slug),
            });
        }
    }
    return combos;
}
