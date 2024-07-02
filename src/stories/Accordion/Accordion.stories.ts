import type { Meta, StoryObj } from '@storybook/vue3';
import Accordion from './Accordion.vue';

const meta: Meta<typeof Accordion> = {
	title: 'UI Components/Accordion',
	component: Accordion,
	args: {
		label: 'This is a question?'
	},
	argTypes: {
	},
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
	args: {
	},
	render: (args: object) => ({
		components: { Accordion },
		setup() {
			return { args };
		},
		template: `
		<Accordion v-bind="args">
			Lorem ipsum dolor sit amet consectetur. Eu odio et et etiam facilisis mauris dapibus erat. Magna augue rhoncus fames risus netus volutpat enim ut. 
		</Accordion>`,
	}),
};