<template>
	<div class="custom__header">
		<div class="main__block">
			<logo class="main__block-item"> {{ logoContent }} </logo>
			<search-input class="main__block-item"></search-input>
			<div class="btns_wrapper main__block-item" ref="scrollable">
				<bordered-button v-for="button in buttonsContent" :key="button.id" :buttonInfo="button"></bordered-button>
			</div>
		</div>
		<div class="emergeable__block">

		</div>
	</div>
</template>

<script>
import { onMounted } from 'vue';

export default {
    name: "custom-header",
	data() {
		return {
			scrollOffset: 0,
			searchInputPlaceholder: "Поиск по сайту...",
			logoContent: "ОЛИМП КЛИНИК",
			buttonsContent: [
				{id: 1, value: "Обратный звонок", type: "Text"},
				{id: 2, value: require("@/assets/user.svg"), type: "Image"},
			],
		}
	},
	methods: {
		offsetHeader() {
			this.$emit('update:show', false);
		}
	},
	onMounted() {
	    let scrollableDiv = this.$refs.scrollable;
		console.log(scrollableDiv);
	}
}
</script>

<style lang="scss">
.custom__header {
	.main__block {
		margin: 20px auto;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		&-item {
			margin: 0;
		}
		.btns_wrapper {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}
	}
	.emergeable__block {

	}
}
</style>