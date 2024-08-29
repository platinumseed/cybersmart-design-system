<template>
	<div class="relative">
		<div class="material-symbols-outlined absolute left-4 top-[10px] text-stone-800 text-base" aria-hidden="true">search</div>
		<input
			v-bind="$attrs" 
			ref="input"
			class="ps-10 pe-4 py-2 bg-white rounded-xl border transition-all focus:border-sky-500 focus-visible:outline-none w-full"
			:class="inputClass"
			type="search"
			:name="name" 
			:id="name" 
			v-model="modelValue"
			@focus="onFocus"
			@blur="onBlur"
			:placeholder="placeholder" 
			:aria-label="label"
			:aria-describedby="invalid ? `${name}-error` : undefined"
		>
	</div>
	<small v-if="invalid" :id="`${name}-error`" class="block mt-1 text-red-600 text-xs">{{ invalidMessage }}</small>
</template>

<script lang="ts" setup>
import { computed, toRefs, ref } from 'vue';
interface Props {
	name: string;
	label?: string;
	invalid?: boolean;
	valid?: boolean;
	invalidMessage?: string;
	placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
	invalid: false,
	valid: false,
	label: 'Search',
	placeholder: 'Search',
	invalidMessage: 'Invalid input',
});

let focus = ref(false);

// Use defineModel to handle v-model binding with the parent
const modelValue = defineModel<string | number>('modelValue', {
	default: ''
});

const emit = defineEmits<{
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;
}>();

function onFocus(event: FocusEvent) {
	focus.value = true;
  	emit('focus', event);
}

const onBlur = (event: FocusEvent) => {
	focus.value = false;
	emit('blur', event);
};

const inputClass = computed(() => ({
	'broder-blue': focus.value,
	'border-slate-300 ': !props.invalid,
	'border-red-600': props.invalid,
	'bg-slate-50 border-slate-300': props.valid
}));
</script>