/* eslint-disable @typescript-eslint/no-var-requires */
const base = require("./jest.config");

module.exports = {
    ...base,
    reporters: ["jest-junit"],
    collectCoverage: true,
    collectCoverageFrom: ["lib/**/*.{ts,tsx}", "!**/node_modules/**"],
    coverageDirectory: "coverage",
    coverageReporters: ["text", "lcov"],
};