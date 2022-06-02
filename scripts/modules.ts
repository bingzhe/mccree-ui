import { rollup } from "rollup";
import type { OutputOptions } from "rollup";
import glob from "fast-glob";
import { mcRoot, pkgRoot, compRoot, hookRoot, utilRoot, iconRoot } from "./utils/paths";
import { excludeFiles } from "./utils/pkg";
import { writeBundles } from "./utils/rollup";
import { buildConfigEntries, target } from "./build-info";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";
import babel from "@rollup/plugin-babel";
import alias from "@rollup/plugin-alias";
import { DEFAULT_EXTENSIONS } from "@babel/core";
// import { ElementPlusAlias } from "./element-plus-alias";

export const buildModules = async () => {
    const inputList = [
        "components/**/*.{js,ts,tsx}",
        "hooks/**/*.{js,ts,tsx}",
        "util/**/*.{js,ts,tsx}"
    ];
    const input = excludeFiles(
        // await glob("**/*.{js,ts,tsx}", {
        //     cwd: pkgRoot,
        //     absolute: true,
        //     onlyFiles: true
        // })

        await glob(inputList, {
            cwd: pkgRoot,
            absolute: true,
            onlyFiles: true
        })
    );

    // ElementPlusAlias(),
    const bundle = await rollup({
        input,
        plugins: [
            alias({
                entries: [
                    { find: "@mccree-ui/components", replacement: compRoot },
                    { find: "@mccree-ui/hooks", replacement: hookRoot },
                    { find: "@mccree-ui/utils", replacement: utilRoot },
                    { find: "@mccree-ui/icons", replacement: iconRoot },

                ]
            }),
            nodeResolve(),
            commonjs(),
            esbuild({ sourceMap: true, target }),
            babel({
                babelHelpers: "runtime",
                extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"]
            })
        ]
    });

    await writeBundles(
        bundle,
        buildConfigEntries.map(([module, config]): OutputOptions => {
            return {
                format: config.format,
                dir: config.output.path,
                exports: module === "cjs" ? "named" : undefined,
                preserveModules: true,
                preserveModulesRoot: mcRoot,
                sourcemap: true,
                entryFileNames: `[name].${config.ext}`
            };
        })
    );
    console.log(input);
};
