import type { Meta, StoryObj } from '@storybook/vue3';
import Toast from './Toast.vue';

const meta: Meta<typeof Toast> = {
	title: 'UI Components/Toast',
	component: Toast,
	args: {
		title: 'This is the toast title'
	},
	argTypes: {
		variant: { control: 'select', options: ['primary', 'success', 'warning', 'danger'] },
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
	render: (args) => ({
		components: { Toast },
		setup() {
			return { args };
		},
		template: `
		<Toast v-bind="args">
			This is a standard alert. You can customize its content and even the icon.
		</Toast>`,
	}),
	
};