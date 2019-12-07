
const formatRegExp = /%[sdj%]/g;

export const isNativeStringType = (type?: string) => {
    return (
        type === "string" ||
        type === "url" ||
        type === "hex" ||
        type === "email" ||
        type === "pattern"
    );
};

export const isEmptyValue = (value: any, type?: string) => {
    if (value === undefined || value === null) {
        return true;
    }
    if (type === "array" && Array.isArray(value) && !value.length) {
        return true;
    }
    if (isNativeStringType(type) && typeof value === "string" && !value) {
        return true;
    }
    return false;
};

export const convertFieldsError = (errors: any) => {
    if (!errors || !errors.length) return null;
    const fields: any = {};
    errors.forEach((error: any) => {
        const field = error.field;
        fields[field] = fields[field] || [];
        fields[field].push(error);
    });
    return fields;
};

export const format = (...args: any[]) => {
    let i = 1;
    const f = args[0];
    const len = args.length;
    if (typeof f === "function") {
        return f.apply(null, args.slice(1));
    }
    if (typeof f === "string") {
        let str = String(f).replace(
            formatRegExp,
            (x) => {
                if (x === "%%") {
                    return "%";
                }
                if (i >= len) {
                    return x;
                }
                switch (x) {
                    case "%s":
                        return String(args[i++]);
                    // case "%d":
                    //     return Number(args[i++]);
                    case "%j":
                        try {
                            return JSON.stringify(args[i++]);
                        } catch (_) {
                            return "[Circular]";
                        }
                    default:
                        return x;
                }
            }
        );

        for (let arg = args[i]; i < len; arg = args[++i]) {
            str += ` ${arg}`;
        }
        return str;
    }
    return f;
};


export const deepMerge = (target: any, source: any) => {
    if (source) {
        for (const s in source) {
            if (source.hasOwnProperty(s)) {
                const value = source[s];
                if (typeof value === "object" && typeof target[s] === "object") {
                    target[s] = {
                        ...target[s],
                        ...value,
                    };
                } else {
                    target[s] = value;
                }
            }
        }
    }
    return target;
};