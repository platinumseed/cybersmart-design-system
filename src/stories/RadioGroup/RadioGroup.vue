<template>
	<sl-radio-group :class="['c-radio-group', groupStyle]" :name="name" :value="modelValue" @sl-input="change" @sl-change="emitChange">
		<sl-radio v-for="option in options" :key="option.value" class="c-radio" :value="option.value">{{ option.label }}</sl-radio>
	</sl-radio-group>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, computed } from 'vue'
import '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js'
import '@shoelace-style/shoelace/dist/components/radio/radio.js'

interface RadioOption {
	label: string
	value: string
}

// Define props to accept modelValue for v-model binding
interface Props {
	modelValue: string
	name: string
	options: RadioOption[]
	layout?: 'inline' | 'stacked'
}
const props = withDefaults(defineProps<Props>(), {
	layout: 'stacked'
})

// Define emits to emit the update:modelValue event
const emit = defineEmits(['update:modelValue', 'change'])

// Handle the change event and emit the new value
const change = (event: Event) => {
	const target = event.target as HTMLInputElement;
	emit('update:modelValue', target.value)
};

const emitChange = (event: Event) => {
	const target = event.target as HTMLInputElement;
	emit('change', target.value)
}

const groupStyle = computed(() => {
	return {
		'--inline': props.layout == 'inline',
	}
})
</script>

<style scoped>
.c-radio-group {
	--sl-color-neutral-0: #209fd6;
	--sl-color-primary-600: #cbd5e1;
	
}

.c-radio::part(control--checked) {
	@apply bg-white
}

.c-radio::part(label) {
	@apply text-stone-800
}

.c-radio-group.--inline::part(form-control-input) {
	@apply flex items-center gap-12
}
</style>