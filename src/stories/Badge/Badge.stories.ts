import type { Meta, StoryObj } from '@storybook/vue3';
import Badge from './Badge.vue';

const meta: Meta<typeof Badge> = {
	title: 'UI Components/Badge',
	component: Badge,
	args: {
		type: 'accent',
	},
	argTypes: {
		type: { control: 'select', options: ['accent', 'active', 'muted', 'warning', 'success', 'error'] },
		size: { control: 'select', options: ['small', 'large'] },
		color: { control: 'text', description: 'Custom hex color for text and border (e.g., #FF5733)' },
		active: { control: 'boolean', description: 'When true with a custom color, sets background to the color and text to white' },
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
	render: (args) => ({
		components: { Badge },
		setup() {
			return { args };
		},
		template: `<Badge v-bind="args">Badge</Badge>`,
	}),
	
};

export const Closable: Story = {
	render: (args) => ({
		components: { Badge },
		setup() {
			return { args };
		},
		template: `<Badge v-bind="args">Badge<span class="material-symbols-outlined">close</span></Badge>`,
	}),

};

export const CustomColorInactive: Story = {
	render: (args) => ({
		components: { Badge },
		setup() {
			return { args };
		},
		template: `<Badge color="#FF5733">Custom Color</Badge>`,
	}),
	args: {
		type: 'accent',
	},
};

export const CustomColorActive: Story = {
	render: (args) => ({
		components: { Badge },
		setup() {
			return { args };
		},
		template: `<Badge color="#FF5733" active>Active Custom</Badge>`,
	}),
	args: {
		type: 'accent',
	},
};

export const CustomColorLarge: Story = {
	render: (args) => ({
		components: { Badge },
		setup() {
			return { args };
		},
		template: `<div class="flex gap-4"><Badge color="#00AA00" size="large">Custom Large</Badge><Badge color="#00AA00" active size="large">Active Large</Badge></div>`,
	}),
	args: {
		type: 'accent',
	},
};