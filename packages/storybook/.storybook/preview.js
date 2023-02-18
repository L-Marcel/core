// .storybook/preview.js
import { themes } from '@storybook/theming';
import '../src/styles/global.css';

export const parameters = {
  docs: {
    theme: themes.dark,
  },
  actions: { 
    argTypesRegex: '^on[A-Z].*' 
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ["Highlight", ["Documentation", "Examples"]], 
    },
  },
  layout: 'padded',
  /*backgrounds: {
    default: 'electric-ribbon',
    values: [
      {
        name: 'electric-ribbon',
        value: `linear-gradient(180deg, ${theme`colors.electric`}, ${theme`colors.ribbon`})`,
      },
    ],
  },*/
  controls: { expanded: true }
}

export const decorators = [
  story => {
    return (
      <>
        {story()}
      </>
    )
  },
]