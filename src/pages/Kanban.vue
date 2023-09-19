<template>
    <div class="kanban-page grid grid-cols-[1fr_1fr_1fr] gap-[1%]">
        <div class="pending-tasks-container card px-9 py-6 ">
            <div class="title-box flex items-center justify-between">
                <h2 class="text-[22px] text-delftBlue font-bold">در انتظار تایید</h2>
                <button class="btn w-[90px] h-[35px] text-blue bg-ghostWhite rounded-xl">
                    <i class="material-icons material-icons-round"> add </i>
                </button>
            </div>
        </div>

        <div class="running-tasks-container card px-9 py-6 ">
            <div class="title-box flex items-center justify-between">
                <h2 class="text-[22px] text-delftBlue font-bold">در حال انجام</h2>
                <button class="btn w-[90px] h-[35px] text-blue bg-ghostWhite rounded-xl">
                    <i class="material-icons material-icons-round"> add </i>
                </button>
            </div>
        </div>

        <div class="done-task-container card px-9 py-6 ">
            <div class="title-box flex items-center justify-between">
                <h2 class="text-[22px] text-delftBlue font-bold">انجام شده</h2>
                <button class="btn w-[90px] h-[35px] text-blue bg-ghostWhite rounded-xl">
                    <i class="material-icons material-icons-round"> add </i>
                </button>
            </div>
        </div>
    </div>
</template>