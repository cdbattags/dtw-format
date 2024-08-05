const plugin = {
    meta: {
        name: "eslint-plugin-dtw",
        version: "0.0.1"
    },
    configs: {},
    rules: {},
};

// assign configs here so we can reference `plugin`
Object.assign(plugin.configs, {
    recommended: [{
        plugins: {
            example: plugin
        },
        rules: {
            "example/dollar-sign": "error"
        },
        languageOptions: {
            globals: {
                myGlobal: "readonly"
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        }
    }]
});

// for ESM
export default plugin;
