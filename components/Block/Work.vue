<template>
	<block-work>
		<text-content>
			<h2 class="level-two-voice">Our Services</h2>
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

<script setup></script>

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
		}

		ul {
			padding-top: 40px;
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 10px;
		}

		block-card {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			position: relative;
			background-color: rgb(169 173 219);
			height: 250px;
			width: 100%;
			border-radius: 20px;
			padding: 12px;

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
			&::after {
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 50px;
				border-radius: 20px;
				z-index: 1;

				background-color: rgb(169 173 219);
				pointer-events: none;
			}

			card-menu {
				display: flex;
				justify-content: space-between;
				align-items: center;
				position: absolute;
				z-index: 1;

				top: 40px;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 90%;
				padding: 10px 20px;

				background: rgba(255, 255, 255, 0.15);
				box-shadow: 0 8px 32px 0px rgb(var(--accent-color-rgb) / 0.3);
				backdrop-filter: blur(3px);
				border-radius: 10px;
				border: 1px solid rgba(255, 255, 255, 0.18);

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
	}
</style>
