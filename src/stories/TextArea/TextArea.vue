<!-- TextInput.vue -->
<template>
	<div class="">
		<div class="relative flex gap-4 items-center">
			<label :class="focus ? 'text-sky-500' : 'text-stone-800'" class=" text-xs absolute left-4 top-2 " v-if="label" :for="name">{{ label }}</label>
			<textarea class="
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
				:name="name" 
				:id="name" 
				v-bind="$attrs" 
				:value="internalValue"
				@focus="focus = true"
				@blur="focus = false"
				@input="updateValue" 
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
import { computed, defineProps, defineEmits, toRefs, ref } from 'vue';

interface Props {
	label?: string;
	name: string;
	note?: string;
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

const focus = ref(false)

const internalValue = computed({
	get: () => modelValue.value,
	set: (value: string | number) => emit('update:modelValue', value)
});

const updateValue = (event: Event) => {
	const target = event.target as HTMLInputElement;
	internalValue.value = target.value;
};

const inputClass = computed(() => ({
	'pe-12 border-red-600': props.invalid,
	'bg-slate-50': props.valid
}));

</script>

<style scoped>
	/* Hide the native date icon */
	input[type='date']::-webkit-calendar-picker-indicator {
		display: none;
	}
</style> 