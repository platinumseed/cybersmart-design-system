import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
		'@storybook/addon-a11y',
	],
	framework: {
		name: "@storybook/vue3-vite",
		options: {},
	},
	async viteFinal(config) {
		// Add Tailwind CSS PostCSS plugin
		config.css = {
			postcss: {
				plugins: [
					require('tailwindcss'),
					require('autoprefixer'),
				],
			},
		};
		return config;
	},
};
export default config;
