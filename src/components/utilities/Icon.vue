<script setup>
	defineProps({
		icon: String,
		type: String,
		style: String,
		color: String,
		size: String,
	});
</script>

<template>
    <i class="material-icons material-icons-round"> {{ icon }}</i>
</template>

<style scoped>
	/* fallback */
	@font-face {
		font-family: 'Material Icons';
		font-style: normal;
		font-weight: 400;
		src: url('../../assets/MaterialIcons.woff2') format('woff2');
	}
	.material-icons {
		font-family: 'Material Icons';
		font-weight: normal;
		font-style: normal;
		font-size: 24px;
		line-height: 1;
		letter-spacing: normal;
		text-transform: none;
		display: inline-block;
		white-space: nowrap;
		word-wrap: normal;
		direction: ltr;
		/* -webkit-font-feature-settings: 'liga'; */
		-webkit-font-smoothing: antialiased;
	}
</style>
