import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		include: [
			'svelte-fa',
			'@fortawesome/free-brands-svg-icons',
			'@fortawesome/free-regular-svg-icons',
			'@fortawesome/free-solid-svg-icons'
		]
	},
	server: {
		warmup: {
			client: ['./src/**/*.{js,svelte}'],
			ssr: ['./src/hooks.server.js', './src/routes/**/+layout*']
		}
	}
});
