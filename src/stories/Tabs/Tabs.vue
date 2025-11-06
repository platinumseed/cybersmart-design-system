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
import { computed, useSlots, Fragment, ref, watch } from 'vue'
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

// Make tabsTitles reactive so it updates when slot content changes
const tabsTitles = computed(() => {
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
});

// Reset the tab group when tabs change to ensure proper state
watch(tabsTitles, () => {
	if (tabGroupRef.value) {
		// Reset to first tab when tabs change
		tabGroupRef.value.show(tabsTitles.value[0]?.name);
	}
}, { deep: true });

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