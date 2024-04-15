<template>
	<modal-content>
		<nav>
			<ul class="modal-btns">
				<li>
					<NuxtLink class="level-one-voice" @click="ui.closeMenu" to="/"
						>Home

						<Icon name="ph:arrow-circle-down-right-light" size="30" />
					</NuxtLink>
				</li>
				<li>
					<NuxtLink
						class="level-one-voice"
						to="#about-block"
						@click="ui.closeMenu"
					>
						About
						<Icon name="ph:arrow-circle-down-right-light" size="30" />
					</NuxtLink>
				</li>
				<li>
					<NuxtLink class="level-one-voice" @click="ui.closeMenu" to="/"
						>Services

						<Icon name="ph:arrow-circle-down-right-light" size="30" />
					</NuxtLink>
				</li>
				<li>
					<NuxtLink class="level-one-voice" @click="ui.closeMenu" to="/"
						>Projects

						<Icon name="ph:arrow-circle-down-right-light" size="30" />
					</NuxtLink>
				</li>

				<li>
					<NuxtLink
						class="level-one-voice loading-link"
						@click="ui.closeMenu"
						to="/#contact"
						><span>Get in touch</span>
						<Icon
							name="material-symbols-light:arrow-outward-rounded"
							size="30"
						/>
					</NuxtLink>
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
		height: 44%;
		min-height: 30vh;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		border-bottom: 1px solid red;

		overflow: hidden;
		border-bottom: 2px solid rgb(var(--brand-color-rgb) / 0.5);
		box-shadow: 0 2px 5px rgb(var(--brand-color-rgb) / 0.3);

		transition: top 0.3s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.3s ease;

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
		display: flex;
		justify-content: center;
		padding-bottom: 50px;
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
				padding: 10px 1.5rem;
				font-weight: 600;
				display: flex;
				align-items: center;
				justify-content: space-between;

				svg {
					transition: transform 0.3s ease;
					transform: rotate(90deg);
					stroke: var(--text);
					stroke-width: 6px;
					outline: none;
				}

				&:hover {
					svg {
						transform: rotate(-45deg);
					}
				}
			}
		}

		li:last-of-type {
			a {
				svg {
					transition: transform 0.3s ease, opacity 0.5s ease;
					opacity: 0.1;
					stroke-width: 2px;
					transform: rotate(0);
				}
			}
		}
	}

	glass-container.menu-open {
		modal-content {
			transition: top 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
			top: 0;
		}
		.modal-btns {
			a {
				transition: opacity 0.7s ease, background-color 0.3s ease;
				opacity: 1;
			}
		}
	}

	.loading-link {
		position: relative;
		overflow: hidden;
		z-index: 1;
		span {
			z-index: 10;
		}
	}

	.loading-link::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background-color: rgb(var(--accent-color-rgb) / 0.5);
		transition: left 0.3s ease-in;
		z-index: 0;
	}

	.loading-link::after {
		content: '';
		position: absolute;
		top: 0;
		left: 100%;
		width: 100%;
		height: 100%;
		background-color: rgb(var(--accent-color-rgb) / 0.5);
		transition: left 0.3s ease-in;
		z-index: 0;
	}

	.loading-link:hover {
		svg {
			opacity: 1 !important;
		}
		&:before {
			left: 0;
		}
		&:after {
			left: 0;
		}
	}
</style>
