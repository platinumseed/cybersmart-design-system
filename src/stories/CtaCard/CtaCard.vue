<template>
	<div 
		class="
			c-cta-card 
			rounded-3xl 
			bg-slate-50 
			hidden
			md:flex 
			flex-col 
			justify-between
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
				justify-between
				gap-9  
				p-10
				h-full
				group-hover:bg-blue
				transition-all
				bg-right-bottom
				bg-no-repeat
				group-hover:bg-[url('../assets/logo-icon-bg.svg')]
			"
		>
			<div class="flex flex-col gap-9">
				<div class="text-blue group-hover:text-white transition-all text-5xl font-semibold">
					{{ title }}
				</div>
				<div v-if="$slots.description" class="text-slate-500 group-hover:text-white transition-all">
					<slot name="description" />
				</div>
			</div>
			<div class="flex gap-4 justify-between">
				<div class="flex gap-3 flex-wrap">
					<template v-if="tags">
						<Badge v-for="tag in tags" :key="tag" size="small" :type="badgeType">{{ tag }}</Badge>
					</template>
				</div>
				<Button
					v-if="url"
					type="primary"
					label=""
					icon-before="south_east"
					:href="url"
					class="shrink-0"
					@click="handleClick($event)"
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
	
	<div @click="flipCard" class="perspective-1000 cursor-pointer md:hidden h-[260px]">
		<div :class="{'!rotate-y-180': isFlipped}" class="relative transform-style-3d transition-transform duration-1000 transform">
			<div class="backface-hidden absolute w-full h-full inset-0 rotate-y-0">
				<div 
					class="
						c-cta-card 
						rounded-3xl
						bg-slate-50 
					"
				>
					<div 
						class="
							flex 
							flex-col 
							gap-9  
							p-10
							transition-all
						"
					>
						<div class="text-blue text-5xl font-semibold">
							{{ title }}
						</div>	
						<div class="flex gap-4 justify-end">
							<Button
								v-if="url"
								type="outline"
								v-on:click="()=>({})"
								label=""
								icon-before="south_east"
								:href="url"
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="backface-hidden absolute w-full h-full inset-0 rotate-y-180">
				<div 
					class="
						c-cta-card 
						rounded-3xl
						bg-blue
					"
				>
					<div 
						class="
							flex 
							flex-col 
							gap-1  
							p-10
							transition-all
						"
					>
						<div>
							<div class="text-xl lg:text-2xl 2xl:text-2xl font-medium text-white mb-5">
								{{ title }}
							</div>
							<div class="text-white ">
								<slot name="description" />
							</div>
						</div>
						<div class="flex gap-4 justify-end">
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
				</div>
			</div>
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
	title: string,
	image?: Image
	url?: string
	tags?: string[]
}

const props = withDefaults(defineProps<Props>(), {});

const hover = ref(false);

const badgeType = computed(() => hover.value ? 'white' : 'accent');

const isFlipped = ref(false);

function flipCard() {
  isFlipped.value = !isFlipped.value;
}

const emit = defineEmits(['buttonClicked'])

function handleClick(event: Event) {
	if (!props.url || props.url === '#') {
		event.preventDefault()
	}
  	emit('buttonClicked')
}

</script>