/* eslint-disable @typescript-eslint/no-var-requires */
const base = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    ...base,
    mode: "production",
    entry: {
        index: "./site/index.tsx"
    },
    output: {
        path: path.resolve(__dirname, "docs"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
    ],
};