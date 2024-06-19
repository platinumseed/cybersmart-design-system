import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import Checkbox from './Checkbox.vue';

const meta: Meta<typeof Checkbox> = {
	title: 'Forms/Checkbox',
	component: Checkbox,
	args: {
		label: 'Checkbox Input',
		name: 'demo',
		note: 'Enter your value above',
		modelValue: '',
	},
	argTypes: {
		label: { control: 'text' },
		name: { control: 'text' },
		note: { control: 'text' },
		invalid: { control: 'boolean' },
		valid: { control: 'boolean' },
		invalidMessage: { control: 'text' },
		modelValue: { control: 'text' },
	},
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
	render: (args) => ({
		components: { Checkbox },
		setup() {
			const value = ref(args.modelValue);
			return { args, value };
		},
		template: `<Checkbox v-bind="args" v-model="value" />`,
	}),
};