<template>
	<main>
		<GeneralContainer class="landing">
			<BlockLanding class="box-block" />
		</GeneralContainer>

		<GeneralContainer class="about" id="about">
			<BlockAbout class="box-block" />
		</GeneralContainer>
		<GeneralContainer class="contact" id="contact">
			<BlockContact class="box-block" />
		</GeneralContainer>
	</main>
</template>

<script setup>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	onMounted(() => {
		gsap.registerPlugin(ScrollTrigger);
		const boxes = gsap.utils.toArray('.box-block');

		boxes.forEach((box, i) => {
			const anim = gsap.fromTo(
				box,
				{ autoAlpha: 0, y: 50 },
				{ duration: 1, autoAlpha: 1, y: 0 },
			);
			ScrollTrigger.create({
				trigger: box,
				animation: anim,
				start: 'top+=50 center',
				toggleActions: 'play none none none',
				once: true,
			});
		});
	});
</script>

<style lang="scss" scoped></style>
