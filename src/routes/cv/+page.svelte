<script>
	import Seo from '$lib/components/Seo.svelte';
	import { RESUME_URL } from '$lib/config';
	import { onMount } from 'svelte';

	let curWidth = $state(0);

	onMount(() => {
		curWidth = window.innerWidth;
	});

	const handleResize = () => {
		curWidth = window.innerWidth;
	};
</script>

<Seo
	title="CV"
	description="Resume and work experience of Shijie Zhou — software engineer and computer artist."
	path="/cv"
/>

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