import type { Meta, StoryObj } from '@storybook/vue3';
import FeatureCard from './FeatureCard.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof FeatureCard> = {
	title: 'Cards/FeatureCard',
	component: FeatureCard,
	args: {
		title: 'Custom Business Packages',
		description: 'No matter the size of your business or the needs of your company, you need to be connected. Cybersmart has the solution for you.',
		icon: 'diamond',
		linkText: 'Learn More',
		linkUrl: '#',
	},
	argTypes: {},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => ({
		components: { FeatureCard },
		setup() {
			return { args };
		},
		template: `
			<FeatureCard v-bind="args"></FeatureCard>	
		`,
	}),
};
