<script>
	import { onMount } from 'svelte';
	import Loader from '$lib/components/Loader.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { SITE } from '$lib/config';

	let { data } = $props();

	const { project } = $derived(data);

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
		headline: project.msg,
		description,
		image,
		url: `${SITE.url}/project/${project.msg}`,
		author: { '@type': 'Person', name: SITE.author, url: SITE.url },
		publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url }
	});

	const breadcrumbJsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` },
			{ '@type': 'ListItem', position: 2, name: 'Project', item: `${SITE.url}/project` },
			{ '@type': 'ListItem', position: 3, name: project.msg, item: `${SITE.url}/project/${project.msg}` }
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