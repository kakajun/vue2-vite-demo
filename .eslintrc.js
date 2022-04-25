module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/strongly-recommended', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    strict: 0, // 可选链式操作
    'no-undef': 'off',
    eqeqeq: ['off'], // 强等判断
    'vue/max-attributes-per-line': 'off',
    'vue/require-default-prop': 'off',
    'generator-star-spacing': 'off',
    'no-mixed-operators': 0,
    'vue/attribute-hyphenation': 0,
    'vue/html-self-closing': 0,
    'vue/component-name-in-template-casing': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-unused-components': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/no-parsing-error': 0,
    'no-tabs': 0,
    indent: ['off', 2],
    'no-console': 0,
    'space-before-function-paren': 0,
    'vue/html-indent': 'off',
    'vue/no-mutating-props': 'off',
    'standard/computed-property-even-spacing': 'off',
    'vue/valid-v-bind': 'off'
  }
}
