<script>
	import Fa from 'svelte-fa';

	import { SITE } from '$lib/config';

	import {
		faGithub,
		faGitlab,
		faLinkedin,
		faMedium,
		faPinterest,
		faStackOverflow,
		faTumblr,
		faXTwitter
	} from '@fortawesome/free-brands-svg-icons';

	import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

	import { fetchSubscribe } from '$lib/store/api';

	let inputValue = $state('');

	const icons = {
		gitlab: faGitlab,
		medium: faMedium,
		linkedin: faLinkedin,
		github: faGithub,
		twitter: faXTwitter,
		pinterest: faPinterest,
		stackoverflow: faStackOverflow,
		tumblr: faTumblr
	};

	const colors = {
		gitlab: '#fa6d25',
		medium: '#000000',
		linkedin: '#0a66c2',
		github: '#000000',
		twitter: '#1ea1f2',
		pinterest: '#e60023',
		stackoverflow: '#f48023',
		tumblr: '#000000'
	};

	const socialItem = Object.keys(icons).map((key) => {
		const k = /** @type {keyof typeof icons} */ (key);
		return { name: icons[k], color: colors[k], url: SITE.social[k] };
	});

	async function handleClick() {
		const data = {
			email: inputValue
		};
		await fetchSubscribe(data).then(() => {
			alert('Subscribed successfully!');
		});
	}
</script>

<div class="subscribe">
	<input placeholder="Email to subscribe" type="text" bind:value={inputValue} />
	<button type="button" class="subscribe-btn" onclick={handleClick}>
		<Fa color="red" icon={faEnvelope} size="2x" />
	</button>
</div>

<div class="social-medias">
	{#each socialItem as item, i}
		<a href={item.url} target="_blank">
			<Fa icon={item.name} color={item.color} size="2x" />
		</a>
	{/each}
</div>

<style lang="scss">
	input[type='text'] {
		font-size: 16px;
	}

	.social-medias {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;

		a {
			padding: 10px;
		}

		@media (max-width: 414px) {
			width: 60%;
			margin: auto;
		}
	}

	.subscribe {
		text-align: center;
		margin: 20px auto;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		input {
			min-width: 320px;
			margin-right: 10px;
			padding: 10px;
			position: relative;

			@media (max-width: 414px) {
				min-width: 200px;
			}
		}
	}

	.subscribe-btn {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		line-height: 0;
	}
</style>