import { error } from '@sveltejs/kit';
import posts from '$lib/blog/_posts.js';

export const entries = () =>
	posts.flatMap((post) => [{ slug: post.slug }, { slug: post.slug, lang: 'zh' }]);

const lookup = new Map();
posts.forEach((post) => {
	lookup.set(post.slug, post);
});

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const post = lookup.get(params.slug);

	if (!post) {
		throw error(404, 'Not found');
	}

	return { post };
}
