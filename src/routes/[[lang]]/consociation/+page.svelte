<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { fetchConsociations } from '$lib/store/api';
	import Loader from '$lib/components/Loader.svelte';
	import Prometheus from '$lib/components/Prometheus.svelte';
	import { consociations } from '$lib/store/store';
	import Seo from '$lib/components/Seo.svelte';
	import { pageDict } from '$lib/i18n';

	let loading = $state(false);

	const lang = $derived($page.data.lang || 'en');
	const t = $derived(pageDict(lang).consociation);

	onMount(async () => {
		loading = true;
		await fetchConsociations().then((r) => {
			consociations.set(r);
			loading = false;
		});
	});
</script>

<Seo title={t.title} description={t.description} path="/consociation" />

<Loader {loading} />

<Prometheus items={$consociations} />
