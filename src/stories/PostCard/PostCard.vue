<template>
	<div class="c-post-card flex max-md:flex-col gap-8">
		<div class="lg:w-[260px] shrink-0">
			<img class="rounded-3xl w-full object-fill" :src="image" alt="">
		</div>
		<div class="flex flex-col gap-8">
			<div class="flex gap-6 justify-between">
				<div>
					<div class="text-sm text-blue font-semibold mb-3">{{ category }}</div>
					<div class="text-h3 text-digital-black font-semibold">{{ title }}</div>
				</div>
				<div>
					<Button
						type="outline"
						label=""
						icon-before="north_east"
						:href="url"
					/>
				</div>
			</div>
			<p class="text-slate-500 font-light line-clamp-3">{{ excerpt }}</p>
			<div class="ext-slate-500 text-sm font-light">{{ date }}</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import Button from '../Button/Button.vue'
interface Props {
	image: string
	category: string
	title: string
	excerpt: string
	date: string
	url: string
}

defineProps<Props>()
</script>