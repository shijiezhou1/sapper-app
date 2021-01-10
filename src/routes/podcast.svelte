<script>
    import { onMount } from 'svelte';
    import { fetchPodcasts } from "../store/api";
    import Loader from "@/components/Loader.svelte";
    import Prometheus from "@/components/Prometheus.svelte";
    import { podcasts } from "../store/store";

    let result = null;
    let loading = false;

    onMount( async () => {
        loading = true;
        await fetchPodcasts().then( ( r ) => {
            result = r;
            podcasts.set( r );
            loading = false;
        } );
    } );

</script>

<Loader {loading}/>

<Prometheus items={$podcasts}/>

