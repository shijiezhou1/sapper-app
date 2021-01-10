<script>
    import { onMount } from 'svelte';
    import { fetchPosts } from "@/store/api";
    import { articles } from "@/store/store";
    import Loader from "@/components/Loader.svelte";
    import Prometheus from "@/components/Prometheus.svelte";

    let loading = false;

    onMount( async () => {
        loading = true;
        await fetchPosts().then( ( r ) => {
            articles.set( r );
            loading = false;
        } );
    } );

</script>

<Loader {loading}/>

<Prometheus items={$articles}/>

