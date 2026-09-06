<script>
	import Fa from 'svelte-fa';
	import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

	let { theme = 'light', onToggle = () => {} } = $props();
</script>

<button
	type="button"
	class="theme-toggle"
	onclick={() => onToggle()}
	aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
>
	<Fa icon={theme === 'light' ? faMoon : faSun} size="1.2x" />
</button>

<style>
	.theme-toggle {
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
		transition: background-color 0.2s, border-color 0.2s;
		flex-shrink: 0;
	}

	.theme-toggle:hover {
		background-color: var(--bg-surface);
		border-color: var(--accent);
	}
</style>