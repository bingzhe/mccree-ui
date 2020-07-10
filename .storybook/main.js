const path = require("path");

module.exports = {
    stories: ["../stories/**/*.stories.js", "../stories/**/*.stories.tsx"],
    addons: ["@storybook/addon-actions", "@storybook/addon-links"],
    webpackFinal: async (config) => {
        config.module.rules = config.module.rules.map((rule) => {
            if (
                String(rule.test) ===
                String(
                    /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
                )
            ) {
                return {
                    ...rule,
                    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
                };
            }
            return rule;
        });
        // do mutation to the config
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve("ts-loader")
                },
                // Optional
                {
                    loader: require.resolve("react-docgen-typescript-loader")
                }
            ]
        });

        config.module.rules.push({
            test: /\.svg$/,
            use: ["svg-sprite-loader"]
        });

        config.module.rules.push({
            test: /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"],
            include: [
                path.resolve(__dirname, "../components"),
                path.resolve(__dirname, "../stories")
            ]
        });

        config.resolve.extensions.push(".ts", ".tsx");

        return config;
    }
};
