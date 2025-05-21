<script>
	import { page } from '$app/stores';
	import ToggleTheme from './toggleTheme.svelte';
	$: currentPath = $page.url.pathname;
</script>

<div class="z-8 flex w-full">
	<div
		class="z-8 navbar center fixed left-1/3 my-2 mb-4 -translate-x-1/4 transform justify-center rounded-2xl bg-black/20 shadow-md backdrop-blur-md"
	>
		<nav class="mx-22 my-2 flex gap-12 text-xl font-semibold text-slate-300">
			<a
				href="/"
				class="nav-link transition hover:text-blue-300 {currentPath === '/'
					? 'text-white'
					: 'text-slate-300'}"
			>
				Accueil
			</a>

			<a
				href="/articles"
				class="nav-link transition hover:text-violet-300 {currentPath === '/articles'
					? 'text-white'
					: 'text-slate-300'}"
			>
				Articles
			</a>

			<a
				href="/about"
				class="nav-link transition hover:text-pink-300 {currentPath === '/about'
					? 'text-white'
					: 'text-slate-300'}"
			>
				A propos
			</a>

			<a
				href="/contact"
				class="nav-link transition hover:text-pink-500 {currentPath === '/contact'
					? 'text-white'
					: 'text-slate-300'}"
			>
				Contact
			</a>

			<ToggleTheme />
		</nav>
	</div>
</div>

<style>
	/* Thème clair : overrides en CSS natif */
	:global([data-mode='light'] .nav-link) {
		color: #475569; /* text-slate-600 */
	}

	:global([data-mode='light'] .nav-link:hover) {
		color: #1d4ed8; /* hover:text-blue-700/violet-700/pink-700 customisé ci-dessous */
	}

	:global([data-mode='light'] .nav-link[href='/']) {
		color: #0f172a; /* text-slate-900 */
	}
	:global([data-mode='light'] .nav-link[href='/articles']) {
		color: #0f172a;
	}
	:global([data-mode='light'] .nav-link[href='/about']) {
		color: #0f172a;
	}

	:global([data-mode='light'] .nav-link[href='/']:hover) {
		color: #1d4ed8; /* blue-700 */
	}
	:global([data-mode='light'] .nav-link[href='/articles']:hover) {
		color: #6d28d9; /* violet-700 */
	}
	:global([data-mode='light'] .nav-link[href='/about']:hover) {
		color: #be185d; /* pink-700 */
	}
	:global([data-mode='light'] .nav-link[href='/contact']:hover) {
		color: #741414; /* pink-700 */
	}

	:global([data-mode='light'] .navbar) {
		background-color: color-mix(
			in oklab,
			var(--color-pink-500) /* #fff = #ffffff */ 10%,
			transparent
		);
	}
</style>
