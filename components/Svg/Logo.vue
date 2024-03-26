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
					d="M13.68,7.357L36.392,20.556L30.989,11.281L18.963,4.335L13.68,7.357Z"
				/>
				<path
					d="M37.072,22.169L37.042,28.324L25.296,35.392L14.638,35.392L37.072,22.169Z"
				/>
				<path
					d="M12.519,8.82L12.518,35.392L7.26,32.211L7.26,17.936L12.519,8.82Z"
				/>

				<path d="M13.26,8.039L13.32,35.392L36.764,21.526L13.26,8.039Z" />
				<path
					d="M18.937,18.279L18.963,25.359L25.269,21.6L18.937,18.279Z"
					class="no-shake"
					style="fill: var(--background)"
				/>
				<path d="M19.975,19.744L20.06,23.698L23.604,21.628L19.975,19.744Z" />

				<path d="M19.931,3.84L30.298,9.954L25.063,0.898L19.931,3.84Z" />
				<path d="M26.725,35.402L37.048,29.383L37.048,35.402L26.725,35.402Z" />
				<path d="M6.3,19.137L6.3,31.752L0.876,28.489L6.3,19.137Z" />
			</g>
		</svg>
	</div>
</template>

<script setup>
	import { gsap } from 'gsap';

	function shake(element) {
		gsap.to(element, {
			x: -0.3,
			duration: 0.04,
			repeat: 0.5,
			yoyo: true,
			onComplete: () => {
				gsap.set(element, { x: 0 });
			},
		});
	}

	onMounted(() => {
		const tl = gsap.timeline();

		tl.from('.logo-symbol', {
			delay: 1,
			opacity: 0,
			rotate: 0,
			scale: 0.5,
			transformOrigin: 'center',
			ease: 'power1.inOut',
		}).from(
			'.logo-container',
			{
				delay: 0.8,
				duration: 2,
				transformOrigin: 'center',
				rotate: 118,
			},
			'<',
		);

		document.querySelectorAll('.logo-symbol  path:not(.no-shake)').forEach((path) => {
			path.addEventListener('mouseenter', () => {
				shake(path);
			});
		});
	});
</script>

<style lang="scss" scoped>
	div {
		display: flex;
		align-items: flex-start;
	}
	svg {
		max-width: 200px;
		max-height: 200px;
		.logo-symbol {
			path {
				transition: fill 0.2s ease-in-out;
				fill: rgb(var(--brand-color-rgb) / 0.3);
			}
		}
		@media (hover: hover) {
			.logo-symbol path:hover {
				fill: rgb(var(--brand-color-rgb) / 1);
			}
		}
	}

	@media (min-width: 800px) {
		svg {
			.logo-symbol {
				path {
					fill: rgb(var(--brand-color-rgb) / 0.6);
				}
			}
		}
	}
</style>
