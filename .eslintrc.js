module.exports = {
    env: {
        es6: true,
        node: true,
    },
    parser: "@babel/eslint-parser",
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "requireConfigFile": false,
        "babelOptions": {
            "presets": ["@babel/preset-react"],
          },
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
};
