import type { Meta, StoryObj } from '@storybook/vue3';
import FeatureList from './FeatureList.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof FeatureList> = {
	title: 'Content/FeatureList',
	component: FeatureList,
	args: {
		featureItems: [
			'Feature 1',
			'Feature 2',
			'Feature 3',
			'Feature 4',
			'Feature 5',
		]
	},
	argTypes: {},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => ({
		components: { FeatureList },
		setup() {
			return { args };
		},
		template: `
			<FeatureList v-bind="args"></FeatureList>	
		`,
	}),
};
