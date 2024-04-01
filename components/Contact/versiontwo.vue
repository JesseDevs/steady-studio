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
		svg {
			stroke: var(--text);
			stroke-width: 2px;
		}
		span {
			display: block;
		}
	}
</style>
