<template>
	<box-cards>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</box-cards>
</template>

<script setup></script>

<style lang="scss" scoped>
	box-cards {
		opacity: 1;
		display: flex;
		gap: 1.6rem;
		position: absolute;
		z-index: -1;
		top: 47%;

		left: -45%;
		transform: translate(0%, -50%);

		div {
			display: flex;
			height: 30vw;
			max-height: 350px;
			width: 25vw;
			max-width: 300px;
			align-items: center;
			justify-content: center;
			--translate-value: calc(-100% + -1.6rem);
			transform: translateX(-100%);
			border-radius: 3px;

			&:nth-child(1) {
				transform: translateX(var(--translate-value));
				background-color: rgb(var(--brand-color-rgb) / 0.7);
			}
			&:nth-child(2) {
				transform: translateX(var(--translate-value));

				background-color: rgb(var(--brand-color-rgb) / 0.6);
			}
			&:nth-child(3) {
				transform: translateX(-200%);
				background-color: rgb(var(--brand-color-rgb) / 0.4);
			}
			&:nth-child(4) {
				transform: translateX(-300%);
				background-color: rgb(var(--brand-color-rgb) / 0.2);
			}
		}
	}
</style>
