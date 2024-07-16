<template>
	<div class="flex flex-col gap-4">
		<div v-for="featureItem in featureItems" :key="featureItem" class="flex items-center gap-2">
			<span class="material-symbols-outlined text-blue">check_circle</span>
			<span class="text-slate-500 text-lg font-light">{{ featureItem }}</span>
		</div>
	</div>
</template>

<script lang="ts" setup>

interface Props {
	featureItems: string[]
}

defineProps<Props>()

</script>