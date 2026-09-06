<script>
	import { SITE } from '$lib/config';

	let {
		title,
		description = SITE.description,
		path = '/',
		type = 'website',
		image = SITE.image,
		noindex = false,
		jsonLd = null
	} = $props();

	const canonical = $derived(`${SITE.url}${encodeURI(path)}`);

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
	{#if noindex}
		<meta name="robots" content="noindex, nofollow" />
	{/if}

	<meta property="og:site_name" content={SITE.name} />
	<meta property="og:locale" content={SITE.locale} />
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