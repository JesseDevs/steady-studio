<template>
	<NuxtLink to="/">
		<span>Let's Talk</span>
		<Icon
			name="material-symbols-light:arrow-outward-rounded"
			size="30"
			class="icon"
		/>
	</NuxtLink>
</template>

<script setup></script>

<style lang="scss" scoped>
	a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--accent-color);
		padding: 10px 20px;
		border-radius: 7px;
		font-weight: 600;
		transition: background-color 0.3s ease-in-out;
		max-width: 540px;
		position: relative;

		&:hover {
			background-color: var(--hover-color);
		}
		svg {
			stroke: var(--text);
			stroke-width: 2px;
		}
		span {
			display: block;
		}

		&::before {
			display: none;
			content: '';
			position: absolute;
			right: -35px;
			top: -35px;
			width: 120px;
			height: 120px;
			border-radius: 50%;

			background-color: var(--background);
			pointer-events: none;
			z-index: -10;
			transition: background-color 0.4s ease-in-out;
		}

		&:hover:before {
			background-color: var(--text);
		}

		@media (min-width: 500px) {
			&:before {
				display: block;
			}
		}
	}
</style>
