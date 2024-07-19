<template>
	<div 
		class="
			rounded-3xl 
			bg-slate-50 
			overflow-hidden
			group
		"
		@mouseover="hover = true"
   		@mouseleave="hover = false"
	>
		<div 
			class="
				p-10
				group-hover:bg-blue
				transition-all
				bg-right-bottom
				bg-no-repeat
				group-hover:bg-[url('../assets/logo-icon-bg.svg')]
				flex
				flex-col
				gap-9
				relative
			"
		>
			<div class="text-blue group-hover:text-white transition-all">
				<slot name="title" />
			</div>
			<div class="text-slate-400 group-hover:text-white transition-all">
				<slot />
			</div>
			<div class="flex justify-between items-end">
				<FeatureList :feature-items="features" :iconColor="featureColor" :textColor="featureColor"  />
				<Button
					v-if="url"
					type="primary"
					v-on:click="()=>({})"
					label=""
					icon-before="south_east"
					:href="url"
					:target="target"
					class="shrink-0"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import FeatureList from '../FeatureList/FeatureList.vue';
import Button from '../Button/Button.vue';
interface Props {
	features: string[],
	url?: string
	target?: '_blank' | '_self' | '_parent' | '_top'
}

withDefaults(defineProps<Props>(), {
	target: '_self'
})

const hover = ref(false);

const featureColor = computed(() => {
	if (hover.value) {
		return 'text-white';
	} else {
		return 'text-blue';
	}
})

</script>