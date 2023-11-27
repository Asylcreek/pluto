<script>
	import { page } from '$app/stores';

	import routes from '$lib/helpers/routes';

	const navItems = [
		{ href: routes.home(), title: 'Home' },
		{ href: '/#', title: 'About' },
		{ href: '/#', title: 'FAQs' },
		{ href: '/#', title: 'Map' },
		{ href: '/#', title: 'Contact' }
	];
</script>

<header>
	<div>
		<a href={routes.home()} class="logo-container">
			<img src="/images/logo.png" alt="Pluto logo" />
		</a>

		<nav>
			<ul>
				{#each navItems as navItem}
					{@const isActive = $page.url.pathname === navItem.href}

					<li>
						<a href={navItem.href} class:active={isActive} aria-current={isActive ? 'page' : null}
							>{navItem.title}</a
						>
					</li>
				{/each}
			</ul>
		</nav>

		<button>Get tickets</button>
	</div>
</header>

<style>
	header {
		width: 100%;
		background: linear-gradient(160deg, #4b5563 5.08%, rgba(255, 255, 255, 0.1) 105.52%);
		box-shadow: 0px 4px 2.4rem -1px rgba(255, 255, 255, 0.25);
		backdrop-filter: blur(3rem);
		padding: 2rem 1rem;
		color: var(--color-white);
	}

	header > div {
		max-width: var(--max-width);
		margin: 0 auto;
		display: flex;
		align-items: center;
	}

	.logo-container {
		width: 17.7rem;
		margin-right: 12.7rem;
	}

	nav {
		margin: 0 auto;
	}

	ul {
		display: flex;
		align-items: center;
		width: 100%;
	}

	li {
		& > a {
			text-transform: capitalize;

			&.active {
				font-weight: 600;
			}
		}

		&:not(:last-child) {
			margin-right: 3.2rem;
		}
	}

	button {
		margin-left: 11.6rem;
		border-radius: 2.4rem;
		padding: 1rem 0.8rem;
		text-transform: capitalize;
		background-color: var(--color-site);
		width: 17.2rem;
		color: inherit;
		margin-left: auto;
	}
</style>
