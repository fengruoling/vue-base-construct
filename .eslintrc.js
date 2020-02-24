module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0 // 函数定义时括号前的空格
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    // 例如：AMap: true
  }
}
