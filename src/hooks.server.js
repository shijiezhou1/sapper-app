/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const lang =
		event.url.pathname === '/zh' || event.url.pathname.startsWith('/zh/') ? 'zh-CN' : 'en';

	return await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('<html lang="en">', `<html lang="${lang}">`)
	});
}
