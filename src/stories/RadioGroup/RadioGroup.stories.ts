import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import RadioGroup from './RadioGroup.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof RadioGroup> = {
	title: 'Forms/RadioGroup',
	component: RadioGroup,
	args: {
		layout: 'inline',
		options: [
			{ label: 'Option 1', value: 'value-1' },
			{ label: 'Option 2', value: 'value-2' },
			{ label: 'Option 3', value: 'value-3' },
		],
		name: 'name'
	},
	argTypes: {
		layout: { control: 'select', options: ['inline', 'stacked'] },
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => ({
		components: { RadioGroup },
		setup() {
			const value = ref("value-1");
			const valueChanged = (value: string) => console.log(value);
			return { args, value, valueChanged };
		},
		template: `
			<RadioGroup v-bind="args" v-model="value" @change="valueChanged"></RadioGroup>	
		`,
	}),
	args: {}
};

