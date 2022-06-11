const { mergeConfig } = require('vite');

module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials"],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    config.plugins.push(require('vite-plugin-svgr')());
    // return the customized config
    return config;
  },
};