<script lang="ts">
	let className = '';

	export let block: boolean = false;

	export { className as class };
</script>

<button class={className} class:block>
	<slot />
</button>

<style>
	button {
		border-radius: 0.8rem;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1.1rem 1rem;
		border: 1px solid var(--color-white);
		background: linear-gradient(
			160deg,
			rgba(255, 255, 255, 0.25) 5.08%,
			rgba(37, 83, 128, 0) 105.52%
		);
		box-shadow: 0px 4px 24px -1px rgba(255, 255, 255, 0.25);
		backdrop-filter: blur(30px);
		color: white;
		font-size: 2rem;
		font-weight: 500;
	}

	button.block {
		width: 100%;
	}
</style>
