<script>
    import { onMount } from 'svelte';
    import { fetchPodcasts } from "../store/api";
    import Loader from "@/components/Loader.svelte";
    import Prometheus from "@/components/Prometheus.svelte";
    import {podcasts} from "../store/store";

    let loading = false;
    const title = "SHIJIE ZHOU | Podcast";

    onMount( async () => {
        loading = true;
        await fetchPodcasts().then( ( r ) => {
            podcasts.set( r );
            loading = false;
        } );
    } );

</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Loader {loading}/>

<Prometheus items={$podcasts}/>

