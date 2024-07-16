<template>
	<div class="flex flex-col gap-6 items-center">
		<div class="w-12 h-12 p-2 bg-white rounded-xl border border-slate-300 justify-center items-center gap-2 inline-flex material-symbols-outlined">{{ icon }}</div>
		<h3 class="text-primary">{{ title }}</h3>
		<p class="text-secondary">{{ description }}</p>
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