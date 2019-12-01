import { configure, addParameters } from '@storybook/react';

import nextivaTheme from './nextiva-theme';
import './global-styles.scss';

addParameters({
  options: {
    isToolshown: false,
    showAddonPanel: true,
    addonPanelInRight: true,
    theme: nextivaTheme,
  },
});

configure(require.context('../src', true, /\.stories\.js$/), module);
