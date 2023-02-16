module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  core: {
    builder: 'webpack5',
  },
  addons: [
    '@storybook/addon-essentials', 
    '@storybook/addon-links',
    "@storybook/addon-actions",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  webpackFinal: async (config) => {
    config.optimization.minimize = false;
    return config;
  }
}