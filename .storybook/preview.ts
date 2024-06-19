import type { Preview } from "@storybook/vue3";
import 'material-symbols/outlined.css';
import '../src/styles/global.css';

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
