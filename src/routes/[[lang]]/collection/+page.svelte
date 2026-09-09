<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Quota from '$lib/components/Quota.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { fetchCollection } from '$lib/store/api';
	import { pageDict } from '$lib/i18n';

	const lang = $derived($page.data.lang || 'en');
	const t = $derived(pageDict(lang).collection);

	/** @type {Array<{ src: string; alt?: string }>} */
	let slides = $state([]);

	onMount(async () => {
		await fetchCollection().then((res) => {
			slides = res;
		});
	});

	const swipeConfig = {
		autoplay: false,
		delay: 2000,
		showIndicators: true,
		transitionDuration: 1000,
		defaultIndex: 0
	};
</script>

<Seo title={t.title} description={t.description} path="/collection" />

<style lang="scss">
	.swipe-holder {
		height: 47vh;
		width: 100%;

		@media (max-width: 414px) {
			height: 25vh;
		}
	}
</style>

<Quota brief={t.brief} quote={t.quote} title={t.heading} />

{#if slides.length > 0}
	<div class="swipe-holder">
		<Carousel items={slides} {...swipeConfig} />
	</div>
{/if}
