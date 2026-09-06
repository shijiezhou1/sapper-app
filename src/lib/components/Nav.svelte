<script>
	import { page } from '$app/stores';
	import { clickOutside } from '$lib/utils/clickOutside.js';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { toggleTheme } from '$lib/store/theme';

	/**
	 * @typedef {{
	 *   text: string, path: string, img?: string,
	 *   subMenu?: Array<{ type: string, text: string, path: string, subText?: string }>
	 * }} Navigation
	 * @typedef {{
	 *   navigations: Array<Navigation>,
	 *   theme?: 'light' | 'dark',
	 *   onToggle?: (next: 'light' | 'dark') => void
	 * }} Props
	 */
	let { navigations, theme = 'light', onToggle = () => {} } = $props();

	/** @type {number | null} */
	let showChild = $state(null);

	/** @param {number | null} index */
	function handleShowNav(index) {
		showChild = index;
	}

	function handleCloseSubMenu() {
		showChild = null;
	}

	function handleToggle() {
		const next = toggleTheme(/** @type {'light' | 'dark'} */ (theme));
		onToggle(next);
	}
</script>

<nav data-theme="light">
	<ul>
		{#each navigations.filter((/** @type {Navigation} */ nav) => nav.text !== 'Home') as nav, i}
			<li>
				<a
					rel="prefetch"
					aria-current={$page.url.pathname === nav.path ? 'page' : undefined}
					onclick={() => handleShowNav(i)}
					href={nav.path}>{nav.text.toUpperCase()}</a
				>
				{#if nav.subMenu && i === showChild}
					<div
						class="subMenu"
						role="menu"
						tabindex="-1"
						use:clickOutside
						onclickoutside={handleCloseSubMenu}
						onmouseleave={() => handleShowNav(null)}
					>
						{#each nav.subMenu as sub, si}
							<a
								class="subMenu-row"
								href={sub.path}
								onclick={handleCloseSubMenu}>{sub.text.toUpperCase()}</a
							>
						{/each}
					</div>
				{/if}
			</li>
		{/each}
		<li class="toggle">
			<ThemeToggle {theme} onToggle={handleToggle} />
		</li>
		{#each navigations.filter((/** @type {Navigation} */ nav) => nav.text === 'Home') as nav}
			<li class="logo">
				<a href={nav.path}>
					<img src={nav.img} alt={nav.img} />
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	nav {
		border-bottom: 1px solid var(--border-color);
		background-color: var(--bg-color);
		color: var(--bg-text);
		position: relative;
	}

	ul {
		margin: 0;
		padding: 0 10px;
		display: flex;
		flex-direction: row;
		background-color: inherit;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		list-style: none;
		background-color: inherit;

		@media (min-width: 414px) {
			&:hover {
				.subMenu {
					display: block;
				}
			}
		}

		a {
			color: var(--bg-text);
		}

		&.logo {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			position: relative;

			img {
				width: 80px;
				height: 32px;
			}

			a {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0;
				margin: 0;
			}
		}
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: var(--accent);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	.subMenu {
		display: block;
		position: absolute;
		z-index: 1;
		border: 1px solid var(--border-color);
		cursor: pointer;
		background-color: var(--bg-submenu);

		&-row {
			padding: 10px;

			&:hover {
				background-color: var(--bg-surface-hover);
			}
		}
	}

	.toggle {
		margin-left: auto;
		margin-right: 8px;
		display: flex;
		align-items: center;
	}
</style>