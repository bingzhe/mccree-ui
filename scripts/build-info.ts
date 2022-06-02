import path from "path";
import { mcOutput } from "./utils/paths";
import { MC_PKG } from "./utils/constants";
import type { ModuleFormat } from "rollup";

export const modules = ["esm", "cjs"] as const;
export type Module = typeof modules[number];
export interface BuildInfo {
    module: "ESNext" | "CommonJS";
    format: ModuleFormat;
    ext: "mjs" | "cjs" | "js";
    output: {
        /** eg: `es` */
        name: string; //
        /** eg: `dist/mccree-ui/es` */
        path: string;
    };
    bundle: {
        /** eg: `mccree-ui/es` */
        path: string;
    };
}
export const buildConfig: Record<Module, BuildInfo> = {
    esm: {
        module: "ESNext",
        format: "esm",
        ext: "mjs",
        output: {
            name: "es",
            path: path.resolve(mcOutput, "es")
        },
        bundle: {
            path: `${MC_PKG}/es`
        }
    },
    cjs: {
        module: "CommonJS",
        format: "cjs",
        ext: "js",
        output: {
            name: "lib",
            path: path.resolve(mcOutput, "lib")
        },
        bundle: {
            path: `${MC_PKG}/lib`
        }
    }
};

export const buildConfigEntries = Object.entries(buildConfig) as BuildConfigEntries;

export type BuildConfig = typeof buildConfig;
export type BuildConfigEntries = [Module, BuildInfo][];

export const target = "es2018";
