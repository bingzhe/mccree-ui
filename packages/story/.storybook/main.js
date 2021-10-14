const path = require("path");

module.exports = {
    stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
    webpackFinal: async (config) => {
        // config.module.rules = config.module.rules.map((rule) => {
        //     if (
        //         String(rule.test) ===
        //         String(
        //             /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
        //         )
        //     ) {
        //         return {
        //             ...rule,
        //             test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
        //         };
        //     }

        //     return rule;
        // });

        // config.module.rules.push({
        //     test: /\.svg$/,
        //     use: ["svg-sprite-loader"]
        // });

        config.module.rules.push({
            test: /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"],
            include: [
                path.resolve(__dirname, "../../components"),
                path.resolve(__dirname, "../stories")
            ]
        });

        return config;
    }
};
