<script>
	import { onMount } from 'svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { navigations } from '$lib/config';
	import { cdnPath } from '$lib/store/store';
	import { fetchCurrentAddress } from '$lib/store/api';

	import '$lib/style/global.scss';

	let { children } = $props();

	onMount(async () => {
		await fetchCurrentAddress().then((r) => {
			cdnPath.set(r);
		});
	});
</script>

<div class="app-container">
	<header>
		<Nav {navigations} />
	</header>

	<main>
		<div class="content">
			{@render children()}
		</div>
	</main>

	<footer class="footer-container">
		Created by&nbsp;Shijie Zhou 2015 - &copy; {new Date().getFullYear()}
	</footer>
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
</style>