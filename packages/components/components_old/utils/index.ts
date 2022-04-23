export const isObject = (item: any): boolean => {
    return !!item && typeof item === "object" && !Array.isArray(item);
};

export const deepMerge = <T extends object>(target: T, ...sources: T[]): T => {
    if (!sources.length) {
        return target;
    }

    const source = sources.shift();

    if (source === undefined) {
        return target;
    }

    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach((key) => {
            if (isObject((source as any)[key])) {
                if (!(target as any)[key]) {
                    Object.assign(target, { [key]: {}});
                }
                deepMerge((target as any)[key], (source as any)[key]);

            } else {
                Object.assign(target, { [key]: (source as any)[key] });
            }
        });
    }

    return deepMerge(target, ...sources);
};