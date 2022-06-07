import { MC_PREFIX } from "./utils/constants";
import type { Plugin } from "rollup";

export function ElementPlusAlias(): Plugin {
    //   const THEME_CHALK = `${MC_PKG}/theme-chalk`

    return {
        name: "element-plus-alias-plugin",
        resolveId(id, importer, options) {
            if (!id.startsWith(MC_PREFIX)) {
                return;
            }

            //   if (id.startsWith(MC_PREFIX)) {
            //     return {
            //       id: id.replaceAll(MC_PREFIX, `${MC_PKG}/theme-chalk`),
            //       external: 'absolute',
            //     }
            //   }
            console.log("+++++++++++")
            console.log(id)
            return this.resolve(id, importer, { skipSelf: true, ...options });
        }
    };
}
