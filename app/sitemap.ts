import { MetadataRoute } from 'next';
import { products } from '@/lib/products';
import { posts } from '@/lib/posts';
import { varieties, deliveryCities, comparisons, getAllCombos } from '@/lib/seo-data';

const BASE_URL = 'https://aamnative.com';

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
        '/about-our-farms',
        '/cold-chain',
        '/buy-mangoes-online-india',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const productRoutes = products.map((product) => ({
        url: `${BASE_URL}/products/${product.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    const blogRoutes = posts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: post.date.includes('2026') ? new Date().toISOString() : new Date('2026-03-01').toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const varietyRoutes = Object.values(varieties).map((v) => ({
        url: `${BASE_URL}/mango/${v.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const cityRoutes = Object.values(deliveryCities).map((c) => ({
        url: `${BASE_URL}/mango/delivery/${c.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const comboRoutes = getAllCombos().map((combo) => ({
        url: `${BASE_URL}/mango/delivery/${combo.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    const comparisonRoutes = comparisons.map((comp) => ({
        url: `${BASE_URL}/blog/${comp.slug}`, // Assuming they live under /blog/ or similar
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // @ts-ignore
    return [...staticRoutes, ...productRoutes, ...blogRoutes, ...varietyRoutes, ...cityRoutes, ...comboRoutes, ...comparisonRoutes];
}
