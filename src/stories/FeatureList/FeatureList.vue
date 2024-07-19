<template>
	<div class="flex flex-col gap-4">
		<div v-for="featureItem in featureItems" :key="featureItem" class="flex items-center gap-2">
			<span :class="`${iconColor} material-symbols-outlined transition-all`">check_circle</span>
			<span :class="`${textColor} text-lg font-light transition-all`">{{ featureItem }}</span>
		</div>
	</div>
</template>

<script lang="ts" setup>

interface Props {
	featureItems: string[]
	iconColor?: string
	textColor?: string
}

withDefaults(defineProps<Props>(), {
	iconColor: 'text-blue',
	textColor: 'text-slate-500',
});

</script>