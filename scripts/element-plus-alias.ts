import { MC_PKG } from "./utils/constants";
import type { Plugin } from "rollup";

export function ElementPlusAlias(): Plugin {
    //   const THEME_CHALK = `${MC_PKG}/theme-chalk`

    return {
        name: "element-plus-alias-plugin",
        resolveId(id, importer, options) {
            console.log("++++++++++++++++++++")
            console.log(id,importer,options)
            if (!id.startsWith(MC_PKG)) {
                return;
            }

            //   if (id.startsWith(MC_PREFIX)) {
            //     return {
            //       id: id.replaceAll(MC_PREFIX, `${MC_PKG}/theme-chalk`),
            //       external: 'absolute',
            //     }
            //   }

            return this.resolve(id, importer, { skipSelf: true, ...options });
        }
    };
}
