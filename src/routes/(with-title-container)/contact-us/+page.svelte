<script>
	import '$lib/styles/form.css';

	import Button from '$lib/components/button.svelte';
</script>

<p class="form-heading">We are here to listen tell us something we need to know</p>

<form class="contact-us-form">
	<div class="input-container">
		<label for="name">Name *</label>

		<input type="text" name="name" id="name" />
	</div>

	<div class="input-container">
		<label for="email">Email *</label>

		<input type="email" name="email" id="email" />
	</div>

	<div class="input-container">
		<label for="subject">Subject *</label>

		<input type="text" name="subject" id="subject" />
	</div>

	<div class="input-container">
		<label for="category">Category *</label>

		<input type="text" name="category" id="category" />
	</div>

	<div class="input-container">
		<label for="message">Talk to us *</label>

		<textarea name="message" id="message" />
	</div>

	<div style="margin-bottom: 4rem;" class="input-container row">
		<input type="checkbox" name="consent" id="consent" />

		<label for="consent"
			>Please tick to consent to your data being stored in line with the guidelines set out in our
			privacy policy.</label
		>
	</div>

	<Button block>Send a message</Button>
</form>

<style>
	.form-heading {
		font-size: 2.4rem;
		font-weight: 600;
		padding-bottom: 1.7rem;
		margin: 0 auto;
		margin-bottom: 2rem;
		border-bottom: 1px solid #7b7b7b;
		width: fit-content;
	}

	.contact-us-form {
		width: 100%;
		max-width: 54.1rem;
		margin: 0 auto;
	}
</style>
