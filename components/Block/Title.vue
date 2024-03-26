<template>
	<block-title>
		<h1 class="level-three-voice">
			Stay
			<SvgLogo class="logo-container" />
		</h1>
		<h1 class="level-three-voice container">
			<span class="span-one">Steady.</span>
			<span class="span-two">Resilient.</span>
			<span class="span-three">Grounded.</span>
			<span class="span-four">Driven.</span>
		</h1>
		<p>
			A studio built to craft compelling digital experiences that captivate
			audiences and drive business growth.
		</p>

		<NuxtLink to="/" class="contact-link level-one-voice">
			Let's Talk
			<Icon
				name="material-symbols:arrow-right-alt"
				size="30"
				class="icon"
				color="var(--brand-color)"
			/>
			<SvgLine class="line-support" />
		</NuxtLink>

		<picture class="hero-vid-container">
			<SvgTriangle class="triangle" />
			<div class="overlay"></div>
			<video autoplay muted loop playsinline src="/steady-vid.mp4"></video>
		</picture>
	</block-title>
</template>

<script setup>
	import { gsap } from 'gsap';
	import { useWindowSize } from '@vueuse/core';
	const { width, height } = useWindowSize();

	const spanHeight = computed(() => {
		return width.value > 498 && width.value !== Infinity ? '115.2' : '67.2';
	});

	onMounted(() => {
		const tl = gsap.timeline({ repeat: -1 });

		tl.fromTo(
			'.span-one',
			{
				top: spanHeight.value,
				ease: 'power4.out',
			},
			{
				opacity: 1,
				top: 0,
			},
		)

			.fromTo(
				'.span-one',
				{
					duration: 0.8,
					top: 0,
					ease: 'power4.out',
				},
				{
					top: -spanHeight.value,
					delay: 2.5,
				},
			)
			.fromTo(
				'.span-two',
				{
					top: spanHeight.value,
					ease: 'power4.out',
				},
				{
					opacity: 1,
					top: 0,
				},
				'<',
			)

			.fromTo(
				'.span-two',
				{
					duration: 0.8,
					top: 0,
					ease: 'power4.out',
				},
				{
					top: -spanHeight.value,
					delay: 1,
				},
			)
			.fromTo(
				'.span-three',
				{
					top: spanHeight.value,
					ease: 'power4.out',
				},
				{
					opacity: 1,
					top: 0,
				},
				'<',
			)

			.fromTo(
				'.span-three',
				{
					duration: 0.8,
					top: 0,
					ease: 'power4.out',
				},
				{
					top: -spanHeight.value,
					delay: 1,
				},
			)
			.fromTo(
				'.span-four',
				{
					top: spanHeight.value,
					ease: 'power4.out',
				},
				{
					opacity: 1,
					top: 0,
				},
				'<',
			)

			.fromTo(
				'.span-four',
				{
					duration: 0.8,
					top: 0,
					ease: 'power4.out',
				},
				{
					top: -spanHeight.value,
					delay: 1,
				},
			);
	});
</script>

<style lang="scss" scoped>
	block-title {
		display: block;
		width: 100%;
		position: relative;
		margin-top: 100px;
		padding-bottom: 50px;

		h1 {
			letter-spacing: -0.05em;
			display: flex;
			flex-direction: column;
			width: 100%;
			font-weight: 700;
			max-width: fit-content;
			position: relative;
			line-height: 1.2;
		}

		h1.container {
			height: 67.2px;
			max-width: none;

			overflow: hidden;
			span {
				display: block;
				top: 67.2px;
				opacity: 0;
				left: 0;
				position: absolute;
			}
		}

		p {
			padding-top: 25px;
			max-width: 30ch;
		}

		.contact-link {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			max-width: fit-content;
			gap: 40px;
			font-weight: 500;
			padding-top: 30px;
			position: relative;

			.icon {
				transition: opacity 0.3s ease-in;
				stroke: var(--black);
				stroke-width: 0;
				opacity: 0.5;
			}

			.line-support {
				position: absolute;
				width: 100%;
				bottom: -45px;
				left: -10px;
			}

			&:after {
				content: '';
				position: absolute;
				transition: left 0.4s ease-in-out;
				bottom: -30px;
				left: -10px;
				background-color: rgb(var(--background-rgb) / 0.5);
				width: 100%;
				height: 50%;
			}
			&:hover {
				.icon {
					opacity: 1;
				}

				&:after {
					left: 100%;
				}
			}
		}

		@media (min-width: 500px) {
			h1.level-three-voice {
				font-size: var(--text-2xl);
			}
			h1.container {
				height: 115.4px;
			}
			p {
				margin-left: 3em;
			}

			// .contact-link {
			// 	margin-left: 3em;
			// }
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

	.logo-container {
		position: absolute;
		top: -125px;
		right: -210px;

		@media (min-width: 500px) {
			top: -75px;
			right: -280px;
		}
	}

	.triangle {
		position: absolute;
		bottom: -50%;
		right: -60px;
		opacity: 0;
		z-index: 10;
		display: none;
	}

	@media (min-width: 800px) {
		h1:not(.container) {
			// position: static;

			// .logo-container {
			// 	top: -125px;
			// 	right: -40px;
			// 	z-index: 3;
			// }
		}
		.triangle {
			opacity: 1;
		}
		.hero-vid-container {
			opacity: 0.5;
			display: block;
		}
	}
</style>
