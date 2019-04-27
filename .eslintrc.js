module.exports = {
    parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends: [
        // 'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
        // 'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
        './eslint/react.js',
        './eslint/typescript.js',
    ],
    parserOptions: {
        ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
        sourceType: 'module',  // Allows for the use of imports
        ecmaFeatures: {
            // 不允许 return 语句出现在 global 环境下
            globalReturn: false,
            // 开启全局 script 模式
            impliedStrict: true,
            jsx: true,  // Allows for the parsing of JSX
        },
    },
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true
    },
    // 以当前目录为根目录，不再向上查找 .eslintrc.js
    root: true,
    //指定你所要使用的全局变量，true代表允许重写、false代表不允许重写
    globals: {
        'describe': false,
        'it': false,
        'expect': false,
    },
    rules: {
    },
    settings: {
        react: {
            version: 'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
};