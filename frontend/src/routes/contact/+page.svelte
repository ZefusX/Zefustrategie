<script>
	let messageContent = '';
	let messageSubject = '';
</script>

<div class="lg:mx-42 mx-4">
	<h1
		class="scroll-gradient bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text p-1 text-5xl font-black text-transparent"
	>
		Me contacter
	</h1>
	<hr class="m-4 mx-2 my-8" />
	<h2
		class="scroll-gradient bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text p-1 text-4xl font-extrabold text-transparent"
	>
		Pour me contacter, peu importe la raison :
	</h2>
	<label class="label p-4">
		<span class="label-text text-2xl font-bold">Objet du message :</span>
		<input
			type="text"
			class="input rounded-xl border bg-white/10 shadow-md backdrop-blur-md"
			placeholder="Objet du message"
			bind:value={messageSubject}
		/>
	</label>
	<label class="label p-4">
		<span class="label-text text-2xl font-bold">Votre message :</span>
		<textarea
			class="textarea rounded-xl border bg-white/10 shadow-md backdrop-blur-md"
			rows="4"
			placeholder="Votre message"
			bind:value={messageContent}
		></textarea>
	</label>
	<div class="p-4">
		<a href="mailto:zefuscode@gmail.com?subject={messageSubject}&body={messageContent}">
			<button
				type="button"
				class="btn [data-mode=light]:text-black rounded-xl bg-white/10 px-4 py-1 font-semibold text-white shadow-md backdrop-blur-md"
				>Envoyer</button
			>
		</a>
	</div>
</div>

<style>
	:global([data-mode='light'] .btn) {
		background-color: color-mix(
			in oklab,
			var(--color-pink-500) /* #fff = #ffffff */ 10%,
			transparent
		);
	}

	:global([data-mode='light'] textarea) {
		background-color: color-mix(
			in oklab,
			var(--color-pink-500) /* #fff = #ffffff */ 10%,
			transparent
		);
	}

	:global([data-mode='light'] input) {
		background-color: color-mix(
			in oklab,
			var(--color-pink-500) /* #fff = #ffffff */ 10%,
			transparent
		);
	}
</style>
