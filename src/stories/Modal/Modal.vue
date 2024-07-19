<template>
	<sl-dialog ref="modal" :label="label" :open="open" class="c-modal">
		<slot />
		<a href="#" slot="footer" @click.prevent="closeModal" variant="primary">

		</a>
	</sl-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';

interface Props {
	open?: boolean
	label?: string
}

withDefaults(defineProps<Props>(), {
	open: false
});

const modal = ref<HTMLElement | null>(null);

const closeModal = () => {
	if (modal.value && 'hide' in modal.value) {
		(modal.value as any).hide();
	}
};

</script>

<style scoped>
.c-modal::part(panel) {
	@apply rounded-3xl p-10 relative
}

.c-modal::part(header) {
	/* @apply rounded-3xl p-10 */
}

.c-modal::part(title) {
	@apply p-0
}

.c-modal::part(close-button) {
	@apply absolute top-3 right-3 z-10
}

.c-modal::part(close-button__base) {
	@apply text-black hover:text-blue transition-all
}
</style>