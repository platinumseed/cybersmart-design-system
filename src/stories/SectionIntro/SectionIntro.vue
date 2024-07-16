<template>
	<div class="flex flex-col items-center max-w-[580px] mx-auto">
		<div v-if="subtitle" class="text-blue text-lg lg:text-lg 2xl:text-base mb-4 font-semibold uppercase leading-7 tracking-wide">{{ subtitle }}</div>
		<div v-if="title" class="text-primary text-3xl lg:text-4xl 2xl:text-5xl font-semibold">{{ title }}</div>
		<p v-if="description" class="text-secondary text-center mt-8">{{ description }}</p>
	</div>
</template>

<script lang="ts" setup>

interface Props {
	subtitle?: string
	title?: string
	description?: string
}

defineProps<Props>()
</script>