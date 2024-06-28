<template>
	<div :class="['c-status-message', statusMessageClass]">
		<Badge :type="type">{{ badgeContent }}</Badge>
		<div class="text-nowrap font-normal text-stone-800 text-base">
			<marquee class="relative top-[3px]"><slot /></marquee>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import Badge from '../Badge/Badge.vue';

interface Props {
	type: string
	badgeContent: string
}

const props = withDefaults(defineProps<Props>(), {
	type: 'accent',
});

const statusMessageClass = computed(() => ({
	'c-status-message--accent': props.type === 'accent',
	'c-status-message--muted': props.type === 'muted',
	'c-status-message--warning': props.type === 'warning',
	'c-status-message--success': props.type === 'success',
	'c-status-message--error': props.type === 'error',
}))
</script>

<style scoped>
.c-status-message {
	@apply font-normal text-base text-stone-800 bg-white border rounded-full inline-flex items-center max-w-[375px] gap-2 ps-1 py-1 transition-all
}

.c-status-message--accent {
	@apply border-sky-500 
}

.c-status-message--muted {
	@apply border-slate-300
}

.c-status-message--success {
	@apply border border-green-600
}

.c-status-message--warning {
	@apply border-orange-600
}

.c-status-message--error {
	@apply border-red-600
}
</style>