<script>
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';

	import '../styles/vars.css';
	import '../styles/base.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
