<template>
	<header :class="` ${ui.menuClass} main-tool-bar site-header `">
		<inner-column>
			<nav class="main-menu animate-drop-in">
				<SvgSteady />
				<button
					class="hamburger-button icon-button"
					@click="ui.toggleMainMenu"
					aria-label="open-menu"
				>
					<div class="mbykw">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</button>
			</nav>
		</inner-column>
	</header>
</template>

<script setup>
	import { useInterfaceService } from '~/services/InterfaceService';
	const ui = useInterfaceService();
</script>

<style lang="scss">
	header {
		inner-column {
			padding: 1rem 0.5rem;
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

			div.mbykw {
				opacity: 0.7;
				justify-content: center;
				align-items: center;

				width: 40px;
				height: 40px;
				margin-left: 0px;
				transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
				display: flex;
				position: relative;

				span:first-child {
					transform: translateY(-6px);
				}
				span:nth-child(3) {
					transform: translateY(6px);
				}
			}

			span {
				background-color: var(--brand-color);
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
				background-color: black;
			}
			span:first-child {
				transform: rotate(45deg);
			}
			span:nth-child(2) {
				opacity: 0;
			}
			span:nth-child(3) {
				transform: rotate(-45deg);
			}
		}
	}
</style>
