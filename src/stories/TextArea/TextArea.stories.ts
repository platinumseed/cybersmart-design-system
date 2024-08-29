import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import TextArea from './TextArea.vue';

const meta: Meta<typeof TextArea> = {
	title: 'Forms/TextArea',
	component: TextArea,
	args: {
		label: 'Text Input',
		name: 'demo',
		note: 'Enter your value above',
		placeholder: 'Enter your value',
	},
	argTypes: {
		label: { control: 'text' },
		name: { control: 'text' },
		note: { control: 'text' },
		invalid: { control: 'boolean' },
		valid: { control: 'boolean' },
		invalidMessage: { control: 'text' },
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextArea>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
	render: (args) => ({
		components: { TextArea },
		setup() {
			const value = ref('');
			return { args, value };
		},
		template: `<TextArea v-bind="args" v-model="value" />`,
	}),
	args: {
		label: 'Text Area',
	}
};