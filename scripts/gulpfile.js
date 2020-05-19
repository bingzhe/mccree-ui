/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @name gulpfile.js
 * @description 打包项目css依赖
 * 参考
 * https://github.com/JeromeLin/dragon-ui/blob/dev/scripts/gulp/gulpfile.js
 */

const path = require("path");
const gulp = require("gulp");
const concat = require("gulp-concat");
const less = require("gulp-less");
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const size = require("gulp-filesize");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const { name } = require("../package.json");

// ts task
const merge2 = require("merge2");
const ts = require("gulp-typescript");
const tsConfig = require("../tsconfig.json");
const argv = require("minimist")(process.argv.slice(2));
const getBabelCommonConfig = require("./getBabelCommonConfig");
const babel = require("gulp-babel");
const through2 = require("through2");
const rimraf = require("rimraf");

const tsDefaultReporter = ts.reporter.defaultReporter();

const browserList = [
    "last 2 versions",
    "Android >= 4.0",
    "Firefox ESR",
    "not ie < 9"
];

const DIR = {
    less: path.resolve(__dirname, "../components/**/*.less"),
    buildSrc: [
        path.resolve(__dirname, "../components/**/styles.less"),
        path.resolve(__dirname, "../components/**/index.less")
    ],
    lib: path.resolve(__dirname, "../lib"),
    es: path.resolve(__dirname, "../es"),
    dist: path.resolve(__dirname, "../dist")
};

const libDir = path.resolve(__dirname, "../lib");
const esDir = path.resolve(__dirname, "../es");

gulp.task("copyLess", () => {
    return gulp
        .src(DIR.less)
        .pipe(gulp.dest(DIR.lib))
        .pipe(gulp.dest(DIR.es));
});

gulp.task("copyCss", () => {
    return gulp
        .src(DIR.buildSrc)
        .pipe(sourcemaps.init())
        .pipe(
            less({
                outputStyle: "compressed"
            })
        )
        .pipe(autoprefixer({ overrideBrowserslist: browserList }))
        .pipe(size())
        .pipe(cssnano())
        .pipe(gulp.dest(DIR.lib))
        .pipe(gulp.dest(DIR.es));
});

gulp.task("dist", () => {
    return gulp
        .src(DIR.buildSrc)
        .pipe(sourcemaps.init())
        .pipe(
            less({
                outputStyle: "compressed"
            })
        )
        .pipe(autoprefixer({ overrideBrowserslist: browserList }))
        .pipe(concat(`${name}.css`))
        .pipe(size())
        .pipe(gulp.dest(DIR.dist))
        .pipe(sourcemaps.write())
        .pipe(rename(`${name}.css.map`))
        .pipe(size())
        .pipe(gulp.dest(DIR.dist))

        .pipe(cssnano())
        .pipe(concat(`${name}.min.css`))
        .pipe(size())
        .pipe(gulp.dest(DIR.dist))
        .pipe(sourcemaps.write())
        .pipe(rename(`${name}.min.css.map`))
        .pipe(size())
        .pipe(gulp.dest(DIR.dist));
});

gulp.task("default", gulp.series("copyLess", "copyCss", "dist"));

function babelify(js, modules) {
    const babelConfig = getBabelCommonConfig(modules);
    delete babelConfig.cacheDirectory;
    // if (modules === false) {
    //     babelConfig.plugins.push(replaceLib);
    // }
    let stream = js.pipe(babel(babelConfig)).pipe(
        through2.obj(function z(file, encoding, next) {
            this.push(file.clone());
            if (file.path.match(/(\/|\\)style(\/|\\)index\.js/)) {
                const content = file.contents.toString(encoding);
                if (content.indexOf("'react-native'") !== -1) {
                    // actually in antd-mobile@2.0, this case will never run,
                    // since we both split style/index.mative.js style/index.js
                    // but let us keep this check at here
                    // in case some of our developer made a file name mistake ==
                    next();
                    return;
                }

                // file.contents = Buffer.from(cssInjection(content));
                file.path = file.path.replace(/index\.js/, "css.js");
                this.push(file);
                next();
            } else {
                next();
            }
        })
    );
    // if (modules === false) {
    //     stream = stream.pipe(
    //         stripCode({
    //             start_comment: "@remove-on-es-build-begin",
    //             end_comment: "@remove-on-es-build-end",
    //         })
    //     );
    // }
    return stream.pipe(gulp.dest(modules === false ? esDir : libDir));
    // return stream.pipe(gulp.dest("lib/"));

}


function compile(modules) {
    rimraf.sync(modules !== false ? libDir : esDir);

    const less = gulp.src(["../components/**/*.less"]).pipe(
        through2.obj(function (file, encoding, next) {
            this.push(file.clone());

            if (
                file.path.match(/(\/|\\)style(\/|\\)index\.less$/) ||
                file.path.match(/(\/|\\)style(\/|\\)v2-compatible-reset\.less$/)
            ) {
                // transformLess(file.path)
                //     .then(css => {
                //         file.contents = Buffer.from(css);
                //         file.path = file.path.replace(/\.less$/, ".css");
                //         this.push(file);
                //         next();
                //     })
                //     .catch(e => {
                //         console.error(e);
                //     });
            } else {
                next();
            }
        })
    );

    let error = 0;
    const source = [
        "../components/**/*.tsx",
        "../components/**/*.ts",
        "../components/**/*.d.ts",
        "!../components/**/__tests__/**",
    ];

    if (tsConfig.compilerOptions.allowJs) {
        source.unshift("components/**/*.jsx");
    }

    const tsResult = gulp.src(source).pipe(
        ts(tsConfig.compilerOptions, {
            error(e) {
                tsDefaultReporter.error(e);
                error = 1;
            },
            finish: tsDefaultReporter.finish
        })
    );


    function check() {
        if (error && argv["ignore-error"]) {
            process.exit(1);
        }
    }

    tsResult.on("finish", check);
    tsResult.on("end", check);


    const tsFilesStream = babelify(tsResult.js, modules);
    const tsd = tsResult.dts.pipe(gulp.dest(modules === false ? esDir : libDir));


    return merge2([tsFilesStream, tsd]);
}

gulp.task(
    "compile-with-es",
    done => {
        console.log("[Parallel] Compile to es ...");
        compile(false).on("finish", done);
    }
);

gulp.task(
    "compile-with-lib",
    done => {
        console.log("[Parallel] Compile to js ...");
        compile().on("finish", done);
    }
);

// gulp.task(
//     "compile",
//     gulp.series(gulp.parallel("compile-with-es"))
// );

const compileTask = gulp.series(gulp.parallel("compile-with-es", "compile-with-lib"));

exports.compile = compileTask;