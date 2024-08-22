<template>
	<div class="flex flex-col gap-6" :class="{'items-center': textAlign === 'center' }">
		<IconBlock v-if="iconStyle === 'boxed'" :icon="icon" />
		<div v-else class="material-symbols-outlined text-blue text-[32px]">{{ icon }}</div>
		<div class="text-xl lg:text-2xl 2xl:text-2xl text-primary font-medium" :class="{'text-center': textAlign === 'center' }">{{ title }}</div>
		<p class="text-slate-500 font-light" :class="{'text-center': textAlign === 'center' }">{{ description }}</p>
		<div>
			<Button
				v-if="linkUrl && linkUrl"
				type="ghost"
				:label="linkText"
				:url="linkUrl"
				icon-after="arrow_right_alt"
				:class="'!p-0'"
				@click="handleClick($event)"
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
	iconStyle?: 'boxed' | 'open' | null
	linkText?: string
	linkUrl?: string
	textAlign?: 'left' | 'center' | null
}

const props = withDefaults(defineProps<Props>(), {
	iconStyle: 'boxed',
	textAlign: 'center',
});

const emit = defineEmits(['buttonClicked'])

function handleClick(event: Event) {
	if (props.linkText && (!props.linkUrl || props.linkUrl === '#')) {
		event.preventDefault()
	}
  	emit('buttonClicked')
}

</script>