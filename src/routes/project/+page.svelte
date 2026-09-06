<script>
	import { onMount } from 'svelte';
	import { fetchArticles } from '$lib/store/api';
	import { articles } from '$lib/store/store';
	import Loader from '$lib/components/Loader.svelte';
	import Prometheus from '$lib/components/Prometheus.svelte';
	import Quota from '$lib/components/Quota.svelte';
	import Seo from '$lib/components/Seo.svelte';

	let loading = false;

	onMount(async () => {
		loading = true;
		await fetchArticles().then((r) => {
			articles.set(r);
			loading = false;
		});
	});

	const quote = 'The Way Get Started Is To Quit Talking And Begin Doing.';
	const brief = '-- Walt Disney, Entrepreneur, Animator, Writer, Voice actor and Film Producer.';
</script>

<Seo
	title="Project"
	description="A selection of front-end engineering, design and creative coding projects by Shijie Zhou."
	path="/project"
/>

<Quota {brief} {quote} title="Project:" />

<Loader {loading} />

<Prometheus items={$articles} />