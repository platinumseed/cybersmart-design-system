<template>
	<div 
		class="
			c-cta-card 
			rounded-3xl 
			bg-slate-50 
			flex 
			flex-col 
			overflow-hidden
			group	
		"
		@mouseover="hover = true"
   		@mouseleave="hover = false"
	>
		<div 
			class="
				flex 
				flex-col 
				gap-9  
				p-10
				group-hover:bg-blue
				transition-all
				bg-right-bottom
				bg-no-repeat
				group-hover:bg-[url('../assets/logo-icon-bg.svg')]
			"
		>
			<div class="text-blue group-hover:text-white transition-all">
				<slot name="title" />
			</div>
			<div class="text-slate-500 group-hover:text-white transition-all">
				<slot name="description" />
			</div>
			<div class="flex justify-between">
				<div class="flex gap-3 flex-wrap">
					<template v-if="tags">
						<Badge v-for="tag in tags" :key="tag" :type="badgeType">{{ tag }}</Badge>
					</template>
				</div>
				<Button
					v-if="url"
					type="primary"
					v-on:click="()=>({})"
					label=""
					icon-before="south_east"
					:href="url"
				/>
			</div>
		</div>
		<div v-if="image" class="">
			<img 
				class="
					w-full
					h-[220px]
					object-cover
				" :src="image.url" :alt="image.alt">
		</div>
	</div>
</template>

<script lang="ts" setup>
import {ref, computed} from 'vue';
import Button from '../Button/Button.vue';
import Badge from '../Badge/Badge.vue';
interface Image {
	url: string
	alt: string
}
interface Props {
	image?: Image
	url?: string
	tags?: string[]
}

withDefaults(defineProps<Props>(), {});

const hover = ref(false);

const badgeType = computed(() => hover.value ? 'white' : 'accent');

</script>