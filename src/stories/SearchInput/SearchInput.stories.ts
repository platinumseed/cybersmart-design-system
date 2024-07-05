import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import SearchInput from './SearchInput.vue';

const meta: Meta<typeof SearchInput> = {
	title: 'Forms/SearchInput',
	component: SearchInput,
	args: {
		name: 'demo',
		placeholder: 'Search',
		modelValue: '',
	},
	argTypes: {
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
	render: (args) => ({
		components: { SearchInput },
		setup() {
			const value = ref(args.modelValue);
			return { args, value };
		},
		template: `<SearchInput v-bind="args" v-model="value" />`,
	}),
	args: {}
};