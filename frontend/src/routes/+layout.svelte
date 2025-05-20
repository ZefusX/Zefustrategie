<script lang="ts">
	import '../app.css';
	import Footer from '../components/footer.svelte';
	import Navbar from '../components/navbar.svelte';
	import MobileNavbar from './../components/mobileNavbar.svelte';

	let { children } = $props();
</script>

<div class="background-blur">
	<div class="block lg:hidden">
		<MobileNavbar />
	</div>
	<div class="hidden lg:block">
		<Navbar />
	</div>
	<div class="pt-20">
		{@render children()}
	</div>
	<div class="mt-96 flex w-full justify-center">
		<Footer />
	</div>
</div>
