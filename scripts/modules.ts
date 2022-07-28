import { rollup } from "rollup";
import type { OutputOptions } from "rollup";
import glob from "fast-glob";
import { mcRoot, pkgRoot } from "./utils/paths";
import { excludeFiles } from "./utils/pkg";
import { writeBundles } from "./utils/rollup";
import { buildConfigEntries, target } from "./build-info";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";
import babel from "@rollup/plugin-babel";
import styles from "rollup-plugin-styles";
import { DEFAULT_EXTENSIONS } from "@babel/core";
import { ElementPlusAlias } from "./element-plus-alias";

export const buildModules = async () => {
    // const inputList = [
    //     "components/**/*.{js,ts,tsx}",
    //     "hooks/**/*.{js,ts,tsx}",
    //     "util/**/*.{js,ts,tsx}",
    //     "mccree-ui/**/*.{js,ts,ts}"
    // ];

    
    const input = excludeFiles(
        await glob("**/*.{js,ts,tsx}", {
            cwd: pkgRoot,
            absolute: true,
            onlyFiles: true
        })

        // await glob(inputList, {
        //     cwd: pkgRoot,
        //     absolute: true,
        //     onlyFiles: true
        // })
    );

    const bundle = await rollup({
        input,
        plugins: [
            ElementPlusAlias(),
            styles(), //{ mode: "extract" }
            nodeResolve({
                extensions: [".mjs", ".js", ".json", ".ts"]
            }),
            commonjs(),
            esbuild({ sourceMap: true, target }),
            babel({
                babelHelpers: "runtime",
                extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"]
            })
        ],
        external: ["react", "react-dom"],
        treeshake: false
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
                sourcemap: false,
                entryFileNames: `[name].${config.ext}`
            };
        })
    );
};
