import { error } from '@sveltejs/kit';
import { locales } from '$lib/i18n';

export function load({ params }) {
	const lang = params.lang || 'en';
	if (!locales.includes(lang)) {
		error(404, 'Not Found');
	}
	return { lang };
}
