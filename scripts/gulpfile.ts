import { withTaskName } from "./utils/gulp";
import { run } from "./utils/process";
import { series } from "gulp";

// const runTask = (name: string) => {
//     withTaskName(name, () => run(`pnpm run build`));
// };

export default series(
    withTaskName("clean", () => run("pnpm run clean"))

    // parallel(
    //     runTask("buildComponent"),
    //     runTask("buildStyle"),
    //     runTask("buildFullBundle"),
    //     runTask("buildHelper"),
    //     withTaskName("buildEachPackages", () =>
    //         run("pnpm run --filter ./packages --parallel --stream build")
    //     )
    // ),

    // parallel(
    //     copyStyle(),
    //     copyFullStyle,
    //     copyEntryTypes,
    //     copySourceCode,
    //     copyREADME,
    //     copyDefinitions
    // )
);
