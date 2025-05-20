<script>
	export let error;
	export let status;
</script>

<svelte:head>
	<title>{status} - Page non trouvée</title>
</svelte:head>

<h1>{status}</h1>
<p>{error.message}</p>

{#if status === 404}
	<p>La page que vous recherchez n'existe pas.</p>
{/if}
