<script>
	import { onMount } from 'svelte';
	import { fetchConsociations } from '$lib/store/api';
	import Loader from '$lib/components/Loader.svelte';
	import Prometheus from '$lib/components/Prometheus.svelte';
	import { consociations } from '$lib/store/store';
	import Seo from '$lib/components/Seo.svelte';

	let loading = false;

	onMount(async () => {
		loading = true;
		await fetchConsociations().then((r) => {
			consociations.set(r);
			loading = false;
		});
	});
</script>

<Seo
	title="Consociation"
	description="Communities, events and collaborations involving Shijie Zhou."
	path="/consociation"
/>

<Loader {loading} />

<Prometheus items={$consociations} />