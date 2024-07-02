import type { Meta, StoryObj } from '@storybook/vue3';
import Breadcrumbs from './Breadcrumbs.vue';

const meta: Meta<typeof Breadcrumbs> = {
	title: 'UI Components/Breadcrumbs',
	component: Breadcrumbs,
	args: {
	},
	argTypes: {

	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
	args: {
		breadcrumbs: [
			{label: 'Beadcrumb 1', url: 'https://www.google.com'},
			{label: 'Beadcrumb 2', url: 'https://www.google.com'},
			{label: 'Beadcrumb 3', url: 'https://www.google.com'},
		]
	},
};
