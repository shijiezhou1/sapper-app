<script>
	import Seo from '$lib/components/Seo.svelte';
	import { SITE } from '$lib/config';
	import { localizedPath } from '$lib/i18n';

	let { data } = $props();

	const { post } = $derived(data);
	const lang = $derived(data.lang || 'en');
	const url = $derived(`${SITE.url}${localizedPath(`/blog/${post.slug}`, lang)}`);

	/** @param {string} html */
	function cleanupHTML(html) {
		return html.replace(/(<([^>]+)>)/gi, '').replace(/\n|<br>|\s/g, ' ').trim();
	}

	const description = $derived(cleanupHTML(post.html));

	const jsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'Article',
		inLanguage: lang === 'zh' ? 'zh-CN' : 'en-US',
		headline: post.title,
		description,
		url,
		mainEntityOfPage: url,
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
		background-color: var(--bg-surface);
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
