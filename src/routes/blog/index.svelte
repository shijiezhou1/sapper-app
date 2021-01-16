<script context="module">
	// export function preload() {
	// 	return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
	// 		return { posts };
	// 	});
	// }
</script>

<script>
	// export let posts;

	import { onMount } from 'svelte';
	import { fetchMedium } from "@/store/api";
	import Loader from "@/components/Loader.svelte";
	import { medium } from "@/store/store";

	let result = null;
	let loading = false;

	onMount( async () => {
		loading = true;
		await fetchMedium().then( ( r ) => {
			result = r;
			medium.set( r );
			loading = false;
		} );
	} );

</script>

<style>
	/*ul {*/
	/*	margin: 0 0 1em 0;*/
	/*	line-height: 1.5;*/
	/*}*/
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<Loader {loading}/>

<!--<ul>-->
<!--	{#each $medium as post}-->
<!--		&lt;!&ndash; we're using the non-standard `rel=prefetch` attribute to-->
<!--				tell Sapper to load the data for the page as soon as-->
<!--				the user hovers over the link or taps it, instead of-->
<!--				waiting for the 'click' event &ndash;&gt;-->
<!--&lt;!&ndash;		<li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li>&ndash;&gt;-->
<!--	{/each}-->
<!--</ul>-->
