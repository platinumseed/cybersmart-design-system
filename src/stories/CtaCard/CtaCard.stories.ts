import type { Meta, StoryObj } from '@storybook/vue3';
import CtaCard from './CtaCard.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof CtaCard> = {
	title: 'Cards/CtaCard',
	component: CtaCard,
	args: {
		title: 'Business Fibre&shy;Solutions',
		image: {
			url: 'https://loremflickr.com/500/300/baby',
			alt: 'image',
		},
		url: '#',
		tags: ['home office', 'fibre', 'home office', 'fibre', 'home office', 'fibre'],
	},
	argTypes: {},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => ({
		components: { CtaCard },
		setup() {
			const click = () => {
				console.log('clicked');
			}
			return { args, click };
		},
		template: `
			<CtaCard v-bind="args" @button-clicked="click">
				<template #description>
					<div class="text-lg font-light">Connect your home with confidence when pairing your needs with Cybersmart’s fibre to the home options. </div>
				</template>
			</CtaCard>	
		`,
	}),
};
