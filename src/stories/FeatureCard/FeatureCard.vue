<template>
	<div class="flex flex-col gap-6" :class="{'items-center': textAlign === 'center' }">
		<div 
			class="material-symbols-outlined"
			:class="iconStyle === 'boxed' ? 'w-12 h-12 bg-white rounded-xl border border-slate-300 justify-center items-center gap-2 inline-flex p-2' : 'text-blue'"
		>{{ icon }}</div>
		<div class="text-xl lg:text-2xl 2xl:text-2xl text-primary" :class="{'text-center': textAlign === 'center' }">{{ title }}</div>
		<p class="text-secondary" :class="{'text-center': textAlign === 'center' }">{{ description }}</p>
		<div>
			<Button
				v-if="linkUrl && linkUrl"
				type="ghost"
				:label="linkText"
				:url="linkUrl"
				icon-after="arrow_right_alt"
				:class="'!p-0'"
			/>
		</div>
	</div>
</template>

<script lang="ts" setup>
import Button from '../Button/Button.vue';

interface Props {
	title: string;
	description: string;
	icon: string;
	iconStyle: 'boxed' | 'open'
	linkText?: string;
	linkUrl?: string;
	textAlign?: 'left' | 'center';
}

withDefaults(defineProps<Props>(), {
	iconStyle: 'boxed',
	textAlign: 'center',
});

</script>