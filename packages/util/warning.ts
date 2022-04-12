export const warning = (valid: boolean, component: string, message: string) => {
    if (process.env.NODE_ENV !== "production" && !valid && console !== undefined) {
        console.error(`Warning: [mccree-ui: ${component}] ${message}`);
    }
};
