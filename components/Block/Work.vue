<template>
	<block-work>
		<text-content>
			<h2 class="level-two-voice">Our Work</h2>
			<p>
				We're storytellers who immerse ourselves in your brand's narrative. We
				believe in crafting digital experiences that resonate deeply with your
				audience, reflecting your unique vision and values.
			</p>
		</text-content>
		<ul>
			<li>
				<block-card>
					<card-menu>
						<p>Design & Develop</p>
						<Icon name="ph:arrow-circle-down-right-light" size="30"
					/></card-menu>
				</block-card>
			</li>
			<li>
				<block-card>
					<card-menu>
						<p>Branding</p>
						<Icon name="ph:arrow-circle-down-right-light" size="30"
					/></card-menu>
				</block-card>
			</li>
			<li>
				<block-card>
					<card-menu>
						<p>Optimize SEO</p>
						<Icon name="ph:arrow-circle-down-right-light" size="30"
					/></card-menu>
				</block-card>
			</li>
			<li>
				<block-card>
					<card-menu>
						<p>Marketing Strategy</p>
						<Icon name="ph:arrow-circle-down-right-light" size="30"
					/></card-menu>
				</block-card>
			</li>
		</ul>
	</block-work>
</template>

<script setup>
	import { gsap } from 'gsap';
</script>

<style lang="scss" scoped>
	block-work {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		position: relative;

		text-content {
			text-align: center;

			h2 {
				text-transform: uppercase;
				font-weight: 600;
			}
			p {
				margin: 0 auto;
			}
		}

		ul {
			padding-top: 40px;
			width: 100%;
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

			grid-gap: 20px;
		}

		block-card {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			position: relative;
			background-color: rgb(169 173 219);
			height: 350px;
			width: 100%;
			border-radius: 20px;
			padding: 12px;

			z-index: 20;

			&::before {
				content: '';
				position: absolute;
				top: -25px;
				right: -1%;
				width: 120px;
				height: 120px;
				border-radius: 50%;

				background-color: var(--background);
				pointer-events: none;
				z-index: 0;
			}

			card-menu {
				display: flex;
				justify-content: space-between;
				align-items: center;
				position: absolute;
				z-index: 999;

				top: 40px;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 90%;
				padding: 10px 20px;

				background: rgb(var(--accent-color-rgb) / 0.6);
				box-shadow: 0 8px 32px 0px rgb(var(--accent-color-rgb) / 0.3);
				backdrop-filter: blur(4px);
				border-radius: 10px;
				border: 1px solid rgba(255, 255, 255, 0.18);
				cursor: pointer;
				transition: background-color 0.3s ease-in-out;

				&:hover {
					background: rgb(var(--accent-color-rgb) / 1);
				}

				p {
					font-weight: 500;
					text-transform: uppercase;
				}

				svg {
					scale: 1.4;
					transition: transform 0.3s ease,
						scale 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
				}

				&:hover {
					svg {
						transform: rotate(-90deg);
						scale: 1.8;
					}
				}
			}
		}

		li:nth-of-type(1) block-card {
			background: url('/image-2.jpg');
			background-size: cover;
			background-position: center;
			z-index: 24;
		}
		li:nth-of-type(2) block-card {
			background: url('/image-1.jpg');
			background-size: cover;
			background-position: center;
			z-index: 23;
		}
		li:nth-of-type(3) block-card {
			background: url('/image-4.jpg');
			background-size: cover;
			background-position: center;
			z-index: 22;
		}
		li:nth-of-type(4) block-card {
			background: url('/image-5.jpg');
			background-size: cover;
			background-position: center;
			z-index: 21;
		}
	}
</style>
