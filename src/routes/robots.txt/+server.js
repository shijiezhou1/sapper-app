import { SITE } from '$lib/config';

export const prerender = true;

export function GET() {
	const body = `# robots.txt for ${SITE.name}
User-agent: *
Allow: /

Sitemap: ${SITE.url}/sitemap.xml
`;

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}