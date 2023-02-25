import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import './titleAddon';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: "./logo.png"
  },
});