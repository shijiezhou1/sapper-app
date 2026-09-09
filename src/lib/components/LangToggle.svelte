<script>
	import { page } from '$app/stores';
	import { localizedPath, stripLocale } from '$lib/i18n';

	let { lang = 'en' } = $props();

	const targetLang = $derived(lang === 'zh' ? 'en' : 'zh');

	const href = $derived(
		localizedPath(stripLocale($page.url.pathname) || '/', targetLang)
	);
</script>

<a
	class="lang-toggle"
	{href}
	hreflang={targetLang}
	rel="alternate"
	aria-label={targetLang === 'zh' ? '切换到中文' : 'Switch to English'}
>{targetLang === 'zh' ? '中' : 'EN'}</a>

<style>
	.lang-toggle {
		background: none;
		border: 1px solid var(--border-color);
		border-radius: 50%;
		width: 36px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		color: var(--accent);
		font-size: 12px;
		font-weight: 600;
		transition: background-color 0.2s, border-color 0.2s;
		flex-shrink: 0;
		text-decoration: none;
		padding: 0;
	}

	.lang-toggle:hover {
		background-color: var(--bg-surface);
		border-color: var(--accent);
	}
</style>
