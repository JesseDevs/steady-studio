<template>
	<block-about>
		<box-cards>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</box-cards>
	</block-about>
</template>

<script setup></script>

<style lang="scss" scoped>
	block-about {
		display: flex;
		flex-direction: column;
		width: 100%;
		position: relative;
		height: 500px;

		box-cards {
			display: flex;
			gap: 1.6rem;
			position: absolute;
			top: 50%;
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

				&:nth-child(1) {
					background-color: rgb(var(--brand-color-rgb) / 0.8);
				}
				&:nth-child(2) {
					background-color: rgb(var(--brand-color-rgb) / 0.8);
				}
				&:nth-child(3) {
					background-color: rgb(var(--brand-color-rgb) / 0.6);
				}
				&:nth-child(4) {
					background-color: rgb(var(--brand-color-rgb) / 0.3);
				}
			}
		}
	}
</style>
