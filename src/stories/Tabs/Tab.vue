<template>
	<sl-tab-panel class="c-tab-panel" :name="name">
		<div class="">
			<slot />
		</div>
	</sl-tab-panel>
</template>

<script lang="ts" setup>
import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js';
interface Props {
	name: string
	label: string
}

defineProps<Props>()
</script>

<style scoped>
.c-tab-panel::part(base) {
	@apply pt-6 pb-0
}
</style>