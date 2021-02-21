<script>
    import { onMount } from 'svelte';
    import { fetchConsociations } from "../store/api";
    import Loader from "@/components/Loader.svelte";
    import Prometheus from "@/components/Prometheus.svelte";
    import {consociations} from "../store/store";

    let loading = false;
    const title = "SHIJIE ZHOU | Consociation";

    onMount( async () => {
        loading = true;
        await fetchConsociations().then( ( r ) => {
            consociations.set( r );
            loading = false;
        } );
    } );

</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Loader {loading}/>

<Prometheus items={$consociations}/>

