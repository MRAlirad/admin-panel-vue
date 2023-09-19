<template>
	<div class="flex items-center justify-between w-full h-[160px] pr-4 pl-12">
		<div class="title-navigation-box">
			<span class="navigation text-sm text-powderBlue"> صفحات / {{ title }}</span>
			<h1 class="page-title text-[34px] text-delftBlue font-bold">{{ title }}</h1>
		</div>
		<div
			class="settings-search-box grid grid-cols-[1fr_max-content_max-content] items-center gap-2 w-[420px] h-16 p-2.5 bg-white rounded-[30px]"
		>
			<div class="search-box flex items-center gap-1 h-full py-1 px-3 rounded-[30px] bg-ghostWhite">
				<button
					class="btn icon text-delftBlue"
					@click="search"
				>
					<i class="material-icons material-icons-outlined"> search </i>
				</button>
				<input
					type="text"
					v-model.trim="searchInput"
					class="text-sm text-delftBlue"
				/>
			</div>
			<div class="actions-box flex items-center gap-2">
				<button class="btn icon text-powderBlue">
					<i class="material-icons material-icons-outlined"> notifications </i>
				</button>
				<button class="btn icon text-powderBlue">
					<i class="material-icons material-icons-round"> nightlight_round </i>
				</button>
				<button class="btn icon text-powderBlue">
					<i class="material-icons material-icons-outlined"> info </i>
				</button>
			</div>
			<div class="img-box w-10 h-10 rounded-full">
				<img
					src="../assets/pics/Profile.png"
					alt="profile"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: 'پروفایل',
				searchInput: '',
			};
		},
		methods: {
			search() {
				console.log(this.searchInput);
			},
		},
	};
</script>
