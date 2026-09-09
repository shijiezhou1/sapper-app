<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { fetchMedium } from '$lib/store/api';
	import Loader from '$lib/components/Loader.svelte';
	import { medium } from '$lib/store/store';
	import Quota from '$lib/components/Quota.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { pageDict } from '$lib/i18n';

	let loading = $state(false);

	const lang = $derived($page.data.lang || 'en');
	const t = $derived(pageDict(lang).blog);

	onMount(async () => {
		loading = true;
		await fetchMedium().then((r) => {
			medium.set(r);
			loading = false;
		});
	});
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

<Quota brief={t.brief} quote={t.quote} title={t.heading} />

<div class="blog-container">
	{#each $medium as item}
		<div>
			<a href={item.link}>
				<div class="blog-container-img" style="background-image: url('{item.base64Data}')"></div>
				<div class="blog-container-title">{item.contentSnippet}</div>
			</a>
			<div class="blog-container-pubtime">{item.pubDate} - {item.creator}</div>
			<div class="blog-container-categories">
				{#each item.categories as cat}
					<span>{cat}</span>
				{/each}
			</div>
		</div>
	{/each}
</div>

<Seo title={t.title} description={t.description} path="/blog" />
