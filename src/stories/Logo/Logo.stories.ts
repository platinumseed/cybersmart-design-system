import type { Meta, StoryObj } from '@storybook/vue3';
import Logo from './Logo.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Base/Logo',
	component: Logo,
	// This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	argTypes: {
	},
	args: {
	},
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {

	},
};
