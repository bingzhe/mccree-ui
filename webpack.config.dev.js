/* eslint-disable @typescript-eslint/no-var-requires */
const base = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
    ...base,
    mode: "development",
    entry: {
        index: "./site/index.tsx"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        // new MonacoWebpackPlugin({
        //     languages: ["json", "javascript", "typescript"]
        // }),
    ],
};