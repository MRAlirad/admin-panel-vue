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
			<a
				v-for="link in sidebarLinks"
				:key="link"
				:href="link.to"
				class="side-bar-link w-full flex items-center gap-4 pr-9 text-[#A3AED0] hover:text-[#6E80B7] wow"
			>
				<i class="material-icons material-icons-round"> {{ link.icon }} </i>
				{{ link.text }}
			</a>
		</div>
	</div>
</template>

<script>
	import SideBarLink from './SideBarLink.vue';

	export default {
		components: {
			SideBarLink,
		},
		data() {
			return {
				sidebarLinks: [
					{
						to: '#',
						icon: 'home',
						text: 'داشبورد',
					},
					{
						to: '#',
						icon: 'shopping_cart',
						text: 'فروشگاه',
					},
					{
						to: '#',
						icon: 'bar_chart',
						text: 'جدول ها',
					},
					{
						to: '#',
						icon: 'dashboard',
						text: 'کنبان',
					},
					{
						to: '#',
						icon: 'person',
						text: 'پروفایل',
					},
					{
						to: '#',
						icon: 'lock',
						text: 'ورود',
					},
				],
			};
		},
	};
</script>

<style scoped>
    .wow {
        color: theme('colors.black');
    }

    /*  */

</style>
