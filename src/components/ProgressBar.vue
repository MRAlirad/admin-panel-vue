<template>
	<div class="prograss w-full h-2.5 rounded-full bg-purple-200">
		<div
			class="bar h-full bg-delftBlue rounded-full"
			:class="`w-[${barWidth}%]`"
		></div>
	</div>
</template>

<script>
	export default {
		props: ['remain', 'total', 'percent'],
		computed: {
			barWidth() {
				if (this.percent) return this.percent;
				return ((this.remain * 100) / this.total).toFixed(2);
			},
		},
	};
</script>

<style></style>
