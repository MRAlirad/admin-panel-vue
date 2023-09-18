<template>
	<div class="profile card p-4 pb-8">
		<div class="profile-bg img-box rounded-2xl h-[130px]">
			<img
				:src="profileBg"
				alt="profile-bg"
				class="object-cover"
			/>
		</div>
		<div class="specifications-segment flex flex-col items-center gap-5 -mt-10">
			<div class="img-box w-20 h-20 rounded-full border-4 border-solid border-white">
				<img
					:src="profileImg"
					:alt="name"
				/>
			</div>
			<div class="name-box flex flex-col items-center">
				<h2 class="name text-xl font-bold text-delftBlue">{{ name }}</h2>
				<span class="role text-sm text-powderBlue">{{ role }}</span>
			</div>
			<div class="status-box flex items-center justify-center gap-[6%] w-full">
				<div class="followings flex flex-col items-center">
					<span class="count text-2xl text-delftBlue font-bold">{{ followings }}</span>
					<span class="text text-sm text-powderBlue">دنبال شونده</span>
				</div>
				<div class="followers flex flex-col items-center">
					<span class="count text-2xl text-delftBlue font-bold">{{ followers }}</span>
					<span class="text text-sm text-powderBlue">دنبال کننده</span>
				</div>
				<div class="posts flex flex-col items-center">
					<span class="count text-2xl text-delftBlue font-bold">{{ posts }}</span>
					<span class="text text-sm text-powderBlue">پست ها</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				profileImg: './src/assets/pics/Profile.png',
				profileBg: './src/assets/pics/ProfileBg.png',
				name: 'آناهیتا رجبی',
				role: 'طراح محصول',
				followers: 275,
				followings: '7K',
				posts: 17,
			};
		},
	};
</script>
