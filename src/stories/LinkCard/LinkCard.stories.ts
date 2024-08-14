import type { Meta, StoryObj } from '@storybook/vue3';
import LinkCard from './LinkCard.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof LinkCard> = {
	title: 'Cards/LinkCard',
	component: LinkCard,
	args: {
		url: '#',
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
			const clicked = () => {
				console.log('clicked')
			}
			return { args, clicked };
		},
		template: `
			<LinkCard v-bind="args" @button-clicked="clicked">
				<template #title>
					<div class="text-5xl font-semibold">Title</div>
				</template>
				<div class="text-lg font-light">Connect your home with confidence when pairing your needs with Cybersmart's fibre to the home options. </div>
			</LinkCard>	
		`,
	}),
};
