<script setup>
	import logo from '../assets/pics/Logo.png';
</script>

<template>
	<div class="side-bar grid grid-rows-[max-content_1fr] row-[1/3] bg-white w-full h-full">
		<div class="img-box h-[130px] w-full border-b border-ghostWhite">
			<img
				:src="logo"
				alt="logo"
				class="w-8/12 h-max"
			/>
		</div>
		<div class="page-link-containers py-10 flex flex-col gap-5">
			<router-link
				v-for="link in sidebarLinks"
				:key="link"
				:to="link.to"
				class="side-bar-link relative flex items-center gap-4 w-full h-9 text-base font-bold text-powderBlue pr-[12%] hover:text-[#6E80B7]"
			>
				<i class="material-icons material-icons-round"> {{ link.icon }} </i>
				{{ link.text }}
				<span class="left-line absolute left-0 top-0 w-1 h-full bg-transparent rounded-full"></span>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				sidebarLinks: [
					{
						to: '/dashboard',
						icon: 'home',
						text: 'داشبورد',
					},
					{
						to: '/shop',
						icon: 'shopping_cart',
						text: 'فروشگاه',
					},
					{
						to: '/tables',
						icon: 'bar_chart',
						text: 'جدول ها',
					},
					{
						to: '/kanban',
						icon: 'dashboard',
						text: 'کنبان',
					},
					{
						to: '/profile',
						icon: 'person',
						text: 'پروفایل',
					},
					{
						to: '/login',
						icon: 'lock',
						text: 'ورود',
					},
				],
			};
		},
	};
</script>

<style scoped>
	.router-link-active {
		color: theme('colors.blue');
	}
	.router-link-active .left-line {
		background: theme('colors.blue');
	}
</style>
