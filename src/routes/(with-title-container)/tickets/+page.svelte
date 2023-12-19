<script>
	import TicketCard from '$lib/components/ticket-card.svelte';

	import vvipTickets from '$lib/assets/images/vvip-tickets.png?as=run';
	import vipTickets from '$lib/assets/images/vip-tickets.png?as=run';
	import regularTicket from '$lib/assets/images/regular-ticket.png?as=run';
	import remaFansParty from '$lib/assets/images/rema-fans-party.png?as=run';
	import djTunezAndFriend from '$lib/assets/images/dj-tunez-and-friends.png?as=run';
	import kingOfCourt from '$lib/assets/images/king-of-court.png?as=run';
	import christmasCarol from '$lib/assets/images/christmas-carol.png?as=run';
	import influencersRave from '$lib/assets/images/influencers-rave.png?as=run';
	import genZFest from '$lib/assets/images/gen-z-fest.png?as=run';
	import foodFest from '$lib/assets/images/food-fest.png?as=run';
	import brymoLive from '$lib/assets/images/brymo-live.png?as=run';
	import vectorEnergy from '$lib/assets/images/vector-energy-concert.png?as=run';

	const plutoAccessTickets = [
		{
			name: 'VVIP tickets',
			amount: 50000,
			link: 'https://google.com',
			location: 'Pluto Arena, Landmark Beach',
			src: vvipTickets
		},
		{
			name: 'VIP tickets',
			amount: 25500,
			link: 'https://google.com',
			location: 'Pluto Arena, Landmark Beach',
			src: vipTickets
		},
		{
			name: 'Regular ticket',
			amount: 10000,
			link: 'https://google.com',
			location: 'Pluto Arena, Landmark Beach',
			src: regularTicket
		}
	];

	const eventTickets = [
		{
			name: 'Rema fans party',
			amount: 10000,
			link: 'https://google.com',
			location: '19th December, 2023',
			src: remaFansParty
		},
		{
			name: 'DJ Tunez and friends',
			amount: 10000,
			link: 'https://google.com',
			location: '21st December, 2023',
			src: djTunezAndFriend
		},
		{
			name: 'King of court (DJ Tunez v DJ Obi)',
			amount: 10000,
			link: 'https://google.com',
			location: '24th December, 2023',
			src: kingOfCourt
		},
		{
			name: 'Christmas carol',
			amount: 10000,
			link: 'https://google.com',
			location: 'Pluto Arena, Landmark Beach',
			src: christmasCarol
		},
		{
			name: 'Influencers rave',
			amount: 10000,
			link: 'https://google.com',
			location: '26th December, 2023',
			src: influencersRave
		},
		{
			name: 'Gen Z fest',
			amount: 10000,
			link: 'https://google.com',
			location: '30th December, 2023',
			src: genZFest
		},
		{
			name: 'Food fest',
			amount: 10000,
			link: 'https://google.com',
			location: '1st January, 2024',
			src: foodFest
		},
		{
			name: 'Brymo live',
			amount: 10000,
			link: 'https://google.com',
			location: '1st January, 2024',
			src: brymoLive
		},
		{
			name: 'Vector energy concert',
			amount: 10000,
			link: 'https://google.com',
			location: '2nd January, 2024',
			src: vectorEnergy
		}
	];
</script>

<section>
	<h2 class="tickets-heading">Pluto access tickets</h2>

	<div class="ticket-cards">
		{#each plutoAccessTickets as ticket}
			<TicketCard
				name={ticket.name}
				location={ticket.location}
				amount={ticket.amount}
				link={ticket.link}
				src={ticket.src}
			/>
		{/each}
	</div>
</section>

<section>
	<h2 class="tickets-heading">Event tickets</h2>

	<div class="ticket-cards">
		{#each eventTickets as ticket}
			<TicketCard
				name={ticket.name}
				location={ticket.location}
				amount={ticket.amount}
				link={ticket.link}
				src={ticket.src}
			/>
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		&:not(:last-child) {
			margin-bottom: 4rem;
		}
	}

	.tickets-heading {
		font-size: 2.4rem;
		font-weight: 600;
		margin-bottom: 1.6rem;
		text-transform: uppercase;
	}

	.ticket-cards {
		display: grid;
		grid-template-columns: repeat(auto-fill, 1fr);
		column-gap: 1.2rem;
		row-gap: 2.4rem;

		@media only screen and (min-width: 28.75em) {
			grid-template-columns: repeat(auto-fill, minmax(36.4rem, 1fr));
		}

		@media only screen and (min-width: 37.5em) {
			grid-template-columns: repeat(auto-fill, min(100%, 36.4rem));
		}
	}
</style>
