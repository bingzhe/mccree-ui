import { resolve } from "path";

export const projRoot = resolve(__dirname, "..", "..");
export const pkgRoot = resolve(projRoot, "packages");
export const mcRoot = resolve(pkgRoot, "mccree-ui");

// dist
export const buildOutput = resolve(projRoot, "dist");
// dist/mccree-ui
export const mcOutput = resolve(buildOutput, "mccree-ui");
