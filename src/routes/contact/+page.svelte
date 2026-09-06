<script>
	import Quota from '$lib/components/Quota.svelte';
	import SocialMedia from '$lib/components/SocialMedia.svelte';
	import Seo from '$lib/components/Seo.svelte';

	const quote =
		'Tough-minded optimists approach problems with a can-do philosophy and emerge stronger from tragedies';
	const brief = '— Lucius Annaeus Senca, Ancient Roman philosopher';
</script>

<Seo
	title="Contact"
	description="Get in touch with Shijie Zhou — email subscription and social profiles."
	path="/contact"
/>

<Quota {brief} {quote} title="Contact:" />

<SocialMedia />