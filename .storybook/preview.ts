import type { Preview } from '@storybook/react';
import '../src/styles/reset.css';
import '../src/styles/variables.css';
import '../src/styles/typography.css';

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