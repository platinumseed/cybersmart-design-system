import { App } from 'vue';
// Import all components
import Button from './stories/Button/Button.vue';
// Add other component imports as needed...

// Function to register all components globally
export function registerComponents(app: App): void {
  app.component('MyComponent', Button);
  // Register other components...
}

// Optional: Export individual components for specific imports
export { Button };
