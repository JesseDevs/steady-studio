<template>
	<block-about ref="aboutBlock">
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
			margin-top: 50px;
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
		}
	}
</style>
