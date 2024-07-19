import type { Meta, StoryObj } from '@storybook/vue3';
import {ref} from 'vue';
import Modal from './Modal.vue';
import Button from '../Button/Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof Modal> = {
	title: 'Cards/Modal',
	component: Modal,
	args: {

	},
	argTypes: {},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => ({
		components: { Modal, Button },
		setup() {
			const showModal = ref<boolean>(false);
			const open = () => {
				showModal.value = true;
			}
			return { args, open, showModal };
		},
		template: `
			<Modal ref="modal" v-bind="args" :open="showModal"></Modal>
			<Button label="Open" @click="open" />
		`,
	}),
};
