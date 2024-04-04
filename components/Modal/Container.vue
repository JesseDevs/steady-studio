<template>
	<ClientOnly>
		<Teleport to=".site-footer">
			<glass-container
				@click="handleModalContainerClick"
				:class="`${ui.menuClass}`"
			>
				<ModalContent />
			</glass-container>
		</Teleport>
	</ClientOnly>
</template>

<script setup>
	import { useInterfaceService } from '~/services/InterfaceService';
	const ui = useInterfaceService();

	const handleModalContainerClick = (event) => {
		if (!event.target.closest('modal-content')) {
			ui.closeMenu();
		}
	};
</script>

<style lang="scss">
	glass-container {
		min-height: 100%;
		z-index: 100;
		display: block;
		width: 100%;
		background: var(--color-black-20);
		transition: opacity 0.5s ease;
		position: fixed;

		top: 60px;
		left: 0;
		right: 0;
		transform: translateZ(0);
		backdrop-filter: blur(3px);
		opacity: 0;
		pointer-events: none;
	}

	glass-container.menu-open {
		opacity: 1;
		pointer-events: auto;
		transition: opacity 0.2s cubic-bezier(0.54, -0.01, 0.44, 0.73);
	}
</style>
