<template>
	<div class="c-package-card bg-white px-8 py-14 rounded-3xl border border-slate-300 relative overflow-hidden h-full">
		<div v-if="ribbonText" class="absolute top-0 left-0 w-full bg-blue py-2 flex items-center justify-center gap-2 rounted-t-3xl h-full">
			<div v-if="ribbonIcon" class="material-symbols-outlined text-white">{{ ribbonIcon }}</div>
			<div class="text-white text-sm font-light">{{ ribbonText }}</div>
		</div>
		<div class="flex flex-col justify-between items-center text-center">
			<div class="text-3xl lg:text-4xl 2xl:text-5xl text-blue font-semibold">{{ title }}</div>
			<p v-if="description" class="text-lg lg:text-lg 2xl:text-base text-slate-500 font-light mt-4">{{ description }}</p>
			<div class="text-lg lg:text-lg 2xl:text-base text-digital-black font-semibold mt-6">{{ cost }}</div>
			<Button v-if="ctaLabel" type="outline" :label="ctaLabel" :href="ctaUrl" class="mt-10" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import Button from '../Button/Button.vue';

interface Props {
	title: string
	description?: string
	cost?: string
	ctaLabel?: string
	ctaUrl?: string
	ribbonText?: string
	ribbonIcon?: string
}

defineProps<Props>()

</script>