import { PrismaClient } from "@prisma/client";
import { products } from "../lib/products";

const prisma = new PrismaClient();

async function main() {
    console.log("Start seeding...");

    for (const p of products) {
        const product = await prisma.product.upsert({
            where: { slug: p.slug },
            update: {}, // We don't update if it already exists in the seed
            create: {
                slug: p.slug,
                name: p.name,
                grade: p.grade,
                tagline: p.tagline,
                description: p.description,
                price: p.price,
                originalPrice: p.originalPrice,
                pieces: p.pieces,
                weight: p.weight,
                boxWeight: p.boxWeight,
                badge: p.badge,
                badgeColor: p.badgeColor,
                image: p.image,
                galleryImages: JSON.stringify(p.galleryImages),
                rating: p.rating,
                reviewCount: p.reviewCount,
                inStock: p.inStock,
                features: JSON.stringify(p.features),
                whyChoose: JSON.stringify(p.whyChoose),
                nutrition: JSON.stringify(p.nutrition),
                reviews: JSON.stringify(p.reviews),
                faqs: JSON.stringify(p.faqs),
                recipes: JSON.stringify(p.recipes),
            },
        });
        console.log(`Created product: ${product.slug}`);
    }

    console.log("Seeding finished.");
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
