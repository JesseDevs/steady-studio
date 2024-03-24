<template>
	<modal-content>
		<nav>
			<ul class="modal-btns">
				<li>
					<NuxtLink class="level-one-voice" to="/">About</NuxtLink>
				</li>
				<li>
					<NuxtLink class="level-one-voice" to="/">Services</NuxtLink>
				</li>
				<li>
					<NuxtLink class="level-one-voice" to="/">Projects</NuxtLink>
				</li>

				<li>
					<NuxtLink class="level-one-voice" to="/">Get in touch</NuxtLink>
				</li>
			</ul>
		</nav>
	</modal-content>
</template>

<script setup>
	import { useInterfaceService } from '~/services/InterfaceService';

	const ui = useInterfaceService();
</script>

<style lang="scss">
	modal-content {
		touch-action: manipulation;
		background-color: var(--background);

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		// max-width: 360px;
		height: 40%;
		min-height: 30vh;

		overflow: hidden;
		border-bottom: var(--thin) solid rgb(var(--outline-color-rgb) / 0.5);

		transition: top 0.3s ease-in-out, opacity 0.3s ease;

		position: absolute;
		top: -100%;
		bottom: 0;
		right: 0;
		left: 0;

		nav {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 100%;
			display: flex;
			overflow-x: hidden;
			overflow-y: auto;
		}
	}

	.modal-btns {
		padding-top: 1em;
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		gap: 5px;
		height: 100%;
		li {
			width: 100%;
			a {
				opacity: 0;
				display: block;
				width: 100%;
				padding: 8px 16px;
				font-weight: 500;
			}
		}

		li:last-of-type {
			align-self: flex-end;
			width: auto;
			margin-top: auto;
			padding-right: 15px;
			padding-bottom: 2rem;
			a {
				border-radius: 999px;
				padding: 12px 24px;
				width: fit-content;
				color: var(--white-text);
				background-color: var(--brand-color);
			}
		}
	}

	glass-container.menu-open {
		modal-content {
			top: 0;
		}
		.modal-btns {
			a {
				transition: opacity 0.7s ease;
				opacity: 1;
			}
		}
	}
</style>
