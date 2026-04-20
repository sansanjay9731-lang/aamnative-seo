import { NextResponse } from 'next/server';
import { products } from '@/lib/products';

const BASE_URL = 'https://www.aamnative.com';

export async function GET() {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>Aam Native</title>
    <link>${BASE_URL}</link>
    <description>Authentic GI-certified Ratnagiri Alphonso mangoes.</description>
`;

    products.forEach((product) => {
        const id = product.id;
        const title = `${product.name} - ${product.grade} Grade`;
        const description = product.description;
        const link = `${BASE_URL}/products/${product.slug}`;
        const image_link = `${BASE_URL}${product.image}`;
        const price = `${product.price}.00 INR`;
        const availability = product.inStock ? 'in_stock' : 'out_of_stock';
        const condition = 'new';
        const brand = 'Aam Native';

        xml += `    <item>
      <g:id>${id}</g:id>
      <g:title><![CDATA[${title}]]></g:title>
      <g:description><![CDATA[${description}]]></g:description>
      <g:link>${link}</g:link>
      <g:image_link>${image_link}</g:image_link>
      <g:price>${price}</g:price>
      <g:availability>${availability}</g:availability>
      <g:condition>${condition}</g:condition>
      <g:brand>${brand}</g:brand>
    </item>
`;
    });

    xml += `  </channel>
</rss>`;

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
            // Cache feed for 12 hours since product data rarely changes
            'Cache-Control': 's-maxage=43200, stale-while-revalidate',
        },
    });
}
