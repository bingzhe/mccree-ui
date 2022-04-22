const fs = require("fs");
const path = require("path");

//TODO  这里的来源可能需要修改
const svgs = ["direction", "tips"];

const svgData = {};
const svgDataPure = {};
const svgDataFlat = [];

function getCamelString(name) {
    return `Icon${name
        .replace(/-([a-zA-Z])/g, (g) => g[1].toUpperCase())
        .replace(/^./, (g) => g.toUpperCase())}`;
}

svgs.forEach((svg) => {
    const rootPath = path.resolve(__dirname, "../svgs", svg);

    if (fs.lstatSync(rootPath).isDirectory()) {
        const dir = fs.readdirSync(path.resolve(rootPath));

        svgData[svg] = {};
        svgDataPure[svg] = {};

        const dirData = {};
        const dirDataPure = {};

        dir.forEach((d) => {
            const files = fs.readdirSync(path.resolve(rootPath, d));

            function setDirData(dd, pure) {
                dd[d] = files
                    .map((file) => {
                        if (file === ".DS_Store") {
                            return "";
                        }

                        const name = file.slice(0, -4);

                        const data = {
                            name,
                            componentName: getCamelString(name),
                            file: path.resolve(rootPath, d, file)
                        };

                        if (pure) {
                            delete data.name;
                            delete data.file;
                        }

                        if (!pure) {
                            svgDataFlat.push(data);
                        }

                        return data;
                    })
                    .filter((x) => x);
                return dd[d];
            }

            setDirData(dirData);
            setDirData(dirDataPure, true);
            svgData[svg] = dirData;
            svgDataPure[svg] = dirDataPure;
        });
    }
});

module.exports = {
    svgData,
    svgDataPure,
    svgDataFlat
};
