import type { Meta, StoryObj } from '@storybook/vue3';
import PackageCard from './PackageCard.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof PackageCard> = {
	title: 'Cards/PackageCard',
	component: PackageCard,
	args: {
		title: '80/80 Mps',
		description: 'Uncapped Vumatel Business Fibre',
		cost: 'R000.000 per month',
		ctaLabel: 'Get this',
		ctaUrl: '#',
	},
	argTypes: {},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => ({
		components: { PackageCard },
		setup() {
			return { args };
		},
		template: `
			<PackageCard v-bind="args" />	
		`,
	}),
};

export const Ribbon: Story = {
	args: {
		ribbonText: 'Best Value',
		ribbonIcon: 'star'
	},
	render: (args) => ({
		components: { PackageCard },
		setup() {
			return { args };
		},
		template: `
			<PackageCard v-bind="args" />	
		`,
	}),
};

export const MoreInfo: Story = {
	render: (args) => ({
		components: { PackageCard },
		setup() {
			const click = () => {
				console.log('clicked');
			}
			return { args, click };
		},
		template: `
			<PackageCard v-bind="args" @button-clicked="click">
				<template v-slot:moreInfo>
					<div class="text-lg lg:text-lg 2xl:text-base font-light">50Mbps download 50Mbps upload Symmetrical speed Month to Month service Fibre router provided with Wi-Fi 6 Stream 2 movies at the same time</div>
				</template>
			</PackageCard>
		`,
	}),
};

export const PromoInfo: Story = {
	render: (args) => ({
		components: { PackageCard },
		setup() {
			const click = () => {
				console.log('clicked');
			}
			return { args, click };
		},
		template: `
			<PackageCard v-bind="args" @button-clicked="click">
				<template v-slot:promoInfo>
					<div class="text-lg lg:text-lg 2xl:text-base font-light">50Mbps download 50Mbps upload Symmetrical speed Month to Month service Fibre router provided with Wi-Fi 6 Stream 2 movies at the same time</div>
				</template>
			</PackageCard>
		`,
	}),
};

export const Promotion: Story = {
	args: {
		title: 'Home Fibre 100Mbps / 100Mbps',
		ribbonText: 'On Promotion',
		originalCost: 'R605.00',
		cost: 'R499.00 per month',
		costNote: 'Promotional monthly price for the first three months.',
		setupCost: 'R399.00 once-off setup fee',
	},
	render: (args) => ({
		components: { PackageCard },
		setup: () => ({ args }),
		template: `
			<PackageCard v-bind="args">
				<template #moreInfo>
					<p>100Mbps Download / 100Mbps Upload</p>
					<p>Promotional monthly price for the first three months.</p>
				</template>
			</PackageCard>
		`,
	}),
};
