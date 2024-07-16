import type { Meta, StoryObj } from '@storybook/vue3';
import SectionIntro from './SectionIntro.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof SectionIntro> = {
	title: 'Content/SectionIntro',
	component: SectionIntro,
	args: {
		title: 'Choose Cybersmart for:',
		subtitle: 'smart features',
		description: 'No matter the size of your business or the needs of your company, you need to be connected. Cybersmart has the solution for you.',
	},
	argTypes: {},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => ({
		components: { SectionIntro },
		setup() {
			return { args };
		},
		template: `
			<SectionIntro v-bind="args"></SectionIntro>	
		`,
	}),
};
