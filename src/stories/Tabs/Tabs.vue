<template>
	<sl-tab-group ref="tabGroupRef" :class="['c-tab-group', tabGroupClasses]">
		<sl-tab
			v-for="(tab, index) in tabsTitles"
			:key="tab.name"
			:class="[tabClasses, 'c-tab']"
			slot="nav"
			:panel="tab.name"
			:active="index === 0"
		>{{ tab.label }}</sl-tab>
		<slot />
	</sl-tab-group>
</template>

<script lang="ts" setup>
import { computed, useSlots, Fragment, ref, watch, nextTick, onUpdated } from 'vue'
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
const tabGroupRef = ref<any>(null);
const tabsTitles = ref<Tab[]>([]);
let previousTabNames: string[] = [];

// Function to extract tab titles from slot content
const extractTabTitles = () => {
	const titles: Tab[] = [];

	if (slots.default) {
		const slotContent = slots.default();
		slotContent.forEach((tab: any) => {
			if (tab.type === Fragment) {
				tab.children.forEach((child: any) => {
					if (child.props) {
						titles.push({
							label: child.props.label,
							name: child.props.name
						})
					}
				})
			}
			else if (tab.props) {
				titles.push({
					label: tab.props.label,
					name: tab.props.name
				})
			}
		});
	}

	return titles;
};

// Check if tab titles have changed
const haveTabsChanged = (newTitles: Tab[]): boolean => {
	if (newTitles.length !== previousTabNames.length) {
		return true;
	}
	return newTitles.some((tab, index) => tab.name !== previousTabNames[index]);
};

// Extract tab titles on initial mount
const initializeTabs = async () => {
	const newTitles = extractTabTitles();

	// Only update if tabs have actually changed
	if (!haveTabsChanged(newTitles)) {
		return;
	}

	previousTabNames = newTitles.map(t => t.name);
	tabsTitles.value = newTitles;

	// Wait for DOM to update with new tabs and panels
	await nextTick();
	await nextTick(); // Extra tick to ensure Shoelace components are ready

	if (tabGroupRef.value && tabsTitles.value.length > 0) {
		// Reset to first tab when tabs change
		const firstTabName = tabsTitles.value[0]?.name;
		if (firstTabName) {
			try {
				tabGroupRef.value.show(firstTabName);
			} catch (e) {
				// Silently fail if tab-group is not ready yet
			}
		}
	}
};

// Initialize on mount
watch(() => slots.default?.(), initializeTabs, { immediate: true });

// Update whenever component is updated (slot content changes)
onUpdated(initializeTabs);

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