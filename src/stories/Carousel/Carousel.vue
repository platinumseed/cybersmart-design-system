<template>
	<sl-carousel
		ref="carousel"
		class="c-carousel relative" 
		:pagination="pagination"
		:navigation="navigation"
		:mouse-dragging="draggable"
		:loop="loop"
		:autoplay="autoplay"
		:slides-per-page="slidesPerPage"
		@sl-slide-change="onSlideChange"
	>
		<div 
			class="
				absolute
				rounded-full
				w-12 
				h-12 
				p-3
				left-16 
				bg-[rgba(255,_255,_255,_0.75)]
				backdrop-blur-sm 
				material-symbols-outlined
				shadow-[0px_1px_3px_0px_rgba(0,_0,_0,_0.10),_0px_1px_2px_0px_rgba(0,_0,_0,_0.06)]
				rotate-180
			" 
			slot="previous-icon"
		>arrow_forward_ios</div>
		<slot />
		<sl-carousel-item v-for="image in images" :key="image.url">
			<img :alt="image.alt" :src="image.url" />
		</sl-carousel-item>
		<div 
			class="
				absolute
				rounded-full
				w-12 
				h-12 
				p-3
				right-16
				bg-[rgba(255,_255,_255,_0.75)]
				backdrop-blur-sm 
				material-symbols-outlined
				shadow-[0px_1px_3px_0px_rgba(0,_0,_0,_0.10),_0px_1px_2px_0px_rgba(0,_0,_0,_0.06)]
			" 
			slot="next-icon"
		>arrow_forward_ios</div>
	</sl-carousel>
	<div v-if="gallery && images && images.length" class="flex gap-4 justify-center">
		<div 
			v-for="(image, index) in images" 
			@click="goToSlide(index)"
			:key="image.url"
			:class="activeSlide === index ? 'ring-2 ring-sky-500' : ''"
			class="md:max-w-[148px] aspect-square rounded-xl relative overflow-hidden cursor-pointer" 
		>
			<div v-if="activeSlide === index" class="bg-white opacity-80 z-10 absolute inset-0"></div>
			<img class="rounded-xl w-full h-full object-cover" :alt="image.alt" :src="image.url" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import '@shoelace-style/shoelace/dist/components/carousel/carousel.js';
import '@shoelace-style/shoelace/dist/components/carousel-item/carousel-item.js';

interface Image {
	url: string,
	alt: string
}

interface Props {
	pagination?: boolean,
	navigation?: boolean,
	loop?: boolean,
	draggable?: boolean,
	autoplay?: boolean,
	gallery?: boolean,
	slidesPerPage?: number,
	images?: Image[]
}

withDefaults(defineProps<Props>(), {
	pagination: true,
	navigation: true,
	loop: true,
	draggable: true,
	autoplay: true,
	slidesPerPage: 3
});

const carousel = ref<HTMLElement | null>(null);

const activeSlide = ref(0);

const onSlideChange = (event: CustomEvent) => {
	activeSlide.value = event.detail.index;
};

const goToSlide = (index: number) => {
	// Ensure carousel ref is available and has the method scrollToItem
	if (carousel.value && 'goToSlide' in carousel.value) {
		(carousel.value as any).goToSlide(index);
	}
};
</script>

<style scoped>
.c-carousel::part(pagination) {
	@apply inline-flex absolute left-1/2 -translate-x-1/2 bottom-11 p-2 bg-[rgba(255,_255,_255,_0.75)] rounded-full backdrop-blur-sm
}

.c-carousel::part(pagination-item) {
	@apply w-2 h-2 bg-slate-400 rounded
}

.c-carousel::part(pagination-item pagination-item--active) {
	@apply w-2 h-2 bg-sky-500
}
</style>