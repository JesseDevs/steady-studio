<template>
	<div class="svg-elipse">
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 25 13"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			xml:space="preserve"
			xmlns:serif="http://www.serif.com/"
			style="
				fill-rule: evenodd;
				clip-rule: evenodd;
				stroke-linecap: round;
				stroke-linejoin: round;
				stroke-miterlimit: 1.5;
			"
		>
			<rect
				id="Artboard1"
				x="0"
				y="0"
				width="24.766"
				height="12.634"
				style="fill: none"
			/>
			<path
				class="circle"
				d="M19.592,4.651C6.873,-0.226 -8.264,11.128 7.231,9.776C22.726,8.424 26.345,5.015 19.324,2.933C12.303,0.851 -6.233,11.718 5.877,11.54C17.987,11.363 29.643,-2.634 12.677,2.1"
				style="
					fill: none;
					stroke: rgb(var(--contrast-color-rgb) / 0.8);
					stroke-width: 0.6px;
				"
			/>
		</svg>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
	.svg-elipse {
		width: 125px;
		height: 150px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		opacity: 1;
	}
</style>
