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
	import {medium} from "@/store/store";
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

	function getImageSource( image ) {
		const regex = /src=\"([^"]+)\"/;
		// always check if the image is present before returning
		return image ? image.match( regex )[ 1 ] : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/pike-place.jpg';
	}

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

		&-title {
			font-size: 15px;
			font-weight: bold;
		}
	}

	.blog-container-img {
		background-size: contain;
		background-repeat: no-repeat;
		background-position: 50%;
		width: 100%;
		height: 400px;
		@media (max-width: 414px) {
			height: 200px;
		}
	}

	.blog-container-title {
		margin-top: 10px;
		text-align: center;
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
			<a href="{_.link}">
				<div class="blog-container-img" style="background-image: url('{getImageSource(_.content)}')"></div>
				<div class="blog-container-title">{_.contentSnippet}</div>
			</a>
			<div class="blog-container-pubtime">{_.pubDate} - {_.creator}</div>
			<div class="blog-container-categories">
				{#each _.categories as __, index}
					<span>{__}</span>
				{/each}
			</div>
		</div>
	{/each}
</div>
