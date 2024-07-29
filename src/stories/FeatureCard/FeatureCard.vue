<template>
	<div class="flex flex-col gap-6" :class="{'items-center': textAlign === 'center' }">
		<IconBlock v-if="iconStyle === 'boxed'" :icon="icon" />
		<div v-else class="material-symbols-outlined text-blue">{{ icon }}</div>
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
import IconBlock from '../IconBlock/IconBlock.vue';

interface Props {
	title: string
	description: string
	icon: string
	iconStyle: 'boxed' | 'open' | null
	linkText?: string
	linkUrl?: string
	textAlign?: 'left' | 'center' | null
}

withDefaults(defineProps<Props>(), {
	iconStyle: 'boxed',
	textAlign: 'center',
});

</script>