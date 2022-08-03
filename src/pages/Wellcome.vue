<template>
	<div class="wrapper">
		<custom-header></custom-header>
		<div class="logo_wrapper">
			<img alt="Vue logo" :src="require('@/assets/logo.png')">
		</div>
	</div>
</template>

<script>
import CustomHeader from '@/components/CustomHeader.vue'

export default {
	components: {
		CustomHeader,
	}
}
</script>

<style lang="scss" scoped>
	.wrapper {
		width: 100%;
		height: 200px;
		background-color: var(--main_background_color);
		// background-color: midnightblue;
		.logo_wrapper {
			.logo {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>