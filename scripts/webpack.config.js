/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @name UMD 模块 打包
 * @description 这里选择  webpack 进行打包  rollup也可以
 * @description 输出目录 [dist]
 * @description 文件名 [cuke-ui]
 * CMD Node.js 环境
 * AMD 浏览器环境
 * UMD 两种环境都可以执行
 */

const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackMerge = require("webpack-merge");
const WebpackBar = require("webpackbar");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const { version, name, description } = require("../package.json");
const autoprefixer = require("autoprefixer");

const babelConfig = require("./getBabelCommonConfig")();

const LOGO = `
  _____ ______   ________  ________  ________  _______   _______                  ___  ___  ___
 |\\   _ \\  _   \\|\\   ____\\|\\   ____\\|\\   __  \\|\\  ___ \\ |\\  ___ \\                |\\  \\|\\  \\|\\  \\
 \\ \\  \\\\\\__\\ \\  \\ \\  \\___|\\ \\  \\___|\\ \\  \\|\\  \\ \\   __/|\\ \\   __/|   ____________\\ \\  \\\\\\  \\ \\  \\
  \\ \\  \\\\|__| \\  \\ \\  \\    \\ \\  \\    \\ \\   _  _\\ \\  \\_|/_\\ \\  \\_|/__|\\____________\\ \\  \\\\\\  \\ \\  \\
   \\ \\  \\    \\ \\  \\ \\  \\____\\ \\  \\____\\ \\  \\\\  \\\\ \\  \\_|\\ \\ \\  \\_|\\ \\|____________|\\ \\  \\\\\\  \\ \\  \\
    \\ \\__\\    \\ \\__\\ \\_______\\ \\_______\\ \\__\\\\ _\\\\ \\_______\\ \\_______\\              \\ \\_______\\ \\__\\
     \\|__|     \\|__|\\|_______|\\|_______|\\|__|\\|__|\\|_______|\\|_______|               \\|_______|\\|__|
     
`;

const config = {
    // mode: "production",
    // entry: {
    //     [name]: ["../index"]
    //     // [`${name}.min`]: ["../index"],
    // },
    devtool: "source-map",
    // umd 模式打包
    output: {
        library: name,
        libraryTarget: "umd",
        umdNamedDefine: true, // 是否将模块名称作为 AMD 输出的命名空间
        path: path.join(process.cwd(), "../dist"),
        filename: "[name].js"
    },

    // react 和 react-dom 不打包
    externals: {
        react: {
            root: "React",
            commonjs2: "react",
            commonjs: "react",
            amd: "react"
        },
        "react-dom": {
            root: "ReactDOM",
            commonjs2: "react-dom",
            commonjs: "react-dom",
            amd: "react-dom"
        }
    },

    resolve: {
        enforceExtension: false,
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".less", ".css"]
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: babelConfig
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: babelConfig
                    },
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "svg-sprite-loader"
                    }
                ]
            },
            {
                test: /\.js[x]?$/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ],
                exclude: "/node_modules/",
                include: [path.resolve("components")]
            },
            {
                test: /\.(le|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [autoprefixer()],
                            sourceMap: false
                        }
                    },
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|cur|ico)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[name][hash:8].[ext]" // 遇到图片  生成一个images文件夹  名字.后缀的图片
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
                uglifyOptions: {
                    warnings: false,
                    compress: {
                        drop_debugger: true,
                        drop_console: false
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({
                // 压缩css  与 ExtractTextPlugin 配合使用
                cssProcessor: require("cssnano"),
                cssProcessorOptions: { discardComments: { removeAll: true } }, // 移除所有注释
                canPrint: true // 是否向控制台打印消息
            })
        ],
        noEmitOnErrors: true
    },
    plugins: [
        new WebpackBar({
            name: "🚚 dist",
            color: "#2f54eb"
        }),
        // 在打包的文件之前 加上版权说明
        new webpack.BannerPlugin(
            ` \n ${name} v${version} \n ${description} \n ${LOGO}\n ${fs.readFileSync(
                path.join(process.cwd(), "../LICENSE")
            )} `
        )
    ]
};

// Development
const uncompressedConfig = webpackMerge({}, config, {
    entry: {
        [name]: ["../index"]
    },
    mode: "development",
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ]
});

// Production
const prodConfig = webpackMerge({}, config, {
    entry: {
        [`${name}.min`]: ["../index"]
    },
    mode: "production",
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static",
            openAnalyzer: false
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production"),
            __DEBUG__: false
        })
    ],
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})]
    }
});

module.exports = [prodConfig, uncompressedConfig];
