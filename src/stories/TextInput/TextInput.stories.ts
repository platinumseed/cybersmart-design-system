import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import TextInput from './TextInput.vue';

const meta: Meta<typeof TextInput> = {
	title: 'Forms/TextInput',
	component: TextInput,
	args: {
		label: 'Text Input',
		name: 'demo',
		type: 'text',
		note: 'Enter your value above',
		placeholder: 'Enter your value',
		modelValue: '',
	},
	argTypes: {
		label: { control: 'text' },
		name: { control: 'text' },
		type: { control: 'select', options: ['text', 'password', 'number', 'email', 'date', 'url', 'tel'] },
		note: { control: 'text' },
		icon: { control: 'select', options: ['arrow_forward', 'check_circle'] },
		invalid: { control: 'boolean' },
		valid: { control: 'boolean' },
		invalidMessage: { control: 'text' },
		modelValue: { control: 'text' },
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
	render: (args) => ({
		components: { TextInput },
		setup() {
			const value = ref(args.modelValue);
			return { args, value };
		},
		template: `<TextInput v-bind="args" v-model="value" />`,
	}),
	args: {
		label: 'Text input',
	}
};