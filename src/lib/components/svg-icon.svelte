<script lang="ts">
	type IconName = 'twitter' | 'facebook' | 'instagram' | 'add-circle' | 'location' | 'ticket';

	export let iconName: IconName;
	export let big = false;
</script>

<svg class:big>
	<use xlink:href={`/sprite.svg#icon-${iconName}`}></use>
</svg>

<style>
	svg {
		width: 1.6rem;
		height: 1.6rem;
		fill: var(--color-white);
	}

	svg.big {
		width: 2.4rem;
		height: 2.4rem;
	}
</style>
