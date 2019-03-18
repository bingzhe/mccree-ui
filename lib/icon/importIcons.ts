import RequireContext = __WebpackModuleApi.RequireContext;

let importAll = (requireContext: RequireContext) => requireContext.keys().forEach(requireContext);
try {
    importAll(require.context('../icons/', true, /\.svg$/));
} catch (error) {
}
