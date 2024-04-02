<template>
	<block-about>
		<BoxCards />
		<text-content>
			<p>
				<span class="bg-highlight">Web design is an endless endeavor.</span>
				Staying ahead in this ever-evolving landscape can make realizing your
				vision feel overwhelming.
			</p>
			<p>
				Steady Stuido is a team assembled by designers and developers who
				understand these challenges. We possess the
				<strong>technical, creative, and strategic expertise</strong>
				to bring your digital dreams to life.
			</p>
		</text-content>

		<div class="big-block level-one-voice">
			<p>The digital world is brimming with grand ideas...</p>
			<p>We make them happen.</p>

			<SvgSmallLogo class="small-box" />
		</div>
	</block-about>
</template>

<script setup>
	import { gsap } from 'gsap';
	onMounted(() => {
		const tl = gsap.timeline();

		tl.to('.small-box', {
			delay: 1,
			opacity: 1,
			y: '-100px',
			rotate: 360,
			scale: 1,
			transformOrigin: 'center',
			ease: 'power1.out',
		}).to(
			'.small-box',
			{
				y: '10px',
				duration: 0.5,
				ease: 'power1.inOut',
			},
			'-=.27',
		);
	});
</script>

<style lang="scss" scoped>
	block-about {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		position: relative;

		gap: 20px;

		text-content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 100%;
			position: relative;
			padding-top: 60px;
			gap: 20px;
		}

		.bg-highlight {
			background-color: var(--hover-color);
		}

		.big-block {
			background-color: var(--brand-color);
			margin-top: 90px;
			padding: 15px;
			display: flex;
			flex-direction: column;
			font-weight: 800;
			border-radius: 7px;
			gap: 20px;
			text-transform: uppercase;
			overflow: hidden;

			p {
				font-size: inherit;
				position: relative;
			}
			p:nth-of-type(2) {
				align-self: flex-end;
			}
		}

		.svg-pos {
			position: relative;
			display: inline-block;
		}

		.svg-elipse {
			width: 125px;
			height: 150px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			opacity: 0;
		}
		.small-box {
			position: absolute;
			left: 25px;
			opacity: 0;
			bottom: 15px;
			transform: translateY(100px);
			scale: 2;
		}
	}
</style>
