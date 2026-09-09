<script>
	import { page } from '$app/stores';
	import Seo from '$lib/components/Seo.svelte';
	import { pageDict } from '$lib/i18n';

	const lang = $derived($page.data.lang || 'en');
	const t = $derived(pageDict(lang).exclusive);
</script>

<Seo title={t.title} description={t.description} path="/exclusive" />

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
		loading="lazy"
	></iframe>
</div>
