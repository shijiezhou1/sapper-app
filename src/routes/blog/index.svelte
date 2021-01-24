<script context="module">
	// export function preload() {
	// 	return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
	// 		return { posts };
	// 	});
	// }
</script>

<script>
	import { onMount } from 'svelte';
	import { fetchMedium } from "@/store/api";
	import Loader from "@/components/Loader.svelte";
	import { medium } from "@/store/store";
	import Quota from "@/components/Quota.svelte";

	let result = null;
	let loading = false;
	const title = 'SHIJIE ZHOU | Blog';
	const quote = "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.";
	const brief = "- Albert Einstein Theoretical Physicist"

	onMount( async () => {
		loading = true;
		await fetchMedium().then( ( r ) => {
			result = r;
			medium.set( r );
			console.log( { medium: $medium } )
			loading = false;
		} );
	} );

</script>

<style lang="scss">
	@mixin screenWidth {
		width: 80%;
		margin: auto;
	}

	.blog-container {
		&-categories {
			@include screenWidth;
			margin-bottom: 50px;

			span {
				color: grey;
				font-size: 12px;
				text-transform: uppercase;
				padding-right: 10px;
			}
		}

		&-pubtime {
			@include screenWidth;
		}
	}

	:global(.medium-feed-image a img) {
		width: 100%;
		height: 320px;
		@media (max-width: 414px) {
			height: 120px;
		}
	}

	:global(.medium-feed-item p) {
		@include screenWidth;
	}

	:global(.medium-feed-image a) {
		display: flex;
		justify-content: center;
	}

	:global(.medium-feed-snippet) {
		font-size: 20px;
		font-weight: bold;
	}
</style>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Loader {loading}/>

<Quota {brief} {quote} title="Blog:"/>

<div class="blog-container">
	{#each $medium as _, index}
		<div>
			{@html _.content}
			<div class="blog-container-pubtime">{_.pubDate} - {_.creator}</div>
			<div class="blog-container-categories">
				{#each _.categories as __, index}
					<span>{__}</span>
				{/each}
			</div>
		</div>
	{/each}
</div>
