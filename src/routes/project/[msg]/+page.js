import { error } from '@sveltejs/kit';
import { items } from '$lib/project/items.js';

export const entries = () => items.map((item) => ({ msg: item.msg }));

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const project = items.find((r) => r.msg === params.msg);

	if (!project) {
		throw error(404, 'Not found');
	}

	return { project };
}