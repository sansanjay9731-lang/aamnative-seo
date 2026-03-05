import { MetadataRoute } from 'next';

const BASE_URL = 'https://aamnative.com';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/admin/',
                    '/checkout/',
                    '/cart/',
                    '/track-order',
                ],
            },
            {
                userAgent: ['GPTBot', 'CCBot', 'anthropic-ai', 'Omgilibot', 'Omgili'],
                disallow: ['/'],
            },
            {
                userAgent: ['Googlebot-Image'],
                allow: ['/'],
            },
            {
                userAgent: ['ChatGPT-User', 'Google-Extended', 'CCBot', 'Omgilibot', 'Omgili', 'FacebookBot', 'Discordbot', 'Slackbot', 'PerplexityBot', 'YouBot', 'Bytespider', 'ClaudeBot', 'Amazonbot', 'Applebot', 'Baiduspider', 'Bingbot', 'DuckDuckBot', 'YandexBot', 'AhrefsBot', 'SemrushBot', 'DotBot', 'Exabot', 'MJ12bot', 'MauiBot', 'PetalBot', 'Pinterestbot', 'Qwantify', 'SeznamBot', 'Sogou web spider', 'Twitterbot', 'VivaldiBot', 'WhatsApp', 'Yahoo! Slurp', 'ZoominfoBot'],
                disallow: ['/'],
            }
        ],
    };
}
