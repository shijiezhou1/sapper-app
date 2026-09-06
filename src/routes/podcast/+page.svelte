<script>
	import { onMount } from 'svelte';
	import { fetchPodcasts } from '$lib/store/api';
	import Loader from '$lib/components/Loader.svelte';
	import Prometheus from '$lib/components/Prometheus.svelte';
	import { podcasts } from '$lib/store/store';
	import Seo from '$lib/components/Seo.svelte';

	let loading = false;

	onMount(async () => {
		loading = true;
		await fetchPodcasts().then((r) => {
			podcasts.set(r);
			loading = false;
		});
	});
</script>

<Seo
	title="Podcast"
	description="Podcasts listened to and recommended by Shijie Zhou."
	path="/podcast"
/>

<Loader {loading} />

<Prometheus items={$podcasts} />