import type { Meta, StoryObj } from '@storybook/vue3';
import PostCard from './PostCard.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof PostCard> = {
	title: 'Cards/PostCard',
	component: PostCard,
	args: {
		image: 'https://www.cybersmart.co.za/api/uploads/cee9583fc1454832bb69b61ca6812ba4.png',
		category: 'Announcement',
		title: 'This is a blog post title. 2 line truncation for all headings',
		excerpt: '3 line truncation. Lorem ipsum dolor sit amet consectetur. Sed rhoncus suspendisse velit habitant dui. Euismod consequat faucibus sed suspendisse quam faucibus. Risus at elit lectus elementum.',
		date: '12 Jan 2024',
		url: 'https://www.google.com',
	},
	argTypes: {},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => ({
		components: { PostCard },
		setup() {
			const clicked = () => {
				console.log('clicked')
			}
			return { args, clicked };
		},
		template: `
			<PostCard v-bind="args" @button-clicked="clicked"/>
		`,
	}),
};
