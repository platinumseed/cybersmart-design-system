import { App, defineComponent } from 'vue';

// Type definition for the modules
interface VueModule {
	default: ReturnType<typeof defineComponent>;
}

// Automatically import all Vue components from the `./stories` directory
const modules = import.meta.glob('./stories/**/*.vue');

const prefix = 'Ds';

// Function to register all components globally
export function registerComponents(app: App): void {
	Object.keys(modules).forEach(async (filePath) => {
		const module = (await modules[filePath]()) as VueModule;
		const component = module.default;

		// Derive component name from the file path, e.g., ./stories/Button/Button.vue -> Button
		const componentName = filePath
			.split('/')
			.pop()!
			.replace(/\.\w+$/, '');

		app.component(`${prefix}${componentName}`, component);
	});
}
