<template>
	<sl-breadcrumb class="c-breadcrumbs">
		<div slot="separator" class="material-symbols-outlined text-slate-400 text-xs">arrow_forward_ios</div>
		<sl-breadcrumb-item v-for="breadcrumb in breadcrumbs" :key="breadcrumb.url" :href="breadcrumb.url" class="c-breadcrumb-item">{{ breadcrumb.label }}</sl-breadcrumb-item>
	</sl-breadcrumb>
</template>

<script lang="ts" setup>

import '@shoelace-style/shoelace/dist/components/breadcrumb/breadcrumb.js';
import '@shoelace-style/shoelace/dist/components/breadcrumb-item/breadcrumb-item.js';

interface Breadcrumb {
	label: string,
	url: string
}

interface Props {
	breadcrumbs: Breadcrumb[]
}

withDefaults(defineProps<Props>(), {});

</script>

<style scoped>
	.c-breadcrumb-item {
		--sl-color-neutral-600: #209FD6;
		--sl-color-primary-600: #64748B;
	}

	.c-breadcrumb-item::part(base) {
		@apply font-normal text-base
	}
</style>