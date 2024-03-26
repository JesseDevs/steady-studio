<template>
	<div>
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 45 45"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			xml:space="preserve"
			xmlns:serif="http://www.serif.com/"
			style="
				fill-rule: evenodd;
				clip-rule: evenodd;
				stroke-linejoin: round;
				stroke-miterlimit: 2;
			"
		>
			<g class="logo-symbol">
				<path d="M13.26,8.039L13.32,35.392L36.764,21.526L13.26,8.039Z" />
				<path
					d="M18.937,18.279L18.963,25.359L25.269,21.6L18.937,18.279Z"
					class="no-shake"
					style="fill: var(--background)"
				/>
				<path d="M19.975,19.744L20.06,23.698L23.604,21.628L19.975,19.744Z" />
			</g>
		</svg>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
	svg {
		max-width: 180px;
		max-height: 180px;

		transform: rotate(-30deg);
	}
	.logo-symbol {
		path {
			transition: fill 0.2s ease-in-out;
			fill: rgb(var(--brand-color-rgb) / 0.3);
		}
	}

	@media (hover: hover) {
		svg {
			.logo-symbol:hover path {
				fill: rgb(var(--brand-color-rgb) / 1);
			}
		}
	}
</style>
