// require.js looks for the following global when initializing
var require = {
    baseUrl: "../src",
    paths: {
        "crossroads":           "../node_modules/crossroads/dist/crossroads.min",
        "hasher":               "../node_modules/hasher/dist/js/hasher.min",
        "knockout":             "../node_modules/knockout/build/output/knockout-latest",
        "signals":              "../node_modules/signals/dist/signals.min",
        "text":                 "../node_modules/requirejs-text/text"
    },
    //The require.config.js in test expects the shim to be defined
    shim: {}
};
