<template>
	<sl-tooltip class="c-tooltip" :content="content" :placement="placement">
		<slot />
	</sl-tooltip>
</template>

<script setup lang="ts">
import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';

interface Props {
	content: string,
	placement?: string
}

withDefaults(defineProps<Props>(), {
	placement: 'top',
});


</script>

<style scoped>
	sl-tooltip::part(body) {
		@apply p-3 bg-gray-100 rounded-xl text-stone-800 text-sm font-medium
	}

	sl-tooltip::part(base__arrow) {
		@apply bg-gray-100
	}
</style>