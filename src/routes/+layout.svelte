<script>
	import Img from '@zerodevx/svelte-img';

	import Header from '$lib/components/header.svelte';

	import hero1 from '$lib/assets/images/hero.jpeg?as=run';

	import '../styles/vars.css';
	import '../styles/base.css';
</script>

<div>
	<div class="hero-img-container">
		<Img src={hero1} alt="" class="hero-img" />
	</div>

	<Header />

	<main>
		<slot />
	</main>
</div>

<style>
	div {
		position: relative;
		isolation: isolate;
	}

	.hero-img-container {
		width: 100%;
		height: 157.6rem;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}

	:global(.hero-img) {
		object-fit: cover;
		position: relative;
	}
</style>
