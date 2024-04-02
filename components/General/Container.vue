<template>
	<section>
		<inner-column>
			<slot />
		</inner-column>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped>
	.landing inner-column {
		padding-top: calc(5rem + 100px);
	}
</style>
