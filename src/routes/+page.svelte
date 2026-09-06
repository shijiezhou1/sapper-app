<script>
	import { items } from '$lib/project/items.js';
	import Prometheus from '$lib/components/Prometheus.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { SITE } from '$lib/config';

	let newItem = items.slice(0, 9);

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		url: `${SITE.url}/`,
		name: SITE.name,
		description: SITE.description,
		author: { '@type': 'Person', name: SITE.author, url: SITE.url }
	};
</script>

<Seo title="Portfolio" path="/" jsonLd={jsonLd} />

<h1 class="sr-only">{SITE.name} — Portfolio</h1>

<Prometheus items={newItem} />

<style>
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>