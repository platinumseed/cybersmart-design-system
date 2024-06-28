import type { Meta, StoryObj } from '@storybook/vue3';
import Badge from './Badge.vue';

const meta: Meta<typeof Badge> = {
	title: 'UI Components/Badge',
	component: Badge,
	args: {
		type: 'accent',
	},
	argTypes: {
		type: { control: 'select', options: ['accent', 'muted', 'warning', 'success', 'error'] },
	},
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