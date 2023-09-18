<script setup>
	import logo from '../../assets/pics/Logo.png';
</script>

<template>
	<div class="side-bar grid grid-rows-[max-content_1fr] bg-white w-[290px] h-full">
		<div class="img-box h-[130px] w-full border-b border-[#F4F7FE]">
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
				class="side-bar-link text-base font-bold w-full flex items-center gap-4 pr-9 text-[#A3AED0] hover:text-[#6E80B7]"
			>
				<i class="material-icons material-icons-round"> {{ link.icon }} </i>
				{{ link.text }}
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

    /*  */

</style>
