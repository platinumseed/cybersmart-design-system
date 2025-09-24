<template>
	<sl-tab-group :class="['c-tab-group', tabGroupClasses]">
		<sl-tab 
			v-for="(tab, index) in tabsTitles" 
			:key="tab.label" 
			:class="[tabClasses, 'c-tab']" 
			slot="nav" 
			:panel="tab.name"
			:active="index === 0"
		>{{ tab.label }} test</sl-tab>
		<slot />
	</sl-tab-group>
</template>

<script lang="ts" setup>
import { computed, useSlots, Fragment } from 'vue'
import Tab from './Tab.vue'
import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js'
import '@shoelace-style/shoelace/dist/components/tab/tab.js'


interface Tab {
	name: string,
	label: string,
}

interface Props {
	type: string
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

const slots = useSlots();
let tabsTitles: Tab[] = [];

if (slots.default) {
	const slotContent = slots.default();
	slotContent.forEach((tab: any) => {
		if (tab.type === Fragment) {
			tab.children.forEach((child: any) => {
				tabsTitles.push({
					label: child.props.label,
					name: child.props.name
				})
			})
		}
		else {
			tabsTitles.push({
				label: tab.props.label,
				name: tab.props.name
			})
		}
	});
}

</script>

<style scoped>
.c-tab-group--filled::part(tabs) {
	@apply !border-none
}

.c-tab {
	--sl-color-neutral-600: #64748B;
	/* Inactive tab color */
	--sl-color-primary-600: #231F20;
	/* Active tab color */
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
	@apply bg-slate-200 rounded-2xl
}
</style>