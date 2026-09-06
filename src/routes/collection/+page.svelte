<script>
	import Quota from '$lib/components/Quota.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { onMount } from 'svelte';
	import { fetchCollection } from '$lib/store/api';

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

	const quote =
		'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.';
	const brief =
		'— Antoine de Saint-Exupéry, French writer, poet, aristocrat, journalist and pioneering aviator';
</script>

<Seo
	title="Collection"
	description="Visual experiments and inspiration collected by Shijie Zhou."
	path="/collection"
/>

<style lang="scss">
	.swipe-holder {
		height: 47vh;
		width: 100%;

		@media (max-width: 414px) {
			height: 25vh;
		}
	}
</style>

<Quota {brief} {quote} title="Collection:" />

{#if slides.length > 0}
	<div class="swipe-holder">
		<Carousel items={slides} {...swipeConfig} />
	</div>
{/if}