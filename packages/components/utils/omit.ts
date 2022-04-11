export function omit<T, K extends keyof T>(obj: T, fields: Array<K | string>): Omit<T, K> {
    const shallowCopy = {
        ...obj
    };
    for (let i = 0; i < fields.length; i++) {
        const key = fields[i];
        delete shallowCopy[key as K];
    }
    return shallowCopy;
}
