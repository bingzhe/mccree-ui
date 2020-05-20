/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const cwd = process.cwd();

function getProjectPath(...filePath) {
    return path.join(cwd, ...filePath);
}

module.exports = {
    getProjectPath
};