<script lang="ts">
	import SvgIcon from '$lib/components/svg-icon.svelte';

	export let heading: string;
	export let id: string;
</script>

<details>
	<summary>
		<span aria-details={id}>{heading}</span>
		<SvgIcon iconName="add-circle" big />
	</summary>
</details>

<div class="summary-content" {id}>
	<div>
		<slot />
	</div>
</div>

<style lang="scss">
	details,
	.summary-content {
		--border: 1px solid #cdeaf5;
	}

	details:last-of-type {
		& + .summary-content {
			border-bottom: var(--border);
		}
	}

	summary {
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
		font-size: 2.4rem;
		font-weight: 600;
		padding: 2.4rem 0 1.8rem;
		border-top: var(--border);
	}

	.summary-content {
		display: grid;
		grid-template-rows: 0fr;
		transition-property: grid-template-rows, padding;
		transition-duration: 0.2s;
		transition-timing-function: ease-in-out;

		details[open] + & {
			grid-template-rows: 1fr;
			padding-bottom: 6.2rem;
		}

		& > div {
			overflow: hidden;
		}
	}
</style>
