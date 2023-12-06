<script>
	import ticket1 from '$lib/assets/images/ticket1.png?as=run';
	import ticket2 from '$lib/assets/images/ticket2.png?as=run';
	import ticket3 from '$lib/assets/images/ticket3.png?as=run';
	import TicketCard from '$lib/components/ticket-card.svelte';

	const tickets = [
		{
			name: 'Regular ticket',
			amount: 9000,
			link: 'https://google.com',
			location: 'Eko conventional center',
			src: ticket1
		},
		{
			name: 'VVIP ticket',
			amount: 28500,
			link: 'https://google.com',
			location: 'Landmark beach',
			src: ticket2
		},
		{
			name: 'VIP ticket',
			amount: 50000,
			link: 'https://google.com',
			location: 'Eko conventional center',
			src: ticket3
		}
	];
</script>

<h2 class="tickets-heading">All tickets</h2>

<div class="ticket-cards">
	{#each tickets as ticket}
		<TicketCard
			name={ticket.name}
			location={ticket.location}
			amount={ticket.amount}
			link={ticket.link}
			src={ticket.src}
		/>
	{/each}
</div>

<style>
	.tickets-heading {
		font-size: 2.4rem;
		font-weight: 600;
		margin-bottom: 1.6rem;
		text-transform: uppercase;
	}

	.ticket-cards {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(36.4rem, 1fr));
		gap: 1.2rem;
		margin-bottom: 41.3rem;
	}
</style>
