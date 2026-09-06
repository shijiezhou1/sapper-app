<script>
	import { onMount } from 'svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { navigations } from '$lib/config';
	import { cdnPath } from '$lib/store/store';
	import { fetchCurrentAddress } from '$lib/store/api';
	import { initTheme } from '$lib/store/theme';

	import '$lib/style/global.scss';

	let { children } = $props();

	let theme = $state('light');

	const buildStamp = (() => {
		const d = new Date();
		const pad = (/** @type {number} */ n) => String(n).padStart(2, '0');
		return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
	})();

	onMount(async () => {
		theme = initTheme();
		await fetchCurrentAddress().then((r) => {
			cdnPath.set(r);
		});
	});

	/** @param {'light' | 'dark'} next */
	function handleThemeToggle(next) {
		theme = next;
	}
</script>

<div class="app-container">
	<header>
		<Nav {navigations} {theme} onToggle={handleThemeToggle} />
	</header>

	<main>
		<div class="content">
			{@render children()}
		</div>
	</main>

	<footer class="footer-container">
		Created by&nbsp;Shijie Zhou 2015 - &copy; {new Date().getFullYear()}
	</footer>

	<div class="build-version" title="Site build date">{buildStamp}</div>
</div>

<style lang="scss">
	.app-container {
		flex: 1 1 auto;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		max-width: 100%;
		position: relative;
	}

	main {
		position: relative;
		max-width: 768px;
		padding: 20px;
		margin: 0 auto;
		box-sizing: border-box;
		flex: 1 1 auto;
		height: 100%;
		width: 100%;

		@media (max-width: 414px) {
			padding: 10px;
		}
	}

	.content {
		flex: 1 1 auto;
		height: 100%;
		width: 100%;
	}

	.footer-container {
		font-size: 10px;
		align-items: center;
		display: flex;
		flex: 0 1 auto !important;
		flex-wrap: wrap;
		padding: 6px 16px;
		position: relative;
		transition-duration: 0.2s;
		transition-property: background-color, left, right;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	.build-version {
		position: fixed;
		bottom: 4px;
		right: 8px;
		font-size: 10px;
		line-height: 1.4;
		padding: 2px 6px;
		border-radius: 4px;
		border: 1px solid var(--border-color);
		background-color: var(--bg-submenu);
		color: var(--bg-text);
		opacity: 0.55;
		z-index: 10;
		user-select: none;
		pointer-events: none;
	}
</style>