module.exports = {
  // 載入story 入口
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    '@storybook/addon-actions',
    // 'storybook-addon-sass-postcss',
    // // '@storybook/preset-scss',
    // {
    //   name: '@storybook/preset-scss',
    //   options: {
    //     cssLoaderOptions: {
    //       modules: { localIdentName: '[name]__[local]--[hash:base64:5]' },
    //     },
    //   },
    // },

    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },

  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
}

// config.module.rules.push({

//   test: /\.scss$/,
  
//   use: ["style-loader", "css-loader", "sass-loader"],
  
//   include: path.resolve(__dirname, "../"), });