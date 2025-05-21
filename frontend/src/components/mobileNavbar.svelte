<script>
	import { Book, ContactIcon, FileQuestion, Home, Menu } from '@lucide/svelte';
	let isExpansed = $state(false);

	function toggleExpanded() {
		isExpansed = !isExpansed;
	}
</script>

<div
	class="navbar z-6 fixed flex w-full flex-col justify-center gap-12 rounded-xl bg-black/40 p-6 px-12 shadow-md backdrop-blur-md transition"
>
	<button title="menu" onclick={toggleExpanded}><Menu class="" /></button>
	{#if isExpansed}
		<a href="/">
			<button class="flex flex-row justify-center gap-2">
				<Home />
				<p>Accueil</p>
			</button>
		</a>
		<a href="/articles">
			<button class="flex flex-row justify-center gap-2">
				<Book /> Blog
			</button>
		</a>
		<a href="/about">
			<button class="flex flex-row justify-center gap-2">
				<FileQuestion /> A propos
			</button>
		</a>
		<a href="/contact">
			<button class="flex flex-row justify-center gap-2">
				<ContactIcon /> Contact
			</button>
		</a>
	{/if}
</div>

<style>
	:global([data-mode='light'] .navbar) {
		background-color: color-mix(
			in oklab,
			var(--color-pink-500) /* #fff = #ffffff */ 10%,
			transparent
		);
	}
</style>
