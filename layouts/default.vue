<template>
	<div class="app-container">
		<ModalContainer />

		<Space />
		<SiteNav />

		<slot />

		<SiteFooter id="footer" />
	</div>
</template>

<script setup>
	import { useInterfaceService } from '~/services/InterfaceService';
	const ui = useInterfaceService();

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	onMounted(() => {
		gsap.registerPlugin(ScrollTrigger);
		ScrollTrigger.create({
			trigger: 'footer-block',
			start: 'top bottom',
			end: 'bottom top',
			scrub: true,
			markers: true,
			onToggle: (self) => {
				if (self.direction === 1) {
					// Scroll down
					document.documentElement.style.setProperty(
						'--background',
						'rgb(250 250 250)',
					);
					document.documentElement.style.setProperty('--text', 'rgb(13 15 15)');
					document.documentElement.style.setProperty('--text-rgb', '13 15 15');
					document.documentElement.style.setProperty(
						'--accent-color',
						'var(--brand-color)',
					);
					document.documentElement.style.setProperty(
						'--accent-color-rgb',
						'var(--brand-color-rgb)',
					);
				} else {
					// Scroll up
					document.documentElement.style.setProperty('--background', '');
					document.documentElement.style.setProperty('--text', '');
					document.documentElement.style.setProperty('--text-rgb', '');
					document.documentElement.style.setProperty('--accent-color-rgb', '');
					document.documentElement.style.setProperty('--accent-color', '');
				}
			},
		});
	});
</script>

<style lang="scss">
	.app-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;

		main {
			min-height: 100vh;
			section {
				overflow: hidden;
			}
		}
	}

	@media (min-width: 600px) {
	}

	@media (min-width: 850px) {
	}
</style>
