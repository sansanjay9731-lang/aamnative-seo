import { MetadataRoute } from 'next';

const BASE_URL = 'https://aamnative.com';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/api/',
                '/admin/', // If there's ever an admin path, keep it out of search
            ],
        },
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}
