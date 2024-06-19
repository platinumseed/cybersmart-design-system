<template>
	<div class="flex flex-col gap-1">
		<label :for="radioId" class="text-stone-800 flex gap-2">
			<input
				:class="[inputClass, 'appearance-none w-6 h-6 relative rounded-full border p-[2px]']"
				type="radio"
				:id="radioId"
				:name="name"
				:checked="modelValue"
				@change="updateValue($event.target.checked)"
				:aria-describedby="note ? noteId : null"
			/>
			{{ label }}
		</label>
		<small v-if="invalid" class="block mt-1 text-red-600 text-xs">{{ invalidMessage }}</small>
		<span v-if="note" :id="noteId" class="text-slate-400 text-xs">{{ note }}</span>
	</div>
</template>
  
<script lang="ts" setup>
import { defineEmits, computed } from 'vue';

interface Props {
	modelValue: boolean;
	label: string;
	note ? : string;
	invalid?: boolean;
	invalidMessage?: string;
	name: string;
}

const props = withDefaults(defineProps<Props>(), {
	invalid: false,
	valid: false,
	invalidMessage: 'Invalid input',
});

const emit = defineEmits < {
	(e: 'update:modelValue', value: boolean): void;
} > ();

const radioId = computed(() => `checkbox-${Math.random().toString(36).substr(2, 9)}`);
const noteId = computed(() => `note-${Math.random().toString(36).substr(2, 9)}`);

const updateValue = (value: boolean) => {
	emit('update:modelValue', value);
};

const inputClass = computed(() => {
	if (props.invalid) {
		return 'border-red-600';
	}
	return 'border-slate-300';
})
</script>

<style scoped>
input[type="radio"]:not(:disabled):checked:before {
	content: '';
	@apply block w-[18px] h-[18px] bg-sky-500 rounded-full text-white text-center text-[18px];
}
</style>