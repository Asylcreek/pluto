<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';
	import Img from '@zerodevx/svelte-img';

	import '$lib/styles/form.css';

	import Button from '$lib/components/button.svelte';

	import removeImgBgOnLoad from '$lib/utils/removeImgBgOnLoad';

	import hero1 from '$lib/assets/images/hero.jpeg?as=run';
	import astronaut1 from '$lib/assets/images/astronaut-1.png?as=run';
	import astronaut2 from '$lib/assets/images/astronaut-2.png?as=run';
	import star from '$lib/assets/images/star.png?as=run';
	import astronauts from '$lib/assets/images/astronauts.png?as=run';
	import sponsoredByBg from '$lib/assets/images/sponsored-by-bg.png?as=run';
	import nairabox from '$lib/assets/images/nairabox.png?as=run';
	import nike from '$lib/assets/images/nike.png?as=run';
	import interswitch from '$lib/assets/images/interswitch.png?as=run';
	import hennessy from '$lib/assets/images/hennessy.png?as=run';

	onMount(() => {
		const header = document.querySelector('.header');

		if (header) {
			(header as HTMLElement).style.position = 'fixed';
		}
	});

	onDestroy(() => {
		if (!browser) return;

		const header = document.querySelector('.header');

		if (header) {
			(header as HTMLElement).style.position = '';
		}
	});
</script>

<svelte:head>
	<title>The pluto experience</title>
	<meta name="description" content="The pluto experience" />
</svelte:head>

<section class="hero-section">
	<Img src={hero1} alt="" class="hero-img" />

	<section class="hero-section-1">
		<div>
			<h1 class="hero-section-heading">Africa's first, <span>biggest month long event</span></h1>

			<p class="hero-section-text">
				The Pluto Experience is the first African month long event.<br /> Pluto brings to everyone exciting
				activities from the casino to the water; flyboarding, Zorbing, towable tubes, food fest and more.
				Even the kids and families are not left out, Pluto has something for everyone
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
				We have one of the best venues in the heart of Lagos to achieve this experience! Landmark
				beach is for lovers of breathtaking views & the glistening sea<br /> Landmark and Pluto is home
				to amazing Restaurants, nightlife, stunning hotels and villas, and more, there’s really something
				for everyone
			</p>

			<Button class="hero-section-button">Book a Ticket</Button>
		</div>
	</section>

	<div class="astronaut-2-container">
		<Img src={astronaut2} alt="" class="astronaut-2" on:load={removeImgBgOnLoad} />
	</div>
</section>

<section class="mailing-list-section">
	<Img src={star} class="ml-star ml-star-1" alt="" on:load={removeImgBgOnLoad} />
	<Img src={star} class="ml-star ml-star-2" alt="" on:load={removeImgBgOnLoad} />
	<Img src={star} class="ml-star ml-star-3" alt="" on:load={removeImgBgOnLoad} />
	<Img src={star} class="ml-star ml-star-4" alt="" on:load={removeImgBgOnLoad} />
	<Img src={astronauts} class="ml-astronauts" alt="" on:load={removeImgBgOnLoad} />
	<Img src={astronaut2} class="ml-astronaut-2" alt="" on:load={removeImgBgOnLoad} />

	<div>
		<h2 style="text-align:center;" class="hero-section-heading">Join our mailing list</h2>

		<p class="hero-section-text mailing-list-section-subheading">
			Sign-up for priority access to ticket releases and be the first to hear line-up and activity
			announcements.
		</p>

		<form class="mailing-list-form">
			<div class="input-container">
				<label for="name">Name*</label>

				<input type="text" name="name" id="name" />
			</div>

			<div class="input-container">
				<label for="email">Email*</label>

				<input type="email" name="email" id="email" />
			</div>

			<div class="input-container">
				<label for="phone">Phone*</label>

				<input type="tel" name="phone" id="phone" />
			</div>

			<div class="input-container row mailing-list-consent">
				<input type="checkbox" name="consent" id="consent" />

				<label for="consent"
					>By ticking this box I agree to receive marketing material for Big Rumble and associated
					events
				</label>
			</div>

			<Button block>Join The List</Button>
		</form>
	</div>
</section>

