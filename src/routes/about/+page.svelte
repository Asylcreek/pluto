<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';
	import Img from '@zerodevx/svelte-img';

	import removeImgBgOnLoad from '$lib/utils/removeImgBgOnLoad';

	import hero1 from '$lib/assets/images/hero.jpeg?as=run';
	import astronaut2 from '$lib/assets/images/astronaut-2.png?as=run';
	import star from '$lib/assets/images/star.png?as=run';
	import astronaut3 from '$lib/assets/images/astronaut-3.png?as=run';
	import lgSaucer from '$lib/assets/images/saucer-lg.png?as=run';
	import xsSaucer from '$lib/assets/images/saucer-xs.png?as=run';
	import sponsoredByBg from '$lib/assets/images/sponsored-by-bg.png?as=run';
	import team1 from '$lib/assets/images/team-1.png?as=run';
	import team2 from '$lib/assets/images/team-2.png?as=run';
	import team3 from '$lib/assets/images/team-3.png?as=run';

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

<section class="hero-section">
	<Img src={hero1} alt="" />

	<section class="hero-section-1">
		<h1>
			<span>About</span>
			<span>Pluto fest</span>
		</h1>

		<p>
			The Pluto Experience brings to you a blend of music and family life mix with Gen Z like never
			before.<br /> Come see the battle of the stars as we take you to the moon
		</p>

		<div>
			<Img src={astronaut2} alt="" on:load={removeImgBgOnLoad} />
		</div>
	</section>

	<section class="hero-section-2">
		<Img src={star} class="hs-star hs-star-1" alt="" on:load={removeImgBgOnLoad} />
		<Img src={star} class="hs-star hs-star-2" alt="" on:load={removeImgBgOnLoad} />
		<Img src={star} class="hs-star hs-star-3" alt="" on:load={removeImgBgOnLoad} />
		<Img src={lgSaucer} class="hs-saucer-lg" alt="" on:load={removeImgBgOnLoad} />

		<div class="hero-section-2-flex">
			<div>
				<Img src={astronaut3} class="hs-star hs-star-1" alt="" on:load={removeImgBgOnLoad} />
			</div>

			<div>
				<h2>
					<span>Why partner with <br /> PLUTO</span>
					<span>EXPERIENCE</span>
				</h2>

				<p>
					The Pluto Experience brings to you a blend of music and family life mix with Gen Z like
					never before.
				</p>

				<ul>
					<li>
						<span>
							<Img src={xsSaucer} class="ml-star ml-star-1" alt="" on:load={removeImgBgOnLoad} />
						</span>
						<span>
							The Pluto <br /> Experience put
						</span>
					</li>

					<li>
						<span>
							<Img src={xsSaucer} class="ml-star ml-star-1" alt="" on:load={removeImgBgOnLoad} />
						</span>
						<span>
							The Pluto <br /> Experience put
						</span>
					</li>

					<li>
						<span>
							<Img src={xsSaucer} class="ml-star ml-star-1" alt="" on:load={removeImgBgOnLoad} />
						</span>
						<span>
							The Pluto <br /> Experience put
						</span>
					</li>

					<li>
						<span>
							<Img src={xsSaucer} class="ml-star ml-star-1" alt="" on:load={removeImgBgOnLoad} />
						</span>
						<span>
							The Pluto <br /> Experience put
						</span>
					</li>
				</ul>
			</div>
		</div>
	</section>
</section>

<section class="team-section">
	<Img src={sponsoredByBg} alt="" />

	<h2>Meet the <span>team</span></h2>

	<p>The Pluto Experience brings to you a blend of music and family life mix.</p>

	<div class="team-cards">
		<article class="team-card">
			<div>
				<Img src={team1} alt="" />
			</div>

			<div>
				<p>Firstname lastname</p>

				<p>Small description</p>
			</div>
		</article>

		<article class="team-card">
			<div>
				<Img src={team2} alt="" />
			</div>

			<div>
				<p>Firstname lastname</p>

				<p>Small description</p>
			</div>
		</article>

		<article class="team-card">
			<div>
				<Img src={team3} alt="" />
			</div>

			<div>
				<p>Firstname lastname</p>

				<p>Small description</p>
			</div>
		</article>
	</div>
</section>

