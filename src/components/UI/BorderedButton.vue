<template>
	<div class="wrapper">
		<button class="btn">
			<img v-if="buttonInfo.type === 'Image'" :src="buttonInfo.value">
			<p v-else-if="buttonInfo.type === 'Text'"> {{ buttonInfo.value }} </p>
		</button>
	</div>
	
</template>

<script>
export default {
	name: "bordered-button",
	props: {
		buttonInfo: { 			
			id: Number,
			value: Object,
		},
	},
}
</script>

<style>

</style>