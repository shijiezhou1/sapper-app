<script>
    import { onMount } from 'svelte';
    import { fetchPosts } from "../../store/api";
    import articles from "../../store/store";
    import Loader from "../../components/Loader.svelte";
    import Prometheus from "../../components/Prometheus.svelte";


    import Quota from "../../components/Quota.svelte";

    let loading = false;
    onMount( async () => {
        loading = true;
        await fetchPosts().then( ( r ) => {
            articles.set( r );
            loading = false;
        } );
    } );

    const title = "SHIJIE ZHOU | Project"
    const quote = "The Way Get Started Is To Quit Talking And Begin Doing."
    const brief = "-- Walt Disney, Entrepreneur, Animator, Writer, Voice actor and Film Producer."
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Quota {brief} {quote} title="Project:"/>

<Loader {loading}/>

<Prometheus items={$articles}/>

