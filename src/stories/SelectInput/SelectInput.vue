<template>
	<sl-select 
		v-bind="$attrs" 
		class="c-select" 
		:placeholder="placeholder"
		ref="singleSelect"
		@sl-show="focus = true"
		@sl-hide="focus = false" 
		@sl-change="updateValue"
	>
		<span 
			slot="label" 
			:class="focus ? 'text-sky-500' : 'text-stone-800'" 
			v-if="label"
		>{{ label }}</span>
		<sl-option v-for="option in options" :key="option.value" class="c-select-option" :value="option.value">{{ option.label }}</sl-option>
		<div slot="expand-icon" class="text-6 material-symbols-outlined">keyboard_arrow_down</div>
	</sl-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import '@shoelace-style/shoelace/dist/components/select/select.js';
import '@shoelace-style/shoelace/dist/components/option/option.js';

interface Option {
	label: string;
	value: string | number;
}

interface Props {
	label?: string;
	placeholder?: string;
	note?: string;
	invalid?: boolean;
	valid?: boolean;
	invalidMessage?: string;
	modelValue: string | number;
	options: Option[];
}

const props = withDefaults(defineProps<Props>(), {
	invalid: false,
	valid: false,
	invalidMessage: 'Invalid input',
	placeholder: 'Select an option',
});

const focus = ref(false);

const emit = defineEmits<{ (e: 'update:modelValue', value: string | number): void }>();

const updateValue = (event: Event) => {
	const target = event.target as HTMLSelectElement;
	console.log(target.value);
	emit('update:modelValue', target.value);
};
</script>

<style scoped>
.c-select::part(form-control) {
	@apply relative;
}

.c-select::part(combobox) {
	border-color: v-bind('comboboxBorderColor');
	background-color: v-bind('comboboxBackgroundColor');
	@apply shadow-none text-base min-h-fit px-4 pb-2 pt-6 rounded-xl border;
}

.c-select--open::part(combobox) {
	@apply border-none;
}

.c-select::part(form-control-label) {
	@apply text-xs absolute left-4 top-2 z-10;
}

.c-select::part(expand-icon) {
	@apply -mt-3;
}

.c-select::part(display-input) {
	@apply placeholder:text-slate-400;
}

.c-select::part(listbox) {
	@apply bg-white rounded-xl shadow border border-slate-300 mt-1;
}

.c-select[open]::part(form-control-label) {
	@apply text-sky-500;
}

.c-select-option::part(base) {
	@apply text-stone-800 transition-all;
}

.c-select-option:hover::part(base) {
	@apply !bg-sky-50 !text-sky-500;
}
</style>