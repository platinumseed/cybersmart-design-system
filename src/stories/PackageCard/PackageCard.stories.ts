import type { Meta, StoryObj } from '@storybook/vue3';
import PackageCard from './PackageCard.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof PackageCard> = {
	title: 'Cards/PackageCard',
	component: PackageCard,
	args: {
		title: '80/80 Mps',
		description: 'Uncapped Vumatel Business Fibre',
		cost: 'R000.000 per month',
		ctaLabel: 'Get this',
		ctaUrl: 'https://www.google.com',
	},
	argTypes: {},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => ({
		components: { PackageCard },
		setup() {
			return { args };
		},
		template: `
			<PackageCard v-bind="args" />	
		`,
	}),
};

export const Ribbon: Story = {
	args: {
		ribbonText: 'Best Value',
		ribbonIcon: 'star'
	},
	render: (args) => ({
		components: { PackageCard },
		setup() {
			return { args };
		},
		template: `
			<PackageCard v-bind="args" />	
		`,
	}),
};
