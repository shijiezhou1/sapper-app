<script>
	import { items } from "./project/items.js";
	import Prometheus from '../components/Prometheus.svelte';
	import IndexMeta from '../components/IndexMeta.svelte';

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
	<IndexMeta />
</svelte:head>


<Prometheus {items} />