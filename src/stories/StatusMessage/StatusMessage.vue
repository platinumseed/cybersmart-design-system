<template>
	<div @click="open = !open" :class="['c-status-message cursor-pointer h-[50px]', statusMessageClass]">
		<Badge 
			:class="['flex items-center badge-transition', badgeClass]" 
			:type="type" 
			:size="open ? 'small' : 'large'"
		>
			<span :class="['w-2 h-2 rounded-full shrink-0 me-3', iconColor]"></span>
			<span class="text-base font-medium">{{ badgeContent }}</span>
		</Badge>
		<transition name="fade">
			<div v-if="open" class="text-nowrap font-normal text-stone-800 text-base">
				<marquee class="relative top-[3px]"><slot /></marquee>
			</div>
		</transition>
	</div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import Badge from '../Badge/Badge.vue';

interface Props {
	type: string
	badgeContent: string
	initiallyOpen?: boolean
}

const props = withDefaults(defineProps<Props>(), {
	type: 'accent',
	initiallyOpen: false
});

const open = ref<boolean>(props.initiallyOpen)

const statusMessageClass = computed(() => ({
	'c-status-message--accent': props.type === 'accent',
	'c-status-message--muted': props.type === 'muted',
	'c-status-message--warning': props.type === 'warning',
	'c-status-message--success': props.type === 'success',
	'c-status-message--error': props.type === 'error',
	'ps-1 border max-w-[375px]' : open.value
}))

const badgeClass = computed(() => ({
	'py-1' : open.value
}))

const iconColor = computed(() => ({
	'bg-sky-500': props.type === 'accent',
	'bg-slate-300': props.type === 'muted',
	'bg-green-600': props.type === 'success',
	'bg-orange-600': props.type === 'warning',
	'bg-red-600': props.type === 'error',
}))
</script>

<style scoped>
.c-status-message {
	@apply font-normal text-base text-stone-800 bg-white rounded-full inline-flex items-center gap-2 transition-all;
}

.c-status-message--accent {
	@apply border-sky-500;
}

.c-status-message--muted {
	@apply border-slate-300;
}

.c-status-message--success {
	@apply border-green-600;
}

.c-status-message--warning {
	@apply border-orange-600;
}

.c-status-message--error {
	@apply border-red-600;
}

/* New classes for dynamic width transition */
.badge-transition {
	transition: max-width 0.3s ease;
	max-width: 100%; /* Transition to full content width */
	overflow: hidden; /* Ensures the content doesn’t overflow during transition */
	flex-shrink: 0;
}

.badge-small {
	max-width: 50px; /* Start with a smaller max-width */
}

.badge-large {
	max-width: 100%; /* Expand to the full width based on content */
}

/* Optional: add a fade transition for the additional content */
.fade-enter-active, .fade-leave-active {
	transition: opacity 0.3s;
}

.fade-enter-from, .fade-leave-to {
	opacity: 0;
}
</style>
