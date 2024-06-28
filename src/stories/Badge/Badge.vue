<template>
	<sl-badge :class="['c-badge', badgeClass]"><slot></slot></sl-badge>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import '@shoelace-style/shoelace/dist/components/badge/badge.js';

interface Props {
	type: string
}

const props = withDefaults(defineProps<Props>(), {
	type: 'accent'
});

const badgeClass = computed(() => ({
	'c-badge--accent': props.type === 'accent',
	'c-badge--muted': props.type === 'muted',
	'c-badge--warning': props.type === 'warning',
	'c-badge--success': props.type === 'success',
	'c-badge--error': props.type === 'error',
}))
</script>

<style scoped>
.c-badge::part(base) {
	@apply font-normal text-base border rounded-full flex gap-1 px-4 py-[7px] tracking-wide uppercase transition-all hover:shadow-[0px_1px_3px_0px_rgba(0,_0,_0,_0.10),_0px_1px_2px_0px_rgba(0,_0,_0,_0.06)]
}

.c-badge--accent::part(base) {
	@apply text-sky-500 border-sky-500 bg-white
}

.c-badge--muted::part(base) {
	@apply text-stone-800 border-slate-300 bg-slate-50
}

.c-badge--success::part(base) {
	@apply text-green-500 border border-green-600 bg-white
}

.c-badge--warning::part(base) {
	@apply text-orange-500 border-orange-600 bg-white
}

.c-badge--error::part(base) {
	@apply text-red-500 border-red-600 bg-white
}
</style>