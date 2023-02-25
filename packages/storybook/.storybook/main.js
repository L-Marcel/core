const path = require("path");

module.exports = {
  staticDirs: ['./public'],
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
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
  framework: "@storybook/react",
  features: {
    previewMdx2: true,
    storyStoreV7: true
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/i,
      use: [
        {
          loader: "postcss-loader",
          options: { implementation: require.resolve("postcss") },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });

    const HtmlWebpackPlugin = require('html-webpack-plugin');

    config.plugins.push(
      new HtmlWebpackPlugin({ title: '@lmarcel / core' }),
    )

    return config;
  }
}