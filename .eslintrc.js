module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },

  plugins: ['vue', 'prettier', 'node', 'import', 'promise'],

  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier/vue',
    'plugin:node/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:promise/recommended'
  ],

  rules: {
    'spaced-comment': ['error', 'always'],
    'no-else-return': ['error', { allowElseIf: false }],
    'no-multi-spaces': ['error', { ignoreEOLComments: false }],
    'no-multi-str': 'error',
    'no-undefined': 'error',
    'handle-callback-err': 'error',
    'no-path-concat': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'no-alert': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    curly: 'error',

    'prettier/prettier': ['error', { singleQuote: true, semi: false }],

    'vue/max-attributes-per-line': 'off',
    'vue/html-closing-bracket-newline': ['error', { multiline: 'always' }],
    'vue/html-closing-bracket-spacing': ['error', { selfClosingTag: 'always' }],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/order-in-components': ['error'],

    'promise/no-nesting': ['error'],
    "import/no-unresolved": "off",

    'node/no-unsupported-features/es-syntax': [
      'error',
      { ignores: ['modules'] }
    ]
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue']
      },
      alias: {
        map: [['@', './']],
        extensions: ['.js', '.vue']
      }
    }
  }
}
