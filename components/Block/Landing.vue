<template>
	<block-title>
		<GeneralTitle />
		<p>
			A studio built to craft compelling websites that captivate audiences and drive
			business growth.
		</p>
		<ContactButton />

		<picture class="video-container">
			<video autoplay muted loop playsinline :src="vidSource"></video>
		</picture>
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

	picture.video-container {
		border-radius: 10px;
		overflow: hidden;
		position: absolute;
		left: 490px;
		right: 0;
		top: -75px;
		max-width: 50vw;
		height: calc(100% + 25px);
		background-color: var(--accent-color);
		z-index: -20;
	}

	video {
		border-radius: 10px;
		object-fit: cover;
		mix-blend-mode: color-dodge;
		filter: brightness(0.25);
	}
	.overlay {
		background: var(--background);

		background: radial-gradient(at center, #633a8b4d, rgb(var(--background-rgb) / 1));
	}

	@media (min-width: 800px) {
		// .hero-vid-container {
		// 	opacity: 0.5;
		// 	display: block;
		// }
	}
</style>
