export const excludeFiles = (files: string[]) => {
    //TODO
    const excludes = ["node_modules", "test", "mock", "gulpfile", "dist", "icons"];
    return files.filter((path) => !excludes.some((exclude) => path.includes(exclude)));
};
