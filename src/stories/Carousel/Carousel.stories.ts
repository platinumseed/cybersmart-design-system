import type { Meta, StoryObj } from '@storybook/vue3';
import Carousel from './Carousel.vue';

const meta: Meta<typeof Carousel> = {
	title: 'UI Components/Carousel',
	component: Carousel,
	args: {
		images: [
			{
				alt: 'The sun shines on the mountains and trees (by Adam Kool on Unsplash)',
				url: 'http://unsplash.it/1024/800?gravity=center',
			},
			{
				alt: 'A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)',
				url: 'http://unsplash.it/1024/800?random',
			},
			{
				alt: 'The sun is setting over a lavender field (by Leonard Cotte on Unsplash)',
				url: 'http://unsplash.it/1024/800?gravity=center',
			},
			{
				alt: 'A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)',
				url: 'http://unsplash.it/1024/800?random',
			},
		]
	},
	argTypes: {
		slidesPerPage: { control: 'select', options: [1, 2, 3, 4] },
	},
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
	args: {
	},
	render: (args) => ({
		components: { Carousel },
		setup() {
			return { args };
		},
		template: `
		<Carousel v-bind="args"></Carousel>`,
	}),
};