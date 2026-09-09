<script>
	import { onMount } from 'svelte';
	import Loader from '$lib/components/Loader.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { SITE } from '$lib/config';
	import { localizedPath } from '$lib/i18n';

	let { data } = $props();

	const { project } = $derived(data);
	const lang = $derived(data.lang || 'en');
	const url = $derived(`${SITE.url}${localizedPath(`/project/${project.msg}`, lang)}`);

	let loading = $state(true);

	const loadingStyle = {
		position: 'fixed',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0
	};

	onMount(() => {
		setTimeout(() => {
			loading = false;
		}, 200);
	});

	/** @param {string} html */
	function cleanupHTML(html) {
		return html.replace(/(<([^>]+)>)/gi, '').replace(/\n|<br>|\s/g, ' ').trim();
	}

	/** @param {string} image */
	function getImageSource(image) {
		const match = image ? image.match(/src="([^"]+)"/) : null;
		return match ? match[1] : SITE.image;
	}

	const description = $derived(cleanupHTML(project.html));
	const image = $derived(getImageSource(project.html));

	const articleJsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'Article',
		inLanguage: lang === 'zh' ? 'zh-CN' : 'en-US',
		headline: project.msg,
		description,
		image,
		url,
		author: { '@type': 'Person', name: SITE.author, url: SITE.url },
		publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url }
	});

	const breadcrumbJsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}${localizedPath('/', lang)}` },
			{ '@type': 'ListItem', position: 2, name: 'Project', item: `${SITE.url}${localizedPath('/project', lang)}` },
			{ '@type': 'ListItem', position: 3, name: project.msg, item: url }
		]
	});
</script>

<Seo
	title={project.msg}
	description={description}
	path={`/project/${project.msg}`}
	type="article"
	image={image}
	jsonLd={[articleJsonLd, breadcrumbJsonLd]}
/>

<h1>{project.msg}</h1>

<div class="content">
	<Loader {loading} {loadingStyle} />
	{@html project.html}
</div>

<style lang="scss">
	.content {
		width: 100%;
	}

	.content :global(img) {
		width: 100%;
	}

	:global(iframe) {
		@media (max-width: 414px) {
			height: 250px;
		}
	}
</style>