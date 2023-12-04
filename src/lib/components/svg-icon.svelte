<script lang="ts">
	type IconName = 'twitter' | 'facebook' | 'instagram';

	export let iconName: IconName;
</script>

<svg>
	<use xlink:href={`/sprite.svg#icon-${iconName}`}></use>
</svg>

<style>
	svg {
		width: 1.6rem;
		height: 1.6rem;
		fill: var(--color-white);
	}
</style>
