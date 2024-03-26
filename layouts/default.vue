<template>
	<div class="app-container">
		<LazyModalContainer />
		<Space />
		<SiteNav />

		<slot />

		<SiteFooter />
	</div>
</template>

<script setup>
	import { useInterfaceService } from '~/services/InterfaceService';
	const ui = useInterfaceService();

	onMounted(() => {});
</script>

<style lang="scss">
	.app-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;

		main {
			min-height: 100vh;
		}
	}

	@media (min-width: 600px) {
	}

	@media (min-width: 850px) {
	}
</style>
