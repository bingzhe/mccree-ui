function classes(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ');
}

function scopeClassMaker(prefix: string) {
    return function (name?: string) {
        return [prefix, name].filter(Boolean).join("-");
    }
}

export { scopeClassMaker };
export default classes;