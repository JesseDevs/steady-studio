<template>
	<block-title>
		<h1 class="level-three-voice">Stay</h1>
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

		h1 {
			letter-spacing: -0.05em;
			display: flex;
			flex-direction: column;
			width: 100%;
			font-weight: 700;
		}

		h1.container {
			height: 78.4px;

			position: relative;
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
	}
</style>
