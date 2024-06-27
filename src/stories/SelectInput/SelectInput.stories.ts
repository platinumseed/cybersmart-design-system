import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import SelectInput from './SelectInput.vue';

const meta: Meta<typeof SelectInput> = {
	title: 'Forms/SelectInput',
	component: SelectInput,
	args: {
		label: 'Select Input',
		options: [
			{ label: 'Option 1', value: 'value-1' },
			{ label: 'Option 2', value: 'value-2' },
			{ label: 'Option 3', value: 'value-3' },
		],
		modelValue: '',
	},
	argTypes: {
		label: { control: 'text' },
		modelValue: { control: 'text' },
	},
};

export default meta;
type Story = StoryObj<typeof SelectInput>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
	render: (args) => ({
		components: { SelectInput },
		setup() {
			const value = ref(args.modelValue);
			return { args, value };
		},
		template: `<SelectInput v-bind="args" v-model="value" />`,
	}),
};