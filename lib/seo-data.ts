// This file serves as the core "data spreadsheet" for Aam Native's programmatic SEO pages.

export const farmData = {
    locations: ["Ratnagiri", "Sindhudurg", "Raigad"],
    soilType: "Red Laterite",
    treeAges: "30-60+ years",
    certifications: ["GI Tagged", "Zero Carbide", "Naturally Ripened"],
    harvestSeason: "Mid-March to Late June",
};

export const varieties = {
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

export const deliveryCities = {
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
