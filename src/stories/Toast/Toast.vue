<template>
	<sl-alert class="c-alert" open :variant="variant" closable ref="alert" @show="showToast">
		<div class="flex gap-4">
			<div :class="['material-symbols-outlined w-6 h-6 text-white rounded-full text-xl leading-[24px] text-center mt-[5px]', iconClasses]">
				{{ icon }}
			</div>
			<div>
				<div v-if="title" class="text-stone-800 text-lg font-medium">{{ title }}</div>
				<slot />
			</div>
		</div>
	</sl-alert>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'
import '@shoelace-style/shoelace/dist/components/alert/alert.js';

interface Props {
	variant: string,
	duration?: number | null,
	title: string
}

const props = withDefaults(defineProps<Props>(), {
	variant: "primary",
	duration: null
});

const iconClasses = computed(() => ({
	'bg-green-600': props.variant == 'success',
	'bg-sky-600': props.variant == 'primary',
	'bg-amber-600': props.variant == 'warning',
	'bg-red-600': props.variant == 'danger',
}));

const icon = computed(() => {
	switch (props.variant) {
		case 'success':
			return 'check_circle';
		case 'primary':
			return 'info';
		case 'warning':
			return 'error';
		case 'danger':
			return 'report';
	}
})

const alert = ref<HTMLElement | null>(null);

const showToast = () => {
	if (alert.value && 'toast' in alert.value) {
		(alert.value as any).toast()
	}
}

</script>

<style scoped>
	.c-alert::part(base) {
		@apply rounded-xl shadow border
	}

	.c-alert[variant="success"]::part(base) {
		@apply bg-green-50 border-green-600
	}

	.c-alert[variant="primary"]::part(base) {
		@apply bg-sky-50 border-sky-600
	}

	.c-alert[variant="warning"]::part(base) {
		@apply bg-amber-50 border-amber-600
	}

	.c-alert[variant="danger"]::part(base) {
		@apply bg-red-50 border-red-600
	}

	.c-alert::part(message) {
		@apply p-5 text-stone-800 text-sm font-light 
	}

	.c-alert::part(close-button__base) {
		@apply text-slate-400 hover:text-stone-800
	}
</style>