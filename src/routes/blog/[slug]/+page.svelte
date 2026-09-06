<script>
	import Seo from '$lib/components/Seo.svelte';
	import { SITE } from '$lib/config';

	let { data } = $props();

	const { post } = $derived(data);

	/** @param {string} html */
	function cleanupHTML(html) {
		return html.replace(/(<([^>]+)>)/gi, '').replace(/\n|<br>|\s/g, ' ').trim();
	}

	const description = $derived(cleanupHTML(post.html));

	const jsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: post.title,
		description,
		url: `${SITE.url}/blog/${post.slug}`,
		mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
		author: { '@type': 'Person', name: SITE.author, url: SITE.url },
		publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url }
	});
</script>

<Seo
	title={post.title}
	description={description}
	path={`/blog/${post.slug}`}
	type="article"
	jsonLd={jsonLd}
/>

<style>
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}
</style>

<h1>{post.title}</h1>

<div class="content">
	{@html post.html}
</div>