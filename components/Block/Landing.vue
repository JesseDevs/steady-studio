<template>
	<block-title>
		<GeneralTitle />
		<p>
			A studio built to craft compelling websites that captivate audiences and drive
			business growth.
		</p>
		<ContactButton btnText="Let’s Talk" location="/#contact" />
	</block-title>
</template>
<script setup>
	import { gsap } from 'gsap';
	const vidSource = ref('/steady-vid.mp4');

	onMounted(() => {
		const tl = gsap.timeline();

		tl.to('block-title', {
			delay: 0.3,
			opacity: 1,
			y: 0,
			ease: 'power4.out',
		});
	});
</script>

<style lang="scss" scoped>
	brand-block {
		width: 100%;
		display: inline;
		color: var(--brand-color);
	}
	block-title {
		display: flex;
		flex-direction: column;
		gap: 25px;
		width: 100%;
		position: relative;
		padding-bottom: 50px;
		opacity: 0;
		transform: translateY(40px);

		p {
			max-width: 30ch;
		}

		@media (min-width: 500px) {
			p {
				margin-left: 3em;
			}
		}
	}

	@media (min-width: 800px) {
		// .hero-vid-container {
		// 	opacity: 0.5;
		// 	display: block;
		// }
	}
</style>
