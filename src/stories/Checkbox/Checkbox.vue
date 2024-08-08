<template>
	<div class="flex flex-col gap-1">
		<label :for="checkboxId" class="text-stone-800 flex gap-2">
			<input 
				:class="[inputClass, 'appearance-none w-6 h-6 relative rounded-lg border p-[2px]']" 
				type="checkbox"
				:id="checkboxId" 
				:name="name" 
				:checked="modelValue" 
				@change="updateValue"
				:aria-describedby="note ? noteId : undefined" 
				role="checkbox" 
				:aria-checked="ariaChecked" 
			/>
			<span v-html="label"></span>
		</label>
		<small v-if="invalid" class="block mt-1 text-red-600 text-xs">{{ invalidMessage }}</small>
		<span v-if="note" :id="noteId" class="text-slate-400 text-xs">{{ note }}</span>
	</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
	modelValue: boolean;
	label: string;
	note?: string;
	invalid?: boolean;
	invalidMessage?: string;
	name: string;
}

const props = withDefaults(defineProps<Props>(), {
	invalid: false,
	invalidMessage: 'Invalid input',
});

const emit = defineEmits<{
	(e: 'update:modelValue', value: boolean): void;
}>();

const checkboxId = computed(() => `checkbox-${crypto.randomUUID()}`);
const noteId = computed(() => `note-${crypto.randomUUID()}`);

const updateValue = (event: Event) => {
	const target = event.target as HTMLInputElement;
	if (target) {
		emit('update:modelValue', target.checked);
	}
};

const inputClass = computed(() => {
	return props.invalid ? 'border-red-600' : 'border-slate-300';
});

const ariaChecked = computed<'true' | 'false'>(() => (props.modelValue ? 'true' : 'false'));
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
	width: 18px;
	height: 18px;
	background: var(--checkbox-checked-bg, #0ea5e9);
	border-radius: 0.375rem;
	color: var(--checkbox-checked-color, #fff);
	text-align: center;
	font-size: 18px;
}
</style>