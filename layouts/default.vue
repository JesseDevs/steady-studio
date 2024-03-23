<template>
	<div class="app-container">
		<LazyModalContainer />
		<SiteNav />
		<main>
			<slot />
		</main>
		<SiteFooter />
	</div>
</template>

<script setup>
	import { useInterfaceService } from '~/services/InterfaceService';
	const ui = useInterfaceService();

	onMounted(() => {});
</script>

<style lang="scss" scoped>
	.app-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;

		main {
			min-height: 100vh;

			section {
				overflow-y: hidden;
			}
		}
	}

	@media (min-width: 600px) {
	}

	@media (min-width: 850px) {
	}

	div.space-holder {
		height: 46px;
		width: 100%;
		display: block;
		background-color: var(--background);
	}
</style>
