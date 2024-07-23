<template>
	<div class="c-testimonial-card p-8 bg-white rounded-3xl flex flex-col gap-6">
		<div class="flex gap-10 justify-between">
			<div class="flex items-center gap-5">
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
					<path d="M11.3854 23.7445L10.465 23.8723C10.9909 23.361 11.6045 22.9776 12.3058 22.7219C13.007 22.4663 13.9274 22.3385 15.067 22.3385C17.0831 22.3385 18.7924 23.0202 20.1949 24.3836C21.6851 25.747 22.4302 27.6643 22.4302 30.1355C22.4302 32.6067 21.6412 34.6518 20.0634 36.2708C18.4856 37.8047 16.3818 38.5716 13.7521 38.5716C11.1224 38.5716 8.88715 37.5916 7.04635 35.6317C5.20555 33.6718 4.28516 30.945 4.28516 27.4513C4.28516 22.7646 5.77532 18.7595 8.75566 15.4362C11.8237 12.0277 15.6367 10.0252 20.1949 9.42871V14.7971C17.6528 15.3084 15.5491 16.331 13.8836 17.8648C12.2181 19.3986 11.3854 21.3585 11.3854 23.7445ZM33.5261 23.7445L32.4742 23.8723C33.0002 23.361 33.6137 22.9776 34.315 22.7219C35.1039 22.4663 36.0243 22.3385 37.0762 22.3385C39.18 22.3385 40.9331 23.0202 42.3356 24.3836C43.8258 25.747 44.5709 27.6643 44.5709 30.1355C44.5709 32.6067 43.7381 34.6518 42.0727 36.2708C40.4948 37.8047 38.4349 38.5716 35.8928 38.5716C33.1755 38.5716 30.8964 37.5916 29.0556 35.6317C27.2148 33.6718 26.2944 30.945 26.2944 27.4513C26.2944 22.7646 27.7846 18.7595 30.7649 15.4362C33.8329 12.0277 37.6898 10.0252 42.3356 9.42871V14.7971C39.7936 15.3084 37.6898 16.331 36.0243 17.8648C34.3588 19.3986 33.5261 21.3585 33.5261 23.7445Z" fill="#209FD6"/>
				</svg>
				<div class="flex flex-col">
					<div class="text-stone-800 text-lg font-semibold">{{ author }}</div>
					<div v-if="location" class="text-slate-500 text-lg font-light">{{ location }}</div>
				</div>
			</div>
			<sl-rating 
				v-if="rating" 
				label="Rating"
				readonly 
				:value="rating"
				class="c-rating"
			></sl-rating>
		</div>
		<p ref="testimonial" class="text-stone-800 font-light" :class="{ 'line-clamp-4': !showFull }">{{ testimonial }}</p>
		<div>
			<a
				href="#"
				@click.prevent="showFull = !showFull"
				class="text-sky-500 text-base font-semibold flex items-center gap-2 hover:text-stone-800"
			>
				{{ expanLabel }}
				<span class="material-symbols-outlined">keyboard_arrow_down</span>
			</a>
		</div>
	</div>
</template>

<script lang="ts" setup>
import {ref, computed} from 'vue';
import '@shoelace-style/shoelace/dist/components/rating/rating.js';

interface Props {
	author: string
	testimonial: string
	location?: string
	rating?: number
}

defineProps<Props>()

const showFull = ref<boolean>(false)

const expanLabel = computed(() => {
	return showFull.value ? 'Read Less' : 'Read More'
})
 </script>

<style scoped>
	.c-rating {
		--symbol-color: #94A3B8;
		--symbol-color-active: #FBBF24;
	}
</style>