<template>
	<NuxtLink :to="location">
		<span>{{ btnText }}</span>
		<Icon
			name="material-symbols-light:arrow-outward-rounded"
			size="30"
			class="icon"
		/>
	</NuxtLink>
</template>

<script setup>
	const props = defineProps({
		btnText: String,
		location: String,
	});
</script>

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
	}
</style>
