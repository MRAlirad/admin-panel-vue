<script setup>
	import SideBar from './components/side-bar/SideBar.vue';
</script>

<template>
	<div class="admin-panel-app bg-ghostWhite min-h-screen grid grid-cols-[max-content_1fr] ">
		<SideBar />
		<router-view></router-view>
	</div>
</template>

<style>

	body {
		font-family : 'vazir FD';
	}

	@font-face {
		font-family: 'Material Icons';
		font-style: normal;
		font-weight: 400;
		src: url('./assets/MaterialIcons.woff2') format('woff2');
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
