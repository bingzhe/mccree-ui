// import RequireContext = __WebpackModuleApi.RequireContext;
// RequireContext

function importAll(requireContext: any) {
    console.log(requireContext.keys());
    requireContext.keys().forEach(requireContext);
}
try {
    importAll(require.context("./icons/", true, /\.svg$/));
} catch (error) {}
