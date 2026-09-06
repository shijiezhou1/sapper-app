<script>
	/**
	 * @typedef {{
	 *   items?: Array<{ src: string; alt?: string }>,
	 *   autoplay?: boolean,
	 *   delay?: number,
	 *   showIndicators?: boolean,
	 *   transitionDuration?: number
	 * }} Props
	 */
	let {
		items = [],
		autoplay = false,
		delay = 2000,
		showIndicators = true,
		transitionDuration = 1000
	} = $props();

	let index = $state(0);
	/** @type {ReturnType<typeof setInterval> | undefined} */
	let timer;

	function next() {
		index = (index + 1) % items.length;
	}

	/** @param {number} i */
	function goTo(i) {
		index = i;
	}

	$effect(() => {
		if (!autoplay || items.length < 2) return;
		timer = setInterval(next, delay);
		return () => clearInterval(timer);
	});
</script>

<div class="swipe" style={`--swipe-duration: ${transitionDuration}ms`}>
	<div class="track" style={`transform: translateX(-${index * 100}%)`}>
		{#each items as item, i}
			<div
				class="slide"
				role="group"
				aria-roledescription="slide"
				aria-label={`${i + 1} of ${items.length}`}
			>
				<img src={item.src} alt={item.alt ?? item.src} loading="lazy" />
			</div>
		{/each}
	</div>

	{#if showIndicators && items.length > 1}
		<div class="indicators" role="tablist" aria-label="Slides">
			{#each items as _, i}
				<button
					type="button"
					class="dot"
					class:active={i === index}
					onclick={() => goTo(i)}
					aria-label={`Go to slide ${i + 1}`}
					role="tab"
					aria-selected={i === index}
				></button>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	.swipe {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.track {
		display: flex;
		height: 100%;
		transition: transform var(--swipe-duration, 1000ms) ease;
	}

	.slide {
		flex: 0 0 100%;
		height: 100%;
	}

	.slide img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		display: block;
	}

	.indicators {
		position: absolute;
		bottom: 12px;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
		gap: 8px;
	}

	.dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		border: none;
		padding: 0;
		background-color: rgba(0, 0, 0, 0.3);
		cursor: pointer;
		transition: background-color 0.25s;
	}

	.dot.active {
		background-color: rgb(255, 62, 0);
	}
</style>