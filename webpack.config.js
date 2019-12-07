/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

// const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const APP_DIR = path.resolve(__dirname, "./components");
const SITE_DIR = path.resolve(__dirname, "./site");
const MONACO_DIR = path.resolve(__dirname, "./node_modules/monaco-editor");

module.exports = {
    entry: {
        index: "./components/index.tsx"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    output: {
        path: path.resolve(__dirname, "dist/components"),
        library: "RUI",
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
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: "file-loader"
            },
            {
                test: /\.s([ac])ss$/,
                include: [APP_DIR, SITE_DIR],
                loader: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                include: MONACO_DIR,
                loader: ["style-loader", "css-loader"],
            }
        ]
    },
};