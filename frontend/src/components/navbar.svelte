<script>
	import { page } from '$app/stores';
	$: currentPath = $page.url.pathname;
</script>

<div class="flex w-full">
	<div
		class="center fixed left-1/2 my-2 mb-4 -translate-x-1/2 transform justify-center rounded-2xl bg-black/20 shadow-md backdrop-blur-md"
	>
		<nav class="mx-22 my-2 flex gap-12 text-xl font-semibold text-slate-300">
			<a
				href="/"
				class="transition hover:text-blue-300 {currentPath === '/'
					? 'text-white'
					: 'text-slate-300'}"
			>
				Accueil
			</a>

			<a
				href="/articles"
				class="transition hover:text-violet-300 {currentPath === '/articles'
					? 'text-white'
					: 'text-slate-300'}"
			>
				Articles
			</a>

			<a
				href="/about"
				class="transition hover:text-pink-300 {currentPath === '/about'
					? 'text-white'
					: 'text-slate-300'}"
			>
				A propos
			</a>

			<!-- <ToggleTheme /> -->
		</nav>
	</div>
</div>
