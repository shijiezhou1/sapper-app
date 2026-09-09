<script>
	import { page } from '$app/stores';
	import Seo from '$lib/components/Seo.svelte';
	import { pageDict } from '$lib/i18n';

	const lang = $derived($page.data.lang || 'en');
	const t = $derived(pageDict(lang).expedition);
</script>

<Seo title={t.title} description={t.description} path="/expedition" />

{t.heading}
