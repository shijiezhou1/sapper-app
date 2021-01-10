<script>

    import { onMount } from 'svelte';
    import { fetchPosts } from "../../store/api";
    import { articles } from "./../../store/store";
    import Loader from "../../components/Loader.svelte";

    let result = null;
    let loading = false;

    onMount( async () => {
        loading = true;
        await fetchPosts().then( ( r ) => {
            result = r;
            articles.set( r );
            loading = false;
        } );
    } );

</script>

<Loader {loading}/>

<p>
  {$articles}
</p>

