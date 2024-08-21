<template>
	<sl-details class="c-accordion" :summary="label" :open="open">
		<div class="material-symbols-outlined text-sky-500 -rotate-90" slot="collapse-icon">keyboard_arrow_up</div>
		<div class="material-symbols-outlined text-slate-400" slot="expand-icon">keyboard_arrow_down</div>
		<div class="text-slate-500 text-lg font-light"><slot /></div>
	</sl-details>
</template>

<script lang="ts" setup>
import '@shoelace-style/shoelace/dist/components/details/details.js';

interface Props {
	label: string,
	open: boolean
}

withDefaults(defineProps<Props>(), {
	open: false
});

</script>

<style>
.c-accordion::part(base) {
	@apply border-none
}

.c-accordion::part(header) {
	@apply border-b border-slate-300 border-solid border-x-0 border-t-0 ps-0 py-7
}

.c-accordion::part(summary) {
	@apply text-stone-800 text-2xl font-medium 
}

.c-accordion::part(content) {
	@apply ps-0 py-7
}
</style>