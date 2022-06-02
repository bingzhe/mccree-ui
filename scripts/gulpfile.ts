import { series, parallel } from "gulp";
import { withTaskName, runTask } from "./utils/gulp";
import { mcOutput } from "./utils/paths";
import { run } from "./utils/process";
import { mkdir } from "fs/promises";

export default series(
    withTaskName("clean", () => run("pnpm run clean")),
    withTaskName("createOutput", () => mkdir(mcOutput, { recursive: true })),

    parallel(
        runTask("buildModules")
        // runTask("buildStyle"),
        // runTask("buildFullBundle"),
        // runTask("buildHelper"),
        // withTaskName("buildEachPackages", () =>
        //     run("pnpm run --filter ./packages --parallel --stream build")
        // )
    )
    // parallel(
    //     copyStyle(),
    //     copyFullStyle,
    //     copyEntryTypes,
    //     copySourceCode,
    //     copyREADME,
    //     copyDefinitions
    // )
);

export * from "./modules";
