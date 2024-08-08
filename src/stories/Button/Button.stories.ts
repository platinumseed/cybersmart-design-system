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
		iconBefore: { control: 'select', options: ['arrow_back', 'check_circle', 'arrow_right_alt'] },
		iconAfter: { control: 'select', options: ['arrow_forward', 'check_circle', 'arrow_right_alt'] },
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

export const CustomIcon: Story = {
	args: {
		type: 'primary',
		label: 'Button',
	},
	render: (args) => ({
		components: { Button },
		setup() {
			return { args };
		},
		template: `
		<Button v-bind="args">
			<template v-slot:iconBefore>
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#231F20" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"></path></svg>
			</template>
		</Button>`,
	}),
};