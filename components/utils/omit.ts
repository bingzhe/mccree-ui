type Omit = <T, K extends keyof T>(obj: T, keys: Array<K>) => Pick<T, Exclude<keyof T, K>>

export const omit: Omit = (obj, fields) => {
    const shallowCopy = {
        ...obj
    };
    for (let i = 0; i < fields.length; i++) {
        const key = fields[i];
        delete shallowCopy[key];
    }
    return shallowCopy;
};

