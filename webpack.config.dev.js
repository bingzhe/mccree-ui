/* eslint-disable @typescript-eslint/no-var-requires */
const base = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    ...base,
    mode: "development",
    entry: {
        index: "./site/example.tsx"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ],
};