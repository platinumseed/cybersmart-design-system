<template>
	<div class="c-text-input">
		<div class="relative">
			<label :class="[labelClass, 'text-xs absolute top-2 transition-all']" v-if="label" :for="name">{{ label }}</label>
			<span v-if="icon && type !== 'password'" class="absolute left-4 inset-y-0 h-fit m-auto material-symbols-outlined" aria-hidden="true">{{ icon }}</span>
			<span v-if="type === 'password'" class="absolute left-4 inset-y-0 h-fit m-auto material-symbols-outlined" aria-hidden="true">lock</span>
			<input 
				v-bind="$attrs" 
				class="
					text-slate-400
					px-4 pb-2 pt-6
					w-full
					rounded-xl 
					border 
					transition-all
					focus:border-sky-500
					focus-visible:outline-sky-500
				" 
				:class="inputClass" 
				:type="inputType" 
				:name="name" 
				:id="name" 
				v-model="modelValue"
				@focus="onFocus"
				@blur="onBlur"
				:placeholder="placeholder" 
			/>
			<div class="absolute right-4 inset-y-0 h-fit m-auto flex items-center gap-2">
				<span v-if="type === 'date'" :class="valid ? 'bg-slate-50' : 'bg-white'" class="block p-1 text-stone-800 material-symbols-outlined">calendar_month</span>
				<span v-if="valid" :class="valid ? 'bg-slate-50' : 'bg-white'" class="block p-1 text-slate-400 material-symbols-outlined">check_circle</span>
				<span v-if="invalid && !valid" :class="valid ? 'bg-slate-50' : 'bg-white'" class="block p-1 text-red-600 material-symbols-outlined">report</span>
				<span v-if="type === 'password' && !unhidePassword" @click="togglePasswordVisibility" :class="valid ? 'bg-slate-50' : 'bg-white'" class="block p-1 text-stone-800 material-symbols-outlined cursor-pointer">visibility_off</span>
				<span v-if="type === 'password' && unhidePassword" @click="togglePasswordVisibility" :class="valid ? 'bg-slate-50' : 'bg-white'" class="block p-1 text-stone-800 material-symbols-outlined cursor-pointer">visibility</span>
			</div>
		</div>
		<small v-if="invalid && !valid" class="block mt-1 text-red-600 text-xs">{{ invalidMessage }}</small>
		<small class="block mt-1 text-slate-400 text-xs" v-if="note">{{ note }}</small>
	</div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

// Define properties for the component
interface Props {
	label?: string;
	name: string;
	type?: 'text' | 'password' | 'number' | 'date' | 'email' | 'tel' | 'url';
	note?: string;
	icon?: string;
	invalid?: boolean;
	valid?: boolean;
	invalidMessage?: string;
	placeholder?: string;
}

// Define props with default values and use defineModel to handle model binding
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
const unhidePassword = ref(false);

// Define computed properties for dynamic classes and input type
const inputClass = computed(() => ({
	'ps-14': props.icon || props.type === 'password',
	'pe-14 border-red-600': props.invalid && !props.valid,
	'bg-slate-50 border-slate-300': props.valid,
	'bg-white': !props.valid
}));

const labelClass = computed(() => ({
	'ps-4': !props.icon && props.type !== 'password',
	'left-14': props.icon || props.type === 'password',
	'text-sky-500' : focus.value && !props.invalid,
	'text-stone-800': !focus.value && !props.invalid,
	'text-red-600': props.invalid && !props.valid
}));

const inputType = computed(() => {
	if (props.type === 'password' && unhidePassword.value) {
		return 'text';
	}
	return props.type;
});

// Event handlers for input focus and blur
function onFocus(event: FocusEvent) {
	focus.value = true;
	emit('focus', event);
}

const onBlur = (event: FocusEvent) => {
	focus.value = false;
	emit('blur', event);
};

// Toggle password visibility for password input type
const togglePasswordVisibility = () => {
	unhidePassword.value = !unhidePassword.value;
};
</script>

<style scoped>
	/* Hide the native date icon */
	input[type='date']::-webkit-calendar-picker-indicator {
		display: none;
	}
</style>
