<script>
	import Img from '@zerodevx/svelte-img';

	import SvgIcon from './svg-icon.svelte';

	import removeImgBgOnLoad from '$lib/utils/removeImgBgOnLoad';

	import logo from '$lib/assets/images/logo.png?as=run';
</script>

<footer>
	<section class="links-section">
		<div class="logo-container">
			<Img src={logo} alt="Pluto logo" on:load={removeImgBgOnLoad} />
		</div>

		<div class="links">
			<nav class="nav" aria-labelledby="plutoexperience.com">
				<h2 id="plutoexperience.com">Plutoexperience.com</h2>

				<ul>
					<li><a href="/#">Activities</a></li>
					<li><a href="/#">About</a></li>
					<li><a href="/#">Partnership</a></li>
					<li><a href="/#">Privacy policy</a></li>
				</ul>
			</nav>

			<nav class="nav" aria-labelledby="services">
				<h2 id="services">Services</h2>

				<ul>
					<li><a href="/#">Get tickets</a></li>
				</ul>
			</nav>

			<nav class="nav" aria-labelledby="support">
				<h2 id="support">Support</h2>

				<ul>
					<li><a href="/#">Contact us</a></li>
					<li><a href="/#">FAQs</a></li>
				</ul>
			</nav>
		</div>

		<nav aria-label="social links">
			<ul class="social-links">
				<li><a href="https://x.com"><SvgIcon iconName="twitter" /></a></li>
				<li><a href="https://facebook.com"><SvgIcon iconName="facebook" /></a></li>
				<li><a href="https://instagram.com"><SvgIcon iconName="instagram" /></a></li>
			</ul>
		</nav>
	</section>

	<section class="copyright-section">
		<p>&copy; {new Date().getFullYear()} plutoexperience.com. All rights reserved</p>
	</section>
</footer>

<style>
	.logo-container {
		width: 17.7rem;
	}

	footer {
		background: linear-gradient(180deg, #550e85 0%, rgba(73, 19, 187, 0.78) 100%);
		padding: 5.8rem 13rem 3.7rem;
		padding-right: 6.8rem;
		color: var(--color-white);
	}

	.links-section {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		gap: 17.3rem;
	}

	.links {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		max-width: 59.2rem;
		width: 100%;
	}

	.nav {
		font-size: 1.4rem;

		& > h2 {
			font-weight: 600;
			margin-bottom: 2rem;
		}

		& > ul > li {
			text-transform: capitalize;

			&:not(:last-child) {
				margin-bottom: 1rem;
			}
		}
	}

	.social-links {
		display: flex;
		align-items: center;
		gap: 3.3rem;

		& svg {
			width: 2.4rem;
			height: 1.9rem;
		}
	}

	.copyright-section {
		margin-top: 3.5rem;
		text-align: center;
		font-size: 1.4rem;

		& > p {
			max-width: 118.4rem;
			padding-top: 3rem;
			margin: 0 auto;
			border-top: 1px solid var(--color-site-c);
		}
	}
</style>
