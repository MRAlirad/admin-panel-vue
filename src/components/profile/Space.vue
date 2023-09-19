<template>
    <div class="your-space-segment card p-4 pb-8">
        <ProgressBar :remain="50" :total="100" />
    </div>
</template>

<script>
    import ProgressBar from '../ProgressBar.vue';
	export default {
        components: {
            ProgressBar,
        }
    };
</script>

<style></style>
