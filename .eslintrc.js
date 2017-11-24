module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
    es6: true,
    jquery: false,
    jest: true,
    jasmine: true
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017
  },

  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'none',
        printWidth: 120
      }
    ]
  }
};
