<script>
	import { page } from '$app/stores';
	import { items } from '$lib/project/items.js';
	import Prometheus from '$lib/components/Prometheus.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { SITE } from '$lib/config';
	import { pageDict } from '$lib/i18n';

	let newItem = items.slice(0, 9);

	const lang = $derived($page.data.lang || 'en');
	const t = $derived(pageDict(lang).home);

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		url: `${SITE.url}/`,
		name: SITE.name,
		description: SITE.description,
		inLanguage: ['en', 'zh'],
		author: { '@type': 'Person', name: SITE.author, url: SITE.url }
	};
</script>

<Seo title={t.title} path="/" jsonLd={jsonLd} />

<h1 class="sr-only">{t.h1}</h1>

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
