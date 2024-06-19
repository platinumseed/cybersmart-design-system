<template>
	<button 
		type="button" 
		class="
			group
			inline-flex 
			justify-center 
			items-center 
			gap-2 
			focus-visible:outline-none
			focus-visible:ring-cyan-300
			focus-visible:ring-4
			disabled:opacity-50
			disabled:cursor-not-allowed
			transition-all
		" 
		:class="buttonClasses"
		@click="onClick" 
		:disabled="disabled"
	>
		<span v-if="iconBefore" class="transition-all text-base material-symbols-outlined" :class="textClasses">{{ iconBefore }}</span>
		<span v-if="hasText" class="transition-all" :class="textClasses">{{ label }} </span>
		<span v-if="iconAfter" class="transition-all text-base material-symbols-outlined" :class="textClasses">{{ iconAfter }}</span>
	</button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(defineProps<{
	/**
	 * The label of the button
	 */
	label?: string,
	/**
	 * type of the button
	 */
	type?: 'primary' | 'secondary' | 'outline' | 'ghost',
	/**
	 * Icon Before
	 */
	 iconBefore?: string,
	/**
	 * Icon After
	 */
	 iconAfter?: string,
	/**
	 * Is button disabled?
	 */
	disabled: boolean,

}>(), {
	type: 'primary',
	disabled: false
});

const emit = defineEmits<{
	(e: 'click', id: number): void;
}>();

const hasText = computed(() => {
	return props.label && props.label !== ''
});

const buttonClasses = computed(() => ({
	'rounded-full border': props.type == 'primary' || props.type == 'secondary' || props.type == 'outline',
	'bg-orange border-orange hover:bg-amber-600 hover:border-amber-600': props.type == 'primary',
	'bg-blue border-blue hover:border-sky-600 hover:bg-sky-600': props.type == 'secondary',
	'bg-white border-blue hover:border-sky-600': props.type == 'outline',
	'': props.type == 'ghost',
	'p-3' : !hasText,
	'px-5 py-3' : hasText
}));

const textClasses = computed(() => ({
	'text-white': props.type == 'primary' || props.type == 'secondary',
	'text-blue group-hover:text-sky-600': props.type == 'outline',
	'text-digital-black hover:text-blue': props.type == 'ghost',
}));

const onClick = () => {
	emit("click", 1)
};

</script>