<template>
	<div :class="colClass">
		<div v-for="featureItem in featureItems" :key="featureItem" class="flex items-center gap-2 mb-4 last:mb-0'">
			<span :class="`${iconColor} material-symbols-outlined transition-all`">check_circle</span>
			<span :class="`${textColor} text-lg font-light transition-all`">{{ featureItem }}</span>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
interface Props {
	featureItems: string[]
	iconColor?: string
	textColor?: string
	columns?: boolean
}

const props = withDefaults(defineProps<Props>(), {
	iconColor: 'text-blue',
	textColor: 'text-slate-500',
	columns: false
});

const colClass = computed(() => {
	if (props.columns) {
		return 'columns-2 gap-4'
	}
	return 'flex flex-col'
})

</script>