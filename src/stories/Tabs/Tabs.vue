<template>
	<sl-tab-group :class="['c-tab-group', tabGroupClasses]">
		<sl-tab v-for="tab in tabs" :key="tab.label" :class="[tabClasses, 'c-tab']" slot="nav" :panel="tab.name" :disabled="tab.disabled">{{ tab.label }}</sl-tab>
		
		<sl-tab-panel v-for="tab in tabs" :key="tab.label" class="c-tab-panel" :name="tab.name">
			<div class="" v-html="tab.content"></div>
		</sl-tab-panel>
	</sl-tab-group>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js';
import '@shoelace-style/shoelace/dist/components/tab/tab.js';
import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js';

interface Tab {
	name: string,
	label: string,
	content: string,
	disabled?: boolean | null
}

interface Props {
	type: string
	tabs: Tab[]
}

const props = withDefaults(defineProps<Props>(), {
	type: 'underline',
	disabled: null
});

const tabGroupClasses = computed(() => ({
	'c-tab-group--underline': props.type === 'underline',
	'c-tab-group--filled': props.type === 'filled',
}));

const tabClasses = computed(() => ({
	'c-tab--underline': props.type === 'underline',
	'c-tab--filled': props.type === 'filled',
}));

</script>

<style scoped>
	.c-tab-group--filled::part(tabs) {
		@apply !border-none
	}

	.c-tab {
		--sl-color-neutral-600: #64748B; /* Inactive tab color */
		--sl-color-primary-600: #231F20; /* Active tab color */
	}

	.c-tab::part(base) {
		@apply font-normal text-base rounded-none 
	}

	.c-tab--underline::part(base) {
		@apply px-8 py-6
	}

	.c-tab--underline[active]::part(base) {
		border-bottom: 4px solid #209FD6;
	}

	.c-tab--filled::part(base) {
		@apply px-4 py-1
	}

	.c-tab--filled[active]::part(base) {
		@apply bg-slate-50 rounded-2xl
	}
</style>