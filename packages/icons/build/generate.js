const fs = require("fs-extra");
const { svgDataFlat } = require("./getSvgData");
const chalk = require("chalk");

// 生成入口文件 start
const syntaxEs = (name) => {
    return `export { default as ${name} } from './react-icon/${name}/index';`;
};

const syntaxCjs = (name) => {
    return `export { default as ${name} } from './react-icon-cjs/${name}/index';`;
};

const entryCode = svgDataFlat.map((svg) => syntaxEs(svg.componentName)).join("\n");
const entryCodeCjs = svgDataFlat.map((com) => syntaxCjs(com.componentName)).join("\n");

fs.outputFile("../index.es.js", entryCode, (err) => {
    if (err) return;
    console.log(chalk.green("Generate es module entry success!"));
});
fs.outputFile("../index.js", entryCodeCjs, (err) => {
    if (err) return;
    console.log(chalk.green("Generate commonjs entry success!"));
});
// 生成入口文件 end

console.log(entryCode);
console.log(entryCodeCjs);
