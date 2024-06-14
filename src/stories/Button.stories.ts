import type { Meta, StoryObj } from '@storybook/vue3';
import { fn } from '@storybook/test';
import Button from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Base/Button',
	component: Button,
	// This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	argTypes: {
		type: { control: 'select', options: ['primary', 'secondary', 'outline', 'ghost'] },
		iconBefore: { control: 'select', options: ['arrow_back'] },
		iconAfter: { control: 'select', options: ['arrow_forward'] },
		disabled: { control: 'boolean' },
	},
	args: {
		type: 'primary',
		// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
		onClick: fn(),
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    label: 'Button',
  },
};

export const Outline: Story = {
  args: {
    type: 'outline',
    label: 'Button',
  },
};

export const Ghost: Story = {
  args: {
    type: 'ghost',
    label: 'Button',
  },
};