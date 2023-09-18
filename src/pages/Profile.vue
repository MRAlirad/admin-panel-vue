<template>
	<div class="profile-page">
		<div class="profile-space-upload-segment grid grid-cols-[38%_24%_34%] gap-[2%] w-full">
			<Profile />
			<div class="bg-white h-10"></div>
			<div class="bg-white h-10"></div>
		</div>
		<div class="projects-requests-notifications-segment"></div>
	</div>
</template>

<script>
	import Profile from '../components/profile/Profile.vue';

	export default {
		components: {
			Profile,
		},
	};
</script>
