<script>
	import { page } from '$app/stores';
	import { SITE } from '$lib/config';
	import { localizedPath } from '$lib/i18n';

	let {
		title,
		description = SITE.description,
		path = '/',
		type = 'website',
		image = SITE.image,
		noindex = false,
		jsonLd = null
	} = $props();

	const lang = $derived($page.data.lang || 'en');

	const enUrl = $derived(`${SITE.url}${encodeURI(path)}`);
	const zhUrl = $derived(`${SITE.url}${encodeURI(localizedPath(path, 'zh'))}`);
	const canonical = $derived(lang === 'zh' ? zhUrl : enUrl);

	const formattedTitle = $derived(
		title.trim().endsWith(SITE.name) ? title.trim() : `${title.trim()} | ${SITE.name}`
	);

	const jsonLdHtml = $derived(
		jsonLd
			? `<script type="application/ld+json">${JSON.stringify(jsonLd)}` + '</scr' + 'ipt>'
			: ''
	);
</script>

<svelte:head>
	<title>{formattedTitle}</title>

	<meta name="description" content={description} />
	<meta name="author" content={SITE.author} />
	<link rel="canonical" href={canonical} />
	<link rel="alternate" hreflang="en" href={enUrl} />
	<link rel="alternate" hreflang="zh" href={zhUrl} />
	<link rel="alternate" hreflang="x-default" href={enUrl} />
	{#if noindex}
		<meta name="robots" content="noindex, nofollow" />
	{/if}

	<meta property="og:site_name" content={SITE.name} />
	<meta property="og:locale" content={lang === 'zh' ? 'zh_CN' : 'en_US'} />
	<meta property="og:locale:alternate" content={lang === 'zh' ? 'en_US' : 'zh_CN'} />
	<meta property="og:type" content={type} />
	<meta property="og:title" content={formattedTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={image} />
	<meta property="og:image:alt" content={SITE.name} />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={formattedTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />

	{#if jsonLdHtml}
		<!-- svelte-ignore a11y_invalid_attribute -->
		{@html jsonLdHtml}
	{/if}
</svelte:head>
