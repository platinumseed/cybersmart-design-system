<template>
	<div class="c-package-card bg-white px-8 py-14 rounded-3xl border relative overflow-hidden h-full" :class="cardClasses">
		<div v-if="ribbonText" class="absolute top-0 left-0 w-full bg-blue py-2 flex items-center justify-center gap-2 rounted-t-3xl">
			<div v-if="ribbonIcon" class="material-symbols-outlined text-white">{{ ribbonIcon }}</div>
			<div class="text-white text-sm font-light">{{ ribbonText }}</div>
		</div>
		<div class="flex flex-col justify-between items-center text-center h-full">
			<div class="text-3xl lg:text-4xl 2xl:text-5xl text-blue font-semibold">{{ title }}</div>
			<p v-if="description" class="text-lg lg:text-lg 2xl:text-base text-slate-500 font-light mt-4">{{ description }}</p>
			<div class="text-lg lg:text-lg 2xl:text-base text-digital-black font-semibold mt-6">{{ cost }}</div>
			<Button 
				v-if="ctaLabel" 
				type="outline" 
				:label="ctaLabel" 
				:href="ctaUrl" 
				class="mt-10" 
				@click="handleClick($event)"
			/>
			<div v-if="$slots.moreInfo" class="flex flex-col gap-4 mt-2">
				<Button 
					:label="toggleMoreText"
					type="ghost"
					:icon-after="toggleMoreIcon"
					@click="showMoreInfo = !showMoreInfo"
				/>
				<slot v-if="showMoreInfo" name="moreInfo"></slot>
			</div>
		</div>	
	</div>
</template>

<script lang="ts" setup>
import { ref, computed, defineEmits } from 'vue';
import Button from '../Button/Button.vue';

interface Props {
	title: string
	description?: string
	cost?: string
	ctaLabel?: string
	ctaUrl?: string
	ribbonText?: string
	ribbonIcon?: string
	active?: boolean
}

const props = withDefaults(defineProps<Props>(), {
	active: false
});

const showMoreInfo = ref<boolean>(false)

const toggleMoreText = computed(() => showMoreInfo.value ? 'less info' : 'more Info')
const toggleMoreIcon = computed(() => showMoreInfo.value ? 'keyboard_arrow_up' : 'keyboard_arrow_down')
const cardClasses = computed(() => {
	return props.active ? 'border-blue' : 'border-slate-300'
})

const emit = defineEmits(['buttonClicked'])

function handleClick(event: Event) {
	if (!props.ctaUrl || props.ctaUrl === '#') {
		event.preventDefault()
	}
  	emit('buttonClicked')
}
</script>