<template>
	<section>
		<inner-column>
			<slot />
		</inner-column>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped>
	section {
		scroll-margin: 50px;
	}
	.landing inner-column {
		padding-top: calc(5rem + 100px);
	}
</style>
