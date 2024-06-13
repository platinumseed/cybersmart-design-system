<template>
	<button 
		type="button" 
		class="
			group
			inline-flex 
			justify-center 
			items-center 
			gap-2 
			px-5 
			py-3
			transition-all
		" 
		:class="buttonClasses"
		@click="onClick" 
		:style="style">
		<span class="transition-all" :class="textClasses">{{ label }} </span>
	</button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(defineProps<{
	/**
	 * The label of the button
	 */
	label: string,
	/**
	 * type of the button
	 */
	type?: 'primary' | 'secondary' | 'outline' | 'ghost',
	/**
	 * background color of the button
	 */
	backgroundColor?: string,

}>(), { type: 'primary' });

const emit = defineEmits<{
	(e: 'click', id: number): void;
}>();

const buttonClasses = computed(() => ({
	'rounded-full border': props.type == 'primary' || props.type == 'secondary' || props.type == 'outline',
	'bg-orange border-orange hover:bg-amber-600 hover:border-amber-600': props.type == 'primary',
	'bg-blue border-blue hover:border-sky-600 hover:bg-sky-600': props.type == 'secondary',
	'bg-white border-blue hover:border-sky-600': props.type == 'outline',
	'': props.type == 'ghost',
}));

const textClasses = computed(() => ({
	'text-white': props.type == 'primary' || props.type == 'secondary',
	'text-blue group-hover:text-sky-600': props.type == 'outline',
	'text-digital-black hover:text-blue': props.type == 'ghost',
}));

const style = computed(() => ({
	backgroundColor: props.backgroundColor
}));

const onClick = () => {
	emit("click", 1)
};

</script>