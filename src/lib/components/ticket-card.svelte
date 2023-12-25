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

<article class="ticket">
	<div class="img-container">
		<Img {src} alt={`${name}'s poster`} />
	</div>

	<div class="ticket-details">
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

<a
	aria-label={name}
	class="link-ticket ticket"
	href={link}
	target="_blank"
	rel="noreferrer noopener"
>
	<div class="img-container">
		<Img {src} alt={`${name}'s poster`} />
	</div>

	<div class="ticket-details">
		<div>
			<p class="ticket-name">{name}</p>

			<p class="icon-and-text">
				<span>{location}</span>
			</p>
		</div>

		<p class="icon-and-text ticket-price">
			<span>{formatCurrency(amount)}</span>
		</p>
	</div>
</a>

<style lang="scss">
	.ticket {
		background-color: var(--color-site-b);
		border-radius: 1.2rem;
		overflow: hidden;

		&:not(.link-ticket) {
			display: none;

			@media only screen and (min-width: 37.5em) {
				display: block;
			}
		}
	}

	.img-container {
		& :global(img) {
			width: 100%;
			height: 22rem;
			object-fit: cover;
		}
	}

	.ticket-details {
		padding: 1.6rem 2.4rem 3.4rem;
		color: var(--color-site-d);
		font-size: 2rem;
		text-transform: capitalize;

		& > p:first-child {
			font-size: 2.4rem;
			font-weight: 600;
			color: var(--color-white);
			white-space: nowrap;
			text-overflow: ellipsis;
			max-width: 27ch;
			overflow: hidden;
		}

		& p:not(:last-child) {
			margin-bottom: 0.8rem;
		}
	}

	.icon-and-text {
		display: flex;
		align-items: center;

		& > :global(svg) {
			width: 2rem;
			height: 2rem;
			fill: var(--color-site-d);
			margin-right: 0.8rem;
		}
	}

	.ticket-price {
		color: var(--color-white);
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

	.link-ticket {
		display: block;

		@media only screen and (min-width: 37.5em) {
			display: none;
		}

		& > .img-container {
			& :global(img) {
				height: 11rem;
				object-position: center top;
			}
		}

		& > .ticket-details {
			padding: 1.6rem;

			@media only screen and (min-width: 22.5em) {
				display: flex;
				align-items: center;
				justify-content: space-between;
				column-gap: 1.7rem;
			}

			& > div:first-child {
				& > .ticket-name,
				& > p > span {
					font-size: 2rem;

					@media only screen and (min-width: 22.5em) {
						width: 15ch;
						text-overflow: ellipsis;
						overflow: hidden;
						white-space: nowrap;
					}

					@media only screen and (min-width: 28.125em) {
						width: 20ch;
					}

					@media only screen and (min-width: 31.25em) {
						width: 25ch;
					}
				}
			}
		}
	}
</style>
