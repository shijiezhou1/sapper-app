<script>
	import { page } from '$app/stores';
	import Quota from '$lib/components/Quota.svelte';
	import SocialMedia from '$lib/components/SocialMedia.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { pageDict } from '$lib/i18n';

	const lang = $derived($page.data.lang || 'en');
	const t = $derived(pageDict(lang).contact);
</script>

<Seo title={t.title} description={t.description} path="/contact" />

<Quota brief={t.brief} quote={t.quote} title={t.heading} />

<SocialMedia />
