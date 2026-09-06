<script>
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Exclusive"
	description="Exclusive media and video content from Shijie Zhou."
	path="/exclusive"
/>

<style lang="scss">
	.exclusive-container {
		iframe {
			height: 500px;

			@media (max-width: 414px) {
				height: 240px;
			}
		}
	}
</style>

<div class="exclusive-container">
	<iframe
		allow="autoplay; encrypted-media"
		allowfullscreen
		frameborder="0"
		src="https://www.youtube.com/embed/-lpiBILzK1c"
		title="cv"
		width="100%"
	></iframe>
</div>