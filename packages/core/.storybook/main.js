module.exports = {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials', 
    '@storybook/addon-links',
    "@storybook/addon-actions",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ]
}