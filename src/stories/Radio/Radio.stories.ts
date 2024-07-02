import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import Radio from './Radio.vue';

const meta: Meta<typeof Radio> = {
	title: 'Forms/Radio',
	component: Radio,
	args: {
		label: 'Radio Input',
		name: 'demo',
		note: 'Enter your value above',
		modelValue: false,
	},
	argTypes: {
		label: { control: 'text' },
		name: { control: 'text' },
		note: { control: 'text' },
		invalid: { control: 'boolean' },
		invalidMessage: { control: 'text' },
		modelValue: { control: 'text' },
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radio>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
	render: (args) => ({
		components: { Radio },
		setup() {
			const value = ref(args.modelValue);
			return { args, value };
		},
		template: `<Radio v-bind="args" v-model="value" />`,
	}),
};