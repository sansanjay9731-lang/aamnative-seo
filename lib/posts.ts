export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string; // HTML content or rich text
    image: string;
    date: string;
    readTime: string;
    author: string;
}

export const posts: BlogPost[] = [
    {
        slug: "why-rathnagiri-alphonso",
        title: "Why Rathnagiri Alphonso is the World's Most Coveted Mango",
        excerpt: "The Konkan coast of Maharashtra has a unique microclimate that makes Rathnagiri the undisputed capital of Alphonso mangos. Here's what makes them so special.",
        content: `
            <p>The Alphonso mango, often hailed as the "King of Fruits," reaches its absolute pinnacle in the red laterite soils of the Rathnagiri district in Maharashtra. But why is this specific region so perfect?</p>
            <h2>The Microclimate Magic</h2>
            <p>Rathnagiri's unique geographical location—sandwiched between the Arabian Sea and the Western Ghats—creates a perfect storm for mango cultivation. The salty sea breeze, combined with the intense pre-monsoon heat and the specific mineral composition of the volcanic soil, gives the Rathnagiri Alphonso its iconic saffron-yellow color, buttery texture, and unmistakable aroma.</p>
            <h2>GI Certification: Why it Matters</h2>
            <p>Just like Champagne must come from the Champagne region of France, a true Rathnagiri Alphonso is protected by a Geographical Indication (GI) tag. This ensures that when you buy a GI-certified mango, you are tasting the authentic terroir of the Konkan coast, not an imitation grown elsewhere.</p>
            <h2>The Aam Native Difference</h2>
            <p>At Aam Native, our trees have been drinking in this unique environment since 1968. We don't just sell mangos; we share a piece of Rathnagiri's heritage in every box.</p>
        `,
        image: "/images/tree-ripe-mango.jpg",
        date: "March 2026",
        readTime: "4 min read",
        author: "Aam Native Family"
    },
    {
        slug: "how-we-ripen-mangos",
        title: "Natural vs Carbide Ripening: How We Keep Your Mangos Safe",
        excerpt: "Did you know that most mangos in India are ripened with calcium carbide, a banned chemical? We use traditional wood-shaving beds and here's why it matters.",
        content: `
            <p>When you eagerly slice into an Alphonso mango, the last thing you want to consume are harmful chemical residues. Unfortunately, the pressure to bring fruit to market quickly means many sellers use calcium carbide, a practice we vehemently oppose at Aam Native.</p>
            <h2>The Danger of Calcium Carbide</h2>
            <p>Often referred to as "masala" in the local trade, calcium carbide forces the fruit to turn yellow quickly but often leaves the inside hard and sour. More importantly, it can contain traces of arsenic and phosphorus, posing significant health risks.</p>
            <h2>Our Traditional Ripening Process</h2>
            <p>Patience is our primary ingredient. Once harvested, our mangos are carefully placed in single layers on beds of natural grass or wood shavings in well-ventilated rooms. The natural ethylene gas released by the mangos slowly and safely ripens the entire batch. This process, known as "aadi," can take several days but rewards you with:</p>
            <ul>
                <li>Uniform, deep saffron color</li>
                <li>Incredible natural sweetness</li>
                <li>A room-filling, authentic aroma</li>
                <li>Total peace of mind</li>
            </ul>
        `,
        image: "/images/farm-harvest-crates.jpg",
        date: "March 2026",
        readTime: "5 min read",
        author: "Aam Native Farm Manager"
    },
    {
        slug: "perfect-aamras-recipe",
        title: "How to Make the Perfect Aamras at Home",
        excerpt: "There's nothing quite like a bowl of chilled aamras with hot pooris. Our simple recipe uses just 4 ingredients and takes under 10 minutes.",
        content: `
            <p>Aamras (literally "mango juice" or nectar) is a quintessential summer delicacy in Maharashtra and Gujarat. While you can make aamras with any mango, an authentic Rathnagiri Alphonso elevates it to an ethereal experience.</p>
            <h2>Ingredients</h2>
            <ul>
                <li>4 ripe Aam Native Rathnagiri Alphonso mangos</li>
                <li>1-2 tablespoons powdered sugar (adjust based on the sweetness of the mangos)</li>
                <li>A pinch of saffron strands (kesar) soaked in 1 tbsp warm milk</li>
                <li>A pinch of cardamom powder (elaichi)</li>
                <li>A splash of milk or water (optional, to adjust consistency)</li>
            </ul>
            <h2>Instructions</h2>
            <ol>
                <li>Wash the mangos thoroughly. Gently massage the whole mango with your thumbs to soften the pulp inside.</li>
                <li>Peel the mangos and extract all the pulp into a bowl. Squeeze the seed (gutli) firmly to ensure no pulp is wasted.</li>
                <li>Transfer the pulp to a blender. Add the sugar, soaked saffron, and cardamom powder.</li>
                <li>Blend until perfectly smooth. Add a splash of milk if you prefer a thinner consistency.</li>
                <li>Chill in the refrigerator for at least an hour before serving with hot, puffy pooris.</li>
            </ol>
            <p>Pro tip: The quality of the mango dictates the quality of the aamras. Always use naturally ripened, GI-certified Alphonso for the best results.</p>
        `,
        image: "/images/box-premium-golden.jpg",
        date: "February 2026",
        readTime: "3 min read",
        author: "Aam Native Kitchen"
    },
    {
        slug: "alphonso-season-guide",
        title: "Alphonso Season Guide: When to Buy and What to Expect",
        excerpt: "Alphonso season runs from mid-March to late June. Here's a week-by-week breakdown of sweetness, availability, and the best times to order.",
        content: `
            <p>Every year, mango lovers ask us: "When is the best time to order?" The Rathnagiri Alphonso season is short but spectacular, naturally evolving as summer progresses.</p>
            <h2>Early Season (Mid-March to Mid-April)</h2>
            <p>The first harvest. Mangos arriving now are a delicacy, offering a delightful balance of sweet and slightly tangy notes. The aroma is fresh, and the flesh is firm. This is usually the most expensive period due to low supply.</p>
            <h2>Peak Season (Mid-April to Late May)</h2>
            <p>This is the golden window. The intense summer heat means the mangos are ripening perfectly on the tree before harvest. You can expect peak sweetness, maximum aroma, and deep saffron-colored pulp. This is the ideal time to buy bulk boxes for eating fresh and making aamras.</p>
            <h2>Late Season (Early June onwards)</h2>
            <p>As the monsoon winds begin, the season winds down. The mangos are incredibly sweet, often bursting with juice. However, they are also more delicate and have a shorter shelf life. Once the first heavy rains hit the Konkan coast, the season officially ends.</p>
            <p>To ensure you get your boxes during the peak window, we always recommend pre-ordering.</p>
        `,
        image: "/images/farm-full-tree.jpg",
        date: "February 2026",
        readTime: "4 min read",
        author: "Aam Native Team"
    },
    {
        slug: "how-to-identify-real-alphonso",
        title: "How to Identify a Real GI-Certified Ratnagiri Alphonso Mango",
        excerpt: "Beware of chemically ripened imitations from other states. Here is the definitive guide to spotting a genuine Ratnagiri Hapus by its shape, scent, and origin.",
        content: `
            <p>During peak summer, the markets are flooded with mangos claiming to be "Ratnagiri Alphonso." Unfortunately, up to 80% of these are cheaper varieties from other states, often chemically ripened to look the part. If you're paying a premium, you deserve the real thing. Here is how to guarantee you're buying an authentic, GI-Certified Ratnagiri Alphonso.</p>
            
            <h2>1. The Aroma Test (The Most Important Rule)</h2>
            <p>A genuine Ratnagiri Alphonso announces its presence before you even see it. A single authentic, naturally ripened Hapus can fill an entire room with a sweet, intoxicating, and slightly musky aroma. If you have to press your nose against the skin to smell it, it is likely an imitation or chemically ripened.</p>
            
            <h2>2. The Shape and Visuals</h2>
            <p>Look for the signature shape: oval, slightly oblique, and containing no prominent "beak" at the bottom (unlike a Totapuri). A real Alphonso is medium-sized, typically weighing between 200g and 300g.</p>
            <p><strong>Color:</strong> It shouldn't be uniformly bright yellow. Naturally ripened Alphonso mangos have a gradient of golden yellow, often with a slight saffron or amber blush, and occasionally tiny green patches near the stem.</p>
            
            <h2>3. The Touch and Feel</h2>
            <p>Gently press the mango. It should yield slightly to your touch but remain firm. If it's rock-hard but bright yellow, it has been treated with calcium carbide. If it's overly squishy, it is overripe or damaged.</p>
            
            <h2>4. Look for the GI Tag</h2>
            <p>The Geographical Indication (GI) tag is a legal certification that the mango was grown in the specific microclimate of the Konkan region (Ratnagiri, Sindhudurg, etc.). At <strong>Aam Native</strong>, every single box we ship comes with our verified GI certification number, guaranteeing 100% traceability back to our orchards.</p>
            
            <h2>5. The Price Reality</h2>
            <p>Authentic Ratnagiri Alphonso farming is labor-intensive, and the yields are relatively low compared to other commercial varieties. If the price seems "too good to be true" (e.g., ₹500 for a dozen in April), you are almost certainly buying a different variety labeled as Hapus.</p>
        `,
        image: "/images/box-premium-golden.jpg",
        date: "February 2026",
        readTime: "6 min read",
        author: "Aam Native Farm Manager"
    },
    {
        slug: "devgad-vs-ratnagiri-alphonso",
        title: "Devgad vs Ratnagiri Alphonso: Which is the Best Mango?",
        excerpt: "An in-depth comparison of India's two most premium Alphonso varieties. Understand the subtle differences in taste, aroma, skin thickness, and season timing.",
        content: `
            <p>If there's one debate that divides Indian mango lovers every summer, it's the legendary rivalry between Devgad and Ratnagiri Alphonso (Hapus). While both are geographically protected (GI-tagged) and belong to the same Konkan belt in Maharashtra, distinct microclimates yield slightly different fruit profiles.</p>
            
            <h2>1. Taste and Sweetness</h2>
            <p><strong>Ratnagiri:</strong> Known for an explosive, complex sweetness that coats the palate. It often finishes with a very mild, pleasant tanginess that balances the sugar completely.</p>
            <p><strong>Devgad:</strong> Generally perceived as sweeter on a pure Brix scale. The Devgad variety is intensely sugary with almost zero tartness, making it highly preferred by those with a pure sweet tooth.</p>
            
            <h2>2. Aroma and Fragrance</h2>
            <p><strong>Ratnagiri:</strong> The undisputed king of aroma. A single ripe Ratnagiri Alphonso can perfume an entire house. The scent is deep, musky, and floral.</p>
            <p><strong>Devgad:</strong> While highly fragrant, the aroma is slightly milder and more localized compared to the room-filling scent of the Ratnagiri.</p>
            
            <h2>3. Visuals and Skin</h2>
            <p><strong>Ratnagiri:</strong> Features a slightly thinner skin. The color transition during ripening is typically a beautiful gradient from green to golden yellow, often developing an amber or saffron blush on the shoulders.</p>
            <p><strong>Devgad:</strong> Tends to have a slightly thicker skin, which makes it slightly more robust during transport. It often attains a very uniform, deep saffron-yellow color when fully ripe.</p>
            
            <h2>4. Season Timing</h2>
            <p>Because Devgad is situated slightly further south, its harvest typically begins 1-2 weeks earlier than Ratnagiri's. Devgad mangos are usually the first premium Alphonso to hit the markets in early to mid-March, followed closely by Ratnagiri.</p>
            
            <h2>The Verdict</h2>
            <p>There is no "loser" here; it's a matter of preference. If you prioritize absolute, unadulterated sweetness and an earlier arrival, Devgad is a masterpiece. However, if you seek the iconic, room-filling aroma and a complex, balanced flavor profile, the <strong>Ratnagiri Alphonso</strong> remains the gold standard.</p>
        `,
        image: "/images/tree-ripe-mango.jpg",
        date: "March 2026",
        readTime: "5 min read",
        author: "Aam Native Team"
    },
    {
        slug: "mango-season-calendar-india-2026",
        title: "Mango Season Calendar India 2026: When to Buy Every Variety",
        excerpt: "Don't miss the window for your favorite mango! From early Alphonso to late-season Langra and Chausa, here is the definitive 2026 harvest calendar.",
        content: `
            <p>The Indian mango season is a rolling wave of harvests that sweeps up the subcontinent from March to August. Because different regions experience summer at different times, the arrival of various mango types is highly staggered. We've compiled the ultimate 2026 calendar so you know exactly when to order.</p>
            
            <h2>March: The Royal Beginning</h2>
            <ul>
                <li><strong>Devgad & Ratnagiri Alphonso (Maharashtra):</strong> The season starts with a bang. Early harvests begin arriving by mid-March. Supply is low and prices are premium, but the quality is extraordinary.</li>
                <li><strong>Badami (Karnataka):</strong> Often called the "Alphonso of the South," Badami starts appearing in late March.</li>
            </ul>
            
            <h2>April: Peak Alphonso & The Southern Kings</h2>
            <ul>
                <li><strong>Ratnagiri Alphonso (Maharashtra):</strong> April is peak season for Hapus. The intense heat ensures perfect natural ripening.</li>
                <li><strong>Banganapalli / Safeda (Andhra Pradesh):</strong> Large, fiberless, and very sweet, this staple of the South dominates markets heavily in April.</li>
                <li><strong>Totapuri (South India):</strong> Excellent for salads and pickles, its season kicks off in mid-April.</li>
            </ul>
            
            <h2>May: The Arrival of Kesar & Dasheri</h2>
            <ul>
                <li><strong>Gir Kesar (Gujarat):</strong> The "Queen of Mangos" arrives in May. Famous for its saffron hue and perfect aamras texture.</li>
                <li><strong>Malihabad Dasheri (Uttar Pradesh):</strong> Sweet, long, and practically fiberless, the North Indian favorite starts to peak.</li>
            </ul>
            
            <h2>June: The Northern Heavyweights</h2>
            <ul>
                <li><strong>Langra (Uttar Pradesh / Bihar):</strong> Recognizable by its green skin even when fully ripe, Langra peaks in mid-June with a very distinct, intense sweetness.</li>
                <li><strong>Himsagar (West Bengal):</strong> A highly perishable but incredibly sweet variety that peaks for a very short window in June.</li>
            </ul>
            
            <h2>July - August: The Grand Finale</h2>
            <ul>
                <li><strong>Chausa (North India):</strong> As the monsoon sets in, the incredibly sweet and juicy Chausa concludes the Indian mango season. It's often so soft it's meant to be sucked directly rather than sliced.</li>
            </ul>
            
            <p>To secure authentic, farm-direct varieties during their peak 2-3 week windows, we recommend joining our pre-order waitlists!</p>
        `,
        image: "/images/farm-harvest-crates.jpg",
        date: "March 2026",
        readTime: "7 min read",
        author: "Aam Native Editorial"
    },
    {
        slug: "season-diary-week-1-2026",
        title: "Season Diary: Week 1 Harvest Report & Brix Readings (2026)",
        excerpt: "Our first field report of the 2026 season! We track the pre-monsoon heatwave, our first harvest Brix test, and what it means for your mango boxes.",
        content: `
            <p>Welcome to the Aam Native Season Diary! Transparency is our core value, which is why every week during the harvest, we publish real data straight from our Ratnagiri orchards. This isn't marketing—this is farming.</p>

            <h2>Weather Report: The Pre-Monsoon Bake</h2>
            <p>The first week of March 2026 has been intensely hot across the Konkan belt. Daytime highs pushed slightly above 36°C (97°F). While uncomfortable for us, this intense, dry heat is exactly what the Alphonso trees need to force the sugars into the fruit during their final weeks on the branch.</p>
            <p>The sea breeze coming off the Arabian Sea each evening has kept the humidity perfectly balanced, ensuring the skin remains taut and free from cracking.</p>

            <h2>Brix Readings: The First Test</h2>
            <p>We conducted our first randomized Brix testing (the scientific measurement of sugar content) on a sample of early-fallen and selectively picked fruit from our oldest grove.</p>
            <p><strong>Target Peak Brix for Ratnagiri Alphonso:</strong> 18.0 to 22.0</p>
            <p><strong>Week 1 Reading:</strong> 16.5 to 17.8</p>
            <p><strong>What this means:</strong> The mangos are perfectly on track. While not at their absolute peak sugar content yet (which usually hits in mid-April), this first batch has a phenomenal, complex tanginess mixed with the classic deep sweetness. It's a connoisseur's mango right now.</p>

            <h2>Harvest Plan & Dispatch Update</h2>
            <p>We are officially beginning our selective harvesting. Right now, our teams are scanning the trees, picking only the fruit that shows the distinct fullness around the "shoulders" (the area near the stem) and the slight color break signaling natural maturity.</p>
            <p>Our first batch of <strong>Premium Grade</strong> boxes is scheduled to dispatch this coming Tuesday via air cargo to Mumbai and Delhi.</p>

            <p>Stay tuned for next week's report, where we'll cover the transition from the tree to the traditional hay ripening beds!</p>
        `,
        image: "/images/farm-full-tree.jpg",
        date: "March 2026",
        readTime: "3 min read",
        author: "Aam Native Agronomist"
    }
];
