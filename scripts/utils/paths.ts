import { resolve } from "path";

export const projRoot = resolve(__dirname, "..", "..");
export const pkgRoot = resolve(projRoot, "packages");
export const mcRoot = resolve(pkgRoot, "mccree-ui");
export const compRoot = resolve(pkgRoot, "components");
export const hookRoot = resolve(pkgRoot, "hooks");
export const utilRoot = resolve(pkgRoot, "utils");
export const iconRoot = resolve(pkgRoot, "icons");
// dist
export const buildOutput = resolve(projRoot, "dist");
// dist/mccree-ui
export const mcOutput = resolve(buildOutput, "mccree-ui");
