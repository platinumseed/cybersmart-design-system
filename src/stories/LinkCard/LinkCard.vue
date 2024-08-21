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
				px-8
				pt-8
				pb-16
				md:pt-10
				md:pb-20
				group-hover:bg-blue
				transition-all
				bg-right-bottom
				bg-no-repeat
				group-hover:bg-[url('../assets/logo-icon-bg.svg')]
				flex
				flex-col
				gap-9
				relative
				h-full
			"
		>
			<div>
				<div v-if="$slots.title" class="text-blue group-hover:text-white transition-all mb-9">
					<slot name="title" />
				</div>
				<div class="text-slate-400 group-hover:text-white transition-all">
					<slot />
				</div>
			</div>
			<div class="">
				<FeatureList :feature-items="features" :iconColor="featureColor" :textColor="featureColor"  />
			</div>
			<Button
				type="primary"
				label=""
				icon-before="south_east"
				:href="url"
				:target="target"
				class="absolute bottom-5 right-5 md:bottom-8 md:right-8"
				@click="handleClick($event)"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import FeatureList from '../FeatureList/FeatureList.vue';
import Button from '../Button/Button.vue';
interface Props {
	features: string[],
	url: string
	target?: '_blank' | '_self' | '_parent' | '_top'
}

const props = withDefaults(defineProps<Props>(), {
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

const emit = defineEmits(['buttonClicked'])

function handleClick(event: Event) {
	if (!props.url || props.url === '#') {
		event.preventDefault()
	}
  	emit('buttonClicked')
}

</script>