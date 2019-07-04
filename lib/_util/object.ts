
export const isObject = (item: any) => {
    item && typeof item === "object" && !Array.isArray(item);
};

// export const deepFreeze = (obj: object) => {
//     Object.keys(obj).forEach((key: string) => {
//         return key && isObject(obj[key]) && Object.freeze(obj[key]);
//     });
//     return Object.freeze(obj);
// };