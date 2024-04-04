<template>
	<block-about ref="aboutBlock" id="about-block">
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
			<p class="align-right">We make them happen.</p>

			<SvgSmallLogo class="small-box" />
		</div>
	</block-about>
</template>

<script setup>
	import { gsap } from 'gsap';
</script>

<style lang="scss" scoped>
	@keyframes ball-animate {
		0% {
			transform: translateY(50px) scale(0.1) rotate(0deg);
			opacity: 0;
		}
		10% {
			opacity: 1;
		}
		50% {
			transform: translateY(-30px) scale(1) rotate(360deg);
		}
		100% {
			transform: translateY(0) scale(1);
			bottom: 15px;
		}
	}

	@keyframes ball-delay {
		0% {
			opacity: 1;
			transform: scale(1);
		}

		100% {
			opacity: 0;
			transform: scale(0);
		}
	}

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

			gap: 20px;
			min-height: 370px;
		}

		.bg-highlight {
			background-color: var(--hover-color);
		}

		.big-block {
			background-color: var(--brand-color);
			margin-top: 13vh;
			padding: 15px;
			display: flex;
			flex-direction: column;
			font-weight: 800;
			border-radius: 7px;
			gap: 50px;
			text-transform: uppercase;
			overflow: hidden;
			position: relative;

			p {
				font-size: inherit;
				position: relative;
			}
			p:nth-of-type(2) {
				align-self: flex-end;
			}

			.align-right {
				text-align: right;
			}
		}

		.svg-pos {
			position: relative;
			display: inline-block;
		}

		.small-box {
			position: absolute;
			left: 15px;
			bottom: 15px;
			opacity: 1;

			animation: ball-animate 3s alternate;
			animation-iteration-count: 2.8;
		}
	}
</style>
