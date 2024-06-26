import type { Preview } from "@storybook/vue3";
import '../src/styles/global.css';

//Shoelace
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '../node_modules/@shoelace-style/shoelace/dist/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.1/cdn/');

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
