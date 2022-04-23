import { series } from "gulp";
import rimraf from "rimraf";

const clean = (done) => {
    rimraf.sync("./src");
    rimraf.sync("./inline-svg");
    rimraf.sync("./es");
    rimraf.sync("./lib");
    done();
};

export default series(clean);
