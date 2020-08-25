module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    // 里面预设很多插件
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y",
    "@storybook/addon-knobs",
    "@storybook/addon-storysource"
  ],
  webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			use: [
				{
          loader: require.resolve("react-docgen-typescript-loader"),
          options: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => {
              if (prop.parent) {
                return !prop.parent.fileName.includes(
                  "node_modules"
                );
              }
              return true;
            },
          },
				},
			],
    });
    // 让doc插件支持ts tsx
		config.resolve.extensions.push(".ts", ".tsx");
		return config;
	},
}