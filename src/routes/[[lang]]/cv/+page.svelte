<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Seo from '$lib/components/Seo.svelte';
	import { RESUME_URL } from '$lib/config';
	import { pageDict } from '$lib/i18n';

	let curWidth = $state(0);

	const lang = $derived($page.data.lang || 'en');
	const t = $derived(pageDict(lang).cv);

	onMount(() => {
		curWidth = window.innerWidth;
	});

	const handleResize = () => {
		curWidth = window.innerWidth;
	};
</script>

<Seo title={t.title} description={t.description} path="/cv" />

<svelte:window onresize={handleResize} />

{#if curWidth > 0}
	<iframe
		frameborder="0"
		height="100%"
		width={curWidth + 'px'}
		src={RESUME_URL}
		class="cv-iframe"
		title="cv"
		scrolling="no"
	></iframe>
{/if}

<style lang="scss">
	.cv-iframe {
		width: 100%;
		overflow: hidden;
		height: 100%;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}
</style>