<section class="sponsored-by-section">
	<Img src={sponsoredByBg} alt="" class="sponsored-by-bg" />

	<h2 class="hero-section-heading sponsored-by-section-heading">Sponsored by</h2>

	<div class="sponsored-logos">
		<div class="sponsored-logo">
			<Img src={nairabox} alt="nairabox" class="nairabox" on:load={removeImgBgOnLoad} />
		</div>

		<div class="sponsored-logo">
			<Img src={nike} alt="nike" class="nike" on:load={removeImgBgOnLoad} />
		</div>

		<div class="sponsored-logo">
			<Img src={interswitch} alt="interswitch" class="interswitch" on:load={removeImgBgOnLoad} />
		</div>

		<div class="sponsored-logo">
			<Img src={hennessy} alt="hennessy" class="hennessy" on:load={removeImgBgOnLoad} />
		</div>
	</div>

	<section class="sponsored-by-section-1">
		<div></div>

		<div>
			<h3 class="hero-section-heading">What to expect from the fest</h3>

			<p class="hero-section-text">
				The main festival site sits on the beach with 3 Villages and 2 major stages, as well as
				exclusive areas for VIP and VVIP ticket holders which includes a stunning private cabana
				with the best vibes for some pre-show fun, #Plutobaddies & #Plutodaddies. Lets go!!
			</p>
		</div>
	</section>

	<p class="pluto-experience">Pluto experience</p>

	<section class="sponsored-by-section-2">
		<div>
			<h3 class="hero-section-heading">Get the full experience</h3>

			<p class="hero-section-text">
				The Pluto Experience brings to you a blend of music and family life mix with Gen Z like
				never before.<br /> Come see the battle of the stars as we take you to the moon.
			</p>
		</div>

		<div></div>
	</section>
</section>

