import { App } from 'vue';
// Import all components
import Tabs from './stories/Tabs/Tabs.vue';
import StatusMessage from './stories/StatusMessage/StatusMessage.vue';
import Carousel from './stories/Carousel/Carousel.vue';
import Breadcrumbs from './stories/Breadcrumbs/Breadcrumbs.vue';
import Badge from './stories/Badge/Badge.vue';
import Accordion from './stories/Accordion/Accordion.vue';
import Button from './stories/Button/Button.vue';
import TextInput from './stories/TextInput/TextInput.vue';
import TextArea from './stories/TextArea/TextArea.vue';
import SelectInput from './stories/SelectInput/SelectInput.vue';
import Checkbox from './stories/Checkbox/Checkbox.vue';
import Radio from './stories/Radio/Radio.vue';
import Tooltip from './stories/Tooltip/Tooltip.vue';
import Toast from './stories/Toast/Toast.vue';
import Logo from './stories/Logo/Logo.vue';
import SearchInput from './stories/SearchInput/SearchInput.vue';
// Add other component imports as needed...

// Function to register all components globally
const prefix = 'Ds';
export function registerComponents(app: App): void {
  app.component(`${prefix}Tabs`, Tabs);
  app.component(`${prefix}StatusMessage`, StatusMessage);
  app.component(`${prefix}Carousel`, Carousel);
  app.component(`${prefix}Breadcrumbs`, Breadcrumbs);
  app.component(`${prefix}Badge`, Badge);
  app.component(`${prefix}Accordion`, Accordion);
  app.component(`${prefix}Button`, Button);
  app.component(`${prefix}TextInput`, TextInput);
  app.component(`${prefix}TextArea`, TextArea);
  app.component(`${prefix}SelectInput`, SelectInput);
  app.component(`${prefix}Checkbox`, Checkbox);
  app.component(`${prefix}Radio`, Radio);
  app.component(`${prefix}Tooltip`, Tooltip);
  app.component(`${prefix}Toast`, Toast);
  app.component(`${prefix}Logo`, Logo);
  app.component(`${prefix}SearchInput`, SearchInput);
  // Register other components...
}

// Optional: Export individual components for specific imports
export { Button };