<script>
	import { items } from "./project/items.js";
	import Prometheus from '../components/Prometheus.svelte';

	let title = 'SHIJIE ZHOU | Home';

	function watchTitle() {
		title = 'SHIJIE ZHOU | PORTFOLIO';
	}

	$: watchTitle();
</script>

<style lang="scss">
	@media (min-width: 480px) {
		h1 {
		}
	}

</style>

<svelte:head>
	<title>{title}</title>
	<meta property="og:image" content="logo-192.png" />
</svelte:head>


<Prometheus {items} />