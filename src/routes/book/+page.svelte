<script>
	import { onMount } from 'svelte';
	import { fetchBooks } from '$lib/store/api';
	import Loader from '$lib/components/Loader.svelte';
	import Prometheus from '$lib/components/Prometheus.svelte';
	import { books } from '$lib/store/store';
	import Seo from '$lib/components/Seo.svelte';
	let loading = false;

	onMount(async () => {
		loading = true;
		await fetchBooks().then((r) => {
			books.set(r);
			loading = false;
		});
	});
</script>

<Seo title="Book" description="Books Shijie Zhou is reading and learning from." path="/book" />

<Loader {loading} />

<Prometheus items={$books} />