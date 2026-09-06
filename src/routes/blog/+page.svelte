<script>
	import { onMount } from 'svelte';
	import { fetchMedium } from '$lib/store/api';
	import Loader from '$lib/components/Loader.svelte';
	import { medium } from '$lib/store/store';
	import Quota from '$lib/components/Quota.svelte';
	import Seo from '$lib/components/Seo.svelte';

	let loading = false;
	const quote =
		'Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.';
	const brief = '- Albert Einstein Theoretical Physicist';

	onMount(async () => {
		loading = true;
		await fetchMedium().then((r) => {
			medium.set(r);
			loading = false;
		});
	});
</script>

<Seo
	title="Blog"
	description="Articles and experiments from Shijie Zhou about web development, engineering and design."
	path="/blog"
/>

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
				color: var(--bg-text);
				opacity: 0.5;
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

<Loader {loading} />

<Quota {brief} {quote} title="Blog:" />

<div class="blog-container">
	{#each $medium as item, index}
		<div>
			<a href={item.link}>
				<div class="blog-container-img" style="background-image: url('{item.base64Data}')"></div>
				<div class="blog-container-title">{item.contentSnippet}</div>
			</a>
			<div class="blog-container-pubtime">{item.pubDate} - {item.creator}</div>
			<div class="blog-container-categories">
				{#each item.categories as cat, index}
					<span>{cat}</span>
				{/each}
			</div>
		</div>
	{/each}
</div>