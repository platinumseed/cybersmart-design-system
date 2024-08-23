import type { Meta, StoryObj } from '@storybook/vue3';
import Tabs from './Tabs.vue';
import Tab from './Tab.vue';

const meta: Meta<typeof Tabs> = {
	title: 'UI Components/Tabs',
	component: Tabs,
	args: {
		type: 'underline',
	},
	argTypes: {

	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Underline: Story = {
	args: {
		type: 'underline',
	},
	render: (args) => ({
		components: { Tabs, Tab },
		setup() {
			const tabs = [
				{name: 'tab-1', label: 'Tab 1'},
				{name: 'tab-2', label: 'Tab 2'},
				{name: 'tab-3', label: 'Tab 3'},
				{name: 'tab-4', label: 'Tab 4', disabled: true},
			]
			return { tabs, args };
		},
		template: `
			<Tabs v-bind="args">
				<Tab v-for="tab in tabs" :key="tab.name" :label="tab.label" :name="tab.name">
					<h3>{{tab.label}} content here</h3>
				</Tab>
			</Tabs>
		`,
	}),
};

export const Filled: Story = {
	args: {
		type: 'filled',
	},
	render: (args) => ({
		components: { Tabs, Tab },
		setup() {
			return { args };
		},
		template: `
			<Tabs v-bind="args">
				<Tab label="Tab 1" name="tab-1">
					<h3>Tab 1</h3>
				</Tab>
				<Tab label="Tab 2" name="tab-2">
					<h3>Tab 2</h3>
				</Tab>
				<Tab label="Tab 3" name="tab-3">
					<h3>Tab 3</h3>
				</Tab>
				<Tab label="Tab 4" name="tab-4">
					<h3>Tab 4</h3>
				</Tab>
			</Tabs>
		`,
	}),
};