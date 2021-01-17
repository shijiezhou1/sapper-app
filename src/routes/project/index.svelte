<script>
    import { onMount } from 'svelte';
    import { fetchPosts } from "../../store/api";
    import { articles } from "../../store/store";
    import Loader from "../../components/Loader.svelte";
    import Prometheus from "../../components/Prometheus.svelte";


    import Quota from "../../components/Quota.svelte";

    const headerTitle = 'SHIJIE ZHOU | Project';

    let loading = false;

    onMount( async () => {
        loading = true;
        await fetchPosts().then( ( r ) => {
            articles.set( r );
            loading = false;
        } );
    } );

    const title = "Expedition:"
    const quote = "The Way Get Started Is To Quit Talking And Begin Doing."
    const brief = "-- Walt Disney, Entrepreneur, Animator, Writer, Voice actor and Film Producer."

</script>

<svelte:head>
  <title>{headerTitle}</title>
</svelte:head>

<Quota {brief} {quote} {title}/>

<Loader {loading}/>

<Prometheus items={$articles}/>

