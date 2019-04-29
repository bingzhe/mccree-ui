// eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require("./webpack.config");

module.exports = {
    ...base,
    mode: "production",
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "react",
            root: "React",
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "react-dom",
            root: "ReactDOM",
        },
    }
};