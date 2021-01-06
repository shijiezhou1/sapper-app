<script>
	import { items } from "./project/items.js";
	import Prometheus from '../components/Prometheus.svelte';
</script>

<style lang="scss">
	@media (min-width: 480px) {
		h1 {
		}
	}

</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>


<Prometheus {items} />