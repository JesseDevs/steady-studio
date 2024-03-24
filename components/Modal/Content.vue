<template>
	<modal-content>
		<nav><NuxtLink to="/">Services</NuxtLink></nav>
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
		height: 45%;
		min-height: 30vh;

		overflow: hidden;
		border-bottom: var(--thin) solid rgb(var(--outline-color-rgb) / 0.5);

		transition: top 0.2s ease-in-out, opacity 0.3s ease;

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

	glass-container.menu-open {
		modal-content {
			top: 0;
		}
	}

	.modal-BTNs {
		padding: 16px;
		display: flex;

		flex-direction: column;
		gap: 16px;
		a {
			border-radius: 3px;
			height: 48px;
			padding: 6px 15px;
			font-weight: 600;
			color: var(--button-text);
			background-color: var(--button-bg);
			box-shadow: var(--button-box) 0 4px 9px;
			justify-content: center;
			align-items: center;
			text-decoration: none;
			display: flex;
			text-transform: capitalize;

			transition: background-color 0.3s ease-in-out;
			&:hover {
				background-color: var(--button-bg-hover);
				box-shadow: var(--button-box-hover) 0 6px 12px;
			}
		}

		.button-filled {
			color: var(--button-text);
			background-color: var(--button-bg);
			box-shadow: var(--button-box) 0 4px 9px;

			width: 100%;
			appearance: none;
			border: none;
			outline: none;

			transition: background-color 0.3s ease-in-out;
			&:hover {
				background-color: var(--button-bg-hover);
				box-shadow: var(--button-box-hover) 0 6px 12px;
			}
		}
	}
</style>
