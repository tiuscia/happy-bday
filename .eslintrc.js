const os = require('os');

const options = {
    extends: [
        'airbnb',
        'prettier',
        'prettier/react',
        'plugin:jest/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended'
    ],
    plugins: ['prettier', 'jest', 'react'],
    env: {
        node: true,
        'jest/globals': true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2018
    },
    rules: {
        'no-alert': 'error',
        'no-eq-null': 'error',
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/label-has-associated-control': 'error',
        'no-useless-call': 'error',
        'prefer-promise-reject-errors': 'error',
        'react/prop-types': 'error',
        'react/require-default-props': 'error',
        'react/button-has-type': 'error',
        'no-underscore-dangle': 'error',
        'linebreak-style': os.EOL === '\n' ? ['error', 'unix'] : 'off',
        'react/jsx-no-bind': [
            'error',
            {
                ignoreDOMComponents: false,
                allowArrowFunctions: false,
                allowFunctions: false,
                allowBind: false
            }
        ],
        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: false
            }
        ],
        'no-use-before-define': [
            'error',
            {
                functions: true,
                classes: true,
                variables: true
            }
        ],
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: true
        }],
        'import/imports-first': ['error', 'absolute-first'],
        'import/extensions': [
            'always',
            'ignorePackages',
            {
                js: 'always'
            },
            {
                jsx: 'always'
            }
        ]
    },
    globals: {
        window: true,
        document: true,
        localStorage: true,
        FormData: true,
        FileReader: true,
        Blob: true,
        navigator: true
    },
    parser: 'babel-eslint'
};

module.exports = options;