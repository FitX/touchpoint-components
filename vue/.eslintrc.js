module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // https://github.com/babel/babel-eslint/issues/681
    'template-curly-spacing': 'off',
    // https://github.com/babel/babel-eslint/issues/681
    indent: ['error', 2, {
      ignoredNodes: ['TemplateLiteral'],
    }],
  },
};
