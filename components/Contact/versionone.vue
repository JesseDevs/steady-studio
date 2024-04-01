<template>
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
</template>

<script setup></script>

<style lang="scss" scoped>
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
</style>
