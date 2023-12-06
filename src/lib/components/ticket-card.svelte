<script lang="ts">
	import Img from '@zerodevx/svelte-img';

	import SvgIcon from './svg-icon.svelte';

	import { formatCurrency } from '$lib/utils/formatters';

	export let name: string;
	export let location: string;
	export let amount: number;
	export let link: string;
	export let src = {};
</script>

<article>
	<div>
		<Img {src} alt={`${name}'s poster`} />
	</div>

	<div>
		<p>{name}</p>

		<p class="icon-and-text">
			<SvgIcon iconName="location" />
			<span>{location}</span>
		</p>

		<p class="icon-and-text">
			<SvgIcon iconName="ticket" />
			<span>{formatCurrency(amount)}</span>
		</p>

		<a href={link} target="_blank" rel="noreferrer noopener" class="ticket-button">Get tickets</a>
	</div>
</article>

<style>
	article {
		background-color: var(--color-site-b);
		border-radius: 1.2rem;
		overflow: hidden;
	}

	article > div:first-child {
		& img {
			width: 100%;
			height: 22rem;
			object-fit: cover;
		}
	}

	article > div:last-child {
		padding: 1.6rem 2.4rem 3.4rem;
		color: var(--color-site-d);
		font-size: 2rem;
		text-transform: capitalize;

		& > p:first-child {
			font-size: 2.4rem;
			font-weight: 600;
			color: var(--color-white);
		}

		& > p:not(:last-child) {
			margin-bottom: 0.8rem;
		}
	}

	.icon-and-text {
		display: flex;
		align-items: center;

		& > svg {
			width: 2rem;
			height: 2rem;
			fill: var(--color-site-d);
			margin-right: 0.8rem;
		}
	}

	.ticket-button {
		display: block;
		padding: 1rem 0.8rem;
		border: 1px solid var(--color-white);
		border-radius: 2.4rem;
		width: 17.2rem;
		margin: 2.4rem auto 0;
		text-align: center;
		color: var(--color-white);
	}
</style>
