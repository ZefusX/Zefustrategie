<script lang="ts">
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
	let articles: any[] = [];

	// Récupère la liste des slugs
	async function getSlugs() {
		const res = await fetch('http://127.0.0.1:8000/articles');
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
		articles = await Promise.all(promises);
	}

	onMount(async () => {
		await getSlugs();
		await getArticles();
	});
</script>

<div class="lg:mx-42 mx-4">
	<h1
		class="scroll-gradient bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text p-1 text-5xl font-bold text-transparent"
	>
		Zefustratégie
	</h1>
	<hr class="mr-96 mt-6" />
	<div class="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
							<h3 class="h3">{article.title}</h3>
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
			<p>Chargement des articles...</p>
		{/if}
	</div>
</div>
