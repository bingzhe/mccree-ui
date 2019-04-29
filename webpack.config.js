/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
    entry: {
        index: "./lib/index.tsx"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    output: {
        path: path.resolve(__dirname, "dist/lib"),
        library: "FUI",
        libraryTarget: "umd",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.svg$/,
                loader: "svg-sprite-loader"
            },
            {
                test: /\.s([ac])ss$/,
                loader: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
};