<style lang="scss">
	/* Hero section */
	.hero-section {
		width: 100%;
		height: 100%;
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

		@media only screen and (min-width: 50em) {
			height: 174.6rem;
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
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;

		@media only screen and (min-width: 50em) {
			flex-direction: row;
		}
	}

	.hero-section-1 {
		padding-top: 4.8rem;
		gap: 14.5rem;

		& > div:first-child {
			width: 100%;

			@media only screen and (min-width: 50em) {
				max-width: 52.7rem;
			}
		}

		& > div:last-child {
			& :global(img) {
				width: 43.8rem;
				min-width: 29.8rem;
				object-fit: cover;

				@media only screen and (max-width: 50em) {
					margin: 0 auto;
					display: block;
				}

				@media only screen and (max-width: 31.25em) {
					width: 29.8rem;
				}

				@media only screen and (max-width: 18.75em) {
					width: 100%;
					min-width: 100%;
				}
			}

			@media only screen and (max-width: 50em) {
				align-self: center;
			}
		}

		@media only screen and (min-width: 53.125em) {
			padding-top: 20.5rem;
		}

		@media only screen and (max-width: 72.5em) {
			padding-left: 2.4rem;
			padding-right: 2.4rem;
		}

		@media only screen and (max-width: 50em) {
			gap: 5.6rem;
		}
	}

	.hero-section-heading {
		text-transform: uppercase;
		font-weight: 700;
		font-size: 2.4rem;
		margin-bottom: 0.8rem;
		text-wrap: balance;

		& > span {
			color: var(--color-site-a);
		}

		@media only screen and (min-width: 31.25em) {
			font-size: 4rem;
		}
	}

	.hero-section-text {
		font-size: 1.5rem;
		margin-bottom: 4rem;
		text-wrap: balance;

		@media only screen and (min-width: 31.25em) {
			font-size: 2.4rem;
		}
	}

	:global(.hero-section-button) {
		width: 100%;

		@media only screen and (min-width: 25em) {
			width: 24rem;
		}

		@media only screen and (min-width: 31.25em) {
			font-size: 1.6rem;
		}
	}

	.hero-section-2 {
		padding-top: 8.5rem;
		position: relative;
		height: 100%;
		margin-top: auto;

		& > div:last-child {
			width: 100%;

			@media only screen and (min-width: 50em) {
				margin-left: auto;
				max-width: 58.1rem;
			}
		}

		& .hero-section-heading {
			font-size: 3.2rem;
		}

		@media only screen and (min-width: 50em) {
			padding-top: 16.4rem;
			height: 84rem;
		}

		@media only screen and (max-width: 72.5em) {
			padding-left: 2.4rem;
			padding-right: 2.4rem;
		}
	}

	.astronaut-2-container {
		width: 30.6rem;
		position: relative;
		margin: 9.1rem auto 0;

		& :global(img) {
			width: 100%;
		}

		@media only screen and (min-width: 50em) {
			position: absolute;
			bottom: 0;
			margin-left: calc(var(--extra-width) / 2);
		}

		@media only screen and (max-width: 31.25em) {
			width: 20.3rem;
		}
	}

	/* mailing-list section*/
	.mailing-list-section {
		position: relative;
		isolation: isolate;
		padding: 8.7rem calc(var(--extra-width) / 2) 14.7rem;
		color: var(--color-white);
		overflow: hidden;

		&::before {
			content: '';
			width: 100%;
			height: 100%;
			background: linear-gradient(180deg, rgba(85, 14, 133, 0.69) 0%, rgba(73, 19, 187, 0.57) 100%);
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
		}

		/*:global(.ml-star, .ml-astronauts, .ml-astronaut-2) {
			position: absolute;
		}*/

		& :global(.ml-star) {
			position: absolute;
			width: 14.6rem;
			height: 14.6rem;
			z-index: -1;
		}

		& :global(.ml-star-1) {
			top: 14.8rem;
			left: 7.4rem;
		}

		& :global(.ml-star-2) {
			top: 7.5rem;
			left: 47%;
			transform: translateX(-50%);
		}

		& :global(.ml-star-3) {
			top: 23.1rem;
			right: 37.6rem;
		}

		& :global(.ml-star-4) {
			top: 1.2rem;
			right: 1.4rem;
		}

		& :global(.ml-astronauts) {
			position: absolute;
			z-index: -2;
			width: 49.8rem;
			bottom: 0;
			left: 0;
		}

		& :global(.ml-astronaut-2) {
			position: absolute;
			width: 19rem;
			bottom: -14.6rem;
			right: 8.7rem;
			z-index: 1;
		}
	}

	.mailing-list-section-subheading {
		text-align: center;
		margin-bottom: 4.3rem;
	}

	.mailing-list-form {
		width: 100%;
		max-width: 54.2rem;
		margin: 0 auto;
	}

	.input-container.mailing-list-consent {
		margin-top: 0.8rem;
		margin-bottom: 4rem;
	}

	/* sponsored-by section */
	.sponsored-by-section {
		padding: 6.5rem calc(var(--extra-width) / 2) 15rem;
		position: relative;
		isolation: isolate;
		color: var(--color-white);
		overflow: hidden;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			background: linear-gradient(
				175deg,
				rgba(57, 57, 57, 0.7) -6.08%,
				rgba(0, 0, 0, 0) 35.16%,
				#000 91.83%
			);
			width: 100%;
			height: 100%;
			z-index: -1;
		}
	}

	.sponsored-by-section-heading {
		margin-bottom: 2.4rem;
		text-align: center;
	}

	:global(.sponsored-by-bg) {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -2;
	}

	.sponsored-logos {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 4rem;
	}

	.sponsored-logo {
		& :global(img) {
			object-fit: cover;
		}

		& :global(.nairabox) {
			width: 29rem;
		}

		& :global(.nike) {
			width: 14.7rem;
		}

		& :global(.interswitch) {
			width: 25.6rem;
		}

		& :global(.hennessy) {
			width: 17.4rem;
		}
	}

	.sponsored-by-section-1 {
		display: flex;
		align-items: center;
		gap: 10.8rem;
		margin-top: 13.1rem;

		& > div:last-child {
			margin-left: auto;
			max-width: 58.1rem;

			& .hero-section-heading {
				font-size: 3.2rem;
			}
		}
	}

	.sponsored-by-section-2 {
		display: flex;
		align-items: center;
		gap: 8.2rem;
		margin-top: 13.1rem;

		& > div:first-child {
			max-width: 58.1rem;

			& .hero-section-heading {
				font-size: 3.2rem;
			}
		}
	}

	.pluto-experience {
		font-size: 20rem;
		font-weight: 900;
		letter-spacing: 0.8rem;
		text-align: center;
		color: rgba(85, 14, 133, 0.05);
		text-transform: uppercase;
		white-space: nowrap;
		-webkit-text-stroke: 1px rgba(255, 255, 255, 0.05);
		position: absolute;
		bottom: 23rem;
		left: 50%;
		transform: translateX(-50%);
		pointer-events: none;
		z-index: -1;
	}
</style>
