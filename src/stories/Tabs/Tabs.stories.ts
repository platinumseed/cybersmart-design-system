import type { Meta, StoryObj } from '@storybook/vue3';
import Tabs from './Tabs.vue';

const meta: Meta<typeof Tabs> = {
	title: 'UI Components/Tabs',
	component: Tabs,
	args: {
		type: 'underline',
		tabs: [
			{name: 'tab-1', label: 'Tab 1', content: 'This is tab 1 content.'},
			{name: 'tab-2', label: 'Tab 2', content: 'This is tab 2 content.'},
			{name: 'tab-3', label: 'Tab 3', content: 'This is tab 3 content.'},
			{name: 'tab-4', label: 'Tab 4', content: 'This is tab 4 content.', disabled: true},
		]
	},
	argTypes: {

	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Underline: Story = {
	args: {
		type: 'underline',
	},
};

export const Filled: Story = {
	args: {
		type: 'filled',
	},
};