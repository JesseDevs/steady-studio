<template>
	<div>
		<h1 class="level-three-voice">
			Stay
			<SvgLogo class="logo-container" />
		</h1>
		<h1 class="level-three-voice container">
			<span class="span-one">Steady<brand-block>.</brand-block></span>
			<span class="span-two">Resilient<brand-block>.</brand-block></span>
			<span class="span-three">Grounded<brand-block>.</brand-block></span>
			<span class="span-four">Driven<brand-block>.</brand-block></span>
		</h1>
	</div>
</template>

<script setup>
	import { gsap } from 'gsap';
	import { useWindowSize } from '@vueuse/core';
	const { width, height } = useWindowSize();

	const spanHeight = ref('115.2');

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

	watchEffect(() => {
		spanHeight.value = width.value > 498 && width.value !== Infinity ? 115.2 : 67.2;
	});
</script>

<style lang="scss" scoped>
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

	.logo-container {
		position: absolute;
		top: -70px;
		left: 130%;
		min-width: 150px;
		min-height: 150px;

		@media (min-width: 500px) {
			top: -75px;
			right: -280px;
		}
	}

	@media (min-width: 500px) {
		h1.level-three-voice {
			font-size: var(--text-2xl);
		}
		h1.container {
			height: 115.4px;
		}
	}
</style>
