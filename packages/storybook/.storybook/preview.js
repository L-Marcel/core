export const parameters = {
  actions: { 
    argTypesRegex: '^on[A-Z].*' 
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
  controls: { expanded: true },
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