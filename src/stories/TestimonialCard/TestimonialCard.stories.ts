import type { Meta, StoryObj } from '@storybook/vue3';
import TestimonialCard from './TestimonialCard.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof TestimonialCard> = {
	title: 'Cards/TestimonialCard',
	component: TestimonialCard,
	args: {
		author: 'John Doe',
		location: 'London, UK',
		testimonial: 'Lorem ipsum dolor sit amet consectetur. Blandit elit eget scelerisque convallis commodo vitae amet ut posuere. Leo sed purus facilisis pellentesque integer egestas eget ultrices varius. At morbi et iaculis accumsan. Tristique natoque scelerisque interdum eget magna quis hendrerit cras dui. Faucibus fames accumsan viverra orci hendrerit id convallis arcu. Ultrices volutpat ac vestibulum amet vel tellus. Euismod ut eget faucibus nunc elementum viverra. In sed justo cursus tincidunt tellus nibh tristique eu nec. Scelerisque potenti ligula bibendum montes cursus turpis viverra quis ornare. Eleifend mauris euismod vitae tincidunt massa imperdiet. Faucibus ut fermentum fringilla massa auctor venenatis viverra amet diam. Non viverra interdum odio amet. Eget neque aliquam orci cras ipsum sit quis volutpat.',
		rating: 3
	},
	argTypes: {},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => ({
		components: { TestimonialCard },
		setup() {
			return { args };
		},
		template: `
			<TestimonialCard v-bind="args">
				<template #description>
					<div class="text-lg font-light">Connect your home with confidence when pairing your needs with Cybersmart’s fibre to the home options. </div>
				</template>
			</TestimonialCard>	
		`,
	}),
};
