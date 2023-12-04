<script>
	import AccordionItem from '$lib/components/accordion-item.svelte';
</script>

<div>
	<AccordionItem heading="What is the Pluto Experience about?" id="1">
		<p>Something light</p>
	</AccordionItem>

	<AccordionItem heading="How do I get tickets?" id="2">
		<p>There are two ways to purchase tickets.</p>

		<ol>
			<li>On the Pluto experience website</li>
			<li>On the Pluto experience website</li>
		</ol>

		<p class="heading">Purchasing from the PlutoX website</p>

		<ul>
			<li>Visit plutox.com</li>
			<li>Go to the tickets page and select the specific type</li>
			<li>Select the number of tickets and click on continue</li>
			<li>Enter your email address and continue to payment</li>
			<li>The ticket will be sent to the email provided</li>
		</ul>

		<p class="heading">Purchasing from the Nairabox website</p>

		<ul>
			<li>Visit nairabox.com</li>
			<li>Go to the tickets page and select the specific type</li>
			<li>Select the number of tickets and click on continue</li>
			<li>Enter your email address and continue to payment</li>
			<li>The ticket will be sent to the email provided</li>
		</ul>
	</AccordionItem>

	<AccordionItem heading="Who and who can I expect?" id="3">
		<p>Something light</p>
	</AccordionItem>

	<AccordionItem heading="Where is the location" id="4">
		<p>Something light</p>
	</AccordionItem>

	<AccordionItem heading="How do I become a partner?" id="5">
		<p>Something light</p>
	</AccordionItem>

	<AccordionItem heading="Are there going to be family activities?" id="6">
		<p>Something light</p>
	</AccordionItem>

	<AccordionItem heading="Is there going to be a season 2?" id="7">
		<p>Something light</p>
	</AccordionItem>
</div>

<style>
	div {
		width: 100%;
		max-width: 61rem;
		margin: 0 auto;
	}

	ol > li {
		list-style-type: decimal;
		list-style-position: inside;
		margin-left: 0.8rem;
	}

	.heading {
		font-size: 2rem;
		font-weight: 500;
		margin: 1.6rem 0 0.8rem;
	}

	ul > li {
		list-style-type: disc;
		list-style-position: inside;
		margin-left: 0.8rem;
	}
</style>
