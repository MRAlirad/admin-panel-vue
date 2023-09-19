<template>
	<div class="kanban-page grid grid-cols-[1fr_1fr_1fr] gap-[1%]">
		<div class="pending-tasks-container card px-9 py-6">
			<div class="title-box flex items-center justify-between">
				<h2 class="text-[22px] text-delftBlue font-bold">در انتظار تایید</h2>
				<button class="btn w-[90px] h-[35px] text-blue bg-ghostWhite rounded-xl">
					<i class="material-icons material-icons-round"> add </i>
				</button>
			</div>
			<div class="tasks-container">
				<div
					class="task"
					v-for="task in pendingTasks"
					:key="task.id"
				>
					{{ task.title }}
				</div>
			</div>
		</div>

		<div class="running-tasks-container card px-9 py-6">
			<div class="title-box flex items-center justify-between">
				<h2 class="text-[22px] text-delftBlue font-bold">در حال انجام</h2>
				<button class="btn w-[90px] h-[35px] text-blue bg-ghostWhite rounded-xl">
					<i class="material-icons material-icons-round"> add </i>
				</button>
			</div>
			<div class="tasks-container">
				<div
					class="task"
					v-for="task in runningTasks"
					:key="task.id"
				>
					{{ task.title }}
				</div>
			</div>
		</div>

		<div class="done-task-container card px-9 py-6">
			<div class="title-box flex items-center justify-between">
				<h2 class="text-[22px] text-delftBlue font-bold">انجام شده</h2>
				<button class="btn w-[90px] h-[35px] text-blue bg-ghostWhite rounded-xl">
					<i class="material-icons material-icons-round"> add </i>
				</button>
			</div>
			<div class="tasks-container">
				<div
					class="task"
					v-for="task in doneTasks"
					:key="task.id"
				>
					{{ task.title }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tasks: [
					{
						id: Math.random(),
						title: '1عنوان',
						desctiption: 'توضیحات',
						stats: 0,
					},
					{
						id: Math.random(),
						title: 'عنو2ان',
						desctiption: 'توضیحات',
						stats: 0,
					},
					{
						id: Math.random(),
						title: '3عنوان',
						desctiption: 'توضیحات',
						stats: 1,
					},
					{
						id: Math.random(),
						title: '4عنوان',
						desctiption: 'توضیحات',
						stats: 1,
					},
					{
						id: Math.random(),
						title: '5عنوان',
						desctiption: 'توضیحات',
						stats: 2,
					},
				],
			};
		},
		computed: {
			pendingTasks() {
				let tasks = [];
				for (const task of this.tasks) if (task.stats === 0) tasks.push(task);
				return tasks;
			},
			runningTasks() {
				let tasks = [];
				for (const task of this.tasks) if (task.stats === 1) tasks.push(task);
				return tasks;
			},
			doneTasks() {
				let tasks = [];
				for (const task of this.tasks) if (task.stats === 2) tasks.push(task);
				return tasks;
			},
		},
	};
</script>
