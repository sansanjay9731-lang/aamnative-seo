import { MetadataRoute } from 'next';
import { products } from '@/lib/products';
import { deliveryCities, varieties, stateData, comparisons, comboPages } from '@/lib/seo-data';
import { posts } from '@/lib/posts';

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
        '/mango/alphonso',
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
        lastModified: new Date(post.date).toISOString(),
        changeFrequency: 'yearly' as const,
        priority: 0.7,
    }));

    const cityRoutes = Object.values(deliveryCities).map((city) => ({
        url: `${BASE_URL}/mango/delivery/${city.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const varietyRoutes = Object.entries(varieties)
        .filter(([key]) => key !== 'alphonso')
        .map(([, variety]) => ({
            url: `${BASE_URL}/mango/${variety.slug}`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }));

    const stateRoutes = Object.values(stateData).map((state) => ({
        url: `${BASE_URL}/mango/delivery/state/${state.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    const comparisonRoutes = comparisons.map((c) => ({
        url: `${BASE_URL}/mango/compare/${c.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    const comboRoutes = comboPages.map((c) => ({
        url: `${BASE_URL}/mango/${c.variety}/${c.city}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [
        ...staticRoutes,
        ...productRoutes,
        ...blogRoutes,
        ...cityRoutes,
        ...varietyRoutes,
        ...stateRoutes,
        ...comparisonRoutes,
        ...comboRoutes,
    ];
}
}
