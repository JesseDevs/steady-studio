<template>
	<block-title>
		<GeneralTitle />
		<p>
			A studio built to craft compelling digital experiences that captivate
			audiences and drive business growth.
		</p>
		<ContactButton />

		<div class="test">
			<div class="test-div"></div>
			<div class="support-div"></div>
			<div class="third-div"></div>
			<video autoplay muted loop playsinline :src="vidSource"></video>
		</div>
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
		});
	});
</script>

<style lang="scss" scoped>
	div.test {
		background-color: var(--background);
		position: absolute;
		left: 490px;
		top: -140px;
		right: -20px;
		height: calc(100% + 90px);
		z-index: -10;
		border-radius: 7px;
		overflow: hidden;

		div.test-div {
			background-color: var(--accent-color);
			// background: radial-gradient(
			// 	circle,
			// 	rgba(107, 130, 166, 1) 0%,
			// 	rgba(53, 119, 154, 1) 100%
			// );
			position: absolute;

			right: 0;
			top: 0;
			width: 100%;
			border-radius: 10px;
			border-bottom-right-radius: 0px;
			height: calc(100% - 60px);
		}
		div.third-div {
			background-color: var(--accent-color);
			position: absolute;
			left: 30px;
			bottom: 20px;
			height: 10px;
			width: 50px;
			border-radius: 10px;
			border-bottom-right-radius: 0px;
			height: 40px;
		}
		div.support-div {
			background-color: var(--accent-color);
			position: absolute;

			right: 0;
			bottom: 0;

			width: calc(100% - 60px);
			border-radius: 7px;
			height: 70px;
		}

		&:after {
			content: '';

			position: absolute;
			left: 0;
			bottom: 0;
			width: 60px;
			height: 60px;
			background-color: var(--background);

			border-top-right-radius: 7px;
		}
	}
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
		margin-top: 100px;
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

	video {
		position: absolute;

		border-radius: 7px;
		object-fit: cover;
		mix-blend-mode: color-dodge;
		filter: brightness(0.5);
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
