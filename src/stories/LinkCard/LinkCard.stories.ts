import type { Meta, StoryObj } from '@storybook/vue3';
import LinkCard from './LinkCard.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof LinkCard> = {
	title: 'Cards/LinkCard',
	component: LinkCard,
	args: {
		url: 'https://www.google.com',
		features: [
			'Multiple-User Operations',
			'POS Connectivity',
			'Video Conferencing'
		]
	},
	argTypes: {},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => ({
		components: { LinkCard },
		setup() {
			return { args };
		},
		template: `
			<LinkCard v-bind="args">
				<template #title>
					<div class="text-5xl font-semibold">Title</div>
				</template>
				<div class="text-lg font-light">Connect your home with confidence when pairing your needs with Cybersmart's fibre to the home options. </div>
			</LinkCard>	
		`,
	}),
};
