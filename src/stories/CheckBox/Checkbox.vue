<template>
	<div class="flex flex-col gap-1">
		<label :for="checkboxId" class="text-stone-800 flex gap-2">
			<input
				:class="[inputClass, 'appearance-none w-6 h-6 relative rounded-lg border p-[2px]']"
				type="checkbox"
				:id="checkboxId"
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

const checkboxId = computed(() => `checkbox-${Math.random().toString(36).substr(2, 9)}`);
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
input[type="checkbox"]:not(:disabled):checked:before {
	content: 'check_small';
	font-family: "Material Symbols Outlined";
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings: "liga";
	font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
	@apply block w-[18px] h-[18px] bg-sky-500 rounded-md text-white text-center text-[18px];
}
</style>