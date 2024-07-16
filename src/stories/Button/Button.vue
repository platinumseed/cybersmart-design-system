<template>
	<component
		:is="el"
		:href="href"
		type="button" 
		class="
			group
			inline-flex 
			justify-center 
			items-center 
			gap-2 
			focus-visible:outline-none
			focus-visible:ring-4
			disabled:opacity-50
			disabled:cursor-not-allowed
			transition-all
		" 
		:class="buttonClasses"
		@click="onClick" 
		:disabled="disabled"
	>
		<span v-if="iconBefore" class="transition-all font-semibold text-base material-symbols-outlined" :class="textClasses">{{ iconBefore }}</span>
		<span v-if="hasText" class="transition-all font-semibold" :class="textClasses">{{ label }} </span>
		<span v-if="iconAfter" class="transition-all font-semibold text-base material-symbols-outlined" :class="textClasses">{{ iconAfter }}</span>
	</component>
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
	disabled?: boolean,
	/**
	 * Link to which button should go
	 */
	 href?: string,

}>(), {
	type: 'primary',
	disabled: false
});

const emit = defineEmits<{
	(e: 'click', id: number): void;
}>();

const hasText = computed(() => {
	return props.label && props.label !== '' ? true : false;
});

const buttonClasses = computed(() => ({
	'rounded-full border': props.type == 'primary' || props.type == 'secondary' || props.type == 'outline',
	'bg-teal border-teal hover:bg-emerald-300 hover:border-emerald-300 focus-visible:ring-green-400': props.type == 'primary',
	'bg-slate-900 border-slate-900 hover:border-sky-950  hover:bg-sky-950  focus-visible:ring-sky-900': props.type == 'secondary',
	'bg-transparent border-blue hover:border-sky-600 focus-visible:ring-sky-900': props.type == 'outline',
	'focus-visible:ring-sky-900': props.type == 'ghost',
	'w-12 h-12 text-center flex flex-col justify-center' : !hasText.value,
	'px-5 py-3' : hasText.value
}));

const textClasses = computed(() => ({
	'text-slate-900': props.type == 'primary',
	'text-white': props.type == 'secondary',
	'text-blue group-hover:text-sky-600': props.type == 'outline',
	'text-digital-black group-hover:text-blue': props.type == 'ghost',
}));

const el = computed(() => props.href ? 'a' : 'button');

const onClick = () => {
	emit("click", 1)
};

</script>