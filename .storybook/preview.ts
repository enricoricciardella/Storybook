import type { Preview } from '@storybook/react'

import '../src/stories/style/reset.css'
import '../src/stories/style/variables.css'
import '../src/stories/style/Typography.css'

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