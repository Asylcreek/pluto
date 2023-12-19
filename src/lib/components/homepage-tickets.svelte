<script lang="ts">
	import { onMount } from 'svelte';
	import Img from '@zerodevx/svelte-img';

	import SvgIcon from './svg-icon.svelte';

	import astronaut4 from '$lib/assets/images/astronaut-4.jpeg?as=run';

	let scrollContainer: HTMLElement | null = null;

	const numOfTickets = 5;
	const ticketCardMarginRight = 30;
	const ticketCardWidth = 389;

	let scrollPosition = 0;
	let scrollAmount = 0;
	let maxScrollPosition = 0;

	const getScrollValues = (scrollContainer: HTMLElement | null) => {
		if (scrollContainer) {
			const hiddenWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;

			if (hiddenWidth) {
				scrollAmount = Math.ceil(hiddenWidth / numOfTickets) + ticketCardMarginRight;

				// this is zero based
				maxScrollPosition = Math.ceil(hiddenWidth / (ticketCardWidth + ticketCardMarginRight)) + 1;
			}
		}
	};

	$: getScrollValues(scrollContainer);

	const scrollRight = () => {
		const newScrollPosition = scrollPosition + 1;

		scrollContainer?.scrollBy({
			left: scrollAmount,
			behavior: 'smooth'
		});

		if (scrollPosition < maxScrollPosition - 1) {
			scrollPosition = newScrollPosition;
		}
	};

	const scrollLeft = () => {
		scrollContainer?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });

		if (scrollPosition) {
			scrollPosition -= 1;
		}
	};

	onMount(() => {
		scrollContainer = document.querySelector('.ticket-cards');

		window.addEventListener('resize', () => {
			getScrollValues(scrollContainer);
		});
	});
</script>

<div class="ticket-indicators">
	{#each new Array(maxScrollPosition).fill(3).map((_, i) => i) as el}
		<span class="ticket-indicator" class:ticket-indicator-active={el === scrollPosition}></span>
	{/each}
</div>

<div class="ticket-cards">
	<article class="ticket-card">
		<Img src={astronaut4} alt="ticket banner" />

		<p>Day access regular</p>

		<a class="get-tickets-btn" href="https://google.com" target="_blank" rel="noreferrer noopener"
			>Get tickets</a
		>
	</article>
	<article class="ticket-card">
		<Img src={astronaut4} alt="ticket banner" />

		<p>Day access regular</p>

		<a class="get-tickets-btn" href="https://google.com" target="_blank" rel="noreferrer noopener"
			>Get tickets</a
		>
	</article>
	<article class="ticket-card">
		<Img src={astronaut4} alt="ticket banner" />

		<p>Day access regular</p>

		<a class="get-tickets-btn" href="https://google.com" target="_blank" rel="noreferrer noopener"
			>Get tickets</a
		>
	</article>

	<article class="ticket-card">
		<Img src={astronaut4} alt="ticket banner" />

		<p>Day access regular</p>

		<a class="get-tickets-btn" href="https://google.com" target="_blank" rel="noreferrer noopener"
			>Get tickets</a
		>
	</article>

	<article class="ticket-card">
		<Img src={astronaut4} alt="ticket banner" />

		<p>Day access regular</p>

		<a class="get-tickets-btn" href="https://google.com" target="_blank" rel="noreferrer noopener"
			>Get tickets</a
		>
	</article>
</div>

{#if maxScrollPosition}
	<div class="tickets-buttons">
		<button on:click={scrollLeft}>
			<SvgIcon iconName="arrow-circle-left" big />
		</button>

		<button on:click={scrollRight}>
			<SvgIcon iconName="arrow-circle-right" big />
		</button>
	</div>
{/if}

<style lang="scss">
	.ticket-indicators {
		display: flex;
		position: relative;
		left: 31.5rem;
		margin-bottom: 2.9rem;
	}

	.ticket-indicator {
		width: 4rem;
		height: 4px;
		background-color: #e5e7eb;

		&.ticket-indicator-active {
			background-color: #c46dff;
		}

		&:not(:last-child) {
			margin-right: 4px;
		}
	}

	.ticket-cards {
		display: flex;
		align-items: center;
		height: 27.7rem;
		gap: 3.1rem;
		flex-wrap: nowrap;
		overflow: overlay;
		scroll-snap-type: x proximity;

		&::-webkit-scrollbar {
			visibility: hidden;
		}
	}

	.ticket-card {
		height: 100%;
		position: relative;
		isolation: isolate;
		padding: 4.7rem 9.1rem 5.1rem;
		border-radius: 4px;
		width: 38.9rem;
		flex-shrink: 0;
		scroll-snap-align: start;

		& :global(img) {
			position: absolute;
			top: 0;
			left: 0;
			z-index: -2;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		&::before {
			content: '';
			height: 100%;
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
			background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%);
		}

		& > p {
			font-size: 4rem;
			font-weight: 600;
			margin-bottom: 1.9rem;
			text-transform: capitalize;
			text-align: center;
		}

		& > :global(.get-tickets-btn) {
			display: block;
			width: 17.2rem;
			margin: 0 auto;
		}
	}

	.tickets-buttons {
		margin-top: 2.9rem;
		display: flex;
		position: relative;
		left: 37.8rem;

		& > button {
			background-color: transparent;

			& > :global(svg) {
				display: block;
			}

			&:not(:last-child) {
				margin-right: 1.6rem;
			}
		}
	}
</style>
