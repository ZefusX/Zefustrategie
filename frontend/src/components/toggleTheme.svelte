<script lang="ts">
	import { Moon, Sun } from '@lucide/svelte';
	import { onMount } from 'svelte';

	let isLight = false;

	onMount(() => {
		isLight = localStorage.getItem('bg-mode') === 'light';
		updateModeAttr();
	});

	function toggleMode() {
		isLight = !isLight;
		localStorage.setItem('bg-mode', isLight ? 'light' : 'dark');
		updateModeAttr();
	}

	function updateModeAttr() {
		if (isLight) {
			document.documentElement.setAttribute('data-mode', 'light');
		} else {
			document.documentElement.removeAttribute('data-mode');
		}
	}
</script>

<button
	class="btn btn-sm btn-ghost"
	on:click={toggleMode}
	aria-label="Changer le fond">
	{#if isLight}
    <Sun />
	{:else}
    <Moon />
  {/if}
</button>
