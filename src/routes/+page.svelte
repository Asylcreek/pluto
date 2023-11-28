<script lang="ts">
	import Img from '@zerodevx/svelte-img';

	import Button from '$lib/components/button.svelte';

	import removeImgBgOnLoad from '$lib/utils/removeImgBgOnLoad';

	import hero1 from '$lib/assets/images/hero.jpeg?as=run';
	import astronaut1 from '$lib/assets/images/astronaut-1.png?as=run';
	import astronaut2 from '$lib/assets/images/astronaut-2.png?as=run';
</script>

<svelte:head>
	<title>The pluto experience</title>
	<meta name="description" content="The pluto experience" />
</svelte:head>

<section class="hero-section">
	<Img src={hero1} alt="" class="hero-img" />

	<section class="hero-section-1">
		<div>
			<h1 class="hero-section-heading">Africa's first big month long event</h1>

			<p class="hero-section-text">
				The Pluto Experience brings to you a blend of music and family life mix with Gen Z like
				never before.<br /> Come see the battle of the stars as we take you to the moon
			</p>

			<Button class="hero-section-button">Book a Ticket</Button>
		</div>

		<div>
			<Img src={astronaut1} alt="" class="astronaut-1" on:load={removeImgBgOnLoad} />
		</div>
	</section>

	<section class="hero-section-2">
		<div>
			<h2 class="hero-section-heading">An out of the world experience</h2>

			<p class="hero-section-text">
				The Pluto Experience brings to you a blend of music and family life mix with Gen Z like
				never before.<br /> Come see the battle of the stars as we take you to the moon.
			</p>

			<Button class="hero-section-button">Book a Ticket</Button>
		</div>
	</section>

	<div class="astronaut-2-container">
		<Img src={astronaut2} alt="" class="astronaut-2" on:load={removeImgBgOnLoad} />
	</div>
</section>

<style>
	/* Hero section */
	/*
  `global` and `important` are used like this to prevent
  any JS gymnastics to make the header fixed only on the homepage
  */
	:global(.header) {
		position: fixed !important;
	}

	.hero-section {
		width: 100%;
		height: 174.6rem;
		position: relative;
		isolation: isolate;
		color: var(--color-white);
		padding-top: 8.8rem;

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(180deg, rgba(85, 14, 133, 0.63) 0%, rgba(73, 19, 187, 0.5) 100%);
			z-index: -1;
		}
	}

	:global(.hero-img) {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -2;
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	.hero-section-1,
	.hero-section-2 {
		padding: 0 calc(var(--extra-width) / 2);
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}

	.hero-section-1 {
		padding-top: 20.5rem;
		gap: 14.5rem;

		& > div:first-child {
			max-width: 52.7rem;
		}

		& > div:last-child {
			& img {
				width: 43.8rem;
				object-fit: cover;
			}
		}
	}

	.hero-section-heading {
		text-transform: uppercase;
		font-weight: 700;
		font-size: 4rem;
		margin-bottom: 0.8rem;
	}

	.hero-section-text {
		font-size: 2.4rem;
		margin-bottom: 4rem;
	}

	:global(.hero-section-button) {
		width: 24rem;
	}

	.hero-section-2 {
		padding-top: 16.4rem;
		position: relative;
		height: 84rem;
		margin-top: auto;

		& > div:last-child {
			width: 58.1rem;
			margin-left: auto;
		}

		& .hero-section-heading {
			font-size: 3.2rem;
		}
	}

	.astronaut-2-container {
		width: 30.6rem;
		position: absolute;
		bottom: 0;
		margin-left: calc(var(--extra-width) / 2);

		& img {
			width: 100%;
		}
	}
</style>
