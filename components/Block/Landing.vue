<template>
	<block-title>
		<GeneralTitle />
		<p>
			A studio built to craft compelling digital experiences that captivate
			audiences and drive business growth.
		</p>
		<ContactVersiontwo />
		<picture class="hero-vid-container">
			<SvgTriangle class="triangle" />
			<div class="overlay"></div>
			<video autoplay muted loop playsinline src="/steady-vid.mp4"></video>
		</picture>
	</block-title>
</template>
<script setup></script>

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
		margin-top: 100px;
		padding-bottom: 50px;

		p {
			max-width: 30ch;
		}

		@media (min-width: 500px) {
			p {
				margin-left: 3em;
			}
		}
	}

	.hero-vid-container {
		opacity: 0;
		position: absolute;
		top: 10%;
		left: 45%;

		max-height: 500px;
		width: 65vw;
		max-width: 650px;
		height: auto;
		background-color: var(--background);
		transition-duration: 1s;
		z-index: -1;
		rotate: 90deg;
		video {
			object-fit: contain;
			mix-blend-mode: overlay;
		}
		.overlay {
			background: var(--background);

			background: radial-gradient(
				at center,
				#633a8b4d,
				rgb(var(--background-rgb) / 1)
			);
		}
	}

	@media (min-width: 800px) {
		.hero-vid-container {
			opacity: 0.5;
			display: block;
		}
	}
</style>
