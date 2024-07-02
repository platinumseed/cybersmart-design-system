import type { Meta, StoryObj } from '@storybook/vue3';
import Tooltip from './Tooltip.vue';
import Button from '../Button/Button.vue';

const meta: Meta<typeof Tooltip> = {
	title: 'UI Components/Tooltip',
	component: Tooltip,
	args: {
		content: "This is the Tooltip's content",
	},
	argTypes: {
		placement: { control: 'select', options: ['top' , 'top-start' , 'top-end' , 'right' , 'right-start' , 'right-end' , 'bottom' , 'bottom-start' , 'bottom-end' , 'left' , 'left-start' , 'left-end'] },
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
	render: (args) => ({
		components: { Tooltip, Button },
		setup() {
			return { args };
		},
		template: `
		<Tooltip v-bind="args">
			<Button label="Hover me" />
		</Tooltip>`,
	}),
	
};