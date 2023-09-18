<template>
	<button>
		<slot></slot>
		<span :class="{ btn: true, type }">{{ text }}</span>
	</button>
</template>

<script lang="ts">
	export default {
		props: {
			text: String,
			type: {
				type: String,
				default: 'primary', // primary, secondary, icon
			},
		},
		emits: ['on-click'],
	};
</script>

<style scoped></style>
