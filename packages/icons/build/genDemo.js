const fs = require("fs-extra");
const nunjucks = require("nunjucks");
const chalk = require("chalk");
const { svgData } = require("./getSvgData");
const maps = require("./maps");

for (const key in svgData) {
    ["outline", "fill", "color"].forEach((type) => {
        if (svgData[key][type]) {
            svgData[key][type].forEach((svg) => {
                delete svg.file;
            });
        }
    });
}
const demoCode = nunjucks.render("./demo.nunjucks.jsx", {
    svgData: JSON.stringify(svgData),
    maps: JSON.stringify(maps)
});

fs.outputFileSync("../demo.js", demoCode);
console.log(chalk.green("Generate Icon Demo Success!"));
