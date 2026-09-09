import { items } from '$lib/project/items.js';
import posts from '$lib/blog/_posts.js';
import { SITE } from '$lib/config';

export const prerender = true;

const staticRoutes = [
	'/',
	'/about',
	'/blog',
	'/project',
	'/book',
	'/collection',
	'/consociation',
	'/contact',
	'/cv',
	'/exclusive',
	'/expedition',
	'/podcast'
];

/** @param {string} value */
const escapeXml = (value) =>
	value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** @param {string} path */
const locUrl = (path) => `${SITE.url}${escapeXml(encodeURI(path))}`;

/** @param {string} path @param {string} [lastmod] */
const urlEntry = (path, lastmod = SITE.lastmod) => {
	const enPath = path === '/' ? '/' : path;
	const zhPath = path === '/' ? '/zh' : `/zh${path}`;
	const en = locUrl(enPath);
	const zh = locUrl(zhPath);
	const alternates =
		`<xhtml:link rel="alternate" hreflang="en" href="${en}"/>` +
		`<xhtml:link rel="alternate" hreflang="zh" href="${zh}"/>` +
		`<xhtml:link rel="alternate" hreflang="x-default" href="${en}"/>`;
	return (
		`	<url><loc>${en}</loc>${alternates}<lastmod>${lastmod}</lastmod></url>\n` +
		`	<url><loc>${zh}</loc>${alternates}<lastmod>${lastmod}</lastmod></url>`
	);
};

export function GET() {
	const urls = [
		...staticRoutes.map((p) => urlEntry(p)),
		...posts.map((post) => urlEntry(`/blog/${post.slug}`)),
		...items.map((item) => urlEntry(`/project/${item.msg}`))
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}