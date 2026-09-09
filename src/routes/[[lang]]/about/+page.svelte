<script>
	import { page } from '$app/stores';
	import Quota from '$lib/components/Quota.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { SITE } from '$lib/config';
	import { pageDict } from '$lib/i18n';

	const lang = $derived($page.data.lang || 'en');
	const t = $derived(pageDict(lang).about);

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: SITE.author,
		url: SITE.url,
		jobTitle: 'Software Engineer',
		alumniOf: 'University of California, San Diego',
		worksFor: 'Code 9, Pte Ltd',
		image: SITE.image,
		sameAs: Object.values(SITE.social)
	};
</script>

<Seo title={t.title} description={t.description} path="/about" jsonLd={jsonLd} />

<Quota brief={t.brief} quote={t.quote} title={t.heading} />

<style>
	.profile {
		float: right;
		width: 100px;
		height: 100px;
	}
</style>

<p>
	<img alt="Shijie Zhou" class="profile" src="/profile/profile.jpg" loading="lazy" />{t.bio}
</p>

<ul>
	<li>🚀 Developer, Engineer, Innovation Technology amateur.</li>
	<li>🍟 Creating, running and funding new software.</li>
	<li>🥷🏻 Chanllenges of Entreprenuership. </li>
	<li>📈 Stock and Crypto Currecy investor.</li>
</ul>
