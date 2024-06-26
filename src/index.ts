import { App } from 'vue';
// Import all components
import Button from './stories/Button/Button.vue';
import TextInput from './stories/TextInput/TextInput.vue';
import TextArea from './stories/TextArea/TextArea.vue';
import SelectInput from './stories/SelectInput/SelectInput.vue';
import Checkbox from './stories/Checkbox/Checkbox.vue';
import Radio from './stories/Radio/Radio.vue';
// Add other component imports as needed...

// Function to register all components globally
const prefix = 'Ds';
export function registerComponents(app: App): void {
  app.component(`${prefix}Button`, Button);
  app.component(`${prefix}TextInput`, TextInput);
  app.component(`${prefix}TextArea`, TextArea);
  app.component(`${prefix}SelectInput`, SelectInput);
  app.component(`${prefix}Checkbox`, Checkbox);
  app.component(`${prefix}Radio`, Radio);
  // Register other components...
}

// Optional: Export individual components for specific imports
export { Button };
