<template>
	<div class="flex flex-col gap-6 items-center">
		<div class="w-12 h-12 p-2 bg-white rounded-xl border border-slate-300 justify-center items-center gap-2 inline-flex material-symbols-outlined">{{ icon }}</div>
		<div class="text-xl lg:text-2xl 2xl:text-2xl text-primary text=text-center">{{ title }}</div>
		<p class="text-secondary text=text-center">{{ description }}</p>
		<Button
			v-if="linkUrl && linkUrl"
			type="ghost"
			:label="linkText"
			:url="linkUrl"
			icon-after="arrow_right_alt"
		/>
	</div>
</template>

<script lang="ts" setup>
import Button from '../Button/Button.vue';

interface Props {
	title: string;
	description: string;
	icon: string;
	linkText?: string;
	linkUrl?: string;
}

defineProps<Props>();
</script>