<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { fetchArticles } from '$lib/store/api';
	import { articles } from '$lib/store/store';
	import Loader from '$lib/components/Loader.svelte';
	import Prometheus from '$lib/components/Prometheus.svelte';
	import Quota from '$lib/components/Quota.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { pageDict } from '$lib/i18n';

	let loading = $state(false);

	const lang = $derived($page.data.lang || 'en');
	const t = $derived(pageDict(lang).project);

	onMount(async () => {
		loading = true;
		await fetchArticles().then((r) => {
			articles.set(r);
			loading = false;
		});
	});
</script>

<Seo title={t.title} description={t.description} path="/project" />

<Quota brief={t.brief} quote={t.quote} title={t.heading} />

<Loader {loading} />

<Prometheus items={$articles} />
