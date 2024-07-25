import { App } from 'vue';

// Define an interface for the module structure
interface ComponentModule {
  default: any;
}

// Import all components dynamically
const components: Record<string, ComponentModule> = import.meta.glob('./stories/**/*.vue', { eager: true }) as Record<string, ComponentModule>;

// Function to register all components globally
const prefix = 'Ds';
export function registerComponents(app: App): void {
  Object.keys(components).forEach((key) => {
    const componentName = key.split('/').pop()?.replace('.vue', '');
    if (componentName) {
      app.component(`${prefix}${componentName}`, components[key].default);
    }
  });
}

// Optional: Export individual components for specific imports
const exportedComponents = Object.fromEntries(
  Object.entries(components).map(([key, component]) => {
    const componentName = key.split('/').pop()?.replace('.vue', '');
    return componentName ? [componentName, component.default] : [];
  }).filter(Boolean)
);

export default exportedComponents;
