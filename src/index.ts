import { App } from 'vue';
// Import all components
import Button from './stories/Button/Button.vue';
import TextInput from './stories/TextInput/TextInput.vue';
// Add other component imports as needed...

// Function to register all components globally
const prefix = 'Ds';
export function registerComponents(app: App): void {
  app.component(`${prefix}Button`, Button);
  app.component(`${prefix}TextInput`, TextInput);
  // Register other components...
}

// Optional: Export individual components for specific imports
export { Button };
