<!-- TextInput.vue -->
<template>
	<div class="">
		<div class="relative flex gap-4 items-center">
			<label :class="labelClass" class=" text-xs absolute left-4 top-2 transition-all" v-if="label" :for="name">{{ label }}</label>
			<textarea 
				v-bind="$attrs"
				class="
					text-slate-400
					px-4 pb-2 pt-6
					w-full
					rounded-xl 
					border 
					bg-white
					transition-all
					focus:border-sky-500
					focus-visible:outline-sky-500
				" 
				:class="inputClass" 
				:name="name" 
				:id="name" 
				v-model="modelValue"
				@focus="onFocus"
        		@blur="onBlur"
				:placeholder="placeholder" 
			/>
			<div class="absolute right-4 top-4 flex items-center gap-2">
				<span v-if="valid" :class="valid ? 'bg-slate-50' : 'bg-white'" class="block p-1 text-slate-400 material-symbols-outlined ">check_circle</span>
				<span v-if="invalid" :class="valid ? 'bg-slate-50' : 'bg-white'" class="block p-1 text-red-600 material-symbols-outlined ">report</span>
			</div>
		</div>
		<small v-if="invalid" class="block mt-1 text-red-600 text-xs ">{{ invalidMessage }}</small>
		<small class="block mt-1 text-slate-400 text-xs " v-if="note">{{ note }}</small>
	</div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

interface Props {
	label?: string;
	name: string;
	note?: string;
	invalid?: boolean;
	valid?: boolean;
	invalidMessage?: string;
	placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
	invalid: false,
	valid: false,
	invalidMessage: 'Invalid input',
});

// Use defineModel to handle v-model binding with the parent
const modelValue = defineModel<string | number>('modelValue', {
	default: ''
});

const emit = defineEmits<{
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;
}>();

const focus = ref(false);

function onFocus(event: FocusEvent) {
	focus.value = true;
  	emit('focus', event);
}

const onBlur = (event: FocusEvent) => {
	focus.value = false;
	emit('blur', event);
};


const inputClass = computed(() => ({
	'pe-12 border-red-600': props.invalid,
	'bg-slate-50 border-slate-300': props.valid
}));

const labelClass = computed(() => {
	if (focus.value) {
		return 'text-sky-500';
	}
	if (props.invalid) {
		return 'text-red-600';
	}
	return 'text-stone-800';
})

</script>

<style scoped>
	/* Hide the native date icon */
	input[type='date']::-webkit-calendar-picker-indicator {
		display: none;
	}
</style> 