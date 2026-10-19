<template>
	<div class="flex flex-col items-center mx-auto">
		<div v-if="subtitle" class="text-blue text-lg lg:text-lg 2xl:text-base mb-2 font-semibold uppercase leading-7 tracking-wide text-center">{{ subtitle }}</div>
		<component :is="titleEl" v-if="title" class="text-primary text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-center">{{ title }}</component>
		<p v-if="description" class="text-slate-500 font-light text-center mt-8">{{ description }}</p>
	</div>
</template>

<script lang="ts" setup>

interface Props {
	subtitle?: string
	title?: string
	titleEl?: string
	description?: string
}

const props = withDefaults(defineProps<Props>(), {
	titleEl: 'div'
});
</script>