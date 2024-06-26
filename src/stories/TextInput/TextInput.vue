<!-- TextInput.vue -->
<template>
	<div class="">
		<div class="relative">
			<label :class="[labelClass, 'text-stone-800 text-xs absolute top-2']" v-if="label" :for="name">{{ label }}</label>
			<span v-if="icon && type !== 'password'" class="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined">{{ icon }}</span>
			<span v-if="type === 'password'" class="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined">lock</span>
			<input class="
					text-slate-400
					px-4 pb-2 pt-6
					w-full
					rounded-xl 
					border 
					border-slate-300
					bg-white
					transition-all
					focus:border-sky-500
					focus-visible:outline-sky-500
				" 
				:class="inputClass" 
				:type="inputType" 
				:name="name" 
				:id="name" 
				v-bind="$attrs" 
				:value="internalValue"
				@focus="onFocus"
        		@blur="onBlur"
				@input="updateValue" 
				:placeholder="placeholder" 
			/>
			<div class="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
				<span v-if="type === 'date'" :class="valid ? 'bg-slate-50' : 'bg-white'" class="block p-1 text-stone-800 material-symbols-outlined">calendar_month</span>
				<span v-if="valid" :class="valid ? 'bg-slate-50' : 'bg-white'" class="block p-1 text-slate-400 material-symbols-outlined">check_circle</span>
				<span v-if="invalid" :class="valid ? 'bg-slate-50' : 'bg-white'" class="block p-1 text-red-600 material-symbols-outlined">report</span>
				<span v-if="type === 'password' && !unhidePassword" @click="togglePasswordVisibility" :class="valid ? 'bg-slate-50' : 'bg-white'" class="block p-1 text-stone-800 material-symbols-outlined cursor-pointer">visibility_off</span>
				<span v-if="type === 'password' && unhidePassword" @click="togglePasswordVisibility" :class="valid ? 'bg-slate-50' : 'bg-white'" class="block p-1 text-stone-800 material-symbols-outlined cursor-pointer">visibility</span>
			</div>
		</div>
		<small v-if="invalid" class="block mt-1 text-red-600 text-xs">{{ invalidMessage }}</small>
		<small class="block mt-1 text-slate-400 text-xs" v-if="note">{{ note }}</small>
	</div>
</template>

<script lang="ts" setup>
import { computed, defineEmits, toRefs, ref } from 'vue';

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
	modelValue: string | number;
}

const props = withDefaults(defineProps<Props>(), {
	invalid: false,
	valid: false,
	invalidMessage: 'Invalid input',
});
const emit = defineEmits<{ (e: 'update:modelValue', value: string | number): void }>();

const { modelValue } = toRefs(props);

let focus = ref(false);

let unhidePassword = ref(false);

const internalValue = computed({
	get: () => modelValue.value,
	set: (value: string | number) => emit('update:modelValue', value)
});

const updateValue = (event: Event) => {
	const target = event.target as HTMLInputElement;
	internalValue.value = target.value;
};

const inputClass = computed(() => ({
	'ps-14': props.icon || props.type === 'password',
	'pe-14 border-red-600': props.invalid,
	'bg-slate-50': props.valid
}));

const labelClass = computed(() => ({
	'left-14': props.icon || props.type === 'password',
	'text-sky-500' : focus.value
}))

const inputType = computed(() => {
	if (props.type === 'password' && unhidePassword.value) {
		return 'text'
	}
	return props.type
});

const onFocus = () => {
  focus.value = true;
};

const onBlur = () => {
  focus.value = false;
};

const togglePasswordVisibility = () => {
	unhidePassword.value = !unhidePassword.value
}

</script>

<style scoped>
	/* Hide the native date icon */
	input[type='date']::-webkit-calendar-picker-indicator {
		display: none;
	}
</style>