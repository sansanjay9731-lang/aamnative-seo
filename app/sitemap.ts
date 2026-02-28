import { MetadataRoute } from 'next';
import { products } from '@/lib/products';

const BASE_URL = 'https://aamnative.com';

// Mocked blog entries since blog posts are static in the current code
const blogPosts = [
    { slug: 'why-rathnagiri-alphonso', date: new Date('2026-03-01').toISOString() },
    { slug: 'how-we-ripen-mangos', date: new Date('2026-03-01').toISOString() },
    { slug: 'perfect-aamras-recipe', date: new Date('2026-02-15').toISOString() },
    { slug: 'alphonso-season-guide', date: new Date('2026-02-15').toISOString() },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = [
        '',
        '/about',
        '/products',
        '/faq',
        '/contact',
        '/blog',
        '/privacy-policy',
        '/return-refund-policy',
        '/terms-of-service',
        '/shipping-policy',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const productRoutes = products.map((product) => ({
        url: `${BASE_URL}/products/${product.slug}`,
        lastModified: new Date().toISOString(), // In a real app, update this dynamically based on DB modification dates
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    const blogRoutes = blogPosts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: post.date,
        changeFrequency: 'yearly' as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
