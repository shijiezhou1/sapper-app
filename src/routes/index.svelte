<script>
	import { items } from "./project/items.js";
	import Prometheus from '../components/Prometheus.svelte';

	let title = 'SHIJIE ZHOU';

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
</svelte:head>


<Prometheus {items} />