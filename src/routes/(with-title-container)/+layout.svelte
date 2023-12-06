<script>
	import { page } from '$app/stores';
	import Img from '@zerodevx/svelte-img';

	import removeImgBgOnLoad from '$lib/utils/removeImgBgOnLoad';

	import saucer from '$lib/assets/images/saucer.png?as=run';
	import sky from '$lib/assets/images/sky.png?as=run';
	import hero1 from '$lib/assets/images/hero.jpeg?as=run';

	$: path = $page.url.pathname;

	$: pageHeading = path.slice(1).replaceAll('-', ' ');
</script>

<section class="page-header-section">
	<Img src={sky} class="sky" alt="" on:load={removeImgBgOnLoad} />
	<Img src={saucer} class="saucer" alt="" on:load={removeImgBgOnLoad} />

	<h1>{pageHeading}</h1>
</section>

<section class="page-content-section">
	<Img src={hero1} alt="" on:load={removeImgBgOnLoad} />

	<slot />
</section>

<style>
	.page-header-section {
		height: 17.6rem;
		position: relative;
		isolation: isolate;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-white);
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 700;

		&::after {
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background: linear-gradient(
				175deg,
				rgba(85, 14, 133, 0.91) -3.41%,
				rgba(59, 19, 187, 0.5) 6.83%,
				#411b67 85.98%
			);
			z-index: -1;
		}

		& > picture {
			& > .sky {
				width: 100%;
				height: 100%;
				object-fit: cover;
				position: absolute;
				top: 0;
				left: 0;
				z-index: -3;
			}

			& > .saucer {
				width: 32.3rem;
				object-fit: cover;
				position: absolute;
				top: 50%;
				left: 12.5rem;
				transform: translateY(-50%);
				z-index: -2;
			}
		}
	}

	.page-content-section {
		width: 100%;
		padding: 5rem calc(var(--extra-width) / 2) 10rem;
		position: relative;
		isolation: isolate;
		color: var(--color-white);

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

		& > picture > img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			z-index: -1;
		}
	}
</style>
