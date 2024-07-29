import type { Meta, StoryObj } from '@storybook/vue3';
import IconBlock from './IconBlock.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof IconBlock> = {
	title: 'Base/IconBlock',
	component: IconBlock,
	args: {
		icon: 'wifi',
	},
	argTypes: {},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => ({
		components: { IconBlock },
		setup() {
			return { args };
		},
		template: `
			<IconBlock v-bind="args" />	
		`,
	}),
};
