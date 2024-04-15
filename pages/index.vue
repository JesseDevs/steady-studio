<template>
	<main>
		<GeneralContainer class="landing">
			<BlockLanding />
		</GeneralContainer>
		<!-- <GeneralContainer class="work">
			<BlockWork />
		</GeneralContainer> -->
		<GeneralContainer class="about">
			<BlockAbout />
		</GeneralContainer>
		<GeneralContainer class="contact" id="contact">
			<BlockContact />
		</GeneralContainer>
	</main>
</template>

<script setup>
	import { gsap } from 'gsap';
	// const myElement = ref(null);

	onMounted(() => {
		// const myAnimation = gsap.timeline();
		// myAnimation.from(myElement.value, {
		// 	opacity: 0,
		// 	duration: 2,
		// 	ease: 'power2.out',
		// });
	});
</script>

<style lang="scss" scoped></style>
