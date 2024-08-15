import type { Meta, StoryObj } from '@storybook/vue3';
import StatusMessage from './StatusMessage.vue';

const meta: Meta<typeof StatusMessage> = {
	title: 'UI Components/StatusMessage',
	component: StatusMessage,
	args: {
		type: 'accent',
		badgeContent: 'Stable'
	},
	argTypes: {
		type: { control: 'select', options: ['accent', 'muted', 'warning', 'success', 'error'] },
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StatusMessage>;

export const Default: Story = {
	render: (args) => ({
		components: { StatusMessage },
		setup() {
			return { args };
		},
		template: `<StatusMessage v-bind="args">This is a message of the network status</StatusMessage>`,
	}),
	
};