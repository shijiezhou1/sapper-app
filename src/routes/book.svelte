<script>
    import { onMount } from 'svelte';
    import { fetchBooks } from "@/store/api";
    import Loader from "@/components/Loader.svelte";
    import Prometheus from "@/components/Prometheus.svelte";
    import {books} from "@/store/store";

    let result = null;
    let loading = false;
    const title = "SHIJIE ZHOU | Book";

    onMount( async () => {
        loading = true;
        await fetchBooks().then( ( r ) => {
            result = r;
            books.set( r );
            loading = false;
        } );
    } );

</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Loader {loading}/>

<Prometheus items={$books}/>

