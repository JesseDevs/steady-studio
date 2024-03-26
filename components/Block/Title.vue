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

		<NuxtLink to="/" class="contact-link">
			Let's Talk
			<Icon
				name="material-symbols:arrow-right-alt"
				size="30"
				class="icon"
				color="var(--brand-color)"
			/>
			<SvgLine class="line-support" />
		</NuxtLink>
	</block-title>
</template>

<script setup>
	import { gsap } from 'gsap';

	onMounted(() => {
		const spanHeight = 78.4;
		const tl = gsap.timeline({ repeat: -1 });

		tl.fromTo(
			'.span-one',
			{
				top: spanHeight,
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
					top: -spanHeight,
					delay: 2.5,
				},
			)
			.fromTo(
				'.span-two',
				{
					top: spanHeight,
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
					top: -spanHeight,
					delay: 1,
				},
			)
			.fromTo(
				'.span-three',
				{
					top: spanHeight,
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
					top: -spanHeight,
					delay: 1,
				},
			)
			.fromTo(
				'.span-four',
				{
					top: spanHeight,
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
					top: -spanHeight,
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
		padding-top: 100px;

		h1 {
			letter-spacing: -0.05em;
			display: flex;
			flex-direction: column;
			width: 100%;
			font-weight: 700;
			max-width: fit-content;
			position: relative;
		}

		h1.container {
			height: 78.4px;
			max-width: none;

			overflow: hidden;
			span {
				display: block;
				top: 78.4px;
				opacity: 0;
				left: 0;
				position: absolute;
			}
			// .span-one {
			// 	top: 0;
			// }
		}

		p {
			padding-top: 25px;
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
				bottom: -40px;
				left: -10px;
			}

			&:after {
				content: '';
				position: absolute;
				transition: left 0.3s ease-in;
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
	}

	.logo-container {
		position: absolute;
		top: 0;
		right: -150px;
	}
</style>
