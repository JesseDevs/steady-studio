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
			<rect
				class="Artboard1"
				x="0"
				y="0"
				width="40"
				height="40.199"
				style="fill: none"
			/>

			<g class="logo-symbol">
				<path
					d="M13.753,7.43L36.606,20.629L30.989,11.281L18.963,4.335L13.753,7.43Z"
				/>
				<path
					d="M37.072,22.169L37.042,28.324L25.01,35.7L14.331,35.7L37.072,22.169Z"
				/>
				<path
					d="M12.519,8.82L12.519,35.15L7.26,32.211L7.26,17.936L12.519,8.82Z"
				/>

				<path d="M13.26,8.039L13.32,35.392L36.764,21.526L13.26,8.039Z" />
				<path
					d="M18.937,18.279L18.963,25.359L25.269,21.6L18.937,18.279Z"
					class="no-shake"
					style="fill: var(--brand-color)"
				/>
				<path d="M19.636,19.495L19.636,24.086L23.781,21.606L19.636,19.495Z" />

				<path d="M19.594,4.033L30.496,10.152L25.063,0.898L19.594,4.033Z" />
				<path d="M26.052,35.756L37.048,29.061L37.048,35.402L26.052,35.756Z" />
				<path d="M6.604,18.715L6.604,31.827L0.876,28.489L6.604,18.715Z" />
			</g>
		</svg>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
	div {
		display: flex;
		align-items: flex-start;
	}
	svg {
		max-width: 50px;
		max-height: 50px;
		.logo-symbol {
			path {
				transition: fill 0.2s ease-in-out;
				fill: rgb(var(--text-rgb) / 0.9);
			}
		}
	}
</style>
