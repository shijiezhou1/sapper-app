import { error } from '@sveltejs/kit';
import { items } from '$lib/project/items.js';

export const entries = () =>
	items.flatMap((item) => [{ msg: item.msg }, { msg: item.msg, lang: 'zh' }]);

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const project = items.find((r) => r.msg === params.msg);

	if (!project) {
		throw error(404, 'Not found');
	}

	return { project };
}