<style>
	/* hero section */

	.hero-section {
		--section1-height: 77rem;

		width: 100%;
		height: 170rem;
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

		& > picture img {
			position: absolute;
			top: 0;
			left: 0;
			z-index: -2;
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
	}

	.hero-section-1,
	.hero-section-2 {
		padding: 0 calc(var(--extra-width) / 2);
	}

	.hero-section-1 {
		padding-top: 10.8rem;
		text-align: center;
		overflow: hidden;
		height: var(--section1-height);
		position: relative;

		& > h1 {
			font-size: 4rem;
			font-weight: 700;
			text-transform: uppercase;
			margin-bottom: 1.4rem;

			& > span {
				display: block;
			}

			& > span:last-child {
				color: var(--color-site-a);
			}
		}

		& > p {
			font-size: 2.4rem;
			max-width: 76rem;
			margin: 0 auto;
		}

		& > div {
			height: 36.2rem;
			position: absolute;
			left: 50%;
			bottom: 0;
			transform: translateX(-50%);
			overflow: hidden;

			& img {
				width: 39.9rem;
				object-fit: cover;
			}
		}
	}

	.hero-section-2 {
		height: calc(100% - var(--section1-height));
		background: linear-gradient(
			180deg,
			rgba(85, 14, 133, 0.8) 0%,
			rgba(85, 14, 133, 0.91) 43.75%,
			rgba(73, 19, 187, 0.57) 100%
		);
		position: relative;
		isolation: isolate;

		& > picture {
			& img {
				&.hs-star {
					width: 14.6rem;
					height: 14.6rem;
					position: absolute;
					z-index: -1;
				}

				&.hs-star-1 {
					right: 1.4rem;
					top: 4.3rem;
				}

				&.hs-star-2 {
					right: 50%;
					top: 10.6rem;
				}

				&.hs-star-3 {
					left: 7.4rem;
					top: 17.9rem;
				}

				&.hs-saucer-lg {
					position: absolute;
					width: 84.3rem;
					left: 7.5rem;
					top: 8.7rem;
					object-fit: cover;
					z-index: -1;
				}
			}
		}
	}

	.hero-section-2-flex {
		display: flex;
		align-items: center;
		gap: 9.6rem;
		padding-top: 3.8rem;

		& > div:first-of-type {
			& img {
				width: 50.7rem;
				object-fit: cover;
			}
		}

		& > div:last-of-type {
			padding-top: 9rem;
			max-width: 58.1rem;

			& > h2 {
				font-size: 3.2rem;
				font-weight: 700;
				text-transform: uppercase;
				margin-bottom: 0.8rem;

				& > span:last-child {
					color: var(--color-site-a);
				}
			}

			& > p {
				font-size: 2.4rem;
			}

			& > ul {
				display: flex;
				align-items: center;
				gap: 2.4rem;
				flex-wrap: wrap;
				margin-top: 3.1rem;

				& > li {
					display: flex;
					align-items: center;
					gap: 4px;
					font-size: 2.4rem;

					& > span:first-child {
						z-index: -1;
					}
				}
			}
		}
	}

	/* team section */

	.team-section {
		position: relative;
		padding: 16.1rem calc(var(--extra-width) / 2);
		isolation: isolate;
		color: var(--color-white);

		& > picture img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			position: absolute;
			top: 0;
			right: 0;
			z-index: -2;
		}

		& > h2 {
			font-size: 3.2rem;
			font-weight: 700;
			text-transform: uppercase;
			margin-bottom: 0.8rem;

			& > span {
				color: var(--color-site-a);
			}
		}

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

		& > p {
			font-size: 2.4rem;
			max-width: 58.1rem;
			margin-bottom: 4.2rem;
		}
	}

	.team-cards {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(34.2rem, 1fr));
		gap: 4.2rem;
	}

	.team-card {
		& > div:first-child {
			margin-bottom: 1.2rem;
			border-top-right-radius: 1.6rem;
			border-top-left-radius: 1.6rem;
			overflow: hidden;

			& img {
				width: 100%;
				height: 29.7rem;
				object-fit: cover;
			}
		}

		& > div:last-child {
			& > p:first-child {
				font-size: 2rem;
				text-transform: uppercase;
				margin-bottom: 1rem;
			}
		}
	}
</style>
