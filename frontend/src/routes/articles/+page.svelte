<script lang="ts">
	import { SortAscIcon, SortDescIcon } from '@lucide/svelte';
	import { onMount } from 'svelte';

	function formatDate(dateStr: any) {
		const date = new Date(dateStr);
		return new Intl.DateTimeFormat('fr-FR', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		}).format(date);
	}
	let slugs: any[] = [];
	let allArticles: any[] = []; // contient tous les articles
	let articles: any[] = [];
	let sortDateInversed = false;
	let searchInput = '';

	// Récupère la liste des slugs
	async function getSlugs() {
		const res = await fetch('https://zefustrategie.onrender.com/articles');
		slugs = await res.json();
	}

	// Pour chaque slug, récupère les métadonnées
	async function getArticles() {
		const promises = slugs.map(async (slug) => {
			const res = await fetch(`https://zefustrategie.onrender.com/articles/${slug}`);
			const data = await res.json();
			console.log(data.metadata);
			return { slug, ...data.metadata };
		});
		allArticles = await Promise.all(promises);
		articles = allArticles;
	}

	function sortArticlesByDate(articlesList: any) {
		sortDateInversed = false;
		return articlesList.sort(
			(a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()
		);
	}
	function sortArticlesByDateInversed(articlesList: any) {
		sortDateInversed = true;
		return articlesList.sort(
			(a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime()
		);
	}

	function toggleSortOrder() {
		sortDateInversed = !sortDateInversed;
		if (sortDateInversed === false) {
			articles = sortArticlesByDate(articles);
		} else {
			articles = sortArticlesByDateInversed(articles);
		}
	}

	function handleSearch() {
		articles = allArticles.filter(
			(article) =>
				article.title.toLowerCase().includes(searchInput.toLowerCase()) ||
				article.description.toLowerCase().includes(searchInput.toLowerCase())
		);
	}

	onMount(async () => {
		await getSlugs();
		await getArticles();
		articles = sortArticlesByDate(articles);
		console.log(articles);
	});
</script>

<div class="lg:mx-42 mx-4">
	<h1
		class="scroll-gradient bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text p-1 text-5xl font-bold text-transparent"
	>
		Zefustratégie
	</h1>
	<hr class="mr-96 mt-6" />
	{#if sortDateInversed}
		<div class="flex flex-row gap-4">
			<button
				onclick={toggleSortOrder}
				class="mt-4 flex h-8 w-8 items-center justify-center rounded border bg-white/10 shadow-md backdrop-blur-md"
			>
				<SortAscIcon />
			</button>
			<input
				type="text"
				placeholder="Rechercher un article"
				bind:value={searchInput}
				oninput={handleSearch}
				class="mt-4 h-8 w-4/5 rounded border p-1 lg:w-1/4"
			/>
		</div>
	{:else}
		<div class="flex flex-row gap-4">
			<button
				onclick={toggleSortOrder}
				class="mt-4 flex h-8 w-8 items-center justify-center rounded border bg-white/10 shadow-md backdrop-blur-md"
			>
				<SortDescIcon />
			</button>
			<input
				type="text"
				placeholder="Rechercher un article"
				bind:value={searchInput}
				oninput={handleSearch}
				class="mt-4 h-8 w-4/5 rounded border p-1 lg:w-1/4"
			/>
		</div>
	{/if}
	<div class="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
		{#if articles.length > 0}
			{#each articles as article}
				<a
					href={`/articles/${article.slug}`}
					class="card border-surface-200-800 card-hover divide-surface-200-800 block max-w-md
       divide-y overflow-hidden rounded-xl border bg-white/10 shadow-md backdrop-blur-md"
				>
					<article class="space-y-4 p-4">
						<div>
							<h2 class="h6">{formatDate(article.date)}</h2>
						</div>
						<h3 class="h3">{article.title}</h3>

						<div class="flex gap-4">
							{#each article.tags as tag}
								<div class="rounded-xl border border-amber-200 bg-amber-200/20 p-1 px-2">
									<p>{tag}</p>
								</div>
							{/each}
						</div>
						<p class="opacity-60">
							{article.description}
						</p>
					</article>

					<footer class="flex items-center justify-between gap-4 p-4">
						<small class="opacity-60">Par Théo</small>
					</footer>
				</a>
			{/each}
		{:else}
			<p>Aucun article disponible</p>
		{/if}
	</div>
</div>
