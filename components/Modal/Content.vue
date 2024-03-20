<template>
	<modal-content>
		<nav></nav>
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
		width: 90vw;
		max-width: 360px;
		height: 100%;

		overflow: hidden;
		border-right: var(--thin) solid rgb(var(--outline-color-rgb) / 0.5);

		transition: left 0.2s ease;
		position: absolute;
		top: 0%;
		bottom: 0;
		right: 0;
		left: -100%;

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
			left: 0;
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

	.palette-button {
		padding: 8px 16px;
		border-radius: 3px;
		display: flex;
		align-items: center;
		gap: 8px;
		width: 100%;
		background-color: transparent;
		border: none;
		outline: none;
		color: rgba(var(--white-rgb) / 0.65);
		cursor: pointer;
		transition: background-color 0.2s ease;
		p {
			pointer-events: none;
		}

		&:hover {
			background-color: rgba(var(--white-rgb) / 0.09);
		}
	}

	p.index-display {
		text-transform: capitalize;
		margin-left: auto;
		position: relative;
		span {
			position: absolute;
		}
	}

	p.show-theme {
		padding: 0px 1rem;
		span {
			text-transform: capitalize;
		}
	}
</style>
