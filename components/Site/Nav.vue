<template>
	<header :class="` ${ui.menuClass} main-tool-bar site-header `">
		<inner-column>
			<nav class="main-menu animate-drop-in">
				<SvgSteady class="steady-logo" />
				<button
					class="hamburger-button icon-button"
					@click="ui.toggleMainMenu"
					aria-label="open-menu"
				>
					<div class="mbykw">
						<span></span>
						<span></span>
					</div>
				</button>
			</nav>
		</inner-column>
	</header>
</template>

<script setup>
	import { gsap } from 'gsap';
	import { useInterfaceService } from '~/services/InterfaceService';
	const ui = useInterfaceService();

	onMounted(() => {
		const tl = gsap.timeline();

		tl.to('.steady-logo', {
			opacity: 1,
			x: 0,
		}).to(
			'.hamburger-button',
			{
				opacity: 1,
				x: 0,
			},
			'<',
		);
	});
</script>

<style lang="scss">
	header {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		z-index: 9999;
		background-color: var(--background);

		.steady-logo {
			opacity: 0;
			transform: translateX(-40px);
		}

		inner-column {
			padding: 1rem 1rem;
			height: 100%;
			max-width: none;

			.main-menu {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
			}
		}

		.hamburger-button {
			color: inherit;
			cursor: pointer;
			align-self: flex-start;
			user-select: none;
			background-color: transparent;
			border: none;
			margin: 0;
			padding: 0;
			width: 40px;
			height: 40px;
			position: relative;
			opacity: 0;
			transform: translateX(40px);

			div.mbykw {
				opacity: 0.7;
				justify-content: center;
				align-items: center;

				width: 45px;
				height: 40px;
				margin-left: 0px;
				transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
				display: flex;
				position: relative;

				span:first-child {
					transform: translateY(-6px);
				}
				span:nth-child(2) {
					transform: translateY(3px);
				}
			}

			span {
				background-color: rgb(var(--text-rgb) / 0.8);
				transform-origin: 50% center;
				opacity: 1;
				border-radius: var(--thin);
				width: 50%;
				height: 2px;
				transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
				position: absolute;
				top: 50%;
			}
		}
	}

	header.menu-open {
		div.mbykw {
			opacity: 1;
			span {
				background-color: rgb(var(--text-rgb) / 1);
			}
			span:first-child {
				transform: rotate(45deg);
			}

			span:nth-child(2) {
				transform: rotate(-45deg);
			}
		}
	}
</style>
